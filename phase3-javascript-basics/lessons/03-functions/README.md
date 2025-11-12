# Lesson 3: 関数の基本 🔧

**学習目標**：関数を使ってコードをまとめて再利用できるようになり、引数と戻り値を理解してより実践的なプログラムが書けるようになる

---

## なぜ関数を学ぶの？

Lesson 1 と 2 で、変数、条件分岐、ループを学んだね。でも、同じようなコードを何度も書くのは面倒だし、読みにくいし、間違いも起こりやすい...

**関数を使えば、コードをまとめて名前を付けて、何度でも呼び出せるよ！**

### 関数のメリット

- 同じコードを何度も書かなくていい（DRY: Don't Repeat Yourself）
- コードが読みやすくなる（処理に名前が付く）
- バグが減る（1 箇所修正すればOK）
- テストしやすくなる

**例え話**：関数は「料理のレシピ」みたいなもの！レシピ（関数）を一度作れば、何度でも同じ料理（処理）が作れる！ 🍳

---

## 関数とは？

**関数は「処理をまとめたもの」！入力を受け取って、処理をして、結果を返すよ。**

```text
input: 入力（引数）
    ↓
┌──────────┐
│ function │ ← 関数（処理をまとめたもの）
└──────────┘
    ↓
output: 出力（戻り値）
```

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

**関数を一度定義すれば、何度でも呼び出せる！** ✨

---

### 関数宣言の構造

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

**同じ関数でも、引数を変えれば違う結果が得られる！** 🎯

---

### 複数の引数

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

**複数の引数は、カンマ `,` で区切るよ！** 📝

---

### デフォルト引数

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

**`return` で値を返すと、その値を別の処理で使えるよ！** 🔄

---

### return のある関数とない関数

```javascript
// returnがある関数
function multiply(a, b) {
  return a * b; // 結果を返す
}

const result1 = multiply(3, 4);
console.log(result1); // → 12

// returnがない関数
function showMessage(message) {
  console.log(message); // 表示するだけ
  // returnがない = undefined を返す
}

const result2 = showMessage("こんにちは");
console.log(result2); // → undefined
```

**`return` がないと、関数は `undefined` を返すよ！** 💡

---

### return で関数を終了

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

## 関数式：関数を変数に代入する

**関数を変数に代入することもできるよ！**

```javascript
const greet = function (name) {
  console.log(`こんにちは、${name}さん！`);
};

greet("太郎"); // → こんにちは、太郎さん！
```

---

### 関数宣言 vs 関数式

```javascript
// 関数宣言
function sayHello1() {
  console.log("Hello");
}

// 関数式
const sayHello2 = function () {
  console.log("Hello");
};
```

**違い**：

- **関数宣言**：巻き上げ（hoisting）されるので、宣言前でも呼び出せる
- **関数式**：変数に代入されるので、宣言後にしか呼び出せない

**モダンな JavaScript では、主に関数式やアロー関数を使うよ！** ⭐

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

**`function` を `=>` に置き換えて、もっとシンプルに！** ✨

---

### アロー関数の省略記法

#### 1. 引数が 1 つの時は `()` を省略できる

```javascript
// 通常
const double1 = (n) => {
  return n * 2;
}

// 省略
const double2 = n => {
  return n * 2;
}

console.log(double2(5)); // → 10
```

---

#### 2. 処理が 1 行だけなら `{}` と `return` を省略できる

```javascript
// 通常
const square1 = n => {
  return n * n;
};

// 省略
const square2 = n => n * n;

console.log(square2(4)); // → 16
```

---

### アロー関数の使用例

```javascript
// 引数なし
const sayHello = () => console.log("こんにちは");

// 引数1つ
const double = n => n * 2;

// 引数複数
const add = (a, b) => a + b;

// 複数行の処理
const greet = name => {
  const message = `こんにちは、${name}さん`;
  console.log(message);
  return message;
};

sayHello(); // → こんにちは
console.log(double(5)); // → 10
console.log(add(3, 7)); // → 10
greet("太郎"); // → こんにちは、太郎さん
```

**アロー関数は、短くて読みやすい！モダンな JavaScript では超よく使うよ！** 🚀

---

## スコープ：変数の有効範囲

**変数がどこから見えるか（使えるか）を「スコープ」というよ！**

### グローバルスコープ

```javascript
// グローバル変数（どこからでもアクセスできる）
const globalVar = "グローバル";

function showGlobal() {
  console.log(globalVar); // グローバル変数にアクセスできる
}

showGlobal(); // → グローバル
console.log(globalVar); // → グローバル
```

---

### ローカルスコープ（関数スコープ）

```javascript
function myFunction() {
  // ローカル変数（この関数の中でしか使えない）
  const localVar = "ローカル";
  console.log(localVar); // → ローカル
}

myFunction();
console.log(localVar); // ❌ エラー: localVar is not defined
```

**関数の中で宣言した変数は、その関数の中でしか使えない！** 🔒

---

### ブロックスコープ

```javascript
{
  const blockVar = "ブロック";
  console.log(blockVar); // → ブロック
}

console.log(blockVar); // ❌ エラー: blockVar is not defined
```

**`{}` の中で宣言した `let` や `const` は、そのブロックの中でしか使えない！** 📦

---

### スコープの実践例

```javascript
const name = "太郎"; // グローバル

function greet() {
  const greeting = "こんにちは"; // ローカル

  function inner() {
    const message = `${greeting}、${name}さん`; // innerのローカル
    console.log(message);
  }

  inner(); // → こんにちは、太郎さん
}

greet();
console.log(name); // → 太郎（グローバルなので見える）
console.log(greeting); // ❌ エラー（ローカルなので見えない）
```

**内側のスコープから外側のスコープは見えるけど、外側から内側は見えない！** 👀

---

## 即時実行関数（IIFE）

**定義と同時に実行される関数！**

```javascript
// 即時実行関数
(function () {
  console.log("すぐに実行される！");
})();
// → すぐに実行される！

// アロー関数版
(() => {
  console.log("こっちもすぐに実行！");
})();
// → こっちもすぐに実行！
```

**用途**：グローバルスコープを汚さずに、一時的な処理を実行したい時に使うよ！

---

## 実践例：関数を使って計算する

### 例 1: 消費税込み価格を計算

```javascript
function calculateTotalPrice(price, taxRate = 0.1) {
  const tax = price * taxRate;
  const total = price + tax;
  return total;
}

console.log(calculateTotalPrice(1000)); // → 1100
console.log(calculateTotalPrice(1000, 0.08)); // → 1080
console.log(calculateTotalPrice(5000)); // → 5500
```

---

### 例 2: BMI を計算

```javascript
function calculateBMI(weight, height) {
  // 身長をメートルに変換（cm → m）
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10; // 小数点第1位まで
}

console.log(calculateBMI(70, 175)); // → 22.9
console.log(calculateBMI(60, 165)); // → 22.0
```

---

### 例 3: 複数の関数を組み合わせる

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

**関数を組み合わせると、複雑な処理も分かりやすく書けるよ！** 🎯

---

## バイブコーディング実践

### AI への指示例

#### 良い指示の例

```text
「2つの数値を引数に取り、その合計を返す関数を
アロー関数で書いてください」

「名前と年齢を引数に取り、『こんにちは、〇〇さん。
あなたは△△歳ですね』と出力する関数を書いてください」

「配列の中の数値の平均値を計算して返す関数を書いてください」
```

**具体的で明確！** ✨

---

#### 悪い指示の例

```text
「関数を作って」
「計算する関数」
「何かする関数」
```

**何を計算するのか、どんな引数を取るのか、全然わからない...** 😓

---

### 生成されたコードのチェックリスト

#### ✅ 関数名が適切か

- [ ] 関数が何をするか分かる名前になっているか
- [ ] キャメルケースで書かれているか

```javascript
// ✅ Good
function calculateTotal() {}
function getUserName() {}

// ❌ Bad
function calc() {} // 略しすぎ
function function1() {} // 意味不明
function CalculateTotal() {} // パスカルケースは関数では使わない
```

---

#### ✅ 引数が適切か

- [ ] 必要な引数が全て定義されているか
- [ ] デフォルト値が適切に設定されているか
- [ ] 引数名が分かりやすいか

```javascript
// ✅ Good
function greet(name, age = 20) {}

// ❌ Bad
function greet(a, b) {} // 引数名が不明確
function greet(name) {
  // ageを使っているのに引数がない
  console.log(age);
}
```

---

#### ✅ 戻り値が適切か

- [ ] return で値を返しているか
- [ ] 返す値の型が一貫しているか

```javascript
// ✅ Good
function add(a, b) {
  return a + b; // 数値を返す
}

// ❌ Bad
function add(a, b) {
  console.log(a + b); // 表示するだけで返していない
}
```

---

### よくある問題と修正方法

#### 問題 1: return を忘れている

**問題のコード**：

```javascript
function add(a, b) {
  a + b; // returnがない
}

const result = add(5, 3);
console.log(result); // → undefined
```

**修正**：

```javascript
function add(a, b) {
  return a + b; // returnを追加
}

const result = add(5, 3);
console.log(result); // → 8
```

---

#### 問題 2: 関数を呼び出す時に `()` を忘れている

**問題のコード**：

```javascript
function sayHello() {
  console.log("こんにちは");
}

sayHello; // ()がない！実行されない
```

**修正**：

```javascript
function sayHello() {
  console.log("こんにちは");
}

sayHello(); // ()を付けて実行
```

---

#### 問題 3: スコープの問題

**問題のコード**：

```javascript
function myFunction() {
  const message = "こんにちは";
}

console.log(message); // ❌ エラー: message is not defined
```

**修正**：

```javascript
function myFunction() {
  const message = "こんにちは";
  return message; // returnで返す
}

const result = myFunction();
console.log(result); // ✅ OK
```

---

### カスタマイズポイント

#### 1. 引数の値を変更

```javascript
// AI生成コード
function greet(name) {
  console.log(`こんにちは、${name}さん`);
}

// 自分の名前に変更
greet("太郎"); // 好きな名前を渡す
```

---

#### 2. デフォルト値を調整

```javascript
// AI生成コード
function calculatePrice(price, taxRate = 0.1) {
  return price + price * taxRate;
}

// 税率を変更
function calculatePrice(price, taxRate = 0.08) {
  // 8%に変更
  return price + price * taxRate;
}
```

---

#### 3. 処理を追加

```javascript
// AI生成コード
function add(a, b) {
  return a + b;
}

// 処理を追加
function add(a, b) {
  console.log(`${a} + ${b} を計算します`); // ログを追加
  const result = a + b;
  console.log(`結果: ${result}`); // 結果も表示
  return result;
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ **関数宣言**：`function` で関数を定義
- ✅ **引数**：関数に値を渡す、デフォルト値も設定できる
- ✅ **戻り値**：`return` で結果を返す
- ✅ **関数式**：関数を変数に代入
- ✅ **アロー関数**：`=>` で短く書ける
- ✅ **スコープ**：変数の有効範囲を理解する
- ✅ **即時実行関数**：定義と同時に実行

---

### 重要なポイント

1. **関数名は「何をするか」が分かる名前にする**
2. **return で値を返すのを忘れずに**
3. **モダンな JavaScript ではアロー関数をよく使う**
4. **スコープに注意（外側から内側は見えない）**

---

### 次のステップ

関数の基本が理解できたら、次は**配列とオブジェクト**を学ぼう！

- データをまとめて管理できる
- 配列メソッド（map, filter, reduce）が超便利
- オブジェクトで複雑なデータを扱える

**準備はいい？Lesson 4 へ進もう！** 🚀

👉 [Lesson 4: 配列とオブジェクトへ進む](../04-arrays-objects/README.md)

---

### 演習問題

このレッスンの理解を深めるために、演習問題に挑戦しよう！

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

関数の基本、しっかりマスターできたかな？これでコードの再利用性がぐっと上がるよ！ 💪
