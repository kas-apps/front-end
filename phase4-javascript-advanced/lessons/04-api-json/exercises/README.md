# Lesson 4: API連携とJSON - 演習問題 🌐

このレッスンで学んだAPI連携とJSONを実践しよう！

---

## 基礎編

### 問題 4-1: ユーザー情報を取得して表示

**課題**：
「ユーザー情報を取得」ボタンをクリックすると、JSONPlaceholder API からランダムなユーザー情報を取得して、カード形式で表示するプログラムを作成してください。

**要件**：
- `https://jsonplaceholder.typicode.com/users/[1-10のランダムな数字]` からデータを取得
- 名前、ユーザー名、メールアドレス、電話番号、ウェブサイトを表示
- ローディング表示を含める
- エラーハンドリングを実装
- 取得したデータをコンソールにも出力

**ヒント**：
- `Math.floor(Math.random() * 10) + 1` でランダムなID生成
- `async/await` を使う
- `try-catch` でエラーハンドリング
- `response.ok` でHTTPエラーをチェック

---

### 問題 4-2: 投稿一覧を表示

**課題**：
ページ読み込み時に、JSONPlaceholder API から投稿一覧（最初の10件）を自動的に取得して、一覧形式で表示するプログラムを作成してください。

**要件**：
- `https://jsonplaceholder.typicode.com/posts` から投稿を取得
- 最初の10件だけ表示
- 各投稿にタイトルと本文を表示
- 投稿IDも表示
- ローディング表示を含める
- スタイリングして見やすくする

**ヒント**：
- `DOMContentLoaded` イベントで自動実行
- `.slice(0, 10)` で最初の10件を取得
- `.forEach()` または `.map()` で配列をループ
- カード形式で表示すると見やすい

---

### 問題 4-3: JSONの変換練習

**課題**：
フォームに入力されたユーザー情報（名前、年齢、趣味）を、JSON文字列に変換して画面に表示し、さらにその文字列をパースして元のオブジェクトに戻すプログラムを作成してください。

**要件**：
- 名前（テキスト）、年齢（数値）、趣味（カンマ区切りのテキスト）の入力フォーム
- 「JSON化」ボタンをクリックすると、`JSON.stringify()` でJSON文字列に変換
- JSON文字列を整形して表示（インデント付き）
- 「パース」ボタンをクリックすると、`JSON.parse()` でオブジェクトに戻す
- パース後のオブジェクトの各プロパティを表示

**ヒント**：
- `趣味` は文字列を `.split(',')` で配列に変換
- `JSON.stringify(obj, null, 2)` で整形
- `<pre>` タグで整形されたJSONを表示
- `JSON.parse()` でオブジェクトに戻す

---

## 応用編

### 問題 4-4: POSTリクエストで新規投稿を作成

**課題**：
タイトルと本文を入力して、JSONPlaceholder API に新しい投稿を作成（POSTリクエスト）するプログラムを作成してください。送信成功後、作成された投稿の情報を表示してください。

**要件**：
- タイトルと本文の入力フォーム
- 「投稿する」ボタンで POSTリクエストを送信
- `https://jsonplaceholder.typicode.com/posts` にデータを送信
- リクエスト中はボタンを無効化
- 成功時：作成された投稿の情報（ID、タイトル、本文）を表示
- 失敗時：エラーメッセージを表示
- 送信後、フォームをリセット

**ヒント**：
- `method: "POST"` を指定
- `headers: { "Content-Type": "application/json" }` を設定
- `body: JSON.stringify(data)` でデータを送信
- `button.disabled = true` で二重送信を防止
- `finally` ブロックでボタンを元に戻す

---

### 問題 4-5: HTTPステータスコードで分岐

**課題**：
ユーザーIDを入力して、そのユーザー情報を取得するプログラムを作成してください。存在しないIDの場合は「ユーザーが見つかりません」と表示し、その他のエラーの場合も適切なメッセージを表示してください。

**要件**：
- ユーザーID入力フィールド
- 「検索」ボタンでユーザー情報を取得
- `https://jsonplaceholder.typicode.com/users/[入力されたID]` からデータを取得
- ステータスコード 200：ユーザー情報を表示（成功）
- ステータスコード 404：「ユーザーが見つかりません」と表示
- その他のエラー：「エラーが発生しました（ステータスコード: XXX）」と表示
- ネットワークエラー：「ネットワークエラーです。接続を確認してください」と表示

**ヒント**：
- `response.status` でステータスコードを取得
- `switch` 文または `if-else` で分岐
- ステータスコードごとに異なるメッセージを表示
- エラーの種類（HTTPエラー vs ネットワークエラー）を判定

---

### 問題 4-6: 検索機能付きユーザー一覧（AI への指示例付き）

**課題**：
全ユーザーを取得して一覧表示し、検索ボックスに入力された文字列でユーザー名をフィルタリングできる機能を実装してください。

**要件**：
- ページ読み込み時に全ユーザーを取得（`https://jsonplaceholder.typicode.com/users`）
- ユーザー一覧をカード形式で表示
- 検索ボックスに文字を入力すると、リアルタイムでフィルタリング
- 名前またはユーザー名で検索可能（大文字小文字を区別しない）
- マッチしたユーザーのみ表示、マッチしない場合は「該当するユーザーが見つかりません」と表示
- ローディング状態とエラーハンドリング

**AI への指示例**：

```
「JSONPlaceholder API を使って、検索機能付きユーザー一覧を作成してください：

要件：
- https://jsonplaceholder.typicode.com/users から全ユーザーを取得
- 各ユーザーをカード形式で表示（名前、ユーザー名、メール、会社名）
- 検索ボックスで名前とユーザー名をリアルタイム検索
- 大文字小文字を区別しない検索
- マッチしたユーザーのみ表示
- ローディング表示とエラーハンドリングを含める
- レスポンシブデザインで美しいUI
」
```

**ヒント**：
- 取得したユーザーデータを変数に保存しておく
- `input` イベントで検索ボックスの変更を監視
- `.filter()` でユーザーをフィルタリング
- `.toLowerCase()` で大文字小文字を統一
- `.includes()` で部分一致を検索

---

## チャレンジ

### 問題 4-7: 完全なTODOアプリ（CRUD操作）

**課題**：
JSONPlaceholder API を使って、完全な機能を持つ TODO アプリを作成してください。取得、作成、更新、削除（CRUD）のすべての操作を実装してください。

**要件**：

**取得（Read）**：
- ページ読み込み時に `https://jsonplaceholder.typicode.com/todos?userId=1` から TODO 一覧を取得
- 完了/未完了の状態を視覚的に表示（チェックマーク、色分け）
- 最初の10件のみ表示

**作成（Create）**：
- 新規 TODO を追加するフォーム
- POSTリクエストで `https://jsonplaceholder.typicode.com/todos` に送信
- 追加された TODO を一覧の先頭に表示

**更新（Update）**：
- 各 TODO の完了ボタンをクリックすると、完了状態を切り替え
- PUTリクエストで `https://jsonplaceholder.typicode.com/todos/[id]` に送信
- 状態が変わったことを視覚的に表示

**削除（Delete）**：
- 各 TODO の削除ボタンをクリックすると、その TODO を削除
- DELETEリクエストで `https://jsonplaceholder.typicode.com/todos/[id]` に送信
- 一覧から該当の TODO を削除

**その他の要件**：
- 完了/未完了でフィルタリングできる（全て、完了のみ、未完了のみ）
- 完了した TODO 数と未完了数を表示
- ローディング表示（各操作ごと）
- エラーハンドリング
- 美しいUI（カラフル、アニメーション）
- レスポンシブデザイン

**ヒント**：

**GET リクエスト**：
```javascript
const response = await fetch(
  "https://jsonplaceholder.typicode.com/todos?userId=1"
);
const todos = await response.json();
```

**POST リクエスト**：
```javascript
const response = await fetch(
  "https://jsonplaceholder.typicode.com/todos",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "新しいTODO",
      completed: false,
      userId: 1,
    }),
  }
);
```

**PUT リクエスト**（更新）：
```javascript
const response = await fetch(
  `https://jsonplaceholder.typicode.com/todos/${id}`,
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: todo.title,
      completed: !todo.completed,  // 状態を反転
      userId: 1,
    }),
  }
);
```

**DELETE リクエスト**：
```javascript
const response = await fetch(
  `https://jsonplaceholder.typicode.com/todos/${id}`,
  {
    method: "DELETE",
  }
);
```

**フィルタリング**：
```javascript
const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.completed;
  if (filter === "incomplete") return !todo.completed;
  return true; // "all"
});
```

**注意**：
- JSONPlaceholder は実際のデータベースではないので、変更は永続化されません
- でも、レスポンスは正しく返ってくるので、画面上では動作しているように見せることができます
- 実際のアプリでは、ローカルで状態を管理して、画面を更新します

---

## 演習のポイント

### 基礎編のポイント
- **fetch の基本**を理解する
- **async/await** の使い方を覚える
- **エラーハンドリング**の重要性を知る
- **JSON.parse() と JSON.stringify()** の違いを理解する

### 応用編のポイント
- **POSTリクエスト**でデータを送信する方法
- **HTTPステータスコード**で適切に分岐する
- **検索・フィルタリング**の実装
- **リアルタイム更新**の実装

### チャレンジのポイント
- **CRUD操作**をすべて実装する
- **状態管理**（どのデータを保持するか）
- **UI/UX**（ローディング、エラー表示、成功フィードバック）
- **複雑なアプリの設計**

---

## バイブコーダーへのアドバイス 🤖

### AI に頼る部分
- 基本的な fetch の構造
- エラーハンドリングのテンプレート
- CSS スタイリング
- 繰り返しの処理（forEach、map など）

### 自分で理解すべき部分
- API の URL とエンドポイント
- どのデータを取得/送信するか
- HTTP メソッド（GET、POST、PUT、DELETE）
- レスポンスの構造
- エラーの種類と対処法

### AI への指示のコツ
```
良い指示：
「JSONPlaceholder の todos API を使って、
完了/未完了のフィルタリング機能付き TODO リストを作成してください。
ローディング表示とエラーハンドリングも含めてください。」

悪い指示：
「TODO アプリ作って」
```

---

## 完成したら

演習が終わったら、解答例と比べてみよう！

👉 **[解答例はこちら](solutions/README.md)**

自分のコードと解答例を比較して、より良い書き方を学ぼう！

---

**頑張って！🚀**
