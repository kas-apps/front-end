# Lesson 4: API連携とJSON 🌐

**学習目標**：JSONデータの扱い方を理解し、fetch APIを使ってサーバーと通信し、実際のWebアプリケーションのようにデータを取得・送信・表示できるようになる

---

## なぜAPIとJSONを学ぶの？

「素敵なWebアプリを作りたい！」と思ったとき、HTMLとCSSだけじゃ物足りないよね。JavaScriptでボタンを押したら何かが動くのも楽しいけど、**本当に役立つアプリには「データ」が必要**なんだ！

考えてみて！普段使っているアプリを：

- 🐦 **Twitter/X**：みんなのツイートを表示する → サーバーからツイートデータを取得
- 📷 **Instagram**：写真を投稿する → サーバーに画像データを送信
- 🌤️ **天気予報アプリ**：今日の天気を表示する → 天気APIからデータを取得
- 🛒 **ショッピングサイト**：商品を検索する → 商品データベースから情報を取得

すべてのアプリは、**サーバーとデータをやり取り**しているんだ！

### データのやり取りの流れ

```
【あなたのアプリ】         【サーバー】
    (ブラウザ)              (どこか遠くのコンピューター)
       |                           |
       | "ユーザー一覧ちょうだい！"   |
       |-------------------------->|
       |                           |
       |   [JSON形式でデータを送信]  |
       |<--------------------------|
       |                           |
    画面に表示！                データベースから取得
```

この「データのやり取り」を可能にするのが**API（Application Programming Interface）**なんだ！

### APIって何？

**API**は、プログラム同士がおしゃべりするための「翻訳機」みたいなもの！

**レストランの例え話**：

```
あなた（お客さん）= あなたのアプリ
ウェイター        = API
厨房（キッチン）  = サーバー（データベース）

あなた: 「ハンバーガーください！」
ウェイター: （厨房に伝える）「ハンバーガー1つ！」
厨房: （料理を作る）
ウェイター: （あなたに渡す）「お待たせしました！」
```

APIは、あなたが「データがほしい」とリクエストすると、サーバーに取りに行って、データを持ってきてくれるんだよ！🍔

### JSONって何？

**JSON（JavaScript Object Notation）**は、データをやり取りするときの「共通語」みたいなもの！

プログラミング言語は色々あるよね：JavaScript、Python、Java、PHP...
でも**JSON形式でデータを書けば、どの言語でも理解できる！** だからWebの世界で大人気なんだ！✨

```json
{
  "name": "太郎",
  "age": 25,
  "hobbies": ["読書", "ゲーム", "料理"]
}
```

これがJSON！見たことあるような...そう、JavaScriptのオブジェクトに似てるよね！

### 学ぶこと

このレッスンでは、こんなことができるようになるよ：

- ✅ JSONの書き方と読み方
- ✅ JavaScriptでJSONを扱う（parse / stringify）
- ✅ fetch APIでサーバーからデータを取得（GET）
- ✅ fetch APIでサーバーにデータを送信（POST）
- ✅ HTTPステータスコードの理解
- ✅ エラーハンドリング（ネットワークエラー、404エラーなど）
- ✅ ローディング状態の表示
- ✅ 実際のAPIを使った実践（JSONPlaceholder）

---

## JSONの基礎

### JSONの書き方

JSONは、JavaScriptのオブジェクトにすごく似ているけど、**いくつか厳格なルール**があるよ！

**基本的な書き方**：

```json
{
  "key": "value",
  "number": 123,
  "boolean": true,
  "null_value": null,
  "array": [1, 2, 3],
  "object": {
    "nested": "value"
  }
}
```

### JSONのルール（重要！）

| ルール | 説明 | 良い例 | 悪い例 |
|-------|------|--------|--------|
| **キーは必ず""で囲む** | シングルクォートはダメ！ | `"name": "太郎"` | `'name': "太郎"` ❌ |
| **文字列は""で囲む** | シングルクォートはダメ！ | `"name": "太郎"` | `"name": '太郎'` ❌ |
| **最後のカンマはダメ** | 末尾にカンマを付けない | `{"a": 1, "b": 2}` | `{"a": 1, "b": 2,}` ❌ |
| **コメント不可** | コメントは書けない | `{"name": "太郎"}` | `{"name": "太郎"} // コメント` ❌ |
| **関数は不可** | 関数は含められない | `{"age": 25}` | `{"func": function(){}}` ❌ |

### JSONで使えるデータ型

```json
{
  "string": "文字列",
  "number": 123,
  "float": 123.45,
  "boolean": true,
  "null": null,
  "array": [1, 2, 3],
  "object": {
    "nested": "ネストされたオブジェクト"
  }
}
```

**使えないもの**：
- ❌ `undefined`（`null`を使う）
- ❌ 関数
- ❌ `Date`オブジェクト（文字列に変換する）
- ❌ シンボル

---

## JSON vs JavaScriptオブジェクト

**似ているけど違う！** この違いを理解することが超重要！

### JavaScriptオブジェクト

```javascript
// JavaScriptオブジェクト
const user = {
  name: "太郎",           // キーに""は不要
  age: 25,
  greet: function() {    // 関数もOK
    console.log("こんにちは");
  },
  createdAt: new Date(), // DateオブジェクトもOK
  hobby: '読書'          // シングルクォートもOK
};
```

### JSON（文字列）

```javascript
// JSON（文字列として表現）
const jsonString = `{
  "name": "太郎",        // キーは必ず""
  "age": 25,
  "createdAt": "2024-01-01T00:00:00Z",  // Dateは文字列に変換
  "hobby": "読書"        // 文字列も必ず""
}`;
// 関数は含められない！
```

### 視覚的な比較

```
【JavaScriptオブジェクト】      【JSON】
        ↓                       ↓
    メモリ上に存在           文字列として存在
    プログラムで直接使える    ネットワーク送信可能
    関数も含められる         データのみ（関数は不可）
    柔軟な書き方OK          厳格なルールがある
```

---

## JavaScriptでJSONを扱う

### JSON.parse()：JSON文字列 → JavaScriptオブジェクト

**サーバーから受け取ったJSON文字列を、JavaScriptで使えるオブジェクトに変換する！**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>JSON.parse() の例</title>
  </head>
  <body>
    <h1>JSON.parse() で文字列をオブジェクトに変換</h1>

    <script>
      // サーバーから受け取ったJSON文字列（と仮定）
      const jsonString = '{"name":"太郎","age":25,"city":"東京"}';

      console.log("JSON文字列:", jsonString);
      console.log("型:", typeof jsonString); // "string"

      // JSON.parse() で JavaScriptオブジェクトに変換！
      const user = JSON.parse(jsonString);

      console.log("パース後:", user);
      console.log("型:", typeof user); // "object"

      // これでオブジェクトとして使える！
      console.log("名前:", user.name);   // "太郎"
      console.log("年齢:", user.age);    // 25
      console.log("都市:", user.city);   // "東京"

      // ドット記法でアクセスできる！
      document.body.innerHTML += `<p>${user.name}さんは${user.age}歳です</p>`;
    </script>
  </body>
</html>
```

**結果**：
```
JSON文字列: {"name":"太郎","age":25,"city":"東京"}
型: string
パース後: {name: "太郎", age: 25, city: "東京"}
型: object
名前: 太郎
年齢: 25
都市: 東京
```

### JSON.stringify()：JavaScriptオブジェクト → JSON文字列

**JavaScriptオブジェクトを、サーバーに送信できるJSON文字列に変換する！**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>JSON.stringify() の例</title>
  </head>
  <body>
    <h1>JSON.stringify() でオブジェクトを文字列に変換</h1>

    <script>
      // JavaScriptオブジェクト
      const user = {
        name: "花子",
        age: 28,
        hobbies: ["読書", "旅行", "料理"],
        address: {
          city: "大阪",
          zip: "530-0001"
        }
      };

      console.log("オブジェクト:", user);
      console.log("型:", typeof user); // "object"

      // JSON.stringify() でJSON文字列に変換！
      const jsonString = JSON.stringify(user);

      console.log("JSON文字列:", jsonString);
      console.log("型:", typeof jsonString); // "string"

      // インデント付きで見やすく表示
      const prettyJson = JSON.stringify(user, null, 2);
      console.log("整形されたJSON:\n", prettyJson);

      // HTMLに表示
      document.body.innerHTML += `<pre>${prettyJson}</pre>`;
    </script>
  </body>
</html>
```

**結果**：
```javascript
// 整形されたJSON:
{
  "name": "花子",
  "age": 28,
  "hobbies": [
    "読書",
    "旅行",
    "料理"
  ],
  "address": {
    "city": "大阪",
    "zip": "530-0001"
  }
}
```

### JSON.stringify() の第2、第3引数

```javascript
const data = { name: "太郎", age: 25, password: "secret123" };

// 基本的な使い方
JSON.stringify(data);
// {"name":"太郎","age":25,"password":"secret123"}

// 第2引数：特定のキーだけ含める
JSON.stringify(data, ["name", "age"]);
// {"name":"太郎","age":25}  ← password は除外された！

// 第3引数：インデント（見やすくする）
JSON.stringify(data, null, 2);
/*
{
  "name": "太郎",
  "age": 25,
  "password": "secret123"
}
*/
```

---

## fetch API の基礎

### fetch() って何？

**fetch()** は、JavaScriptでサーバーと通信するための**最新で便利な方法**だよ！

昔は `XMLHttpRequest` という難しい方法を使っていたけど、今は**fetch()** を使えばシンプルに書ける！✨

### 基本的な構文

```javascript
fetch(URL)
  .then(response => response.json())  // レスポンスをJSONに変換
  .then(data => {
    // データを使って何かする
    console.log(data);
  })
  .catch(error => {
    // エラーが起きたときの処理
    console.error("エラー:", error);
  });
```

### async/await を使った書き方（こっちの方が読みやすい！）

```javascript
async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchData();
```

---

## GETリクエスト：データを取得する

**GETリクエスト**は、サーバーからデータを「読み取る」ときに使うよ！

### 基本的な例：ユーザー情報を取得

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>fetch GET リクエスト</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
      }
      button {
        background: #4caf50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background: #45a049;
      }
      #result {
        margin-top: 20px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 5px;
      }
      .user-card {
        background: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <h1>🌐 ユーザー情報を取得</h1>
    <button id="fetchBtn">ユーザー情報を取得</button>
    <div id="result"></div>

    <script>
      const fetchBtn = document.getElementById("fetchBtn");
      const result = document.getElementById("result");

      // ボタンをクリックしたら、ユーザー情報を取得
      fetchBtn.addEventListener("click", async () => {
        try {
          // ローディング表示
          result.innerHTML = "<p>読み込み中...⏳</p>";

          // JSONPlaceholder API からユーザー情報を取得
          // これは誰でも練習用に使える無料のAPIだよ！
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
          );

          // レスポンスが成功したかチェック
          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }

          // JSONデータに変換
          const user = await response.json();

          console.log("取得したユーザー:", user);

          // 画面に表示
          result.innerHTML = `
            <div class="user-card">
              <h2>${user.name}</h2>
              <p><strong>ユーザー名:</strong> ${user.username}</p>
              <p><strong>メール:</strong> ${user.email}</p>
              <p><strong>電話:</strong> ${user.phone}</p>
              <p><strong>ウェブサイト:</strong> ${user.website}</p>
              <p><strong>会社:</strong> ${user.company.name}</p>
            </div>
          `;
        } catch (error) {
          // エラー時の表示
          console.error("エラーが発生しました:", error);
          result.innerHTML = `
            <p style="color: red;">❌ データの取得に失敗しました</p>
            <p>${error.message}</p>
          `;
        }
      });
    </script>
  </body>
</html>
```

### コードの流れを理解しよう

```javascript
// 1. fetchでAPIを呼び出す
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
// → サーバーにリクエストを送信
// → responseオブジェクトを受け取る

// 2. レスポンスが成功したかチェック
if (!response.ok) {
  throw new Error(`HTTPエラー: ${response.status}`);
}
// → response.ok は、ステータスコードが200-299なら true

// 3. JSONデータに変換
const user = await response.json();
// → response.json() はPromiseを返すので await が必要
// → JSONをJavaScriptオブジェクトに変換

// 4. データを使う
console.log(user.name);  // ユーザー名を表示
```

### 複数のデータを取得：ユーザー一覧

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>複数のユーザーを取得</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
      }
      button {
        background: #2196f3;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      #userList {
        margin-top: 20px;
      }
      .user-card {
        background: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #2196f3;
      }
    </style>
  </head>
  <body>
    <h1>👥 ユーザー一覧</h1>
    <button id="fetchBtn">全ユーザーを取得</button>
    <div id="userList"></div>

    <script>
      const fetchBtn = document.getElementById("fetchBtn");
      const userList = document.getElementById("userList");

      fetchBtn.addEventListener("click", async () => {
        try {
          userList.innerHTML = "<p>読み込み中...⏳</p>";

          // 全ユーザーを取得（配列が返ってくる）
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }

          const users = await response.json();
          console.log("取得したユーザー数:", users.length);

          // 配列をループして表示
          let html = "";
          users.forEach((user) => {
            html += `
              <div class="user-card">
                <h3>${user.name}</h3>
                <p>📧 ${user.email}</p>
                <p>🏢 ${user.company.name}</p>
              </div>
            `;
          });

          userList.innerHTML = html;
        } catch (error) {
          console.error("エラー:", error);
          userList.innerHTML = `<p style="color: red;">❌ ${error.message}</p>`;
        }
      });
    </script>
  </body>
</html>
```

---

## POSTリクエスト：データを送信する

**POSTリクエスト**は、サーバーにデータを「送信」するときに使うよ！

例：
- ユーザー登録
- ブログ記事の投稿
- コメントの送信

### 基本的な構文

```javascript
fetch(URL, {
  method: "POST",           // HTTPメソッド
  headers: {
    "Content-Type": "application/json"  // JSON形式で送ることを宣言
  },
  body: JSON.stringify(data)  // 送信するデータ（JSON文字列に変換）
})
```

### 実例：新しい投稿を作成

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>POST リクエスト</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
      }
      form {
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
      }
      input,
      textarea {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
      }
      button {
        background: #ff5722;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
      }
      button:hover {
        background: #e64a19;
      }
      button:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
      #result {
        margin-top: 20px;
        padding: 15px;
        border-radius: 5px;
      }
      .success {
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
      }
      .error {
        background: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
      }
    </style>
  </head>
  <body>
    <h1>📝 新しい投稿を作成</h1>

    <form id="postForm">
      <input
        type="text"
        id="title"
        placeholder="タイトル"
        required
      />
      <textarea
        id="body"
        rows="5"
        placeholder="本文"
        required
      ></textarea>
      <button type="submit" id="submitBtn">投稿する</button>
    </form>

    <div id="result"></div>

    <script>
      const postForm = document.getElementById("postForm");
      const submitBtn = document.getElementById("submitBtn");
      const result = document.getElementById("result");

      postForm.addEventListener("submit", async (e) => {
        // フォームのデフォルト動作（ページリロード）を防ぐ
        e.preventDefault();

        // 入力値を取得
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;

        // 送信するデータを準備
        const newPost = {
          title: title,
          body: body,
          userId: 1, // ユーザーID（仮）
        };

        console.log("送信するデータ:", newPost);

        try {
          // ボタンを無効化（二重送信防止）
          submitBtn.disabled = true;
          submitBtn.textContent = "送信中...⏳";

          // POSTリクエストを送信
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // JSON形式で送信
              },
              body: JSON.stringify(newPost), // オブジェクトをJSON文字列に変換
            }
          );

          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }

          // サーバーからのレスポンスを取得
          const createdPost = await response.json();
          console.log("作成された投稿:", createdPost);

          // 成功メッセージ
          result.className = "success";
          result.innerHTML = `
            <h3>✅ 投稿に成功しました！</h3>
            <p><strong>ID:</strong> ${createdPost.id}</p>
            <p><strong>タイトル:</strong> ${createdPost.title}</p>
            <p><strong>本文:</strong> ${createdPost.body}</p>
          `;

          // フォームをリセット
          postForm.reset();
        } catch (error) {
          console.error("エラー:", error);
          result.className = "error";
          result.innerHTML = `
            <h3>❌ 投稿に失敗しました</h3>
            <p>${error.message}</p>
          `;
        } finally {
          // ボタンを元に戻す
          submitBtn.disabled = false;
          submitBtn.textContent = "投稿する";
        }
      });
    </script>
  </body>
</html>
```

### POSTリクエストのポイント

```javascript
// 1. メソッドを "POST" に指定
method: "POST"

// 2. Content-Type ヘッダーを設定
headers: {
  "Content-Type": "application/json"
}
// → サーバーに「JSON形式でデータを送るよ！」と伝える

// 3. body にデータを指定（JSON文字列に変換）
body: JSON.stringify(newPost)
// → JavaScriptオブジェクトをJSON文字列に変換してから送る
```

---

## HTTPステータスコード

サーバーからのレスポンスには、**ステータスコード**という番号が付いてくるよ！
これは、リクエストが成功したか失敗したかを教えてくれる「信号機」みたいなもの！🚦

### 主要なステータスコード

| コード | 意味 | 説明 |
|-------|------|------|
| **200** | OK | ✅ 成功！データを正常に取得できた |
| **201** | Created | ✅ 作成成功！新しいデータが作られた |
| **400** | Bad Request | ❌ リクエストが間違っている |
| **401** | Unauthorized | ❌ 認証が必要（ログインしてね） |
| **403** | Forbidden | ❌ アクセス権限がない |
| **404** | Not Found | ❌ データが見つからない |
| **500** | Internal Server Error | ❌ サーバー側でエラーが起きた |

### ステータスコードで分岐する

```javascript
const response = await fetch(url);

// response.status でステータスコードを取得
console.log("ステータスコード:", response.status);

// response.ok は、200-299 なら true
if (response.ok) {
  console.log("成功！");
} else {
  console.log("失敗...");
}

// 個別にチェックすることもできる
if (response.status === 404) {
  console.log("データが見つかりません");
} else if (response.status === 500) {
  console.log("サーバーエラーです");
}
```

### 実践例：ステータスコードでエラーメッセージを変える

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ステータスコード処理</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
      }
      button {
        margin: 10px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      .success-btn {
        background: #4caf50;
        color: white;
      }
      .error-btn {
        background: #f44336;
        color: white;
      }
      #result {
        margin-top: 20px;
        padding: 15px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>📊 HTTPステータスコードの処理</h1>

    <button class="success-btn" onclick="fetchSuccess()">
      成功するリクエスト（200）
    </button>
    <button class="error-btn" onclick="fetchNotFound()">
      失敗するリクエスト（404）
    </button>

    <div id="result"></div>

    <script>
      const result = document.getElementById("result");

      // 成功するリクエスト
      async function fetchSuccess() {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
          );

          console.log("ステータスコード:", response.status);
          console.log("response.ok:", response.ok);

          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }

          const data = await response.json();

          result.style.background = "#d4edda";
          result.style.color = "#155724";
          result.innerHTML = `
            <h3>✅ 成功（${response.status} OK）</h3>
            <p>ユーザー名: ${data.name}</p>
          `;
        } catch (error) {
          showError(error);
        }
      }

      // 失敗するリクエスト（存在しないID）
      async function fetchNotFound() {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/999999"
          );

          console.log("ステータスコード:", response.status);
          console.log("response.ok:", response.ok);

          // ステータスコードで詳細なエラーメッセージを表示
          if (!response.ok) {
            let errorMessage = "";

            switch (response.status) {
              case 404:
                errorMessage = "データが見つかりませんでした";
                break;
              case 500:
                errorMessage = "サーバーエラーが発生しました";
                break;
              case 401:
                errorMessage = "認証が必要です";
                break;
              default:
                errorMessage = `エラーが発生しました（${response.status}）`;
            }

            throw new Error(errorMessage);
          }

          const data = await response.json();
        } catch (error) {
          showError(error);
        }
      }

      function showError(error) {
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        result.innerHTML = `
          <h3>❌ エラー</h3>
          <p>${error.message}</p>
        `;
      }
    </script>
  </body>
</html>
```

---

## リクエストヘッダー

**ヘッダー**は、リクエストやレスポンスに添付される「メタ情報」だよ！

### よく使うヘッダー

```javascript
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",  // JSON形式で送る
    "Authorization": "Bearer token123",  // 認証トークン
    "Accept": "application/json",        // JSON形式で受け取る
    "User-Agent": "MyApp/1.0",          // アプリの情報
  },
  body: JSON.stringify(data)
});
```

### 主なヘッダー

| ヘッダー | 説明 |
|---------|------|
| **Content-Type** | 送信するデータの形式（`application/json` など） |
| **Authorization** | 認証情報（トークンなど） |
| **Accept** | 受け取りたいデータの形式 |
| **User-Agent** | クライアントの情報 |

---

## エラーハンドリング戦略

API通信では、**色々なエラーが起こる可能性がある**から、しっかり対処しよう！

### エラーの種類

1. **ネットワークエラー**：インターネットに繋がっていない、サーバーがダウンしている
2. **HTTPエラー**：404（見つからない）、500（サーバーエラー）など
3. **JSONパースエラー**：サーバーから正しいJSONが返ってこない
4. **タイムアウト**：リクエストに時間がかかりすぎる

### 堅牢なエラーハンドリング例

```javascript
async function fetchDataWithErrorHandling(url) {
  try {
    // リクエスト送信
    const response = await fetch(url);

    // HTTPエラーをチェック
    if (!response.ok) {
      // ステータスコードに応じてエラーメッセージを変える
      if (response.status === 404) {
        throw new Error("データが見つかりませんでした");
      } else if (response.status === 500) {
        throw new Error("サーバーエラーが発生しました");
      } else {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
    }

    // JSONパースを試みる
    const data = await response.json();
    return { success: true, data };

  } catch (error) {
    // ネットワークエラーなどをキャッチ
    console.error("エラーが発生しました:", error);

    // エラーの種類を判定
    if (error.name === "TypeError") {
      // ネットワークエラー
      return {
        success: false,
        error: "ネットワークエラーです。インターネット接続を確認してください。",
      };
    } else if (error.name === "SyntaxError") {
      // JSONパースエラー
      return {
        success: false,
        error: "データの形式が正しくありません。",
      };
    } else {
      // その他のエラー
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
```

---

## ローディング状態の表示

APIリクエストには時間がかかることがあるから、**ローディング表示**を出してユーザーに「処理中だよ！」と伝えるのが親切！

### ローディング状態のパターン

```javascript
// 1. ローディング開始
showLoading();

try {
  // 2. データ取得
  const response = await fetch(url);
  const data = await response.json();

  // 3. データ表示
  showData(data);

} catch (error) {
  // 4. エラー表示
  showError(error);

} finally {
  // 5. ローディング終了（必ず実行される）
  hideLoading();
}
```

### 実装例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ローディング表示</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
      }
      button {
        background: #673ab7;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      button:disabled {
        background: #ccc;
      }
      .loading {
        display: none;
        margin-top: 20px;
        padding: 20px;
        background: #e3f2fd;
        border-radius: 5px;
        text-align: center;
      }
      .loading.show {
        display: block;
      }
      .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #2196f3;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      #result {
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>⏳ ローディング表示の例</h1>
    <button id="fetchBtn">データを取得</button>

    <div id="loading" class="loading">
      <div class="spinner"></div>
      <p>データを読み込み中...</p>
    </div>

    <div id="result"></div>

    <script>
      const fetchBtn = document.getElementById("fetchBtn");
      const loading = document.getElementById("loading");
      const result = document.getElementById("result");

      fetchBtn.addEventListener("click", async () => {
        // ローディング開始
        fetchBtn.disabled = true;
        loading.classList.add("show");
        result.innerHTML = "";

        try {
          // 意図的に遅延を追加（ローディングを見やすくするため）
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );

          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }

          const posts = await response.json();

          // 最初の5件だけ表示
          const html = posts.slice(0, 5).map(post => `
            <div style="background: white; padding: 15px; margin: 10px 0; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `).join("");

          result.innerHTML = `<h3>✅ ${posts.length}件の投稿を取得しました</h3>${html}`;

        } catch (error) {
          console.error("エラー:", error);
          result.innerHTML = `
            <div style="background: #f8d7da; padding: 15px; border-radius: 5px; color: #721c24;">
              ❌ ${error.message}
            </div>
          `;
        } finally {
          // ローディング終了（必ず実行）
          loading.classList.remove("show");
          fetchBtn.disabled = false;
        }
      });
    </script>
  </body>
</html>
```

---

## 実践例：JSONPlaceholder APIを使う

**JSONPlaceholder** は、API練習用の無料サービスだよ！
実際のデータベースはないけど、リクエストを送るとちゃんとレスポンスを返してくれる！

### 利用できるエンドポイント

```
https://jsonplaceholder.typicode.com/users      → ユーザー一覧
https://jsonplaceholder.typicode.com/posts      → 投稿一覧
https://jsonplaceholder.typicode.com/comments   → コメント一覧
https://jsonplaceholder.typicode.com/albums     → アルバム一覧
https://jsonplaceholder.typicode.com/photos     → 写真一覧
https://jsonplaceholder.typicode.com/todos      → TODO一覧

// 個別取得
https://jsonplaceholder.typicode.com/users/1    → ID=1のユーザー
https://jsonplaceholder.typicode.com/posts/1    → ID=1の投稿
```

### 実践：投稿とユーザー情報を組み合わせて表示

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>投稿一覧アプリ</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background: #f5f5f5;
      }
      h1 {
        text-align: center;
        color: #333;
      }
      button {
        display: block;
        margin: 20px auto;
        background: #9c27b0;
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
      }
      .post {
        background: white;
        padding: 20px;
        margin: 15px 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #9c27b0;
      }
      .post-title {
        color: #9c27b0;
        margin: 0;
      }
      .author {
        background: #9c27b0;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <h1>📝 投稿一覧アプリ</h1>
    <button id="loadBtn">投稿を読み込む</button>
    <div id="posts"></div>

    <script>
      const loadBtn = document.getElementById("loadBtn");
      const postsDiv = document.getElementById("posts");

      loadBtn.addEventListener("click", async () => {
        try {
          // ローディング表示
          postsDiv.innerHTML = "<p style='text-align: center;'>読み込み中...⏳</p>";
          loadBtn.disabled = true;

          // 投稿とユーザーを並行して取得（高速化！）
          const [postsResponse, usersResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users"),
          ]);

          // エラーチェック
          if (!postsResponse.ok || !usersResponse.ok) {
            throw new Error("データの取得に失敗しました");
          }

          const posts = await postsResponse.json();
          const users = await usersResponse.json();

          console.log("投稿数:", posts.length);
          console.log("ユーザー数:", users.length);

          // ユーザーをIDで検索しやすいようにMapに変換
          const userMap = new Map();
          users.forEach((user) => {
            userMap.set(user.id, user);
          });

          // 最初の10件だけ表示
          const html = posts.slice(0, 10).map((post) => {
            const author = userMap.get(post.userId);
            return `
              <div class="post">
                <div class="post-header">
                  <h3 class="post-title">${post.title}</h3>
                  <span class="author">👤 ${author.name}</span>
                </div>
                <p>${post.body}</p>
                <small style="color: #666;">投稿ID: ${post.id} | ユーザーID: ${post.userId}</small>
              </div>
            `;
          }).join("");

          postsDiv.innerHTML = html;

        } catch (error) {
          console.error("エラー:", error);
          postsDiv.innerHTML = `
            <div style="background: #f8d7da; padding: 20px; border-radius: 5px; color: #721c24; text-align: center;">
              ❌ ${error.message}
            </div>
          `;
        } finally {
          loadBtn.disabled = false;
        }
      });
    </script>
  </body>
</html>
```

---

## バイブコーディング実践：AIと一緒にAPI連携を実装しよう！ 🤖

### AIへの指示例

#### 良い指示の例 ✅

```
「JSONPlaceholder APIを使って、TODOリストアプリを作成してください：

要件：
- https://jsonplaceholder.typicode.com/todos からTODO一覧を取得
- 完了/未完了の状態を視覚的に表示（チェックマーク、色分け）
- ユーザーごとにフィルタリングできる機能
- ローディング表示を含める
- エラーハンドリングを実装
- レスポンシブデザイン
」
```

**なぜ良い？**：
- 使用するAPI URLを具体的に指定
- 必要な機能を箇条書きで明確に
- UI要件も含めている
- エラーハンドリングなど、実用的な要素も指示

#### 曖昧な指示の例 ❌

```
「APIを使ってデータを表示して」
```

**なぜダメ？**：
- どのAPIを使うか不明
- どんなデータを表示するか不明
- どう表示するか不明

### 生成されたコードの読み方チェックリスト

AIが生成したAPI連携コードをレビューするときは、これをチェック！

#### 1. fetch の基本構造

```javascript
// ✅ チェック項目
const response = await fetch(url);  // await が付いている？
const data = await response.json(); // response.json() にも await が付いている？
```

#### 2. エラーハンドリング

```javascript
// ✅ チェック項目
try {
  const response = await fetch(url);

  // response.ok でHTTPエラーをチェックしている？
  if (!response.ok) {
    throw new Error(`HTTPエラー: ${response.status}`);
  }

  const data = await response.json();
} catch (error) {
  // エラーをキャッチして、ユーザーに表示している？
  console.error("エラー:", error);
  // エラーメッセージを画面に表示
}
```

#### 3. ローディング表示

```javascript
// ✅ チェック項目
// ローディング開始
showLoading();  // リクエスト前にローディング表示

try {
  const response = await fetch(url);
  // ...
} finally {
  // finally ブロックでローディングを必ず消している？
  hideLoading();
}
```

#### 4. POSTリクエストの設定

```javascript
// ✅ チェック項目
fetch(url, {
  method: "POST",  // メソッドが指定されている？
  headers: {
    "Content-Type": "application/json"  // ヘッダーが正しい？
  },
  body: JSON.stringify(data)  // JSON.stringify() で変換している？
})
```

#### 5. レスポンスの処理

```javascript
// ✅ チェック項目
const data = await response.json();  // .json() を呼んでいる？

// データが配列の場合、ループで処理している？
data.forEach(item => {
  // 表示処理
});
```

### よくある問題と修正方法

#### 問題1：await を忘れている

```javascript
// ❌ 悪い例
const response = fetch(url);  // await がない！
const data = response.json();  // Promise のまま！

console.log(data);  // Promise {<pending>} と表示される😱
```

```javascript
// ✅ 良い例
const response = await fetch(url);  // await を付ける
const data = await response.json(); // これにも await

console.log(data);  // ちゃんとデータが取得できる！
```

**修正方法**：
- `fetch()` と `response.json()` の両方に `await` を付ける
- 関数を `async function` にするのを忘れずに！

---

#### 問題2：CORSエラーが出る

```
Access to fetch at 'https://example.com/api' from origin 'http://localhost'
has been blocked by CORS policy
```

**原因**：
サーバー側が、あなたのドメインからのアクセスを許可していない。

**CORS（Cross-Origin Resource Sharing）とは？**
- ブラウザのセキュリティ機能
- 異なるドメインへのリクエストを制限
- サーバー側が許可しないとアクセスできない

**対処法**：
1. **練習用には JSONPlaceholder を使う**（CORSエラーが出ない）
2. サーバー側の設定を変更する（自分のサーバーの場合）
3. プロキシサーバーを経由する（開発環境）

**AIへの指示例**：
```
「CORSエラーを避けるために、JSONPlaceholder API（https://jsonplaceholder.typicode.com）
を使って、ユーザー一覧を取得するコードを書いてください」
```

---

#### 問題3：エラーハンドリングがない

```javascript
// ❌ 悪い例：エラーが起きたら画面が真っ白に！
const response = await fetch(url);
const data = await response.json();
```

```javascript
// ✅ 良い例：エラーをキャッチして表示
try {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTPエラー: ${response.status}`);
  }

  const data = await response.json();

} catch (error) {
  console.error("エラー:", error);
  // ユーザーに分かりやすいメッセージを表示
  alert("データの取得に失敗しました");
}
```

**修正方法**：
- `try-catch` で囲む
- `response.ok` でHTTPエラーをチェック
- エラーメッセージを画面に表示

---

#### 問題4：ローディング中に二重クリックできてしまう

```javascript
// ❌ 悪い例：ボタンを連打するとリクエストが複数回送信される
button.addEventListener("click", async () => {
  const response = await fetch(url);
  // ...
});
```

```javascript
// ✅ 良い例：ボタンを無効化
button.addEventListener("click", async () => {
  button.disabled = true;  // ボタンを無効化
  button.textContent = "読み込み中...";

  try {
    const response = await fetch(url);
    // ...
  } finally {
    button.disabled = false;  // ボタンを有効に戻す
    button.textContent = "読み込む";
  }
});
```

**修正方法**：
- リクエスト前に `button.disabled = true`
- `finally` ブロックで `button.disabled = false`

---

#### 問題5：HTTPエラーをキャッチできていない

```javascript
// ❌ 悪い例：404エラーでも catch に入らない！
try {
  const response = await fetch(url);  // 404でもエラーにならない
  const data = await response.json();
} catch (error) {
  // ここに来ない！
}
```

**なぜ？**：
`fetch()` は、404や500などのHTTPエラーでは例外をスローしない！
ネットワークエラー（オフラインなど）のときだけ例外をスローする。

```javascript
// ✅ 良い例：response.ok でチェック
try {
  const response = await fetch(url);

  // HTTPエラーを明示的にチェック！
  if (!response.ok) {
    throw new Error(`HTTPエラー: ${response.status}`);
  }

  const data = await response.json();
} catch (error) {
  // ここでHTTPエラーもキャッチできる！
  console.error("エラー:", error);
}
```

**修正方法**：
- `response.ok` でHTTPステータスをチェック
- エラーの場合は `throw new Error()` で例外をスロー

---

### カスタマイズポイント

AIが生成したコードを、自分好みにカスタマイズしよう！

#### 1. ローディング表示のカスタマイズ

```javascript
// シンプルなテキスト表示
element.innerHTML = "読み込み中...";

// スピナーアニメーション
element.innerHTML = `
  <div class="spinner"></div>
  <p>データを取得中...</p>
`;

// プログレスバー
element.innerHTML = `
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
`;
```

#### 2. エラーメッセージのカスタマイズ

```javascript
// シンプルな表示
alert("エラーが発生しました");

// 詳細な表示
element.innerHTML = `
  <div class="error-box">
    <h3>❌ エラーが発生しました</h3>
    <p>${error.message}</p>
    <button onclick="retry()">再試行</button>
  </div>
`;
```

#### 3. データ表示のカスタマイズ

```javascript
// シンプルなリスト
data.forEach(item => {
  html += `<p>${item.name}</p>`;
});

// カード形式
data.forEach(item => {
  html += `
    <div class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <button>詳細</button>
    </div>
  `;
});
```

---

## まとめ ✅

お疲れさま！このレッスンで、APIとJSONについて沢山学んだね！

### 学んだこと

- ✅ **JSONの書き方**：`{"key": "value"}` の形式、厳格なルール
- ✅ **JSON.parse()**：JSON文字列 → JavaScriptオブジェクト
- ✅ **JSON.stringify()**：JavaScriptオブジェクト → JSON文字列
- ✅ **fetch API**：サーバーとデータをやり取りする
- ✅ **GETリクエスト**：データを取得する
- ✅ **POSTリクエスト**：データを送信する
- ✅ **HTTPステータスコード**：200（成功）、404（見つからない）など
- ✅ **エラーハンドリング**：try-catch、response.ok のチェック
- ✅ **ローディング表示**：ユーザーに処理中を伝える
- ✅ **JSONPlaceholder**：練習用の無料API

### できるようになったこと

- サーバーからデータを取得して表示できる
- フォームのデータをサーバーに送信できる
- エラーが起きても適切に処理できる
- ローディング中の状態を表示できる
- 実際のWebアプリケーションのようなデータ連携ができる

### 次のステップ

これで、**本物のWebアプリケーション**を作る準備が整ったよ！🎉

次はこんなことに挑戦してみよう：

- **認証機能**：ログイン、ログアウト
- **リアルタイム更新**：WebSocketでチャット機能
- **外部API連携**：天気API、地図API、翻訳APIなど
- **SPAフレームワーク**：React、Vueなどを使った開発

でもその前に、しっかり演習問題で練習しておこう！💪

---

## 演習問題にチャレンジ！ 📚

準備はいい？じゃあ、実際にコードを書いて練習してみよう！

👉 **[演習問題はこちら](exercises/README.md)**

基礎編、応用編、チャレンジの3段階で用意してあるよ！
自分のペースで進めてね！

---

**Happy Coding! 🚀**
