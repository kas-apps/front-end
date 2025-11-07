# Lesson 5: CSS アニメーション - 解答例と解説 📝

各演習問題の解答例と、そのポイントを解説します。

---

## 演習 1：最初の transition を作ろう

### 解答例：[05-01.html](05-01.html)

### ポイント解説

#### 1. transition の基本構文

```css
button {
  background-color: #3498db;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
```

- `transition` プロパティは、**変化前の状態**（通常の button）に設定する
- `transition: プロパティ名 時間;` の形式
- ホバー時（`:hover`）に変更後の値を指定するだけで、自動で滑らかに変化する

#### 2. transition を設定する場所

```css
/* ❌ 悪い例：hoverに設定 */
button:hover {
  background-color: #2980b9;
  transition: background-color 0.3s; /* ここではダメ！ */
}

/* ✅ 良い例：通常の状態に設定 */
button {
  background-color: #3498db;
  transition: background-color 0.3s; /* ここ！ */
}

button:hover {
  background-color: #2980b9;
}
```

- transition は**元の状態**に設定することで、hover 時も hover を外した時も滑らかに変化する

#### 3. ボタンの基本スタイル

```css
button {
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

- `border: none;` でデフォルトの枠線を消す
- `cursor: pointer;` でマウスカーソルを手の形に変更（クリックできることを示す）

---

## 演習 2：複数プロパティの transition を作ろう

### 解答例：[05-02.html](05-02.html)

### ポイント解説

#### 1. 複数プロパティに transition を設定する方法

**方法 1：all を使う**
```css
button {
  transition: all 0.3s;
}

button:hover {
  background-color: #2980b9;
  transform: scale(1.1);
}
```

- `all` を使うと、変化する全てのプロパティに transition が適用される
- シンプルで便利

**方法 2：個別に指定する**
```css
button {
  transition: background-color 0.3s, transform 0.3s;
}
```

- カンマ区切りで複数のプロパティを指定
- プロパティごとに時間を変えたい場合に便利

#### 2. transform: scale() でサイズを変更

```css
button:hover {
  transform: scale(1.1); /* 1.1倍に拡大 */
}
```

- `scale(1.1)` は元のサイズの 1.1 倍（10% 拡大）
- `scale(0.9)` なら 0.9 倍（10% 縮小）
- 周囲のレイアウトに影響を与えない（元の場所を保ったまま拡大）

#### 3. all を使う時の注意点

```css
/* すべてのプロパティが0.3秒で変化 */
transition: all 0.3s;
```

**注意**：
- 意図しないプロパティまで transition が適用される可能性がある
- パフォーマンスを考えると、必要なプロパティだけ指定する方が良い場合もある

---

## 演習 3：タイミング関数を試してみよう

### 解答例：[05-03.html](05-03.html)

### ポイント解説

#### 1. タイミング関数の種類と特徴

```css
/* ease（デフォルト）：ゆっくり始まって、速くなって、ゆっくり終わる */
transition: all 0.5s ease;

/* linear：一定速度 */
transition: all 0.5s linear;

/* ease-in-out：ゆっくり始まって、ゆっくり終わる */
transition: all 0.5s ease-in-out;
```

**使い分けの目安**：
- **ease**：一般的なホバー効果（自然な感じ）
- **linear**：回転や移動など、一定速度が良い場合
- **ease-in-out**：滑らかな印象を与えたい時

#### 2. タイミング関数の設定位置

```css
transition: プロパティ名 時間 タイミング関数;
/*          ↑         ↑    ↑                */
/*       何を      何秒  どのように変化        */
```

#### 3. その他のタイミング関数

```css
/* ease-in：ゆっくり始まって、速くなる */
transition: all 0.5s ease-in;

/* ease-out：速く始まって、ゆっくり終わる */
transition: all 0.5s ease-out;

/* cubic-bezier：自分で曲線を定義 */
transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 演習 4：@keyframes でフェードインアニメーション

### 解答例：[05-04.html](05-04.html)

### ポイント解説

#### 1. @keyframes の基本構文

```css
@keyframes fadeIn {
  from {
    /* 開始時の状態 */
    opacity: 0;
  }
  to {
    /* 終了時の状態 */
    opacity: 1;
  }
}
```

または

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

- `from` と `to` は `0%` と `100%` と同じ
- パーセンテージで途中の状態も指定できる（例：`50%`）

#### 2. animation プロパティの使い方

```css
h1 {
  animation: fadeIn 2s;
  /*        ↑     ↑    */
  /*     名前    時間   */
}
```

**完全な書き方**：
```css
h1 {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}
```

**ショートハンド**：
```css
h1 {
  animation: fadeIn 2s ease 0s 1 normal none;
}
```

#### 3. transition と animation の違い

| 項目           | transition                | animation                          |
| -------------- | ------------------------- | ---------------------------------- |
| トリガー       | ユーザーの操作が必要      | 自動で実行される                   |
| 繰り返し       | できない                  | できる（infinite で無限ループ）    |
| 途中の状態     | 指定できない              | 複数指定できる（0%, 50%, 100%など）|
| 使用場面       | ホバー、フォーカスなど    | ページ読み込み時、常に動くもの     |

---

## 演習 5：ローディングスピナーを作ろう

### 解答例：[05-05.html](05-05.html)

### ポイント解説

#### 1. 円形の作り方

```css
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* 正方形を円形に */
}
```

- `border-radius: 50%` で正方形が円形になる

#### 2. border で円の一部だけ色を付ける

```css
.spinner {
  border: 4px solid #f3f3f3; /* 全体は薄いグレー */
  border-top: 4px solid #3498db; /* 上だけ青 */
}
```

- 全体に薄い色の border を設定
- 一部（top）だけ濃い色を上書き
- これで円の一部だけ色が違う状態になる

#### 3. 回転アニメーション

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
  /*        ↑   ↑  ↑      ↑         */
  /*      名前 時間 速度  繰り返し   */
}
```

**ポイント**：
- `linear` を使うことで、一定速度で回転（より自然）
- `infinite` で無限ループ
- 1 秒で 1 回転（360 度）

#### 4. animation の詳細プロパティ

```css
.spinner {
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
```

- `animation-iteration-count: infinite;` で無限ループ
- 数値（例：`3`）を指定すると、その回数だけ繰り返す

---

## 演習 6：AI に指示して作ってもらおう

### 解答例：[05-06.html](05-06.html)

### ポイント解説

#### 1. AI への良い指示の出し方

```text
✅ 良い指示：
「パルスアニメーションを作成してください。以下の要件を満たすHTMLファイルを作成してください：
- 円形のボタンを作成（幅・高さ80px、border-radius 50%、背景色 #e74c3c）
- 中央に白い♡（ハート）を表示（font-size 30px、color white）
- @keyframesで"pulse"という名前のアニメーションを定義
  - 0%: transform: scale(1);
  - 50%: transform: scale(1.2);
  - 100%: transform: scale(1);
- アニメーションは1.5秒、無限ループ、ease-in-outで実行
- ボタンは画面中央に配置」
```

**良い点**：
- 具体的な数値（サイズ、色、時間）を明記
- アニメーションのキーフレームを詳細に指定
- タイミング関数と繰り返しを明示
- レイアウト（中央配置）も指定

#### 2. 生成されたコードのチェックポイント

**@keyframes の確認**：
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```
- 名前が正しいか
- 0%, 50%, 100% の 3 つのキーフレームがあるか
- scale の値が正しいか

**animation プロパティの確認**：
```css
.button {
  animation: pulse 1.5s ease-in-out infinite;
}
```
- アニメーション名が @keyframes の名前と一致しているか
- 時間が 1.5s になっているか
- infinite が設定されているか
- ease-in-out が設定されているか

#### 3. よくある問題と修正方法

**問題 1：アニメーションが 1 回だけで止まる**
```css
/* 修正前 */
animation: pulse 1.5s;

/* 修正後 */
animation: pulse 1.5s infinite;
```

**問題 2：動きがカクカクする**
```css
/* 修正前 */
animation: pulse 1.5s linear infinite;

/* 修正後 */
animation: pulse 1.5s ease-in-out infinite;
```
- linear だと一定速度でカクカクした印象
- ease-in-out でスムーズに

**問題 3：中央配置されていない**
```css
/* 方法1：flexboxで中央配置 */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 方法2：positionで中央配置 */
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## チャレンジ 1：複雑なアニメーションを作ろう

### 解答例：[05-07.html](05-07.html)

### ポイント解説

#### 1. 複数の効果を組み合わせたアニメーション

```css
@keyframes slideInFade {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

- `opacity` でフェードイン
- `transform: translateX()` でスライドイン
- 両方を同時に変化させることで、より印象的なアニメーションに

#### 2. animation-delay で時間差を作る

```css
.card:nth-child(1) {
  animation-delay: 0s;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

.card:nth-child(3) {
  animation-delay: 0.4s;
}
```

- `:nth-child()` で各カードを選択
- `animation-delay` で開始時間をずらす
- 0.2 秒ずつずらすことで、順番に現れる効果

#### 3. animation-fill-mode の重要性

```css
.card {
  opacity: 0; /* 最初は非表示 */
  animation: slideInFade 0.6s ease-out forwards;
  /*                                        ↑     */
  /*                                     重要！   */
}
```

**animation-fill-mode の値**：
- `none`（デフォルト）：アニメーション終了後、元の状態に戻る
- `forwards`：アニメーション終了後、最後の状態（100%）を保つ
- `backwards`：アニメーション開始前、最初の状態（0%）になる
- `both`：`forwards` と `backwards` の両方

**この例の場合**：
- `forwards` を使うことで、フェードイン後も `opacity: 1` を保つ
- これがないと、アニメーション終了後に `opacity: 0` に戻ってしまう

#### 4. transform の複数の値

```css
/* 1つの値 */
transform: translateX(-50px);
transform: scale(1.1);
transform: rotate(45deg);

/* 複数の値を組み合わせ */
transform: translateX(-50px) scale(1.1);
transform: translateX(-50px) translateY(-20px);
```

- スペース区切りで複数の transform を組み合わせられる
- 順番が重要（左から右に適用される）

#### 5. :nth-child() の便利な使い方

```css
/* 1番目の要素 */
.card:nth-child(1) { }

/* 2番目の要素 */
.card:nth-child(2) { }

/* 奇数番目の要素 */
.card:nth-child(odd) { }

/* 偶数番目の要素 */
.card:nth-child(even) { }

/* 3番目以降の要素 */
.card:nth-child(n+3) { }
```

---

## まとめ

### transition と animation の使い分け

| 使う場面                     | transition | animation |
| ---------------------------- | ---------- | --------- |
| ホバー効果                   | ✅         | ❌        |
| ページ読み込み時の演出       | ❌         | ✅        |
| 無限ループ                   | ❌         | ✅        |
| 複雑なアニメーション（多段階）| ❌         | ✅        |
| シンプルな変化               | ✅         | ✅        |

### よく使うアニメーションパターン

1. **フェードイン**：`opacity: 0 → 1`
2. **スライドイン**：`transform: translateX(-50px) → translateX(0)`
3. **回転**：`transform: rotate(0deg) → rotate(360deg)`
4. **パルス**：`transform: scale(1) → scale(1.2) → scale(1)`
5. **バウンス**：cubic-bezier や複数のキーフレームで弾む動き

### パフォーマンスの良いプロパティ

アニメーションで使うプロパティには、パフォーマンスの良し悪しがあります：

**✅ パフォーマンスが良い**（GPU で処理される）：
- `transform`（translate, scale, rotate など）
- `opacity`

**❌ パフォーマンスが悪い**（レイアウトの再計算が必要）：
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`（position: absolute の場合を除く）

**おすすめ**：
- 位置を変えたい → `transform: translate()` を使う
- サイズを変えたい → `transform: scale()` を使う
- 透明度を変えたい → `opacity` を使う

### 学習のポイント

- ✅ transition は操作に反応、animation は自動実行
- ✅ `all` を使うと全プロパティに適用（便利だが注意も必要）
- ✅ タイミング関数で動きの印象が大きく変わる
- ✅ @keyframes で複雑なアニメーションを定義できる
- ✅ animation-delay で時間差のある演出ができる
- ✅ animation-fill-mode で終了後の状態を制御
- ✅ transform と opacity はパフォーマンスが良い
- ✅ AI に指示する時は、キーフレーム、時間、繰り返しを明示

---

**お疲れ様！** 🎉

CSS アニメーションの基本から応用まで、しっかりマスターできたね！

これで動きのある、インタラクティブで魅力的なウェブサイトが作れるよ！

次は Phase 3 で JavaScript を学んで、さらに高度なインタラクションを実装しよう！

---

**Let's vibe and code!** 🎉
