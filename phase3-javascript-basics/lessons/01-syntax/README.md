# Lesson 1: JavaScript 基礎文法 🔤

**学習目標**：JavaScript の基本的な文法を理解し、変数、データ型、演算子を使ってシンプルなプログラムが書けるようになる

---

## なぜ JavaScript 基礎文法を学ぶの？

Phase 1 と 2 では、HTML/CSS で**見た目**を作る方法を学んだね。でも、それだけでは「静的な文書」しか作れない。

**「ボタンをクリックしたら〇〇する」「ユーザーの入力に応じて××する」みたいな動きのある Web ページを作るには、プログラミングが必要！**

JavaScript は、Web ブラウザで動く唯一のプログラミング言語だよ。だから、フロントエンド開発には絶対に必要なんだ！

### JavaScript でできること

- ボタンをクリックしたら色が変わる
- ユーザーの入力を検証する
- データを計算して結果を表示する
- アニメーションを制御する
- サーバーと通信してデータを取得する

**まずは基礎文法を学んで、プログラミングの第一歩を踏み出そう！** 💪

---

## JavaScript を実行する方法

JavaScript を学ぶ前に、どうやってコードを実行するか知っておこう！

### 方法 1: HTML ファイルに埋め込む

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript テスト</title>
  </head>
  <body>
    <h1>JavaScript を試してみよう</h1>

    <script>
      // ここに JavaScript を書く
      console.log("Hello, JavaScript!");
    </script>
  </body>
</html>
```

**ブラウザでこのファイルを開いて、F12 キーを押して Console タブを見てみよう！**

---

### 方法 2: 外部ファイルとして読み込む

**HTML ファイル（index.html）**：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript テスト</title>
  </head>
  <body>
    <h1>JavaScript を試してみよう</h1>

    <!-- 外部のJavaScriptファイルを読み込む -->
    <script src="script.js"></script>
  </body>
</html>
```

**JavaScript ファイル（script.js）**：

```javascript
// ここに JavaScript を書く
console.log("Hello, JavaScript!");
```

**ファイルを分けると、コードが整理されて読みやすくなるよ！** 📁

---

### 方法 3: ブラウザの Console で直接実行（練習に最適！）

1. ブラウザで F12 キーを押す
2. Console タブを開く
3. 直接 JavaScript を入力して Enter

```javascript
console.log("Hello!");
```

**すぐに結果が見られるから、練習に最適！** 🎯

---

## 変数：データを入れる箱

プログラミングでは、**データを保存して後で使う**ことがよくある。そのために「変数」という仕組みを使うよ！

### 変数とは？

**例え話**：変数は「ラベル付きの箱」みたいなもの！

```
┌─────────────┐
│  name       │ ← 変数名（箱のラベル）
├─────────────┤
│  "太郎"     │ ← 値（箱の中身）
└─────────────┘
```

**箱にラベル（変数名）を付けて、中にデータ（値）を入れる。後でそのラベルを使って中身を取り出せる！**

---

### let で変数を宣言する

**`let` は、後で値を変更できる変数を作る時に使うよ。**

```javascript
// 変数を宣言して値を代入
let age = 25;
console.log(age); // → 25

// 後で値を変更できる
age = 26;
console.log(age); // → 26

age = 30;
console.log(age); // → 30
```

**`let` は「値が変わる可能性がある」時に使う！** 🔄

---

### const で定数を宣言する

**`const` は、一度決めたら変更できない定数を作る時に使うよ。**

```javascript
// 定数を宣言
const country = "日本";
console.log(country); // → 日本

// 変更しようとするとエラー！
country = "アメリカ"; // ❌ Uncaught TypeError: Assignment to constant variable.
```

**`const` は「絶対に変わらない値」に使う！**

---

### const と let の使い分け

```javascript
// 誕生日は変わらない → const
const birthday = "2000-01-01";

// 年齢は毎年変わる → let
let age = 24;

// 名前は変わる可能性がある → let
let name = "太郎";
```

**基本的には `const` を使って、変更が必要な時だけ `let` を使うのがモダンな JavaScript の書き方！** ⭐

---

### var は使わない（古い書き方）

```javascript
// var は古い書き方（使わない！）
var oldStyle = "使わないでね";
```

**`var` は昔の書き方で、いろいろ問題があるから、`let` と `const` を使おう！**

---

### 変数名のルール

変数名には、いくつかルールがあるよ：

```javascript
// ✅ 良い変数名
let userName = "太郎"; // キャメルケース（推奨）
let user_name = "太郎"; // スネークケース
let age2 = 25; // 数字を含めてもOK

// ❌ ダメな変数名
let 2age = 25; // 数字から始まるのはNG
let user-name = "太郎"; // ハイフンはNG
let let = "test"; // 予約語はNG
```

**よく使われる命名規則**：

- **キャメルケース**（camelCase）：JavaScript の変数や関数名で最も一般的
  - `userName`, `myAge`, `studentList`
- **スクリーミングスネークケース**（SCREAMING_SNAKE_CASE）：定数名に使われる
  - `MAX_COUNT`, `API_KEY`

---

## データ型：データの種類

JavaScript には、いろいろな種類のデータがあるよ！

### 1. 数値（Number）

**整数も小数も、全部 Number 型だよ！**

```javascript
let age = 25; // 整数
let price = 1980; // 整数
let temperature = -5; // 負の数
let pi = 3.14; // 小数
let billion = 1e9; // 指数表記（10億）

console.log(age); // → 25
console.log(pi); // → 3.14
console.log(billion); // → 1000000000
```

---

### 2. 文字列（String）

**テキストデータは文字列型！シングルクォート `'` かダブルクォート `"` で囲むよ。**

```javascript
let name = "太郎"; // ダブルクォート
let greeting = "こんにちは"; // ダブルクォート
let message = 'Hello!'; // シングルクォートでもOK

console.log(name); // → 太郎
console.log(greeting); // → こんにちは
```

**どちらを使ってもいいけど、プロジェクト内で統一するのがベスト！** ✨

---

#### 文字列の連結

**文字列は `+` でつなげられるよ！**

```javascript
let firstName = "太郎";
let lastName = "山田";
let fullName = lastName + " " + firstName;

console.log(fullName); // → 山田 太郎
```

---

#### エスケープシーケンス

**文字列の中で特殊な文字を使うには、バックスラッシュ `\` を使うよ。**

```javascript
let quote = "彼は言った：「こんにちは」"; // ダブルクォートの中でダブルクォートを使う
let path = "C:\\Users\\name\\Desktop"; // バックスラッシュ
let multiLine = "1行目\n2行目"; // 改行

console.log(quote);
console.log(path);
console.log(multiLine);
```

---

### 3. 真偽値（Boolean）

**true（真）か false（偽）の 2 つだけの値！**

```javascript
let isAdult = true; // 真
let isStudent = false; // 偽

console.log(isAdult); // → true
console.log(isStudent); // → false
```

**条件分岐（Lesson 2）で超重要になるよ！**

---

### 4. null（ヌル）

**「意図的に値が無い」ことを示すよ。**

```javascript
let emptyValue = null; // 意図的に空にしている

console.log(emptyValue); // → null
```

**例え話**：「空っぽの箱を用意した」状態。

---

### 5. undefined（未定義）

**「まだ値が入っていない」ことを示すよ。**

```javascript
let notAssigned; // 値を代入していない

console.log(notAssigned); // → undefined
```

**例え話**：「箱は用意したけど、まだ何も入れていない」状態。

---

### null と undefined の違い

```javascript
let intentionallyEmpty = null; // プログラマーが意図的に「空」にした
let notYetAssigned; // まだ値が代入されていない（undefined）

console.log(intentionallyEmpty); // → null
console.log(notYetAssigned); // → undefined
```

**`null` は「空っぽ」、`undefined` は「未定義」！** 📦

---

## typeof 演算子：データ型を調べる

**`typeof` を使うと、変数のデータ型が分かるよ！**

```javascript
let age = 25;
let name = "太郎";
let isAdult = true;
let emptyValue = null;
let notAssigned;

console.log(typeof age); // → "number"
console.log(typeof name); // → "string"
console.log(typeof isAdult); // → "boolean"
console.log(typeof emptyValue); // → "object" （これはバグ！歴史的理由）
console.log(typeof notAssigned); // → "undefined"
```

**デバッグする時に超便利！「この変数、何型だっけ？」って時に使おう！** 🔍

---

## 演算子：データを操作する

### 算術演算子（計算）

**数値の計算ができるよ！**

```javascript
let a = 10;
let b = 3;

console.log(a + b); // → 13 (足し算)
console.log(a - b); // → 7 (引き算)
console.log(a * b); // → 30 (掛け算)
console.log(a / b); // → 3.3333... (割り算)
console.log(a % b); // → 1 (余り)
console.log(a ** b); // → 1000 (べき乗: 10の3乗)
```

---

#### インクリメント・デクリメント

**値を 1 増やす/減らす便利な書き方！**

```javascript
let count = 5;

count++; // count = count + 1 と同じ
console.log(count); // → 6

count--; // count = count - 1 と同じ
console.log(count); // → 5

count += 3; // count = count + 3 と同じ
console.log(count); // → 8

count *= 2; // count = count * 2 と同じ
console.log(count); // → 16
```

**ループでカウントする時によく使うよ！** 🔢

---

### 比較演算子（比べる）

**2 つの値を比較して、true か false を返すよ！**

```javascript
let a = 10;
let b = 20;

console.log(a < b); // → true (aはbより小さい)
console.log(a > b); // → false (aはbより大きい)
console.log(a <= 10); // → true (aは10以下)
console.log(a >= 10); // → true (aは10以上)
console.log(a === 10); // → true (aは10と等しい)
console.log(a !== b); // → true (aとbは等しくない)
```

---

#### === と == の違い（超重要！）

```javascript
let num = 5;
let str = "5";

// == は型を変換して比較（あいまい）
console.log(num == str); // → true （5と"5"を同じとみなす）

// === は型も含めて厳密に比較（推奨）
console.log(num === str); // → false （5と"5"は型が違う）
```

**必ず `===` と `!==` を使おう！`==` と `!=` は使わない！** ⭐

---

### 論理演算子（論理）

**複数の条件を組み合わせる時に使うよ！**

```javascript
let age = 25;
let hasLicense = true;

// && (AND): 両方trueならtrue
console.log(age >= 18 && hasLicense); // → true

// || (OR): どちらかtrueならtrue
console.log(age < 18 || hasLicense); // → true

// ! (NOT): trueとfalseを反転
console.log(!hasLicense); // → false
```

---

#### 論理演算子の使用例

```javascript
let age = 20;
let isStudent = true;

// 18歳以上 かつ 学生の場合
if (age >= 18 && isStudent) {
  console.log("学割が適用されます");
}

// 18歳未満 または 学生の場合
if (age < 18 || isStudent) {
  console.log("特別料金が適用されます");
}

// 学生でない場合
if (!isStudent) {
  console.log("通常料金です");
}
```

**条件分岐で超重要になるよ！（Lesson 2 で詳しく学ぶ）** 🎯

---

## テンプレートリテラル：文字列を便利に扱う

**バッククォート `` ` `` を使うと、文字列の中に変数を埋め込めるよ！**

### 従来の書き方（面倒...）

```javascript
let name = "太郎";
let age = 25;

let message = "こんにちは、" + name + "さん。あなたは" + age + "歳ですね。";
console.log(message);
// → こんにちは、太郎さん。あなたは25歳ですね。
```

**`+` でつなげるのは面倒だし、読みにくい...** 😓

---

### テンプレートリテラル（便利！）

```javascript
let name = "太郎";
let age = 25;

let message = `こんにちは、${name}さん。あなたは${age}歳ですね。`;
console.log(message);
// → こんにちは、太郎さん。あなたは25歳ですね。
```

**`${}` の中に変数を入れるだけ！読みやすくて書きやすい！** ✨

---

### テンプレートリテラルの便利な機能

#### 1. 改行が簡単

```javascript
let multiLine = `これは
複数行の
文字列です。`;

console.log(multiLine);
// → これは
// 複数行の
// 文字列です。
```

---

#### 2. 式も埋め込める

```javascript
let price = 1000;
let tax = 0.1;

let message = `合計金額は${price + price * tax}円です。`;
console.log(message);
// → 合計金額は1100円です。

let a = 5;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
// → 5 + 3 = 8
```

**計算結果もそのまま埋め込める！** 🧮

---

## 実践例：基礎文法を使ってみよう

### 例 1: 簡単な自己紹介

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>自己紹介</title>
  </head>
  <body>
    <h1>自己紹介</h1>

    <script>
      // 変数を宣言
      const name = "山田太郎";
      const age = 25;
      const country = "日本";
      const isStudent = false;

      // テンプレートリテラルで文字列を作成
      const introduction = `こんにちは！私の名前は${name}です。
${age}歳で、${country}に住んでいます。
学生かどうか：${isStudent}`;

      // コンソールに出力
      console.log(introduction);

      // データ型も確認してみよう
      console.log("名前の型:", typeof name);
      console.log("年齢の型:", typeof age);
      console.log("学生かの型:", typeof isStudent);
    </script>
  </body>
</html>
```

---

### 例 2: 簡単な計算

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>計算</title>
  </head>
  <body>
    <h1>商品の合計金額計算</h1>

    <script>
      // 商品の価格
      const itemPrice = 1500;
      const quantity = 3;
      const taxRate = 0.1; // 10%

      // 計算
      const subtotal = itemPrice * quantity; // 小計
      const tax = subtotal * taxRate; // 消費税
      const total = subtotal + tax; // 合計

      // 結果を表示
      console.log("=== 購入明細 ===");
      console.log(`商品単価: ${itemPrice}円`);
      console.log(`数量: ${quantity}個`);
      console.log(`小計: ${subtotal}円`);
      console.log(`消費税(${taxRate * 100}%): ${tax}円`);
      console.log(`合計金額: ${total}円`);
    </script>
  </body>
</html>
```

**ブラウザで開いて、Console を見てみよう！** 🎉

---

## バイブコーディング実践

### AI への指示例

#### 良い指示の例

```
「3つの変数（name, age, city）を宣言して、
テンプレートリテラルを使って自己紹介文を
console.logで出力するJavaScriptを書いてください。
変数はconstを使ってください。」
```

**明確で具体的！AI はこういう指示が大好き！** ✨

---

#### 悪い指示の例

```
「変数を使って何か表示して」
```

**何を表示したいのか、どんな変数を使うのか、全然わからない...** 😓

---

### 生成されたコードのチェックリスト

AI が JavaScript コードを生成したら、以下をチェックしよう：

#### ✅ 変数宣言が適切か

- [ ] `const` と `let` が適切に使い分けられているか
- [ ] `var` が使われていないか
- [ ] 変数名が分かりやすいか（`x`, `a` みたいな意味不明な名前じゃないか）

```javascript
// ✅ Good
const userName = "太郎";
let currentAge = 25;

// ❌ Bad
var x = "太郎"; // varは使わない
let a = 25; // 変数名が不明確
```

---

#### ✅ データ型が正しいか

- [ ] 数値は数値型（Number）で宣言されているか
- [ ] 文字列はクォートで囲まれているか
- [ ] 真偽値は `true`/`false` になっているか

```javascript
// ✅ Good
const age = 25; // 数値
const name = "太郎"; // 文字列
const isActive = true; // 真偽値

// ❌ Bad
const age = "25"; // 文字列になってる（数値にすべき）
const name = 太郎; // クォートがない（エラー）
```

---

#### ✅ 比較演算子が厳密か

- [ ] `===` と `!==` が使われているか
- [ ] `==` と `!=` が使われていないか

```javascript
// ✅ Good
if (age === 20) {
  // 厳密比較
}

// ❌ Bad
if (age == 20) {
  // あいまい比較（使わない）
}
```

---

#### ✅ console.log が適切に使われているか

- [ ] 動作確認のための console.log があるか
- [ ] 出力内容が分かりやすいか

```javascript
// ✅ Good
console.log("ユーザー名:", userName);
console.log(`合計金額: ${total}円`);

// ❌ Bad
console.log(userName); // 何の値か分かりにくい
```

---

### よくある問題と修正方法

#### 問題 1: 変数が宣言されていない

**エラー**：

```javascript
console.log(userName); // ❌ Uncaught ReferenceError: userName is not defined
```

**原因**：変数 `userName` が宣言されていない。

**修正**：

```javascript
const userName = "太郎"; // 変数を宣言
console.log(userName); // ✅ OK
```

---

#### 問題 2: const の値を変更しようとしている

**エラー**：

```javascript
const age = 25;
age = 26; // ❌ Uncaught TypeError: Assignment to constant variable.
```

**原因**：`const` は再代入できない。

**修正**：

```javascript
let age = 25; // letに変更
age = 26; // ✅ OK
```

---

#### 問題 3: 文字列と数値を混同している

**問題**：

```javascript
const price = "1000"; // 文字列
const tax = price * 0.1; // 計算できない？

console.log(tax); // → 100 (自動変換される)
```

**説明**：JavaScript は自動的に型変換してくれるけど、意図しない結果になることもあるよ。

**修正**：

```javascript
const price = 1000; // 数値型で宣言
const tax = price * 0.1;

console.log(tax); // → 100
console.log(typeof price); // → "number"
```

---

#### 問題 4: テンプレートリテラルでクォートを間違えている

**エラー**：

```javascript
const name = "太郎";
const message = "こんにちは、${name}さん"; // ❌ ${name}が展開されない

console.log(message); // → こんにちは、${name}さん（そのまま表示される）
```

**原因**：バッククォート `` ` `` ではなく、ダブルクォート `"` を使っている。

**修正**：

```javascript
const name = "太郎";
const message = `こんにちは、${name}さん`; // ✅ バッククォート

console.log(message); // → こんにちは、太郎さん
```

---

### カスタマイズポイント

AI が生成したコードを自分でカスタマイズする時、よく調整する部分はこれ：

#### 1. 変数の値を変える

```javascript
// AI生成コード
const name = "太郎";
const age = 25;

// 自分の情報に変更
const name = "花子";
const age = 22;
```

---

#### 2. 計算式を調整する

```javascript
// AI生成コード
const tax = price * 0.1; // 10%

// 税率を変更
const tax = price * 0.08; // 8%
```

---

#### 3. 出力形式を調整する

```javascript
// AI生成コード
console.log(total);

// より分かりやすく
console.log(`合計金額: ${total}円`);
```

---

## デバッグのヒント

### 1. console.log() を使いまくる

```javascript
const price = 1000;
console.log("価格:", price); // 値を確認

const quantity = 3;
console.log("数量:", quantity); // 値を確認

const total = price * quantity;
console.log("合計:", total); // 計算結果を確認
```

**変数の値を一つずつ確認すると、どこで間違ったか分かる！** 🔍

---

### 2. typeof で型を確認する

```javascript
const value = "123";
console.log(typeof value); // → "string"

// 数値に変換
const numValue = Number(value);
console.log(typeof numValue); // → "number"
```

---

### 3. エラーメッセージを読む

```javascript
console.log(unknownVariable);
// ❌ Uncaught ReferenceError: unknownVariable is not defined
//    at script.js:5
```

**エラーメッセージは、何が間違っているか教えてくれる先生！よく読もう！** 📚

---

## まとめ

### このレッスンで学んだこと

- ✅ **変数**：`let` と `const` でデータを保存できる
- ✅ **データ型**：数値、文字列、真偽値、null、undefined がある
- ✅ **演算子**：算術、比較、論理演算子でデータを操作できる
- ✅ **typeof**：変数の型を確認できる
- ✅ **テンプレートリテラル**：`${}` で変数を埋め込める
- ✅ **console.log()**：動作確認の必須ツール

---

### 重要なポイント

1. **基本は `const`、必要な時だけ `let`**
2. **比較は必ず `===` を使う（`==` は使わない）**
3. **バッククォート `` ` `` でテンプレートリテラル**
4. **console.log() でたくさん確認する**

---

### 次のステップ

基礎文法が理解できたら、次は**条件分岐とループ**を学ぼう！

- 「もし〇〇なら××する」という処理（if 文）
- 同じ処理を繰り返す（for, while）
- プログラミングの楽しさが一気に広がるよ！

**準備はいい？Lesson 2 へ進もう！** 🚀

👉 [Lesson 2: 条件分岐とループへ進む](../02-control-flow/README.md)

---

### 演習問題

このレッスンの理解を深めるために、演習問題に挑戦しよう！

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

JavaScript の基礎文法、しっかりマスターできたかな？次のレッスンでもっと楽しくなるよ！ 💪
