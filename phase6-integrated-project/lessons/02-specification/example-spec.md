# カード型TODOアプリ - 技術仕様書

**プロジェクト名**：Card Todo（カードトゥードゥー）  
**作成日**：2025-12-01  
**作成者**：バイブコーダー太郎  
**バージョン**：1.0

---

## 概要

この文書は、Lesson 1で作成した要件定義を基に、実装に必要な技術仕様をまとめたものです。

**参照**：[要件定義書](../01-requirements/example-requirements.md)

---

## データ構造

### タスクオブジェクト

```typescript
interface Task {
  id: number;                    // 一意のID（タイムスタンプ）
  title: string;                 // タスクタイトル（最大100文字）
  description: string;           // タスクの説明（最大500文字）
  priority: 'high' | 'medium' | 'low';  // 優先度
  category: 'work' | 'personal' | 'shopping';  // カテゴリ
  dueDate: string | null;        // 締切日（YYYY-MM-DD形式、または null）
  completed: boolean;            // 完了フラグ
  createdAt: string;             // 作成日時（ISO 8601形式）
}
```

### データ型の詳細

| プロパティ | データ型 | 必須 | デフォルト値 | 制約 |
|-----------|---------|------|------------|------|
| id | number | ✅ | `Date.now()` | 一意、正の整数 |
| title | string | ✅ | なし | 1-100文字 |
| description | string | ❌ | `''` | 0-500文字 |
| priority | 'high' \| 'medium' \| 'low' | ✅ | `'medium'` | 3つのいずれか |
| category | 'work' \| 'personal' \| 'shopping' | ✅ | `'personal'` | 3つのいずれか |
| dueDate | string \| null | ❌ | `null` | YYYY-MM-DD形式 |
| completed | boolean | ✅ | `false` | true または false |
| createdAt | string | ✅ | `new Date().toISOString()` | ISO 8601形式 |

### タスク配列

```javascript
// グローバル変数としてタスク配列を管理
let tasks = [];

// タスク配列の例
tasks = [
  {
    id: 1638360000000,
    title: "Phase 6の教材を完成させる",
    description: "Lesson 1-8とfinal-projectを作成する",
    priority: "high",
    category: "work",
    dueDate: "2025-12-15",
    completed: false,
    createdAt: "2025-12-01T10:00:00.000Z"
  },
  {
    id: 1638360060000,
    title: "買い物に行く",
    description: "牛乳、卵、パンを買う",
    priority: "medium",
    category: "shopping",
    dueDate: null,
    completed: false,
    createdAt: "2025-12-01T10:01:00.000Z"
  },
  {
    id: 1638360120000,
    title: "ジムに行く",
    description: "",
    priority: "low",
    category: "personal",
    dueDate: "2025-12-05",
    completed: true,
    createdAt: "2025-12-01T10:02:00.000Z"
  }
];
```

---

## 画面構成

### HTML構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Todo</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- ヘッダー -->
  <header>
    <h1 id="app-title">Card Todo</h1>
  </header>

  <main>
    <!-- 統計表示 -->
    <section id="stats-section">
      <div id="total-count">0</div>
      <div id="incomplete-count">0</div>
      <div id="completed-count">0</div>
    </section>

    <!-- タスク追加フォーム -->
    <section id="add-task-section">
      <form id="task-form">
        <input id="task-title" type="text" required />
        <textarea id="task-description"></textarea>
        <select id="task-priority" required></select>
        <select id="task-category" required></select>
        <input id="task-due-date" type="date" />
        <button type="submit">追加</button>
      </form>
    </section>

    <!-- タスク一覧 -->
    <section id="task-list-section">
      <div id="task-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- カードが動的に追加される -->
      </div>
      <div id="no-tasks-message">
        まだタスクがありません
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

### 要素ID/クラス名一覧

#### セクション

| ID | 用途 | 親要素 |
|----|------|--------|
| stats-section | 統計表示エリア | main |
| add-task-section | タスク追加フォームエリア | main |
| task-list-section | タスク一覧エリア | main |

#### フォーム関連

| ID | 用途 | タイプ |
|----|------|--------|
| task-form | タスク追加フォーム | form |
| task-title | タイトル入力 | input[type="text"] |
| task-description | 説明入力 | textarea |
| task-priority | 優先度選択 | select |
| task-category | カテゴリ選択 | select |
| task-due-date | 締切日入力 | input[type="date"] |

#### 表示関連

| ID | 用途 |
|----|------|
| task-list | タスクカード表示エリア |
| no-tasks-message | タスクがない時のメッセージ |
| total-count | 全タスク数 |
| incomplete-count | 未完了タスク数 |
| completed-count | 完了タスク数 |

#### Tailwind CSSクラス

| 用途 | クラス名 |
|------|----------|
| タスク一覧グリッド | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| 優先度バッジ（高） | `bg-red-500 text-white px-3 py-1 rounded-full` |
| 優先度バッジ（中） | `bg-yellow-500 text-white px-3 py-1 rounded-full` |
| 優先度バッジ（低） | `bg-green-500 text-white px-3 py-1 rounded-full` |
| タスクカード | `bg-white rounded-lg shadow-md p-6` |
| 完了タスク | `opacity-60` |

---

## 機能仕様

### タスク追加機能

**関数名**：`handleAddTask(event)`

**処理フロー**：

1. `event.preventDefault()` でページリロードを防ぐ
2. フォームから各値を取得
3. バリデーション
   - タイトルが空 → エラー表示
   - タイトルが100文字超 → エラー表示
4. 新しいタスクオブジェクトを作成
5. `tasks`配列に追加
6. `renderTasks()`を呼んで画面更新
7. フォームをリセット

**コード例**：

```javascript
function handleAddTask(e) {
  e.preventDefault();

  const title = document.getElementById('task-title').value.trim();
  const description = document.getElementById('task-description').value.trim();
  const priority = document.getElementById('task-priority').value;
  const category = document.getElementById('task-category').value;
  const dueDate = document.getElementById('task-due-date').value;

  // バリデーション
  if (!title) {
    alert('タスクタイトルを入力してください');
    return;
  }
  if (title.length > 100) {
    alert('タスクタイトルは100文字以内で入力してください');
    return;
  }

  // 新しいタスクを作成
  const newTask = {
    id: Date.now(),
    title,
    description,
    priority,
    category,
    dueDate: dueDate || null,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  renderTasks();
  document.getElementById('task-form').reset();
}
```

### タスク表示機能

**関数名**：`renderTasks()`

**処理フロー**：

1. `tasks`配列が空かチェック
   - 空 → `no-tasks-message`を表示、`task-list`を空にする
   - 空でない → `no-tasks-message`を非表示
2. `tasks`配列をループしてカードHTML生成
3. `task-list`のinnerHTMLに設定
4. `updateStats()`を呼んで統計更新

**カードHTML構造**：

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <input type="checkbox" onchange="toggleComplete(${task.id})" />
  <h3>${task.title}</h3>
  <p>${task.description}</p>
  <span class="badge">${priority}</span>
  <span>${category}</span>
  <div>${dueDate}</div>
  <button onclick="deleteTask(${task.id})">削除</button>
</div>
```

### 完了切替機能

**関数名**：`toggleComplete(taskId)`

**処理フロー**：

1. `tasks.find()`でIDに一致するタスクを検索
2. `completed`フラグを反転
3. `renderTasks()`を呼んで画面更新

### 削除機能

**関数名**：`deleteTask(taskId)`

**処理フロー**：

1. `confirm()`で確認ダイアログ表示
2. キャンセルされたら処理を中断
3. `tasks.filter()`でIDに一致しないタスクのみ残す
4. `renderTasks()`を呼んで画面更新

### 統計表示機能

**関数名**：`updateStats()`

**処理フロー**：

1. 全タスク数：`tasks.length`
2. 完了タスク数：`tasks.filter(t => t.completed).length`
3. 未完了タスク数：全タスク数 - 完了タスク数
4. 各カウント要素に値を設定

---

## LocalStorage仕様

### キー名

```javascript
const STORAGE_KEY = 'card-todo-tasks';
```

### 保存形式

```javascript
// JSON文字列として保存
const json = JSON.stringify(tasks);
localStorage.setItem(STORAGE_KEY, json);
```

### 保存タイミング

- タスク追加時
- タスク編集時
- タスク削除時
- 完了切替時

**実装方針**：各操作の最後に`saveToLocalStorage()`を呼ぶ

### 読み込みタイミング

- ページ読み込み時（`DOMContentLoaded`イベント）

### エラーハンドリング

```javascript
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      tasks = JSON.parse(json);
    } else {
      tasks = [];
    }
  } catch (error) {
    console.error('データの読み込みに失敗:', error);
    tasks = [];
    alert('データの読み込みに失敗しました。新しくタスクを作成してください。');
  }
  renderTasks();
}

function saveToLocalStorage() {
  try {
    const json = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('データの保存に失敗:', error);
    alert('データの保存に失敗しました。');
  }
}
```

---

## ファイル構成

```text
04-basic-implementation/
└── code/
    ├── index.html        # HTMLファイル（約130行）
    ├── styles.css        # カスタムCSS（約60行）
    └── script.js         # JavaScript（約250行）
```

---

## 命名規則

### 変数・関数名

- **変数**: キャメルケース（`taskTitle`, `isCompleted`）
- **関数**: 動詞で始まる（`handleAddTask`, `renderTasks`, `updateStats`）
- **定数**: スネークケース大文字（`STORAGE_KEY`）

### ID/クラス名

- **ID**: ケバブケース（`task-form`, `task-list`）
- **クラス**: Tailwind CSSのユーティリティクラスを使用

---

## 技術スタック

### フロントエンド

- **HTML5**: セマンティックタグ使用
- **CSS**: Tailwind CSS 3.x（CDN）
- **JavaScript**: ES6+（Vanilla JS、フレームワークなし）

### ストレージ

- **LocalStorage**: クライアントサイドでのデータ永続化

### 開発ツール

- **ブラウザ**: Chrome DevTools（デバッグ用）
- **エディタ**: VSCode等

---

## 実装の段階

### Phase 1（Lesson 4）：基本機能

- タスク追加
- タスク表示
- 完了切替
- 削除
- 統計表示

**目標行数**：約500行

### Phase 2（Lesson 5）：拡張機能

- タスク編集
- フィルター機能
- ソート機能
- 検索機能

**目標行数**：約1000行

### Phase 3（Lesson 6）：永続化と改善

- LocalStorage統合
- ローディング表示
- エラーハンドリング
- アニメーション
- トースト通知

**目標行数**：約1500行

### Phase 4（Lesson 7）：リファクタリング

- コードの整理
- パフォーマンス最適化
- アクセシビリティ改善

**最終行数**：約1500行

---

## 制約事項

### ブラウザ対応

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**注意**：IE11はサポート外

### パフォーマンス

- タスク数：最大1000件まで快適に動作
- 初期読み込み：3秒以内

### セキュリティ

- XSS対策：`textContent`使用、HTMLエスケープ
- ユーザー入力の検証

---

## まとめ

この仕様書に基づいて実装を進めれば、要件定義で決めた機能を実現できます！

**次のステップ**：

- Lesson 3でUIデザインとプロトタイプを作成
- Lesson 4-7で段階的に実装

---

**作成者ノート**：

この仕様書は、AIと対話しながら以下のように作成しました：

```text
1. データ構造の相談
「タスクに必要なプロパティと、そのデータ型を提案してください」

2. 画面構成の相談
「セマンティックHTMLでの構造と、適切なID名を提案してください」

3. LocalStorage仕様の確認
「この仕様で問題ないか、考慮すべき点を教えてください」

4. 実装フローの確認
「この処理フローに漏れや問題はありますか？」
```

**所要時間**：約2時間（AIとの対話を含む）
