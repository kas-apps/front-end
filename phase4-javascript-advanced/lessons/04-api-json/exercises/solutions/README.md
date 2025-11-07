# Lesson 4: API連携とJSON - 解答例 ✅

お疲れさまでした！演習問題に挑戦してくれてありがとう！
ここでは各問題の解答例を紹介するよ。自分のコードと比べてみてね！

---

## 基礎編

### 問題 4-1: ユーザー情報を取得して表示

**学習ポイント**：
- `fetch()` でAPIからデータを取得する基本
- `async/await` で非同期処理を書く
- `response.json()` でJSONデータに変換
- ローディング表示でユーザー体験を向上

**解答のポイント**：

```javascript
// ランダムなユーザーIDを生成
const randomId = Math.floor(Math.random() * 10) + 1;

// fetch でデータを取得
const response = await fetch(
  `https://jsonplaceholder.typicode.com/users/${randomId}`
);

// HTTPエラーをチェック
if (!response.ok) {
  throw new Error(`HTTPエラー: ${response.status}`);
}

// JSONに変換
const user = await response.json();

// コンソールに出力
console.log("取得したユーザー:", user);

// 画面に表示
result.innerHTML = `
  <div class="user-card">
    <h2>${user.name}</h2>
    <p>👤 ユーザー名: ${user.username}</p>
    <p>📧 メール: ${user.email}</p>
    <p>📞 電話: ${user.phone}</p>
    <p>🌐 ウェブサイト: ${user.website}</p>
  </div>
`;
```

**よくある間違い**：
- ❌ `await` を忘れて Promise のまま使ってしまう
- ❌ `response.json()` に `await` を付け忘れる
- ❌ エラーハンドリングがない

**バイブコーダー向けのヒント**：
AI に「JSONPlaceholder API からランダムなユーザー情報を取得して、カード形式で表示してください。ローディング表示とエラーハンドリングも含めてください」と伝えると、きれいなコードが生成されるよ！

👉 [完全なコード例を見る](04-01.html)

---

### 問題 4-2: 投稿一覧を表示

**学習ポイント**：
- 配列データの取得と処理
- `DOMContentLoaded` で自動実行
- `.slice()` で配列の一部を取得
- `.forEach()` または `.map()` でループ処理

**解答のポイント**：

```javascript
// ページ読み込み時に自動実行
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // ローディング表示
    postsDiv.innerHTML = "<p>読み込み中...⏳</p>";

    // 投稿一覧を取得
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const posts = await response.json();
    console.log("投稿数:", posts.length);

    // 最初の10件だけ取得
    const displayPosts = posts.slice(0, 10);

    // 配列をループして HTML を生成
    let html = "";
    displayPosts.forEach((post) => {
      html += `
        <div class="post-card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <small>投稿ID: ${post.id}</small>
        </div>
      `;
    });

    postsDiv.innerHTML = html;
  } catch (error) {
    console.error("エラー:", error);
    postsDiv.innerHTML = `<p class="error">❌ ${error.message}</p>`;
  }
});
```

**別の書き方（map を使う）**：

```javascript
// map で配列を HTML 配列に変換してから join
const html = displayPosts
  .map(
    (post) => `
      <div class="post-card">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>投稿ID: ${post.id}</small>
      </div>
    `
  )
  .join("");

postsDiv.innerHTML = html;
```

**よくある間違い**：
- ❌ 全件表示してしまう（`.slice()` を忘れる）
- ❌ `DOMContentLoaded` の外で実行してしまい、要素が見つからない
- ❌ `forEach` の中で `innerHTML +=` を使ってしまい、パフォーマンスが悪い

**バイブコーダー向けのヒント**：
「最初の10件だけ」「カード形式で」「各投稿にタイトルと本文とIDを表示」など、具体的に指示すると、希望通りのコードが生成されるよ！

👉 [完全なコード例を見る](04-02.html)

---

### 問題 4-3: JSONの変換練習

**学習ポイント**：
- `JSON.stringify()` でオブジェクトをJSON文字列に変換
- `JSON.stringify()` の第3引数でインデント付き整形
- `JSON.parse()` でJSON文字列をオブジェクトに変換
- `<pre>` タグで整形されたJSONを表示

**解答のポイント**：

```javascript
// フォームからデータを取得
const name = document.getElementById("name").value;
const age = parseInt(document.getElementById("age").value);
const hobbiesInput = document.getElementById("hobbies").value;

// 趣味をカンマで分割して配列に変換
const hobbies = hobbiesInput.split(",").map((hobby) => hobby.trim());

// JavaScriptオブジェクトを作成
const userData = {
  name: name,
  age: age,
  hobbies: hobbies,
};

console.log("オブジェクト:", userData);

// JSON.stringify() でJSON文字列に変換（インデント付き）
const jsonString = JSON.stringify(userData, null, 2);

console.log("JSON文字列:", jsonString);

// <pre> タグで整形して表示
jsonOutput.innerHTML = `<pre>${jsonString}</pre>`;

// パースボタンがクリックされたら
parseBtn.addEventListener("click", () => {
  try {
    // JSON.parse() でオブジェクトに戻す
    const parsedData = JSON.parse(jsonString);

    console.log("パース後のオブジェクト:", parsedData);

    // オブジェクトの内容を表示
    parsedOutput.innerHTML = `
      <div class="parsed-data">
        <p><strong>名前:</strong> ${parsedData.name}</p>
        <p><strong>年齢:</strong> ${parsedData.age}</p>
        <p><strong>趣味:</strong> ${parsedData.hobbies.join(", ")}</p>
      </div>
    `;
  } catch (error) {
    parsedOutput.innerHTML = `<p class="error">パースエラー: ${error.message}</p>`;
  }
});
```

**JSON.stringify() の引数**：

```javascript
// 第1引数: 変換するオブジェクト
// 第2引数: 置換関数またはプロパティ配列（通常は null）
// 第3引数: インデントのスペース数
JSON.stringify(userData, null, 2);

// 結果（見やすく整形される）:
{
  "name": "太郎",
  "age": 25,
  "hobbies": [
    "読書",
    "ゲーム"
  ]
}
```

**よくある間違い**：
- ❌ `.trim()` を忘れて、余分な空白が入る
- ❌ 年齢を文字列のまま保存してしまう（`parseInt()` を忘れる）
- ❌ JSON文字列を保存せずに、パース時に再度生成してしまう

**バイブコーダー向けのヒント**：
「JSON.stringify で整形してから、JSON.parse でパースする流れを実装してください」と伝えると、両方の変換を含むコードが生成されるよ！

👉 [完全なコード例を見る](04-03.html)

---

## 応用編

### 問題 4-4: POSTリクエストで新規投稿を作成

**学習ポイント**：
- POSTリクエストでデータを送信
- `method: "POST"` の指定
- `headers` で Content-Type を設定
- `body` でデータを送信（JSON.stringify で変換）
- ボタンの無効化で二重送信を防止

**解答のポイント**：

```javascript
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
    userId: 1,
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
        method: "POST", // メソッドを指定
        headers: {
          "Content-Type": "application/json", // JSON形式で送信
        },
        body: JSON.stringify(newPost), // JSON文字列に変換
      }
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    // レスポンスを取得
    const createdPost = await response.json();
    console.log("作成された投稿:", createdPost);

    // 成功メッセージ
    result.innerHTML = `
      <div class="success">
        <h3>✅ 投稿に成功しました！</h3>
        <p><strong>ID:</strong> ${createdPost.id}</p>
        <p><strong>タイトル:</strong> ${createdPost.title}</p>
        <p><strong>本文:</strong> ${createdPost.body}</p>
      </div>
    `;

    // フォームをリセット
    postForm.reset();
  } catch (error) {
    console.error("エラー:", error);
    result.innerHTML = `
      <div class="error">
        <h3>❌ 投稿に失敗しました</h3>
        <p>${error.message}</p>
      </div>
    `;
  } finally {
    // ボタンを元に戻す（必ず実行）
    submitBtn.disabled = false;
    submitBtn.textContent = "投稿する";
  }
});
```

**POSTリクエストの構造**：

```javascript
fetch(url, {
  method: "POST",           // ← POSTメソッドを指定
  headers: {
    "Content-Type": "application/json"  // ← JSON形式で送ることを宣言
  },
  body: JSON.stringify(data)  // ← データをJSON文字列に変換
})
```

**よくある間違い**：
- ❌ `method: "POST"` を忘れる（デフォルトはGET）
- ❌ `headers` の `Content-Type` を設定し忘れる
- ❌ `body` に直接オブジェクトを渡してしまう（`JSON.stringify()` を忘れる）
- ❌ `e.preventDefault()` を忘れて、フォームがリロードされる
- ❌ `finally` を使わず、エラー時にボタンが無効のまま

**バイブコーダー向けのヒント**：
「POSTリクエストでデータを送信し、送信中はボタンを無効化し、成功時とエラー時で異なるメッセージを表示してください」と具体的に伝えると良いよ！

👉 [完全なコード例を見る](04-04.html)

---

### 問題 4-5: HTTPステータスコードで分岐

**学習ポイント**：
- `response.status` でステータスコードを取得
- ステータスコードごとに異なる処理
- `switch` 文または `if-else` で分岐
- ネットワークエラーとHTTPエラーの違い

**解答のポイント**：

```javascript
searchBtn.addEventListener("click", async () => {
  const userId = document.getElementById("userId").value;

  // 入力チェック
  if (!userId) {
    result.innerHTML = `<p class="error">ユーザーIDを入力してください</p>`;
    return;
  }

  try {
    // ローディング表示
    result.innerHTML = "<p>検索中...⏳</p>";

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    console.log("ステータスコード:", response.status);

    // ステータスコードで分岐
    if (!response.ok) {
      let errorMessage = "";

      switch (response.status) {
        case 404:
          errorMessage = "ユーザーが見つかりません";
          break;
        case 500:
          errorMessage = "サーバーエラーが発生しました";
          break;
        case 401:
          errorMessage = "認証が必要です";
          break;
        case 403:
          errorMessage = "アクセス権限がありません";
          break;
        default:
          errorMessage = `エラーが発生しました（ステータスコード: ${response.status}）`;
      }

      throw new Error(errorMessage);
    }

    // 成功時（200）
    const user = await response.json();

    result.innerHTML = `
      <div class="success">
        <h3>✅ ユーザーが見つかりました</h3>
        <p><strong>名前:</strong> ${user.name}</p>
        <p><strong>ユーザー名:</strong> ${user.username}</p>
        <p><strong>メール:</strong> ${user.email}</p>
      </div>
    `;
  } catch (error) {
    console.error("エラー:", error);

    // ネットワークエラーかHTTPエラーかを判定
    if (error.message.includes("Failed to fetch")) {
      result.innerHTML = `
        <div class="error">
          <h3>❌ ネットワークエラー</h3>
          <p>インターネット接続を確認してください</p>
        </div>
      `;
    } else {
      result.innerHTML = `
        <div class="error">
          <h3>❌ エラー</h3>
          <p>${error.message}</p>
        </div>
      `;
    }
  }
});
```

**ステータスコードの判定方法**：

```javascript
// 方法1: switch 文
switch (response.status) {
  case 404:
    // 処理
    break;
  case 500:
    // 処理
    break;
  default:
    // その他
}

// 方法2: if-else
if (response.status === 404) {
  // 処理
} else if (response.status === 500) {
  // 処理
} else {
  // その他
}
```

**よくある間違い**：
- ❌ `response.status` と `response.ok` の違いを理解していない
- ❌ すべてのステータスコードを同じエラーメッセージで処理してしまう
- ❌ ネットワークエラーとHTTPエラーを区別していない

**バイブコーダー向けのヒント**：
「ステータスコード404の場合は『ユーザーが見つかりません』、500の場合は『サーバーエラー』と表示してください」のように、具体的なエラーメッセージを指示すると良いよ！

👉 [完全なコード例を見る](04-05.html)

---

### 問題 4-6: 検索機能付きユーザー一覧

**学習ポイント**：
- データを一度取得して、変数に保存
- `input` イベントでリアルタイム検索
- `.filter()` で配列をフィルタリング
- `.toLowerCase()` で大文字小文字を統一
- `.includes()` で部分一致検索

**解答のポイント**：

```javascript
let allUsers = []; // 全ユーザーを保存しておく変数

// ページ読み込み時にユーザーを取得
document.addEventListener("DOMContentLoaded", async () => {
  try {
    userList.innerHTML = "<p>読み込み中...⏳</p>";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    allUsers = await response.json(); // グローバル変数に保存
    console.log("取得したユーザー数:", allUsers.length);

    // 初期表示
    displayUsers(allUsers);
  } catch (error) {
    console.error("エラー:", error);
    userList.innerHTML = `<p class="error">❌ ${error.message}</p>`;
  }
});

// 検索機能
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase(); // 検索文字列を小文字に変換

  // フィルタリング
  const filteredUsers = allUsers.filter((user) => {
    const name = user.name.toLowerCase();
    const username = user.username.toLowerCase();

    // 名前またはユーザー名に検索文字列が含まれるか
    return name.includes(searchTerm) || username.includes(searchTerm);
  });

  console.log(`"${searchTerm}" で検索: ${filteredUsers.length}件`);

  // フィルタリング結果を表示
  if (filteredUsers.length === 0) {
    userList.innerHTML = "<p>該当するユーザーが見つかりません</p>";
  } else {
    displayUsers(filteredUsers);
  }
});

// ユーザー一覧を表示する関数
function displayUsers(users) {
  const html = users
    .map(
      (user) => `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>👤 ${user.username}</p>
          <p>📧 ${user.email}</p>
          <p>🏢 ${user.company.name}</p>
        </div>
      `
    )
    .join("");

  userList.innerHTML = html;
}
```

**フィルタリングのロジック**：

```javascript
// 大文字小文字を区別しない検索
const searchTerm = "john".toLowerCase();  // 検索文字列を小文字に

const filteredUsers = allUsers.filter((user) => {
  const name = user.name.toLowerCase();    // ユーザー名も小文字に
  return name.includes(searchTerm);        // 部分一致検索
});
```

**別の書き方（複数フィールドで検索）**：

```javascript
const filteredUsers = allUsers.filter((user) => {
  const searchableText = `${user.name} ${user.username} ${user.email}`.toLowerCase();
  return searchableText.includes(searchTerm);
});
```

**よくある間違い**：
- ❌ 毎回APIを呼び出してしまう（無駄なリクエスト）
- ❌ `.toLowerCase()` を忘れて、大文字小文字が一致しない
- ❌ `change` イベントを使ってしまい、リアルタイムにならない
- ❌ フィルタリング結果が0件のときの処理を忘れる

**バイブコーダー向けのヒント**：
「一度取得したユーザーデータを変数に保存し、検索ボックスの入力に応じてリアルタイムにフィルタリングしてください」と伝えると、効率的なコードが生成されるよ！

👉 [完全なコード例を見る](04-06.html)

---

## チャレンジ

### 問題 4-7: 完全なTODOアプリ（CRUD操作）

**学習ポイント**：
- CRUD（Create, Read, Update, Delete）の完全実装
- 複数のHTTPメソッド（GET, POST, PUT, DELETE）
- 状態管理（どのデータをどこに保存するか）
- UI/UX（ローディング、成功フィードバック、エラー表示）
- フィルタリング機能

**解答のポイント**：

```javascript
let todos = []; // TODO一覧を保存
let currentFilter = "all"; // 現在のフィルター

// ページ読み込み時にTODOを取得
document.addEventListener("DOMContentLoaded", () => {
  fetchTodos();
});

// 1. 取得（Read）
async function fetchTodos() {
  try {
    loadingDiv.style.display = "block";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=1"
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const data = await response.json();
    todos = data.slice(0, 10); // 最初の10件

    console.log("取得したTODO数:", todos.length);

    displayTodos();
  } catch (error) {
    console.error("エラー:", error);
    alert("TODOの取得に失敗しました");
  } finally {
    loadingDiv.style.display = "none";
  }
}

// 2. 作成（Create）
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = todoInput.value.trim();
  if (!title) return;

  try {
    addBtn.disabled = true;
    addBtn.textContent = "追加中...";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          completed: false,
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const newTodo = await response.json();

    // 一覧の先頭に追加
    todos.unshift(newTodo);

    console.log("作成されたTODO:", newTodo);

    displayTodos();
    addForm.reset();
  } catch (error) {
    console.error("エラー:", error);
    alert("TODOの追加に失敗しました");
  } finally {
    addBtn.disabled = false;
    addBtn.textContent = "追加";
  }
});

// 3. 更新（Update）
async function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...todo,
          completed: !todo.completed, // 状態を反転
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const updatedTodo = await response.json();

    // ローカルのデータを更新
    todo.completed = !todo.completed;

    console.log("更新されたTODO:", updatedTodo);

    displayTodos();
  } catch (error) {
    console.error("エラー:", error);
    alert("TODOの更新に失敗しました");
  }
}

// 4. 削除（Delete）
async function deleteTodo(id) {
  if (!confirm("このTODOを削除しますか？")) return;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    // 一覧から削除
    todos = todos.filter((t) => t.id !== id);

    console.log("削除されたTODO ID:", id);

    displayTodos();
  } catch (error) {
    console.error("エラー:", error);
    alert("TODOの削除に失敗しました");
  }
}

// フィルタリング
function setFilter(filter) {
  currentFilter = filter;
  displayTodos();

  // ボタンのアクティブ状態を更新
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
}

// 表示
function displayTodos() {
  // フィルタリング
  let filteredTodos = todos;
  if (currentFilter === "completed") {
    filteredTodos = todos.filter((t) => t.completed);
  } else if (currentFilter === "incomplete") {
    filteredTodos = todos.filter((t) => !t.completed);
  }

  // カウント更新
  const completedCount = todos.filter((t) => t.completed).length;
  const incompleteCount = todos.length - completedCount;
  countDiv.innerHTML = `
    完了: ${completedCount}件 / 未完了: ${incompleteCount}件
  `;

  // TODO一覧を表示
  const html = filteredTodos
    .map(
      (todo) => `
        <div class="todo-item ${todo.completed ? "completed" : ""}">
          <input
            type="checkbox"
            ${todo.completed ? "checked" : ""}
            onchange="toggleTodo(${todo.id})"
          />
          <span class="todo-title">${todo.title}</span>
          <button class="delete-btn" onclick="deleteTodo(${todo.id})">
            削除
          </button>
        </div>
      `
    )
    .join("");

  todoList.innerHTML = html || "<p>TODOがありません</p>";
}
```

**CRUD操作のまとめ**：

| 操作 | HTTPメソッド | URL | body |
|-----|-------------|-----|------|
| 取得 | GET | `/todos` | なし |
| 作成 | POST | `/todos` | 新しいデータ |
| 更新 | PUT | `/todos/:id` | 更新後のデータ |
| 削除 | DELETE | `/todos/:id` | なし |

**よくある間違い**：
- ❌ 各操作後に画面を更新し忘れる（`displayTodos()` を呼ばない）
- ❌ JSONPlaceholder の制限を理解していない（実際には永続化されない）
- ❌ IDの管理を間違える（削除や更新で違うTODOを操作してしまう）
- ❌ フィルタリング中に追加すると、表示されない（フィルターをリセットする）

**発展的な実装**：
- ローカルストレージに保存して、永続化する
- 編集機能を追加する
- ドラッグ&ドロップで並び替え
- 期限や優先度を追加
- カテゴリー分け

**バイブコーダー向けのヒント**：
このレベルになると、全体の設計が重要！AIに頼むときは：
1. まず全体の機能をリスト化
2. 各機能ごとに分けて実装を依頼
3. 最後に統合

「CRUD操作すべてを実装して」と一度に頼むより、「まずGETで取得」「次にPOSTで追加」のように段階的に頼む方が良いコードになるよ！

👉 [完全なコード例を見る](04-07.html)

---

## 全体を通しての学び

### APIの基本パターン

```javascript
// パターン1: シンプルなGET
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("エラー:", error);
  }
}

// パターン2: POSTでデータ送信
async function postData(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("エラー:", error);
  }
}
```

### エラーハンドリングのベストプラクティス

```javascript
try {
  // リクエスト送信
  const response = await fetch(url);

  // HTTPエラーのチェック（重要！）
  if (!response.ok) {
    throw new Error(`HTTPエラー: ${response.status}`);
  }

  // データ取得
  const data = await response.json();

  // 成功時の処理
  showSuccess(data);
} catch (error) {
  // エラー時の処理
  console.error("エラー:", error);
  showError(error.message);
} finally {
  // 必ず実行される処理（ローディング非表示など）
  hideLoading();
}
```

### UI/UXのポイント

1. **ローディング表示**：処理中であることを伝える
2. **エラーメッセージ**：何が起きたか分かりやすく伝える
3. **成功フィードバック**：操作が成功したことを伝える
4. **ボタンの無効化**：二重送信を防ぐ
5. **確認ダイアログ**：削除などの重要な操作の前に確認

---

## 次のステップ

API連携ができるようになったあなたは、もう**本物のWebアプリケーション開発者**！🎉

次はこんなことに挑戦してみよう：

- **認証機能**：ログイン、トークン管理
- **ページネーション**：大量のデータを分割表示
- **無限スクロール**：スクロールで自動読み込み
- **リアルタイム通信**：WebSocketでチャット
- **外部API連携**：天気、地図、翻訳など

でも焦らなくていいよ！まずはこのレッスンで学んだことをしっかり復習してね！

---

**Happy Coding! 🚀**
