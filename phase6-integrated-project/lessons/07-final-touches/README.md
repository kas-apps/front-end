# Lesson 7：最終調整とリファクタリング - プロレベルのコード品質へ！

**所要時間**：2-3時間
**難易度**：⭐⭐⭐⭐⭐

---

## 🎯 学習目標

このレッスンでは、Lesson 6までに作成したアプリのコードを整理し、プロフェッショナルなレベルに仕上げるよ！

**目標**：

- コードを読みやすく、保守しやすく整理する
- パフォーマンスを最適化し、大量のタスクでも快適に動作させる
- アクセシビリティを改善し、誰でも使いやすくする
- 複数のブラウザで動作確認し、互換性を確保する

**完成イメージ**：

- コードが整理され、誰が見ても理解しやすい
- 1000件のタスクでもサクサク動作
- キーボードだけで全ての操作ができる
- Chrome、Firefox、Safariで正しく動作
- 最終コード規模：約1000-1500行

---

## 💡 なぜリファクタリングが重要か（Why）

### 「動く」と「良いコード」は別物

```text
❌ 動くけど、品質が低いコード：
- 関数が長すぎて何をしているか分からない
- 変数名が適当で、意味が分からない
- 重複したコードがたくさんある
- パフォーマンスが悪い
- バグが見つけにくい
```

```text
✅ 動く上に、品質が高いコード：
- 関数が短く、1つのことだけをする
- 変数名が分かりやすい
- 重複がなく、DRY原則に従っている
- パフォーマンスが良い
- バグが見つけやすい、修正しやすい
```

### リファクタリングのメリット

```text
1. 保守性が高い
   → 後から機能を追加しやすい
   → バグを修正しやすい

2. 可読性が高い
   → 他の人が読んでも理解できる
   → 未来の自分が読んでも理解できる

3. パフォーマンスが良い
   → ユーザー体験が向上
   → サーバー負荷が減る（将来的にバックエンドと連携する場合）

4. 学習効果が高い
   → 良いコードの書き方が身につく
   → プロフェッショナルな思考が身につく
```

---

## 📚 リファクタリングの観点（What）

### Lesson 7で行うリファクタリング

#### 1. コードの整理

```text
【やること】
- 長い関数を分割する
- 重複したコードをまとめる
- 変数名・関数名を分かりやすくする
- コメントを適切に追加する
- コードを論理的な順序に並べる
```

#### 2. パフォーマンス最適化

```text
【やること】
- レンダリングの最適化（必要な部分だけ更新）
- イベントデリゲーションの導入
- 不要な再計算を減らす
- デバウンスで検索処理を最適化
```

#### 3. アクセシビリティ改善

```text
【やること】
- キーボード操作の対応（Tab、Enter、Escキー）
- ARIA属性の追加（role、aria-label）
- フォーカス管理の改善
- 色のコントラスト比を確認
```

#### 4. ブラウザ互換性確認

```text
【やること】
- Chrome、Firefox、Safariで動作確認
- モバイルブラウザでも確認
- 互換性のない機能を修正
```

---

## 🛠️ リファクタリングの進め方（How）

### ステップ1：コードの整理（1時間）

#### 1-1. 長い関数を分割する

**Before（悪い例）**：

```javascript
// renderTasks()が長すぎて、何をしているか分かりにくい
function renderTasks() {
  let filteredTasks = tasks.filter(task => {
    if (currentStatusFilter === 'active' && task.completed) return false;
    if (currentStatusFilter === 'completed' && !task.completed) return false;
    if (currentCategoryFilter !== 'all' && task.category !== currentCategoryFilter) {
      return false;
    }
    return true;
  });

  filteredTasks = filteredTasks.filter(task => {
    if (!searchKeyword) return true;
    const titleMatch = task.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const descriptionMatch = task.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  filteredTasks = filteredTasks.sort((a, b) => {
    // ...長いソートロジック
  });

  if (filteredTasks.length === 0) {
    taskListElement.innerHTML = `...`;
    return;
  }

  let html = '';
  filteredTasks.forEach(task => {
    // ...長いHTML生成ロジック
  });

  taskListElement.innerHTML = html;
}
```

**After（良い例）**：

```javascript
// 各処理を別の関数に分割
function renderTasks() {
  // 1. フィルター・検索・ソート適用
  const processedTasks = getProcessedTasks();

  // 2. 空状態の処理
  if (processedTasks.length === 0) {
    renderEmptyState();
    return;
  }

  // 3. タスクリストを描画
  renderTaskList(processedTasks);

  // 4. 統計を更新
  updateStats();
}

// 処理済みタスクを取得（フィルター・検索・ソート）
function getProcessedTasks() {
  let result = tasks;
  result = applyFilters(result);
  result = applySearch(result);
  result = applySort(result);
  return result;
}

// フィルター適用
function applyFilters(taskList) {
  return taskList.filter(task => {
    if (currentStatusFilter === 'active' && task.completed) return false;
    if (currentStatusFilter === 'completed' && !task.completed) return false;
    if (currentCategoryFilter !== 'all' && task.category !== currentCategoryFilter) {
      return false;
    }
    return true;
  });
}

// 検索適用
function applySearch(taskList) {
  if (!searchKeyword) return taskList;

  return taskList.filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const descriptionMatch = task.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return titleMatch || descriptionMatch;
  });
}

// ソート適用
function applySort(taskList) {
  // ...ソートロジック
}

// 空状態を描画
function renderEmptyState() {
  taskListElement.innerHTML = `
    <div class="col-span-full text-center py-12 text-gray-500">
      <p class="text-xl mb-2">📝</p>
      <p>該当するタスクがありません</p>
    </div>
  `;
}

// タスクリストを描画
function renderTaskList(tasks) {
  const html = tasks.map(task => {
    return editingTaskId === task.id
      ? generateEditForm(task)
      : generateTaskCard(task);
  }).join('');

  taskListElement.innerHTML = html;
}
```

#### 1-2. 定数をまとめる

**Before（悪い例）**：

```javascript
// コード中に直接書かれている
localStorage.setItem('card-todo-tasks', json);

// 別の箇所で
const json = localStorage.getItem('card-todo-tasks');

// 別の箇所で
localStorage.removeItem('card-todo-tasks');
```

**After（良い例）**：

```javascript
// ファイルの先頭で定数を定義
const STORAGE_KEY = 'card-todo-tasks';
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;
const TOAST_DURATION = 3000;
const DEBOUNCE_DELAY = 300;

// 使用時
localStorage.setItem(STORAGE_KEY, json);
const json = localStorage.getItem(STORAGE_KEY);
localStorage.removeItem(STORAGE_KEY);
```

#### 1-3. コードを論理的な順序に並べる

```javascript
// ============================================
// 定数定義
// ============================================
const STORAGE_KEY = 'card-todo-tasks';
// ...

// ============================================
// グローバル変数
// ============================================
let tasks = [];
let editingTaskId = null;
// ...

// ============================================
// ユーティリティ関数
// ============================================
function showToast(message, type, duration) { /*...*/ }
function showLoading() { /*...*/ }
function hideLoading() { /*...*/ }

// ============================================
// LocalStorage関連
// ============================================
function saveToLocalStorage() { /*...*/ }
function loadFromLocalStorage() { /*...*/ }

// ============================================
// フィルター・検索・ソート
// ============================================
function applyFilters(taskList) { /*...*/ }
function applySearch(taskList) { /*...*/ }
function applySort(taskList) { /*...*/ }

// ============================================
// タスク操作
// ============================================
function handleAddTask(e) { /*...*/ }
function deleteTask(taskId) { /*...*/ }
function toggleComplete(taskId) { /*...*/ }

// ============================================
// 描画関連
// ============================================
function renderTasks() { /*...*/ }
function renderTaskList(tasks) { /*...*/ }
function updateStats() { /*...*/ }

// ============================================
// 初期化
// ============================================
function init() { /*...*/ }
window.addEventListener('DOMContentLoaded', init);
```

---

### ステップ2：パフォーマンス最適化（30分-1時間）

#### 2-1. イベントデリゲーション

**Before（悪い例）**：

```javascript
// 各タスクカードに個別にイベントリスナーを追加
function renderTaskList(tasks) {
  tasks.forEach(task => {
    const html = `
      <div class="card">
        <button onclick="deleteTask(${task.id})">削除</button>
        <button onclick="startEdit(${task.id})">編集</button>
      </div>
    `;
    // ...
  });
}
```

**After（良い例）**：

```javascript
// 親要素に1つだけイベントリスナーを追加
function init() {
  // ...

  // タスクリスト全体にイベントリスナーを追加
  taskListElement.addEventListener('click', handleTaskListClick);
}

function handleTaskListClick(event) {
  const target = event.target;

  // 削除ボタンがクリックされた
  if (target.classList.contains('delete-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    deleteTask(taskId);
  }

  // 編集ボタンがクリックされた
  if (target.classList.contains('edit-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    startEdit(taskId);
  }

  // チェックボックスがクリックされた
  if (target.type === 'checkbox' && target.classList.contains('task-checkbox')) {
    const taskId = parseInt(target.dataset.taskId);
    toggleComplete(taskId);
  }
}

// HTML生成時にdata属性を追加
function generateTaskCard(task) {
  return `
    <div class="card">
      <input
        type="checkbox"
        class="task-checkbox"
        data-task-id="${task.id}"
        ${task.completed ? 'checked' : ''}
      >
      <button class="edit-btn" data-task-id="${task.id}">✏️ 編集</button>
      <button class="delete-btn" data-task-id="${task.id}">🗑️ 削除</button>
    </div>
  `;
}
```

#### 2-2. デバウンスで検索を最適化

**Before（悪い例）**：

```javascript
// 入力のたびに検索が実行される（パフォーマンスが悪い）
function setSearchKeyword(keyword) {
  searchKeyword = keyword.trim().toLowerCase();
  renderTasks(); // ← キーを押すたびに実行
}
```

**After（良い例）**：

```javascript
// デバウンス関数
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// デバウンス適用
const debouncedSearch = debounce((keyword) => {
  searchKeyword = keyword.trim().toLowerCase();
  renderTasks();
}, 300); // 300ms待ってから実行

// HTML
<input
  type="text"
  placeholder="🔍 タスクを検索..."
  oninput="debouncedSearch(this.value)"
>
```

---

### ステップ3：アクセシビリティ改善（30分-1時間）

#### 3-1. キーボード操作の対応

```javascript
// Escapeキーで編集をキャンセル
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && editingTaskId !== null) {
    cancelEdit();
  }
});

// Enterキーでフォーム送信（テキストエリア内では無効）
taskFormElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && !e.shiftKey) {
    e.preventDefault();
    taskFormElement.requestSubmit();
  }
});
```

#### 3-2. ARIA属性の追加

```html
<!-- フォーム -->
<form
  id="task-form"
  role="form"
  aria-label="新しいタスクを追加"
>
  <input
    type="text"
    id="task-title"
    aria-label="タスクのタイトル"
    aria-required="true"
  >
</form>

<!-- ボタン -->
<button
  class="delete-btn"
  data-task-id="${task.id}"
  aria-label="タスク「${task.title}」を削除"
>
  🗑️ 削除
</button>

<!-- タスクリスト -->
<div
  id="task-list"
  role="list"
  aria-label="タスク一覧"
>
  <div class="card" role="listitem">
    <!-- タスクカードの内容 -->
  </div>
</div>
```

#### 3-3. フォーカス管理

```javascript
// 編集モード開始時、タイトル入力欄にフォーカス
function startEdit(taskId) {
  editingTaskId = taskId;
  renderTasks();

  // レンダリング後、フォーカスを当てる
  setTimeout(() => {
    const titleInput = document.getElementById(`edit-title-${taskId}`);
    if (titleInput) {
      titleInput.focus();
      titleInput.select(); // 既存のテキストを選択状態に
    }
  }, 0);
}

// タスク追加後、タイトル入力欄にフォーカスを戻す
function handleAddTask(e) {
  // ...既存のコード

  saveToLocalStorage();
  renderTasks();
  showToast('タスクを追加しました！', 'success');

  taskFormElement.reset();
  taskTitleInput.focus(); // ← フォーカスを戻す
}
```

---

### ステップ4：ブラウザ互換性確認（30分）

#### 確認項目チェックリスト

```text
✅ Chrome（最新版）
  - 基本機能が動作する
  - LocalStorageが動作する
  - アニメーションが正しく表示される

✅ Firefox（最新版）
  - 基本機能が動作する
  - date inputが正しく表示される
  - CSSグリッドが正しく表示される

✅ Safari（最新版）
  - 基本機能が動作する
  - Tailwind CSSが正しく適用される
  - スムーズスクロールが動作する

✅ モバイルブラウザ（Chrome/Safari）
  - レスポンシブデザインが正しく表示される
  - タッチ操作が正しく動作する
  - モバイルキーボードが正しく表示される
```

#### 互換性のための修正例

```javascript
// DateオブジェクトのtoISOString()を使う（互換性が高い）
const createdAt = new Date().toISOString();

// Array.from()を使う（古いブラウザではpolyfillが必要）
const taskArray = Array.from(tasks);

// オプショナルチェイニングは避ける（古いブラウザでエラー）
// Bad: task?.title
// Good: task && task.title
```

---

## 🤖 AIとの協働

### 📝 AIへの指示例

#### コードレビューの依頼

```text
✅ 良い指示の例：

「以下のJavaScriptコードをレビューして、改善点を教えてください。

【レビューしてほしい観点】
1. 関数が長すぎないか
2. 重複したコードがないか
3. 変数名・関数名が分かりやすいか
4. パフォーマンスの問題がないか
5. エラーハンドリングが適切か

[script.jsのコードを貼り付け]

改善案を具体的なコード例とともに提示してください。
```

#### アクセシビリティ改善の依頼

```text
✅ 良い指示の例：

「以下のHTMLにアクセシビリティを改善するための
ARIA属性を追加してください。

【改善してほしいこと】
- ボタンにaria-labelを追加
- フォームにroleとaria-labelを追加
- タスクリストにrole="list"を追加

[index.htmlの該当部分を貼り付け]

WCAG 2.1のガイドラインに準拠した形で提案してください。
```

---

## 🔍 リファクタリングのチェックポイント

### ✅ コードの整理

```javascript
// ✅ 関数は1つのことだけをする
function addTask() { /*...*/ }  // Good
function addTaskAndRender() { /*...*/ }  // Bad（2つのことをしている）

// ✅ 関数名は動詞で始まる
function deleteTask() { /*...*/ }  // Good
function task() { /*...*/ }  // Bad

// ✅ 変数名は意味が分かる
let filteredTasks = [];  // Good
let tmp = [];  // Bad

// ✅ マジックナンバーを避ける
const MAX_LENGTH = 100;  // Good
if (title.length > 100) { /*...*/ }  // Bad
```

### ✅ パフォーマンス

```javascript
// ✅ 不要な再レンダリングを避ける
// Bad: すべてのフィルター変更でrenderTasks()を呼ぶ
// Good: フィルター変更をまとめて、1回だけrenderTasks()を呼ぶ

// ✅ イベントデリゲーションを使う
// Bad: 各カードに個別のイベントリスナー
// Good: 親要素に1つのイベントリスナー
```

### ✅ アクセシビリティ

```html
<!-- ✅ ボタンにaria-labelがある -->
<button aria-label="タスクを削除">🗑️</button>

<!-- ✅ フォームにroleがある -->
<form role="form" aria-label="新しいタスクを追加">

<!-- ✅ 入力欄にaria-requiredがある -->
<input type="text" aria-required="true">
```

---

## ⚠️ よくある問題と解決方法

### 問題1：リファクタリング後、機能が動かなくなった

```text
❌ 原因：
一度に大幅に変更しすぎた

✅ 解決方法：
小さな単位でリファクタリングし、その都度動作確認する
```

### 問題2：イベントデリゲーションでイベントが発火しない

```text
❌ 原因：
data属性の取得方法が間違っている

✅ 解決方法：
event.target.dataset.taskId を使う
parseInt()で数値に変換することを忘れずに
```

### 問題3：デバウンスが動かない

```text
❌ 原因：
デバウンス関数の戻り値を使っていない

✅ 解決方法：
const debouncedSearch = debounce(searchFunction, 300);
debouncedSearch(keyword); // ← 戻り値の関数を呼ぶ
```

---

## 💪 実践課題

### 課題1：基礎編（必須）

Lesson 6で作成したTODOアプリを以下の観点でリファクタリングしてください：

1. **コードの整理**
   - 長い関数を分割する
   - 定数をファイル先頭にまとめる
   - コードを論理的な順序に並べる

2. **パフォーマンス最適化**
   - イベントデリゲーションを導入
   - 検索にデバウンスを適用

3. **アクセシビリティ改善**
   - ARIA属性を追加
   - Escapeキーで編集をキャンセル

**目標コード行数**：約1000-1500行（整理されて読みやすい）

### 課題2：応用編（推奨）

基礎編のリファクタリングに加えて、以下の改善を加えてください：

1. **コメントの追加**

   ```javascript
   /**
    * タスクをLocalStorageに保存
    * @throws {Error} 容量不足の場合
    */
   function saveToLocalStorage() { /*...*/ }
   ```

2. **エラーログの改善**

   ```javascript
   console.error('[saveToLocalStorage] データの保存に失敗:', error);
   ```

3. **定数の enum 化**

   ```javascript
   const FILTER = {
     ALL: 'all',
     ACTIVE: 'active',
     COMPLETED: 'completed'
   };
   ```

### 課題3：チャレンジ（任意）

さらに高度なリファクタリングに挑戦してみよう！

1. **モジュール分割**

   ```text
   - storage.js（LocalStorage関連）
   - ui.js（UI関連）
   - task.js（タスク操作）
   - main.js（メイン処理）
   ```

2. **テストの追加**

   ```javascript
   function testFilterTasks() {
     // フィルター機能のテスト
   }
   ```

---

## 📝 まとめ

### このレッスンで学んだこと

✅ **コードの整理**：関数分割、定数化、論理的な順序  
✅ **パフォーマンス最適化**：イベントデリゲーション、デバウンス  
✅ **アクセシビリティ**：ARIA属性、キーボード操作  
✅ **ブラウザ互換性**：複数ブラウザでの動作確認

### Lesson 1-7の振り返り

```text
Lesson 1：要件定義 → 何を作るか明確化
Lesson 2：仕様書作成 → 技術的な設計
Lesson 3：UIデザイン → 見た目の設計
Lesson 4：基本実装 → 追加、表示、削除（250行）
Lesson 5：機能拡張 → 編集、フィルター、ソート、検索（400-500行）
Lesson 6：永続化とUI改善 → LocalStorage、トースト（500-600行）
Lesson 7：リファクタリング → コード品質向上（1000-1500行）
```

### 次のステップ

次の Lesson 8 では、あなた自身のオリジナルプロジェクトに挑戦するよ！

- **5つのプロジェクトテンプレート**を用意
- Lesson 1-7で学んだパターンを応用
- AIと協働しながら、ゼロから作り上げる

さあ、あなたのアイデアを形にしよう！

👉 [Lesson 8: あなたのプロジェクトを作ろう！ へ進む](../08-your-project/README.md)

---

**Let's vibe and code!** 🎉

リファクタリングで、あなたのコードがプロレベルに進化したよ！
次のLesson 8で、自分だけのオリジナルプロジェクトを作ろう！ 🚀
