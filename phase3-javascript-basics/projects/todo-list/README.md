# ミニプロジェクト 1: インタラクティブな TODO リスト

Phase 3 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**インタラクティブな TODO リスト**を作成することで、Phase 3 で学んだ JavaScript の基礎を総合的に復習します。

タスクの追加、完了・未完了の切り替え、削除ができる実用的な TODO アプリです。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ 変数と配列によるデータ管理
- ✅ DOM 操作で要素を動的に追加・削除
- ✅ イベントリスナーでユーザー操作を処理
- ✅ 関数でコードを整理
- ✅ 条件分岐でタスクの状態を管理
- ✅ ループで配列のデータを処理

---

## 📁 ファイル構成

```text
todo-list/
├── index.html      # メインページ
├── styles.css      # スタイルシート
├── script.js       # JavaScript
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（Phase 1 で学んだ内容）

#### アプリの構造

```html
<!-- 入力エリア -->
<div class="input-container">
  <input type="text" id="taskInput" placeholder="新しいタスクを入力">
  <button id="addButton">追加</button>
</div>

<!-- タスクリスト -->
<ul id="taskList">
  <!-- JavaScriptで動的に追加される -->
</ul>
```

**ポイント**:
- `id` 属性で JavaScript から要素を取得
- `placeholder` でユーザーに入力例を示す
- リストは空の状態で、JavaScript で追加

### CSS（Phase 2 で学んだ内容）

#### Flexbox によるレイアウト

```css
.input-container {
  display: flex;
  gap: 0.5rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**ポイント**:
- Flexbox で入力欄とボタンを横並び
- タスクアイテムもFlexboxで整列

### JavaScript（Phase 3 で学んだ内容）

#### 1. 変数と配列（Lesson 01）

```javascript
// タスクを管理する配列
let tasks = [];

// 次のタスクID
let nextId = 1;
```

**ポイント**:
- `let` で変更可能な変数を宣言
- 配列 `tasks` でタスクのリストを管理
- `nextId` で各タスクに一意のIDを割り当て

#### 2. DOM 操作（Lesson 05）

```javascript
// 要素の取得
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// 要素の作成と追加
const li = document.createElement('li');
li.textContent = taskText;
taskList.appendChild(li);
```

**ポイント**:
- `getElementById` で要素を取得
- `createElement` で新しい要素を作成
- `appendChild` でDOMに追加

#### 3. イベントリスナー（Lesson 05）

```javascript
// ボタンクリック時
addButton.addEventListener('click', () => {
  addTask();
});

// Enterキー押下時
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
```

**ポイント**:
- `addEventListener` でイベントを監視
- クリック時とEnterキー押下時に同じ処理
- アロー関数で簡潔に記述

#### 4. 関数（Lesson 03）

```javascript
// タスクを追加する関数
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return; // 空の場合は何もしない
  }

  // タスクオブジェクトを作成
  const task = {
    id: nextId++,
    text: taskText,
    completed: false
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = ''; // 入力欄をクリア
}
```

**ポイント**:
- 関数でタスク追加処理を整理
- `trim()` で前後の空白を削除
- オブジェクトでタスクのデータを管理

#### 5. 条件分岐とループ（Lesson 02, 04）

```javascript
// タスクリストを表示する関数
function renderTasks() {
  taskList.innerHTML = ''; // リストをクリア

  // 配列をループで処理
  tasks.forEach((task) => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
  });
}

// タスクの完了状態を切り替え
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}
```

**ポイント**:
- `forEach` で配列の各要素を処理
- `find` で特定のタスクを検索
- `if` で条件分岐

---

## 🌟 このプロジェクトの特徴

### 1. データとUIの分離

配列 `tasks` でデータを管理し、`renderTasks()` でUIを更新します。

**学べること**:
- データとUIを分けて管理する設計
- データを変更したら `renderTasks()` で再描画
- シンプルで理解しやすい構造

### 2. イベント駆動の処理

ユーザーの操作（クリック、キー入力）に応じて処理を実行します。

**学べること**:
- `addEventListener` によるイベント監視
- イベントハンドラーの書き方
- キーボード操作への対応

### 3. 動的なDOM操作

JavaScript でHTML要素を動的に作成・削除します。

**学べること**:
- `createElement` で要素を作成
- `appendChild` で要素を追加
- `innerHTML` でまとめて更新

### 4. オブジェクトによるデータ管理

各タスクをオブジェクトで管理し、ID、テキスト、完了状態を持たせます。

**学べること**:
- オブジェクトのプロパティ
- 配列とオブジェクトの組み合わせ
- データ構造の設計

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **タスクの件数を表示**
   - 「全タスク: 5件」「完了: 2件」「未完了: 3件」を表示
   - タスクが変更されるたびに更新

2. **空のタスクを追加できないようにする**
   - 空白だけのタスクをチェック
   - エラーメッセージを表示

3. **スタイルをカスタマイズ**
   - 色やフォントを変更
   - 完了したタスクのデザインを変更

### 中級編

1. **フィルター機能を追加**
   - 「すべて」「未完了」「完了」ボタンを追加
   - ボタンに応じて表示するタスクを切り替え

2. **編集機能を追加**
   - タスクをダブルクリックで編集モードに
   - 入力欄が表示され、テキストを修正できる

3. **LocalStorage でデータを保存**
   - ページを閉じてもタスクが残る
   - `localStorage.setItem` と `getItem` を使用

### 上級編

1. **AI にドラッグ&ドロップ機能を追加してもらう**
   ```
   「TODOリストにドラッグ&ドロップでタスクの順番を入れ替える機能を追加してください。
   HTML5 Drag and Drop API を使用し、タスクをドラッグして順番を変更できるようにしてください。」
   ```

2. **期限と優先度を追加**
   - 各タスクに期限（日付）と優先度（高・中・低）を設定
   - 期限が近いタスクを強調表示

3. **カテゴリー機能**
   - タスクをカテゴリー分け（仕事、プライベート、買い物など）
   - カテゴリーごとにフィルター

---

## 💡 学習のポイント

### 1. 配列とオブジェクトの組み合わせ

タスクのデータを配列とオブジェクトで管理します。

```javascript
const tasks = [
  { id: 1, text: '買い物に行く', completed: false },
  { id: 2, text: 'レポートを書く', completed: true },
  { id: 3, text: 'メールを返信する', completed: false }
];
```

**メリット**:
- 各タスクのデータをまとめて管理
- `id` で特定のタスクを識別
- `completed` で完了状態を管理

### 2. DOM 操作の基本パターン

要素を動的に作成して追加するパターンです。

```javascript
function createTaskElement(task) {
  // 1. 要素を作成
  const li = document.createElement('li');

  // 2. 内容を設定
  li.textContent = task.text;
  li.className = task.completed ? 'completed' : '';

  // 3. イベントリスナーを追加
  li.addEventListener('click', () => {
    toggleTask(task.id);
  });

  // 4. 要素を返す
  return li;
}
```

**ポイント**:
- 作成 → 設定 → イベント登録 → 返却の流れ
- 再利用可能な関数
- クリーンなコード

### 3. イベントリスナーの使い分け

ボタンクリックとEnterキー両方に対応します。

```javascript
// ボタンクリック
addButton.addEventListener('click', addTask);

// Enterキー
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
```

**メリット**:
- ユーザビリティ向上（キーボード操作対応）
- 同じ関数を再利用
- アクセシビリティ向上

### 4. データの不変性

配列を直接変更せず、新しい配列を作る方法もあります。

```javascript
// 直接変更（このプロジェクトで使用）
tasks.push(newTask);

// 新しい配列を作成（より安全）
tasks = [...tasks, newTask];
```

**不変性のメリット**:
- バグが少ない
- データの変更を追跡しやすい
- React などのフレームワークで推奨

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```
「TODOリストにフィルター機能を追加してください。
以下の3つのボタンを追加し、クリックすると表示するタスクが変わるようにしてください：
- 『すべて』ボタン: すべてのタスクを表示
- 『未完了』ボタン: completed が false のタスクのみ表示
- 『完了』ボタン: completed が true のタスクのみ表示

現在アクティブなボタンは色を変えて分かりやすくしてください。
JavaScript の filter() メソッドを使って実装してください。」
```

**ポイント**:
- 機能を具体的に説明
- ボタンの種類と動作を明記
- UIの要件（アクティブボタンの強調）を指定
- 使用する技術（filter メソッド）を提案

### 生成されたコードのチェックポイント

1. **HTML 構造**
   - ボタンが追加されているか
   - 適切な `id` や `class` が付いているか

2. **JavaScript のロジック**
   - `filter()` メソッドが使われているか
   - アクティブなボタンの状態管理ができているか
   - 既存の `renderTasks()` と連携しているか

3. **CSS のスタイル**
   - アクティブボタンが視覚的に分かりやすいか
   - 既存のデザインと統一されているか

4. **動作確認**
   - 各ボタンが正しく動作するか
   - タスクの追加・削除後もフィルターが維持されるか

---

## 📝 まとめ

このプロジェクトで、Phase 3 で学んだ以下の内容を実践しました:

- ✅ 変数と配列によるデータ管理
- ✅ DOM 操作で要素を動的に追加・削除
- ✅ イベントリスナーでユーザー操作を処理
- ✅ 関数でコードを整理
- ✅ 条件分岐でタスクの状態を管理
- ✅ ループで配列のデータを処理

**Phase 3 の知識で、こんなに実用的な TODO アプリが作れる！** 💪

次は、もう一つのミニプロジェクト「簡単な計算機」に挑戦してみよう！

---

**Happy Coding!** 🎉
