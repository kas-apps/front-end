# Lesson 3: 関数の基本 - 解答例と解説 💡

## 基礎編

### 問題 3-1: 簡単な関数を作る - 解答例

**解答例**: [03-01.html](03-01.html)

```javascript
function sayHello() {
  console.log("Hello, World!");
}

sayHello();
sayHello();
sayHello();
```

---

### 問題 3-2: 引数を使った関数 - 解答例

**解答例**: [03-02.html](03-02.html)

```javascript
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

greet("太郎");
greet("花子");
greet("次郎");
```

---

### 問題 3-3: 戻り値を返す関数 - 解答例

**解答例**: [03-03.html](03-03.html)

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
console.log(add(10, 20));
console.log(add(100, 200));
```

---

## 応用編

### 問題 3-4: アロー関数で書き直す - 解答例

**解答例**: [03-04.html](03-04.html)

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
```

---

### 問題 3-5: デフォルト引数を使う - 解答例

**解答例**: [03-05.html](03-05.html)

```javascript
const calculatePrice = (price, taxRate = 0.1) => {
  return price + price * taxRate;
};

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 0.08));
console.log(calculatePrice(5000));
```

---

### 問題 3-6: 複数の関数を組み合わせる - 解答例

**解答例**: [03-06.html](03-06.html)

```javascript
const double = (n) => n * 2;
const square = (n) => n * n;

const num = 5;
const doubled = double(num);
const result = square(doubled);

console.log(`${num} → ${doubled} → ${result}`);
```

---

## チャレンジ編

### 問題 3-7: FizzBuzz 関数を作る - 解答例

**解答例**: [03-07.html](03-07.html)

```javascript
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

for (let i = 1; i <= 30; i++) {
  console.log(fizzBuzz(i));
}
```

---

**Let's vibe and code!** 🎉
