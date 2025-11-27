# Lesson 1: 高度なイベント処理 🎯

**学習目標**：イベントの仕組みを深く理解し、イベント委譲やイベント伝播を使いこなして、効率的で高度なインタラクティブ機能を実装できるようになる

---

## なぜ高度なイベント処理を学ぶの？

Phase 3 で、`addEventListener` を使って基本的なイベント処理を学んだね。ボタンをクリックしたら何かが起こる、みたいな簡単な処理はできるようになった！

でも、**実際の Web アプリケーション**では、もっと複雑なイベント処理が必要になるんだ：

- 🎯 大量の要素に効率的にイベントを設定したい
- 🔄 動的に追加された要素にもイベントを設定したい
- 🛑 デフォルトの動作をキャンセルしたい
- 📊 イベントの詳細情報（どこをクリックしたか、など）を取得したい
- 🎨 イベントの伝播を制御したい

**高度なイベント処理を理解すると、プロが作るような洗練された Web アプリが作れるようになるよ！** 💪

### 学ぶこと

- イベントオブジェクトで詳細情報を取得
- イベント委譲（delegation）でパフォーマンス向上
- イベント伝播（バブリング・キャプチャリング）の仕組み
- preventDefault と stopPropagation の使い分け
- カスタムイベントの作成

---

## イベントオブジェクト：イベントの詳細情報

イベントが発生すると、**イベントオブジェクト**が自動的に作られるよ。このオブジェクトには、イベントに関する超便利な情報が詰まってる！

### 基本的な使い方

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>イベントオブジェクト</title>
  </head>
  <body>
    <button id="myButton">クリックしてね</button>

    <script>
      const button = document.querySelector("#myButton");

      // イベントリスナーの関数は、自動的にイベントオブジェクトを受け取る
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
    </script>
  </body>
</html>
```

**ブラウザで実行して、Console を見てみよう！イベントの詳細情報がたくさん表示されるよ！** 🔍

---

### よく使うイベントオブジェクトのプロパティ

#### 1. `event.target` - イベントが発生した要素

**最も重要なプロパティ！** イベントが実際に発生した要素を取得できる。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>event.target</title>
  </head>
  <body>
    <div id="container">
      <button class="btn" data-id="1">ボタン 1</button>
      <button class="btn" data-id="2">ボタン 2</button>
      <button class="btn" data-id="3">ボタン 3</button>
    </div>

    <script>
      const buttons = document.querySelectorAll(".btn");

      buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
          // どのボタンがクリックされたか分かる！
          console.log("クリックされたボタン:", event.target);
          console.log("ボタンのID:", event.target.dataset.id);
          console.log("ボタンのテキスト:", event.target.textContent);
        });
      });
    </script>
  </body>
</html>
```

**event.target を使えば、どの要素がクリックされたか特定できる！** 🎯

---

#### 2. `event.currentTarget` - イベントリスナーが設定された要素

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>target vs currentTarget</title>
  </head>
  <body>
    <div id="parent" style="padding: 20px; background: lightblue;">
      親要素
      <button id="child">子要素（ボタン）</button>
    </div>

    <script>
      const parent = document.querySelector("#parent");

      parent.addEventListener("click", function (event) {
        console.log("target:", event.target); // → クリックされた要素（親 or 子）
        console.log("currentTarget:", event.currentTarget); // → 常に親要素
      });
    </script>
  </body>
</html>
```

**違い**：

- `event.target`：実際にクリックされた要素
- `event.currentTarget`：イベントリスナーが設定された要素

---

#### 3. マウスイベントのプロパティ

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>マウスイベントのプロパティ</title>
  </head>
  <body>
    <button id="myButton">ここをクリック！</button>

    <script>
      const button = document.querySelector("#myButton");

      // mousedown イベントで全てのマウスボタンを検出
      button.addEventListener("mousedown", function (event) {
        // マウスの座標（ビューポート基準）
        console.log("clientX:", event.clientX);
        console.log("clientY:", event.clientY);

        // マウスの座標（ページ基準）
        console.log("pageX:", event.pageX);
        console.log("pageY:", event.pageY);

        // マウスの座標（画面基準）
        console.log("screenX:", event.screenX);
        console.log("screenY:", event.screenY);

        // どのボタンがクリックされたか
        // 0: 左クリック, 1: 中クリック, 2: 右クリック
        console.log("button:", event.button);
      });
    </script>
  </body>
</html>
```

**マウスの位置を取得して、カスタムメニューやツールチップを表示できる！** 🖱️

---

#### 4. キーボードイベントのプロパティ

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>キーボードイベント</title>
  </head>
  <body>
    <input type="text" id="textInput" placeholder="何か入力してね" />

    <script>
      const input = document.querySelector("#textInput");

      input.addEventListener("keydown", function (event) {
        // 押されたキー
        console.log("key:", event.key); // → "a", "Enter", "Shift" など

        // キーコード
        console.log("code:", event.code); // → "KeyA", "Enter", "ShiftLeft" など

        // 修飾キーが押されているか
        console.log("Shiftキー:", event.shiftKey); // → true/false
        console.log("Ctrlキー:", event.ctrlKey); // → true/false
        console.log("Altキー:", event.altKey); // → true/false

        // Enterキーが押された時の処理
        if (event.key === "Enter") {
          console.log("Enterキーが押されました！");
        }
      });
    </script>
  </body>
</html>
```

**キーボードショートカットを実装できる！** ⌨️

---

## イベント伝播：バブリングとキャプチャリング

イベントは、**階層構造**に沿って伝播するんだ。これを理解すると、より効率的なコードが書けるよ！

### イベント伝播の 3 つのフェーズ

```text
1. キャプチャリングフェーズ：親 → 子 へ伝播
     ↓
2. ターゲットフェーズ：イベントが発生した要素
     ↓
3. バブリングフェーズ：子 → 親 へ伝播
```

**例え話**：石を池に投げ込むと、波紋が広がっていくイメージ！

---

### バブリング（Bubbling）：子から親へ伝播

**デフォルトでは、イベントはバブリング（子 → 親）で伝播するよ。**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>イベントバブリング</title>
  </head>
  <body>
    <div id="grandparent" style="padding: 40px; background: lightblue">
      祖父要素
      <div id="parent" style="padding: 30px; background: lightgreen">
        親要素
        <div id="child" style="padding: 20px; background: lightcoral">
          子要素（クリックしてね）
        </div>
      </div>
    </div>

    <script>
      const grandparent = document.querySelector("#grandparent");
      const parent = document.querySelector("#parent");
      const child = document.querySelector("#child");

      // 祖父要素のクリック
      grandparent.addEventListener("click", function () {
        console.log("祖父要素がクリックされました");
      });

      // 親要素のクリック
      parent.addEventListener("click", function () {
        console.log("親要素がクリックされました");
      });

      // 子要素のクリック
      child.addEventListener("click", function () {
        console.log("子要素がクリックされました");
      });
    </script>
  </body>
</html>
```

**子要素をクリックすると、以下の順で実行される**：

```text
1. 子要素がクリックされました
2. 親要素がクリックされました
3. 祖父要素がクリックされました
```

**子 → 親 → 祖父 の順で伝播してる！これがバブリング！** 🔵

---

### キャプチャリング（Capturing）：親から子へ伝播

**`addEventListener` の第 3 引数を `true` にすると、キャプチャリングで伝播するよ。**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>イベントキャプチャリング</title>
  </head>
  <body>
    <div id="grandparent" style="padding: 40px; background: lightblue">
      祖父要素
      <div id="parent" style="padding: 30px; background: lightgreen">
        親要素
        <div id="child" style="padding: 20px; background: lightcoral">
          子要素（クリックしてね）
        </div>
      </div>
    </div>

    <script>
      const grandparent = document.querySelector("#grandparent");
      const parent = document.querySelector("#parent");
      const child = document.querySelector("#child");

      // キャプチャリングフェーズで処理（第3引数をtrue）
      grandparent.addEventListener("click", function () {
        console.log("祖父要素がクリックされました");
      }, true);

      child.addEventListener("click", function () {
        console.log("子要素がクリックされました");
      }, true);

      parent.addEventListener("click", function () {
        console.log("親要素がクリックされました");
      }, true);
    </script>
  </body>
</html>
```

**子要素をクリックすると、以下の順で実行される**：

```text
1. 祖父要素がクリックされました
2. 親要素がクリックされました
3. 子要素がクリックされました
```

**祖父 → 親 → 子 の順で伝播してる！これがキャプチャリング！** 🔴

---

## preventDefault：デフォルトの動作をキャンセル

ブラウザには、特定の要素に対する**デフォルトの動作**があるよ。これをキャンセルしたい時に `preventDefault()` を使う！

### 例 1：リンクのデフォルト動作をキャンセル

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>preventDefault - リンク</title>
  </head>
  <body>
    <a href="https://www.google.com" id="myLink">Google へ（でも遷移しない）</a>

    <script>
      const link = document.querySelector("#myLink");

      link.addEventListener("click", function (event) {
        // デフォルトの動作（ページ遷移）をキャンセル
        event.preventDefault();

        console.log("リンクがクリックされたけど、ページ遷移しない！");
      });
    </script>
  </body>
</html>
```

**用途**：シングルページアプリケーション（SPA）で、ページ遷移せずに処理したい時に使う！

---

### 例 2：フォーム送信をキャンセル

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>preventDefault - フォーム</title>
  </head>
  <body>
    <form id="myForm">
      <input type="text" name="username" placeholder="ユーザー名" />
      <button type="submit">送信</button>
    </form>

    <script>
      const form = document.querySelector("#myForm");

      form.addEventListener("submit", function (event) {
        // デフォルトの動作（フォーム送信）をキャンセル
        event.preventDefault();

        console.log("フォームが送信されたけど、ページはリロードしない！");

        // JavaScript でバリデーションや API 送信ができる
        const formData = new FormData(event.target);
        console.log("ユーザー名:", formData.get("username"));
      });
    </script>
  </body>
</html>
```

**用途**：フォームのバリデーションや、AJAX でデータを送信する時に必須！** 📝

---

### 例 3：右クリックメニューをキャンセル

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>preventDefault - 右クリック</title>
  </head>
  <body>
    <div id="customArea" style="width: 200px; height: 200px; background: lightblue;">
      右クリックしてみて（カスタムメニューが出る）
    </div>

    <script>
      const area = document.querySelector("#customArea");

      area.addEventListener("contextmenu", function (event) {
        // デフォルトの右クリックメニューをキャンセル
        event.preventDefault();

        console.log("カスタムメニューを表示する処理をここに書く");
        alert("カスタムメニュー！");
      });
    </script>
  </body>
</html>
```

**用途**：独自の右クリックメニューを実装する時に使う！

---

## stopPropagation：イベントの伝播を停止

**イベントのバブリングやキャプチャリングを途中で止めたい時**に `stopPropagation()` を使うよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>stopPropagation</title>
  </head>
  <body>
    <div id="parent" style="padding: 40px; background: lightblue">
      親要素（クリックすると親のイベント発火）
      <div id="child" style="padding: 20px; background: lightcoral">
        子要素（クリックしても親のイベントは発火しない）
      </div>
    </div>

    <script>
      const parent = document.querySelector("#parent");
      const child = document.querySelector("#child");

      // 親要素のクリック
      parent.addEventListener("click", function () {
        console.log("親要素がクリックされました");
      });

      // 子要素のクリック
      child.addEventListener("click", function (event) {
        console.log("子要素がクリックされました");

        // イベントの伝播を停止（親要素のイベントは発火しない）
        event.stopPropagation();
      });
    </script>
  </body>
</html>
```

**子要素をクリックすると**：

```text
子要素がクリックされました
（親要素のイベントは発火しない！）
```

**用途**：親要素にもイベントがある時、子要素のクリックで親のイベントを発火させたくない場合！

---

## イベント委譲（Event Delegation）：効率的なイベント管理

**イベント委譲**は、親要素にイベントリスナーを 1 つだけ設定して、子要素のイベントを管理する超便利なテクニック！

### なぜイベント委譲が必要？

#### ❌ 非効率な方法：各要素にイベントを設定

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>イベント委譲</title>
  </head>
  <body>
    <ul id="todoList">
      <li>タスク 1 <button class="delete">削除</button></li>
      <li>タスク 2 <button class="delete">削除</button></li>
      <li>タスク 3 <button class="delete">削除</button></li>
    </ul>

    <button id="addTask">新しいタスクを追加</button>

    <script>
      const todoList = document.querySelector("#todoList");
      const addTaskButton = document.querySelector("#addTask");
      let count = todoList.children.length;

      // 親要素（ul）にイベントを1つだけ設定（効率的！）
      todoList.addEventListener("click", function (event) {
        // クリックされた要素が削除ボタンか確認
        if (event.target.classList.contains("delete")) {
          // 削除処理
          event.target.parentElement.remove();
          console.log("タスクを削除しました");
        }
      });

      // 新しいタスクを動的に追加
      addTaskButton.addEventListener("click", function () {
        const newTask = document.createElement("li");
        newTask.innerHTML = `タスク ${++count} <button class="delete">削除</button>`;
        todoList.appendChild(newTask);
        // イベント委譲のおかげで、新しいボタンにもイベントが効く！
      });
    </script>
  </body>
</html>
```

---

#### ✅ 効率的な方法：イベント委譲

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>イベント委譲</title>
  </head>
  <body>
    <ul id="todoList">
      <li>タスク 1 <button class="delete">削除</button></li>
      <li>タスク 2 <button class="delete">削除</button></li>
      <li>タスク 3 <button class="delete">削除</button></li>
    </ul>

    <button id="addTask">新しいタスクを追加</button>

    <script>
      const todoList = document.querySelector("#todoList");
      const addTaskButton = document.querySelector("#addTask");

      // 親要素（ul）にイベントを1つだけ設定（効率的！）
      todoList.addEventListener("click", function (event) {
        // クリックされた要素が削除ボタンか確認
        if (event.target.classList.contains("delete")) {
          // 削除処理
          event.target.parentElement.remove();
          console.log("タスクを削除しました");
        }
      });

      // 新しいタスクを動的に追加
      addTaskButton.addEventListener("click", function () {
        const newTask = document.createElement("li");
        newTask.innerHTML = `タスク ${todoList.children.length + 1} <button class="delete">削除</button>`;
        todoList.appendChild(newTask);

        // イベント委譲のおかげで、新しいボタンにもイベントが効く！
      });
    </script>
  </body>
</html>
```

**メリット**：

- ✅ イベントリスナーが 1 つだけ（メモリ効率が良い）
- ✅ 動的に追加された要素にも自動的にイベントが効く
- ✅ コードがシンプルで読みやすい

**イベント委譲は、大量の要素を扱う時の必須テクニック！** 🚀

---

### 実践例：TODO リストで削除と完了切り替え

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>TODO リスト - イベント委譲</title>
    <style>
      .completed {
        text-decoration: line-through;
        opacity: 0.6;
      }
    </style>
  </head>
  <body>
    <h1>TODO リスト</h1>

    <input type="text" id="taskInput" placeholder="新しいタスク" />
    <button id="addButton">追加</button>

    <ul id="taskList"></ul>

    <script>
      const taskInput = document.querySelector("#taskInput");
      const addButton = document.querySelector("#addButton");
      const taskList = document.querySelector("#taskList");

      // タスクを追加
      addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
          alert("タスクを入力してください");
          return;
        }

        // 新しいタスクを作成
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <button class="toggle">完了</button>
          <button class="delete">削除</button>
        `;

        taskList.appendChild(li);
        taskInput.value = ""; // 入力欄をクリア
      });

      // イベント委譲：親要素にイベントを1つだけ設定
      taskList.addEventListener("click", function (event) {
        const target = event.target;

        // 削除ボタンがクリックされた場合
        if (target.classList.contains("delete")) {
          target.parentElement.remove();
          console.log("タスクを削除しました");
        }

        // 完了ボタンがクリックされた場合
        if (target.classList.contains("toggle")) {
          const task = target.previousElementSibling;
          task.classList.toggle("completed");

          // ボタンのテキストを変更
          if (task.classList.contains("completed")) {
            target.textContent = "未完了";
          } else {
            target.textContent = "完了";
          }
        }
      });
    </script>
  </body>
</html>
```

**動かしてみよう！タスクを追加して、完了・削除を試してみてね！** 🎉

---

## カスタムイベント：独自のイベントを作成

**JavaScript では、独自のイベントを作成して発火できるよ！**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>カスタムイベント</title>
  </head>
  <body>
    <button id="triggerButton">カスタムイベントを発火</button>
    <div id="listener">イベントを待機中...</div>

    <script>
      const triggerButton = document.querySelector("#triggerButton");
      const listener = document.querySelector("#listener");

      // カスタムイベントを待機
      document.addEventListener("myCustomEvent", function (event) {
        console.log("カスタムイベントが発火しました！");
        console.log("データ:", event.detail);

        listener.textContent = `カスタムイベント受信: ${event.detail.message}`;
      });

      // カスタムイベントを作成して発火
      triggerButton.addEventListener("click", function () {
        // CustomEventを作成
        const customEvent = new CustomEvent("myCustomEvent", {
          detail: {
            message: "こんにちは！",
            timestamp: new Date().toLocaleTimeString(),
          },
        });

        // イベントを発火
        document.dispatchEvent(customEvent);
      });
    </script>
  </body>
</html>
```

**用途**：コンポーネント間の通信や、独自のイベントシステムを作る時に使う！

---

## 🤖 バイブコーディング実践

### AI への指示例

#### ⭕ 良い指示の例

```text
「TODO リストを作成してください。以下の機能を実装してください：

1. タスクを追加できる（入力欄とボタン）
2. 各タスクに「完了」ボタンと「削除」ボタンを付ける
3. 「完了」ボタンをクリックすると、タスクに取り消し線が付く
4. 「削除」ボタンをクリックすると、タスクが削除される
5. イベント委譲を使って、親要素にイベントリスナーを1つだけ設定する
6. 動的に追加されたタスクにもイベントが効くようにする

HTML、CSS、JavaScriptをすべて含めてください。」
```

**良い点**：

- 具体的な機能を列挙
- イベント委譲の使用を明示
- 動的な要素への対応を指示
- すべてのコードを求めている

---

#### ❌ 曖昧な指示の例

```text
「イベントを使ってリストを作って」
```

**問題点**：

- どんなリストか不明
- どんなイベントか不明
- 機能が明確でない
- イベント委譲を使うか不明

---

### 生成されたコードの読み方

AI がイベント処理のコードを生成したら、以下をチェックしよう！

#### ✅ チェックリスト

1. **イベントリスナーが適切に設定されているか？**

   ```javascript
   // ✅ Good: addEventListener を使用
   button.addEventListener("click", function () {
     // 処理
   });

   // ❌ Bad: onclick 属性（古い書き方）
   button.onclick = function () {
     // 処理
   };
   ```

2. **イベント委譲を使っているか？**

   ```javascript
   // ✅ Good: 親要素にイベントを設定
   parentElement.addEventListener("click", function (event) {
     if (event.target.classList.contains("delete")) {
       // 削除処理
     }
   });

   // ❌ Bad: 各子要素にイベントを設定（非効率）
   childElements.forEach((element) => {
     element.addEventListener("click", function () {
       // 処理
     });
   });
   ```

3. **preventDefault が必要な場所で使われているか？**

   ```javascript
   // ✅ Good: フォーム送信時に preventDefault
   form.addEventListener("submit", function (event) {
     event.preventDefault();
     // バリデーション処理
   });

   // ❌ Bad: preventDefault がなく、ページがリロードされる
   form.addEventListener("submit", function (event) {
     // バリデーション処理（でもページがリロードされる）
   });
   ```

4. **event.target を適切に使っているか？**

    ```javascript
    // ✅ Good: event.target でクリックされた要素を取得
    element.addEventListener("click", function (event) {
      console.log("クリックされた要素:", event.target);
    });

    // ❌ Bad: this を使っている（アロー関数では意図通りに動作しないことがある）
    element.addEventListener("click", () => {
      console.log(this); // → アロー関数は自身の`this`を持たないため、外側のスコープの`this`（この場合は`window`または`undefined`）を参照します
    });
    ```

5. **動的に追加された要素にもイベントが効くか？**

   ```javascript
   // ✅ Good: イベント委譲で動的な要素にも対応
   parentElement.addEventListener("click", function (event) {
     if (event.target.classList.contains("dynamic-item")) {
       // 処理
     }
   });

   // ❌ Bad: 既存の要素にしかイベントが効かない
   const items = document.querySelectorAll(".item");
   items.forEach((item) => {
     item.addEventListener("click", function () {
       // 後で追加された要素には効かない
     });
   });
   ```

6. **メモリリークを防いでいるか？**

   ```javascript
   // ✅ Good: 不要になったイベントリスナーを削除
   function handleClick() {
     console.log("クリック！");
   }

   button.addEventListener("click", handleClick);

   // 後で削除
   button.removeEventListener("click", handleClick);

   // ❌ Bad: 削除せず、メモリリークの原因に
   button.addEventListener("click", function () {
     console.log("クリック！");
   });
   // 匿名関数は削除できない
   ```

---

### よくある問題と修正方法

#### 問題 1：動的に追加された要素にイベントが効かない

**症状**：JavaScript で追加した要素をクリックしても、何も起こらない

**原因**：イベントリスナーを設定した時点で存在しなかった要素には、イベントが効かない

**修正方法**：

```javascript
// ❌ 修正前：各要素にイベントを設定
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

// ✅ 修正後：イベント委譲を使う
const container = document.querySelector("#container");
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
```

---

#### 問題 2：フォーム送信でページがリロードされる

**症状**：フォームを送信すると、ページがリロードされて、処理が中断される

**原因**：`preventDefault()` を使っていない

**修正方法**：

```javascript
// ❌ 修正前
form.addEventListener("submit", function (event) {
  const data = new FormData(event.target);
  console.log(data); // ここで処理が中断される
});

// ✅ 修正後
form.addEventListener("submit", function (event) {
  event.preventDefault(); // デフォルトの送信をキャンセル
  const data = new FormData(event.target);
  console.log(data); // 正常に処理される
});
```

---

#### 問題 3：親要素のイベントも発火してしまう

**症状**：子要素をクリックすると、親要素のイベントも発火してしまう

**原因**：イベントがバブリングで親要素に伝播している

**修正方法**：

```javascript
// ❌ 修正前
parent.addEventListener("click", function () {
  console.log("親がクリックされた");
});

child.addEventListener("click", function () {
  console.log("子がクリックされた");
  // 親のイベントも発火してしまう
});

// ✅ 修正後：stopPropagation() を使う
parent.addEventListener("click", function () {
  console.log("親がクリックされた");
});

child.addEventListener("click", function (event) {
  console.log("子がクリックされた");
  event.stopPropagation(); // 親への伝播を停止
});
```

---

#### 問題 4：アロー関数で this が使えない

**症状**：`this` を使おうとすると、`undefined` になる

**原因**：アロー関数では `this` が使えない

**修正方法**：

```javascript
// ❌ 修正前：アロー関数で this を使う
button.addEventListener("click", () => {
  console.log(this); // → undefined（または window）
});

// ✅ 修正後：通常の関数を使う
button.addEventListener("click", function () {
  console.log(this); // → button 要素
});

// ✅ または、event.target を使う
button.addEventListener("click", (event) => {
  console.log(event.target); // → button 要素
});
```

---

#### 問題 5：大量のイベントリスナーでパフォーマンスが悪い

**症状**：1000 個のボタンにイベントを設定したら、動作が遅い

**原因**：各要素にイベントリスナーを設定している

**修正方法**：

```javascript
// ❌ 修正前：各ボタンにイベントを設定
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // 処理
  });
});

// ✅ 修正後：イベント委譲を使う
const container = document.querySelector("#container");
container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    // 処理
  }
});
```

---

### カスタマイズポイント

AI が生成したイベント処理コードを、自分で調整する時のポイント：

#### 1. イベントの種類を変更

```javascript
// click イベントを他のイベントに変更
element.addEventListener("click", handleClick); // クリック
element.addEventListener("dblclick", handleClick); // ダブルクリック
element.addEventListener("mouseenter", handleClick); // マウスが入った時
element.addEventListener("mouseleave", handleClick); // マウスが出た時
```

---

#### 2. イベント委譲の条件を調整

```javascript
// クラス名で判定
if (event.target.classList.contains("delete")) {
  // 削除処理
}

// タグ名で判定
if (event.target.tagName === "BUTTON") {
  // ボタンの処理
}

// data 属性で判定
if (event.target.dataset.action === "delete") {
  // 削除処理
}
```

---

#### 3. イベントの詳細情報を取得

```javascript
element.addEventListener("click", function (event) {
  console.log("クリック位置:", event.clientX, event.clientY);
  console.log("クリックされた要素:", event.target);
  console.log("修飾キー:", event.shiftKey, event.ctrlKey);
});
```

---

## まとめ

### このレッスンで学んだこと

- ✅ **イベントオブジェクト**：event.target、event.currentTarget、マウス座標、キー情報などを取得できる
- ✅ **イベント伝播**：バブリング（子 → 親）とキャプチャリング（親 → 子）の仕組みを理解した
- ✅ **preventDefault**：デフォルトの動作をキャンセルできる（リンク遷移、フォーム送信など）
- ✅ **stopPropagation**：イベントの伝播を停止できる
- ✅ **イベント委譲**：親要素にイベントを 1 つだけ設定して、効率的にイベントを管理できる
- ✅ **カスタムイベント**：独自のイベントを作成・発火できる

---

### 重要なポイント

1. **イベント委譲を積極的に使おう**（パフォーマンス向上、動的要素への対応）
2. **preventDefault はフォーム処理で必須**
3. **event.target でクリックされた要素を特定**
4. **大量の要素には、個別にイベントを設定しない**

---

### 次のステップ

高度なイベント処理が理解できたら、次は**フォーム操作とバリデーション**を学ぼう！

- リアルタイムバリデーション
- カスタムバリデーション
- 動的なフォーム要素の追加・削除

**準備はいい？Lesson 2 へ進もう！** 🚀

👉 [Lesson 2: フォーム操作とバリデーションへ進む](../02-form-validation/README.md)

---

### 演習問題

このレッスンの理解を深めるために、演習問題に挑戦しよう！

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

イベント処理の高度なテクニック、マスターできたかな？イベント委譲は特に重要だから、しっかり身につけよう！次のレッスンでもっと実践的な機能を作っていくよ！💪
