# Lesson 2: フォーム操作とバリデーション - 解答例と解説 📚

各演習問題の解答例と、詳しい解説をまとめたよ！

**自分のコードと比較して、学びを深めよう！** 💡

---

## 🟢 基礎編

### 問題 1: 簡単なお問い合わせフォーム

**ファイル**：[02-01.html](./02-01.html)

#### 学習ポイント

この問題では、以下のスキルを学びます：

1. **FormData API の基本的な使い方**
   - `new FormData(form)` でフォーム全体のデータを取得
   - `formData.get()` で個別の値を取得
   - `Object.fromEntries()` でオブジェクトに変換

2. **event.preventDefault() の重要性**
   - フォーム送信時のデフォルト動作（ページリロード）を防ぐ
   - JavaScript で独自の処理を実装するために必須

3. **DOM 操作の基本**
   - `innerHTML` で HTML を動的に生成
   - テンプレートリテラル（``）を使った文字列の組み立て

#### 解答例のポイント

```javascript
// FormDataオブジェクトの作成
const formData = new FormData(form);

// 個別に取得する方法
const name = formData.get("name");
const email = formData.get("email");
const message = formData.get("message");

// オブジェクトに変換する方法（便利！）
const data = Object.fromEntries(formData);
console.log(data); // → { name: "太郎", email: "taro@example.com", message: "..." }
```

**なぜ FormData を使うの？**
- 複数のフィールドがある場合、一つずつ `getElementById().value` で取得するのは面倒
- FormData なら一括で取得できる
- ファイルアップロードにも対応している

#### よくある間違い

❌ **間違い 1**：name 属性がない
```html
<input type="text" id="name" />
<!-- name属性がないと、FormDataで取得できない -->
```

✅ **正解**：
```html
<input type="text" id="name" name="name" />
```

❌ **間違い 2**：preventDefault() を忘れる
```javascript
form.addEventListener("submit", function() {
  // これだとページがリロードされる
});
```

✅ **正解**：
```javascript
form.addEventListener("submit", function(event) {
  event.preventDefault(); // これを追加！
});
```

#### バイブコーダー向け Tips 🤖

AI に以下のように指示すると、良いコードが生成されます：

```
お問い合わせフォームを作ってください。

【仕様】
- フィールド: 名前、メールアドレス、お問い合わせ内容（textarea）
- 送信ボタンをクリックすると、入力内容をコンソールとページ上に表示
- FormData APIを使ってデータを取得
- ページリロードを防ぐ

【技術要件】
- event.preventDefault()でデフォルトの送信を防ぐ
- FormDataのget()メソッドで各値を取得
- テンプレートリテラルで結果を表示
```

---

### 問題 2: HTML5 バリデーション属性を使ったフォーム

**ファイル**：[02-02.html](./02-02.html)

#### 学習ポイント

1. **HTML5 のバリデーション属性**
   - `required`：必須項目
   - `minlength` / `maxlength`：文字数制限
   - `min` / `max`：数値の範囲制限
   - `type`：入力タイプの指定（email、number など）

2. **CSS の擬似クラス**
   - `:valid`：バリデーションをパスした状態
   - `:invalid`：バリデーションに失敗した状態
   - `:focus`：フォーカスされている状態

3. **ブラウザ組み込みのバリデーション**
   - JavaScript を書かなくても基本的なチェックができる
   - ブラウザが自動でエラーメッセージを表示

#### 解答例のポイント

```html
<!-- ユーザー名: 3-20文字、必須 -->
<input
  type="text"
  name="username"
  required
  minlength="3"
  maxlength="20"
/>

<!-- メールアドレス: email形式、必須 -->
<input
  type="email"
  name="email"
  required
/>

<!-- パスワード: 8文字以上、必須 -->
<input
  type="password"
  name="password"
  required
  minlength="8"
/>

<!-- 年齢: 18歳以上、必須 -->
<input
  type="number"
  name="age"
  required
  min="18"
  max="120"
/>
```

```css
/* 有効な入力: 緑の枠線 */
input:valid {
  border-color: #51cf66;
  background-color: #f0fdf4;
}

/* 無効な入力: 赤の枠線 */
input:invalid {
  border-color: #ff6b6b;
  background-color: #fff5f5;
}

/* フォーカス時は枠線を太く */
input:focus {
  outline: none;
  border-width: 3px;
}
```

#### よくある間違い

❌ **間違い 1**：type="text" を使ってしまう
```html
<!-- メールアドレスなのに type="text" -->
<input type="text" name="email" />
```
これだと、ブラウザがメール形式をチェックしてくれない。

✅ **正解**：
```html
<input type="email" name="email" />
```

❌ **間違い 2**：:invalid スタイルが常に表示される
```css
input:invalid {
  border-color: red; /* ページ読み込み時から赤くなってしまう */
}
```

✅ **改善版**：
```css
/* フォーカスされた後に invalid の場合のみスタイルを適用 */
input:not(:focus):invalid {
  border-color: red;
}
```

#### HTML5 バリデーションの限界

HTML5 バリデーションは便利だけど、限界もあるよ：

- ❌ エラーメッセージをカスタマイズしにくい
- ❌ 複雑な検証ロジックには対応できない（例: パスワード確認）
- ❌ リアルタイムバリデーションには向かない

**だから、JavaScript でのカスタムバリデーションも学ぶことが重要！**

---

### 問題 3: エラーメッセージの表示

**ファイル**：[02-03.html](./02-03.html)

#### 学習ポイント

1. **JavaScript によるカスタムバリデーション**
   - 独自の検証ロジックを実装
   - 具体的なエラーメッセージを表示

2. **エラー表示の UX**
   - どのフィールドにエラーがあるか明確にする
   - 何が問題なのか具体的に伝える
   - 視覚的に分かりやすくする

3. **正規表現の基本**
   - メールアドレスの形式チェック
   - パターンマッチングの基礎

#### 解答例のポイント

```javascript
// エラーメッセージを表示する関数
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorDiv = document.getElementById(errorId);

  // 入力フィールドにerrorクラスを追加（赤い枠線）
  input.classList.add("error");

  // エラーメッセージを設定して表示
  errorDiv.textContent = message;
  errorDiv.classList.add("show");
}

// エラーメッセージをクリアする関数
function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorDiv = document.getElementById(errorId);

  input.classList.remove("error");
  errorDiv.classList.remove("show");
}
```

**バリデーションの実装例**：
```javascript
// メールアドレスのバリデーション
const email = emailInput.value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email.length === 0) {
  showError("email", "emailError", "メールアドレスを入力してください");
  hasError = true;
} else if (!emailPattern.test(email)) {
  showError("email", "emailError", "有効なメールアドレスを入力してください");
  hasError = true;
}
```

#### 良いエラーメッセージの条件

✅ **具体的**：
- 悪い例：「入力が不正です」
- 良い例：「パスワードは8文字以上で入力してください」

✅ **問題の場所が明確**：
- フィールドの近くに表示
- 赤い枠線で視覚的に強調

✅ **解決方法が分かる**：
- 「メールアドレスの形式が正しくありません」だけでなく
- 「example@domain.com の形式で入力してください」のように

#### バイブコーダー向け Tips 🤖

エラーメッセージの実装を AI に依頼する場合：

```
ログインフォームのバリデーションを実装してください。

【バリデーションルール】
- メールアドレス:
  - 空の場合: "メールアドレスを入力してください"
  - 形式が不正: "有効なメールアドレスを入力してください"
- パスワード:
  - 空の場合: "パスワードを入力してください"
  - 8文字未満: "パスワードは8文字以上で入力してください"

【実装方法】
- showError(inputId, errorId, message) 関数を作成
- clearError(inputId, errorId) 関数を作成
- エラーがあるフィールドに "error" クラスを追加（赤い枠線）
- エラーメッセージをフィールドの下に表示
- 送信時に全フィールドをチェック
```

---

## 🟡 応用編

### 問題 4: リアルタイムバリデーション

**ファイル**：[02-04.html](./02-04.html)

#### 学習ポイント

1. **リアルタイムバリデーションの実装**
   - `input` イベント：入力するたびに発火
   - `blur` イベント：フォーカスが外れた時に発火
   - どちらを使うべきか判断する

2. **UX の向上**
   - ユーザーが入力中に即座にフィードバック
   - エラーを早期に発見できる
   - ストレスの少ない入力体験

3. **CSS による視覚的フィードバック**
   - 緑の枠線：正常
   - 赤の枠線：エラー
   - チェックマーク：OK 表示

#### 解答例のポイント

```javascript
// blurイベント - フォーカスが外れた時にチェック
usernameInput.addEventListener("blur", function () {
  validateUsername();
});

// inputイベント - 入力するたびにチェック
// （ただし、一度エラーが出た後のみ）
usernameInput.addEventListener("input", function () {
  // 既にエラーが表示されている場合のみ、リアルタイムでチェック
  if (usernameInput.classList.contains("invalid")) {
    validateUsername();
  }
});

// バリデーション関数
function validateUsername() {
  const value = usernameInput.value.trim();

  if (value.length === 0) {
    // 空の場合は何もしない
    usernameInput.classList.remove("valid", "invalid");
    clearError("username", "usernameError");
    return false;
  }

  if (value.length < 3) {
    // エラー
    usernameInput.classList.add("invalid");
    usernameInput.classList.remove("valid");
    showError("username", "usernameError", "3文字以上で入力してください");
    return false;
  }

  // OK
  usernameInput.classList.add("valid");
  usernameInput.classList.remove("invalid");
  clearError("username", "usernameError");
  showSuccess("username", "usernameSuccess", "✓ OK!");
  return true;
}
```

#### イベントの使い分け

| イベント   | 発火タイミング               | 適している場面                     |
| ---------- | ---------------------------- | ---------------------------------- |
| `input`    | 1文字入力するたび            | パスワード強度チェックなど         |
| `blur`     | フォーカスが外れた時         | 基本的なバリデーション             |
| `change`   | 値が変わって確定した時       | select、checkbox、radio            |

**推奨アプローチ**：
1. 最初は `blur` でチェック（入力完了後）
2. エラーが出たら `input` に切り替え（リアルタイムで修正状況を表示）

```javascript
let hasBeenValidated = false;

input.addEventListener("blur", function () {
  validate();
  hasBeenValidated = true;
});

input.addEventListener("input", function () {
  if (hasBeenValidated) {
    validate(); // 一度検証した後は、リアルタイムでチェック
  }
});
```

#### よくある問題

❌ **問題**：input イベントだと、入力中に何度もエラーが表示されてうるさい

```javascript
// 1文字入力するたびにエラー表示 → UXが悪い
input.addEventListener("input", function () {
  if (input.value.length < 3) {
    showError("3文字以上で入力してください");
  }
});
```

✅ **解決策**：blur でチェック、またはデバウンス処理

```javascript
// フォーカスが外れた時にチェック（より良いUX）
input.addEventListener("blur", function () {
  if (input.value.length < 3) {
    showError("3文字以上で入力してください");
  }
});
```

---

### 問題 5: 正規表現を使ったカスタムバリデーション

**ファイル**：[02-05.html](./02-05.html)

#### 学習ポイント

1. **正規表現の実践的な使い方**
   - パターンマッチングの基本
   - よく使う正規表現パターン
   - `test()` メソッドの使い方

2. **複雑な検証ロジック**
   - 複数の条件を組み合わせる
   - 各条件を個別にチェックして表示

3. **パスワード強度の可視化**
   - チェックリストで要件を表示
   - 満たしている条件を✓で表示

#### 解答例のポイント

**よく使う正規表現パターン**：

```javascript
// 英数字とアンダースコアのみ
const usernamePattern = /^[a-zA-Z0-9_]+$/;

// 電話番号（090-1234-5678）
const phonePattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;

// 郵便番号（123-4567）
const zipPattern = /^[0-9]{3}-[0-9]{4}$/;

// メールアドレス（簡易版）
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// パスワードの各条件
const hasLength = password.length >= 8;
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
```

**パスワード強度チェックの実装**：

```javascript
function validatePassword(password) {
  // 各条件をチェック
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  // 条件の表示を更新
  updateRequirement("req-length", checks.length);
  updateRequirement("req-uppercase", checks.uppercase);
  updateRequirement("req-lowercase", checks.lowercase);
  updateRequirement("req-number", checks.number);

  // 全ての条件を満たしているかチェック
  const allValid = Object.values(checks).every((v) => v === true);

  return allValid;
}

// 要件の表示を更新
function updateRequirement(id, isMet) {
  const element = document.getElementById(id);
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
```

#### 正規表現の読み方

```javascript
/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/

// 分解して読む:
^           // 文字列の先頭
[0-9]{3}    // 数字3文字
-           // ハイフン
[0-9]{4}    // 数字4文字
-           // ハイフン
[0-9]{4}    // 数字4文字
$           // 文字列の末尾
```

**よく使う記号**：
- `^`：文字列の先頭
- `$`：文字列の末尾
- `[0-9]`：数字
- `[a-z]`：小文字
- `[A-Z]`：大文字
- `{3}`：ちょうど3回
- `+`：1回以上
- `*`：0回以上

#### バイブコーダー向け Tips 🤖

正規表現を AI に聞く場合：

```
以下の形式をチェックする正規表現を作ってください：

1. 電話番号: 090-1234-5678 の形式
2. 郵便番号: 123-4567 の形式
3. ユーザー名: 英数字とアンダースコアのみ、3-20文字

JavaScriptのtest()メソッドで使える形式でお願いします。
各パターンの説明も付けてください。
```

AI は正規表現が得意なので、積極的に活用しよう！

---

### 問題 6: 動的にフィールドを追加・削除

**ファイル**：[02-06.html](./02-06.html)

#### 学習ポイント

1. **DOM の動的操作**
   - `document.createElement()` で要素を作成
   - `appendChild()` で要素を追加
   - `removeChild()` で要素を削除

2. **イベントリスナーの動的設定**
   - 追加した要素にイベントを設定
   - 削除ボタンのクリックイベント

3. **配列としてデータを取得**
   - `name="skills[]"` で配列形式
   - `formData.getAll()` で全ての値を取得

4. **状態管理**
   - フィールドの個数を管理
   - 最大数に達したらボタンを無効化

#### 解答例のポイント

**フィールドの追加**：

```javascript
const addButton = document.getElementById("addSkillBtn");
const container = document.getElementById("skillsContainer");
let skillCount = 1;
const MAX_SKILLS = 5;

addButton.addEventListener("click", function () {
  // 最大数チェック
  if (skillCount >= MAX_SKILLS) {
    return;
  }

  skillCount++;

  // 新しいフィールドグループを作成
  const skillGroup = document.createElement("div");
  skillGroup.className = "skill-group";

  // HTMLを設定
  skillGroup.innerHTML = `
    <label>スキル ${skillCount}</label>
    <div style="display: flex; gap: 10px;">
      <input type="text" name="skills[]" required />
      <button type="button" class="remove-btn">削除</button>
    </div>
  `;

  // コンテナに追加
  container.appendChild(skillGroup);

  // 削除ボタンのイベントリスナーを設定
  const removeBtn = skillGroup.querySelector(".remove-btn");
  removeBtn.addEventListener("click", function () {
    container.removeChild(skillGroup);
    skillCount--;

    // ラベルの番号を更新
    updateSkillLabels();

    // 追加ボタンを有効化
    if (skillCount < MAX_SKILLS) {
      addButton.disabled = false;
    }
  });

  // 最大数に達したら追加ボタンを無効化
  if (skillCount >= MAX_SKILLS) {
    addButton.disabled = true;
  }

  console.log(`スキルフィールドを追加（合計: ${skillCount}個）`);
});

// ラベルの番号を更新する関数
function updateSkillLabels() {
  const groups = container.querySelectorAll(".skill-group");
  groups.forEach((group, index) => {
    const label = group.querySelector("label");
    label.textContent = `スキル ${index + 1}`;
  });
  skillCount = groups.length;
}
```

**フォーム送信時のデータ取得**：

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // FormDataで配列として取得
  const formData = new FormData(form);
  const skills = formData.getAll("skills[]");

  console.log("登録されたスキル:", skills);
  // → ["JavaScript", "HTML", "CSS", "React", "Node.js"]

  alert(`${skills.length}個のスキルを登録しました！\n${skills.join("\n")}`);
});
```

#### 重要なポイント

1. **name 属性に `[]` を付ける**：
```html
<input type="text" name="skills[]" />
```
これで、FormData が配列として認識する。

2. **動的に追加した要素にイベントを設定**：
```javascript
// 要素を追加した直後に、イベントリスナーも設定する
const removeBtn = skillGroup.querySelector(".remove-btn");
removeBtn.addEventListener("click", function () {
  // 削除処理
});
```

3. **状態を管理する**：
```javascript
let skillCount = 1; // 現在のフィールド数を追跡

// 追加時にカウントアップ
skillCount++;

// 削除時にカウントダウン
skillCount--;

// 最大数チェック
if (skillCount >= MAX_SKILLS) {
  addButton.disabled = true;
}
```

#### よくある問題と解決策

❌ **問題 1**：動的に追加した削除ボタンが動かない

```javascript
// ❌ これは最初から存在する要素にしか効かない
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach((btn) => {
  btn.addEventListener("click", /* ... */);
});
```

✅ **解決策**：要素を追加する時にイベントも設定
```javascript
// ✅ 要素を追加した後にイベントを設定
const removeBtn = skillGroup.querySelector(".remove-btn");
removeBtn.addEventListener("click", /* ... */);
```

❌ **問題 2**：最初のフィールドも削除できてしまう

✅ **解決策**：最初のフィールドには削除ボタンを付けない
```html
<!-- 最初のフィールド -->
<div class="skill-group">
  <label>スキル 1</label>
  <input type="text" name="skills[]" required />
  <!-- 削除ボタンなし -->
</div>
```

#### イベント委譲を使った別の実装方法

動的な要素が多い場合、**イベント委譲**を使うとコードがシンプルになるよ：

```javascript
// コンテナにイベントリスナーを設定（子要素のクリックを検知）
container.addEventListener("click", function (event) {
  // クリックされた要素が削除ボタンかチェック
  if (event.target.classList.contains("remove-btn")) {
    // 削除ボタンの親要素（skill-group）を削除
    const skillGroup = event.target.closest(".skill-group");
    container.removeChild(skillGroup);

    skillCount--;
    updateSkillLabels();

    if (skillCount < MAX_SKILLS) {
      addButton.disabled = false;
    }
  }
});
```

**イベント委譲のメリット**：
- 動的に追加した要素にも自動で効く
- イベントリスナーの数が少なくて済む（パフォーマンス向上）

---

## 🔴 チャレンジ編

### 問題 7: 総合課題 - 完全なユーザー登録フォーム

**ファイル**：[02-07.html](./02-07.html)

#### 学習ポイント

この問題では、これまで学んだ全ての技術を総合的に使います：

1. ✅ FormData API
2. ✅ HTML5 バリデーション属性
3. ✅ JavaScript によるカスタムバリデーション
4. ✅ リアルタイムバリデーション
5. ✅ 正規表現
6. ✅ パスワード強度チェック
7. ✅ パスワード確認
8. ✅ エラーメッセージの表示
9. ✅ エラーサマリー
10. ✅ DOM 操作とイベント処理

#### 解答例の構造

```javascript
// ===== 1. グローバル変数と要素の取得 =====
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
// ... 他の要素 ...

// ===== 2. バリデーション関数（個別） =====
function validateUsername(username) {
  // ユーザー名のバリデーション
  // 戻り値: { valid: boolean, message: string }
}

function validateEmail(email) {
  // メールアドレスのバリデーション
}

function validatePassword(password) {
  // パスワードのバリデーション
}

// ===== 3. エラー表示用の汎用関数 =====
function showError(inputId, errorId, message) {
  // エラーメッセージを表示
}

function clearError(inputId, errorId) {
  // エラーメッセージをクリア
}

function showSuccess(inputId, successId, message) {
  // 成功メッセージを表示
}

// ===== 4. リアルタイムバリデーション =====
usernameInput.addEventListener("blur", function () {
  const result = validateUsername(usernameInput.value);
  if (!result.valid) {
    showError("username", "usernameError", result.message);
  } else {
    showSuccess("username", "usernameSuccess", "✓ OK!");
  }
});

// ... 他のフィールドも同様 ...

// ===== 5. パスワード強度チェック（リアルタイム） =====
passwordInput.addEventListener("input", function () {
  updatePasswordStrength(passwordInput.value);
});

// ===== 6. パスワード確認 =====
confirmPasswordInput.addEventListener("input", function () {
  validatePasswordMatch();
});

// ===== 7. フォーム送信時の処理 =====
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // 全てのエラーをクリア
  clearAllErrors();

  // エラーを格納する配列
  const errors = [];

  // 各フィールドをバリデーション
  const usernameResult = validateUsername(usernameInput.value);
  if (!usernameResult.valid) {
    showError("username", "usernameError", usernameResult.message);
    errors.push(usernameResult.message);
  }

  // ... 他のフィールドも同様 ...

  // エラーがある場合
  if (errors.length > 0) {
    showErrorSummary(errors);
    // 最初のエラーフィールドにフォーカス
    const firstErrorInput = form.querySelector("input.error");
    if (firstErrorInput) {
      firstErrorInput.focus();
    }
  } else {
    // エラーがない場合、送信処理
    submitForm();
  }
});

// ===== 8. 送信処理 =====
function submitForm() {
  // ボタンを無効化して「処理中...」に変更
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "処理中...";

  // 2秒後に成功メッセージ（サーバー通信をシミュレート）
  setTimeout(function () {
    // FormDataで全てのデータを取得
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // チェックボックス（複数選択）は別途取得
    data.hobbies = formData.getAll("hobbies");

    console.log("登録データ:", data);

    alert("登録成功！");

    // フォームをリセット
    form.reset();

    // ボタンを元に戻す
    submitBtn.disabled = false;
    submitBtn.textContent = "登録する";
  }, 2000);
}
```

#### 実装のコツ

**1. 段階的に実装しよう**

一度に全部作ろうとすると大変。段階的に実装するのがコツ：

```
ステップ1: HTMLでフォーム全体を作成
  ↓
ステップ2: CSSでスタイリング
  ↓
ステップ3: 各フィールドのバリデーション関数を作成
  ↓
ステップ4: リアルタイムバリデーションを実装
  ↓
ステップ5: フォーム送信処理を実装
  ↓
ステップ6: エラーサマリーを追加
  ↓
ステップ7: ボーナス機能を追加
```

**2. 関数を分割しよう**

長い関数は読みにくく、バグが入りやすい。機能ごとに関数を分割：

```javascript
// ❌ 悪い例: 1つの関数が長すぎる
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // 100行以上のコード...
});

// ✅ 良い例: 機能ごとに関数を分割
form.addEventListener("submit", function(event) {
  event.preventDefault();
  clearAllErrors();
  const errors = validateAllFields();
  if (errors.length > 0) {
    showErrorSummary(errors);
  } else {
    submitForm();
  }
});

function validateAllFields() {
  const errors = [];
  // バリデーション処理
  return errors;
}

function submitForm() {
  // 送信処理
}
```

**3. DRY原則（Don't Repeat Yourself）**

同じコードを何度も書かない。共通部分は関数にまとめる：

```javascript
// ❌ 悪い例: 同じコードを何度も書いている
usernameInput.addEventListener("blur", function() {
  const errorDiv = document.getElementById("usernameError");
  errorDiv.textContent = "エラー";
  errorDiv.classList.add("show");
  usernameInput.classList.add("error");
});

emailInput.addEventListener("blur", function() {
  const errorDiv = document.getElementById("emailError");
  errorDiv.textContent = "エラー";
  errorDiv.classList.add("show");
  emailInput.classList.add("error");
});

// ✅ 良い例: 共通部分を関数にまとめる
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorDiv = document.getElementById(errorId);

  errorDiv.textContent = message;
  errorDiv.classList.add("show");
  input.classList.add("error");
}

usernameInput.addEventListener("blur", function() {
  showError("username", "usernameError", "エラーメッセージ");
});

emailInput.addEventListener("blur", function() {
  showError("email", "emailError", "エラーメッセージ");
});
```

#### ボーナス機能の実装

**1. パスワード表示切り替え**

```javascript
const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

showPasswordCheckbox.addEventListener("change", function() {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; // パスワードを表示
  } else {
    passwordInput.type = "password"; // パスワードを隠す
  }
});
```

**2. リアルタイム文字数カウント**

```javascript
const bioTextarea = document.getElementById("bio");
const charCount = document.getElementById("charCount");
const maxLength = 500;

bioTextarea.addEventListener("input", function() {
  const currentLength = bioTextarea.value.length;
  charCount.textContent = `${currentLength}/${maxLength}`;

  // 最大文字数に近づいたら警告
  if (currentLength > maxLength - 50) {
    charCount.style.color = "#ff6b6b";
  } else {
    charCount.style.color = "#868e96";
  }
});
```

**3. localStorage に保存**

```javascript
// フォームの値を localStorage に保存
function saveFormData() {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  localStorage.setItem("registrationForm", JSON.stringify(data));
}

// ページ読み込み時に localStorage から復元
window.addEventListener("DOMContentLoaded", function() {
  const savedData = localStorage.getItem("registrationForm");
  if (savedData) {
    const data = JSON.parse(savedData);
    // 各フィールドに値を設定
    usernameInput.value = data.username || "";
    emailInput.value = data.email || "";
    // ... 他のフィールドも同様 ...
  }
});

// 入力時に自動保存
form.addEventListener("input", function() {
  saveFormData();
});
```

#### バイブコーダー向け Tips 🤖

大きなプロジェクトを AI と一緒に作る場合：

**ステップ 1**：まず全体の構造を指示
```
ユーザー登録フォームの基本的なHTMLとCSSを作ってください。

【フィールド】
- ユーザー名、メールアドレス、パスワード、パスワード確認、生年月日、性別、趣味、自己紹介

【デザイン】
- モダンでプロフェッショナル
- レスポンシブ対応
- フィールドごとにラベルとエラーメッセージ表示エリアを用意
```

**ステップ 2**：機能を一つずつ追加
```
先ほどのフォームに、ユーザー名のバリデーション機能を追加してください。

【バリデーションルール】
- 3-20文字
- 英数字とアンダースコアのみ
- 必須

【実装】
- blurイベントでバリデーション
- エラーメッセージを表示
- 正常な場合は緑の枠線と✓マークを表示
```

**ステップ 3**：他の機能も順次追加
```
パスワード強度チェック機能を追加してください。

【要件】
- プログレスバーで強度を可視化
- 各条件（8文字以上、大文字、小文字、数字）をチェックリストで表示
- リアルタイムで更新
```

**一気に全部を依頼するのではなく、機能ごとに分けて依頼すると、より良いコードが生成されるよ！**

---

## まとめ 🎉

お疲れ様でした！全ての演習を完了したあなたは、フォーム操作とバリデーションのスキルをしっかり身につけたよ！

### 身についたスキル

- ✅ FormData API でのデータ取得
- ✅ HTML5 バリデーション属性の使い方
- ✅ JavaScript によるカスタムバリデーション
- ✅ リアルタイムバリデーションの実装
- ✅ 正規表現を使ったパターンマッチング
- ✅ 動的な DOM 操作
- ✅ エラーメッセージの適切な表示
- ✅ ユーザーフレンドリーな UX の実装

### 次のステップ 🚀

フォームの基礎ができたら、次は：
- **非同期処理**：サーバーとの通信
- **API 連携**：実際のデータベースとやり取り
- **高度な UI**：ローディング表示、トースト通知など

引き続き頑張って！💪
