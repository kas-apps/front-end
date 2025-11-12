# Lesson 4: 配列とオブジェクト 📦

**学習目標**：配列とオブジェクトを使って複数のデータをまとめて管理でき、配列メソッドで効率的にデータを処理できるようになる

---

## なぜ配列とオブジェクトを学ぶの？

今まで学んだ変数では、1 つの値しか保存できなかった。でも実際のプログラムでは、たくさんのデータをまとめて扱いたい場面が多い！

- ユーザーのリスト
- 商品のカタログ
- ToDo リスト
- 成績データ

**配列とオブジェクトを使えば、複数のデータをスマートに管理できるよ！** 💪

---

## 配列（Array）：リスト形式のデータ

**配列は、複数の値を順番に並べて保存できるよ！**

### 配列の作成

```javascript
// 空の配列
const emptyArray = [];

// 数値の配列
const numbers = [1, 2, 3, 4, 5];

// 文字列の配列
const fruits = ["りんご", "バナナ", "みかん"];

// いろんな型を混ぜてもOK（推奨はしないけど）
const mixed = [1, "文字列", true, null];

console.log(numbers); // → [1, 2, 3, 4, 5]
console.log(fruits); // → ["りんご", "バナナ", "みかん"]
```

**例え話**：配列は「順番に並んだ箱」みたいなもの！ 📦📦📦

```text
fruits 配列
┌─────────┬─────────┬─────────┐
│   [0]   │   [1]   │   [2]   │ ← インデックス
├─────────┼─────────┼─────────┤
│ "りんご" │ "バナナ" | "みかん" | ← 要素
└─────────┴─────────┴─────────┘
```

---

### 配列の要素にアクセス

**インデックス（番号）を使って、配列の各要素にアクセスできるよ！**

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

console.log(fruits[0]); // → りんご（最初の要素）
console.log(fruits[1]); // → バナナ
console.log(fruits[2]); // → みかん（最後の要素）

// インデックスは 0 から始まる！
```

**重要**：配列のインデックスは **0 から始まる**！ 🔢

---

### 配列の長さ

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

console.log(fruits.length); // → 3

// 最後の要素にアクセス
console.log(fruits[fruits.length - 1]); // → みかん
```

---

## 配列の基本操作

### 要素を追加する

#### push(): 末尾に追加

```javascript
const fruits = ["りんご", "バナナ"];

fruits.push("みかん");
console.log(fruits); // → ["りんご", "バナナ", "みかん"]

fruits.push("ぶどう", "いちご");
console.log(fruits); // → ["りんご", "バナナ", "みかん", "ぶどう", "いちご"]
```

---

#### unshift(): 先頭に追加

```javascript
const fruits = ["バナナ", "みかん"];

fruits.unshift("りんご");
console.log(fruits); // → ["りんご", "バナナ", "みかん"]
```

---

### 要素を削除する

#### pop(): 末尾から削除

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

const removed = fruits.pop();
console.log(removed); // → みかん（削除された要素）
console.log(fruits); // → ["りんご", "バナナ"]
```

---

#### shift(): 先頭から削除

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

const removed = fruits.shift();
console.log(removed); // → りんご
console.log(fruits); // → ["バナナ", "みかん"]
```

---

### splice(): 指定位置で追加・削除

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

// splice(開始位置, 削除数, 追加要素...)
fruits.splice(1, 1, "ぶどう"); // インデックス1から1個削除して、"ぶどう"を追加
console.log(fruits); // → ["りんご", "ぶどう", "みかん"]

// 削除だけ
fruits.splice(1, 1);
console.log(fruits); // → ["りんご", "みかん"]

// 追加だけ
fruits.splice(1, 0, "バナナ");
console.log(fruits); // → ["りんご", "バナナ", "みかん"]
```

---

### slice(): 配列の一部を取得（元の配列は変更しない）

```javascript
const fruits = ["りんご", "バナナ", "みかん", "ぶどう", "いちご"];

// slice(開始インデックス, 終了インデックス)
const selected = fruits.slice(1, 3); // 終了インデックスの一つ前まで取得
console.log(selected); // → ["バナナ", "みかん"]
console.log(fruits); // → 元の配列はそのまま
```

---

## 配列の反復処理

### for ループ

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}番目: ${fruits[i]}`);
}
// → 1番目: りんご
// → 2番目: バナナ
// → 3番目: みかん
```

---

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

**`for...of` の方がシンプルで読みやすい！** ✨

---

## 高階関数：配列メソッド

**配列には便利なメソッドがたくさんあるよ！**

### forEach(): 各要素に処理を実行

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
// → 2, 4, 6, 8, 10
```

---

### map(): 各要素を変換して新しい配列を作る

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // → [2, 4, 6, 8, 10]
console.log(numbers); // → [1, 2, 3, 4, 5]（元の配列はそのまま）
```

**`map` は元の配列を変更せず、新しい配列を返す！** 🎯

---

### filter(): 条件に合う要素だけを抽出

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // → [2, 4, 6, 8, 10]

const largeNumbers = numbers.filter((num) => num > 5);
console.log(largeNumbers); // → [6, 7, 8, 9, 10]
```

**`filter` は条件に合う要素だけの新しい配列を返す！** 🔍

---

### find(): 条件に合う最初の要素を取得

```javascript
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find((num) => num > 3);
console.log(found); // → 4（最初に見つかった要素）

const notFound = numbers.find((num) => num > 10);
console.log(notFound); // → undefined（見つからない）
```

---

### reduce(): 配列を1つの値にまとめる

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

**`reduce` は配列を1つの値に「畳み込む」処理！** 📊

---

### 実践例：配列メソッドの組み合わせ

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

**メソッドチェーンで、複雑な処理も読みやすく書ける！** ⛓️

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

**例え話**：オブジェクトは「名前付きの箱」の集合！各箱にラベル（キー）が付いている！ 🏷️

```text
user オブジェクト
┌────────┬───────┬─────────┬──────────┐
│  name  │  age  │  city   │ isActive | ← キー
├────────┼───────┼─────────┼──────────┤
│ "Taro" │  25   | "Tokyo" |   true   | ← 値（バリュー）
└────────┴───────┴─────────┴──────────┘
```

---

### プロパティへのアクセス

#### ドット記法

```javascript
const user = {
  name: "太郎",
  age: 25,
};

console.log(user.name); // → 太郎
console.log(user.age); // → 25
```

---

#### ブラケット記法

```javascript
const user = {
  name: "太郎",
  age: 25,
};

console.log(user["name"]); // → 太郎
console.log(user["age"]); // → 25

// 変数を使ってアクセス
const key = "name";
console.log(user[key]); // → 太郎
```

---

### プロパティの追加・変更

```javascript
const user = {
  name: "太郎",
};

// 追加
user.age = 25;
user.city = "東京";

// 変更
user.name = "次郎";

console.log(user);
// → { name: '次郎', age: 25, city: '東京' }
```

---

### プロパティの削除

```javascript
const user = {
  name: "太郎",
  age: 25,
  city: "東京",
};

delete user.city;

console.log(user);
// → { name: '太郎', age: 25 }
```

---

### メソッド：オブジェクトの中の関数

```javascript
const user = {
  name: "太郎",
  age: 25,
  greet: function () {
    console.log(`こんにちは、${this.name}です`);
  },
};

user.greet(); // → こんにちは、太郎です
```

**オブジェクトの中の関数を「メソッド」というよ！** 🔧

---

### オブジェクトのループ

#### for...in ループ

```javascript
const user = {
  name: "太郎",
  age: 25,
  city: "東京",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// → name: 太郎
// → age: 25
// → city: 東京
```

---

#### Object.keys(), Object.values(), Object.entries()

```javascript
const user = {
  name: "太郎",
  age: 25,
  city: "東京",
};

// キーの配列
console.log(Object.keys(user)); // → ["name", "age", "city"]

// 値の配列
console.log(Object.values(user)); // → ["太郎", 25, "東京"]

// [キー, 値]のペアの配列
console.log(Object.entries(user));
// → [["name", "太郎"], ["age", 25], ["city", "東京"]]
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
users.forEach((user) => {
  console.log(user.name);
});
// → 太郎
// → 花子
// → 次郎

// 25歳以上のユーザーを抽出
const adults = users.filter((user) => user.age >= 25);
console.log(adults);
// → [{ name: "太郎", ... }, { name: "次郎", ... }]
```

---

### ネストしたオブジェクト

```javascript
const company = {
  name: "ABC株式会社",
  founded: 2020,
  employees: [
    { name: "太郎", position: "エンジニア" },
    { name: "花子", position: "デザイナー" },
  ],
  address: {
    city: "東京",
    street: "渋谷1-1-1",
  },
};

console.log(company.name); // → ABC株式会社
console.log(company.employees[0].name); // → 太郎
console.log(company.address.city); // → 東京
```

---

## 分割代入：スマートに値を取り出す

### 配列の分割代入

```javascript
const fruits = ["りんご", "バナナ", "みかん"];

// 従来の方法
// const first = fruits[0];
// const second = fruits[1];

// 分割代入
const [first, second, third] = fruits;
console.log(first); // → りんご
console.log(second); // → バナナ
console.log(third); // → みかん
```

---

### オブジェクトの分割代入

```javascript
const user = {
  name: "太郎",
  age: 25,
  city: "東京",
};

// 従来の方法
// const name = user.name;
// const age = user.age;

// 分割代入
const { name, age, city } = user;
console.log(name); // → 太郎
console.log(age); // → 25
console.log(city); // → 東京
```

**分割代入を使うと、コードがスッキリ！** ✨

---

## スプレッド演算子

配列やオブジェクトの要素を展開(spread)

### 配列のコピーと結合

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 配列をコピー
const copy = [...arr1];
console.log(copy); // → [1, 2, 3]

// 配列を結合
const combined = [...arr1, ...arr2];
console.log(combined); // → [1, 2, 3, 4, 5, 6]
```

---

### オブジェクトのコピーとマージ

```javascript
const user1 = { name: "太郎", age: 25 };
const user2 = { city: "東京", country: "日本" };

// オブジェクトをコピー
const copy = { ...user1 };
console.log(copy); // → { name: "太郎", age: 25 }

// オブジェクトをマージ
const merged = { ...user1, ...user2 };
console.log(merged);
// → { name: "太郎", age: 25, city: "東京", country: "日本" }
```

---

## 実践例

### 例 1: 学生の成績管理

```javascript
const students = [
  { name: "太郎", score: 85 },
  { name: "花子", score: 92 },
  { name: "次郎", score: 78 },
  { name: "四郎", score: 95 },
];

// 平均点を計算
const average =
  students.reduce((acc, student) => acc + student.score, 0) / students.length;
console.log(`平均点: ${average}`); // → 平均点: 87.5

// 90点以上の学生
const excellentStudents = students.filter((student) => student.score >= 90);
console.log("優秀な学生:", excellentStudents);

// 名前のリスト
const names = students.map((student) => student.name);
console.log(names); // → ["太郎", "花子", "次郎", "四郎"]
```

---

### 例 2: 商品カタログ

```javascript
const products = [
  { id: 1, name: "ノートPC", price: 100000, inStock: true },
  { id: 2, name: "マウス", price: 3000, inStock: true },
  { id: 3, name: "キーボード", price: 8000, inStock: false },
  { id: 4, name: "モニター", price: 30000, inStock: true },
];

// 在庫ありの商品だけ
const availableProducts = products.filter((product) => product.inStock);
console.log("在庫あり:", availableProducts);

// 価格を10%引きに
const discounted = products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));
console.log("セール価格:", discounted);

// 合計金額
const total = products.reduce((acc, product) => acc + product.price, 0);
console.log(`合計: ${total}円`);
```

---

## バイブコーディング実践

### AI への指示例

#### 良い指示の例

```text
「配列から偶数だけを抽出するコードを、filterメソッドを使って書いてください」

「オブジェクトの配列から、特定のプロパティの値だけを取り出す
mapメソッドのコードを書いてください」

「商品オブジェクトの配列を、価格の安い順にソートするコードを書いてください」
```

**具体的で明確！** ✨

---

### 生成されたコードのチェックリスト

#### ✅ 適切なメソッドが使われているか

- [ ] `map` は変換、`filter` は抽出、`reduce` は集約に使われているか
- [ ] 元の配列を変更していないか（immutable）

---

## まとめ

### このレッスンで学んだこと

- ✅ **配列**：複数の値をリスト形式で管理
- ✅ **配列メソッド**：map, filter, reduce などの高階関数
- ✅ **オブジェクト**：キーと値のペアでデータを管理
- ✅ **分割代入**：値をスマートに取り出す
- ✅ **スプレッド演算子**：配列やオブジェクトをコピー・結合

---

### 次のステップ

配列とオブジェクトが理解できたら、次は**DOM 操作**を学ぼう！

- HTML 要素を JavaScript で操作
- ユーザーのクリックに反応
- 動的に要素を追加・削除

**準備はいい？Lesson 5 へ進もう！** 🚀

👉 [Lesson 5: 基本的な DOM 操作へ進む](../05-dom-basics/README.md)

---

### 演習問題

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉
