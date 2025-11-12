# Lesson 2: 条件分岐とループ - 解答例と解説 💡

演習問題の解答例と、それぞれの解説を見ていこう！

---

## 基礎編

### 問題 2-1: if 文で成人判定 - 解答例

**解答例**: [02-01.html](02-01.html)

```javascript
const age = 20;

if (age >= 18) {
  console.log("成人です");
} else {
  console.log("未成年です");
}
```

**解説**：

- `age >= 18` で 18 歳以上かどうかを判定
- 条件が true なら「成人です」、false なら「未成年です」を出力

---

### 問題 2-2: else if で成績判定 - 解答例

**解答例**: [02-02.html](02-02.html)

```javascript
const score = 85;
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
```

**解説**：

- 上から順番にチェックして、最初に true になった条件の処理を実行
- 90 点以上から先にチェックするのが大事（順序が逆だとうまくいかない）

---

### 問題 2-3: for ループで数字を表示 - 解答例

**解答例**: [02-03.html](02-03.html)

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`数字: ${i}`);
}
```

**解説**：

- `let i = 1` で 1 から開始
- `i <= 10` で 10 まで（10 を含む）
- `i++` で 1 ずつ増やす

---

## 応用編

### 問題 2-4: 偶数だけ表示 - 解答例

**解答例**: [02-04.html](02-04.html)

```javascript
let count = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // 偶数の判定
    console.log(i);
    count++;
  }
}

console.log(`偶数は全部で ${count} 個ありました`);
```

**解説**：

- `i % 2 === 0` で偶数かどうかを判定（2 で割った余りが 0）
- 偶数を見つけるたびに `count` を増やす
- 最後に `count` で偶数の個数を出力

---

### 問題 2-5: 合計を計算 - 解答例

**解答例**: [02-05.html](02-05.html)

```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i; // sum = sum + i と同じ

  // 10の倍数の時に途中経過を表示
  if (i % 10 === 0) {
    console.log(`${i}までの合計: ${sum}`);
  }
}
```

**解説**：

- `sum += i` で累積合計を計算
- `i % 10 === 0` で 10 の倍数かどうかを判定
- 10 の倍数の時だけ途中経過を出力

---

### 問題 2-6: switch 文で曜日メッセージ - 解答例

**解答例**: [02-06.html](02-06.html)

```javascript
const dayNumber = 5;
let message;

switch (dayNumber) {
  case 1:
    message = "月曜日: 今週も頑張ろう！";
    break;
  case 2:
  case 3:
  case 4:
    message = `${
      ["", "月", "火", "水", "木"][dayNumber]
    }曜日: まだまだ続く...`;
    break;
  case 5:
    message = "金曜日: 明日は休み！";
    break;
  case 6:
  case 7:
    message = `${dayNumber === 6 ? "土" : "日"}曜日: 週末だ！`;
    break;
  default:
    message = "無効な曜日番号です";
}

console.log(message);
```

**解説**：

- switch 文で曜日番号によって処理を分ける
- case 2, 3, 4 は fall-through を使って同じ処理にまとめる
- case 6, 7 も同様に fall-through で週末をまとめる
- default で不正な値に対応

---

## チャレンジ編

### 問題 2-7: 九九の表を作る - 解答例

**解答例**: [02-07.html](02-07.html)

```javascript
for (let i = 1; i <= 9; i++) {
  console.log(`【 ${i} の段 】`);

  for (let j = 1; j <= 9; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }

  console.log("-----------");
}
```

**解説**：

- 外側のループ（`i`）で段数（1-9）を管理
- 内側のループ（`j`）で掛ける数（1-9）を管理
- 各段の前にタイトルを、後に区切り線を出力
- `i * j` で掛け算の結果を計算

---

## よくある間違いと修正方法

### 間違い 1: 条件の順序が逆

**NG**：

```javascript
const score = 85;

if (score >= 60) {
  console.log("D"); // 85点でもここで終わる
} else if (score >= 80) {
  console.log("B"); // 実行されない
}
```

**OK**：

```javascript
const score = 85;

if (score >= 80) {
  // 先に厳しい条件をチェック
  console.log("B");
} else if (score >= 60) {
  console.log("D");
}
```

---

### 間違い 2: 無限ループ

**NG**：

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  // i++を忘れている！
}
```

**OK**：

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // 忘れずに増やす
}
```

---

### 間違い 3: switch で break を忘れる

**NG**：

```javascript
const num = 1;

switch (num) {
  case 1:
    console.log("1です");
  // breakがない
  case 2:
    console.log("2です"); // これも実行される
}
```

**OK**：

```javascript
const num = 1;

switch (num) {
  case 1:
    console.log("1です");
    break; // 忘れずに
  case 2:
    console.log("2です");
    break;
}
```

---

### 間違い 4: for ループの範囲ミス

**NG**：

```javascript
// 1から10まで表示したいのに...
for (let i = 1; i < 10; i++) {
  // i < 10 だと9までしか表示されない
  console.log(i); // 1, 2, 3, ..., 9
}
```

**OK**：

```javascript
// 1から10まで表示
for (let i = 1; i <= 10; i++) {
  // i <= 10 で10も含む
  console.log(i); // 1, 2, 3, ..., 10
}
```

---

## まとめ

### このレッスンで使った重要なポイント

1. **条件分岐**：if-else if-else で複数の選択肢を処理
2. **ループ**：for で決まった回数、while で条件が true の間繰り返す
3. **switch**：値によって処理を分ける（break を忘れずに）
4. **break/continue**：ループの制御

---

### 次のステップ

条件分岐とループの演習、お疲れ様！

次は**Lesson 3: 関数の基本**で、コードをまとめて再利用する方法を学ぼう！

👉 [Lesson 3 へ進む](../../../03-functions/README.md)

---

**Let's vibe and code!** 🎉
