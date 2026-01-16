---
marp: true
theme: udemy
lang: ja
paginate: true
# header: "バイブコーダーに贈るフロントエンド開発入門（Phase 4）"
# footer: "© 2026 Kazuhiko Sugimoto"
---

<!-- _class: center -->
<!-- _header: "" -->
<!-- _paginate: skip -->

# バイブコーダーに贈るフロントエンド開発入門

## Phase 4： JavaScript 発展編

---

## Phase 4 で学ぶこと

Phase 3 では、JavaScript の基礎文法、条件分岐、ループ、関数、配列、オブジェクト、基本的な DOM 操作を学んだね！

でも、それだけでは**本格的な Web アプリケーション**はまだ作れない。

Phase 4 では、**実践的で高度な JavaScript テクニック**を学んで、プロが作るような Web アプリケーションを開発できるようになるよ！

### できるようになること

- イベントの詳細な制御（伝播、委譲など）ができる
- フォームのリアルタイムバリデーションが実装できる
- 非同期処理（Promise、async/await）を理解して使える
- API と通信してデータを取得・表示できる
- モダンな JavaScript の書き方をマスターできる

---

## Phase 4（JavaScript 発展編）のレッスン一覧 📚

### Lesson 1: 高度なイベント処理 🎯

### Lesson 2: フォーム操作とバリデーション 📝

### Lesson 3: 非同期処理の基礎 ⏱️

### Lesson 4: API 連携と JSON 🌐

### Lesson 5: モダン JavaScript 🎨

---

## Lesson 1: 高度なイベント処理 🎯

**学習目標**：イベントの仕組みを深く理解し、イベント委譲やイベント伝播を使いこなせるようになる

### なぜ高度なイベント処理を学ぶの？

実際の Web アプリケーションでは、もっと複雑なイベント処理が必要になるんだ：

- 大量の要素に効率的にイベントを設定したい
- 動的に追加された要素にもイベントを設定したい
- デフォルトの動作をキャンセルしたい
- イベントの詳細情報を取得したい
- イベントの伝播を制御したい

---

## イベントオブジェクト：イベントの詳細情報

イベントが発生すると、**イベントオブジェクト**が自動的に作られるよ。このオブジェクトには、イベントに関する超便利な情報が詰まってる！

```html
<button id="myButton">クリックしてね</button>
```

```javascript
const button = document.querySelector("#myButton");
button.addEventListener("click", function (event) {
  console.log("イベントオブジェクト:", event);

  // イベントの種類
  console.log("イベントタイプ:", event.type); // → "click"

  // クリックされた要素
  console.log("ターゲット要素:", event.target); // → <button>

  // マウスの座標
  console.log("X座標:", event.clientX);
  console.log("Y座標:", event.clientY);
});
```

---

## よく使うイベントオブジェクトのプロパティ

### `event.target` - イベントが発生した要素

**最も重要なプロパティ！** イベントが実際に発生した要素を取得できる。

```html
<button class="btn" data-id="1">ボタン 1</button>
<button class="btn" data-id="2">ボタン 2</button>
<button class="btn" data-id="3">ボタン 3</button>
```

```javascript
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // どのボタンがクリックされたか分かる！
    console.log("クリックされたボタン:", event.target);
    console.log("ボタンのID:", event.target.dataset.id);
    console.log("ボタンのテキスト:", event.target.textContent);
  });
});
```

---

## `event.target` vs `event.currentTarget`

**違い**：

- `event.target`：実際にクリックされた要素
- `event.currentTarget`：イベントリスナーが設定された要素

```html
<div id="parent" style="padding: 20px; background: lightblue;">
  親要素
  <button id="child">子要素（ボタン）</button>
</div>
```

```javascript
const parent = document.querySelector("#parent");

parent.addEventListener("click", function (event) {
  console.log("target:", event.target); // → クリックされた要素（親 or 子）
  console.log("currentTarget:", event.currentTarget); // → 常に親要素
});
```

---

## イベント伝播：バブリングとキャプチャリング

イベントは、**階層構造**に沿って伝播するんだ。

### イベント伝播の 3 つのフェーズ

1. キャプチャリングフェーズ：親 → 子 へ伝播
2. ターゲットフェーズ：イベントが発生した要素
3. バブリングフェーズ：子 → 親 へ伝播

**例え話**：石を池に投げ込むと、波紋が広がっていくイメージ！

---

## バブリング（Bubbling）：子から親へ伝播

**デフォルトでは、イベントはバブリング（子 → 親）で伝播する**

<div class="flex gap-x-1">
<div class="flex-1">

```html
<div id="grandparent"
  style="padding: 40px; background: lightblue">
  祖父母要素
  <div id="parent"
    style="padding: 30px; background: lightgreen">
    親要素
    <div id="child"
    style="padding: 20px; background: lightcoral">
      子要素（クリックしてね）
    </div>
  </div>
</div>
```

</div>
<div class="flex-1">

```javascript
const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", function () {
  console.log("祖父母要素がクリックされました");
});
parent.addEventListener("click", function () {
  console.log("親要素がクリックされました");
});
child.addEventListener("click", function () {
  console.log("子要素がクリックされました");
});
```

</div>
</div>

**子要素をクリックすると、以下の順で実行される**：

1. 子要素がクリックされました
2. 親要素がクリックされました
3. 祖父母要素がクリックされました

---

## キャプチャリング（Capturing）：親から子へ伝播

**`addEventListener` の第 3 引数を `true` にすると、キャプチャリングで伝播するよ。**

```javascript
const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", function () {
  console.log("祖父母要素がクリックされました");
}, true);
parent.addEventListener("click", function () {
  console.log("親要素がクリックされました");
}, true);
child.addEventListener("click", function () {
  console.log("子要素がクリックされました");
}, true);
```

**子要素をクリックすると、以下の順で実行される**：

1. 祖父母要素がクリックされました
2. 親要素がクリックされました
3. 子要素がクリックされました

---

## stopPropagation：イベントの伝播を停止

**イベントのバブリング/キャプチャリングを途中で止めたい時**は `stopPropagation()` を使うよ。

```javascript
const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", function () {
  console.log("祖父母要素がクリックされました");
});

parent.addEventListener("click", function () {
  console.log("親要素がクリックされました");
});

child.addEventListener("click", function (event) {
  console.log("子要素がクリックされました");
  // イベントの伝播を停止（親要素のイベントは発火しない）
  event.stopPropagation();
});
```

子要素をクリックしても、**親要素・祖父母要素のイベントは発火しない！**

---

## preventDefault：デフォルトの動作をキャンセル

ブラウザには、特定の要素に対する**デフォルトの動作**があるよ。これをキャンセルしたい時に `preventDefault()` を使う！

### 例：リンクのデフォルト動作をキャンセル

```html
<a href="https://www.google.com" id="myLink">Google へ（でも遷移しない）</a>
```

```javascript
const link = document.querySelector("#myLink");
link.addEventListener("click", function (event) {
  // デフォルトの動作（ページ遷移）をキャンセル
  event.preventDefault();
  console.log("リンクがクリックされたけど、ページ遷移しない！");
});
```

**用途**：

- シングルページアプリケーション（SPA）で、ページ遷移せずに処理したい時に使う！
- フォームのバリデーションなどデータを送信する時に必須！
- 独自の右クリックメニューを実装する時に使う！

---

## イベント委譲（Event Delegation）: 効率的なイベント管理

**イベント委譲**は、親要素にイベントリスナーを 1 つだけ設定して、子要素のイベントを管理する超便利なテクニック！

### なぜイベント委譲が必要？

**非効率な方法**：各要素にイベントを設定

<div class="demerit">

- 100 個のボタンに、100 個のイベントリスナー
- 動的に追加された要素には効かない
- メモリの無駄遣い

</div>

**効率的な方法**：イベント委譲

- 親要素に 1 つだけイベントリスナー（メモリ効率が良い）
- 動的に追加された要素にも自動的に効く
- コードがシンプルで読みやすい

---

## イベント委譲の実装例（ToDo リスト）

```html
<ul id="todoList">
  <li>タスク <button class="delete">削除</button></li>
</ul>
<button id="addTask">新しいタスクを追加</button>
```

```javascript
const todoList = document.querySelector("#todoList");
const addTaskButton = document.querySelector("#addTask");
// 親要素（ul）にイベントを1つだけ設定（効率的！）
todoList.addEventListener("click", function (event) {
  // クリックされた要素が削除ボタンか確認
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove(); // 削除処理
  }
});
// 新しいタスクを動的に追加
addTaskButton.addEventListener("click", function () {
  const newTask = document.createElement("li");
  newTask.innerHTML = `タスク <button class="delete">削除</button>`;
  todoList.appendChild(newTask);
});
```

イベント委譲のおかげで、新しいボタンにもイベントが効く！

---

## Lesson 1 まとめ

このレッスンで学んだこと：

- **イベントオブジェクト**：event.target、event.currentTarget、マウス座標、キー情報などを取得できる
- **イベント伝播**：バブリング（子 → 親）とキャプチャリング（親 → 子）の仕組みを理解した
- **stopPropagation**：イベントの伝播を停止できる
- **preventDefault**：デフォルトの動作をキャンセルできる（リンク遷移、フォーム送信など）
- **イベント委譲**：親要素にイベントを 1 つだけ設定して、効率的にイベントを管理できる

---

## Lesson 2: フォーム操作とバリデーション 📝

**学習目標**：JavaScript でフォームデータを取得・検証し、リアルタイムバリデーションを実装できる

### なぜフォーム操作とバリデーションを学ぶの？

Web アプリケーションで**最も重要な機能の一つがフォーム**だよ！

**良いフォームの例**：

- リアルタイムで入力内容をチェック
- 具体的なエラーメッセージを表示（「8 文字以上で入力してください」）
- 問題のあるフィールドがすぐ分かる

---

## フォームデータの取得：基本

### 方法 1: `input.value` で個別に取得

<div class="flex gap-x-1">
<div class="flex-1">

```html
<form id="form">
  <label for="name">名前： </label>
  <input type="text" name="name" id="name">
  <br>
  <label for="email">メールアドレス： </label>
  <input type="email" name="email" id="email">
  <br>
  <button type="submit">
    送信
  </button>
</form>
```

</div>
<div class="flex-1">

```javascript
const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");

form.addEventListener("submit", function (event) {
  // デフォルトのフォーム送信を防ぐ
  event.preventDefault();
  // 各inputのvalueプロパティで値を取得
  const name = inputName.value;
  const email = inputEmail.value;
  // コンソールに表示
  console.log("名前:", name);
  console.log("メール:", email);
});
```

</div>
</div>

**ポイント**：

- `input.value` で現在の入力値を取得できる
- 空の場合は空文字列（`""`）が返る

---

## フォームデータの取得：FormData API

### 方法 2: `FormData` API で一括取得

**複数のフィールドがある場合はこっちが便利！**

```javascript
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // デフォルトのフォーム送信を防ぐ

  // FormDataオブジェクトを作成（フォーム全体のデータを取得）
  const formData = new FormData(form);
  // get()メソッドで個別に取得
  console.log("名前:", formData.get("name"));
  console.log("メール:", formData.get("email"));
  // オブジェクトに変換（便利！）
  const data = Object.fromEntries(formData);
  console.log("オブジェクト形式:", data);
});
```

**重要**：FormData を使う場合、input 要素に **`name` 属性**が必要だよ！

---

## HTML5 バリデーション：ブラウザの力を借りよう！

実は、**HTML5 にはバリデーション機能が組み込まれている**んだ！

### よく使うバリデーション属性

| 属性        | 説明             | 例                                    |
| ----------- | ---------------- | ------------------------------------- |
| `required`  | 必須項目にする   | `<input required>`                    |
| `type`      | 入力タイプを指定 | `<input type="email">`                |
| `minlength` | 最小文字数       | `<input minlength="8">`               |
| `maxlength` | 最大文字数       | `<input maxlength="20">`              |
| `min`       | 最小値           | `<input type="number" min="0">`       |
| `max`       | 最大値           | `<input type="number" max="100">`     |
| `pattern`   | 正規表現で指定   | `<input pattern="[0-9]{3}-[0-9]{4}">` |

---

## HTML5 バリデーションの実例

```html
<h2>ユーザー登録フォーム</h2>
<form id="form">
  <!-- 必須項目 -->
  <!-- ユーザー名（3文字以上20文字以下） -->
  <label for="name">ユーザー名（必須）： </label>
  <input type="text" name="name" id="name" required minlength="3" maxlength="20">
  <br>
  <!-- メールアドレス（type="email"で自動検証） -->
  <label for="email">メールアドレス（必須）： </label>
  <input type="email" name="email" id="email" required>
  <br>
  <!-- パスワード（最低8文字） -->
  <label for="password">パスワード（8文字以上）： </label>
  <input type="password" name="password" id="password" required minlength="8">
  <br>
  <!-- 数値（範囲指定） -->
  <label for="age">年齢（18歳以上）： </label>
  <input type="number" name="age" id="age" required min="18" max="120">
  <br>
  <button type="submit">登録</button>
</form>
```

---

## HTML5 バリデーションの限界

**HTML5 バリデーションの良いところ**：

- JavaScript を書かなくても動く
- ブラウザが自動でエラーメッセージを表示

**HTML5 バリデーションの制限**：

<div class="demerit">

- エラーメッセージのカスタマイズが難しい
- 複雑な検証ロジックには対応できない
- リアルタイムのバリデーションには不向き

</div>

**だから、JavaScript で独自のバリデーションを実装することも重要なんだ！** 🚀

---

## リアルタイムバリデーション：入力中に即チェック！

**ユーザーが入力している最中に、リアルタイムでチェックして即座にフィードバックする**のが、最高のユーザー体験だよ！

```html
<h2>リアルタイムバリデーション</h2>
<form id="form">
  <label for="username">ユーザー名（3文字以上）： </label>
  <input type="text" name="username" id="username">
  <div class="error-message" id="usernameError"></div>
  <div class="success-message" id="usernameSuccess">✓ OK!</div>
</form>
```

---

<div class="columns-2 gap-x-2">

```css
input {
  border: 2px solid #ddd;
  border-radius: 4px;
}

/* 検証状態のスタイル */
input.valid {
  border-color: #51cf66;
  background-color: #f0fdf4;
}
input.invalid {
  border-color: #ff6b6b;
  background-color: #fff5f5;
}

/* エラーメッセージ */
.error-message {
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 5px;
  display: none;
}
.error-message.show {
  display: block;
}

/* 成功メッセージ */
.success-message {
  color: #51cf66;
  font-size: 14px;
  margin-top: 5px;
  display: none;
}
.success-message.show {
  display: block;
}
```

</div>

---

```javascript
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("input", function () {
  const value = usernameInput.value;
  const errorMsg = document.querySelector("#usernameError");
  const successMsg = document.querySelector("#usernameSuccess");
  if (value.length === 0) {
    // 空の場合
    usernameInput.classList.remove("valid", "invalid");
    errorMsg.classList.remove("show");
    successMsg.classList.remove("show");
  } else if (value.length < 3) {
    // 3文字未満
    usernameInput.classList.add("invalid");
    errorMsg.textContent = "3文字以上で入力してください";
    errorMsg.classList.add("show");
    successMsg.classList.remove("show");
  } else {
    // OK
    usernameInput.classList.add("valid");
    usernameInput.classList.remove("invalid");
    errorMsg.classList.remove("show");
    successMsg.classList.add("show");
  }
});
```

---

## `input` イベント vs `blur` イベント

**`input` イベント**：

- 入力するたびに発火（1 文字入力するたび）
- 即座にフィードバックできる

**`blur` イベント**：

- フィールドからフォーカスが外れた時に発火
- 入力が完了してからチェックされる
- ユーザー体験が良い場合が多い

**どっちを使うべき？**

- パスワードの強度チェックなど、リアルタイムに表示したい → `input`
- 基本的なバリデーション → `blur`
- **両方組み合わせるのもあり！**

---

## エラーメッセージの表示：分かりやすく伝えよう！

**良いエラーメッセージ**の条件：

- 何が問題なのか明確
- どうすれば解決できるか分かる
- 視覚的に分かりやすい

```javascript
// ❌ 悪い例
if (username.length < 3) {
  alert("エラー");
}

// ✅ 良い例
if (username.length < 3) {
  showError("usernameError", "ユーザー名は3文字以上で入力してください");
}
```

---

## Lesson 2 まとめ

このレッスンで学んだこと：

- **フォームデータの取得**：`input.value`、`FormData` API
- **HTML5 バリデーション**：`required`、`minlength`、`pattern` などの属性
- **リアルタイムバリデーション**：`input`、`blur` イベント
- **エラーメッセージの表示**：分かりやすいエラーメッセージ

---

## Lesson 3: 非同期処理の基礎 ⏱️

**学習目標**：JavaScript の非同期処理の仕組みを理解し、setTimeout、Promise、async/await を使いこなせる

### なぜ非同期処理を学ぶの？

実際の Web アプリケーションでは、こんなことがよくあるよ：

- サーバーからデータを取得する（数秒かかるかも） 🌐
- 画像を読み込む（大きいファイルだと時間がかかる） 📷
- 一定時間後に何かを実行する（タイマー機能） ⏰
- アニメーションを実行する（複数の処理を順番に） 🎬

**もしすべてが同期処理だったら、データの取得が終わるまで画面が固まっちゃう！**

---

## 同期処理／非同期処理

**同期処理は、1 つの処理が終わるまで次の処理に進まない**

```text
【レストランの注文の例え話】
あなた: 「ハンバーガーください！」
店員　: 「かしこまりました！」
　　　　（料理が完成するまでじっと待つ...5分）
店員　: 「お待たせしました！」
あなた: （やっとドリンクを注文できる）「コーラもください」
　　　　（またじっと待つ...2分）
店員　: 「どうぞ！」
```

**非同期処理は、時間のかかる処理を「後回し」にして、すぐ次の処理に進む**

```text
【レストランの注文の例え話】
あなた: 「ハンバーガーとコーラください！」
店員　: 「かしこまりました！番号札どうぞ」
あなた: （席に座ってスマホをいじる📱）
店員　: （5分後）「番号○番のお客様、お待たせしました！」
```

---

## 同期処理：順番に待つ

```javascript
// 重い処理をシミュレート（実際にはやらない！）
function heavyTask() {
  console.log("（3秒間画面が固まる😱）");
  const start = Date.now();
  // 3秒間ループ（画面が固まる！）
  while (Date.now() - start < 3000) {/* 何もしない */}
  console.log("2. 重い処理が終わった");
}

console.log("1. 処理開始");
heavyTask();
console.log("3. 処理終了");
```

結果：

```text
1. 処理開始
（3秒間画面が固まる😱）
2. 重い処理が終わった
3. 処理終了
```

---

## 非同期処理：待たずに次へ進む

```javascript
console.log("1. 処理開始");

// 非同期処理：3秒後に実行
setTimeout(function () {
  console.log("（3秒経過）");
  console.log("2. 時間のかかる処理が終わった");
}, 3000);

console.log("3. 処理終了");
```

結果：

```text
1. 処理開始
3. 処理終了
（3秒経過）
2. 時間のかかる処理が終わった
```

**ポイント**：3 秒待たずに「3. 処理終了」が先に実行される！画面も固まらない！✨

---

## setTimeout：指定時間後に実行

**setTimeout** は、指定した時間（ミリ秒）後に関数を実行する非同期処理の基本だよ！

```javascript
console.log("今から3秒後にメッセージが表示されるよ");

// 3秒後（3000ミリ秒後）に実行
setTimeout(function () {
  console.log("3秒経ちました！");
}, 3000);

console.log("このメッセージは先に表示されるよ");
```

**実行結果**：

```text
今から3秒後にメッセージが表示されるよ
このメッセージは先に表示されるよ
3秒経ちました！
```

---

## clearTimeout：タイマーをキャンセル

setTimeout は**キャンセル**もできるよ！

```html
<button type="button" id="startButton">3秒後にアラート</button>
<button type="button" id="cancelButton">キャンセル</button>
```

```javascript
const startButton = document.querySelector("#startButton");
const cancelButton = document.querySelector("#cancelButton");
let timerId; // タイマーIDを保存

startButton.addEventListener("click", function () {
  console.log("3秒後にアラートが出るよ");
  // setTimeout は「タイマーID」を返す
  timerId = setTimeout(function () {alert("時間になりました！");}, 3000);
});

cancelButton.addEventListener("click", function () {
  clearTimeout(timerId); // clearTimeout でタイマーをキャンセル
  console.log("タイマーをキャンセルしました");
});
```

**ポイント**：setTimeout は**タイマーID**を返すから、それを使ってキャンセルできる！

---

## setInterval：定期的に実行

**setInterval** は、指定した間隔で関数を**繰り返し実行**するよ！

```html
<div id="time">0</div>
<button type="button" id="startButton">開始</button>
<button type="button" id="stopButton">一時停止</button>
```

```javascript
const timeElement = document.querySelector("#time");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
let count = 0;
let intervalId;

startButton.addEventListener("click", function () {
  intervalId = setInterval(function () {
    count++;
    timeElement.textContent = count;
    console.log("経過時間:", count, "秒");
  }, 1000); // 1秒ごとに実行
});
stopButton.addEventListener("click", function () {
  clearInterval(intervalId); // clearInterval でストップ
  console.log("タイマーを一時停止しました");
});
```

---

## コールバック関数：処理が終わったら実行

**コールバック関数**は、非同期処理が終わった時に実行される関数だよ！

```javascript
// 料理を作る関数（非同期）
function cookFood(foodName, callback) {
  console.log(`${foodName}を作り始めます...`);

  // 3秒後に完成
  setTimeout(function () {
    console.log(`${foodName}ができました！`);
    // 完成したらコールバック関数を実行
    callback(foodName);
  }, 3000);
}

// 料理ができた時に実行される関数（コールバック）
function serveFood(foodName) {
  console.log(`${foodName}を提供します！🍕`);
}

// 使ってみる
cookFood("ピザ", serveFood);
```

---

## コールバック地獄（Callback Hell）

複数の非同期処理を順番に実行すると、**コールバックがネストして読みにくくなる**んだ...😰

```javascript
// コールバック地獄！ネストが深くて読みづらい！😱
buyIngredients(function () {   // 1. 材料を買う
  cutIngredients(function () { // 2. 材料を切る
    cook(function () {         // 3. 調理する
      serve(function () {      // 4. 提供する
        console.log("いただきます！");
      });
    });
  });
});
```

**問題点**：

<div class="demerit">

- ネストが深くて読みにくい
- エラーハンドリングが難しい
- コードの修正が大変

</div>

**この問題を解決するのが Promise だよ！** 🎉

---

## Promise：スマートな非同期処理

**Promise**は、非同期処理をもっとスマートに書ける仕組みだよ！

### Promise の 3 つの状態

1. Pending（保留中）: 処理が進行中
2. Fulfilled（成功）: 処理が成功して完了
3. Rejected（失敗）: 処理が失敗

**レストランの例え話**：

1. Pending（保留中）: 「料理を作っています...」
2. Fulfilled（成功）: 「料理ができました！🍕」
3. Rejected（失敗）: 「材料切れでした😢」

---

## Promise の基本的な作り方

<div class="columns-2">

```javascript
// Promiseを作成する
const promise = new Promise(
  function (resolve, reject) {
    console.log("処理を開始します...");

    // 2秒後に成功
    setTimeout(function () {
      // 成功する場合
      const success = true;

      if (success) {
        // 成功時：resolve を呼ぶ
        resolve("処理が成功しました！");
      } else {
        // 失敗時：reject を呼ぶ
        reject("処理が失敗しました");
      }
    }, 2000);
});

// Promiseの結果を受け取る
promise
  .then(function (result) {
    // 成功時に実行される
    console.log("成功:", result);
  })
  .catch(function (error) {
    // 失敗時に実行される
    console.log("失敗:", error);
  });
```

</div>

- `resolve()`：成功を通知
- `reject()`：失敗を通知
- `.then()`：成功時の処理
- `.catch()`：失敗時の処理

---

## Promise チェーン：順番に処理を実行

**Promise チェーン**を使うと、複数の非同期処理を順番に実行できるよ！コールバック地獄から解放される！🎉

<div class="columns-2">

```javascript
// Promiseチェーン：読みやすい！✨
// 1. 材料を買う
buyIngredients()
  .then(function (ingredients) {
    // 2. 材料を切る
    return cutIngredients(ingredients);
  })
  .then(function (preparedIngredients) {
    // 3. 調理する
    return cook(preparedIngredients);
  })
  .then(function (food) {
    // 4. 提供する
    return serve(food);
  })
  .then(function (message) {
    console.log("🎉", message);
    console.log("いただきます！");
  })
  .catch(function (error) {
    console.log("❌ エラーが発生:", error);
  });
```

</div>

**Promise チェーンのメリット**：

- ネストが浅くて読みやすい
- エラーハンドリングが簡単（.catch 1 つで OK）
- 処理の流れが追いやすい

---

## finally：成功でも失敗でも実行

`.finally()` は、成功でも失敗でも**必ず実行される**処理を書けるよ！

```html
<button id="fetchButton">データを取得</button>
<div id="loading" style="display: none;">読み込み中...</div>
<div id="result"></div>
```

<div class="columns-2">

```javascript
const fetchButton = document.querySelector("#fetchButton");
const loadingElement = document.querySelector("#loading");
const resultElement = document.querySelector("#result");

function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // ランダムで成功/失敗
      const success = Math.random() > 0.5;

      if (success) {
        resolve("データ取得成功！🎉");
      } else {
        reject("データ取得失敗😢");
      }
    }, 2000);
  });
}

fetchButton.addEventListener("click", function () {
  // ローディング表示
  loadingElement.style.display = "block";
  resultElement.textContent = "";

  fetchData()
    .then(function (data) {
      resultElement.textContent = "✅ " + data;
      resultElement.style.color = "green";
    })
    .catch(function (error) {
      resultElement.textContent = "❌ " + error;
      resultElement.style.color = "red";
    })
    .finally(function () {
      // 成功でも失敗でもローディングを非表示
      loadingElement.style.display = "none";
      console.log("処理が完了しました（成功でも失敗でも実行）");
    });
});
```

</div>

**用途**：ローディング表示を消す、リソースをクリーンアップするなど！

---

## async/await：もっとシンプルに書く

**async/await**は、Promise をさらにシンプルに書ける**最新の書き方**だよ！

```javascript
// Promise を返す関数
function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
```

<div class="flex gap-x-1">
<div class="flex-1">

#### Promise チェーンの書き方

```javascript
function oldWay() {
  wait(1000)
    .then(function () {
      console.log("1秒経過");
      return wait(1000);
    })
    .then(function () {
      console.log("2秒経過");
    });
}
oldWay();
```

</div>
<div class="flex-1">

#### async/await の書き方

```javascript
async function newWay() {
  console.log("開始");

  await wait(1000);
  console.log("1秒経過");

  await wait(1000);
  console.log("2秒経過");
}

newWay();
```

</div>
</div>

---

## async/await のポイント

- `async`：関数の前に付ける → 「この関数は非同期だよ」という印
- `await`：Promise の完了を待つ → 「ここで待つよ」という印

**async/await は、非同期処理を同期処理みたいに書ける！** 🎯

<div class="columns-2">

```javascript
// async 関数は、自動的に Promise を返す
async function greet() {
  return "こんにちは！";
}

console.log(greet());
// → Promise { 'こんにちは！' }

// 結果を受け取るには .then を使う
greet().then(function (message) {
  console.log(message); // → こんにちは！
});

// または別の async 関数内で await
async function main() {
  const message = await greet();
  console.log(message); // → こんにちは！
}

main();
```

</div>

---

## try-catch：エラーハンドリング

async/await では、**try-catch**を使ってエラーを捕まえるよ！

```html
<button id="fetchButton">データ取得（失敗する可能性あり）</button>
<div id="result"></div>
```

<div class="columns-2">

```javascript
const fetchButton = document.querySelector("#fetchButton");
const resultElement = document.querySelector("#result");

// データを取得する関数（失敗する可能性あり）
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ name: "太郎", age: 25 });
      } else {
        reject("ネットワークエラーが発生しました");
      }
    }, 1000);
  });
}

// async/await + try-catch
async function getData() {
  resultElement.textContent = "読み込み中...";

try {
    // awaitで待つ（失敗する可能性あり）
    const data = await fetchData();
    // 成功時の処理
    resultElement.textContent
      = `✅ 成功: ${data.name}さん（${data.age}歳）`;
    resultElement.style.color = "green";
  } catch (error) {
    // 失敗時の処理（reject されたらここに来る）
    resultElement.textContent = `❌ 失敗: ${error}`;
    resultElement.style.color = "red";
  } finally {
    // 成功でも失敗でも実行
    console.log("処理完了");
  }
}

fetchButton.addEventListener("click", getData);
```

</div>

---

## Lesson 3 まとめ

このレッスンで学んだこと：

- **同期処理 vs 非同期処理**：非同期処理で画面が固まるのを防げる
- **setTimeout / setInterval**：指定時間後に実行、定期的に実行
- **コールバック関数**：処理が終わった後に実行される関数
- **Promise**：非同期処理をスマートに書ける仕組み
- **Promise チェーン**：複数の非同期処理を順番に実行
- **async/await**：非同期処理を同期処理みたいに書ける最新の書き方
- **try-catch**：エラーハンドリングで安全に処理

---

## Lesson 4: API 連携と JSON 🌐

**学習目標**：JSON データの扱い方を理解し、fetch API を使ってサーバーと通信できる

### なぜ API と JSON を学ぶの？

「素敵な Web アプリを作りたい！」と思ったとき、**本当に役立つアプリには「データ」が必要**なんだ！

考えてみて！普段使っているアプリを：

- **X（Twitter）** 🐦：みんなのツイートを表示する → サーバーからツイートデータを取得
- **Instagram** 📷：写真を投稿する → サーバーに画像データを送信
- **天気予報アプリ** 🌤️：今日の天気を表示する → 天気 API からデータを取得
- **ショッピングサイト** 🛒：商品を検索する → 商品データベースから情報を取得

多くのアプリは、**サーバーとデータをやり取り**しているんだ！

---

## API って何？

**API** は、プログラム同士がおしゃべりするための「翻訳機」みたいなもの！

**レストランの例え話**：

```text
あなた（お客さん）= あなたのアプリ
ウェイター　　　　= API
厨房（キッチン）　= サーバー（データベース）

あなた　　 : 「ハンバーガーください！」
ウェイター : （厨房に伝える）「ハンバーガー1つ！」
厨房　　　 : （料理を作る）
ウェイター : （あなたに渡す）「お待たせしました！」
```

API は、あなたが「データがほしい」とリクエストすると、サーバーに取りに行って、データを持ってきてくれるんだよ！🍔

---

## JSON って何？

**JSON（JavaScript Object Notation）** は、データをやり取りするときの「共通語」みたいなもの！

プログラミング言語は色々あるよね：JavaScript、Python、Java、PHP...
でも **JSON 形式でデータを書けば、多くの言語で理解できる！**

```json
{
  "name": "太郎",
  "age": 25,
  "hobbies": ["読書", "ゲーム", "料理"]
}
```

これが JSON！見たことあるような...そう、JavaScript のオブジェクトに似てるよね！

---

## JSON の書き方とルール

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

| ルール                 | 良い例             | 悪い例                      |
| ---------------------- | ------------------ | --------------------------- |
| **キーは必ず""で囲む** | `"name": "太郎"`   | `'name': "太郎"` ❌         |
| **文字列は""で囲む**   | `"name": "太郎"`   | `"name": '太郎'` ❌         |
| **最後のカンマはダメ** | `{"a": 1, "b": 2}` | `{"a": 1, "b": 2,}` ❌      |
| **コメント不可**       | `{"name": "太郎"}` | `{"name": "太郎"} //` ❌    |
| **関数は不可**         | `{"age": 25}`      | `{"func": function(){}}` ❌ |

---

## JSON vs JavaScript オブジェクト

| 特徴           | JavaScript オブジェクト | JSON                     |
| -------------- | ----------------------- | ------------------------ |
| 使用方法       | プログラムで直接使える  | ネットワーク送信可能     |
| 含められるもの | 関数も含められる        | データのみ（関数は不可） |
| 書き方         | 柔軟な書き方 OK         | 厳格なルールがある       |

```javascript
// JavaScriptオブジェクト
const user = {
  name: "太郎",           // キーに""は不要
  greet: function() {    // 関数もOK
    console.log("こんにちは");
  },
};

// JSON（文字列として表現）
const jsonString = '{"name": "太郎"}'; // キーは必ず""、関数は含められない
```

---

## JavaScript で JSON を扱う

### JSON.parse()：JSON 文字列 → JavaScript オブジェクト

**サーバーから受け取った JSON 文字列を、JavaScript で使えるオブジェクトに変換する！**

```javascript
// サーバーから受け取ったJSON文字列（と仮定）
const jsonString = '{"name":"太郎","age":25,"city":"東京"}';

console.log("JSON文字列:", jsonString);
console.log("型:", typeof jsonString); // "string"

// JSON.parse() で JavaScriptオブジェクトに変換！
const user = JSON.parse(jsonString);

console.log("パース後:", user);
console.log("型:", typeof user); // "object"

// これでオブジェクトとして使える！
console.log("名前:", user.name);      // "太郎"
console.log("年齢:", user.age);       // 25
console.log("都市:", user.city);      // "東京"
```

---

### JSON.stringify()：JavaScript オブジェクト → JSON 文字列

**JavaScript オブジェクトを、サーバーに送信できる JSON 文字列に変換する！**

```javascript
// JavaScript オブジェクト
const user = {
  name: "花子",
  age: 28,
  hobbies: ["読書", "旅行", "料理"],
  address: {
    city: "大阪",
    zip: "530-0001"
  }
};

// JSON.stringify() で JSON 文字列に変換！
const jsonString = JSON.stringify(user);

console.log("JSON文字列:", jsonString);
console.log("型:", typeof jsonString); // "string"

// インデント付きで見やすく表示
const prettyJson = JSON.stringify(user, null, 2);
console.log("整形されたJSON:\n", prettyJson);
```

---

## fetch API の基礎

**fetch()** は、JavaScript でサーバーと通信するための**最新で便利な方法**だよ！

### 基本的な構文

<div class="flex gap-x-1">
<div class="flex-1">

#### Promise チェーンを使った書き方

```javascript
fetch(URL)
  // レスポンスをJSONに変換
  .then(response => response.json())
  .then(data => {
    // データを使って何かする
    console.log(data);
  })
  .catch(error => {
    // エラーが起きたときの処理
    console.error("エラー:", error);
  });
```

</div>
<div class="flex-1">

#### async/await を使った書き方

```javascript
async function fetchData() {
  try {
    const response = await fetch(URL);
    // レスポンスをJSONに変換
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("エラー:", error);
  }
}

```

</div>
</div>

---

## GET リクエスト：データを取得する

**GET リクエスト**は、サーバーからデータを「読み取る」ときに使うよ！

```html
<button id="fetchBtn">ユーザー情報を取得</button>
<div id="result"></div>
```

<div class="columns-2">

```javascript
const fetchBtn = document.querySelector("#fetchBtn");
const result = document.querySelector("#result");
const url = "https://jsonplaceholder.typicode.com/users/1";

// ボタンをクリックしたら、ユーザー情報を取得
fetchBtn.addEventListener("click", async () => {
  // ローディング表示
  result.innerHTML = "<p>読み込み中...⏳</p>";

  try {
    // JSONPlaceholder API からユーザー情報を取得
    const response = await fetch(url);

    // レスポンスが成功したかチェック
    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    // JSONデータに変換
    const user = await response.json();

    // 画面に表示
    result.innerHTML = `
      <div>
        <h2>${user.name}</h2>
        <p><strong>メール:</strong> ${user.email}</p>
      </div>`;
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
});
```

**JSONPlaceholder API** は誰でも練習用に使える無料のAPIだよ！

---

## fetch の流れを理解しよう

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

---

## POST リクエスト：データを送信する

**POST リクエスト**は、サーバーにデータを「送信」するときに使うよ！

```html
<form id="postForm">
  <input type="text" id="title" placeholder="タイトル"><br>
  <textarea id="body" rows="5" placeholder="本文"></textarea><br>
  <button type="submit" id="submitBtn">投稿する</button>
</form>
<div id="result"></div>
```

---

<div class="columns-2">

```javascript
const postForm = document.querySelector("#postForm");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

postForm.addEventListener("submit", async (e) => {
  // フォームのデフォルト動作（ページリロード）を防ぐ
  e.preventDefault();

  // 入力値を取得
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  
  // 送信するデータを準備
  const newPost = {
    title: title,
    body: body,
    userId: 1,
  };

  try {
    // ボタンを無効化（二重送信防止）
    submitBtn.disabled = true;
    submitBtn.textContent = "送信中...⏳";

    // POSTリクエストを送信
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        // JSON形式で送信
        "Content-Type": "application/json",
      },
      // オブジェクトをJSON文字列に変換
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    // サーバーからのレスポンスを取得
    const createdPost = await response.json();
    console.log("作成された投稿:", createdPost);

    // 成功メッセージ
    result.className = "success";
    const { id, title, body } = createdPost;
    result.innerHTML = `
      <h3>✅ 投稿に成功しました！</h3>
      <p><strong>ID:</strong> ${id}</p>
      <p><strong>タイトル:</strong> ${title}</p>
      <p><strong>本文:</strong> ${body}</p>`;

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
```

</div>

---

## POST リクエストのポイント

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

## HTTP ステータスコード

サーバーからのレスポンスには、**ステータスコード**という番号が付いてくるよ！

| コード  | 意味                  | 説明                                |
| ------- | --------------------- | ----------------------------------- |
| **200** | OK                    | ✅ 成功！データを正常に取得できた   |
| **201** | Created               | ✅ 作成成功！新しいデータが作られた |
| **400** | Bad Request           | ❌ リクエストが間違っている         |
| **401** | Unauthorized          | ❌ 認証が必要（ログインしてね）     |
| **403** | Forbidden             | ❌ アクセス権限がない               |
| **404** | Not Found             | ❌ データが見つからない             |
| **500** | Internal Server Error | ❌ サーバー側でエラーが起きた       |

---

## ステータスコードで分岐する

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

---

## エラーハンドリング戦略

API 通信では、**色々なエラーが起こる可能性がある**から、しっかり対処しよう！

### エラーの種類

1. **ネットワークエラー**：インターネットに繋がっていない、サーバーがダウンしている
2. **HTTP エラー**：404（見つからない）、500（サーバーエラー）など
3. **JSON パースエラー**：サーバーから正しい JSON が返ってこない
4. **タイムアウト**：リクエストに時間がかかりすぎる

---

## 堅牢なエラーハンドリング例

```javascript
async function fetchDataWithErrorHandling(url) {
  try {
    // リクエスト送信
    const response = await fetch(url);
    // HTTPエラーをチェック
    if (!response.ok) {
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
    console.error("エラーが発生しました:", error);
    // エラーの種類を判定
    if (error.name === "TypeError") {
      return { success: false, error: "ネットワークエラーです" };
    } else {
      return { success: false, error: error.message };
    }
  }
}
```

---

## Lesson 4 まとめ

このレッスンで学んだこと：

- **JSON の書き方**：`{"key": "value"}` の形式、厳格なルール
- **JSON.parse()**：JSON 文字列 → JavaScript オブジェクト
- **JSON.stringify()**：JavaScript オブジェクト → JSON 文字列
- **fetch API**：サーバーとデータをやり取りする
- **GET リクエスト**：データを取得する
- **POST リクエスト**：データを送信する
- **HTTP ステータスコード**：200（成功）、404（見つからない）など
- **エラーハンドリング**：try-catch、response.ok のチェック

---

## Lesson 5: モダン JavaScript ✨

**学習目標**：最新の JavaScript 記法（ES6 以降）をマスターし、より読みやすく、書きやすいコードが書けるようになる

### なぜモダン JavaScript を学ぶの？

JavaScript は進化し続けている！**ES6（2015 年）以降、めちゃくちゃ便利な機能がたくさん追加**されたんだ！

モダンな書き方の方が：

- **短くて読みやすい**
- **バグが起きにくい**
- **AI との協働がしやすい**

---

## モダン JavaScript が重要な理由

**AI がモダンなコードを生成する**

- ChatGPT や GitHub Copilot は、モダンな JavaScript でコードを書く
- モダンな記法を知らないと、AI が生成したコードが読めない！😱

**実際の現場で使われている**

- React、Vue、Next.js など、多くののフレームワークがモダン JS を使用

**コードの品質が上がる**

- バグが減る（特にスコープの問題）
- 読みやすくなる（チームで開発しやすい）

**開発速度が上がる**

- 書くコードの量が減る
- やりたいことが直感的に書ける

---

## スプレッド構文（...）：展開・結合が超簡単！

**スプレッド構文**は、配列やオブジェクトを「バラバラに展開」する魔法の記法！`...`（ドット 3 つ）で書くよ。

### 配列のコピー

```javascript
// 🔴 昔のやり方：ループで1つずつコピー
const original = [1, 2, 3];
const copy = [];
for (let i = 0; i < original.length; i++) {
  copy.push(original[i]);
}

// ✅ モダンなやり方：スプレッド構文
const original = [1, 2, 3];
const copy = [...original]; // 展開してコピー！

console.log(copy); // [1, 2, 3]
console.log(copy === original); // false（別の配列になる）
```

**なぜコピーが必要？** JavaScript の配列は「参照」で渡されるから、元の配列を変更すると、他の場所にも影響が出ちゃう！

---

## 配列の結合

```javascript
// 🔴 昔のやり方：concat()メソッド
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);

// ✅ モダンなやり方：スプレッド構文
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5, 6]

// 途中に要素を追加することも簡単！
const merged2 = [...arr1, 99, ...arr2];
console.log(merged2); // [1, 2, 3, 99, 4, 5, 6]
```

**超便利！** 複数の配列を好きな順番で結合できる！

---

## オブジェクトのスプレッド構文

配列だけじゃない！**オブジェクトでもスプレッド構文が使える**よ！

### オブジェクトのコピー

```javascript
// 🔴 昔のやり方：Object.assign()
const user = { name: '太郎', age: 25 };
const copy = Object.assign({}, user);

// ✅ モダンなやり方：スプレッド構文
const user = { name: '太郎', age: 25 };
const copy = { ...user };

console.log(copy); // { name: '太郎', age: 25 }
console.log(copy === user); // false（別のオブジェクト）
```

---

## オブジェクトのマージと上書き

```javascript
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};

// 年齢だけ変更したい！
const updatedUser = {
  ...user, // まず全部コピー
  age: 26, // 年齢だけ上書き
};

console.log(updatedUser);
// {
//   name: '太郎',
//   age: 26,  ← 変わった！
//   city: '東京'
// }

console.log(user.age); // 25（元のオブジェクトは変わってない）
```

**順番が重要！** 後に書いたプロパティが優先される

---

## 分割代入（Destructuring）：データ取り出しが超簡単！

オブジェクトや配列から値を取り出すのが、めちゃくちゃ簡単になる魔法の記法！

### 配列の分割代入

```javascript
// 🔴 昔のやり方：インデックスで1つずつ取り出す
const colors = ['赤', '青', '緑'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// ✅ モダンなやり方：分割代入
const colors = ['赤', '青', '緑'];
const [first, second, third] = colors;

console.log(first); // '赤'
console.log(second); // '青'
console.log(third); // '緑'
```

---

## 値の交換（スワップ）

```javascript
// 🔴 昔のやり方：一時変数を使う
let a = 1;
let b = 2;
const temp = a;
a = b;
b = temp;

// ✅ モダンなやり方：分割代入
let a = 1;
let b = 2;
[a, b] = [b, a]; // 一行で交換！

console.log(a); // 2
console.log(b); // 1
```

---

## オブジェクトの分割代入

**最も使う機能の 1 つ！** API から取得したデータを扱うときに超便利！

```javascript
// 🔴 昔のやり方：ドット記法で1つずつ取り出す
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};
const name = user.name;
const age = user.age;
const city = user.city;

// ✅ モダンなやり方：分割代入
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};
const { name, age, city } = user;

console.log(name); // '太郎'
console.log(age); // 25
console.log(city); // '東京'
```

---

## 関数の引数で分割代入（超実用的！）

```javascript
// 🔴 昔のやり方：オブジェクトを受け取って、中でプロパティを取り出す
function displayUser(user) {
  console.log(`名前：${user.name}`);
  console.log(`年齢：${user.age}`);
  console.log(`都市：${user.city}`);
}

// ✅ モダンなやり方：引数の時点で分割代入
function displayUser({ name, age, city }) {
  console.log(`名前：${name}`);
  console.log(`年齢：${age}`);
  console.log(`都市：${city}`);
}

const user = { name: '太郎', age: 25, city: '東京' };
displayUser(user);
```

---

## オプショナルチェイニング(?.): undefined エラーから解放

**超重要！** API からデータを取得するときに、絶対に使う機能！

### 問題：ネストされたプロパティへのアクセス

```javascript
const user1 = {
  name: '太郎',
  address: {
    city: '東京',
  },
};

const user2 = {
  name: '花子',
  // addressプロパティがない！
};

// 🔴 昔のやり方：undefinedエラーが起きる
console.log(user1.address.city); // '東京'
console.log(user2.address.city); // エラー！

// ✅ モダンなやり方：オプショナルチェイニング
console.log(user1.address?.city); // '東京'
console.log(user2.address?.city); // undefined（エラーにならない！）
```

---

## オプショナルチェイニングの仕組み

`?.`は、**左側が null または undefined の場合、undefined を返す**よ。エラーにならない！

```javascript
const user = {
  name: '太郎',
  // addressがない
};

// 通常のアクセス
user.address.city; // エラー！

// オプショナルチェイニング
user.address?.city; // undefined（エラーにならない）

// 何階層でも使える！
const email = user.profile?.contacts?.email;
console.log(email); // undefined
```

---

## Nullish 合体演算子(??): デフォルト値の設定が賢くなる

`||`（OR 演算子）の問題を解決する新しい演算子！

### 問題：OR 演算子の落とし穴

```javascript
const count = 0;
const message = '';

// 🔴 OR演算子の問題：0や''もfalseとして扱われる
const finalCount = count || 10;
console.log(finalCount); // 10（0がfalsyなので、10になっちゃう）

const finalMessage = message || 'メッセージなし';
console.log(finalMessage); // 'メッセージなし'（''がfalsyなので）

// でも、0や''も有効な値として使いたい場合がある！
```

---

### Nullish 合体演算子（??）の登場

```javascript
const count = 0;
const message = '';

// ✅ Nullish合体演算子：nullまたはundefinedの場合のみ、デフォルト値を使う
const finalCount = count ?? 10;
console.log(finalCount); // 0（0は有効な値として扱われる）

const finalMessage = message ?? 'メッセージなし';
console.log(finalMessage); // ''（''は有効な値として扱われる）
```

| 値          | \|\| の結果    | ?? の結果      |
| ----------- | ---------------- | ---------------- |
| `null`      | デフォルト値     | デフォルト値     |
| `undefined` | デフォルト値     | デフォルト値     |
| `0`         | デフォルト値 ❌  | `0` ✅           |
| `''`        | デフォルト値 ❌  | `''` ✅          |
| `false`     | デフォルト値 ❌  | `false` ✅       |

##### OR 演算子（||）との違い

---

## オプショナルチェイニングと組み合わせる（最強！）

```javascript
const user = {
  profile: {
    preferences: {
      // themeがない
    },
  },
};

// オプショナルチェイニング + Nullish合体演算子
const theme = user?.profile?.preferences?.theme ?? 'light';
console.log(theme); // 'light'
```

---

## 配列メソッド：ループをスマートに

**モダン JavaScript では、for 文よりも配列メソッドを使う！** 読みやすくて、バグが少ない！

### map：配列の各要素を変換

```javascript
// 🔴 昔のやり方：for文で新しい配列を作る
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
// ✅ モダンなやり方：map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**map の特徴**：

- 元の配列は変更しない
- 新しい配列を返す
- 配列の長さは変わらない

---

## filter：条件に合う要素だけを取り出す

```javascript
// 🔴 昔のやり方：for文で条件判定
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}

// ✅ モダンなやり方：filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4, 6, 8, 10]
```

---

## reduce：配列を 1 つの値にまとめる

```javascript
// 🔴 昔のやり方：for文で合計を計算
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// ✅ モダンなやり方：reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```

---

## メソッドチェイン：組み合わせて使う（超強力！）

```javascript
const users = [
  { name: '太郎', age: 25, score: 85 },
  { name: '花子', age: 30, score: 92 },
  { name: '次郎', age: 28, score: 78 },
  { name: '三郎', age: 35, score: 95 },
];

// 30歳未満のユーザーで、スコアが80点以上の人の名前を取得
const result = users
  .filter((user) => user.age < 30) // 30歳未満で絞り込み
  .filter((user) => user.score >= 80) // 80点以上で絞り込み
  .map((user) => user.name); // 名前だけ取り出す

console.log(result); // ['太郎']
```

---

## モジュール（import/export）：コードを整理整頓

大きなプロジェクトでは、コードを複数のファイルに分割するよ！

### 基本的なエクスポート

```javascript
// utils.js - ユーティリティ関数を定義

// 名前付きエクスポート
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;
```

---

### 基本的なインポート

```javascript
// main.js - utils.jsの関数を使う

// 名前付きインポート
import { add, subtract, PI } from './utils.js';

console.log(add(10, 5)); // 15
console.log(PI); // 3.14159

// すべてをインポート
import * as utils from './utils.js';

console.log(utils.add(10, 5)); // 15
console.log(utils.PI); // 3.14159

// 名前を変更してインポート
import { add as addition } from './utils.js';

console.log(addition(10, 5)); // 15
```

---

## デフォルトエクスポート

```javascript
// user.js - メインの機能を1つエクスポート

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `こんにちは、${this.name}です！`;
  }
}
```

```javascript
// main.js - デフォルトエクスポートをインポート

import User from './user.js';

const user = new User('太郎', 25);
console.log(user.greet());

// 名前は自由に付けられる
import MyUser from './user.js'; // デフォルトエクスポートは名前を変えてもOK
```

---

## Lesson 5 まとめ

このレッスンで学んだこと：

- **スプレッド構文（`...`）**：配列・オブジェクトの展開、コピー、結合が簡単
- **分割代入（Destructuring）**：配列・オブジェクトから値を取り出すのが超簡単
- **オプショナルチェイニング（`?.`）**：undefined エラーから解放される
- **Nullish 合体演算子（`??`）**：デフォルト値の設定が賢くなる
- **配列メソッド（map/filter/reduce）**：ループをスマートに書ける
- **モジュール（import/export）**：コードを整理整頓できる

---

## モダン JavaScript のメリット

- **コードが短くなる**：昔：20 行 → 今：5 行

- **読みやすくなる**：意図が明確に伝わる

- **バグが減る**

  - イミュータブルな書き方でバグを防ぐ
  - オプショナルチェイニングで undefined エラーを防ぐ

- **AI との協働がしやすい**

  - AI がモダンな記法でコードを生成してくれる
  - モダンな記法を理解していれば、AI の生成コードが読める

---

## これからの開発で意識すること

- **for 文を避ける** → 配列メソッド（map/filter/reduce）を使う
- **文字列結合（+）を避ける** → テンプレートリテラルを使う
- **null チェックを簡潔に** → オプショナルチェイニング（?.）を使う
- **デフォルト値は??を使う** → OR 演算子（||）の落とし穴を避ける
- **イミュータブルに書く** → スプレッド構文で元のデータを変更しない

---

## Phase 4 全体のまとめ

**おめでとう！Phase 4 を完了したね！** 🎉

### Phase 4 で身につけた力

- **高度なイベント処理**：イベント委譲、伝播制御
- **フォーム操作とバリデーション**：リアルタイムバリデーション
- **非同期処理**：Promise、async/await
- **API 連携**：fetch API、JSON の扱い
- **モダン JavaScript**：スプレッド構文、分割代入、オプショナルチェイニング
