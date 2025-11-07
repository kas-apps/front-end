# Lesson 5: 基本的な DOM 操作 🎯

**学習目標**：JavaScript を使って HTML 要素を操作でき、ユーザーのクリックなどのイベントに反応できるようになる

---

## なぜ DOM 操作を学ぶの？

ここまでで JavaScript の基礎を学んだね。でも、それだけでは Console に出力するだけで、実際の Web ページに変化を起こせない...

**DOM 操作を使えば、ボタンをクリックしたら色が変わる、テキストが変わる、要素が追加される、といった動きのある Web ページが作れるよ！** 💪

### できるようになること

- ボタンをクリックしたら文字が変わる
- 入力した内容をページに表示する
- 要素の色やスタイルを動的に変更する
- 新しい要素を追加・削除する

**これで初めて「動きのある Web サイト」が作れるよ！** ✨

---

## DOM とは？

**DOM（Document Object Model）は、HTML をJavaScript で操作できるようにしたもの！**

```
HTML（静的な文書）
    ↓
DOM（JavaScriptで操作できるオブジェクト）
    ↓
JavaScript で変更
    ↓
ブラウザに反映
```

**例え話**：HTML は設計図、DOM はその設計図を実際に操作できるようにしたリモコン！ 🎮

---

## 要素の取得

### querySelector(): CSS セレクタで取得

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>DOM操作</title>
  </head>
  <body>
    <h1 id="title">こんにちは</h1>
    <p class="message">これはメッセージです</p>
    <button id="btn">クリック</button>

    <script>
      // IDで取得
      const title = document.querySelector("#title");
      console.log(title); // → <h1 id="title">こんにちは</h1>

      // クラスで取得（最初の1つだけ）
      const message = document.querySelector(".message");
      console.log(message); // → <p class="message">...</p>

      // タグ名で取得
      const button = document.querySelector("button");
      console.log(button); // → <button id="btn">...</button>
    </script>
  </body>
</html>
```

---

### querySelectorAll(): 複数の要素を取得

```html
<ul>
  <li>項目1</li>
  <li>項目2</li>
  <li>項目3</li>
</ul>

<script>
  // すべてのli要素を取得
  const items = document.querySelectorAll("li");
  console.log(items.length); // → 3

  // forEach で繰り返し処理
  items.forEach((item, index) => {
    console.log(`${index + 1}番目: ${item.textContent}`);
  });
</script>
```

---

### getElementById(): ID で取得（古い方法）

```javascript
// 古い方法（まだ使える）
const title = document.getElementById("title");

// 新しい方法（推奨）
const title = document.querySelector("#title");
```

**モダンな JavaScript では `querySelector` を使おう！** ⭐

---

## 要素の内容を変更する

### textContent: テキストのみを変更

```html
<p id="message">元のメッセージ</p>

<script>
  const message = document.querySelector("#message");

  // テキストを変更
  message.textContent = "新しいメッセージ！";
  // → 画面に「新しいメッセージ！」と表示される
</script>
```

---

### innerHTML: HTML ごと変更

```html
<div id="content">元のコンテンツ</div>

<script>
  const content = document.querySelector("#content");

  // HTMLタグも含めて変更
  content.innerHTML = "<strong>太字のテキスト</strong>";
  // → 画面に太字で表示される
</script>
```

**注意**：`innerHTML` はセキュリティリスクがあるので、ユーザー入力を直接入れないように！ ⚠️

---

## スタイルの変更

### style プロパティ

```html
<p id="text">このテキストの色を変えます</p>

<script>
  const text = document.querySelector("#text");

  // 色を変更
  text.style.color = "red";

  // 背景色を変更
  text.style.backgroundColor = "yellow";

  // フォントサイズを変更
  text.style.fontSize = "24px";
</script>
```

**注意**：CSS のプロパティ名は、ケバブケースからキャメルケースに変わる！

- CSS: `background-color`
- JavaScript: `backgroundColor`

---

## クラスの操作

### classList

```html
<style>
  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
  .large {
    font-size: 24px;
  }
</style>

<p id="text">このテキストにクラスを追加します</p>

<script>
  const text = document.querySelector("#text");

  // クラスを追加
  text.classList.add("highlight");

  // 複数のクラスを追加
  text.classList.add("highlight", "large");

  // クラスを削除
  text.classList.remove("highlight");

  // クラスをトグル（あれば削除、なければ追加）
  text.classList.toggle("highlight");

  // クラスがあるかチェック
  if (text.classList.contains("highlight")) {
    console.log("highlightクラスがあります");
  }
</script>
```

**`classList` を使うと、CSS で定義したスタイルを簡単に切り替えられる！** ✨

---

## イベントリスナー

### addEventListener(): イベントに反応する

```html
<button id="btn">クリックしてね</button>
<p id="message">まだクリックされていません</p>

<script>
  const btn = document.querySelector("#btn");
  const message = document.querySelector("#message");

  // クリックイベントを登録
  btn.addEventListener("click", () => {
    message.textContent = "ボタンがクリックされました！";
  });
</script>
```

**`addEventListener` で、ユーザーの操作に反応できる！** 🎯

---

### よく使うイベント

```javascript
// クリック
element.addEventListener("click", () => {
  console.log("クリックされた");
});

// マウスオーバー
element.addEventListener("mouseover", () => {
  console.log("マウスが乗った");
});

// マウスアウト
element.addEventListener("mouseout", () => {
  console.log("マウスが離れた");
});

// 入力
input.addEventListener("input", (event) => {
  console.log("入力内容:", event.target.value);
});

// フォーム送信
form.addEventListener("submit", (event) => {
  event.preventDefault(); // デフォルトの送信を防ぐ
  console.log("フォームが送信された");
});
```

---

## 要素の作成と追加

### createElement(): 新しい要素を作る

```html
<div id="container"></div>

<script>
  const container = document.querySelector("#container");

  // 新しいp要素を作成
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "これは新しく追加された段落です";

  // コンテナに追加
  container.appendChild(newParagraph);
</script>
```

---

### 実践例：リストに項目を追加

```html
<input type="text" id="input" placeholder="項目を入力" />
<button id="add-btn">追加</button>
<ul id="list"></ul>

<script>
  const input = document.querySelector("#input");
  const addBtn = document.querySelector("#add-btn");
  const list = document.querySelector("#list");

  addBtn.addEventListener("click", () => {
    // 入力値を取得
    const value = input.value;

    // 空でなければ追加
    if (value.trim() !== "") {
      // 新しいli要素を作成
      const li = document.createElement("li");
      li.textContent = value;

      // リストに追加
      list.appendChild(li);

      // 入力欄をクリア
      input.value = "";
    }
  });
</script>
```

---

## 要素の削除

```html
<ul id="list">
  <li>項目1 <button class="delete-btn">削除</button></li>
  <li>項目2 <button class="delete-btn">削除</button></li>
  <li>項目3 <button class="delete-btn">削除</button></li>
</ul>

<script>
  const list = document.querySelector("#list");

  // イベント委譲を使う
  list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      // 削除ボタンがクリックされた
      const li = event.target.parentElement;
      li.remove();
    }
  });
</script>
```

---

## 実践例：カウンター

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>カウンター</title>
    <style>
      .counter {
        font-size: 48px;
        text-align: center;
        margin: 20px;
      }
      button {
        font-size: 20px;
        padding: 10px 20px;
        margin: 5px;
      }
    </style>
  </head>
  <body>
    <div class="counter" id="count">0</div>
    <div style="text-align: center">
      <button id="increment">+1</button>
      <button id="decrement">-1</button>
      <button id="reset">リセット</button>
    </div>

    <script>
      let count = 0;
      const countDisplay = document.querySelector("#count");
      const incrementBtn = document.querySelector("#increment");
      const decrementBtn = document.querySelector("#decrement");
      const resetBtn = document.querySelector("#reset");

      // 表示を更新する関数
      function updateDisplay() {
        countDisplay.textContent = count;
      }

      // +1ボタン
      incrementBtn.addEventListener("click", () => {
        count++;
        updateDisplay();
      });

      // -1ボタン
      decrementBtn.addEventListener("click", () => {
        count--;
        updateDisplay();
      });

      // リセットボタン
      resetBtn.addEventListener("click", () => {
        count = 0;
        updateDisplay();
      });
    </script>
  </body>
</html>
```

---

## 実践例：TODO リスト

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>TODOリスト</title>
    <style>
      .todo-item {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .completed {
        text-decoration: line-through;
        color: #999;
      }
    </style>
  </head>
  <body>
    <h1>TODOリスト</h1>
    <input type="text" id="todo-input" placeholder="やることを入力" />
    <button id="add-btn">追加</button>
    <div id="todo-list"></div>

    <script>
      const input = document.querySelector("#todo-input");
      const addBtn = document.querySelector("#add-btn");
      const todoList = document.querySelector("#todo-list");

      addBtn.addEventListener("click", addTodo);

      // Enterキーでも追加できるように
      input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          addTodo();
        }
      });

      function addTodo() {
        const value = input.value.trim();

        if (value === "") {
          return;
        }

        // TODO要素を作成
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        const text = document.createElement("span");
        text.textContent = value;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "完了";
        completeBtn.addEventListener("click", () => {
          text.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.addEventListener("click", () => {
          todoItem.remove();
        });

        todoItem.appendChild(text);
        todoItem.appendChild(completeBtn);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);

        input.value = "";
      }
    </script>
  </body>
</html>
```

---

## バイブコーディング実践

### AI への指示例

#### 良い指示の例

```
「ボタンをクリックすると、段落のテキストが変わる
JavaScriptコードを書いてください。
querySelector と addEventListener を使ってください」

「入力フィールドに入力した内容を、
リアルタイムで別の要素に表示するコードを書いてください」
```

---

### 生成されたコードのチェックリスト

#### ✅ 要素の取得が正しいか

- [ ] `querySelector` で正しいセレクタを使っているか
- [ ] 要素が null でないかチェックしているか

#### ✅ イベントリスナーが適切か

- [ ] `addEventListener` を使っているか
- [ ] イベント名が正しいか（"click", "input" など）

---

## まとめ

### このレッスンで学んだこと

- ✅ **DOM**：JavaScript で HTML を操作できる
- ✅ **要素の取得**：querySelector で要素を取得
- ✅ **内容の変更**：textContent, innerHTML
- ✅ **スタイルの変更**：style, classList
- ✅ **イベント**：addEventListener でユーザーの操作に反応
- ✅ **要素の作成・追加・削除**：動的に DOM を操作

---

### 次のステップ

基礎編の完了おめでとう！🎉

次は**Phase 4: JavaScript 発展編**で、より高度な JavaScript を学ぼう！

- 非同期処理（Promise, async/await）
- API との通信
- より実践的なアプリケーション開発

**Phase 3 で学んだことをしっかり復習してから、Phase 4 へ進もう！** 🚀

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

DOM 操作、しっかりマスターできたかな？これで動きのある Web ページが作れるよ！ 💪
