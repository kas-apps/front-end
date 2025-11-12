# Lesson 4: 配列とオブジェクト - 解答例と解説 💡

## 基礎編

### 問題 4-1: 配列の基本操作 - 解答例

**解答例**: [04-01.html](04-01.html)

```javascript
const fruits = [];
fruits.push("りんご");
fruits.push("バナナ");
fruits.push("オレンジ");
console.log(fruits.length); // → 3
console.log(fruits[1]); // → バナナ
```

### 問題 4-2: 配列メソッド - map - 解答例

**解答例**: [04-02.html](04-02.html)

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // → [2, 4, 6, 8, 10]
```

### 問題 4-3: オブジェクトの作成とアクセス - 解答例

**解答例**: [04-03.html](04-03.html)

```javascript
const user = {
  name: "太郎",
  age: 25,
  city: "東京"
};
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

## 応用編

### 問題 4-4: 配列メソッド - filter - 解答例

**解答例**: [04-04.html](04-04.html)

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // → [2, 4, 6, 8, 10]
```

### 問題 4-5: 配列メソッド - reduce - 解答例

**解答例**: [04-05.html](04-05.html)

```javascript
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // → 150
```

### 問題 4-6: オブジェクトの配列 - 解答例

**解答例**: [04-06.html](04-06.html)

```javascript
const students = [
  { name: "太郎", score: 85 },
  { name: "花子", score: 92 },
  { name: "次郎", score: 75 }
];
const highScorers = students.filter(student => student.score >= 80);
console.log(highScorers);
```

## チャレンジ編

### 問題 4-7: 複雑なデータ処理 - 解答例

**解答例**: [04-07.html](04-07.html)

```javascript
const products = [
  { name: "商品A", price: 1000, inStock: true },
  { name: "商品B", price: 2000, inStock: false },
  { name: "商品C", price: 1500, inStock: true }
];

const total = products
  .filter(product => product.inStock)
  .reduce((acc, product) => acc + product.price, 0);

console.log(`在庫ありの商品の合計: ${total}円`); // → 2500円
```

**Let's vibe and code!** 🎉
