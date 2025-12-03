# Lesson 5：機能拡張 - 実用的なアプリに仕上げよう！

**所要時間**：4-5時間
**難易度**：⭐⭐⭐⭐☆

---

## 🎯 学習目標

このレッスンでは、Lesson 4で作成した基本機能を拡張して、実用的なTODOアプリに仕上げるよ！

**目標**：

- タスクの編集機能を実装する
- フィルター機能でタスクを絞り込めるようにする
- ソート機能でタスクを並び替えられるようにする
- 検索機能でタスクを素早く見つけられるようにする

**完成イメージ**：

- 基本機能：追加、表示、完了切替、削除（Lesson 4で完成）
- 拡張機能：編集、フィルター、ソート、検索（Lesson 5で実装）
- コード規模：約400-500行

---

## 💡 なぜ機能拡張が重要か（Why）

### 基本機能だけでは物足りない理由

Lesson 4で作った基本機能だけでも「動く」けど、実際に使ってみると...

```text
❌ 困ること：
- タスクを間違えて入力したけど、削除して入れ直すのが面倒
- タスクが増えてきて、見たいタスクが探しにくい
- 「仕事のタスクだけ見たい」「優先度が高い順に見たい」ができない
- 「あのタスクどこだっけ？」と探すのに時間がかかる
```

```text
✅ 機能拡張で解決：
- 編集機能 → タスクを修正できる
- フィルター機能 → 見たいタスクだけ表示できる
- ソート機能 → 好きな順番に並び替えられる
- 検索機能 → キーワードで素早く見つけられる
```

### 実用レベルとは

「実用レベル」とは、「自分が本当に毎日使いたいと思えるレベル」のこと！

```text
基本レベル：
「動くけど、ちょっと不便...まあ使えるかな」

実用レベル：
「便利！毎日使いたい！友達にも勧めたい！」
```

Lesson 5では、アプリを「実用レベル」に引き上げるよ！

---

## 📚 実装する機能（What）

### 機能拡張の全体像

Lesson 5では、以下の4つの機能を段階的に実装していくよ：

#### 1. タスクの編集機能

```text
【できること】
- カードの「編集」ボタンをクリック
- カードがインライン編集モードになる
- タイトル、説明、優先度、カテゴリ、締切日を変更
- 「保存」で変更を反映、「キャンセル」で元に戻す
```

#### 2. フィルター機能

```text
【できること】
- ステータスフィルター：すべて / 未完了 / 完了
- カテゴリフィルター：すべて / 仕事 / プライベート / 買い物
- 複数のフィルターを同時適用（未完了 AND 仕事）
- 選択中のフィルターは青色でハイライト
```

#### 3. ソート機能

```text
【できること】
- 作成日順（新しい順 / 古い順）
- 優先度順（高→低 / 低→高）
- 締切日順（近い順 / 遠い順）
- selectボックスで切り替え
```

#### 4. 検索機能

```text
【できること】
- 検索ボックスにキーワードを入力
- タイトルと説明から該当するタスクを絞り込み
- リアルタイムで検索結果が更新される
- 検索結果が0件の場合、メッセージを表示
```

---

## 🛠️ 実装の進め方（How）

### ステップ1：編集機能の実装（1-1.5時間）

#### 編集モードの切り替え

編集機能は、カードを「表示モード」と「編集モード」で切り替える仕組みだよ！

```javascript
// 編集ボタンがクリックされたら、編集モードに切り替え
function startEdit(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  // 編集中のタスクIDを保存
  editingTaskId = taskId;

  // 再レンダリング（編集モードで表示）
  renderTasks();
}
```

#### 編集モードのHTML生成

```javascript
function renderTasks() {
  // ...既存のコード

  // タスクごとにHTML生成
  tasks.forEach(task => {
    if (editingTaskId === task.id) {
      // 編集モード：フォーム表示
      html += generateEditForm(task);
    } else {
      // 表示モード：通常のカード表示
      html += generateTaskCard(task);
    }
  });

  // ...既存のコード
}
```

#### 編集フォームの生成

```javascript
function generateEditForm(task) {
  return `
    <div class="card bg-white rounded-lg shadow-md p-6">
      <form onsubmit="saveEdit(event, ${task.id})">
        <!-- タイトル入力 -->
        <input
          type="text"
          id="edit-title-${task.id}"
          value="${task.title}"
          class="w-full mb-3 px-3 py-2 border rounded"
          required
        >

        <!-- 説明入力 -->
        <textarea
          id="edit-description-${task.id}"
          class="w-full mb-3 px-3 py-2 border rounded"
          rows="3"
        >${task.description}</textarea>

        <!-- 優先度、カテゴリ、締切日 -->
        <div class="grid grid-cols-3 gap-2 mb-3">
          <select id="edit-priority-${task.id}" class="px-2 py-1 border rounded">
            <option value="high" ${task.priority === 'high' ? 'selected' : ''}>高</option>
            <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>中</option>
            <option value="low" ${task.priority === 'low' ? 'selected' : ''}>低</option>
          </select>

          <select id="edit-category-${task.id}" class="px-2 py-1 border rounded">
            <option value="work" ${task.category === 'work' ? 'selected' : ''}>仕事</option>
            <option value="personal" ${task.category === 'personal' ? 'selected' : ''}>プライベート</option>
            <option value="shopping" ${task.category === 'shopping' ? 'selected' : ''}>買い物</option>
          </select>

          <input
            type="date"
            id="edit-dueDate-${task.id}"
            value="${task.dueDate || ''}"
            class="px-2 py-1 border rounded"
          >
        </div>

        <!-- 保存・キャンセルボタン -->
        <div class="flex gap-2">
          <button type="submit" class="flex-1 bg-blue-600 text-white px-4 py-2 rounded">
            💾 保存
          </button>
          <button
            type="button"
            onclick="cancelEdit()"
            class="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            ❌ キャンセル
          </button>
        </div>
      </form>
    </div>
  `;
}
```

#### 保存とキャンセル

```javascript
// 編集を保存
function saveEdit(event, taskId) {
  event.preventDefault();

  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  // フォームから値を取得
  task.title = document.getElementById(`edit-title-${taskId}`).value.trim();
  task.description = document.getElementById(`edit-description-${taskId}`).value.trim();
  task.priority = document.getElementById(`edit-priority-${taskId}`).value;
  task.category = document.getElementById(`edit-category-${taskId}`).value;
  task.dueDate = document.getElementById(`edit-dueDate-${taskId}`).value || null;

  // 編集モード解除
  editingTaskId = null;

  // 再レンダリング
  renderTasks();
}

// 編集をキャンセル
function cancelEdit() {
  editingTaskId = null;
  renderTasks();
}
```

---

### ステップ2：フィルター機能の実装（1-1.5時間）

#### フィルター状態の管理

```javascript
// フィルター状態を保持する変数
let currentStatusFilter = 'all'; // 'all' | 'active' | 'completed'
let currentCategoryFilter = 'all'; // 'all' | 'work' | 'personal' | 'shopping'
```

#### フィルターボタンのHTML

```html
<!-- ステータスフィルター -->
<div class="flex gap-2 mb-4">
  <button
    onclick="setStatusFilter('all')"
    class="filter-btn ${currentStatusFilter === 'all' ? 'active' : ''}"
  >
    すべて
  </button>
  <button
    onclick="setStatusFilter('active')"
    class="filter-btn ${currentStatusFilter === 'active' ? 'active' : ''}"
  >
    未完了
  </button>
  <button
    onclick="setStatusFilter('completed')"
    class="filter-btn ${currentStatusFilter === 'completed' ? 'active' : ''}"
  >
    完了
  </button>
</div>

<!-- カテゴリフィルター -->
<div class="flex gap-2">
  <button
    onclick="setCategoryFilter('all')"
    class="filter-btn ${currentCategoryFilter === 'all' ? 'active' : ''}"
  >
    すべて
  </button>
  <button
    onclick="setCategoryFilter('work')"
    class="filter-btn ${currentCategoryFilter === 'work' ? 'active' : ''}"
  >
    💼 仕事
  </button>
  <button
    onclick="setCategoryFilter('personal')"
    class="filter-btn ${currentCategoryFilter === 'personal' ? 'active' : ''}"
  >
    🏠 プライベート
  </button>
  <button
    onclick="setCategoryFilter('shopping')"
    class="filter-btn ${currentCategoryFilter === 'shopping' ? 'active' : ''}"
  >
    🛒 買い物
  </button>
</div>
```

#### フィルター関数

```javascript
// ステータスフィルターを設定
function setStatusFilter(status) {
  currentStatusFilter = status;
  renderTasks();
}

// カテゴリフィルターを設定
function setCategoryFilter(category) {
  currentCategoryFilter = category;
  renderTasks();
}

// タスクをフィルター
function getFilteredTasks() {
  return tasks.filter(task => {
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

#### renderTasks()の修正

```javascript
function renderTasks() {
  // フィルター適用
  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    taskListElement.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <p class="text-xl mb-2">📝</p>
        <p>該当するタスクがありません</p>
      </div>
    `;
    return;
  }

  // フィルターされたタスクを表示
  filteredTasks.forEach(task => {
    // ...HTMLを生成
  });
}
```

---

### ステップ3：ソート機能の実装（30分-1時間）

#### ソート状態の管理

```javascript
// ソート状態を保持する変数
let currentSort = 'createdAt-desc'; // デフォルト：作成日順（新しい順）
```

#### ソートselectボックス

```html
<select onchange="setSortOrder(this.value)" class="px-4 py-2 border rounded">
  <option value="createdAt-desc">作成日順（新しい順）</option>
  <option value="createdAt-asc">作成日順（古い順）</option>
  <option value="priority-desc">優先度順（高→低）</option>
  <option value="priority-asc">優先度順（低→高）</option>
  <option value="dueDate-asc">締切日順（近い順）</option>
  <option value="dueDate-desc">締切日順（遠い順）</option>
</select>
```

#### ソート関数

```javascript
// ソート順を設定
function setSortOrder(sortOrder) {
  currentSort = sortOrder;
  renderTasks();
}

// タスクをソート
function getSortedTasks(tasks) {
  const [field, order] = currentSort.split('-'); // 'priority-desc' → ['priority', 'desc']

  return [...tasks].sort((a, b) => {
    let aValue, bValue;

    if (field === 'priority') {
      // 優先度のソート（high=3, medium=2, low=1）
      const priorityValues = { high: 3, medium: 2, low: 1 };
      aValue = priorityValues[a.priority];
      bValue = priorityValues[b.priority];
    } else if (field === 'dueDate') {
      // 締切日のソート（nullは最後）
      aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
      bValue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    } else if (field === 'createdAt') {
      // 作成日のソート
      aValue = new Date(a.createdAt).getTime();
      bValue = new Date(b.createdAt).getTime();
    }

    // 昇順/降順
    if (order === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });
}
```

#### renderTasks()の修正

```javascript
function renderTasks() {
  // フィルター適用
  let filteredTasks = getFilteredTasks();

  // ソート適用
  filteredTasks = getSortedTasks(filteredTasks);

  // ...HTMLを生成
}
```

---

### ステップ4：検索機能の実装（30分-1時間）

#### 検索状態の管理

```javascript
// 検索キーワードを保持する変数
let searchKeyword = '';
```

#### 検索ボックス

```html
<input
  type="text"
  placeholder="🔍 タスクを検索..."
  oninput="setSearchKeyword(this.value)"
  class="w-full px-4 py-2 border rounded mb-4"
>
```

#### 検索関数

```javascript
// 検索キーワードを設定
function setSearchKeyword(keyword) {
  searchKeyword = keyword.trim().toLowerCase();
  renderTasks();
}

// タスクを検索
function getSearchedTasks(tasks) {
  if (!searchKeyword) return tasks;

  return tasks.filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchKeyword);
    const descriptionMatch = task.description.toLowerCase().includes(searchKeyword);
    return titleMatch || descriptionMatch;
  });
}
```

#### renderTasks()の最終版

```javascript
function renderTasks() {
  // 1. フィルター適用
  let filteredTasks = getFilteredTasks();

  // 2. 検索適用
  filteredTasks = getSearchedTasks(filteredTasks);

  // 3. ソート適用
  filteredTasks = getSortedTasks(filteredTasks);

  // 4. 統計更新
  updateStats();

  // 5. HTML生成
  if (filteredTasks.length === 0) {
    taskListElement.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <p class="text-xl mb-2">📝</p>
        <p>該当するタスクがありません</p>
      </div>
    `;
    return;
  }

  let html = '';
  filteredTasks.forEach(task => {
    if (editingTaskId === task.id) {
      html += generateEditForm(task);
    } else {
      html += generateTaskCard(task);
    }
  });

  taskListElement.innerHTML = html;
}
```

---

## 🤖 AIとの協働 - 段階的な実装

### ❌ 失敗するパターン

```text
「編集機能、フィルター機能、ソート機能、検索機能を
全部一気に実装してください！」

↓

AIが500行のコードを生成
↓
どこが何だか分からない
↓
エラーが出ても原因が分からない
↓
挫折... 😭
```

### ✅ 成功するパターン

```text
「まずは編集機能だけ実装しよう！」
↓
動いた！✨
↓
「次はフィルター機能を追加しよう！」
↓
また動いた！✨
↓
「次はソート機能...」
↓
少しずつ機能を追加して完成！🎉
```

### 📝 AIへの指示例

#### ステップ1：編集機能の実装

```text
✅ 良い指示の例：

「カード型TODOアプリに、タスクの編集機能を追加したいです。

【現在の状況】
- 基本機能（追加、表示、完了切替、削除）は実装済み
- tasksという配列でタスクを管理している
- renderTasks()関数で画面を更新している

【実装したいこと】
1. カードに「編集」ボタンを追加
2. 編集ボタンをクリックすると、カードが編集モードになる
3. 編集モードでは、タイトル、説明、優先度、カテゴリ、締切日を変更できる
4. 「保存」ボタンで変更を反映、「キャンセル」ボタンで元に戻す

【必要な機能】
- startEdit(taskId)関数：編集モードに切り替え
- generateEditForm(task)関数：編集フォームのHTML生成
- saveEdit(event, taskId)関数：変更を保存
- cancelEdit()関数：編集をキャンセル

以下のコードに追加する形で実装してください。

[script.jsの現在のコードを貼り付け]
```

#### ステップ2：フィルター機能の実装

```text
✅ 良い指示の例：

「タスクをフィルターする機能を追加したいです。

【実装したいこと】
1. ステータスフィルター（すべて / 未完了 / 完了）
2. カテゴリフィルター（すべて / 仕事 / プライベート / 買い物）
3. 複数のフィルターを同時適用（AND条件）
4. 選択中のフィルターは青色でハイライト

【必要な機能】
- currentStatusFilter変数：ステータスフィルターの状態
- currentCategoryFilter変数：カテゴリフィルターの状態
- setStatusFilter(status)関数：ステータスフィルターを設定
- setCategoryFilter(category)関数：カテゴリフィルターを設定
- getFilteredTasks()関数：フィルター適用後のタスク配列を返す

フィルターボタンは、index.htmlの<section id="filter-section">に追加してください。
```

#### ステップ3：ソート機能の実装

```text
✅ 良い指示の例：

「タスクをソートする機能を追加したいです。

【実装したいこと】
1. selectボックスでソート条件を選択
2. 作成日順（新しい順 / 古い順）
3. 優先度順（高→低 / 低→高）
4. 締切日順（近い順 / 遠い順）
5. 締切日がnullのタスクは最後に表示

【必要な機能】
- currentSort変数：ソート順の状態（デフォルト：'createdAt-desc'）
- setSortOrder(sortOrder)関数：ソート順を設定
- getSortedTasks(tasks)関数：ソート適用後のタスク配列を返す

ソートselectボックスは、index.htmlの<section id="filter-section">に追加してください。
```

#### ステップ4：検索機能の実装

```text
✅ 良い指示の例：

「タスクを検索する機能を追加したいです。

【実装したいこと】
1. 検索ボックスにキーワードを入力
2. タイトルと説明から該当するタスクを絞り込み
3. 大文字・小文字を区別しない
4. リアルタイムで検索結果が更新される

【必要な機能】
- searchKeyword変数：検索キーワードの状態
- setSearchKeyword(keyword)関数：検索キーワードを設定
- getSearchedTasks(tasks)関数：検索適用後のタスク配列を返す

検索ボックスは、index.htmlの<section id="filter-section">の最上部に追加してください。
```

---

## 🔍 生成されたコードの読み方

AIが生成したコードをチェックするときのポイントだよ！

### ✅ 編集機能のチェックポイント

```javascript
// ✅ 編集中のタスクIDを保持する変数があるか
let editingTaskId = null;

// ✅ 編集モードと表示モードを切り替えているか
if (editingTaskId === task.id) {
  // 編集モード
} else {
  // 表示モード
}

// ✅ event.preventDefault()で画面リロードを防いでいるか
function saveEdit(event, taskId) {
  event.preventDefault(); // ← これがないとページがリロードされる
  // ...
}

// ✅ 編集後にeditingTaskIdをnullにリセットしているか
editingTaskId = null; // ← これがないと編集モードのまま
```

### ✅ フィルター機能のチェックポイント

```javascript
// ✅ AND条件でフィルターが適用されているか
function getFilteredTasks() {
  return tasks.filter(task => {
    // ステータスチェック AND カテゴリチェック
    if (currentStatusFilter === 'active' && task.completed) return false;
    if (currentCategoryFilter !== 'all' && task.category !== currentCategoryFilter) {
      return false;
    }
    return true;
  });
}

// ✅ フィルターボタンがアクティブ状態を表示しているか
class="${currentStatusFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}"
```

### ✅ ソート機能のチェックポイント

```javascript
// ✅ 元の配列を変更せず、新しい配列を返しているか
function getSortedTasks(tasks) {
  return [...tasks].sort((a, b) => { // ← [...tasks]でコピーを作る
    // ...
  });
}

// ✅ nullの締切日を適切に処理しているか
aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
// ← nullの場合はInfinityにして最後に表示
```

### ✅ 検索機能のチェックポイント

```javascript
// ✅ 大文字・小文字を区別していないか
const titleMatch = task.title.toLowerCase().includes(searchKeyword.toLowerCase());

// ✅ タイトルと説明の両方を検索対象にしているか
const titleMatch = task.title.toLowerCase().includes(searchKeyword);
const descriptionMatch = task.description.toLowerCase().includes(searchKeyword);
return titleMatch || descriptionMatch; // ← OR条件
```

---

## ⚠️ よくある問題と解決方法

### 問題1：編集後、フォームが消えない

```text
❌ 原因：
editingTaskIdをnullにリセットし忘れている

✅ 解決方法：
function saveEdit(event, taskId) {
  // ...保存処理

  editingTaskId = null; // ← これを追加！
  renderTasks();
}
```

### 問題2：フィルターを変更しても表示が変わらない

```text
❌ 原因：
フィルター変更後にrenderTasks()を呼んでいない

✅ 解決方法：
function setStatusFilter(status) {
  currentStatusFilter = status;
  renderTasks(); // ← これを追加！
}
```

### 問題3：ソート後、元の配列も並び替わってしまう

```text
❌ 原因：
元の配列を直接sort()している

✅ 解決方法：
function getSortedTasks(tasks) {
  return [...tasks].sort((a, b) => { // ← [...tasks]でコピーを作る
    // ...
  });
}
```

### 問題4：検索で何も表示されない

```text
❌ 原因：
大文字・小文字の違いで一致しない

✅ 解決方法：
// 両方をlowerCase()で統一
const titleMatch = task.title.toLowerCase().includes(searchKeyword.toLowerCase());
```

### 問題5：フィルター・ソート・検索の適用順序がおかしい

```text
❌ 原因：
適用順序が間違っている

✅ 正しい順序：
function renderTasks() {
  let result = tasks;

  // 1. フィルター（ステータス・カテゴリで絞り込み）
  result = getFilteredTasks();

  // 2. 検索（キーワードで絞り込み）
  result = getSearchedTasks(result);

  // 3. ソート（並び替え）
  result = getSortedTasks(result);

  // 4. 表示
  // ...
}
```

---

## 💪 実践課題

### 課題1：基礎編（必須）

Lesson 4で作成したTODOアプリに、以下の機能を追加してください：

1. **編集機能**
   - 「編集」ボタンをクリックするとインライン編集モードになる
   - 「保存」「キャンセル」ボタンで操作できる

2. **フィルター機能**
   - ステータスフィルター（すべて / 未完了 / 完了）
   - カテゴリフィルター（すべて / 仕事 / プライベート / 買い物）

3. **ソート機能**
   - 作成日順、優先度順、締切日順で並び替え

4. **検索機能**
   - タイトルと説明からキーワード検索

**目標コード行数**：約400-500行

### 課題2：応用編（推奨）

基礎編の機能に加えて、以下の改善を加えてください：

1. **フィルター適用時の件数表示**

   ```text
   「未完了のタスク：7件」のように表示
   ```

2. **検索結果のハイライト**

   ```text
   検索キーワードに一致した部分を黄色でハイライト
   ```

3. **複数カテゴリの同時選択**

   ```text
   「仕事」と「プライベート」を同時に選択できる（OR条件）
   ```

4. **ソート方向の切り替えボタン**

   ```text
   selectボックスの横に「↑」「↓」ボタンを追加
   ```

### 課題3：チャレンジ（任意）

さらに高度な機能に挑戦してみよう！

1. **カスタムフィルター保存**

   ```text
   「未完了」「仕事」「高優先度」の組み合わせを
   「重要タスク」として保存できる
   ```

2. **一括操作**

   ```text
   チェックボックスで複数のタスクを選択して、
   一括で削除または完了にできる
   ```

3. **高度な検索**

   ```text
   「priority:high category:work」のような
   条件検索ができる
   ```

---

## 📝 まとめ

### このレッスンで学んだこと

✅ **編集機能**：インライン編集でユーザー体験を向上  
✅ **フィルター機能**：AND条件で複数フィルターを同時適用  
✅ **ソート機能**：配列のコピーを作ってから並び替え  
✅ **検索機能**：リアルタイムで絞り込み表示

### コードの成長

```text
Lesson 4（基本機能）：
- タスクの追加、表示、完了切替、削除
- 約250行

Lesson 5（機能拡張）：
- 上記 + 編集、フィルター、ソート、検索
- 約400-500行
```

### 次のステップ

次の Lesson 6 では、以下の内容に取り組むよ：

- **LocalStorageでデータ永続化** → ページを閉じてもデータが残る
- **ローディング表示** → データ読み込み中の表示
- **エラーハンドリング** → エラーが起きても落ちない
- **アニメーション** → タスク追加・削除時の滑らかな動き
- **トースト通知** → 操作成功時のフィードバック

実用的なアプリに必要な「仕上げ」をしていくよ！

👉 [Lesson 6: データ永続化とUI改善 へ進む](../06-persistence-and-improvements/README.md)

---

**Let's vibe and code!** 🎉

機能拡張で、あなたのTODOアプリが実用レベルに進化したよ！
Lesson 6で、さらに磨きをかけていこう！ ✨
