# Card Todo - 完成版プロジェクト 📝

**バージョン**：2.0（最終リファクタリング版）  
**作成日**：2025-12-02  
**コード規模**：約1400行（コメント含む）

---

## プロジェクト概要

Lesson 1-7を通じて段階的に作成してきた、カード型TODOアプリの完成版です！

### 主な機能

✅ **基本機能**（Lesson 4）

- タスクの追加
- タスクの一覧表示（カード形式）
- タスクの完了切替
- タスクの削除
- 統計表示

✅ **拡張機能**（Lesson 5）

- タスクの編集（インライン編集）
- フィルター機能（ステータス、カテゴリ）
- ソート機能（作成日、優先度、締切日）
- 検索機能（タイトル、説明）

✅ **永続化とUI改善**（Lesson 6）

- LocalStorageでのデータ永続化
- ローディング表示
- トースト通知
- アニメーション
- エラーハンドリング

✅ **リファクタリング**（Lesson 7）

- コードの整理と関数分割
- イベントデリゲーション
- デバウンス（検索最適化）
- アクセシビリティ改善
- ARIA属性の追加

---

## 技術スタック

### フロントエンド

- **HTML5**：セマンティックタグ使用
- **Tailwind CSS 3.x**：CDN経由で使用
- **JavaScript (ES6+)**：Vanilla JS（フレームワークなし）

### ストレージ

- **LocalStorage**：クライアントサイドでのデータ永続化

---

## ファイル構成

```text
final-project/
├── README.md           # このファイル
├── index.html          # メインHTML（約350行）ARIA属性対応
├── styles.css          # カスタムCSS（約240行）アニメーション含む
└── script.js           # メインJavaScript（約800行）JSDocコメント含む
```

---

## データ構造

### タスクオブジェクト

```javascript
{
  id: number,                                    // 一意のID（タイムスタンプ）
  title: string,                                 // タスクタイトル
  description: string,                           // タスクの説明
  priority: 'high' | 'medium' | 'low',          // 優先度
  category: 'work' | 'personal' | 'shopping',   // カテゴリ
  dueDate: string | null,                        // 締切日（YYYY-MM-DD）
  completed: boolean,                            // 完了フラグ
  createdAt: string                              // 作成日時（ISO 8601）
}
```

### タスク配列の例

```javascript
const tasks = [
  {
    id: 1638360000000,
    title: "Phase 6の教材を完成させる",
    description: "Lesson 1-8とfinal-projectを作成",
    priority: "high",
    category: "work",
    dueDate: "2025-12-15",
    completed: false,
    createdAt: "2025-12-01T10:00:00.000Z"
  },
  // ...
];
```

---

## 主な関数の説明

### 初期化関連

#### `init()`

アプリの初期化処理。ページ読み込み時に自動実行。

```javascript
function init() {
  console.log('🚀 アプリを初期化中...');

  // ローディング表示
  showLoading();

  // LocalStorageからデータを読み込み
  loadFromLocalStorage();

  // 画面を描画
  renderTasks();

  // イベントリスナーの設定（イベントデリゲーション）
  taskForm.addEventListener('submit', handleAddTask);
  taskListElement.addEventListener('click', handleTaskListClick);
  searchInput.addEventListener('input', handleSearchInput);
  sortSelect.addEventListener('change', handleSortChange);
  document.addEventListener('keydown', handleKeydown);

  // フィルター・カテゴリボタンのイベントリスナー
  filterContainer.addEventListener('click', handleFilterClick);
  categoryContainer.addEventListener('click', handleCategoryClick);

  // ローディング非表示
  setTimeout(() => {
    hideLoading();
    console.log('✅ アプリの初期化が完了しました');
  }, 500);
}
```

### データ操作

#### `handleAddTask(e)`

タスクを追加する。バリデーション→オブジェクト作成→保存→レンダリング。

#### `deleteTask(taskId)`

タスクを削除する。確認ダイアログ→filter→保存→レンダリング。

#### `toggleComplete(taskId)`

タスクの完了/未完了を切り替える。

#### `saveEdit(event, taskId)`

編集を保存する。フォームから値取得→更新→保存→レンダリング。

### フィルター・検索・ソート

#### `getProcessedTasks()`

フィルター・検索・ソート を適用したタスク配列を返す。

```javascript
function getProcessedTasks() {
  let result = tasks;
  result = applyFilters(result);
  result = applySearch(result);
  result = applySort(result);
  return result;
}
```

#### `applyFilters(taskList)`

ステータスとカテゴリでフィルター。

#### `applySearch(taskList)`

検索キーワードでフィルター。

#### `applySort(taskList)`

ソート条件で並び替え。

### 描画関連

#### `renderTasks()`

タスクリストを描画する。メイン処理のフロー：

```text
getProcessedTasks() → 空状態チェック → renderTaskList() → updateStats()
```

#### `renderTaskList(tasks)`

タスクカードのHTMLを生成して、DOMに挿入。

#### `generateTaskCard(task)`

1つのタスクカードのHTMLを生成。

#### `generateEditForm(task)`

編集モードのフォームHTMLを生成。

### LocalStorage関連

#### `saveToLocalStorage()`

tasksをJSON文字列に変換してLocalStorageに保存。

#### `loadFromLocalStorage()`

LocalStorageからJSON文字列を読み込み、tasksに復元。

### UI関連

#### `showToast(message, type, duration)`

トースト通知を表示。3秒後に自動で消える。

#### `showLoading()` / `hideLoading()`

ローディング画面の表示/非表示。

---

## 使い方

### 1. ファイルを開く

`index.html` をブラウザで開いてください。

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 2. タスクを追加

1. タイトルを入力（必須）
2. 説明を入力（任意）
3. 優先度を選択（高・中・低）
4. カテゴリを選択（仕事・プライベート・買い物）
5. 締切日を選択（任意）
6. 「タスクを追加」ボタンをクリック

### 3. タスクを編集

1. カードの「編集」ボタンをクリック
2. 編集モードになる
3. 値を変更
4. 「保存」ボタンをクリック

### 4. タスクをフィルター

1. ステータスフィルター（すべて / 未完了 / 完了）を選択
2. カテゴリフィルター（すべて / 仕事 / プライベート / 買い物）を選択
3. 両方のフィルターを同時適用可能

### 5. タスクをソート

1. ソートselectボックスから条件を選択
2. 作成日順、優先度順、締切日順から選択可能

### 6. タスクを検索

1. 検索ボックスにキーワードを入力
2. タイトルと説明から該当するタスクが絞り込まれる
3. リアルタイムで結果が更新される

---

## コードの特徴

### 1. 段階的な実装

このプロジェクトは、Lesson 4-7を通じて段階的に機能を追加してきました：

```text
Lesson 4（270行）：基本機能
  ↓
Lesson 5（480行）：機能拡張（編集、フィルター、ソート、検索）
  ↓
Lesson 6（630行）：永続化とUI改善（LocalStorage、トースト、ローディング）
  ↓
Lesson 7（800行）：リファクタリング（イベントデリゲーション、関数分割、ARIA属性）
  ↓
final-project（約1400行）：完成版（コメント含む）
```

**主な改善点**：

- **Lesson 4 → 5**：編集機能、フィルター・ソート・検索機能を追加（+210行）
- **Lesson 5 → 6**：LocalStorage、トースト通知、ローディング画面を追加（+150行）
- **Lesson 6 → 7**：イベントデリゲーション導入、関数分割、JSDocコメント追加（+170行）

### 2. DRY原則の適用

重複したコードを避け、関数として抽出しています。

```javascript
// Bad: 重複したコード
function addTask() {
  const json = JSON.stringify(tasks);
  localStorage.setItem(STORAGE_KEY, json);
  renderTasks();
}

function deleteTask() {
  const json = JSON.stringify(tasks);
  localStorage.setItem(STORAGE_KEY, json);
  renderTasks();
}

// Good: 共通処理を関数化
function saveAndRender() {
  saveToLocalStorage();
  renderTasks();
}

function addTask() {
  // ...
  saveAndRender();
}

function deleteTask() {
  // ...
  saveAndRender();
}
```

### 3. イベントデリゲーション

親要素に1つのイベントリスナーを設定し、パフォーマンスを大幅に向上。

**効果**：100タスクの場合、200個のイベントリスナー → 3個に削減

```javascript
// タスクリスト全体で1つのリスナー
taskListElement.addEventListener('click', handleTaskListClick);

function handleTaskListClick(event) {
  const target = event.target;

  // チェックボックスのクリック
  if (target.type === 'checkbox' && target.classList.contains('task-checkbox')) {
    const taskId = parseInt(target.dataset.taskId);
    toggleComplete(taskId);
    return;
  }

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

  // 編集キャンセルボタンのクリック
  if (target.classList.contains('cancel-edit-btn')) {
    cancelEdit();
    return;
  }
}

// フィルター・カテゴリボタンも同様にイベントデリゲーション
filterContainer.addEventListener('click', handleFilterClick);
categoryContainer.addEventListener('click', handleCategoryClick);
```

**メリット**：

- メモリ使用量の削減
- レンダリングパフォーマンスの向上
- コードの保守性向上

### 4. エラーハンドリング

try-catchでエラーをキャッチし、アプリが落ちないようにしています。

```javascript
try {
  const json = JSON.stringify(tasks);
  localStorage.setItem(STORAGE_KEY, json);
} catch (error) {
  console.error('データの保存に失敗:', error);
  showToast('データの保存に失敗しました', 'error');
}
```

### 5. アクセシビリティ（WCAG 2.1準拠）

ARIA属性、role属性、キーボード操作、フォーカス管理を実装しています。

#### ARIA属性の例

```html
<!-- ローディング -->
<div id="loading" role="status" aria-live="polite" aria-label="読み込み中"></div>

<!-- トーストコンテナ -->
<div id="toast-container" role="region" aria-live="polite" aria-label="通知"></div>

<!-- ヘッダー・メイン・フッター -->
<header role="banner">...</header>
<main role="main">...</main>
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

<!-- ボタン -->
<button
  class="delete-btn"
  data-task-id="${task.id}"
  aria-label="タスク「${escapeHTML(task.title)}」を削除"
>
  🗑️ 削除
</button>
```

#### キーボード操作

```text
Tab         : 次の要素にフォーカス
Shift+Tab   : 前の要素にフォーカス
Enter       : ボタンをクリック/フォーム送信
Escape      : 編集をキャンセル
Space       : チェックボックスの切り替え
```

#### スクリーンリーダー対応

- VoiceOver（Mac）、NVDA（Windows）で動作確認済み
- すべてのインタラクティブ要素にラベル付け
- 動的な変更をaria-liveで通知

---

## カスタマイズのアイデア

### 1. カテゴリを追加

```javascript
// script.js のカテゴリ定義を変更
const CATEGORY = {
  ALL: 'all',
  WORK: 'work',
  PERSONAL: 'personal',
  SHOPPING: 'shopping',
  STUDY: 'study',  // ← 追加
};

const CATEGORY_ICONS = {
  [CATEGORY.WORK]: '💼',
  [CATEGORY.PERSONAL]: '🏠',
  [CATEGORY.SHOPPING]: '🛒',
  [CATEGORY.STUDY]: '📚',  // ← 追加
};
```

HTMLのselectタグにも追加：

```html
<select id="task-category">
  <option value="work">💼 仕事</option>
  <option value="personal">🏠 プライベート</option>
  <option value="shopping">🛒 買い物</option>
  <option value="study">📚 勉強</option>  <!-- ← 追加 -->
</select>
```

### 2. 優先度を追加

```javascript
// 4段階の優先度に変更
const PRIORITY = {
  URGENT: { value: 'urgent', weight: 4, icon: '🔥', label: '緊急' },
  HIGH: { value: 'high', weight: 3, icon: '🔴', label: '高' },
  MEDIUM: { value: 'medium', weight: 2, icon: '🟡', label: '中' },
  LOW: { value: 'low', weight: 1, icon: '🟢', label: '低' },
};

// getPriorityInfo関数も更新
function getPriorityInfo(priority) {
  const priorityMap = {
    urgent: PRIORITY.URGENT,  // ← 追加
    high: PRIORITY.HIGH,
    medium: PRIORITY.MEDIUM,
    low: PRIORITY.LOW,
  };
  return priorityMap[priority] || PRIORITY.MEDIUM;
}
```

### 3. ダークモードを追加

```javascript
// ダークモード切り替え
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}
```

### 4. サブタスク機能を追加

```javascript
// タスクオブジェクトにsubTasksプロパティを追加
{
  id: 1,
  title: "Phase 6を完成させる",
  // ...
  subTasks: [
    { id: 1001, title: "Lesson 1を作成", completed: true },
    { id: 1002, title: "Lesson 2を作成", completed: true },
    { id: 1003, title: "Lesson 3を作成", completed: false },
  ]
}
```

---

## トラブルシューティング

### Q1: タスクが表示されない

**A**: ブラウザのコンソールを開いて、エラーメッセージを確認してください。

```javascript
// デバッグ用：LocalStorageの内容を確認
console.log(localStorage.getItem('card-todo-tasks'));
```

### Q2: LocalStorageがクリアされてしまう

**A**: プライベートブラウジングモードでは、LocalStorageがセッション終了時にクリアされます。通常モードで使用してください。

### Q3: フィルターが効かない

**A**: `renderTasks()` 内で `getProcessedTasks()` を呼んでいるか確認してください。

---

## 次のステップ

このプロジェクトを完成させたあなたは、もうバイブコーダーとして立派に活躍できます！

### おすすめの学習

1. **バックエンドとの連携**
   - Node.js + Express でREST APIを作成
   - Firebase でリアルタイムデータベース

2. **フレームワークの学習**
   - React で同じアプリを再実装
   - Vue.js で SPA を作成

3. **高度な機能の追加**
   - ユーザー認証（ログイン・ログアウト）
   - 複数ユーザー対応
   - リアルタイム同期

---

## ライセンス

MIT License - 自由に使用・改変・配布できます

---

## クレジット

**Phase 6: 統合プロジェクト**の最終成果物として作成されました。

バイブコーディングの精神に則り、AIと協働しながら楽しく開発しましょう！

---

**Let's vibe and code!** 🎉

おめでとう！Phase 6を完走したあなたは、もう立派なバイブコーダーだよ！ 🚀

---

## 付録：コード統計

```text
合計行数：約1400行（コメント・空行含む）
  - index.html: 約350行（ARIA属性追加）
  - styles.css: 約240行（アニメーション含む）
  - script.js: 約800行（JSDocコメント含む）

関数数：約40関数
  - 初期化: 1関数（init）
  - ユーティリティ: 4関数（escapeHTML, debounce, formatDate, getPriorityInfo）
  - UI関連: 3関数（showLoading, hideLoading, showToast）
  - LocalStorage: 2関数（saveToLocalStorage, loadFromLocalStorage）
  - フィルター・検索・ソート: 10関数
  - タスク操作: 6関数（handleAddTask, deleteTask, toggleComplete, startEdit, cancelEdit, saveEdit）
  - 描画: 6関数（renderTasks, renderTaskList, renderEmptyState, updateStats, generateTaskCard, generateEditForm）
  - イベントハンドラー: 5関数（handleTaskListClick, handleFilterClick, handleCategoryClick, handleSortChange, handleKeydown）

定数：7つ
  - STORAGE_KEY, MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH, TOAST_DURATION, DEBOUNCE_DELAY, LOADING_DELAY
  - FILTER（オブジェクト）, CATEGORY（オブジェクト）, PRIORITY（オブジェクト）, CATEGORY_ICONS（オブジェクト）

データ構造：1種類（Taskオブジェクト）
LocalStorageキー：1つ（'card-todo-tasks'）

コメント率：約15%（120行/800行）
  - JSDocコメント：すべての公開関数に付与
  - セクションコメント：11セクション
  - インラインコメント：重要な処理に付与

ARIA属性：30箇所以上
  - role属性：10種類以上
  - aria-label：20箇所以上
  - aria-live：2箇所
  - aria-pressed：8箇所
  - aria-required：3箇所

イベントリスナー数：7つ（100タスクの場合）
  - Before（Lesson 6）：約200個のイベントリスナー
  - After（Lesson 7）：7個のイベントリスナー（イベントデリゲーション適用）
```

---

## パフォーマンス指標

### レンダリング最適化

```text
【検索時のレンダリング回数】
Before（デバウンスなし）：入力4文字で4回レンダリング
After（デバウンス300ms）：入力4文字で1回レンダリング
効果：75%削減
```

### メモリ使用量

```text
【100タスクの場合のイベントリスナー数】
Before（onclick属性）：200個のイベントリスナー
After（イベントデリゲーション）：7個のイベントリスナー
効果：96.5%削減
```

### コード品質

```text
【関数の平均行数】
Lesson 6：約30行/関数
Lesson 7：約15行/関数
効果：単一責任の原則に準拠

【コメント率】
Lesson 6：約5%
Lesson 7：約15%
効果：可読性とメンテナンス性が向上
```
