# Lesson 2: Flexbox - 解答例と解説 📝

各演習問題の解答例と、そのポイントを解説します。

---

## 演習 1：最初の Flexbox - 横並びレイアウト

### 解答例：[02-01.html](02-01.html)

### ポイント解説

#### 1. Flexbox の基本構造

```css
.container {
  display: flex; /* これだけで子要素が横並びになる！ */
}
```

**たったこれだけ！** `display: flex;` を親要素に付けるだけで、子要素が自動的に横並びになります。

#### 2. デフォルトの並び方

```css
.container {
  display: flex;
  /* デフォルトでは以下と同じ */
  flex-direction: row; /* 横並び */
  justify-content: flex-start; /* 左寄せ */
  align-items: stretch; /* 高さを揃える */
}
```

何も指定しなくても、適切なデフォルト値が設定されています。

#### 3. 各ボックスのスタイル

```css
.box {
  padding: 20px;
  margin: 10px;
  /* 背景色を変えることで、各ボックスを区別できる */
}
```

- `padding`：ボックス内の余白
- `margin`：ボックス外の余白（ボックス間の間隔）

**より良い方法**：margin の代わりに親要素に `gap` を使う方が簡単！

```css
.container {
  display: flex;
  gap: 10px; /* より簡単！ */
}
```

---

## 演習 2：完全な中央配置

### 解答例：[02-02.html](02-02.html)

### ポイント解説

#### 完全な中央配置の公式

```css
.container {
  display: flex;
  justify-content: center; /* 横方向の中央 */
  align-items: center; /* 縦方向の中央 */
  height: 300px; /* 高さが必要！ */
}
```

**重要！** 縦方向の中央配置（`align-items: center;`）を効かせるには、**親要素に高さが必要**です。

#### よくある間違い

```css
/* ❌ 高さがないので、縦方向の中央配置が効かない */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* heightがない！ */
}

/* ⭕ 正しい */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* または min-height */
}
```

#### 画面全体を中央配置にする

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* ビューポートの高さいっぱい */
}
```

`100vh` を使うと、画面の高さいっぱいに広がります！

---

## 演習 3：space-between で両端配置

### 解答例：[02-03.html](02-03.html)

### ポイント解説

#### space-between の動作

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

**結果**：

```text
┌──────┐        ┌──────┐        ┌──────┐
│Left  │        │Center│        │Right │
└──────┘        └──────┘        └──────┘
```

- 最初の要素：左端
- 最後の要素：右端
- 間隔：均等

#### space-between と space-around の違い

```css
/* space-between */
justify-content: space-between;
/* 結果：|要素|------|要素|------|要素| */

/* space-around */
justify-content: space-around;
/* 結果：--|要素|----|要素|----|要素|--   */

/* space-evenly */
justify-content: space-evenly;
/* 結果：---|要素|---|要素|---|要素|--- */
```

- **space-between**：端に余白なし、間隔は均等
- **space-around**：各要素の周りに同じ余白（端は半分）
- **space-evenly**：全ての余白が均等

---

## 演習 4：ナビゲーションメニューを作ろう

### 解答例：[02-04.html](02-04.html)

### ポイント解説

#### ネストされた Flexbox

```html
<nav>
  <!-- nav自体がFlexコンテナ -->
  <div class="logo">MyWebsite</div>
  <ul class="nav-links">
    <!-- nav-linksもFlexコンテナ -->
    <li><a href="#">ホーム</a></li>
    <li><a href="#">サービス</a></li>
  </ul>
</nav>
```

```css
/* navのFlexbox（ロゴとメニューを横並び） */
nav {
  display: flex;
  justify-content: space-between; /* 両端に配置 */
  align-items: center; /* 縦方向で中央揃え */
}

/* nav-linksのFlexbox（メニュー項目を横並び） */
.nav-links {
  display: flex;
  gap: 2rem; /* メニュー間の余白 */
}
```

**ポイント**：Flexbox は**ネスト**できる！親も子も両方 Flex コンテナにできます。

#### リストのスタイルリセット

```css
.nav-links {
  list-style: none; /* リストマーカーを削除 */
  margin: 0; /* デフォルトのmarginを削除 */
  padding: 0; /* デフォルトのpaddingを削除 */
}
```

`<ul>` には、デフォルトで margin、padding、リストマーカーがあるので、リセットします。

---

## 演習 5：カードレイアウトを作ろう

### 解答例：[02-05.html](02-05.html)

### ポイント解説

#### flex プロパティで可変幅

```css
.card {
  flex: 1 1 250px;
  /* flex-grow: 1   → 余白があれば伸びる */
  /* flex-shrink: 1 → 足りなければ縮む */
  /* flex-basis: 250px → 基本サイズは250px */
}
```

**これの意味**：

- 最小幅は 250px
- 余白があれば、各カードが均等に伸びる
- 250px 以下になったら、次の行に折り返す（flex-wrap: wrap が必要）

#### flex-wrap で折り返し

```css
.card-container {
  display: flex;
  flex-wrap: wrap; /* 画面が狭い時は折り返す */
  gap: 20px;
}
```

**デフォルト**：`flex-wrap: nowrap;`（折り返さない）

**flex-wrap: wrap;**：要素が収まらない時、次の行に折り返す

```text
【広い画面】
┌───────┬───────┬───────┐
│Card 1 │Card 2 │Card 3 │
└───────┴───────┴───────┘

【狭い画面】
┌───────┬───────┐
│Card 1 │Card 2 │
├───────┼───────┘
│Card 3 │
└───────┘
```

#### gap で余白を設定

```css
.card-container {
  gap: 20px; /* カード間の余白 */
}
```

**margin を使った方法（面倒）**：

```css
.card {
  margin: 10px; /* 各カードにmargin */
}
/* でも、コンテナの外側にも余白ができてしまう... */
```

**gap を使う（簡単）**：

```css
.card-container {
  gap: 20px; /* 要素間だけに余白 */
}
```

---

## 演習 6：AI に指示して作ってもらおう

### 解答例：[02-06.html](02-06.html)

### ポイント解説

#### AI への良い指示の出し方

```text
✅ 良い指示：
「Flexboxを使って商品カード3列レイアウトを作成してください：

親要素：
- display: flexで3つのカードを横並びに
- justify-content: space-betweenで均等配置
- gap: 30pxで余白を設定

各カードの構造：
- カード自体もdisplay: flexでflex-direction: columnにして縦並び
- align-items: centerで中央揃え
- ...」
```

**良い点**：

- **Flexbox を使う**ことを明示
- **具体的なプロパティ名**を指定（display, justify-content, gap など）
- **構造を説明**（親要素と子要素の両方）
- **細かい仕様**も含める（サイズ、色、ホバー効果など）

#### ネストされた Flexbox（縦並び）

```css
/* 親：カードを横並び */
.product-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

/* 子：カード内の要素を縦並び */
.product-card {
  display: flex;
  flex-direction: column; /* 縦並び */
  align-items: center; /* 中央揃え */
}
```

**ポイント**：カード自体も `display: flex;` にして、`flex-direction: column;` で縦並びにしています。

#### ホバー効果

```css
.product-card {
  transition: box-shadow 0.3s, transform 0.3s;
}

.product-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* 影を強く */
  transform: translateY(-5px); /* 上に移動 */
}
```

`transform: translateY(-5px);` で、要素が上に 5px 移動して「浮き上がる」効果になります。

#### margin-top: auto で下に配置

```css
.add-to-cart {
  margin-top: auto; /* ボタンを下に配置 */
}
```

Flexbox の中で `margin-top: auto;` を使うと、その要素が下に配置されます！

---

## チャレンジ 1：エラーを見つけて修正しよう

### 解答例：[02-07.html](02-07.html)

### 修正ポイント解説

#### 問題 1：container に高さがない

```css
/* 修正前 */
.container {
  display: flex;
  align-items: center; /* でも高さがないので効果がない */
}

/* 修正後 */
.container {
  display: flex;
  align-items: center;
  height: 300px; /* 高さを追加 */
}
```

**原因**：`align-items` は交差軸方向（縦方向）の配置を制御しますが、高さがないと効果がありません。

**解決策**：`height` または `min-height` を設定する。

#### 問題 2：item に width: 100%がある

```css
/* 修正前 */
.item {
  width: 100%; /* これがあると横並びにならない */
}

/* 修正後 */
.item {
  /* widthを削除、またはwidth: autoに */
}
```

**原因**：`width: 100%;` があると、各アイテムが親の幅いっぱいに広がり、横並びになりません。

**解決策**：`width` を削除するか、`width: auto;` にする。

#### 問題 3：nav に display: flex がない

```css
/* 修正前 */
.nav {
  background-color: #1f2937;
  /* display: flexがない！ */
}

/* 修正後 */
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2937;
}
```

**原因**：Flexbox を使うには、親要素に `display: flex;` が必要です。

#### 問題 4 と 5：margin ではなく gap を使う

```css
/* 修正前：marginで余白を設定（面倒） */
.nav-links {
  display: flex;
}

.nav-links li {
  margin-right: 2rem;
}

.nav-links li:last-child {
  margin-right: 0; /* 最後の要素だけリセット */
}

/* 修正後：gapを使う（簡単！） */
.nav-links {
  display: flex;
  gap: 2rem; /* たった1行！ */
}
```

**gap の利点**：

- たった 1 行で設定できる
- 要素間だけに余白が入る（最後の要素の後ろには入らない）
- コードがシンプルになる

#### 問題 6：flex-wrap がない

```css
/* 修正前 */
.card-container {
  display: flex;
  gap: 20px;
  /* flex-wrapがないので、画面が狭い時に潰れる */
}

/* 修正後 */
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* 折り返しを追加 */
}
```

**原因**：`flex-wrap: nowrap;`（デフォルト）だと、1 行に無理やり収めようとして、要素が潰れます。

**解決策**：`flex-wrap: wrap;` を追加して、折り返しを有効にする。

---

## まとめ

### よくある間違いと解決策

| 間違い                         | 問題                   | 解決策                       |
| ------------------------------ | ---------------------- | ---------------------------- |
| 親要素に display: flex がない  | 横並びにならない       | 親要素に `display: flex;`    |
| 高さが設定されていない         | align-items が効かない | `height` または `min-height` |
| width: 100%がある              | 横並びにならない       | `width` を削除               |
| margin で余白を設定            | コードが複雑           | `gap` を使う                 |
| flex-wrap がない               | 画面が狭い時に潰れる   | `flex-wrap: wrap;`           |
| flex-direction を忘れている    | 縦並びにならない       | `flex-direction: column;`    |
| justify-content と align-items | どっちを使うか迷う     | 主軸=justify、交差軸=align   |

### Flexbox の主要プロパティ

**Flex コンテナ（親要素）に指定**：

- `display: flex;` - Flexbox を有効化
- `flex-direction` - 並べる方向（row, column）
- `justify-content` - 主軸方向の配置（横方向）
- `align-items` - 交差軸方向の配置（縦方向）
- `flex-wrap` - 折り返しの制御（wrap, nowrap）
- `gap` - 要素間の余白

**Flex アイテム（子要素）に指定**：

- `flex` - 伸縮の制御（flex: 1 1 250px など）
- `align-self` - 個別の交差軸方向の配置

### 学習のポイント

- ✅ `display: flex;` で親要素を Flex コンテナにする
- ✅ `justify-content` で横方向の配置を制御
- ✅ `align-items` で縦方向の配置を制御（高さが必要）
- ✅ `gap` で要素間の余白を簡単に設定
- ✅ `flex-wrap: wrap;` でレスポンシブに対応
- ✅ Flexbox はネストできる（親も子も Flex コンテナにできる）
- ✅ AI に指示する時は、プロパティ名を具体的に指定する

---

**お疲れ様！** 🎉

Flexbox の使い方をしっかりマスターできたね！

次は Lesson 3 で Grid を学んで、2 次元レイアウトにも挑戦しよう！

---

**Let's vibe and code!** 🎉
