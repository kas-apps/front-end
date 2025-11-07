# Lesson 4: CSS の基礎 🎨

**学習目標**：CSS の基本的な書き方を理解し、HTML に装飾を加えられるようになる

---

## なぜ CSS を学ぶの？

Phase 0 で学んだように、**HTML は構造、CSS は装飾**だったよね！

Word や Pages で文書を作る時、こんなことをしたことがあると思う：

- 見出しを青色にする
- 段落の文字サイズを変える
- 余白を調整して読みやすくする
- 背景色を付ける

**CSS は、Web ページでこれと全く同じことをするための技術**なんだ！🎨

### CSS を学ぶとできること

- ✅ テキストの色、サイズ、フォントを自由に変更
- ✅ 余白や間隔を調整して読みやすいレイアウト
- ✅ 背景色や枠線で視覚的に美しいデザイン
- ✅ 要素の配置をコントロール

**まるで、白黒の文書に色を塗るみたい！** 🖌️✨

---

## CSS とは何か？

### CSS の正式名称

**CSS = Cascading Style Sheets（カスケーディング・スタイル・シート）**

難しい名前だけど、覚えなくて OK！「CSS」って呼ぶのが普通だよ。

### CSS の仕事

CSS の仕事は、**HTML で作った構造に「見た目」を与えること**。

```html
<!-- HTML：構造だけ -->
<h1>ようこそ！</h1>
<p>これは私のウェブサイトです。</p>
```

このままだと、ブラウザのデフォルトスタイル（黒い文字、普通のサイズ）で表示される。

```css
/* CSS：装飾を追加 */
h1 {
  color: blue;
  font-size: 36px; /* サイズには単位（px）が必要 */
}

p {
  color: gray;
  font-size: 18px; /* サイズには単位（px）が必要 */
  line-height: 1.6; /* 行間は倍率なので単位なし */
}
```

CSS を追加すると、見出しが青色で大きくなり、段落が読みやすくなる！

### なぜ HTML と CSS を分けるの？

**例え話**：建物と内装

- **HTML**：建物の構造（柱、壁、部屋の配置）
- **CSS**：内装・インテリア（壁紙、照明、家具の色）

構造と装飾を分けることで：

- 🔄 **デザイン変更が楽**：CSS だけ変えれば、HTML はそのまま
- 🚀 **メンテナンスしやすい**：1 つの CSS で複数のページを管理
- 🤖 **AI に指示しやすい**：「構造はそのまま、色だけ変えて」が簡単

---

## CSS の 3 つの書き方

CSS を HTML に適用する方法は 3 つあるよ。それぞれのメリット・デメリットを理解しよう！

### 1. インライン CSS（あまり推奨されない）

HTML タグに直接 `style` 属性で書く方法。

```html
<h1 style="color: blue; font-size: 36px;">ようこそ！</h1>
<p style="color: gray; font-size: 18px;">私のウェブサイトです。</p>
```

#### メリット

- ✅ すぐに試せる
- ✅ その要素だけにピンポイントで適用できる

#### デメリット

- ❌ 同じスタイルを何度も書く必要がある（非効率）
- ❌ HTML と CSS が混ざって読みづらい
- ❌ 変更が大変（全部の要素を変える必要がある）

**使うべき場面**：ほぼない。特殊な事情がある時のみ。

---

### 2. 内部 CSS（学習・プロトタイプに便利）

HTML ファイルの `<head>` 内に `<style>` タグで書く方法。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>私のページ</title>
    <!-- ここに CSS を書く -->
    <style>
      h1 {
        color: blue;
        font-size: 36px;
      }
      p {
        color: gray;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>ようこそ！</h1>
    <p>私のウェブサイトです。</p>
  </body>
</html>
```

#### メリット

- ✅ HTML と CSS が 1 ファイルで完結（学習に便利）
- ✅ すべての `h1` や `p` に一括適用できる
- ✅ プロトタイプや簡単なページに向いている

#### デメリット

- ❌ 複数のページで同じスタイルを使いたい時、コピペが必要
- ❌ ファイルが長くなると管理しづらい

**使うべき場面**：学習中、簡単な 1 ページのサイト、プロトタイプ

---

### 3. 外部 CSS（実務で最も推奨）⭐

CSS を別ファイル（`.css`）に分けて、HTML から読み込む方法。

**HTML ファイル（index.html）：**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>私のページ</title>
    <!-- 外部 CSS ファイルを読み込む -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>ようこそ！</h1>
    <p>私のウェブサイトです。</p>
  </body>
</html>
```

**CSS ファイル（styles.css）：**

```css
h1 {
  color: blue;
  font-size: 36px;
}

p {
  color: gray;
  font-size: 18px;
}
```

#### メリット

- ✅ **複数のページで同じ CSS を使い回せる**（超重要！）
- ✅ HTML と CSS が完全に分離されて管理しやすい
- ✅ CSS ファイルを変更するだけで、全ページのデザインが変わる
- ✅ ブラウザが CSS をキャッシュするので、表示が速い

#### デメリット

- ❌ ファイルが 2 つになる（でも、実務では普通）

**使うべき場面**：実務、複数ページのサイト、大きなプロジェクト（ほとんどの場合これ！）

---

### どの方法を選ぶ？

| 方法       | 使うべき場面                       | 推奨度     |
| ---------- | ---------------------------------- | ---------- |
| インライン | ほぼない（特殊な事情がある時のみ） | ⭐         |
| 内部 CSS   | 学習、プロトタイプ、1 ページだけ   | ⭐⭐⭐     |
| 外部 CSS   | 実務、複数ページのサイト           | ⭐⭐⭐⭐⭐ |

**このレッスンでは**：まず内部 CSS で基本を学んで、慣れてきたら外部 CSS に移行しよう！

---

## CSS の基本構文

CSS の書き方には決まった「型」があるよ。これを覚えれば、どんなスタイルも書けるようになる！

### CSS の構造

```css
セレクタ {
  プロパティ: 値;
  プロパティ: 値;
}
```

**例：**

```css
h1 {
  color: blue;
  font-size: 36px;
}
```

#### 各部分の役割

1. **セレクタ（Selector）**：どの要素にスタイルを適用するか

   - `h1` = すべての `<h1>` タグ

2. **プロパティ（Property）**：何を変更するか

   - `color` = 文字色
   - `font-size` = 文字サイズ

3. **値（Value）**：どう変更するか
   - `blue` = 青色
   - `36px` = 36 ピクセル

**まるで命令文みたい！**

```text
「h1に対して、色を青にして、サイズを36pxにしてください」
```

---

## セレクタの基本

「どの要素にスタイルを適用するか」を指定するのがセレクタだよ。基本的な 3 種類を覚えよう！

### 1. 要素セレクタ（タグセレクタ）

**すべての特定タグ**にスタイルを適用する。

```css
/* すべての <p> タグ */
p {
  color: gray;
  font-size: 16px;
}

/* すべての <h1> タグ */
h1 {
  color: blue;
  font-size: 32px;
}
```

```html
<h1>これは青色で32px</h1>
<p>これは灰色で16px</p>
<p>これも灰色で16px</p>
```

#### 使うべき場面

- すべての見出しを同じスタイルにしたい
- すべての段落を同じスタイルにしたい
- サイト全体の基本スタイルを設定したい

---

### 2. クラスセレクタ（最もよく使う！）⭐

**特定のクラスを持つ要素**にスタイルを適用する。

```css
/* クラス名は . で始める */
.highlight {
  background-color: yellow;
  font-weight: bold;
}

.important {
  color: red;
  font-size: 20px;
}
```

```html
<p>これは普通の段落</p>
<p class="highlight">この段落は黄色の背景</p>
<p class="important">この段落は赤色で大きい</p>
<p class="highlight">こっちも黄色の背景</p>
```

#### クラスの特徴

- ✅ **同じクラスを複数の要素に付けられる**
- ✅ **1 つの要素に複数のクラスを付けられる**

```html
<!-- 複数のクラスを同時に適用 -->
<p class="highlight important">黄色背景 + 赤文字 + 大きいサイズ</p>
```

#### 使うべき場面

- 特定の要素だけスタイルを変えたい
- 同じスタイルを複数の要素に使いたい
- **実務では 8 割くらいこれ！**

---

### 3. ID セレクタ（ページに 1 つだけ）

**特定の ID を持つ要素**にスタイルを適用する。

```css
/* ID名は # で始める */
#header {
  background-color: navy;
  color: white;
  padding: 20px;
}

#main-title {
  font-size: 48px;
  color: blue;
}
```

```html
<header id="header">
  <h1 id="main-title">メインタイトル</h1>
</header>
```

#### ID の特徴

- ⚠️ **1 つの ID は、ページ内で 1 回しか使えない**
- ⚠️ クラスより優先度が高い（後で詳しく学ぶよ）

#### 使うべき場面

- ページ内で唯一の要素（ヘッダー、メインコンテンツなど）
- JavaScript で特定の要素を操作したい時（Phase 3 で学ぶよ）

---

### クラスと ID の使い分け

| 特徴             | クラス（class）          | ID                   |
| ---------------- | ------------------------ | -------------------- |
| セレクタ記号     | `.class-name`            | `#id-name`           |
| 使用回数         | 何度でも OK              | 1 ページに 1 回だけ  |
| 複数適用         | 1 要素に複数クラス OK    | 1 要素に 1 ID のみ   |
| 推奨される用途   | スタイリング全般         | ページ内の唯一の要素 |
| 使用頻度（実務） | ⭐⭐⭐⭐⭐（めちゃ多い） | ⭐⭐（そこそこ）     |

**迷ったらクラスを使おう！** 実務では 8 割がクラスだよ。

---

## ボックスモデル - CSS の最重要概念！

Web ページのすべての要素は、**箱（ボックス）** として扱われるんだ。この「箱の仕組み」を理解すると、レイアウトが自由自在になるよ！

### ボックスモデルとは？

すべての HTML 要素は、以下の 4 つの層で構成されている：

```test
┌─────────────────────────────────┐
│       Margin（マージン）          │  透明（外側の余白）
│  ┌───────────────────────────┐  │
│  │   Border（ボーダー）        │  │  枠線
│  │  ┌─────────────────────┐  │  │
│  │  │ Padding（パディング） │  │  │  内側の余白
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   Content     │  │  │  │  実際の内容
│  │  │  │  （コンテンツ） │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

#### 各部分の役割

1. **Content（コンテンツ）**：実際の内容（文字、画像など）
2. **Padding（パディング）**：内側の余白（背景色が付く）
3. **Border（ボーダー）**：枠線
4. **Margin（マージン）**：外側の余白（透明、他の要素との間隔）

---

### Padding（パディング）- 内側の余白

**要素の中身と枠線の間の余白**。背景色が付く領域。

```css
.box {
  background-color: lightblue;
  padding: 20px; /* 上下左右すべて20px */
}
```

```html
<div class="box">この文字と枠の間に余白ができる</div>
```

#### Padding の指定方法

```css
/* 1つの値：上下左右すべて */
padding: 20px;

/* 2つの値：上下、左右 */
padding: 20px 40px; /* 上下20px、左右40px */

/* 4つの値：上、右、下、左（時計回り） */
padding: 10px 20px 30px 40px;

/* 個別に指定 */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

**覚え方**：時計回り（上 → 右 → 下 → 左）🕐

---

### Margin（マージン）- 外側の余白

**要素と他の要素の間の余白**。透明で、背景色は付かない。

```css
.box {
  background-color: lightblue;
  margin: 20px; /* 上下左右すべて20px */
}
```

```html
<div class="box">この要素の外側に余白ができる</div>
<div class="box">2つ目の要素との間に余白</div>
```

#### Margin の指定方法

```css
/* 基本は padding と同じ */
margin: 20px; /* 上下左右すべて */
margin: 20px 40px; /* 上下、左右 */
margin: 10px 20px 30px 40px; /* 上、右、下、左 */

/* 個別に指定 */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* 中央寄せ（超便利！） */
margin: 0 auto; /* 上下0、左右auto（中央寄せ） */
```

---

### Border（ボーダー）- 枠線

**要素の周りの枠線**。

```css
.box {
  border: 2px solid blue; /* 太さ スタイル 色 */
}
```

#### Border の指定方法

```css
/* 一括指定（よく使う） */
border: 2px solid blue; /* 太さ スタイル 色 */

/* 個別指定 */
border-width: 2px; /* 太さ */
border-style: solid; /* スタイル */
border-color: blue; /* 色 */

/* 一辺だけ */
border-top: 2px solid blue;
border-right: 2px solid blue;
border-bottom: 2px solid blue;
border-left: 2px solid blue;
```

#### Border のスタイル

```css
border-style: solid; /* 実線 ────── */
border-style: dashed; /* 破線 - - - - */
border-style: dotted; /* 点線 ・・・・ */
border-style: double; /* 二重線 ══════ */
border-style: none; /* なし */
```

---

### Padding と Margin の違い - 超重要！

```html
<style>
  .example1 {
    background-color: lightblue;
    padding: 20px; /* 内側の余白 */
  }

  .example2 {
    background-color: lightcoral;
    margin: 20px; /* 外側の余白 */
  }
</style>

<div class="example1">Padding: 背景色が余白にも付く</div>
<div class="example2">Margin: 背景色が余白に付かない（透明）</div>
```

**ポイント**：

- **Padding**：要素の**中**の余白（背景色が付く）
- **Margin**：要素の**外**の余白（透明）

**例え話**：

- **Padding**：額縁の中のマット（写真と額の間のスペース）
- **Margin**：額縁同士の間隔（壁に飾った時の間隔）

---

### ボックスモデルの実践例

```html
<style>
  .card {
    background-color: white;
    border: 2px solid lightgray;
    padding: 20px; /* 内側の余白 */
    margin: 20px; /* 外側の余白（カード同士の間隔） */
  }
</style>

<div class="card">
  <h2>カードタイトル</h2>
  <p>カードの内容がここに入ります。</p>
</div>

<div class="card">
  <h2>2つ目のカード</h2>
  <p>カード同士の間隔はmarginで調整。</p>
</div>
```

このコードで：

- `padding: 20px`：文字と枠線の間に 20px の余白
- `margin: 20px`：カード同士の間に 20px の余白
- `border: 2px solid lightgray`：2px の灰色の枠線

---

## display プロパティ - 要素の表示方法

Lesson 2 で学んだ「ブロックレベル」と「インラインレベル」、覚えてる？

CSS の `display` プロパティで、要素の表示方法を変更できるんだ！

### 復習：ブロックレベルとインラインレベル

| 種類               | 特徴                 | 例                   |
| ------------------ | -------------------- | -------------------- |
| ブロックレベル     | 横幅いっぱい、改行   | div, h1, p, ul, etc. |
| インラインレベル   | 内容分の幅、改行なし | span, a, strong, etc |
| インラインブロック | 内容分の幅、改行なし | img, button          |

### display の主な値

#### 1. `display: block`（ブロックレベル）

```css
.block-element {
  display: block;
  background-color: lightblue;
}
```

```html
<span class="block-element">これはspanだけど、blockに変更</span>
<span class="block-element">改行されて表示される</span>
```

**特徴**：

- ✅ 横幅いっぱいに広がる
- ✅ 必ず改行される
- ✅ width, height を指定できる
- ✅ margin, padding が全方向で効く

---

#### 2. `display: inline`（インラインレベル）

```css
.inline-element {
  display: inline;
  background-color: lightcoral;
}
```

```html
<div class="inline-element">これはdivだけど、inlineに変更</div>
<div class="inline-element">横に並ぶ</div>
```

**特徴**：

- ✅ 内容分の幅だけ
- ✅ 改行されない（横に並ぶ）
- ❌ width, height を指定できない
- ⚠️ margin, padding の上下が効きにくい

---

#### 3. `display: inline-block`（いいとこ取り！）⭐

```css
.inline-block-element {
  display: inline-block;
  background-color: lightgreen;
  width: 100px;
  height: 100px;
  margin: 10px;
}
```

```html
<div class="inline-block-element">1</div>
<div class="inline-block-element">2</div>
<div class="inline-block-element">3</div>
```

**特徴**：

- ✅ 横に並ぶ（inline の特徴）
- ✅ width, height を指定できる（block の特徴）
- ✅ margin, padding が全方向で効く（block の特徴）
- ✅ **ボタンやカードを横に並べる時に便利！**

---

### display の使い分け

| 値             | いつ使う？                           | 例                           |
| -------------- | ------------------------------------ | ---------------------------- |
| `block`        | 縦に並べたい、幅を指定したい         | セクション、カード（縦並び） |
| `inline`       | 文中の一部だけスタイルを変えたい     | リンク、強調テキスト         |
| `inline-block` | 横に並べたい、かつサイズを指定したい | ボタン、カード（横並び）     |

**Phase 2 では**、もっと強力な `flexbox` と `grid` を学ぶよ。それまでは `inline-block` を使おう！

---

## 🤖 バイブコーディング実践

CSS を AI に生成してもらう時のコツを学ぼう！

### AI への指示例

#### ⭕ 良い指示の例

```text
「以下のHTMLに、外部CSSファイルを作成してください：
- すべてのh1は青色、32px、中央寄せ
- pタグは灰色、16px、行間1.6
- .highlight クラスは黄色の背景色
- .card クラスは白い背景、灰色のボーダー、内側に20pxの余白、外側に20pxの余白」
```

**ポイント**：

- どの要素・クラスにどんなスタイルを付けるか明確
- 色、サイズ、余白などを具体的に指定
- 内部 CSS か外部 CSS かを明示

---

#### ❌ 曖昧な指示の例

```text
「いい感じのCSSを書いて」
```

**問題点**：

- どの要素にスタイルを付けるか不明
- 「いい感じ」が曖昧
- 具体的な数値がない

---

### 生成されたコードの読み方

AI が CSS を生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **セレクタが正しいか？**

   ```css
   /* 良い例 */
   .card {
     padding: 20px;
   }

   /* 悪い例：タイポがある */
   .cardd {
     padding: 20px;
   }
   ```

2. **プロパティと値が正しいか？**

   ```css
   /* 良い例 */
   color: blue;
   font-size: 16px;

   /* 悪い例：単位がない */
   font-size: 16; /* ❌ サイズには単位（px, em, remなど）が必要 */
   ```

   > **💡 詳しいサイズ単位（px, em, rem など）は Lesson 5 で学ぶよ！**
   > このレッスンでは `px`（ピクセル）を使おう。

3. **セミコロン（`;`）が付いているか？**

   ```css
   /* 良い例 */
   color: blue;
   font-size: 16px;

   /* 悪い例：セミコロンがない */
   color: blue
   font-size: 16px /* ❌ セミコロンがないと動かない */
   ```

4. **波括弧（`{}`）が閉じているか？**

   ```css
   /* 良い例 */
   .card {
     padding: 20px;
   }

   /* 悪い例：閉じ括弧がない */
   .card {
     padding: 20px;
   /* ❌ 閉じ括弧がない */
   ```

5. **色の指定が正しいか？**

   ```css
   /* 良い例 */
   color: blue; /* 色名を使う */
   background-color: lightgray; /* 色名を使う */

   /* 悪い例 */
   color: ブルー; /* ❌ 日本語は使えない */
   color: あお; /* ❌ 日本語は使えない */
   ```

   > **💡 詳しい色の指定方法は Lesson 5 で学ぶよ！**
   > このレッスンでは `blue`, `red`, `lightgray` などの色名を使おう。

---

### よくある問題と修正方法

#### 問題 1：スタイルが効いていない

**症状**：CSS を書いたのに、ブラウザで見ても何も変わらない

**原因 1**：セレクタのタイポ（スペルミス）

```css
/* CSS */
.highlight {
  background-color: yellow;
}
```

```html
<!-- HTML：クラス名が違う！ -->
<p class="hilight">この段落は黄色にならない</p>
```

**修正**：クラス名を正確に一致させる

```html
<p class="highlight">これで黄色になる！</p>
```

---

**原因 2**：外部 CSS ファイルのパスが間違っている

```html
<!-- 悪い例 -->
<link rel="stylesheet" href="style.css" />
<!-- styles.css なのに style.css と書いている -->

<!-- 良い例 -->
<link rel="stylesheet" href="styles.css" />
```

**修正**：ファイル名を正確に一致させる

---

**原因 3**：セミコロンがない

```css
/* 悪い例 */
.card {
  padding: 20px
  margin: 20px; /* ❌ 上の行にセミコロンがない */
}

/* 良い例 */
.card {
  padding: 20px; /* ✅ セミコロンを付ける */
  margin: 20px;
}
```

---

#### 問題 2：余白が思った通りにならない

**症状**：padding と margin を混同している

```css
/* 要素の外側に余白を取りたいのに... */
.card {
  padding: 20px; /* ❌ これは内側の余白 */
}

/* 正しくは */
.card {
  margin: 20px; /* ✅ 外側の余白 */
}
```

**覚え方**：

- **Padding**：パッド（クッション）= 中に詰める
- **Margin**：マージン（ページの余白）= 外の余白

---

#### 問題 3：色が反映されない

**症状**：`color` プロパティを使ったのに背景色が変わらない

```css
/* 悪い例 */
.card {
  color: lightblue; /* ❌ これは文字色 */
}

/* 背景色を変えたいなら */
.card {
  background-color: lightblue; /* ✅ 背景色 */
}
```

**違い**：

- `color`：文字の色
- `background-color`：背景の色

---

### カスタマイズポイント

AI が生成した CSS をカスタマイズする時、よくいじる箇所：

#### 1. 色の変更

```css
.card {
  background-color: lightblue; /* ← ここを変える */
  color: darkblue; /* ← ここを変える */
}
```

**試してみよう**：

- `lightblue` → `lightcoral`
- `darkblue` → `darkgreen`

---

#### 2. サイズの調整

```css
h1 {
  font-size: 32px; /* ← ここを変える */
}

.card {
  padding: 20px; /* ← ここを変える */
  margin: 20px; /* ← ここを変える */
}
```

**試してみよう**：

- `32px` → `40px`（大きくなる）
- `20px` → `10px`（小さくなる）

---

#### 3. 余白の調整

```css
.card {
  padding: 20px; /* 内側の余白 */
  margin: 20px; /* 外側の余白 */
}
```

**試してみよう**：

- 値を増やす → 余白が広がる
- 値を減らす → 余白が狭まる

---

## 💪 演習

学んだ内容を実践してみよう！基礎編から応用編まで、段階的に練習できるよ。

👉 **[演習問題に挑戦する](exercises/README.md)**

演習には以下の内容が含まれているよ：

- **基礎編**：内部 CSS、クラスセレクタ、ボックスモデル
- **応用編**：外部 CSS、AI で CSS 生成、display プロパティ

各演習には解答例と詳しい解説も用意されているので、安心して取り組めるよ！

---

## 📝 まとめ

このレッスンで学んだこと：

- ✅ **CSS とは何か**を理解した

  - HTML（構造）と CSS（装飾）の役割分担
  - Word/Pages と同じ感覚で文書を装飾できる

- ✅ **CSS の 3 つの書き方**を学んだ

  - インライン CSS：ほぼ使わない
  - 内部 CSS：学習・プロトタイプに便利
  - 外部 CSS：実務で推奨（ほとんどこれ！）

- ✅ **セレクタの基本**を覚えた

  - 要素セレクタ：すべてのタグに適用
  - クラスセレクタ：特定のクラスに適用（最もよく使う！）
  - ID セレクタ：ページに 1 つだけの要素に適用

- ✅ **ボックスモデル**を理解した

  - Content（内容）
  - Padding（内側の余白）
  - Border（枠線）
  - Margin（外側の余白）

- ✅ **display プロパティ**を学んだ

  - `block`：縦並び、幅指定可能
  - `inline`：横並び、幅指定不可
  - `inline-block`：横並び、幅指定可能（いいとこ取り！）

- ✅ **AI への指示の出し方**が分かった

  - 具体的に、要素とスタイルを明示する
  - 色、サイズ、余白を数値で指定する

- ✅ **生成されたコードのチェック方法**を学んだ
  - セレクタ、プロパティ、値の確認
  - セミコロン、括弧の確認
  - よくある問題の修正方法

### 重要なポイント

**CSS は、HTML に「見た目」を与える魔法の言語！** 🎨✨

- HTML と CSS を分離することで、メンテナンスしやすくなる
- ボックスモデルを理解すれば、レイアウトが自由自在
- クラスセレクタを使いこなせば、複雑なデザインも OK
- AI に具体的に指示すれば、望み通りの CSS が生成される

**まるで、白黒の文書に色を塗って、美しい作品に仕上げるみたい！** 🖌️

---

## 🚀 次のステップ

CSS の基礎が分かったら、次は**テキストのスタイリング**を極めよう！

次のレッスンでは：

- フォントの種類やサイズを自由に変更
- 文字の装飾（太字、斜体、下線）
- テキストの配置（左寄せ、中央、右寄せ、両端揃え）
- 行間や文字間隔の調整
- 実践的なスタイリングテクニック

**準備は OK？Lesson 5 へ進もう！** 🚀

👉 [Lesson 5: テキストスタイリングへ進む](../05-text-styling/README.md)

---

**Let's vibe and code!** 🎉

CSS でページを美しく装飾しよう！
