# Lesson 2: 条件分岐とループ 🔀

**学習目標**：条件分岐で「もし〇〇なら××する」という処理を書けるようになり、ループで同じ処理を繰り返せるようになる

---

## なぜ条件分岐とループを学ぶの？

Lesson 1 では、変数と演算子を学んだね。でも、それだけでは「順番に処理を実行する」ことしかできない。

プログラミングの本当の力は、**「状況に応じて処理を変える」**ことと、**「同じ処理を繰り返す」**こと！

### 条件分岐の例

- 年齢が 18 歳以上なら「成人です」と表示、そうでなければ「未成年です」と表示
- パスワードが正しければログイン成功、間違っていればエラー表示
- 点数が 80 点以上なら「合格」、そうでなければ「不合格」

### ループの例

- 1 から 100 までの数字を順番に表示
- 配列の中の要素を一つずつ処理
- ユーザーが「終了」と入力するまで繰り返し

**条件分岐とループを使えば、プログラミングの楽しさが一気に広がるよ！** 🎉

---

## 条件分岐：if 文

**「もし〇〇なら××する」という処理を書けるよ！**

### 基本の if 文

```javascript
const age = 20;

if (age >= 18) {
  console.log("成人です");
}
```

**出力**：

```
成人です
```

---

### if 文の構造

```javascript
if (条件式) {
  // 条件式がtrueの時に実行される処理
}
```

**例え話**：まるで「もし雨が降っていたら、傘を持っていく」みたいな感じ！

---

### 条件式の例

```javascript
const score = 85;

// 80点以上かどうか
if (score >= 80) {
  console.log("優秀です！");
}

const isLoggedIn = true;

// ログイン済みかどうか
if (isLoggedIn) {
  console.log("ようこそ！");
}

const password = "secret123";

// パスワードが正しいかどうか
if (password === "secret123") {
  console.log("ログイン成功");
}
```

**条件式には、真偽値（boolean）になる式を書くよ！** ✨

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

```
未成年です
```

---

### else の構造

```javascript
if (条件式) {
  // 条件式がtrueの時の処理
} else {
  // 条件式がfalseの時の処理
}
```

**例え話**：「もし雨が降っていたら傘を持っていく、そうでなければ傘は持っていかない」

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

```
合格です
```

---

### else if の構造

```javascript
if (条件式1) {
  // 条件式1がtrueの時の処理
} else if (条件式2) {
  // 条件式1がfalseで、条件式2がtrueの時の処理
} else if (条件式3) {
  // 条件式1, 2がfalseで、条件式3がtrueの時の処理
} else {
  // すべての条件がfalseの時の処理
}
```

**上から順番にチェックされて、最初に true になった処理だけが実行されるよ！** 🎯

---

### 実践例：成績判定

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

### 従来の書き方

```javascript
const age = 20;
let status;

if (age >= 18) {
  status = "成人";
} else {
  status = "未成年";
}

console.log(status); // → 成人
```

---

### 三項演算子を使った書き方

```javascript
const age = 20;
const status = age >= 18 ? "成人" : "未成年";

console.log(status); // → 成人
```

**たった 1 行！スッキリ！** ✨

---

### 三項演算子の構造

```javascript
条件式 ? 真の時の値 : 偽の時の値;
```

**読み方**：「もし条件式が true なら『真の時の値』、そうでなければ『偽の時の値』」

---

### 三項演算子の使用例

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

**シンプルな条件分岐には三項演算子が便利！** 🎯

---

## switch 文：複数の値で分岐

**ある変数の値によって処理を分ける時に使うよ！**

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

**出力**：

```
週の始まり！がんばろう
```

---

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

### break を忘れた場合

```javascript
const num = 1;

switch (num) {
  case 1:
    console.log("1です");
  // breakがない！
  case 2:
    console.log("2です");
  // breakがない！
  case 3:
    console.log("3です");
    break;
}
```

**出力**：

```
1です
2です
3です
```

**break を忘れると、次の case も実行されちゃう！（これを fall-through という）** ⚠️

---

### switch vs if-else

**switch を使うべき時**：

- 同じ変数の値で複数の選択肢がある時
- 値が固定的（文字列や数値）

```javascript
// switch が向いている
switch (color) {
  case "red":
    // 処理
    break;
  case "blue":
    // 処理
    break;
}
```

**if-else を使うべき時**：

- 範囲での比較（`>=`, `<` など）
- 複雑な条件式

```javascript
// if-else が向いている
if (score >= 80) {
  // 処理
} else if (score >= 60) {
  // 処理
}
```

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

```
現在のiは 0 です
現在のiは 1 です
現在のiは 2 です
現在のiは 3 です
現在のiは 4 です
```

---

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

---

### for ループの流れ

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 実行の流れ：
// 1. let i = 0 （初期化）
// 2. i < 3 をチェック (0 < 3 = true) → console.log(0)
// 3. i++ （i = 1）
// 4. i < 3 をチェック (1 < 3 = true) → console.log(1)
// 5. i++ （i = 2）
// 6. i < 3 をチェック (2 < 3 = true) → console.log(2)
// 7. i++ （i = 3）
// 8. i < 3 をチェック (3 < 3 = false) → ループ終了
```

**まるで「カウントダウンタイマー」みたいな仕組み！** ⏱️

---

### 実践例：1 から 10 までの合計

```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i; // sum = sum + i と同じ
  console.log(`i=${i}, 現在の合計=${sum}`);
}

console.log(`最終的な合計: ${sum}`);
```

**出力**：

```
i=1, 現在の合計=1
i=2, 現在の合計=3
i=3, 現在の合計=6
...
i=10, 現在の合計=55
最終的な合計: 55
```

---

### 実践例：九九の表

```javascript
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}
```

**二重ループで九九の表が作れる！** 🎯

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

```
現在のcountは 0 です
現在のcountは 1 です
現在のcountは 2 です
現在のcountは 3 です
現在のcountは 4 です
```

---

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

### while ループの使用例

```javascript
// ユーザーの入力を待つ（仮想例）
let userInput = "";

while (userInput !== "終了") {
  // ユーザーが「終了」と入力するまで繰り返す
  console.log("何か入力してください（終了で終わり）");
  // userInput = prompt("入力:"); // ブラウザでは実際に動く
  userInput = "終了"; // この例では強制的に終了
}

console.log("プログラムを終了します");
```

---

## do-while ループ：最低 1 回は実行

**条件をチェックする前に、まず 1 回処理を実行するよ！**

```javascript
let count = 0;

do {
  console.log(`現在のcountは ${count} です`);
  count++;
} while (count < 5);
```

**出力**：

```
現在のcountは 0 です
現在のcountは 1 です
現在のcountは 2 です
現在のcountは 3 です
現在のcountは 4 です
```

---

### while と do-while の違い

```javascript
// while: 条件が最初からfalseなら実行されない
let i = 10;
while (i < 5) {
  console.log(i); // 実行されない
}

// do-while: 条件がfalseでも最低1回は実行される
let j = 10;
do {
  console.log(j); // 1回だけ実行される（出力: 10）
} while (j < 5);
```

**do-while は「最低 1 回は実行したい」時に使うよ！** 🎯

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

```
0
1
2
3
4
ループ終了
```

**`break` を使うと、その時点でループが終了する！** 🛑

---

### break の使用例：目的の値を見つけたら終了

```javascript
const numbers = [3, 7, 12, 8, 5, 19, 2];
let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(`10より大きい数を見つけました: ${numbers[i]}`);
    found = true;
    break; // 見つけたら終了
  }
}

if (!found) {
  console.log("10より大きい数はありませんでした");
}
```

**出力**：

```
10より大きい数を見つけました: 12
```

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

```
1
3
5
7
9
```

**`continue` を使うと、その回の処理だけスキップして次へ進む！** ⏭️

---

### continue の使用例：特定の値を除外

```javascript
const scores = [85, -1, 92, 78, -1, 88];
let sum = 0;
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === -1) {
    continue; // -1はスキップ
  }
  sum += scores[i];
  count++;
}

const average = sum / count;
console.log(`有効な点数の平均: ${average}`);
// → 有効な点数の平均: 85.75
```

---

## 実践例：条件分岐とループを組み合わせる

### 例 1: FizzBuzz

**1 から 30 までの数字を表示するけど：**

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

**プログラミングの定番問題！面接でも出るよ！** 🎯

---

### 例 2: 素数を見つける

**2 から 20 までの素数を見つけよう！**

```javascript
for (let num = 2; num <= 20; num++) {
  let isPrime = true;

  // 2からnum-1まで割り切れるかチェック
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // 割り切れたら素数じゃないので終了
    }
  }

  if (isPrime) {
    console.log(`${num} は素数です`);
  }
}
```

**出力**：

```
2 は素数です
3 は素数です
5 は素数です
7 は素数です
11 は素数です
13 は素数です
17 は素数です
19 は素数です
```

---

## バイブコーディング実践

### AI への指示例

#### 良い指示の例

```
「1から100までの数字をforループで表示する
JavaScriptコードを書いてください」

「点数が80以上なら『優秀』、60以上なら『合格』、
それ未満なら『不合格』と判定するif文を書いてください」

「配列の中の偶数だけを表示するforループを書いてください」
```

**具体的で明確！** ✨

---

#### 悪い指示の例

```
「ループを書いて」
「条件分岐を作って」
「繰り返し処理」
```

**何を繰り返したいのか、どんな条件なのか、全然わからない...** 😓

---

### 生成されたコードのチェックリスト

#### ✅ ループが正しく動作するか

- [ ] 初期化、条件式、増減式が適切か
- [ ] 無限ループになっていないか
- [ ] ループ変数の範囲が正しいか

```javascript
// ✅ Good
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ❌ Bad (無限ループ)
for (let i = 0; i < 10; ) {
  // i++がない！
  console.log(i);
}
```

---

#### ✅ 条件式が正しいか

- [ ] 比較演算子が適切か（`>=`, `<=`, `===` など）
- [ ] 論理演算子（`&&`, `||`）が正しく使われているか
- [ ] 条件の順序が正しいか（else if の順番）

```javascript
// ✅ Good
if (score >= 80) {
  console.log("優秀");
} else if (score >= 60) {
  console.log("合格");
}

// ❌ Bad (順序が逆)
if (score >= 60) {
  console.log("合格"); // 80点でもここで終わっちゃう
} else if (score >= 80) {
  console.log("優秀"); // 実行されない
}
```

---

#### ✅ break と continue が適切か

- [ ] break は必要な場所で使われているか
- [ ] continue でスキップする条件が正しいか

```javascript
// ✅ Good
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // 5で終了
  }
}

// ❌ Bad (break の位置が変)
for (let i = 0; i < 10; i++) {
  break; // 1回目で終わっちゃう
  console.log(i); // 実行されない
}
```

---

### よくある問題と修正方法

#### 問題 1: 無限ループ

**エラー**：

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  // i++を忘れている
}
// ブラウザがフリーズする！
```

**修正**：

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // 忘れずに増やす！
}
```

---

#### 問題 2: 条件の順序が間違っている

**問題のコード**：

```javascript
const score = 85;

if (score >= 60) {
  console.log("合格"); // 85点でもここで終わる
} else if (score >= 80) {
  console.log("優秀"); // 実行されない
}
```

**修正**：

```javascript
const score = 85;

if (score >= 80) {
  console.log("優秀"); // 先にチェック
} else if (score >= 60) {
  console.log("合格");
}
```

---

#### 問題 3: switch で break を忘れている

**問題のコード**：

```javascript
const num = 1;

switch (num) {
  case 1:
    console.log("1です");
  // breakがない
  case 2:
    console.log("2です"); // これも実行されちゃう
}
```

**修正**：

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

### カスタマイズポイント

#### 1. ループの範囲を変更

```javascript
// AI生成コード
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 範囲を変更
for (let i = 1; i <= 20; i++) {
  // 1から20に変更
  console.log(i);
}
```

---

#### 2. 条件の閾値を調整

```javascript
// AI生成コード
if (score >= 80) {
  console.log("優秀");
}

// 閾値を変更
if (score >= 90) {
  // 90点以上に変更
  console.log("優秀");
}
```

---

#### 3. ループのステップを変更

```javascript
// AI生成コード
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2ずつ増やす
for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ **if 文**：条件が true の時に処理を実行
- ✅ **else if, else**：複数の条件で分岐
- ✅ **三項演算子**：シンプルな if-else を 1 行で
- ✅ **switch 文**：値によって処理を分ける
- ✅ **for ループ**：決まった回数繰り返す
- ✅ **while ループ**：条件が true の間繰り返す
- ✅ **do-while ループ**：最低 1 回は実行
- ✅ **break**：ループを途中で抜ける
- ✅ **continue**：その回だけスキップ

---

### 重要なポイント

1. **条件式には `===` を使う（`==` は使わない）**
2. **ループは無限ループに注意**
3. **条件の順序が大事（厳しい条件から先にチェック）**
4. **switch では break を忘れずに**

---

### 次のステップ

条件分岐とループが理解できたら、次は**関数**を学ぼう！

- コードをまとめて再利用できる
- 処理を分かりやすく整理できる
- より実践的なプログラムが書ける

**準備はいい？Lesson 3 へ進もう！** 🚀

👉 [Lesson 3: 関数の基本へ進む](../03-functions/README.md)

---

### 演習問題

このレッスンの理解を深めるために、演習問題に挑戦しよう！

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

条件分岐とループ、しっかりマスターできたかな？これでプログラミングがぐっと楽しくなるよ！ 💪
