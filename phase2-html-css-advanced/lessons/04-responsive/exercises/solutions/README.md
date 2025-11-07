# Lesson 4: レスポンシブデザイン - 解答例と解説 📝

各演習問題の解答例と、そのポイントを解説します。

---

## 演習 1：最初のメディアクエリ

### 解答例：[04-01.html](04-01.html)

### ポイント解説

#### 1. メディアクエリの基本構文

```css
/* デフォルト（広い画面） */
.box {
  background-color: #3b82f6; /* 青 */
}

/* 画面幅が768px以下 */
@media (max-width: 768px) {
  .box {
    background-color: #10b981; /* 緑に変更 */
  }
}
```

**メディアクエリの構造**：

```css
@media (条件) {
  /* 条件が満たされた時に適用されるスタイル */
}
```

#### 2. max-widthの意味

```css
@media (max-width: 768px) {
  /* 画面幅が768px以下の時に適用 */
}
```

**max-width: 768px**：

- 「最大幅768px」= 「768px以下」
- モバイル・小さいタブレット向け

#### 3. viewportメタタグの重要性

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**必須！** これがないと、モバイルでも拡大表示されてしまう。

---

## 演習 2：ブレークポイントで段階的に変化

### 解答例：[04-02.html](04-02.html)

### ポイント解説

#### 複数のメディアクエリを使う

```css
/* デスクトップ（デフォルト、768px以上） */
.container {
  display: flex;
}

/* タブレット（481px〜767px） */
@media (max-width: 767px) and (min-width: 481px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2列 */
  }
}

/* モバイル（480px以下） */
@media (max-width: 480px) {
  .container {
    flex-direction: column; /* 縦並び */
  }
}
```

#### 範囲指定のメディアクエリ

```css
@media (max-width: 767px) and (min-width: 481px) {
  /* 481px〜767pxの範囲 */
}
```

**and** で条件を組み合わせられます。

#### よくあるブレークポイント

```text
モバイル：     〜 480px
タブレット：   481px 〜 1023px
デスクトップ： 1024px 〜
```

（プロジェクトによって異なる）

---

## 演習 3：モバイルファースト

### 解答例：[04-03.html](04-03.html)

### ポイント解説

#### モバイルファーストアプローチ

```css
/* モバイル（デフォルト） */
.container {
  grid-template-columns: 1fr; /* 1列 */
}

/* タブレット（768px以上） */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
  }
}

/* デスクトップ（1024px以上） */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(4, 1fr); /* 4列 */
  }
}
```

**モバイルファーストの特徴**：

- **デフォルト**：モバイル用のスタイル
- **`min-width`**：「〜以上」で、大きい画面向けのスタイルを追加

#### デスクトップファーストとの違い

```css
/* デスクトップファースト（非推奨） */
.container {
  grid-template-columns: repeat(4, 1fr); /* デフォルト：4列 */
}

@media (max-width: 1023px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
  }
}

@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr; /* 1列 */
  }
}

/* モバイルファースト（推奨） */
.container {
  grid-template-columns: 1fr; /* デフォルト：1列 */
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(4, 1fr); /* 4列 */
  }
}
```

**モバイルファーストの利点**：

- モバイルユーザーが多い現代に適している
- コードがシンプルになる
- パフォーマンスが良い（モバイルで不要なスタイルを読み込まない）

---

## 演習 4：レスポンシブナビゲーション

### 解答例：[04-04.html](04-04.html)

### ポイント解説

#### flex-directionを変更してレスポンシブに

```css
/* デスクトップ（デフォルト） */
nav {
  display: flex;
  flex-direction: row; /* 横並び */
}

.nav-links {
  display: flex;
  flex-direction: row; /* メニューも横並び */
  gap: 2rem;
}

/* モバイル */
@media (max-width: 767px) {
  nav {
    flex-direction: column; /* 縦並びに変更 */
  }

  .nav-links {
    flex-direction: column; /* メニューも縦並びに */
  }
}
```

**Flexboxとメディアクエリの相性**：

- `flex-direction` を変えるだけで、レイアウトが大きく変わる
- ナビゲーションのレスポンシブ対応に最適

#### モバイルでのスタイル調整

```css
@media (max-width: 767px) {
  .nav-links li {
    border-bottom: 1px solid #374151; /* 下線を追加 */
    padding: 0.75rem 0; /* 間隔を広げる */
  }
}
```

モバイルでは、タップしやすいように間隔を広げます。

---

## 演習 5：レスポンシブカードレイアウト

### 解答例：[04-05.html](04-05.html)

### ポイント解説

#### Grid + メディアクエリで列数を変更

```css
/* モバイル（デフォルト） */
.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1列 */
  gap: 20px;
}

/* タブレット */
@media (min-width: 481px) and (max-width: 1023px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
  }
}

/* デスクトップ */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 3列 */
  }
}
```

**Gridとメディアクエリの相性**：

- `grid-template-columns` を変えるだけで、列数が変わる
- カードレイアウトに最適

#### 画像を全幅で表示

```css
.card-image {
  width: 100%; /* 親要素の幅いっぱい */
  height: 150px;
}
```

`width: 100%;` で、カードの幅に合わせて画像も調整されます。

---

## 演習 6：AIに指示して作ってもらおう

### 解答例：[04-06.html](04-06.html)

### ポイント解説

#### AIへの良い指示の出し方

```text
✅ 良い指示：
「レスポンシブなブログ記事一覧ページを作成してください：

CSS - モバイルファースト（デフォルト、767px以下）：
- ヘッダーのナビゲーション：flex-direction: columnで縦並び
- 記事カードのグリッド：grid-template-columns: 1frで1列
...

CSS - タブレット（768px以上）：
- ナビゲーション：flex-direction: rowで横並び
- 記事カードのグリッド：grid-template-columns: repeat(2, 1fr)で2列
...」
```

**良い点**：

- **モバイルファーストであることを明示**
- **各ブレークポイントでの具体的なスタイル**を指定
- **プロパティ名と値**を明確に指定

#### モバイルファーストの実装

```css
/* デフォルト：モバイル */
nav {
  flex-direction: column;
}

.blog-grid {
  grid-template-columns: 1fr;
}

/* タブレット以上 */
@media (min-width: 768px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* デスクトップ */
@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### overflow: hiddenで角丸を適用

```css
.blog-card {
  border-radius: 8px;
  overflow: hidden; /* 角丸を画像にも適用 */
}
```

---

## チャレンジ 1：複雑なレスポンシブレイアウト

### 解答例：[04-07.html](04-07.html)

### 修正ポイント解説

#### 3つのブレークポイントで異なるレイアウト

```css
/* モバイル（デフォルト） */
.container {
  grid-template-columns: 1fr; /* 1列 */
}

.sidebar-right {
  display: none; /* 右サイドバーを非表示 */
}

/* タブレット */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    grid-template-columns: 200px 1fr; /* 2列 */
  }

  /* 右サイドバーは非表示のまま */
}

/* デスクトップ */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: 200px 1fr 200px; /* 3列 */
  }

  .sidebar-right {
    display: block; /* 右サイドバーを表示 */
  }
}
```

#### display: noneで要素を非表示

```css
.sidebar-right {
  display: none; /* 非表示 */
}

@media (min-width: 1024px) {
  .sidebar-right {
    display: block; /* 表示 */
  }
}
```

**display: none**：

- 要素を完全に非表示にする
- 画面上に表示されず、スペースも取らない

#### grid-columnで要素の位置を制御

```css
.header {
  grid-column: 1 / -1; /* 全列をまたぐ */
}

.footer {
  grid-column: 1 / -1; /* 全列をまたぐ */
}
```

#### メインコンテンツのネストされたグリッド

```css
.main {
  display: grid;
  grid-template-columns: 1fr; /* モバイル：1列 */
}

@media (min-width: 1024px) {
  .main {
    grid-template-columns: repeat(2, 1fr); /* デスクトップ：2列 */
  }
}
```

---

## まとめ

### よくある間違いと解決策

| 間違い                       | 問題                       | 解決策                           |
| ---------------------------- | -------------------------- | -------------------------------- |
| viewportメタタグがない       | モバイルで拡大表示される   | viewportメタタグを追加           |
| max-widthとmin-widthを混同   | 意図しない動作             | 正しく理解して使い分ける         |
| デスクトップファースト       | コードが複雑               | モバイルファーストに変更         |
| ブレークポイントが多すぎる   | メンテナンスが大変         | 3-4個のブレークポイントに絞る    |
| メディアクエリの順序が間違い | スタイルが上書きされない   | モバイルファーストなら昇順に書く |
| px単位だけを使っている       | 柔軟性がない               | fr、%、remなども活用する         |

### メディアクエリの主要プロパティ

**画面幅**：

- `max-width`：「〜以下」
- `min-width`：「〜以上」
- `width`：「ちょうど〜」（あまり使わない）

**その他の条件**：

- `max-height`：「高さ〜以下」
- `min-height`：「高さ〜以上」
- `orientation: portrait`：縦向き
- `orientation: landscape`：横向き

### ブレークポイントの考え方

#### 一般的なブレークポイント

```css
/* モバイル（デフォルト） */
/* 〜 767px */

/* タブレット */
@media (min-width: 768px) {
  /* 768px 〜 1023px */
}

/* デスクトップ */
@media (min-width: 1024px) {
  /* 1024px 〜 */
}

/* 大画面デスクトップ */
@media (min-width: 1280px) {
  /* 1280px 〜 */
}
```

#### コンテンツベースのブレークポイント

**重要！** 固定の数値にこだわらず、コンテンツが崩れる場所でブレークポイントを設定しよう。

```css
/* 例：カードが2列に収まらなくなったら1列にする */
@media (max-width: 600px) {
  /* カードを1列に */
}
```

### レスポンシブデザインのベストプラクティス

#### 1. モバイルファーストアプローチ

```css
/* デフォルト：モバイル */
.element {
  /* モバイル用のスタイル */
}

/* タブレット以上 */
@media (min-width: 768px) {
  .element {
    /* タブレット用のスタイルを追加 */
  }
}
```

#### 2. 相対単位を使う

```css
/* ❌ 固定サイズ */
.container {
  width: 1200px; /* 画面が1200px以下だとはみ出る */
}

/* ⭕ 柔軟なサイズ */
.container {
  max-width: 1200px; /* 最大1200px、それ以下では画面幅に合わせる */
  width: 100%;
}
```

#### 3. 画像をレスポンシブに

```css
img {
  max-width: 100%; /* 親要素の幅を超えない */
  height: auto; /* アスペクト比を保つ */
}
```

#### 4. テキストサイズを調整

```css
/* モバイル */
h1 {
  font-size: 1.5rem;
}

/* デスクトップ */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem; /* 大きい画面では大きく */
  }
}
```

### 学習のポイント

- ✅ メディアクエリの基本構文を理解した
- ✅ `max-width`（〜以下）と `min-width`（〜以上）の違いを理解した
- ✅ モバイルファーストアプローチを理解した
- ✅ Flexbox・Gridとメディアクエリを組み合わせられる
- ✅ `display: none;` で要素を非表示にできる
- ✅ ブラウザの開発者ツールでレスポンシブ表示を確認できる
- ✅ 相対単位（fr、%、rem）を活用できる
- ✅ AIに指示する時は、ブレークポイントとスタイルを具体的に指定する

---

**お疲れ様！** 🎉

レスポンシブデザインの使い方をしっかりマスターできたね！

次は Lesson 5 で CSS アニメーションを学んで、動きのあるデザインに挑戦しよう！

---

**Let's vibe and code!** 🎉
