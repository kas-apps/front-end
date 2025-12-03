# Lesson 5：機能拡張版 - コード解説

**コード規模**：約480行
**新機能**：編集、フィルター、ソート、検索

---

## ファイル構成

```text
code/
├── README.md        # このファイル
├── index.html       # HTML（約240行）
├── styles.css       # CSS（約70行）
└── script.js        # JavaScript（約480行）
```

---

## Lesson 4からの変更点

### 追加されたグローバル変数

```javascript
let editingTaskId = null;           // 編集中のタスクID
let currentStatusFilter = 'all';    // ステータスフィルター
let currentCategoryFilter = 'all';  // カテゴリフィルター
let currentSort = 'createdAt-desc'; // ソート順
let searchKeyword = '';             // 検索キーワード
```

### 追加された関数（約15個）

#### 編集機能（4関数）

- `startEdit(taskId)` - 編集モード開始
- `cancelEdit()` - 編集キャンセル
- `saveEdit(event, taskId)` - 編集保存
- `generateEditForm(task)` - 編集フォームHTML生成

#### フィルター・ソート・検索（10関数）

- `setStatusFilter(status)` - ステータスフィルター設定
- `setCategoryFilter(category)` - カテゴリフィルター設定
- `setSort(sortOrder)` - ソート順設定
- `setSearchKeyword(keyword)` - 検索キーワード設定
- `applyFilters(taskList)` - フィルター適用
- `applySearch(taskList)` - 検索適用
- `applySort(taskList)` - ソート適用
- `getProcessedTasks()` - フィルター・検索・ソート統合
- `updateFilterButtons()` - フィルターボタンのUI更新
- `updateCategoryButtons()` - カテゴリボタンのUI更新

#### ユーティリティ（1関数）

- `debounce(func, delay)` - デバウンス（検索最適化）

---

## 機能解説

### 1. 編集機能

#### 仕組み

```javascript
// 編集ボタンをクリック
startEdit(taskId)
  ↓
// editingTaskIdにタスクIDを保存
editingTaskId = taskId
  ↓
// renderTasks()を呼ぶ
renderTasks()
  ↓
// 編集モードかどうかチェック
if (editingTaskId === task.id) {
  // 編集フォームを表示
  return generateEditForm(task);
} else {
  // 通常のカードを表示
  return createTaskCard(task);
}
```

#### 保存処理

```javascript
function saveEdit(event, taskId) {
  event.preventDefault(); // フォーム送信によるリロードを防ぐ

  // フォームから値を取得
  const title = document.getElementById(`edit-title-${taskId}`).value.trim();
  // ...

  // タスクを更新
  task.title = title;
  // ...

  // 編集モード解除
  editingTaskId = null;

  // 再レンダリング
  renderTasks();
}
```

### 2. フィルター機能

#### ステータスフィルター

```javascript
function applyFilters(taskList) {
  return taskList.filter(task => {
    // ステータスフィルター
    if (currentStatusFilter === 'active' && task.completed) return false;
    if (currentStatusFilter === 'completed' && !task.completed) return false;

    // カテゴリフィルター
    if (currentCategoryFilter !== 'all' && task.category !== currentCategoryFilter) {
      return false;
    }

    return true;
  });
}
```

#### UI連動

```javascript
function setStatusFilter(status) {
  currentStatusFilter = status;        // 状態を更新
  updateFilterButtons();               // ボタンの見た目を更新
  renderTasks();                       // 再レンダリング
}
```

### 3. ソート機能

#### 優先度順ソート

```javascript
if (field === 'priority') {
  // 優先度を数値化（high=3, medium=2, low=1）
  const priorityValues = { high: 3, medium: 2, low: 1 };
  aValue = priorityValues[a.priority];
  bValue = priorityValues[b.priority];
}

// 昇順/降順
if (order === 'asc') {
  return aValue - bValue;  // 昇順（低→高）
} else {
  return bValue - aValue;  // 降順（高→低）
}
```

#### 締切日のソート（nullの扱い）

```javascript
if (field === 'dueDate') {
  // nullの場合はInfinityにして最後に表示
  aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
  bValue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
}
```

### 4. 検索機能

#### デバウンス付き検索

```javascript
// 300ms待ってから検索実行（パフォーマンス最適化）
searchInput.addEventListener('input', debounce((e) => {
  setSearchKeyword(e.target.value);
}, 300));
```

#### デバウンス関数の仕組み

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);          // 前のタイマーをキャンセル
    timeoutId = setTimeout(() => {    // 新しいタイマーをセット
      func.apply(this, args);         // delay後に実行
    }, delay);
  };
}
```

**メリット**：

- キーを押すたびに検索が実行されるのを防ぐ
- 入力が止まってから300ms後に1回だけ実行
- パフォーマンスが向上

#### 検索処理

```javascript
function applySearch(taskList) {
  if (!searchKeyword) return taskList; // キーワードが空なら全件返す

  return taskList.filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchKeyword);
    const descriptionMatch = task.description.toLowerCase().includes(searchKeyword);
    return titleMatch || descriptionMatch; // OR条件
  });
}
```

### 5. 処理の統合

#### getProcessedTasks()

```javascript
function getProcessedTasks() {
  let result = tasks;

  // 1. フィルター適用（ステータス、カテゴリ）
  result = applyFilters(result);

  // 2. 検索適用（キーワード）
  result = applySearch(result);

  // 3. ソート適用（並び替え）
  result = applySort(result);

  return result;
}
```

**適用順序が重要**：

1. まずフィルターで絞り込む
2. 次に検索でさらに絞り込む
3. 最後にソートで並び替える

#### renderTasks()の修正

```javascript
function renderTasks() {
  // フィルター・検索・ソート適用
  const processedTasks = getProcessedTasks();

  // 空状態チェック
  if (processedTasks.length === 0) {
    // ...
    return;
  }

  // タスクカード生成
  const tasksHTML = processedTasks.map(task => {
    if (editingTaskId === task.id) {
      return generateEditForm(task);  // 編集モード
    } else {
      return createTaskCard(task);    // 表示モード
    }
  }).join('');

  taskListElement.innerHTML = tasksHTML;
  updateStats();
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
2. 「タスクを追加」ボタンをクリック

#### タスクの編集

1. カードの「編集」ボタンをクリック
2. インライン編集モードに切り替わる
3. 値を変更
4. 「保存」をクリック

#### タスクのフィルター

1. ステータスボタン（すべて/未完了/完了）をクリック
2. カテゴリボタン（すべて/仕事/プライベート/買い物）をクリック
3. 両方のフィルターを同時適用可能

#### タスクのソート

1. ソートselectボックスから条件を選択
2. 作成日順、優先度順、締切日順から選択

#### タスクの検索

1. 検索ボックスにキーワードを入力
2. リアルタイムで結果が更新される（デバウンス付き）

---

## コードのポイント

### 1. DRY原則の適用

**悪い例**（重複あり）：

```javascript
function setStatusFilter(status) {
  currentStatusFilter = status;

  // フィルター適用
  let result = tasks.filter(task => {
    if (currentStatusFilter === 'active' && task.completed) return false;
    // ...
  });

  renderTasks();
}

function setCategoryFilter(category) {
  currentCategoryFilter = category;

  // フィルター適用（重複！）
  let result = tasks.filter(task => {
    if (currentStatusFilter === 'active' && task.completed) return false;
    // ...
  });

  renderTasks();
}
```

**良い例**（関数化）：

```javascript
function setStatusFilter(status) {
  currentStatusFilter = status;
  updateFilterButtons();
  renderTasks(); // 共通処理を呼ぶだけ
}

function setCategoryFilter(category) {
  currentCategoryFilter = category;
  updateCategoryButtons();
  renderTasks(); // 共通処理を呼ぶだけ
}

// フィルター処理は1箇所にまとめる
function applyFilters(taskList) {
  // ...
}
```

### 2. イミュータブルな配列操作

**重要**：ソート時に元の配列を変更しない

```javascript
function applySort(taskList) {
  // [...taskList]でコピーを作ってからソート
  return [...taskList].sort((a, b) => {
    // ...
  });
}
```

**理由**：

- 元のtasks配列は変更しない
- フィルター・検索・ソートを何度も適用できる
- 副作用がないので、バグが減る

### 3. フォーカス管理

```javascript
function startEdit(taskId) {
  editingTaskId = taskId;
  renderTasks();

  // DOMが更新された後にフォーカスを当てる
  setTimeout(() => {
    const titleInput = document.getElementById(`edit-title-${taskId}`);
    if (titleInput) {
      titleInput.focus();
      titleInput.select(); // テキストを選択状態にする
    }
  }, 0);
}
```

**ポイント**：

- `setTimeout(() => {...}, 0)`でDOMの更新を待つ
- `select()`で既存のテキストを選択状態にする
- ユーザビリティが向上

---

## 次のステップ

このコードをベースに、Lesson 6では以下の機能を追加します：

1. **LocalStorageでのデータ永続化**
2. **ローディング表示**
3. **トースト通知**
4. **アニメーション**
5. **エラーハンドリング**

---

**Let's vibe and code!** 🎉

Lesson 5の機能拡張版が完成したよ！
次のLesson 6で、さらに実用的なアプリに仕上げていこう！ ✨
