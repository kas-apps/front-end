# Lesson 7：最終調整とリファクタリング - コード解説

**コード規模**：約800行（JavaScript）
**改善内容**：イベントデリゲーション、関数分割、JSDocコメント、アクセシビリティ改善

---

## ファイル構成

```text
code/
├── README.md        # このファイル
├── index.html       # HTML（約350行）ARIA属性追加
├── styles.css       # CSS（約240行）Lesson 6と同じ
└── script.js        # JavaScript（約800行）大幅リファクタリング
```

---

## Lesson 6からの主な変更点

### 1. 定数の整理と追加

**Before（Lesson 6）**：

```javascript
const STORAGE_KEY = 'card-todo-tasks';
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;
const TOAST_DURATION = 3000;
```

**After（Lesson 7）**：

```javascript
// 基本定数
const STORAGE_KEY = 'card-todo-tasks';
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;
const TOAST_DURATION = 3000;
const DEBOUNCE_DELAY = 300;
const LOADING_DELAY = 500;

// フィルター種別の定義
const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

// カテゴリ種別の定義
const CATEGORY = {
  ALL: 'all',
  WORK: 'work',
  PERSONAL: 'personal',
  SHOPPING: 'shopping',
};

// 優先度の定義と値
const PRIORITY = {
  HIGH: { value: 'high', weight: 3, icon: '🔴', label: '高' },
  MEDIUM: { value: 'medium', weight: 2, icon: '🟡', label: '中' },
  LOW: { value: 'low', weight: 1, icon: '🟢', label: '低' },
};

// カテゴリアイコンのマッピング
const CATEGORY_ICONS = {
  [CATEGORY.WORK]: '💼',
  [CATEGORY.PERSONAL]: '🏠',
  [CATEGORY.SHOPPING]: '🛒',
};
```

**メリット**：

- マジックナンバー/文字列を完全に排除
- 優先度の重みをオブジェクトで管理（拡張しやすい）
- カテゴリアイコンをマッピングで管理

### 2. イベントデリゲーションの導入

**Before（Lesson 6）**：

```javascript
// HTMLに直接onclickを記述
function generateTaskCard(task) {
  return `
    <button onclick="startEdit(${task.id})">✏️ 編集</button>
    <button onclick="deleteTask(${task.id})">🗑️ 削除</button>
  `;
}
```

**After（Lesson 7）**：

```javascript
// HTMLにdata属性を追加
function generateTaskCard(task) {
  return `
    <button class="edit-btn" data-task-id="${task.id}">✏️ 編集</button>
    <button class="delete-btn" data-task-id="${task.id}">🗑️ 削除</button>
  `;
}

// 親要素で一括処理（イベントデリゲーション）
function handleTaskListClick(event) {
  const target = event.target;

  // 編集ボタンのクリック
  if (target.classList.contains('edit-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    startEdit(taskId);
    return;
  }

  // 削除ボタンのクリック
  if (target.classList.contains('delete-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    deleteTask(taskId);
    return;
  }
}

// 初期化時に1回だけリスナーを登録
taskListElement.addEventListener('click', handleTaskListClick);
```

**メリット**：

- **パフォーマンス向上**：各カードにイベントリスナーを設定しない
- **メモリ効率**：リスナーが1つだけ
- **メンテナンス性**：イベント処理が一箇所に集約

### 3. 関数の分割と整理

**Before（Lesson 6）**：

```javascript
// renderTasks()が多くの処理を含む
function renderTasks() {
  const processedTasks = getProcessedTasks();

  if (processedTasks.length === 0) {
    taskListElement.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <!-- 空状態のHTML -->
      </div>
    `;
    return;
  }

  const html = processedTasks.map(/* ... */).join('');
  taskListElement.innerHTML = html;

  // 統計更新
  totalCountElement.textContent = tasks.length;
  // ...
}
```

**After（Lesson 7）**：

```javascript
// 各処理を別関数に分割
function renderTasks() {
  const processedTasks = getProcessedTasks();

  if (processedTasks.length === 0) {
    renderEmptyState(); // ← 空状態描画を分離
  } else {
    noTasksMessage.style.display = 'none';
    renderTaskList(processedTasks); // ← リスト描画を分離
  }

  updateStats(); // ← 統計更新を分離
}

function renderEmptyState() {
  taskListElement.innerHTML = '';
  noTasksMessage.style.display = 'block';
}

function renderTaskList(taskList) {
  const html = taskList
    .map((task) => {
      return editingTaskId === task.id
        ? generateEditForm(task)
        : generateTaskCard(task);
    })
    .join('');

  taskListElement.innerHTML = html;
}

function updateStats() {
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const incompleteCount = totalCount - completedCount;

  totalCountElement.textContent = totalCount;
  completedCountElement.textContent = completedCount;
  incompleteCountElement.textContent = incompleteCount;
}
```

**メリット**：

- **単一責任の原則**：各関数が1つのことだけをする
- **再利用性**：`updateStats()`を他の場所でも使える
- **可読性**：関数名を見るだけで何をするか分かる

### 4. JSDocコメントの追加

**Before（Lesson 6）**：

```javascript
// コメントなし、またはシンプルなコメント
function saveToLocalStorage() {
  // ...
}
```

**After（Lesson 7）**：

```javascript
/**
 * タスクをLocalStorageに保存
 * @throws {Error} 容量不足の場合
 */
function saveToLocalStorage() {
  // ...
}

/**
 * フィルターを適用
 * @param {Array} taskList - タスクのリスト
 * @returns {Array} フィルターされたタスクのリスト
 */
function applyFilters(taskList) {
  // ...
}

/**
 * トースト通知を表示
 * @param {string} message - 表示するメッセージ
 * @param {string} type - トーストの種類（success, error, info, warning）
 * @param {number} duration - 表示時間（ミリ秒、デフォルト：3000）
 */
function showToast(message, type = 'info', duration = TOAST_DURATION) {
  // ...
}
```

**メリット**：

- **ドキュメント化**：関数の目的、引数、戻り値が明確
- **IDE サポート**：VSCodeなどで引数の補完が効く
- **保守性**：後から見ても何をする関数か分かる

### 5. コードの論理的な順序

**構成**：

```javascript
// 1. 定数定義
const STORAGE_KEY = '...';
const FILTER = { ... };

// 2. DOM要素の取得
const taskForm = document.getElementById('task-form');

// 3. グローバル変数
let tasks = [];
let editingTaskId = null;

// 4. ユーティリティ関数
function escapeHTML(str) { ... }
function debounce(func, delay) { ... }

// 5. UI関連の関数
function showLoading() { ... }
function showToast(...) { ... }

// 6. LocalStorage関連の関数
function saveToLocalStorage() { ... }
function loadFromLocalStorage() { ... }

// 7. フィルター・検索・ソート関連の関数
function applyFilters(taskList) { ... }
function applySearch(taskList) { ... }

// 8. タスク操作関連の関数
function handleAddTask(e) { ... }
function deleteTask(taskId) { ... }

// 9. 描画関連の関数
function generateTaskCard(task) { ... }
function renderTasks() { ... }

// 10. イベントハンドラー
function handleTaskListClick(event) { ... }

// 11. 初期化
function init() { ... }
document.addEventListener('DOMContentLoaded', init);
```

**メリット**：

- **読みやすい**：上から順に読んでいける
- **見つけやすい**：関連する関数が近くにある
- **拡張しやすい**：どこに何を追加すべきか明確

### 6. アクセシビリティの改善（HTML）

**追加されたARIA属性**：

```html
<!-- ローディング -->
<div
  id="loading"
  role="status"
  aria-live="polite"
  aria-label="読み込み中"
></div>

<!-- トーストコンテナ -->
<div
  id="toast-container"
  role="region"
  aria-live="polite"
  aria-label="通知"
></div>

<!-- ヘッダー -->
<header role="banner">...</header>

<!-- メインコンテンツ -->
<main role="main">...</main>

<!-- フッター -->
<footer role="contentinfo">...</footer>

<!-- フォーム -->
<form role="form" aria-label="新しいタスクを追加">
  <input
    type="text"
    id="task-title"
    aria-label="タスクのタイトル"
    aria-required="true"
    required
  />
</form>

<!-- フィルターボタン -->
<div role="group" aria-label="ステータスフィルター">
  <button
    data-filter="all"
    aria-label="すべてのタスクを表示"
    aria-pressed="true"
  >
    すべて
  </button>
</div>

<!-- タスクリスト -->
<div id="task-list" role="list" aria-label="タスク一覧">
  <div class="card" role="listitem">...</div>
</div>

<!-- チェックボックス -->
<input
  type="checkbox"
  class="task-checkbox"
  aria-label="タスク「買い物」を完了する"
/>

<!-- ボタン -->
<button
  class="edit-btn"
  data-task-id="123"
  aria-label="タスク「買い物」を編集"
>
  ✏️ 編集
</button>
```

**メリット**：

- **スクリーンリーダー対応**：視覚障害者も使える
- **キーボードナビゲーション**：マウスなしで操作可能
- **WCAG 2.1準拠**：アクセシビリティ標準に準拠

---

## パフォーマンス最適化の詳細

### イベントデリゲーションによる改善

**Before（100タスクの場合）**：

- タスクカード1つにつき2つのイベントリスナー（編集、削除）
- 合計：100タスク × 2 = **200個のイベントリスナー**

**After（100タスクの場合）**：

- タスクリスト全体に1つのイベントリスナー
- 合計：**1個のイベントリスナー**

**効果**：

- メモリ使用量が大幅に削減
- レンダリングのパフォーマンスが向上
- ガベージコレクションの負荷が減少

### デバウンスによる検索最適化

**Before（デバウンスなし）**：

```text
ユーザー入力："ToDo"
↓
T → renderTasks()が実行（1文字目）
To → renderTasks()が実行（2文字目）
ToD → renderTasks()が実行（3文字目）
ToDo → renderTasks()が実行（4文字目）

合計：4回のレンダリング
```

**After（デバウンス300ms）**：

```text
ユーザー入力："ToDo"
↓
T → タイマー開始（300ms待機）
To → タイマーリセット（300ms待機）
ToD → タイマーリセット（300ms待機）
ToDo → タイマーリセット（300ms待機）
入力停止 → 300ms後にrenderTasks()が実行

合計：1回のレンダリング
```

**効果**：

- レンダリング回数が激減
- CPUリソースの節約
- ユーザー体験の向上（スムーズな入力）

---

## コードの品質指標

### 関数の複雑度

| 関数名             | Lesson 6 | Lesson 7 | 改善 |
| ------------------ | -------- | -------- | ---- |
| renderTasks()      | 25行     | 10行     | ✅   |
| generateTaskCard() | 60行     | 70行     | -    |
| init()             | 10行     | 35行     | -    |

**説明**：

- `renderTasks()`は複雑な処理を分割して簡潔に
- `generateTaskCard()`はARIA属性追加で若干増加（品質向上）
- `init()`はイベントリスナー登録が増えたため増加（機能向上）

### コメント率

- **Lesson 6**：約5%（30行/630行）
- **Lesson 7**：約15%（120行/800行）

**効果**：

- 可読性が大幅に向上
- 新しい開発者が理解しやすい

### 関数の平均行数

- **Lesson 6**：約30行/関数
- **Lesson 7**：約15行/関数

**効果**：

- 単一責任の原則に準拠
- テストしやすい
- 再利用しやすい

---

## ブラウザ互換性

### 確認済みブラウザ

```text
✅ Chrome 90+ （最新版）
✅ Firefox 88+ （最新版）
✅ Safari 14+ （最新版、-webkit-backdrop-filter対応）
✅ Edge 90+ （最新版）
```

### Safari対応

```css
#loading {
  -webkit-backdrop-filter: blur(4px); /* Safari対応 */
  backdrop-filter: blur(4px);
}
```

---

## 使い方

### 1. ファイルを開く

```bash
# index.htmlをブラウザで開く
open index.html
```

### 2. 基本操作

#### タスクの追加

1. フォームにタイトルを入力
2. （任意）説明、優先度、カテゴリ、締切日を入力
3. 「タスクを追加」ボタンをクリック
4. トースト通知で追加完了を確認

#### タスクの編集

1. カードの「編集」ボタンをクリック
2. インライン編集フォームが表示される
3. 値を変更
4. 「保存」をクリック（または「キャンセル」で中止）

#### タスクの完了/未完了切り替え

- チェックボックスをクリック
- トースト通知で変更を確認

#### タスクの削除

- 「削除」ボタンをクリック
- トースト通知で削除を確認

#### フィルター

- **ステータス**：すべて/未完了/完了
- **カテゴリ**：すべて/仕事/プライベート/買い物
- 両方を同時に適用可能

#### ソート

- 作成日順（新しい順/古い順）
- 優先度順（高→低/低→高）
- 締切日順（近い順/遠い順）

#### 検索

- 検索ボックスにキーワードを入力
- タイトルと説明を対象に検索
- デバウンス（300ms）で最適化

### 3. キーボード操作

```text
Tab         : 次の要素にフォーカス
Shift+Tab   : 前の要素にフォーカス
Enter       : ボタンをクリック/フォーム送信
Escape      : 編集をキャンセル
Space       : チェックボックスの切り替え
```

### 4. データの永続化

- ページをリロード（F5）してもデータが残る
- LocalStorageに自動保存
- 最大5MB（約5000タスク）まで保存可能

---

## トラブルシューティング

### Q1: イベントが発火しない

**A**: ブラウザのコンソールを確認してください。

```javascript
// コンソールで実行
console.log('Task list element:', taskListElement);

// クリックイベントが登録されているか確認
getEventListeners(taskListElement);
```

### Q2: タスクが保存されない

**A**: LocalStorageが有効か確認してください。

```javascript
// コンソールで実行
try {
  localStorage.setItem('test', 'value');
  console.log('LocalStorage: 有効');
} catch (error) {
  console.error('LocalStorage: 無効', error);
}
```

### Q3: ARIA属性が効かない

**A**: スクリーンリーダーを有効にして確認してください。

- **Mac**：VoiceOver（Command + F5）
- **Windows**：NVDA（無料）またはJAWS（有料）

---

## コードレビューのチェックポイント

### ✅ コードの整理

```javascript
// ✅ 関数は1つのことだけをする
function renderTaskList(tasks) { /* タスクリストを描画するだけ */ }

// ✅ 関数名は動詞で始まる
function deleteTask(taskId) { /* 削除する */ }
function renderTasks() { /* 描画する */ }

// ✅ 変数名は意味が分かる
let filteredTasks = [];  // Good
let tmp = [];  // Bad

// ✅ マジックナンバー/文字列を避ける
if (title.length > MAX_TITLE_LENGTH) { /* Good */ }
if (title.length > 100) { /* Bad */ }
```

### ✅ パフォーマンス

```javascript
// ✅ イベントデリゲーションを使う
taskListElement.addEventListener('click', handleTaskListClick);

// ✅ デバウンスで不要な処理を減らす
const handleSearchInput = debounce((event) => {
  setSearchKeyword(event.target.value);
}, DEBOUNCE_DELAY);
```

### ✅ アクセシビリティ

```html
<!-- ✅ ボタンにaria-labelがある -->
<button aria-label="タスクを削除">🗑️ 削除</button>

<!-- ✅ フォームにroleがある -->
<form role="form" aria-label="新しいタスクを追加"></form>

<!-- ✅ 入力欄にaria-requiredがある -->
<input type="text" aria-required="true" />
```

---

## 次のステップ

### Lesson 8へ

このリファクタリング済みコードを参考に、Lesson 8では以下のプロジェクトに挑戦しよう！

1. **習慣トラッカー**
2. **買い物リスト**
3. **勉強記録アプリ**
4. **読書管理アプリ**
5. **家計簿アプリ**

### さらなる改善案

1. **モジュール分割**

   ```text
   - storage.js（LocalStorage関連）
   - ui.js（UI関連）
   - task.js（タスク操作）
   - main.js（メイン処理）
   ```

2. **TypeScript化**

   ```typescript
   interface Task {
     id: number;
     title: string;
     description: string;
     priority: 'high' | 'medium' | 'low';
     category: 'work' | 'personal' | 'shopping';
     dueDate: string | null;
     completed: boolean;
     createdAt: string;
   }
   ```

3. **テストの追加**

   ```javascript
   describe('applyFilters', () => {
     it('should filter completed tasks', () => {
       // テストコード
     });
   });
   ```

---

**Let's vibe and code!** 🎉

リファクタリングで、あなたのコードがプロレベルに進化したよ！
次のLesson 8で、自分だけのオリジナルプロジェクトを作ろう！ 🚀
