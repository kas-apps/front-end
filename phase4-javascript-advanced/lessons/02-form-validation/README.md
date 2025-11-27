# Lesson 2: フォーム操作とバリデーション 📝

**学習目標**：JavaScript でフォームデータを取得・検証し、リアルタイムバリデーションやカスタム検証を実装して、ユーザーフレンドリーな入力フォームを作れるようになる

---

## なぜフォーム操作とバリデーションを学ぶの?

Web アプリケーションで**最も重要な機能の一つがフォーム**だよ！ユーザー登録、ログイン、アンケート、お問い合わせ... どれもフォームなしには成り立たない。

でも、ただフォームを作るだけじゃダメなんだ。**ユーザーが正しいデータを入力できるようにサポートする**のが、優れた Web アプリの条件！

### よくあるフォームの問題

❌ **悪いフォームの例**：

- 送信ボタンを押すまでエラーが分からない
- エラーメッセージが分かりにくい（「入力が不正です」だけ）
- どのフィールドに問題があるか分からない
- せっかく入力したのに、エラーで全部消える

✅ **良いフォームの例**：

- リアルタイムで入力内容をチェック
- 具体的なエラーメッセージを表示（「8文字以上で入力してください」）
- 問題のあるフィールドがすぐ分かる
- エラーがあっても入力内容は残る

**フォーム操作とバリデーションを学べば、ユーザーが快適に使えるフォームが作れるようになる！** 💪

### このレッスンで学ぶこと

- 📋 フォームデータの取得方法（FormData API、input.value など）
- ✅ HTML5 のバリデーション属性（required, pattern, minlength など）
- ⚡ リアルタイムバリデーション（入力中にチェック）
- 🎯 カスタム検証ロジックの実装
- 💬 分かりやすいエラーメッセージの表示
- ➕ 動的にフォームフィールドを追加・削除
- 🚀 フォーム送信の制御と処理

---

## フォームデータの取得：まずは基本から！

フォームを操作するには、まず**ユーザーが入力したデータを取得**する必要があるよ。いくつか方法があるから、一つずつ見ていこう！

### 方法 1: `input.value` で個別に取得

**最もシンプルな方法！** 各入力フィールドの値を個別に取得するよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>フォームデータ取得</title>
  </head>
  <body>
    <form id="myForm">
      <label for="name">名前： </label>
      <input type="text" id="name" /><br />
      <label for="email">メールアドレス： </label>
      <input type="email" id="email" /><br />
      <button type="button" id="submitBtn">送信</button>
    </form>

    <div id="result"></div>

    <script>
      const submitBtn = document.querySelector("#submitBtn");
      const result = document.querySelector("#result");
      const inputName = document.querySelector("#name");
      const inputEmail = document.querySelector("#email");

      submitBtn.addEventListener("click", function () {
        // 各inputのvalueプロパティで値を取得
        const name = inputName.value;
        const email = inputEmail.value;

        // コンソールに表示
        console.log("名前:", name);
        console.log("メール:", email);

        // ページに表示
        result.innerHTML = `
          <div>名前: ${name}</div>
          <div>メール: ${email}</div>
        `;
      });
    </script>
  </body>
</html>
```

**ポイント**：

- `input.value` で現在の入力値を取得できる
- 空の場合は空文字列（`""`）が返る
- リアルタイムで取得できる

---

### 方法 2: `FormData` API で一括取得

**複数のフィールドがある場合はこっちが便利！** フォーム全体のデータを一度に取得できるよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>FormData API</title>
  </head>
  <body>
    <form id="registrationForm">
      <label for="name">名前： </label>
      <input type="text" name="name" id="name" /><br />
      <label for="email">メール： </label>
      <input type="email" name="email" id="email" /><br />
      <label for="age">年齢： </label>
      <input type="number" name="age" id="age" /><br />
      <label for="gender">性別： </label>
      <select name="gender" id="gender">
        <option value="">選択してください</option>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="other">その他</option>
      </select>
      <br />
      <button type="submit">登録</button>
    </form>

    <script>
      const form = document.querySelector("#registrationForm");

      form.addEventListener("submit", function (event) {
        // デフォルトのフォーム送信を防ぐ（ページがリロードされない）
        event.preventDefault();

        // FormDataオブジェクトを作成（フォーム全体のデータを取得）
        const formData = new FormData(form);

        // 方法1: get()メソッドで個別に取得
        console.log("名前:", formData.get("name"));
        console.log("メール:", formData.get("email"));
        console.log("年齢:", formData.get("age"));
        console.log("性別:", formData.get("gender"));

        // 方法2: entries()で全てのデータを取得
        console.log("=== 全データ ===");
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

        // 方法3: オブジェクトに変換（便利！）
        const data = Object.fromEntries(formData);
        console.log("オブジェクト形式:", data);
      });
    </script>
  </body>
</html>
```

**FormData の便利なポイント**：

- ✅ `name` 属性を持つ全ての入力フィールドを自動取得
- ✅ ファイルアップロードにも対応
- ✅ サーバーへの送信が簡単
- ✅ `Object.fromEntries()` でオブジェクトに変換できる

**重要**：FormData を使う場合、input 要素に **`name` 属性**が必要だよ！

---

### チェックボックスとラジオボタンの取得

チェックボックスとラジオボタンは、ちょっと特殊な扱いが必要だよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>チェックボックス・ラジオボタン</title>
  </head>
  <body>
    <form id="surveyForm">
      <h3>好きな果物を選んでください（複数選択可）</h3>
      <input type="checkbox" name="fruits" value="apple" id="apple" />
      <label for="apple">りんご</label>
      <input type="checkbox" name="fruits" value="banana" id="banana" />
      <label for="banana">バナナ</label>
      <input type="checkbox" name="fruits" value="orange" id="orange" />
      <label for="orange">オレンジ</label>

      <h3>お住まいの地域を選んでください</h3>
      <input type="radio" name="region" value="hokkaido" id="hokkaido" />
      <label for="hokkaido">北海道</label>
      <input type="radio" name="region" value="kanto" id="kanto" />
      <label for="kanto">関東</label>
      <input type="radio" name="region" value="kansai" id="kansai" />
      <label for="kansai">関西</label><br />
      <button type="submit">送信</button>
    </form>

    <script>
      const form = document.querySelector("#surveyForm");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // ===== チェックボックス（複数選択）の取得 =====
        // 方法1: FormDataのgetAll()で取得
        const formData = new FormData(form);
        const selectedFruits = formData.getAll("fruits");
        console.log("選択された果物（方法1）:", selectedFruits);

        // 方法2: querySelectorAllで取得
        const checkboxes = document.querySelectorAll(
          'input[name="fruits"]:checked'
        );
        const fruits = Array.from(checkboxes).map((cb) => cb.value);
        console.log("選択された果物（方法2）:", fruits);

        // ===== ラジオボタン（単一選択）の取得 =====
        // 方法1: FormDataのget()で取得
        const selectedRegion = formData.get("region");
        console.log("選択された地域（方法1）:", selectedRegion);

        // 方法2: querySelectorで取得
        const radioButton = document.querySelector(
          'input[name="region"]:checked'
        );
        const region = radioButton ? radioButton.value : null;
        console.log("選択された地域（方法2）:", region);
      });
    </script>
  </body>
</html>
```

**ポイント**：

- チェックボックス（複数選択）は `formData.getAll()` で配列として取得
- ラジオボタン（単一選択）は `formData.get()` で値を取得
- `:checked` 擬似クラスで選択されている要素だけ取得できる

---

## HTML5 バリデーション：ブラウザの力を借りよう！

実は、**HTML5 にはバリデーション機能が組み込まれている**んだ！JavaScript を書かなくても、基本的な検証ができるよ。

### よく使うバリデーション属性

| 属性          | 説明                             | 例                                       |
| ------------- | -------------------------------- | ---------------------------------------- |
| `required`    | 必須項目にする                   | `<input required>`                       |
| `type`        | 入力タイプを指定                 | `<input type="email">`                   |
| `minlength`   | 最小文字数                       | `<input minlength="8">`                  |
| `maxlength`   | 最大文字数                       | `<input maxlength="20">`                 |
| `min`         | 最小値（数値・日付）             | `<input type="number" min="0">`          |
| `max`         | 最大値（数値・日付）             | `<input type="number" max="100">`        |
| `pattern`     | 正規表現でパターンを指定         | `<input pattern="[0-9]{3}-[0-9]{4}">`    |
| `step`        | 刻み幅（数値）                   | `<input type="number" step="0.5">`       |

### HTML5 バリデーションの実例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5バリデーション</title>
    <style>
      /* ブラウザのデフォルトスタイルを少しカスタマイズ */
      input:invalid {
        border: 2px solid #ff6b6b;
      }
      input:valid {
        border: 2px solid #51cf66;
      }
    </style>
  </head>
  <body>
    <h2>ユーザー登録フォーム</h2>
    <form>
      <!-- 必須項目 -->
      <!-- ユーザー名（3文字以上20文字以下） -->
      <label for="username">ユーザー名（必須）： </label>
      <input type="text" name="username" id="username" required minlength="3" maxlength="20" />
      <br />

      <!-- メールアドレス（type="email"で自動検証） -->
      <label for="email">メールアドレス（必須）： </label>
      <input type="email" name="email" id="email" required />
      <br />

      <!-- パスワード（最低8文字） -->
      <label for="password">パスワード（8文字以上）： </label>
      <input type="password" name="password" id="password" required minlength="8" />
      <br />

      <!-- 数値（範囲指定） -->
      <label for="age">年齢（18歳以上）： </label>
      <input type="number" name="age" id="age" required min="18" max="120" />
      <br />

      <!-- パターン指定（電話番号） -->
      <label for="phone">電話番号（例: 090-1234-5678）： </label>
      <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="090-1234-5678" />
      <br />

      <!-- URL -->
      <label for="website">ウェブサイト： </label>
      <input type="url" name="website" placeholder="https://example.com" />
      <br />

      <button type="submit">登録</button>
    </form>
  </body>
</html>
```

**試してみよう！** このフォームで：

- ユーザー名を2文字だけ入力して送信してみて → エラーになる
- メールアドレスに「abc」だけ入力して送信してみて → エラーになる
- 年齢に「15」を入力して送信してみて → エラーになる

**HTML5 バリデーションの良いところ**：

- ✅ JavaScript を書かなくても動く
- ✅ ブラウザが自動でエラーメッセージを表示
- ✅ 送信前に自動チェック

**HTML5 バリデーションの制限**：

- ❌ エラーメッセージのカスタマイズが難しい
- ❌ 複雑な検証ロジックには対応できない
- ❌ リアルタイムのバリデーションには不向き

**だから、JavaScript で独自のバリデーションを実装することも重要なんだ！** 🚀

---

## リアルタイムバリデーション：入力中に即チェック！

**ユーザーが入力している最中に、リアルタイムでチェックして即座にフィードバックする**のが、最高のユーザー体験だよ！

### 基本的なリアルタイムバリデーション

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>リアルタイムバリデーション</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
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
        display: none; /* デフォルトは非表示 */
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
    </style>
  </head>
  <body>
    <h2>リアルタイムバリデーション</h2>
    <form id="realtimeForm">
      <div class="form-group">
        <label for="username">ユーザー名（3文字以上）</label>
        <input type="text" id="username" />
        <div class="error-message" id="usernameError"></div>
        <div class="success-message" id="usernameSuccess">✓ OK!</div>
      </div>

      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" />
        <div class="error-message" id="emailError"></div>
        <div class="success-message" id="emailSuccess">✓ OK!</div>
      </div>

      <div class="form-group">
        <label for="password">パスワード（8文字以上）</label>
        <input type="password" id="password" />
        <div class="error-message" id="passwordError"></div>
        <div class="success-message" id="passwordSuccess">✓ OK!</div>
      </div>

      <button type="submit">登録</button>
    </form>

    <script>
      // 要素を取得
      const usernameInput = document.querySelector("#username");
      const emailInput = document.querySelector("#email");
      const passwordInput = document.querySelector("#password");

      // ===== ユーザー名のバリデーション =====
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
          usernameInput.classList.remove("valid");
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

      // ===== メールアドレスのバリデーション =====
      emailInput.addEventListener("input", function () {
        const value = emailInput.value;
        const errorMsg = document.querySelector("#emailError");
        const successMsg = document.querySelector("#emailSuccess");

        // 簡易的なメールアドレスのパターン
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value.length === 0) {
          emailInput.classList.remove("valid", "invalid");
          errorMsg.classList.remove("show");
          successMsg.classList.remove("show");
        } else if (!emailPattern.test(value)) {
          emailInput.classList.add("invalid");
          emailInput.classList.remove("valid");
          errorMsg.textContent = "有効なメールアドレスを入力してください";
          errorMsg.classList.add("show");
          successMsg.classList.remove("show");
        } else {
          emailInput.classList.add("valid");
          emailInput.classList.remove("invalid");
          errorMsg.classList.remove("show");
          successMsg.classList.add("show");
        }
      });

      // ===== パスワードのバリデーション =====
      passwordInput.addEventListener("input", function () {
        const value = passwordInput.value;
        const errorMsg = document.querySelector("#passwordError");
        const successMsg = document.querySelector("#passwordSuccess");

        if (value.length === 0) {
          passwordInput.classList.remove("valid", "invalid");
          errorMsg.classList.remove("show");
          successMsg.classList.remove("show");
        } else if (value.length < 8) {
          passwordInput.classList.add("invalid");
          passwordInput.classList.remove("valid");
          errorMsg.textContent = `8文字以上で入力してください（現在：${value.length}文字）`;
          errorMsg.classList.add("show");
          successMsg.classList.remove("show");
        } else {
          passwordInput.classList.add("valid");
          passwordInput.classList.remove("invalid");
          errorMsg.classList.remove("show");
          successMsg.classList.add("show");
        }
      });

      // ===== フォーム送信時のバリデーション =====
      const form = document.querySelector("#realtimeForm");
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // 全てのフィールドが valid かチェック
        const allValid =
          usernameInput.classList.contains("valid") &&
          emailInput.classList.contains("valid") &&
          passwordInput.classList.contains("valid");

        if (allValid) {
          alert("登録成功！");
          console.log("ユーザー名:", usernameInput.value);
          console.log("メール:", emailInput.value);
          console.log("パスワード:", passwordInput.value);
        } else {
          alert("入力内容に誤りがあります。エラーメッセージを確認してください。");
        }
      });
    </script>
  </body>
</html>
```

**このコードのポイント**：

- 🎯 `input` イベントでリアルタイムにチェック（入力するたびに実行）
- 🎨 CSS クラス（`valid`/`invalid`）で視覚的にフィードバック
- 💬 具体的なエラーメッセージを表示
- ✅ 送信時にも最終チェック

**試してみよう！** 実際に入力してみると、リアルタイムでフィードバックが表示されるよ！

---

### `input` イベント vs `blur` イベント

リアルタイムバリデーションには、主に2つのイベントを使うよ。

**`input` イベント**：

- 入力するたびに発火（1文字入力するたび）
- 即座にフィードバックできる
- ユーザーが入力中に何度もエラーが表示されるので、少し煩わしい場合も

**`blur` イベント**：

- フィールドからフォーカスが外れた時に発火
- 入力が完了してからチェックされる
- ユーザー体験が良い場合が多い

```javascript
// inputイベント - 入力するたびにチェック
usernameInput.addEventListener("input", function () {
  console.log("入力中:", usernameInput.value);
  // バリデーション処理
});

// blurイベント - フォーカスが外れた時にチェック
usernameInput.addEventListener("blur", function () {
  console.log("入力完了:", usernameInput.value);
  // バリデーション処理
});
```

**どっちを使うべき？**

- パスワードの強度チェックなど、リアルタイムに表示したい → `input`
- 基本的なバリデーション → `blur`
- **両方組み合わせるのもあり！**（blur で初回チェック、その後は input でリアルタイム）

---

## カスタムバリデーション：複雑な検証を実装しよう！

HTML5 のバリデーションだけでは対応できない、**複雑な検証ロジック**を JavaScript で実装しよう！

### パスワードの強度チェック

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>パスワード強度チェック</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      /* パスワード強度インジケーター */
      .strength-meter {
        height: 10px;
        background-color: #ddd;
        border-radius: 5px;
        margin-top: 10px;
        overflow: hidden;
      }
      .strength-bar {
        height: 100%;
        transition: width 0.3s, background-color 0.3s;
        width: 0%;
      }
      .strength-bar.weak {
        width: 33%;
        background-color: #ff6b6b;
      }
      .strength-bar.medium {
        width: 66%;
        background-color: #ffd93d;
      }
      .strength-bar.strong {
        width: 100%;
        background-color: #51cf66;
      }
      .strength-text {
        margin-top: 5px;
        font-size: 14px;
      }
      .requirements {
        margin-top: 10px;
        font-size: 14px;
      }
      .requirement {
        margin: 5px 0;
      }
      .requirement.met {
        color: #51cf66;
      }
      .requirement.unmet {
        color: #868e96;
      }
    </style>
  </head>
  <body>
    <h2>パスワード強度チェック</h2>
    <form>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" />

        <!-- 強度メーター -->
        <div class="strength-meter">
          <div class="strength-bar" id="strengthBar"></div>
        </div>
        <div class="strength-text" id="strengthText"></div>

        <!-- 要件リスト -->
        <div class="requirements">
          <div class="requirement unmet" id="req-length">✗ 8文字以上</div>
          <div class="requirement unmet" id="req-uppercase">✗ 大文字を含む</div>
          <div class="requirement unmet" id="req-lowercase">✗ 小文字を含む</div>
          <div class="requirement unmet" id="req-number">✗ 数字を含む</div>
          <div class="requirement unmet" id="req-special">✗ 記号を含む</div>
        </div>
      </div>
    </form>

    <script>
      const passwordInput = document.querySelector("#password");
      const strengthBar = document.querySelector("#strengthBar");
      const strengthText = document.querySelector("#strengthText");

      passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;

        // 各要件をチェック
        const hasLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // 要件の表示を更新
        updateRequirement("req-length", hasLength);
        updateRequirement("req-uppercase", hasUppercase);
        updateRequirement("req-lowercase", hasLowercase);
        updateRequirement("req-number", hasNumber);
        updateRequirement("req-special", hasSpecial);

        // 満たしている要件の数をカウント
        const metRequirements = [
          hasLength,
          hasUppercase,
          hasLowercase,
          hasNumber,
          hasSpecial,
        ].filter(Boolean).length;

        // 強度を判定
        if (password.length === 0) {
          strengthBar.className = "strength-bar";
          strengthText.textContent = "";
        } else if (metRequirements <= 2) {
          strengthBar.className = "strength-bar weak";
          strengthText.textContent = "弱い";
          strengthText.style.color = "#ff6b6b";
        } else if (metRequirements <= 4) {
          strengthBar.className = "strength-bar medium";
          strengthText.textContent = "普通";
          strengthText.style.color = "#ffd93d";
        } else {
          strengthBar.className = "strength-bar strong";
          strengthText.textContent = "強い";
          strengthText.style.color = "#51cf66";
        }

        console.log(`パスワード強度: ${metRequirements}/5 の要件を満たしています`);
      });

      // 要件の表示を更新する関数
      function updateRequirement(id, isMet) {
        const element = document.querySelector(`#${id}`);
        if (isMet) {
          element.classList.add("met");
          element.classList.remove("unmet");
          element.textContent = element.textContent.replace("✗", "✓");
        } else {
          element.classList.add("unmet");
          element.classList.remove("met");
          element.textContent = element.textContent.replace("✓", "✗");
        }
      }
    </script>
  </body>
</html>
```

**このコードのポイント**：

- 📊 パスワードの強度を視覚的に表示（プログレスバー）
- ✅ 各要件を個別にチェックして表示
- 🎨 満たしている要件を緑色で表示
- 💪 正規表現を使って文字種をチェック

---

### パスワード確認（2つのフィールドが一致するかチェック）

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>パスワード確認</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      input.invalid {
        border-color: #ff6b6b;
      }
      input.valid {
        border-color: #51cf66;
      }
      .error-message {
        color: #ff6b6b;
        font-size: 14px;
        margin-top: 5px;
        display: none;
      }
      .error-message.show {
        display: block;
      }
      .success-message {
        color: #51cf66;
        font-size: 14px;
        margin-top: 5px;
        display: none;
      }
      .success-message.show {
        display: block;
      }
    </style>
  </head>
  <body>
    <h2>パスワード確認</h2>
    <form>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" />
      </div>

      <div class="form-group">
        <label for="confirmPassword">パスワード（確認）</label>
        <input type="password" id="confirmPassword" />
        <div class="error-message" id="confirmError">✗ パスワードが一致しません</div>
        <div class="success-message" id="confirmSuccess">✓ パスワードが一致しています</div>
      </div>

      <button type="submit">登録</button>
    </form>

    <script>
      const passwordInput = document.querySelector("#password");
      const confirmPasswordInput = document.querySelector("#confirmPassword");
      const confirmError = document.querySelector("#confirmError");
      const confirmSuccess = document.querySelector("#confirmSuccess");

      // パスワード確認フィールドの検証
      function validatePasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // 確認フィールドが空の場合は何もしない
        if (confirmPassword.length === 0) {
          confirmPasswordInput.classList.remove("valid", "invalid");
          confirmError.classList.remove("show");
          confirmSuccess.classList.remove("show");
          return false;
        }

        // パスワードが一致するかチェック
        if (password !== confirmPassword) {
          confirmPasswordInput.classList.add("invalid");
          confirmPasswordInput.classList.remove("valid");
          confirmError.classList.add("show");
          confirmSuccess.classList.remove("show");
          return false;
        } else {
          confirmPasswordInput.classList.add("valid");
          confirmPasswordInput.classList.remove("invalid");
          confirmError.classList.remove("show");
          confirmSuccess.classList.add("show");
          return true;
        }
      }

      // 確認フィールドが変更されたらチェック
      confirmPasswordInput.addEventListener("input", validatePasswordMatch);

      // パスワードフィールドが変更されても再チェック
      // （元のパスワードを変更した場合に、確認フィールドも再検証）
      passwordInput.addEventListener("input", function () {
        // 確認フィールドに何か入力されている場合のみチェック
        if (confirmPasswordInput.value.length > 0) {
          validatePasswordMatch();
        }
      });
    </script>
  </body>
</html>
```

**ポイント**：

- 2つのフィールドの値を比較
- どちらのフィールドが変更されても再検証
- 確認フィールドが空の場合は検証しない（UX 向上）

---

### ユーザー名の重複チェック（非同期検証のシミュレーション）

実際のアプリでは、サーバーに問い合わせて重複をチェックするけど、ここでは**シミュレーション**してみるよ！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ユーザー名重複チェック</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      input.checking {
        border-color: #ffd93d;
      }
      input.invalid {
        border-color: #ff6b6b;
      }
      input.valid {
        border-color: #51cf66;
      }
      .message {
        font-size: 14px;
        margin-top: 5px;
      }
      .checking-message {
        color: #ffd93d;
      }
      .error-message {
        color: #ff6b6b;
      }
      .success-message {
        color: #51cf66;
      }
    </style>
  </head>
  <body>
    <h2>ユーザー名の重複チェック</h2>
    <form>
      <div class="form-group">
        <label for="username">ユーザー名</label>
        <input type="text" id="username" placeholder="ユーザー名を入力" />
        <div class="message" id="usernameMessage"></div>
      </div>
      <p style="font-size: 14px; color: #868e96;">
        （既に使われているユーザー名: admin, user, test）
      </p>
      <button type="submit">登録</button>
    </form>

    <script>
      const usernameInput = document.querySelector("#username");
      const usernameMessage = document.querySelector("#usernameMessage");

      // 既に使われているユーザー名（実際はサーバーから取得）
      const existingUsernames = ["admin", "user", "test"];

      // タイマーのID（後で説明）
      let checkTimeout;

      usernameInput.addEventListener("input", function () {
        const username = usernameInput.value.trim();

        // 空の場合
        if (username.length === 0) {
          usernameInput.className = "";
          usernameMessage.textContent = "";
          return;
        }

        // 3文字未満の場合
        if (username.length < 3) {
          usernameInput.className = "invalid";
          usernameMessage.className = "message error-message";
          usernameMessage.textContent = "3文字以上で入力してください";
          return;
        }

        // 前回のタイマーをクリア（デバウンス処理）
        clearTimeout(checkTimeout);

        // チェック中の表示
        usernameInput.className = "checking";
        usernameMessage.className = "message checking-message";
        usernameMessage.textContent = "チェック中...";

        // 500ミリ秒後にチェック（ユーザーが入力を止めてから実行）
        checkTimeout = setTimeout(function () {
          checkUsernameAvailability(username);
        }, 500);
      });

      // ユーザー名の使用可否をチェックする関数
      function checkUsernameAvailability(username) {
        // サーバーへの問い合わせをシミュレート（実際はfetch APIなどを使用）
        setTimeout(function () {
          // 重複チェック
          if (existingUsernames.includes(username.toLowerCase())) {
            // 既に使われている
            usernameInput.className = "invalid";
            usernameMessage.className = "message error-message";
            usernameMessage.textContent = "このユーザー名は既に使用されています";
            console.log(`❌ ${username} は使用できません`);
          } else {
            // 使用可能
            usernameInput.className = "valid";
            usernameMessage.className = "message success-message";
            usernameMessage.textContent = "✓ このユーザー名は使用できます";
            console.log(`✓ ${username} は使用可能です`);
          }
        }, 500); // 500ミリ秒の遅延（ネットワーク通信をシミュレート）
      }
    </script>
  </body>
</html>
```

**このコードの高度なテクニック**：

1. **デバウンス処理**：
   - ユーザーが入力を止めてから 500ms 後にチェック
   - 入力するたびにサーバーに問い合わせると負荷が高いので、入力が落ち着いてから実行

2. **非同期処理のシミュレーション**：
   - `setTimeout` でサーバー通信の遅延を再現
   - 実際のアプリでは `fetch` API を使う（Phase 4 Lesson 4 で学習）

3. **3つの状態を視覚化**：
   - チェック中（黄色）
   - エラー（赤）
   - 成功（緑）

---

## 動的フォームフィールド：フィールドを追加・削除しよう！

**ユーザーの操作に応じて、フォームのフィールドを動的に追加・削除**できると、より柔軟なフォームが作れるよ！

### フィールドの動的追加

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>動的フィールド追加</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 600px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 15px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        position: relative;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: calc(100% - 22px);
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      .remove-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
      }
      .remove-btn:hover {
        background-color: #ff5252;
      }
      .add-btn {
        background-color: #51cf66;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      .add-btn:hover {
        background-color: #40c057;
      }
      .submit-btn {
        background-color: #339af0;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
      }
      .submit-btn:hover {
        background-color: #228be6;
      }
    </style>
  </head>
  <body>
    <h2>連絡先登録フォーム</h2>
    <p>複数の電話番号を登録できます</p>

    <form id="contactForm">
      <div id="phoneContainer">
        <!-- 最初のフィールド -->
        <div class="form-group">
          <label>電話番号 1</label>
          <input type="tel" name="phone[]" placeholder="090-1234-5678" required />
        </div>
      </div>

      <button type="button" class="add-btn" id="addPhoneBtn">
        ➕ 電話番号を追加
      </button>
      <button type="submit" class="submit-btn">送信</button>
    </form>

    <script>
      const phoneContainer = document.querySelector("#phoneContainer");
      const addPhoneBtn = document.querySelector("#addPhoneBtn");
      const form = document.querySelector("#contactForm");

      // 電話番号フィールドのカウンター
      let phoneCount = 1;

      // 電話番号フィールドを追加
      addPhoneBtn.addEventListener("click", function () {
        phoneCount++;

        // 新しいフィールドグループを作成
        const newFormGroup = document.createElement("div");
        newFormGroup.className = "form-group";
        newFormGroup.innerHTML = `
          <label>電話番号 ${phoneCount}</label>
          <input type="tel" name="phone[]" placeholder="090-1234-5678" required />
          <button type="button" class="remove-btn">削除</button>
        `;

        // コンテナに追加
        phoneContainer.appendChild(newFormGroup);

        // 削除ボタンのイベントリスナーを設定
        const removeBtn = newFormGroup.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function () {
          // このフィールドグループを削除
          phoneContainer.removeChild(newFormGroup);

          // ラベルの番号を振り直す
          updatePhoneLabels();

          console.log(`電話番号フィールドを削除しました`);
        });

        console.log(`電話番号フィールドを追加しました（合計: ${phoneCount}個）`);
      });

      // ラベルの番号を更新する関数
      function updatePhoneLabels() {
        const formGroups = phoneContainer.querySelectorAll(".form-group");
        phoneCount = formGroups.length;

        formGroups.forEach((group, index) => {
          const label = group.querySelector("label");
          label.textContent = `電話番号 ${index + 1}`;
        });
      }

      // フォーム送信時の処理
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // FormDataで全ての電話番号を取得
        const formData = new FormData(form);
        const phones = formData.getAll("phone[]");

        console.log("登録された電話番号:", phones);
        alert(`${phones.length}件の電話番号を登録しました！\n${phones.join("\n")}`);
      });
    </script>
  </body>
</html>
```

**このコードのポイント**：

- ➕ ボタンで新しいフィールドを動的に追加
- 🗑️ 削除ボタンで不要なフィールドを削除
- 🔢 ラベルの番号を自動で振り直し
- 📋 配列として複数の値を取得（`name="phone[]"`）

**試してみよう！** 電話番号を3つ追加して、真ん中の1つを削除してみて！番号が自動で振り直されるよ！

---

## エラーメッセージの表示：分かりやすく伝えよう！

**良いエラーメッセージ**の条件：

- ✅ 何が問題なのか明確
- ✅ どうすれば解決できるか分かる
- ✅ 視覚的に分かりやすい

### 悪い例 vs 良い例

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

### エラーメッセージ表示の実装例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>エラーメッセージ</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      input.error {
        border-color: #ff6b6b;
      }
      /* エラーメッセージのスタイル */
      .error-message {
        display: none;
        margin-top: 5px;
        padding: 10px;
        background-color: #ffe0e0;
        border-left: 4px solid #ff6b6b;
        border-radius: 4px;
        font-size: 14px;
        color: #c92a2a;
      }
      .error-message.show {
        display: block;
      }
      /* エラーサマリー */
      .error-summary {
        display: none;
        margin-bottom: 20px;
        padding: 15px;
        background-color: #ffe0e0;
        border: 2px solid #ff6b6b;
        border-radius: 4px;
      }
      .error-summary.show {
        display: block;
      }
      .error-summary h3 {
        margin: 0 0 10px 0;
        color: #c92a2a;
      }
      .error-summary ul {
        margin: 0;
        padding-left: 20px;
      }
      button {
        background-color: #339af0;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h2>ユーザー登録フォーム</h2>

    <!-- エラーサマリー（フォーム全体のエラーをまとめて表示） -->
    <div class="error-summary" id="errorSummary">
      <h3>⚠️ 入力内容に誤りがあります</h3>
      <ul id="errorList"></ul>
    </div>

    <form id="registrationForm">
      <div class="form-group">
        <label for="username">ユーザー名</label>
        <input type="text" id="username" />
        <div class="error-message" id="usernameError"></div>
      </div>

      <div class="form-group">
        <label for="email">メールアドレス</label>
        <!-- ブラウザのバリデーションを回避するためtype="text"を指定 -->
        <input type="text" id="email" />
        <div class="error-message" id="emailError"></div>
      </div>

      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" />
        <div class="error-message" id="passwordError"></div>
      </div>

      <div class="form-group">
        <label for="age">年齢</label>
        <input type="number" id="age" />
        <div class="error-message" id="ageError"></div>
      </div>

      <button type="submit">登録</button>
    </form>

    <script>
      const form = document.querySelector("#registrationForm");
      const errorSummary = document.querySelector("#errorSummary");
      const errorList = document.querySelector("#errorList");

      // エラーメッセージを表示する関数
      function showError(inputId, errorId, message) {
        const input = document.querySelector(`#${inputId}`);
        const errorDiv = document.querySelector(`#${errorId}`);

        input.classList.add("error");
        errorDiv.textContent = message;
        errorDiv.classList.add("show");
      }

      // エラーメッセージをクリアする関数
      function clearError(inputId, errorId) {
        const input = document.querySelector(`#${inputId}`);
        const errorDiv = document.querySelector(`#${errorId}`);

        input.classList.remove("error");
        errorDiv.classList.remove("show");
      }

      // 全てのエラーをクリアする関数
      function clearAllErrors() {
        const inputs = form.querySelectorAll("input");
        inputs.forEach((input) => {
          input.classList.remove("error");
        });

        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => {
          msg.classList.remove("show");
        });

        errorSummary.classList.remove("show");
        errorList.innerHTML = "";
      }

      // フォーム送信時のバリデーション
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // エラーをクリア
        clearAllErrors();

        // エラーを格納する配列
        const errors = [];

        // ===== ユーザー名のバリデーション =====
        const username = document.querySelector("#username").value.trim();
        if (username.length === 0) {
          showError("username", "usernameError", "ユーザー名を入力してください");
          errors.push("ユーザー名を入力してください");
        } else if (username.length < 3) {
          showError("username", "usernameError", "ユーザー名は3文字以上で入力してください");
          errors.push("ユーザー名は3文字以上で入力してください");
        } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          showError(
            "username",
            "usernameError",
            "ユーザー名は英数字とアンダースコアのみ使用できます"
          );
          errors.push("ユーザー名は英数字とアンダースコアのみ使用できます");
        }

        // ===== メールアドレスのバリデーション =====
        const email = document.querySelector("#email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length === 0) {
          showError("email", "emailError", "メールアドレスを入力してください");
          errors.push("メールアドレスを入力してください");
        } else if (!emailPattern.test(email)) {
          showError("email", "emailError", "有効なメールアドレスを入力してください");
          errors.push("有効なメールアドレスを入力してください");
        }

        // ===== パスワードのバリデーション =====
        const password = document.querySelector("#password").value;
        if (password.length === 0) {
          showError("password", "passwordError", "パスワードを入力してください");
          errors.push("パスワードを入力してください");
        } else if (password.length < 8) {
          showError("password", "passwordError", "パスワードは8文字以上で入力してください");
          errors.push("パスワードは8文字以上で入力してください");
        }

        // ===== 年齢のバリデーション =====
        const age = document.querySelector("#age").value;
        if (age.length === 0) {
          showError("age", "ageError", "年齢を入力してください");
          errors.push("年齢を入力してください");
        } else if (age < 0 || age > 150) {
          showError("age", "ageError", "有効な年齢を入力してください（0-150）");
          errors.push("有効な年齢を入力してください");
        }

        // ===== エラーがある場合、サマリーを表示 =====
        if (errors.length > 0) {
          // エラーリストを作成
          errors.forEach((error) => {
            const li = document.createElement("li");
            li.textContent = error;
            errorList.appendChild(li);
          });

          // エラーサマリーを表示
          errorSummary.classList.add("show");

          // 最初のエラーフィールドにフォーカス
          const firstErrorInput = form.querySelector("input.error");
          if (firstErrorInput) {
            firstErrorInput.focus();
          }

          console.log("バリデーションエラー:", errors);
        } else {
          // エラーがない場合、送信成功
          alert("登録成功！");
          console.log("フォームデータ:", {
            username,
            email,
            password,
            age,
          });
        }
      });

      // リアルタイムエラークリア（入力を始めたらエラーを消す）
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
        input.addEventListener("input", function () {
          const errorId = input.id + "Error";
          clearError(input.id, errorId);
        });
      });
    </script>
  </body>
</html>
```

**このコードの優れたポイント**：

- 📋 **エラーサマリー**：全てのエラーを一箇所にまとめて表示
- 🎯 **各フィールドにエラーメッセージ**：どこが問題か一目瞭然
- 🔄 **リアルタイムエラークリア**：修正を始めたらエラーが消える
- 📍 **最初のエラーにフォーカス**：ユーザーが修正しやすい

---

## バイブコーディング実践 🤖：AI と一緒にフォームを作ろう！

ここからが**バイブコーダー必見**のセクション！AI を使って効率的にフォームのバリデーションを実装する方法を学ぼう！

### AI への良い指示の例

#### 例 1: シンプルなログインフォーム

✅ **良い指示**：

```text
ログインフォームを作ってください。以下の仕様でお願いします：

【フィールド】
- メールアドレス（必須、メール形式チェック）
- パスワード（必須、8文字以上）

【バリデーション】
- リアルタイムバリデーション（blurイベント使用）
- エラーメッセージをフィールドの下に赤字で表示
- 正常な場合は緑の枠線を表示

【デザイン】
- モダンでシンプルなデザイン
- ボタンはホバー時に色が変わる
- レスポンシブ対応
```

❌ **悪い指示**：

```text
ログインフォームを作って
```

**なぜ良い指示が重要？**

- AI は具体的な指示があると、より的確なコードを生成できる
- 後から修正する手間が減る
- 技術用語を使うと、より高度な実装が可能

---

#### 例 2: 動的なフィールド追加

✅ **良い指示**：

```text
趣味を複数登録できるフォームを作ってください。

【機能】
- 最初は1つの入力フィールドを表示
- 「趣味を追加」ボタンで新しいフィールドを動的に追加
- 各フィールドに「削除」ボタンを表示（最初のフィールドは削除不可）
- 最大5個まで追加可能
- 送信時に全ての趣味を配列として取得

【デザイン】
- 追加ボタンは緑色
- 削除ボタンは赤色
- フィールドごとにボーダーで区切る
```

---

#### 例 3: パスワード強度チェック

✅ **良い指示**：

```text
パスワード強度チェック機能付きの入力フォームを作ってください。

【強度チェックの条件】
- 8文字以上
- 大文字を含む
- 小文字を含む
- 数字を含む
- 記号を含む

【表示】
- プログレスバーで強度を視覚化（弱い:赤、普通:黄色、強い:緑）
- 各条件の達成状況をチェックリストで表示
- リアルタイムで更新

【デザイン】
- モダンで分かりやすいUI
- アニメーション付き（プログレスバーが滑らかに変化）
```

---

### 生成されたコードの読み方：チェックポイント

AI が生成したフォームのコードを受け取ったら、以下のポイントをチェックしよう！

#### ✅ チェックリスト 1: 基本構造

- [ ] フォームタグに `id` が設定されているか
- [ ] 各 `input` に適切な `type` が設定されているか
- [ ] `name` 属性が設定されているか（FormData を使う場合）
- [ ] ラベルと入力フィールドが関連付けられているか（`for` 属性）

```html
<!-- ✅ 良い例 -->
<form id="myForm">
  <label for="email">メールアドレス</label>
  <input type="email" id="email" name="email" required />
</form>

<!-- ❌ 悪い例 -->
<form>
  <div>メールアドレス</div>
  <input type="text" />
</form>
```

---

#### ✅ チェックリスト 2: バリデーション

- [ ] `event.preventDefault()` でデフォルトの送信を防いでいるか
- [ ] 適切なイベント（`input`, `blur`, `submit`）を使っているか
- [ ] エラーメッセージが具体的か
- [ ] エラー時にユーザーに分かりやすくフィードバックしているか

```javascript
// ✅ 良い例
form.addEventListener("submit", function (event) {
  event.preventDefault(); // デフォルトの送信を防ぐ
  // バリデーション処理
  if (email.length === 0) {
    showError("メールアドレスを入力してください"); // 具体的
  }
});

// ❌ 悪い例
form.addEventListener("submit", function () {
  // event.preventDefault()がない → ページがリロードされる
  if (!email) {
    alert("エラー"); // 抽象的
  }
});
```

---

#### ✅ チェックリスト 3: CSS スタイル

- [ ] エラー状態とバリデーション済み状態で見た目が変わるか
- [ ] エラーメッセージが読みやすいか
- [ ] ボタンがクリック可能に見えるか（ホバー効果など）

```css
/* ✅ 良い例 */
input.error {
  border-color: #ff6b6b;
  background-color: #fff5f5;
}
input.valid {
  border-color: #51cf66;
}
button:hover {
  background-color: #228be6;
}

/* ❌ 悪い例 */
input {
  border: 1px solid black;
}
button {
  background: blue;
}
```

---

### よくある問題と修正方法

#### 問題 1: フォーム送信でページがリロードされる

**原因**：`event.preventDefault()` が呼ばれていない

```javascript
// ❌ 問題のあるコード
form.addEventListener("submit", function () {
  // バリデーション処理
});

// ✅ 修正後
form.addEventListener("submit", function (event) {
  event.preventDefault(); // これを追加！
  // バリデーション処理
});
```

---

#### 問題 2: 動的に追加した要素にイベントが効かない

**原因**：イベントリスナーを設定するタイミングが早すぎる

```javascript
// ❌ 問題のあるコード
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // これは最初から存在する要素にしか効かない
  });
});

// ✅ 修正後（方法1: 要素を追加する時にイベントも設定）
addButton.addEventListener("click", function () {
  const newElement = document.createElement("div");
  // ... 要素を作成 ...
  const removeBtn = newElement.querySelector(".remove-btn");
  removeBtn.addEventListener("click", function () {
    // ここでイベントを設定
  });
});

// ✅ 修正後（方法2: イベント委譲を使う）
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    // 削除処理
  }
});
```

---

#### 問題 3: FormData で値が取れない

**原因**：`name` 属性が設定されていない

```html
<!-- ❌ 問題のあるコード -->
<input type="text" id="username" />

<!-- ✅ 修正後 -->
<input type="text" id="username" name="username" />
```

```javascript
const formData = new FormData(form);
console.log(formData.get("username")); // name属性がないとnullになる
```

---

#### 問題 4: リアルタイムバリデーションが頻繁に実行されすぎる

**原因**：`input` イベントは1文字入力するたびに発火するため、負荷が高い

```javascript
// ❌ 問題のあるコード（1文字入力するたびにサーバーに問い合わせ）
input.addEventListener("input", function () {
  checkUsernameOnServer(input.value); // 重い処理
});

// ✅ 修正後（デバウンス処理）
let checkTimeout;
input.addEventListener("input", function () {
  clearTimeout(checkTimeout);
  checkTimeout = setTimeout(function () {
    checkUsernameOnServer(input.value); // 入力が落ち着いてから実行
  }, 500);
});
```

---

### カスタマイズポイント：ここをいじると便利！

#### 1. バリデーションタイミングの変更

```javascript
// inputイベント（入力するたびにチェック）
input.addEventListener("input", validateField);

// blurイベント（フォーカスが外れたらチェック）
input.addEventListener("blur", validateField);

// changeイベント（値が変わったらチェック）
input.addEventListener("change", validateField);
```

**おすすめ**：最初は `blur`、エラーが出た後は `input` でリアルタイムチェック

---

#### 2. エラーメッセージのカスタマイズ

```javascript
// エラーメッセージを一箇所で管理
const errorMessages = {
  required: "この項目は必須です",
  minLength: (min) => `${min}文字以上で入力してください`,
  email: "有効なメールアドレスを入力してください",
  pattern: "形式が正しくありません",
};

// 使用例
function showError(field, errorType, ...args) {
  const message = typeof errorMessages[errorType] === "function"
    ? errorMessages[errorType](...args)
    : errorMessages[errorType];
  // エラー表示処理
}

showError("username", "minLength", 3); // → "3文字以上で入力してください"
```

---

#### 3. バリデーションルールの追加

```javascript
// バリデーション関数をオブジェクトで管理
const validators = {
  required: (value) => value.trim().length > 0,
  minLength: (value, min) => value.length >= min,
  maxLength: (value, max) => value.length <= max,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(value),
  url: (value) => /^https?:\/\/.+/.test(value),
};

// 新しいバリデーターを追加
validators.alphanumeric = (value) => /^[a-zA-Z0-9]+$/.test(value);
validators.strongPassword = (value) =>
  value.length >= 8 &&
  /[A-Z]/.test(value) &&
  /[a-z]/.test(value) &&
  /[0-9]/.test(value);

// 使用例
if (!validators.required(username)) {
  showError("ユーザー名を入力してください");
}
if (!validators.alphanumeric(username)) {
  showError("英数字のみ使用できます");
}
```

---

## まとめ 📝

このレッスンでは、**JavaScript でフォーム操作とバリデーション**を学んだよ！

### 学んだこと

✅ **フォームデータの取得**

- `input.value` で個別取得
- `FormData` API で一括取得
- チェックボックス・ラジオボタンの扱い方

✅ **HTML5 バリデーション**

- `required`, `minlength`, `pattern` などの属性
- ブラウザの組み込みバリデーション機能
- 限界と JavaScript の必要性

✅ **リアルタイムバリデーション**

- `input` イベントと `blur` イベント
- 即座にフィードバックする実装
- エラー状態の視覚化

✅ **カスタムバリデーション**

- パスワード強度チェック
- パスワード確認（2つのフィールドを比較）
- 非同期検証（重複チェックなど）

✅ **動的フォームフィールド**

- フィールドの追加・削除
- イベントリスナーの動的設定
- 配列としてデータを取得

✅ **エラーメッセージの表示**

- 分かりやすいエラーメッセージ
- エラーサマリーの表示
- リアルタイムエラークリア

✅ **バイブコーディング実践**

- AI への効果的な指示の出し方
- 生成されたコードのチェックポイント
- よくある問題と修正方法

### 重要なポイント

1. **ユーザー体験を最優先に**：
   - リアルタイムでフィードバック
   - 具体的なエラーメッセージ
   - 視覚的に分かりやすく

2. **適切なバリデーションタイミング**：
   - 基本は `blur` イベント
   - パスワード強度など、リアルタイムが望ましいものは `input` イベント
   - 重い処理はデバウンス処理で最適化

3. **HTML5 と JavaScript の使い分け**：
   - 基本的な検証は HTML5 属性で
   - 複雑な検証は JavaScript で
   - 両方を組み合わせると最強

4. **保守しやすいコード**：
   - バリデーション関数を分離
   - エラーメッセージを一箇所で管理
   - 再利用可能な構造

### 次のステップ 🚀

フォーム操作ができるようになったら、次は**非同期処理と API 通信**を学ぼう！

実際の Web アプリでは：

- フォームのデータをサーバーに送信
- サーバーから返ってきたデータを処理
- ローディング表示やエラーハンドリング

これらを学ぶことで、**本格的な Web アプリケーション**が作れるようになるよ！

---

## 演習問題 🎯

理解を深めるために、実際に手を動かして練習しよう！

👉 [演習問題はこちら](./exercises/README.md)

- **基礎編**（3問）：基本的なフォームデータ取得とバリデーション
- **応用編**（3問）：リアルタイムバリデーションと動的フィールド
- **チャレンジ編**（1問）：全機能を組み合わせた総合課題

**頑張って！分からないことがあったら、このレッスンを見返したり、AI に質問してみよう！** 💪
