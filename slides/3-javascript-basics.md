---
marp: true
theme: udemy
lang: ja
paginate: true
# header: "バイブコーダーに贈るフロントエンド開発入門(Phase 3)"
# footer: "© 2026 Kazuhiko Sugimoto"
---

<!-- _class: center -->
<!-- _header: "" -->
<!-- _paginate: skip -->

# バイブコーダーに贈るフロントエンド開発入門

## Phase 3： JavaScript 基礎編

---

## Phase 3 で学ぶこと

Phase 1・2 では、HTML/CSS で **見た目** を作る方法を学んだね。でも、それだけでは「静的な文書」しか作れない。

**動きのある Web ページを作るには、プログラミングが必要！**

### Phase 3 のゴール

- JavaScript の基本文法を理解できる
- 条件分岐とループで複雑な処理を書ける
- 関数でコードを再利用できる
- 配列とオブジェクトでデータを管理できる
- DOM 操作で動きのある Web ページを作れる

###### AI が書いた JavaScript を「怖がらずに読める」状態になる

---

## Lesson 1: JavaScript 基礎文法 🔤

**学習目標**：JavaScript の基本的な文法を理解し、変数、データ型、演算子を使ってシンプルなプログラムが書けるようになる

### なぜ JavaScript 基礎文法を学ぶの？

「ボタンをクリックしたら〇〇する」「ユーザーの入力に応じて ×× する」みたいな動きのある Web ページを作るには、プログラミングが必要！

JavaScript は、Web ブラウザで動く唯一のプログラミング言語だから、フロントエンド開発には絶対に必要なんだ！

**まずは基礎文法を学んで、プログラミングの第一歩を踏み出そう！**

---

## JavaScript を実行する方法

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

## JavaScript を実行する方法（続き）

### 方法 2: 外部ファイルとして読み込む

<div class="flex gap-x-1">
<div class="flex-1">

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

</div>
<div class="flex-1">

**JavaScript ファイル（script.js）**：

```javascript
// ここに JavaScript を書く
console.log("Hello, JavaScript!");
```

</div>
</div>

**ファイルを分けると、コードが整理されて読みやすくなるよ！**

---

## JavaScript を実行する方法（続き）

### 方法 3: ブラウザの Console で直接実行（練習に最適！）

1. ブラウザで F12 キーを押す
2. Console タブを開く
3. 直接 JavaScript を入力して Enter

```javascript
console.log("Hello!");
```

**すぐに結果が見られるから、練習に最適！**

---

## 変数：データを入れる箱

プログラミングでは、**データを保存して後で使う**ことがよくある。そのために「変数」という仕組みを使うよ！

### 変数とは？

**例え話**：変数は「ラベル付きの箱」みたいなもの！

```text
┌─────────────┐
│  name       │ ← 変数名（箱のラベル）
├─────────────┤
│  "Alex"     │ ← 値（箱の中身）
└─────────────┘
```

**箱にラベル（変数名）を付けて、中にデータ（値）を入れる。後でそのラベルを使って中身を取り出せる！**

---

## let で変数を宣言する

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

**`let` は「値が変わる可能性がある」時に使う！**

---

## const で定数を宣言する

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

## const と let の使い分け

```javascript
// 誕生日は変わらない → const
const birthday = "2000-01-01";

// 年齢は毎年変わる → let
let age = 24;

// 名前は変わる可能性がある → let
let name = "太郎";
```

**基本的には `const` を使って、変更が必要な時だけ `let` を使うのがモダンな JavaScript の書き方！**

---

## 変数名のルール

変数名には、いくつかルールがあるよ：

```javascript
// ✅ 良い変数名
let userName = "太郎"; // キャメルケース（推奨）
let user_name = "太郎"; // スネークケース
let age2 = 25; // 数字を含めてもOK

// ❌ ダメな変数名
let 2age = 25; // 数字から始まるのはNG
let user-name = "太郎"; // ハイフンはNG（ケバブケース）
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

- 数値（Number）
- 文字列（String）
- 真偽値（Boolean）
- null（ヌル）
- undefined（未定義）

---

## Number - 数値

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

## String - 文字列

**テキストデータは文字列型！シングルクォート `'` かダブルクォート `"` で囲むよ。**

```javascript
let name = "太郎"; // ダブルクォート
let greeting = "こんにちは"; // ダブルクォート
let message = 'Hello!'; // シングルクォートでもOK

console.log(name); // → 太郎
console.log(greeting); // → こんにちは
console.log(message); // → Hello!
```

**どちらを使ってもいいけど、プロジェクト内で統一するのがベスト！**
文字列の中で`"`を使う場合は、`'`で文字列を囲むよ。

```javascript
let quote = '彼は"こんにちは"と言った。'; // 文字列の中でダブルクォートを使う
console.log(quote); // → 彼は"こんにちは"と言った。
```

---

## String - 文字列（続き）

### 文字列の連結

**文字列は `+` でつなげられるよ！**

```javascript
let firstName = "太郎";
let lastName = "山田";
let fullName = lastName + " " + firstName;
console.log(fullName); // → 山田 太郎
```

### エスケープシーケンス

**文字列の中で特殊な文字を使うには、バックスラッシュ `\` を使うよ。**

```javascript
let multiLine = "1行目\n2行目"; // 改行
let tab = "タブ\tスペース"; // タブスペース
let path = "C:\\Users\\name\\Desktop"; // バックスラッシュ
console.log(multiLine);
console.log(tab);
console.log(path);
```

---

## Boolean - 真偽値

**true（真）か false（偽）の 2 つだけの値！**

```javascript
let isParent = true; // 真
let isChild = false; // 偽

console.log(isParent); // → true
console.log(isChild); // → false
```

**条件分岐（Lesson 2）で超重要になるよ！**

---

## null と undefined

### null（ヌル）

**「意図的に値が無い」ことを示すよ。**

```javascript
let emptyValue = null; // 意図的に空にしている
console.log(emptyValue); // → null
```

**例え話**：「空っぽの箱を用意した」状態。

### undefined（未定義）

**「まだ値が入っていない」ことを示すよ。**

```javascript
let notAssigned; // 値を代入していない
console.log(notAssigned); // → undefined
```

**例え話**：「箱のラベルだけ用意した」状態。

---

## typeof 演算子

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

**デバッグする時に超便利！「この変数、何型だっけ？」って時に使おう！**

---

## 算術演算子

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

## インクリメント・デクリメント

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

**ループでカウントする時によく使うよ！**

---

## 比較演算子

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

## === と == の違い（超重要！）

```javascript
let num = 5;
let str = "5";

// == は型を変換して比較（あいまい）
console.log(num == str); // → true （5と"5"を同じとみなす）

// === は型も含めて厳密に比較（推奨）
console.log(num === str); // → false （5と"5"は型が違う）
```

**必ず `===` と `!==` を使おう！`==` と `!=` は使わない！**

---

## 論理演算子

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

## 論理演算子の使用例

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

**条件分岐で超重要になるよ！（Lesson 2 で詳しく学ぶ）**

---

## テンプレートリテラル：文字列を便利に扱う

**バッククォート `` ` `` を使うと、文字列の中に変数を埋め込めるよ！**

### 従来の書き方（面倒...）

```javascript
let name = "太郎";
let age = 25;
let message = "こんにちは、" + name + "さん。あなたは" + age + "歳ですね。";
console.log(message); // → こんにちは、太郎さん。あなたは25歳ですね。
```

**`+` でつなげるのは面倒だし、読みにくい...**

### テンプレートリテラル（便利！）

```javascript
let name = "太郎";
let age = 25;
let message = `こんにちは、${name}さん。あなたは${age}歳ですね。`;
console.log(message); // → こんにちは、太郎さん。あなたは25歳ですね。
```

**`${}` の中に変数を入れるだけ！読みやすくて書きやすい！**

---

## テンプレートリテラルの便利な機能

### 1. 改行が簡単

```javascript
let multiLine = `これは
複数行の
文字列です。`;

console.log(multiLine);
// → これは
// 複数行の
// 文字列です。
```

### 2. 式も埋め込める

```javascript
let price = 1000;
let taxRate = 0.1;
let message = `合計金額は${price + price * taxRate}円です。`;
console.log(message); // → 合計金額は1100円です。

let a = 5;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`); // → 5 + 3 = 8
```

---

## 実践例 1: 簡単な自己紹介

```javascript
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
console.log("名前の型:", typeof name); // → string
console.log("年齢の型:", typeof age); // → number
console.log("学生かの型:", typeof isStudent); // → boolean
```

---

## 実践例 2: 簡単な計算

```javascript
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
```

---

## Lesson 1: JavaScript 基礎文法まとめ

このレッスンで学んだこと：

- **変数**：`let` と `const` でデータを保存できる
- **データ型**：数値、文字列、真偽値、null、undefined がある
- **typeof 演算子**：変数の型を確認できる
- **演算子**：算術、比較、論理演算子でデータを操作できる
- **テンプレートリテラル**： `` ` `` を使って文字列中に `${}` で変数を埋め込める
- **console.log()**：動作確認の必須ツール

### 重要なポイント

1. **基本は `const`、必要な時だけ `let`**
2. **比較は必ず `===`, `!==` を使う（`==`, `!=` は使わない）**
3. **バッククォート `` ` `` でテンプレートリテラル**
4. **console.log() でたくさん確認する**

---

## Lesson 2: 条件分岐とループ 🔀 🔁

**学習目標**：条件分岐で「もし〇〇なら××する」という処理を書けるようになり、ループで同じ処理を繰り返せるようになる

### なぜ条件分岐とループを学ぶの？

プログラミングの本当の力は、 **「状況に応じて処理を変える」** ことと、 **「同じ処理を繰り返す」** こと！

### 条件分岐の例

- パスワードが正しければログイン成功、間違っていればエラー表示
- 点数が 80 点以上なら「合格」、そうでなければ「不合格」

### ループの例

- 1 から 100 までの数字を順番に表示
- 配列の中の要素を一つずつ処理

---

## 条件分岐：if 文

**「もし〇〇なら××する」という処理を書けるよ！**

<div class="flex gap-x-1">
<div class="flex-1">

### 基本の if 文

```javascript
const age = 20;

if (age >= 18) {
  console.log("成人です");
}
```

</div>
<div class="flex-1">

**出力**：

```text
成人です
```

</div>
</div>

### if 文の構造

```javascript
if (条件式) {
  // 条件式がtrueの時に実行される処理
}
```

**例え話**：まるで「もし雨が降っていたら、傘を持っていく」みたいな感じ！

---

## else：そうでなければ

**条件が false の時の処理も書けるよ！**

```javascript
const age = 15;

if (age >= 18) {
  console.log("成人です");
} else {
  console.log("未成年です");
}
```

**出力**：

```text
未成年です
```

---

## else if：複数の条件

**3 つ以上の選択肢がある時に使うよ！**

```javascript
const score = 75;

if (score >= 80) {
  console.log("優秀です！");
} else if (score >= 60) {
  console.log("合格です");
} else {
  console.log("不合格です");
}
```

**出力**：

```text
合格です
```

**上から順番にチェックされて、最初に true になった処理だけが実行されるよ！**

---

## 実践例：成績判定

```javascript
const score = 92;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`あなたの成績は ${grade} です`);
// → あなたの成績は A です
```

---

## 三項演算子：短く書ける if-else

**シンプルな if-else は、三項演算子で 1 行で書けるよ！**

### 三項演算子を使った書き方

```javascript
const age = 20;
const status = age >= 18 ? "成人" : "未成年";

console.log(status); // → 成人
```

**たった 1 行！スッキリ！**

### 三項演算子の構造

```javascript
条件式 ? 真の時の値 : 偽の時の値;
```

**読み方**：「もし条件式が true なら『真の時の値』、そうでなければ『偽の時の値』」

---

## 三項演算子の使用例

```javascript
const score = 85;
const result = score >= 60 ? "合格" : "不合格";
console.log(result); // → 合格

const isLoggedIn = true;
const message = isLoggedIn ? "ようこそ" : "ログインしてください";
console.log(message); // → ようこそ

const price = 1000;
const discount = price >= 5000 ? price * 0.1 : 0;
console.log(`割引額: ${discount}円`); // → 割引額: 0円
```

**シンプルな条件分岐には三項演算子が便利！**

---

## switch 文：複数の値で分岐

**ある変数の値によって処理を分ける時に使うよ！**

<div class="columns-2">

```javascript
const day = "月曜日";

switch (day) {
  case "月曜日":
    console.log("週の始まり！がんばろう");
    break;
  case "火曜日":
    console.log("まだまだ続く...");
    break;
  case "水曜日":
    console.log("折り返し地点");
    break;
  case "木曜日":
    console.log("もう少し");
    break;
  case "金曜日":
    console.log("明日は休み！");
    break;
  case "土曜日":
  case "日曜日":
    console.log("週末だ！");
    break;
  default:
    console.log("不明な曜日");
}
```

</div>

---

## switch 文：複数の値で分岐（続き）

### switch 文の構造

```javascript
switch (式) {
  case 値1:
    // 式が値1と一致した時の処理
    break;
  case 値2:
    // 式が値2と一致した時の処理
    break;
  default:
    // どの値にも一致しなかった時の処理
}
```

**重要**：各 `case` の最後に `break` を書かないと、次の `case` の処理も実行されちゃうよ！

---

## for ループ：回数を指定して繰り返す

**決まった回数だけ処理を繰り返すよ！**

### 基本の for ループ

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`現在のiは ${i} です`);
}
```

**出力**：

```text
現在のiは 0 です
現在のiは 1 です
現在のiは 2 です
現在のiは 3 です
現在のiは 4 です
```

---

## for ループ：回数を指定して繰り返す（続き）

### for ループの構造

```javascript
for (初期化; 条件式; 増減式) {
  // 条件式がtrueの間、繰り返される処理
}
```

**各部分の役割**：

1. **初期化**：`let i = 0` - ループ開始前に 1 回だけ実行
2. **条件式**：`i < 5` - 毎回チェックして、true なら処理を実行
3. **増減式**：`i++` - 処理が終わるたびに実行

**まるで「カウントダウンタイマー」みたいな仕組み！**

---

## 実践例：1 から 10 までの合計

```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i; // sum = sum + i と同じ
  console.log(`i=${i}, 現在の合計=${sum}`);
}

console.log(`最終的な合計: ${sum}`);
```

**出力**：

```text
i=1, 現在の合計=1
i=2, 現在の合計=3
i=3, 現在の合計=6
...
i=10, 現在の合計=55
最終的な合計: 55
```

---

## while ループ：条件が true の間繰り返す

**条件式が true の間、ずっと繰り返すよ！**

```javascript
let count = 0;

while (count < 5) {
  console.log(`現在のcountは ${count} です`);
  count++;
}
```

**出力**：

```text
現在のcountは 0 です
現在のcountは 1 です
現在のcountは 2 です
現在のcountは 3 です
現在のcountは 4 です
```

---

## while ループ：条件が true の間繰り返す（続き）

### while ループの構造

```javascript
while (条件式) {
  // 条件式がtrueの間、繰り返される処理
}
```

**注意**：条件式がずっと true だと、**無限ループ**になっちゃう！

```javascript
// ❌ 無限ループ（避けよう！）
let i = 0;
while (i < 5) {
  console.log(i);
  // i++を忘れている！iがずっと0のまま
}
```

---

## break：ループを途中で抜ける

**ループの途中で強制的に終了できるよ！**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // iが5になったらループを抜ける
  }
  console.log(i);
}
console.log("ループ終了");
```

**出力**：

```text
0
1
2
3
4
ループ終了
```

**`break` を使うと、その時点でループが終了する！**

---

## continue：その回の処理をスキップ

**その回の処理をスキップして、次のループへ進むよ！**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 偶数の時はスキップ
  }
  console.log(i); // 奇数だけ出力
}
```

**出力**：

```text
1
3
5
7
9
```

**`continue` を使うと、その回の処理だけスキップして次へ進む！**

---

## 実践例：FizzBuzz

**プログラミングの定番問題！**

1 から 30 までの数字を表示するけど：

- 3 の倍数の時は「Fizz」
- 5 の倍数の時は「Buzz」
- 3 と 5 の両方の倍数の時は「FizzBuzz」

```javascript
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

## Lesson 2: 条件分岐とループまとめ

このレッスンで学んだこと：

- **if 文**：条件が true の時に処理を実行
- **else if, else**：複数の条件で分岐（**厳しい条件から先にチェック**）
- **三項演算子**：シンプルな if-else を 1 行で
- **switch 文**：値によって処理を分ける（**break を忘れずに**）
- **for ループ**：決まった回数繰り返す
- **while ループ**：条件が true の間繰り返す（**無限ループに注意**）
- **break**：ループを途中で抜ける
- **continue**：その回だけスキップ

---

## Lesson 3: 関数の基本 🔧

**学習目標**：関数を使ってコードをまとめて再利用できるようになり、引数と戻り値を理解してより実践的なプログラムが書けるようになる

### なぜ関数を学ぶの？

同じようなコードを何度も書くのは面倒だし、読みにくいし、間違いも起こりやすい...

**関数を使えば、コードをまとめて名前を付けて、何度でも呼び出せるよ！**

### 関数のメリット

- 同じコードを何度も書かなくていい（DRY: Don't Repeat Yourself）
- コードが読みやすくなる（処理に名前が付く）
- バグが減る（1 箇所修正すればOK）
- テストしやすくなる

---

## 関数宣言：基本の書き方

### 最もシンプルな関数

```javascript
// 関数を宣言（定義）
function sayHello() {
  console.log("こんにちは！");
}

// 関数を呼び出す（実行）
sayHello(); // → こんにちは！
sayHello(); // → こんにちは！
sayHello(); // → こんにちは！
```

**関数を一度定義すれば、何度でも呼び出せる！**

---

## 関数宣言の構造

```javascript
function 関数名() {
  // 実行したい処理
}
```

**重要なポイント**：

- `function` キーワードで関数を宣言
- 関数名は「何をするか」が分かる名前にする
- `()` の後に `{}` で処理を囲む
- 呼び出す時は `関数名()` と書く

---

## 引数：関数に値を渡す

**関数に値を渡して、それを使って処理できるよ！**

```javascript
// 引数nameを受け取る関数
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

// 関数を呼び出す時に値を渡す
greet("太郎"); // → こんにちは、太郎さん！
greet("花子"); // → こんにちは、花子さん！
greet("次郎"); // → こんにちは、次郎さん！
```

**同じ関数でも、引数を変えれば違う結果が得られる！**

---

## 複数の引数

**複数の値を受け取ることもできるよ！**

```javascript
function introduce(name, age, city) {
  console.log(`私は${name}です。${age}歳で、${city}に住んでいます。`);
}

introduce("太郎", 25, "東京");
// → 私は太郎です。25歳で、東京に住んでいます。

introduce("花子", 22, "大阪");
// → 私は花子です。22歳で、大阪に住んでいます。
```

**複数の引数は、カンマ `,` で区切るよ！**

---

## デフォルト引数

**引数が渡されなかった時のデフォルト値を設定できるよ！**

```javascript
function greet(name = "ゲスト") {
  console.log(`こんにちは、${name}さん！`);
}

greet("太郎"); // → こんにちは、太郎さん！
greet(); // → こんにちは、ゲストさん！（デフォルト値が使われる）
```

---

## 戻り値：関数から値を返す

**関数は処理した結果を返すことができるよ！**

```javascript
function add(a, b) {
  return a + b; // 結果を返す
}

// 戻り値を変数に代入
const result = add(5, 3);
console.log(result); // → 8

// 直接使うこともできる
console.log(add(10, 20)); // → 30
```

**`return` で値を返すと、その値を別の処理で使えるよ！**

---

## return で関数を終了

**`return` を実行すると、その時点で関数が終了するよ！**

```javascript
function checkAge(age) {
  if (age < 0) {
    return "エラー: 年齢は0以上である必要があります";
  }

  if (age < 18) {
    return "未成年です";
  }

  return "成人です";
}

console.log(checkAge(-5)); // → エラー: 年齢は0以上である必要があります
console.log(checkAge(15)); // → 未成年です
console.log(checkAge(20)); // → 成人です
```

---

## アロー関数：短く書ける関数

**ES6 で追加された、関数をもっと短く書ける方法！**

### 基本の書き方

```javascript
// 関数宣言
function add1(a, b) {
  return a + b;
}

// 関数式
const add2 = function (a, b) {
  return a + b;
};

// アロー関数
const add3 = (a, b) => {
  return a + b;
};

console.log(add3(5, 3)); // → 8
```

**`function` を `=>` に置き換えて、もっとシンプルに！**

---

## アロー関数の省略記法

### 1. 引数が 1 つの時は `()` を省略できる

```javascript
// 通常
const double1 = (n) => {
  return n * 2;
};
// 省略
const double2 = n => {
  return n * 2;
};
console.log(double2(5)); // → 10
```

### 2. 処理が 1 行だけなら `{}` と `return` を省略できる

```javascript
// 通常
const square1 = (n) => {
  return n * n;
};
// 省略
const square2 = n => n * n;

console.log(square2(4)); // → 16
```

---

## アロー関数の使用例

```javascript
// 引数なし
const sayHello = () => console.log("こんにちは");

// 引数1つ
const double = n => n * 2;

// 引数複数
const add = (a, b) => a + b;

// 複数行の処理
const greet = (name) => {
  const message = `こんにちは、${name}さん`;
  console.log(message);
  return message;
};

sayHello(); // → こんにちは
console.log(double(5)); // → 10
console.log(add(3, 7)); // → 10
greet("太郎"); // → こんにちは、太郎さん
```

**アロー関数は、短くて読みやすい！モダンな JavaScript では超よく使うよ！**

---

## 実践例：複数の関数を組み合わせる

```javascript
// 消費税を計算
function calculateTax(price, rate) {
  return price * rate;
}

// 割引を計算
function calculateDiscount(price, discountRate) {
  return price * discountRate;
}

// 最終価格を計算
function calculateFinalPrice(price, taxRate = 0.1, discountRate = 0) {
  const discount = calculateDiscount(price, discountRate);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxRate);
  return priceAfterDiscount + tax;
}

console.log(calculateFinalPrice(10000)); // → 11000
console.log(calculateFinalPrice(10000, 0.1, 0.2)); // → 8800
```

**関数を組み合わせると、複雑な処理も分かりやすく書けるよ！**

---

## Lesson 3: 関数の基本まとめ

このレッスンで学んだこと：

- **関数宣言**：`function` で関数を定義
- **引数**：関数に値を渡す、デフォルト値も設定できる
- **戻り値**：`return` で結果を返す
- **関数式**：関数を変数に代入
- **アロー関数**：`=>` で短く書ける
- **スコープ**：変数の有効範囲を理解する

### 重要なポイント

1. **関数名は「何をするか」が分かる名前にする**
2. **return で値を返すのを忘れずに**
3. **モダンな JavaScript ではアロー関数をよく使う**

---

## Lesson 4: 配列とオブジェクト 📦

**学習目標**：配列とオブジェクトを使って複数のデータをまとめて管理でき、配列メソッドで効率的にデータを処理できるようになる

### なぜ配列とオブジェクトを学ぶの？

今まで学んだ変数では、1 つの値しか保存できなかった。でも実際のプログラムでは、たくさんのデータをまとめて扱いたい場面が多い！

- ユーザーのリスト
- 商品のカタログ
- ToDo リスト
- 成績データ

**配列とオブジェクトを使えば、複数のデータをスマートに管理できるよ！**

---

## 配列（Array）：リスト形式のデータ

**配列は、複数の値を順番に並べて保存できるよ！**

```javascript
// 空の配列
const emptyArray = [];

// 数値の配列
const numbers = [1, 2, 3, 4, 5];

// 文字列の配列
const fruits = ["りんご", "バナナ", "みかん"];

console.log(numbers); // → [1, 2, 3, 4, 5]
console.log(fruits); // → ["りんご", "バナナ", "みかん"]
```

**例え話**：配列は「順番に並んだ箱」みたいなもの！

```text
fruits 配列
┌─────────┬─────────┬─────────┐
│   [0]   │   [1]   │   [2]   │ ← インデックス
├─────────┼─────────┼─────────┤
│ "りんご" │ "バナナ" | "みかん" | ← 要素
└─────────┴─────────┴─────────┘
```

---

## 配列の要素にアクセス

**インデックス（番号）を使って、配列の各要素にアクセスできるよ！**

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

console.log(fruits[0]); // → りんご（最初の要素）
console.log(fruits[1]); // → バナナ
console.log(fruits[2]); // → みかん（最後の要素）
```

**重要**：配列のインデックスは **0 から始まる**！

### 配列の長さ（length）

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

console.log(fruits.length); // → 3

// 最後の要素にアクセス
console.log(fruits[fruits.length - 1]); // → みかん
```

---

## 配列の基本操作

### push(): 末尾に追加

```javascript
const fruits = ["りんご", "バナナ"];

fruits.push("みかん");
console.log(fruits); // → ["りんご", "バナナ", "みかん"]

fruits.push("ぶどう", "いちご");
console.log(fruits); // → ["りんご", "バナナ", "みかん", "ぶどう", "いちご"]
```

### pop(): 末尾から削除

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

const removed = fruits.pop();
console.log(removed); // → みかん（削除された要素）
console.log(fruits); // → ["りんご", "バナナ"]
```

**例え話**：`push()`は箱を積み上げる、`pop()`は積み上げた箱を上から取るイメージ

---

## 配列の反復処理

<div class="flex gap-x-1">
<div class="flex-1">

### for ループ

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]}`);
}
// → りんご
// → バナナ
// → みかん
```

</div>
<div class="flex-1">

### for...of ループ（推奨）

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

for (const fruit of fruits) {
  console.log(fruit);
}
// → りんご
// → バナナ
// → みかん
```

**`for...of` の方がシンプルで読みやすい！**

</div>
</div>

---

## 配列メソッド

**配列には便利なメソッドがたくさんあるよ！**

- map(): 各要素を変換して新しい配列を作る
- filter(): 条件に合う要素だけを抽出
- reduce(): 配列を1つの値にまとめる

---

## map(): 各要素を変換して新しい配列を作る

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // → [2, 4, 6, 8, 10]
console.log(numbers); // → [1, 2, 3, 4, 5]（元の配列はそのまま）
```

**`map` は元の配列を変更せず、新しい配列を返す！**

---

## filter(): 条件に合う要素だけを抽出

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // → [2, 4, 6, 8, 10]

const largeNumbers = numbers.filter((num) => num > 5);
console.log(largeNumbers); // → [6, 7, 8, 9, 10]
```

**`filter` は条件に合う要素だけの新しい配列を返す！**

---

## reduce(): 配列を1つの値にまとめる

```javascript
const numbers = [1, 2, 3, 4, 5];

// reduce(コールバック関数, 初期値)
// 合計を計算
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sum); // → 15

// 短く書くと
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // → 15
```

**`reduce` は配列を1つの値に「畳み込む」処理！**

---

## 実践例：配列メソッドの組み合わせ

```javascript
const scores = [85, 92, 78, 65, 88, 95, 72, 90];

// 80点以上の点数だけを抽出して、2倍にする
const result = scores
  .filter((score) => score >= 80) // 80点以上
  .map((score) => score * 2); // 2倍

console.log(result); // → [170, 184, 176, 190, 180]

// 平均を計算
const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(`平均点: ${average}`); // → 平均点: 83.125
```

**メソッドチェーンで、複雑な処理も読みやすく書ける！**

---

## オブジェクト（Object）：キーと値のペア

**オブジェクトは、名前（キー）と値のペアでデータを管理するよ！**

### オブジェクトの作成

```javascript
// 空のオブジェクト
const emptyObject = {};

// ユーザー情報
const user = {
  name: "Taro",
  age: 25,
  city: "Tokyo",
  isActive: true,
};

console.log(user);
// → { name: 'Taro', age: 25, city: 'Tokyo', isActive: true }
```

**例え話**：オブジェクトは「名前付きの箱」の集合！各箱にラベル（キー）が付いている！

---

## プロパティへのアクセス

### ドット記法

```javascript
const user = {
  name: "太郎",
  age: 25,
};

console.log(user.name); // → 太郎
console.log(user.age); // → 25
```

### ブラケット記法

```javascript
const user = {
  name: "太郎",
  age: 25,
};

console.log(user["name"]); // → 太郎
console.log(user["age"]); // → 25
```

---

## 配列とオブジェクトの組み合わせ

**実際のアプリでは、配列とオブジェクトを組み合わせて使うよ！**

### オブジェクトの配列

```javascript
const users = [
  { name: "太郎", age: 25, city: "東京" },
  { name: "花子", age: 22, city: "大阪" },
  { name: "次郎", age: 30, city: "名古屋" },
];

// 各ユーザーの名前を表示
for (const user of users) {
  console.log(user.name);
}
// → 太郎
// → 花子
// → 次郎

// 25歳以上のユーザーを抽出
const adults = users.filter((user) => user.age >= 25);
console.log(adults);
// → [{ name: "太郎", ... }, { name: "次郎", ... }]
```

---

## Lesson 4: 配列とオブジェクトまとめ

このレッスンで学んだこと：

- **配列**：複数の値をリスト形式で管理
- **配列メソッド**：map, filter, reduce など
- **オブジェクト**：キーと値のペアでデータを管理
- **オブジェクトの配列**：複数のオブジェクトをリスト形式で管理

---

## Lesson 5: 基本的な DOM 操作 🎯

**学習目標**：JavaScript を使って HTML 要素を操作でき、ユーザーのクリックなどのイベントに反応できるようになる

### なぜ DOM 操作を学ぶの？

ここまで学んだ JavaScript の基礎だけでは、実際の Web ページに変化を起こせない...

**DOM 操作を使えば、ボタンをクリックしたら色が変わる、テキストが変わる、要素が追加される、といった動きのある Web ページが作れるよ！**

### できるようになること

- ボタンをクリックしたら文字が変わる
- 入力した内容をページに表示する
- 要素の色やスタイルを動的に変更する
- 新しい要素を追加・削除する

**これで初めて「動きのある Web サイト」が作れるよ！**

---

## DOM とは？

**DOM（Document Object Model）は、HTML をJavaScript で操作できるようにしたもの！**

```text
HTML（静的な文書）
    ↓
    ↓ ブラウザが DOM を構築
    ↓
DOM（JavaScriptで操作できるオブジェクト）
    ↓
    ↓ JavaScript で変更
    ↓
ブラウザに反映
```

**例え話**：HTML は設計図、DOM はその設計図を元にブロックで作られた建物！

---

## 要素の取得

### querySelector(): CSS セレクタで取得

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>DOM操作</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1 id="title">こんにちは</h1>
    <p class="message">これはメッセージです</p>
    <button id="btn">クリック</button>
  </body>
</html>
```

```javascript
// IDで取得
const title = document.querySelector("#title");
// クラスで取得（最初の1つだけ）
const message = document.querySelector(".message");
// タグ名で取得
const button = document.querySelector("button");
```

---

## querySelectorAll(): 複数の要素を取得

```html
<ul>
  <li>項目1</li>
  <li>項目2</li>
  <li>項目3</li>
</ul>
```

```javascript
// すべてのli要素を取得
const items = document.querySelectorAll("li");
console.log(items.length); // → 3

// for of で繰り返し処理
for (const item of items) {
  console.log(item.textContent);
}
// → 項目1
// → 項目2
// → 項目3
```

---

## 要素の内容を変更する

### textContent: テキストのみを変更

```html
<p id="message">元のメッセージ</p>
```

```javascript
const message = document.querySelector("#message");

// テキストを変更
message.textContent = "新しいメッセージ！";
```

### innerHTML: HTML タグも含めて変更

```html
<div id="content">元のコンテンツ</div>
```

```javascript
const content = document.querySelector("#content");

// HTMLタグも含めて変更
content.innerHTML = "<strong>太字のテキスト</strong>";
```

**注意**：`innerHTML` はセキュリティリスクがあるので、ユーザー入力を直接入れないように！

---

## スタイルの変更

### style プロパティ

```html
<p id="text">このテキストの色・背景色・サイズを変更します</p>
```

```javascript
const text = document.querySelector("#text");

// 色を変更
text.style.color = "red";

// 背景色を変更
text.style.backgroundColor = "yellow";

// フォントサイズを変更
text.style.fontSize = "24px";
```

**注意**：CSS のプロパティ名は、ケバブケースからキャメルケースに変わる！

- CSS: `background-color`
- JavaScript: `backgroundColor`

---

## クラスの操作

### classList

<div class="flex gap-x-1">
<div class="flex-1">

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
.large {
  font-size: 24px;
}
```

</div>
<div class="flex-1">

```html
<p id="text">
  このテキストにクラスを追加します
</p>
```

</div>
</div>

```javascript
const text = document.querySelector("#text");

// クラスを追加
text.classList.add("highlight");
// 複数のクラスを追加
text.classList.add("highlight", "large");
// クラスを削除
text.classList.remove("highlight");
// クラスをトグル（あれば削除、なければ追加）
text.classList.toggle("highlight");
```

**`classList` を使うと、CSS で定義したスタイルを簡単に切り替えられる！**

---

## イベントリスナー

### addEventListener(): イベントに反応する

```html
<button id="btn">クリックしてね</button>
<p id="message">まだクリックされていません</p>
```

```javascript
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");

// クリックイベントを登録
btn.addEventListener("click", () => {
  message.textContent = "ボタンがクリックされました！";
});
```

**`addEventListener` で、ユーザーの操作に反応できる！**

---

## よく使うイベント

```javascript
// クリック
element.addEventListener("click", () => {
  console.log("クリックされた");
});

// マウスオーバー
element.addEventListener("mouseover", () => {
  console.log("マウスが乗った");
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
```

```javascript
const container = document.querySelector("#container");

// 新しいp要素を作成
const newParagraph = document.createElement("p");
newParagraph.textContent = "これは新しく追加された段落です";

// コンテナに追加
container.appendChild(newParagraph);
```

---

## 実践例：TODO リスト

```html
<input type="text" id="todo-input" placeholder="やることを入力" />
<button id="add-btn">追加</button>
<div id="todo-list"></div>
```

```javascript
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value !== "") {
    const todoItem = document.createElement("div");
    const text = document.createElement("span");
    text.textContent = value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", () => {
      todoItem.remove();
    });
    todoItem.appendChild(text);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    input.value = "";
  }
});
```

---

## 実践例：カウンター

```html
<div id="count">0</div>
<button id="increment">+1</button>
<button id="decrement">-1</button>
<button id="reset">リセット</button>
```

```javascript
let count = 0;
const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
decrementBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
```

---

## Lesson 5: 基本的な DOM 操作まとめ

このレッスンで学んだこと：

- **DOM**：JavaScript で HTML を操作できる
- **要素の取得**：`querySelector()` で要素を取得
- **内容の変更**：`textContent`, `innerHTML`
- **スタイルの変更**：`style`, `classList`
- **イベント**：`addEventListener` でユーザーの操作に反応
- **要素の作成・追加・削除**：動的に DOM を操作

---

## Phase 3 まとめ

Phase 3 で学んだこと：

- **JavaScript 基礎文法**：変数、データ型、演算子、テンプレートリテラル
- **条件分岐とループ**：if, for, while で複雑な処理を書ける
- **関数**：コードを再利用できる、アロー関数で短く書ける
- **配列とオブジェクト**：複数のデータを管理できる、map/filter/reduce が便利
- **DOM 操作**：動きのある Web ページが作れる

###### これで JavaScript の基礎は完璧！
