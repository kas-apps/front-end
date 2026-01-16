---
marp: true
theme: udemy
lang: ja
paginate: true
# header: "バイブコーダーに贈るフロントエンド開発入門（Phase 1）"
# footer: "© 2026 Kazuhiko Sugimoto"
---

<!-- _class: center -->
<!-- _header: "" -->
<!-- _paginate: skip -->

# バイブコーダーに贈るフロントエンド開発入門

## Phase 1： HTML/CSS 基礎編

---

## Phase 1 で学ぶこと

文書作成アプリのように**実際に HTML/CSS で文書を作る**方法を学ぶよ！

### Phase 1 のゴール

- 見出しや段落を使った構造的な文書が作れる
- リストや表を使って情報を整理できる
- 画像やリンクを含む文書が作れる
- CSS で文書を美しくスタイリングできる
- セマンティックな HTML で意味のある文書構造を作れる

###### AI が生成した HTML/CSS を「構造として正しいか」判断できる

---

## Phase 1（HTML/CSS 基礎編）のレッスン一覧 📚

### Lesson 1: HTML の基本構造 🏛️

- HTML ドキュメントの基本構造

### Lesson 2: HTML 基本要素 📝

- 見出し、段落、リスト、リンク、画像、表、コンテナ要素

### Lesson 3: セマンティック HTML 🏠

- セクション要素（header, main, footer, article, section, nav, aside）

### Lesson 4: CSS の基礎 🎨

- CSS の基本的な書き方

### Lesson 5: テキストスタイリング ✍️

- フォント関連のプロパティ

---

## Lesson 1: HTML の基本構造

**学習目標**：HTML ドキュメントの基本構造を理解し、最初の HTML ファイルを作成できるようになる

### なぜ HTML の基本構造を学ぶの？

文書作成アプリで作成した文書には「タイトル」「本文」「プロパティ」があるよね？
HTML も同じで、**決まった基本構造**があるんだ。

この構造を理解すると：

- ブラウザが正しくページを表示できる
- 検索エンジンが内容を理解できる
- AI に指示を出す時に、何が必要か分かる

---

## HTML ドキュメントの基本構造

### 最小限の HTML ファイル

`index.html`

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>私の最初のページ</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>これが私の最初のHTMLページです。</p>
  </body>
</html>
```

**たったこれだけ！** でも、各部分には重要な役割があるんだ。

---

### `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

- **役割**：これは HTML5 ドキュメントだよ、とブラウザに宣言する
- **位置**：ファイルの一番最初
- **必須度**：⭐⭐⭐⭐⭐（絶対必要！）

### `<html>`

```html
<html lang="ja">
  <!-- ここに全ての内容が入る -->
</html>
```

- **役割**：HTML ドキュメント全体を囲む大きな箱
- **lang 属性**：このページの言語を指定（`ja`=日本語、`en`=英語）
- **必須度**：⭐⭐⭐⭐⭐（絶対必要！）

---

### `<head>`

```html
<head>
  <meta charset="UTF-8" />
  <title>私の最初のページ</title>
</head>
```

- **役割**：ページの「設定情報」を書く場所
- **表示される？**：❌ ブラウザには表示されない
- **何を書く？**：文字コード、タイトル、CSS のリンクなど

### `<meta charset="UTF-8">`

```html
<meta charset="UTF-8" />
```

- **役割**：文字コードの指定（日本語が正しく表示されるために必要）
- **UTF-8**：世界中のあらゆる文字に対応できる文字コード
- **必須度**：⭐⭐⭐⭐⭐（これがないと文字化けする！）

---

### `<title>`

```html
<title>私の最初のページ</title>
```

- **役割**：ブラウザのタブに表示されるタイトル
- **表示場所**：ブラウザのタブ、ブックマーク、検索結果
- **必須度**：⭐⭐⭐⭐⭐（SEO にも超重要！）

### `<body>`

```html
<body>
  <h1>Hello, World!</h1>
  <p>これが私の最初のHTMLページです。</p>
</body>
```

- **役割**：実際にブラウザに表示される内容を書く場所
- **表示される？**：ここに書いたものが全部表示される
- **何を書く？**：見出し、段落、画像、リンクなど

---

## Lesson 1: HTML の基本構造まとめ

**HTML の基本構造**を理解した

- `<!DOCTYPE html>`: HTML5 ドキュメント
- `<html>`: HTML ドキュメント全体を囲む
- `<head>`: ページの「設定情報」を書く場所
- `<meta>`: ページの設定
- `<title>`: ページのタイトル
- `<body>`: 実際にブラウザに表示される内容

---

## Lesson 2: HTML 基本要素 📝

**学習目標**：HTML の基本的な要素を理解し、コンテンツを構造化できるようになる

### なぜ HTML 基本要素を学ぶの？

文書作成アプリで文書を作る時のように：

- 見出しを付ける
- 段落を書く
- 箇条書きで整理する
- 画像を入れる
- リンクを張る

**HTML でも全く同じことができる！** ✨

---

## 見出し：`<h1>`〜`<h6>`

文書の構造を作る重要な要素

```html
<h1>最も大きな見出し</h1>
<h2>2番目に大きな見出し</h2>
<h3>3番目に大きな見出し</h3>
<h4>4番目に大きな見出し</h4>
<h5>5番目に大きな見出し</h5>
<h6>最も小さな見出し</h6>
```

- **h1**：ページ全体のタイトル（ページに 1 つだけ）
- **h2**：大きなセクションの見出し
- **h3**：h2 の中の小見出し
- **h4 〜 h6**：さらに細かい階層（あまり使わない）

---

## 段落：`<p>`

文章のまとまりを表す

```html
<p>これが1つの段落です。</p>
<p>これは別の段落です。段落と段落の間には、自動的に余白が入ります。</p>
```

```html
<p>
  段落の中で改行したい時は、普通に改行しても表示には反映されません。
  ブラウザは自動的に1行にまとめます。
</p>

<!-- 改行したい場合は<br>タグを使う -->
<p>
  1行目<br>
  2行目<br>
  3行目
</p>
```

---

## 順序なしリスト:`<ul>`, `<li>`

箇条書きリストを作る時に使う

```html
<ul>
  <li>リンゴ</li>
  <li>バナナ</li>
  <li>オレンジ</li>
</ul>
```

表示結果：

```text
• リンゴ
• バナナ
• オレンジ
```

---

## 順序付きリスト:`<ol>`, `<li>`

番号付きリストを作る時に使う

```html
<ol>
  <li>材料を準備する</li>
  <li>鍋に水を入れる</li>
  <li>沸騰させる</li>
</ol>
```

表示結果：

```text
1. 材料を準備する
2. 鍋に水を入れる
3. 沸騰させる
```

---

## リンク：`<a>`

同じサイト内の他のページや、他サイトへのリンクを作る

```html
<!-- 同じサイト内へのリンク -->
<a href="about.html">このサイトのaboutページへ</a>
<!-- ページ内リンク -->
<a href="#section1">このページの特定の場所へ</a>

<!-- 他サイトへのリンク -->
<a href="https://example.com">他サイトへのリンク</a>
<!-- 新しいタブで開く -->
<a href="https://example.com" target="_blank">新しいタブで開く</a>
```

- **href 属性**：リンク先の URL
- **リンクテキスト**：クリックできる部分
- **target="\_blank"**：リンクを新しいタブで開く

---

## 画像：`<img>`

ページ内に画像を表示する

```html
<img src="cat.jpg" alt="庭で遊ぶ茶色い猫" />
```

- **src 属性**：画像ファイルのパス
- **alt 属性**：画像の説明文（超重要！）

### なぜ alt 属性が重要？

1. **アクセシビリティ**：視覚障害のある人がスクリーンリーダーで内容を理解できる
2. **SEO**：検索エンジンが画像の内容を理解できる
3. **エラー時**：画像が表示できない時に説明文が表示される

---

## 補足：相対パスと絶対パス

`<a>`の href 属性、`<img>`の src 属性は、相対パスと絶対パスがある

### 相対パス

リンク元ページからの相対的な位置

`./`: 同じフォルダ内を意味する(省略可)（例：`./photo.jpg`）
`../`: 上のフォルダを意味する（例：`../image/photo.jpg`）

### 絶対パス

絶対的な位置（例：`https://example.com/photo.jpg`）

---

## テーブル：`<table>`

表を作る時に使う

<div class="flex gap-x-1">
<div class="flex-1">

```html
<table>
  <thead>
    <tr>
      <th>名前</th>
      <th>年齢</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>田中太郎</td>
      <td>25</td>
    </tr>
    <tr>
      <td>鈴木花子</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

</div>
<div class="flex-1">

**要素の説明**：

- `<table>`：表全体を囲む
- `<thead>`：表のヘッダー部分
- `<tbody>`：表のボディ部分
- `<tr>`：1 行（table row）
- `<th>`：見出しセル（table header）
- `<td>`：データセル（table data）

</div>

</div>

---

## コンテナ要素：`<div>`と`<span>`

これまで学んだ要素（`<h1>`, `<p>`, `<ul>`, `<img>`など）は、それぞれ「見出し」「段落」「リスト」「画像」という**意味**を持っていたね。

でも、時には**単にグループ化したい**、**スタイリングのために囲みたい**という場面がある。そんな時に使うのが `<div>` と `<span>` だよ！

**特徴**：

- 特定の意味を持たない（汎用的なコンテナ）
- レイアウトやスタイリングのために使う
- CSS でデザインを適用する時に便利

---

## `<div>`： ブロックレベルのコンテナ

複数の要素をまとめる「箱」として使う

```html
<div>
  <h2>商品情報</h2>
  <p>価格：1,000円</p>
  <p>在庫あり</p>
</div>
```

**特徴**：

- 改行されて表示される（ブロックレベル要素）
- 幅いっぱいに広がる
- 上下に余白が入る

---

## `<span>`： インラインレベルのコンテナ

テキストの一部をグループ化する時に使う

```html
<p>この<span>部分だけ</span>に色を付けたい</p>
```

**特徴**：

- 改行されない（インラインレベル要素）
- テキストの流れの中で使える
- 必要な幅だけ占有

---

## `<div>`と`<span>`の違い

| 項目   | div                    | span                       |
| ------ | ---------------------- | -------------------------- |
| レベル | ブロックレベル         | インラインレベル           |
| 改行   | 改行される                 | 改行されない                   |
| 幅     | 親要素いっぱい         | 内容分だけ                 |
| 用途   | セクションのグループ化 | テキストの一部をグループ化 |

##### 表：`<div>`と`<span>`の違い

---

## Lesson 2: HTML 基本要素まとめ

このレッスンで学んだこと：

- **見出し（h1 〜 h6）** で文書を構造化
- **段落（p）**と**改行（br）** で文章を書く
- **リスト（ul, ol, li）** で情報を整理
- **リンク（a）** で他のページに繋ぐ
- **画像（img）** でビジュアルを追加
- **テーブル（table）** で表を追加
- **コンテナ要素（div, span）** を理解した

---

## Lesson 3: セマンティック HTML

**学習目標**：HTML の「意味」を理解し、適切なセマンティック要素を使ってドキュメント構造を作れるようになる

### なぜセマンティック HTML を学ぶの？

セマンティック HTML は**見た目には何も影響がない**けれど、見た目以外の大きなメリットがあるんだ！

セマンティック HTML を使うメリット：

- 検索エンジンが内容を理解できる 🔍
- アクセシビリティが向上する ♿
- コードが読みやすくなる 📖

---

## セマンティック要素の基礎知識

セマンティック（Semantic） = **意味のある**

意味のない箱ではなく、**何の箱か**が分かるタグのこと

```html
<!-- divは意味が分からない -->
<div>コンテンツ</div>

<header>ヘッダー</header>
<main>メインコンテンツ</main>
<footer>フッター</footer>
```

セマンティック要素を使っても、ブラウザでの表示は **`<div>`と同じ**

---

## `<header>` - ヘッダー

```html
<header>
  <h1>私のウェブサイト</h1>
  <p>素敵なサイトへようこそ</p>
</header>
```

- **役割**：ページやセクションの導入部分
- **含むもの**：サイトタイトル、ロゴ、キャッチフレーズなど
- **位置**：ページの上部、または記事の上部

⚠️ **注意：`<head>`と混同しやすい**

---

## `<nav>` - ナビゲーション

```html
<nav>
  <ul>
    <li><a href="/">ホーム</a></li>
    <li><a href="/about">私について</a></li>
    <li><a href="/blog">ブログ</a></li>
    <li><a href="/contact">お問い合わせ</a></li>
  </ul>
</nav>
```

- **役割**：サイト内の主要なリンク集
- **含むもの**：メインメニュー、パンくずリスト
- **位置**：ヘッダー内、サイドバー、フッターなど

---

## `<main>` - メインコンテンツ

```html
<main>
  <h1>ページのメインタイトル</h1>
  <p>ここがページの主要な内容です。</p>
</main>
```

- **役割**：ページの主要コンテンツ
- **ルール**：**1 ページに 1 つだけ**
- **含まないもの**：ヘッダー、フッター、サイドバーなど（繰り返し使う要素）

---

## `<article>` - 独立したコンテンツ

```html
<article>
  <h2>ブログ記事のタイトル</h2>
  <p>投稿日：2026年1月15日</p>
  <p>記事の本文がここに入ります...</p>
</article>
```

- **役割**：単体で意味が完結するコンテンツ
- **使う場面**：ブログ記事、ニュース記事、商品レビュー、コメント
- **判断基準**：「これだけを別のサイトに持っていっても意味が通じる？」→ YES なら`<article>`

---

## `<section>` - セクション

```html
<section>
  <h2>私のスキル</h2>
  <p>HTML、CSS、JavaScriptが得意です。</p>
</section>
<section>
  <h2>趣味</h2>
  <p>読書と映画鑑賞が好きです。</p>
</section>
```

- **役割**：テーマごとのまとまり
- **必須**：原則として**見出し（h2-h6）を含む**
- **使う場面**：章立て、トピックごとの区切り

**`<article>`との違い**：

- `<article>`：単独で完結する（記事、投稿）
- `<section>`：大きな文書の一部（章、セクション）

---

## `<aside>` - 補足情報

```html
<aside>
  <h3>関連記事</h3>
  <ul>
    <li><a href="/post1">関連記事1</a></li>
    <li><a href="/post2">関連記事2</a></li>
  </ul>
</aside>
```

- **役割**：メインコンテンツに関連する補足情報
- **使う場面**：サイドバー、関連リンク、用語解説、広告
- **特徴**：なくてもメインコンテンツは理解できる

---

## `<footer>` - フッター

```html
<footer>
  <p>&copy; 2026 私のウェブサイト. All rights reserved.</p>
  <nav>
    <a href="/privacy">プライバシーポリシー</a>
    <a href="/terms">利用規約</a>
  </nav>
</footer>
```

- **役割**：ページやセクションの終わり・補足情報
- **含むもの**：著作権表示、連絡先、関連リンク
- **位置**：ページの最下部、または記事の下部

---

## セマンティック要素とコンテナ要素の使い分け

#### 質問 1：「これは何？」という意味がある？

- YES → セマンティック要素を使う（**header**, **article** など）
- NO → 次の質問へ

#### 質問 2：スタイリングやレイアウトのため？

- YES → **div** または **span** で OK
- NO → そもそも要素が不要かも

---

## Lesson 3: セマンティック HTML まとめ 📝

- **セマンティック HTML の重要性**を理解した
- **主要なセマンティック要素**を覚えた
- **div/span との使い分け**が分かった
- **実践的な構造設計**ができるようになった

---

## Lesson 4: CSS の基礎 🎨

**学習目標**：CSS の基本的な書き方を理解し、HTML に装飾を加えられるようになる

### なぜ CSS を学ぶの？

Phase 0 で学んだように、**HTML は構造**、**CSS は装飾**だったよね！

文書作成アプリで文書を作る時、こんなことをしたことがあると思う：

- 見出しを青色にする
- 段落の文字サイズを変える
- 余白を調整して読みやすくする
- 背景色を付ける

###### CSS は、Web ページでこれと全く同じことをするための技術なんだ！

---

## CSS：Cascading Style Sheets とは何か？

CSS の仕事は、HTML で作った構造に**見た目を与えること**

<div class="flex items-center gap-x-1">
<div class="flex-1">

```html
<!-- HTML：構造だけ -->
<h1>ようこそ！</h1>
<p>これは私のウェブサイトです。</p>
```

</div>
<div class="flex-1">

HTML だけだとブラウザのデフォルトスタイル（黒い文字、普通のサイズ）で表示される。

</div>
</div>
<div class="flex items-center gap-x-1">
<div class="flex-1">

```css
/* CSS：装飾を追加 */
h1 {
  color: blue;
  font-size: 36px;
}

p {
  color: gray;
  font-size: 18px;
  line-height: 1.6;
}
```

</div>
<div class="flex-1">

CSS を追加すると、見出しが青色で大きくなり、段落が読みやすくなる！

</div>
</div>

---

## なぜ HTML と CSS を分けるの？

構造と装飾を分けることで：

- **デザイン変更が楽**：CSS だけ変えれば、HTML はそのまま
- **メンテナンスしやすい**：1 つの CSS で複数のページを管理

例え話：建物と内装

- **HTML**：建物の構造（柱、壁、部屋の配置）
- **CSS**：内装・インテリア（壁紙、照明、家具の色）

---

## CSS の 3 つの書き方

CSS を HTML に適用する方法は 3 つあるよ。

- インライン CSS（あまり推奨されない）
- 内部 CSS（学習・プロトタイプに便利）
- 外部 CSS（実務で最も推奨）

###### それぞれの特徴を理解し、メリット・デメリットを把握しよう！

---

## インライン CSS

HTML タグに直接 `style` 属性で書く方法。

```html
<h1 style="color: blue; font-size: 36px;">ようこそ！</h1>
<p style="color: gray; font-size: 18px;">私のウェブサイトです。</p>
```

#### メリット

- すぐに試せる
- その要素だけにピンポイントで適用できる

#### デメリット

<div class="demerit">

- 同じスタイルを何度も書く必要がある（非効率）
- HTML と CSS が混ざって読みづらい
- 変更が大変（全部の要素を変える必要がある）

</div>

---

## 内部 CSS

HTML ファイルの `<head>` 内に `<style>` タグで書く方法

<div class="flex items-start gap-x-1">
<div class="flex-1">

```html
<head>
  <meta charset="UTF-8" />
  <title>私のページ</title>
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
```

</div>
<div class="flex-2">

#### メリット

- HTML と CSS が 1 ファイルで完結
- すべての `h1` や `p` に一括適用できる
- プロトタイプや簡単なページに向いている

#### デメリット

<div class="demerit">

- 複数のページに同じスタイルを適用できない
- 一つのファイルが長くなり、管理しづらい

</div>
</div>
</div>

---

## 外部 CSS

CSS を別ファイル（`.css`）に分けて、HTML から読み込む方法

<div class="flex gap-x-1">
<div class="flex-1">

#### `index.html`

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

</div>
<div>

#### `styles.css`

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

</div>
</div>

---

## 外部 CSS（続き）

#### メリット

- **複数のページで同じ CSS を使い回せる**
- HTML と CSS が分離され管理しやすい
- CSS ファイルを変更するだけで、全ページのデザインが変わる

#### デメリット

<div class="demerit">

- ファイルが 2 つになる（でも、実務では普通）

</div>

</div>
</div>

---

## CSS の 3 つの書き方まとめ

| 方法       | 使うべき場面                       | 推奨度     |
| ---------- | ---------------------------------- | ---------- |
| インライン | ほぼない（特殊な事情がある時のみ） | ⭐         |
| 内部 CSS   | 学習、プロトタイプ、1 ページだけ   | ⭐⭐⭐     |
| 外部 CSS   | 実務、複数ページのサイト           | ⭐⭐⭐⭐⭐ |

##### 表：CSS の 3 つの書き方

###### まず内部 CSS で基本を学んで、慣れてきたら外部 CSS に移行しよう！

---

## CSS の基本構文

CSS の書き方には決まった「型」があるよ。これを覚えれば、どんなスタイルも書けるようになる！

<div class="flex gap-x-1">
<div class="flex-1">

### CSS の構造

```css
セレクタ {
  プロパティ: 値;
  プロパティ: 値;
}
```

例：

```css
h1 {
  color: blue;
  font-size: 36px;
}
```

</div>
<div>

### 各部分の役割

**セレクタ（Selector）**：どの要素にスタイルを適用するか

- `h1` = すべての `<h1>` タグ

**プロパティ（Property）**：何を変更するか

- `color` = 文字色
- `font-size` = 文字サイズ

**値（Value）**：どう変更するか

- `blue` = 青色
- `36px` = 36 ピクセル

</div>
</div>

---

## セレクタの基本

**どの要素にスタイルを適用するか**を指定するのがセレクタだよ。基本的な 3 種類を覚えよう！

- 要素セレクタ（タグセレクタ）
- クラスセレクタ（最もよく使う！）⭐
- ID セレクタ（ページに 1 つだけ）

---

## 要素セレクタ（タグセレクタ）

すべての特定タグ（p, h1 など）にスタイルを適用する。

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
/* すべての <h1> タグ */
h1 {
  color: blue;
  font-size: 32px;
}

/* すべての <p> タグ */
p {
  color: gray;
  font-size: 16px;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<h1>これは青色で32px</h1>
<p>これは灰色で16px</p>
<p>これも灰色で16px</p>
```

</div>

---

## クラスセレクタ

**特定のクラスを持つ要素**にスタイルを適用する。

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
/* クラス名は . で始める */
.highlight {
  background: yellow;
  font-weight: bold;
}
.important {
  color: red;
  font-size: 20px;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<p>これは普通の段落</p>

<p class="highlight">
  この段落は黄色の背景
</p>

<p class="important">
  この段落は赤色で大きい
</p>
```

</div>
</div>

#### クラスの特徴

- **同じクラスを複数の要素に付けられる**
- **1 つの要素に複数のクラスを付けられる**

---

## ID セレクタ

**特定の ID を持つ要素**にスタイルを適用する。

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
/* ID名は # で始める */
#header {
  background: navy;
  padding: 20px;
}
#main-title {
  font-size: 48px;
  color: white;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<header id="header">
  <h1 id="main-title">
    メインタイトル
  </h1>
</header>
```

</div>
</div>

#### ID の特徴

<div class="caution">

- **1 つの ID は、ページ内で 1 回しか使えない**
- クラスより優先度が高い

</div>

---

## クラスと ID の使い分け

| 特徴             | クラス（class）          | ID                   |
| ---------------- | ------------------------ | -------------------- |
| セレクタ記号     | `.class-name`            | `#id-name`           |
| 使用回数         | 何度でも OK              | 1 ページに 1 回だけ  |
| 複数適用         | 1 要素に複数クラス OK    | 1 要素に 1 ID のみ   |
| 推奨される用途   | スタイリング全般         | ページ内の唯一の要素 |
| 使用頻度（実務） | ⭐⭐⭐⭐⭐（多い） | ⭐⭐（少ない）     |

##### 表：クラスと ID の使い分け

###### 迷ったらクラスを使おう！

---

## ボックスモデル - CSS の最重要概念

Web ページのすべての要素は、**箱（ボックス）** として扱われるんだ。この「箱の仕組み」を理解すると、レイアウトが自由自在になるよ！

### ボックスモデルとは？

すべての HTML 要素は、以下の 4 つの層で構成されている：

```test
┌─────────────────────────────────┐
│    Margin                       │  マージン（外側の余白）
│  ┌───────────────────────────┐  │
│  │   Border                  │  │  ボーダー（枠線）
│  │  ┌─────────────────────┐  │  │
│  │  │  Padding            │  │  │  パディング（内側の余白）
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │  Content      │  │  │  │  コンテンツ（文字や画像）
│  │  │  │               │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## ボックスモデルの**例え話**

壁に複数の絵画が飾ってある様子：

<div class="flex items-center">
<div class="flex-1">

![gallery](assets/gallery.png)

</div>
<div>

- **border**：額縁
- **content**：実際の絵画
- **padding**：絵画と額の間の空白
- **margin**：額縁同士の間隔

</div>
</div>

---

## Border（ボーダー）- 枠線

**要素の周りの枠線**

```css
.box {
  border: 2px solid blue; /* 太さ スタイル 色 */
}
```

```html
<div class="box">この文字が枠線で囲まれる</div>
```

**枠線のスタイル**

```css
border-style: solid;  /* 実線 ────── */
border-style: dashed; /* 破線 - - - - */
border-style: dotted; /* 点線 ・・・・ */
border-style: double; /* 二重線 ══════ */
border-style: none;   /* なし */
```

---

### Border の指定方法

```css
/* 一括指定（よく使う） */
border: 2px solid blue; /* 太さ スタイル 色 */

/* 個別指定 */
border-width: 2px;   /* 太さ */
border-style: solid; /* スタイル */
border-color: blue;  /* 色 */

/* 一辺だけ */
border-top: 2px solid blue;    /* 上 */
border-right: 2px solid blue;  /* 右 */
border-bottom: 2px solid blue; /* 下 */
border-left: 2px solid blue;   /* 左 */
```

---

## Padding（パディング）- 内側の余白

**要素の中身と枠線の間の余白**。背景色が付く領域。

```css
.box {
  background: lightblue;
  padding: 20px; /* 上下左右すべて20px */
}
```

```html
<div class="box">この文字と枠の間に余白ができる</div>
```

---

### Padding の指定方法

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

## Margin（マージン）- 外側の余白

**要素と他の要素の間の余白**。透明で、背景色は付かない。

```css
.box {
  background: lightblue;
  margin: 20px; /* 上下左右すべて20px */
}
```

```html
<div class="box">この要素の外側に余白ができる</div>
<div class="box">2つ目の要素との間に余白</div>
```

---

### Margin の指定方法

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

### ボックスモデルの実践例

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
.card {
  background: white;

  /* 枠線 */
  border: 2px solid lightgray;

  /* 内側の余白 */
  padding: 20px;

  /* 外側の余白 */
  margin: 20px;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<div class="card">
  <h2>カードタイトル 1</h2>
  <p>カードの内容がここに入ります</p>
</div>

<div class="card">
  <h2>カードタイトル 2</h2>
  <p>カードの内容がここに入ります</p>
</div>
```

</div>
</div>

---

## display プロパティ - 要素の表示方法

Lesson 2 で学んだ「ブロックレベル」と「インラインレベル」は、  
CSS の`display`プロパティで変更できる

### ブロックレベルとインラインレベル

| 種類               | 特徴                 | 例                   |
| ------------------ | -------------------- | -------------------- |
| ブロックレベル     | 横幅いっぱい、改行   | div, h1, p, ul, etc. |
| インラインレベル   | 内容分の幅、改行なし | span, a, strong, etc |
| インラインブロック | 内容分の幅、改行なし | img, button          |

##### 表：ブロックレベルとインラインレベル

---

## `display: block`（ブロックレベル）

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
.block {
  display: block;
  background: lightblue;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<span class="block">
  これはspanだけど、blockに変更
</span>
<span class="block">
  改行されて表示される
</span>
```

</div>
</div>

**特徴**：

- 横幅いっぱいに広がり、必ず改行される
- 幅（width）と高さ（height）が指定できる
- margin, padding が全方向で効く

---

## `display: inline`（インラインレベル）

<div class="flex gap-x-1">
<div class="flex-1">

**`css`**

```css
.inline {
  display: inline;
  background: lightcoral;
}
```

</div>
<div class="flex-1">

**`html`**

```html
<div class="inline">
  これはdivだけど、inlineに変更
</div>
<div class="inline">横に並ぶ</div>
```

</div>
</div>

**特徴**：

- 内容分の幅だけ
- 改行されない（横に並ぶ）
- width, height を指定できない
- margin, padding の上下が効かない

---

## `display: inline-block`（インラインブロック）

<div class="flex gap-x-1">
<div class="flex-1">

```css
.inline-block {
  display: inline-block;
  background: lightgreen;
  width: 100px;
  height: 100px;
  margin: 10px;
}
```

</div>
<div class="flex-1">

```html
<div class="inline-block">1</div>
<div class="inline-block">2</div>
<div class="inline-block">3</div>
```

</div>
</div>

**特徴**：

- 横に並ぶ（inline の特徴）
- width, height を指定できる（block の特徴）
- margin, padding が全方向で効く（block の特徴）

---

## Lesson 4: CSS の基礎まとめ

このレッスンで学んだこと：

- **CSS とは何か**を理解した
- **CSS の 3 つの書き方**を学んだ
- **セレクタの基本**を覚えた
- **ボックスモデル**を理解した
- **display プロパティ**を学んだ

---

## Lesson 5: テキストスタイリング

**学習目標**：テキストの見た目を自由に変更できるようになる

### なぜテキストスタイリングを学ぶの？

テキストを**美しく、読みやすく、魅力的にする**ことで、伝えたいことがより明確にできる

---

## テキストスタイリングでできること

- 色を自由に変更（16 進数カラーコード、RGB など）
- フォントを変更（ゴシック、明朝、Web フォントなど）
- 文字サイズを柔軟に調整（px, em, rem など）
- 太字、斜体、下線などの装飾
- 行間や文字間隔を調整して読みやすく
- 中央寄せ、右寄せなどの配置

###### まるで、文書作成アプリのフォント設定みたい！

---

## 色の指定方法

ここまでは色名（`blue`, `red` など）を使ったけど、実はもっと細かく色を指定する方法があるんだ！

- 色名（Color Name）- 基本
- 16 進数カラーコード（Hex Code）- 実務で最も使う！⭐
- RGB / RGBA - 透明度も指定できる！

---

## 色名（Color Name）

英語の色名を使う方法。シンプルで分かりやすい！

| 色名        | 見た目 | 用途             |
| ----------- | ------ | ---------------- |
| `red`       | 赤     | 警告、エラー     |
| `blue`      | 青     | リンク、見出し   |
| `green`     | 緑     | 成功メッセージ   |
| `yellow`    | 黄     | 警告、ハイライト |
| `gray`      | 灰色   | 補足テキスト     |
| `white`     | 白     | 背景、文字       |
| `black`     | 黒     | 文字             |

##### 表：よく使う色

---

## 16 進数カラーコード（Hex Code）

`#` で始まる 6 桁（または 3 桁）の英数字で色を指定する方法。

<div class="flex">
<div class="flex-1">

#### 仕組み

**形式**：`#RRGGBB`

- **RR**：赤（Red）の明るさ（00〜FF）
- **GG**：緑（Green）の明るさ（00〜FF）
- **BB**：青（Blue）の明るさ（00〜FF）

**値の範囲**：

- `00`：暗い（0）
- `FF`：明るい（255）

</div>
<div class="flex-1">

#### カラーコード例

```css
/* 基本色 */
#000000 /* 黒（全部暗い） */
#ffffff /* 白（全部明るい） */
#ff0000 /* 赤（赤だけ明るい） */
#00ff00 /* 緑（緑だけ明るい） */
#0000ff /* 青（青だけ明るい） */

/* 実用的な色 */
#3b82f6 /* 青色（Tailwind CSS の blue-500） */
#ef4444 /* 赤色（Tailwind CSS の red-500） */
#10b981 /* 緑色（Tailwind CSS の green-500） */
#f3f4f6 /* 薄い灰色（背景に最適） */
#1f2937 /* 濃い灰色（ダークモード） */
```

</div>
</div>

---

## 3. RGB / RGBA - 透明度も指定できる！

赤・緑・青の光の三原色を 0〜255 の数値で指定する方法。

<div class="flex">
<div>

### RGB / RGBA

**形式**：
`rgb(赤, 緑, 青)`
`rgba(赤, 緑, 青, 透明度)`

- **赤**：0〜255
- **緑**：0〜255
- **青**：0〜255
- **透明度**：0（透明）〜 1（不透明）

</div>
<div class="flex-1">

#### RGB / RGBA 例

```css
/* 基本色 */
rgb(0, 0, 0)       /* 黒 */
rgb(255, 255, 255) /* 白 */
rgb(255, 0, 0)     /* 赤 */

/* 透明度付き */
rgba(0, 0, 0, 0.5)       /* 半透明の黒（オーバーレイに最適） */
rgba(255, 255, 255, 0.9) /* ほぼ不透明の白 */
rgba(59, 130, 246, 0.2)  /* 薄い青（ハイライト背景） */
```

</div>
</div>

---

## 色の指定方法まとめ

| 方法    | 例                         | 透明度 | 実務での使用頻度 |
| ------- | -------------------------- | ------ | ---------------- |
| 色名    | `blue`                     | ❌     | ⭐⭐             |
| 16 進数 | `#3b82f6`                  | ❌     | ⭐⭐⭐⭐⭐       |
| RGB     | `rgb(59, 130, 246)`        | ❌     | ⭐⭐             |
| RGBA    | `rgba(59, 130, 246, 0.5)`  | ✅     | ⭐⭐⭐⭐         |

##### 表：色の指定方法

**おすすめの使い分け**：

- **学習中**：色名（`blue`, `red`）
- **実務（不透明）**：16 進数（`#3b82f6`）
- **実務（透明度付き）**：RGBA（`rgba(59, 130, 246, 0.5)`）

---

## サイズ単位

ここまでは `px`（ピクセル）を使ったけど、実は他にも色々な単位があるんだ！

- px（ピクセル）- 基本 ⭐
- em - 親要素基準の相対単位
- rem（Root EM）- ルート要素基準の相対単位 ⭐
- %（パーセント）- 親要素基準

---

## px（ピクセル）⭐

画面のドット数で指定する絶対単位。

```css
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}
```

**特徴**：

- **分かりやすい**（1px = 画面の 1 ドット）
- **正確**（指定した通りのサイズになる）
- **拡大・縮小に弱い**（ユーザーがサイズを変更しても変わらない）

---

## em - 親要素基準の相対単位

**親要素の font-size を基準**にした相対単位。

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em; /* 16px × 2 = 32px */
}
```

**計算方法**

親要素の font-size × em の値 = 実際のサイズ

---

### rem（Root EM）- ルート要素基準の相対単位 ⭐

**ルート要素（`<html>`）の font-size を基準**にした相対単位。

```css
html {
  font-size: 16px; /* ブラウザのデフォルト */
}
h1 {
  font-size: 2rem; /* 16px × 2 = 32px */
}
p {
  font-size: 1rem; /* 16px × 1 = 16px */
}
```

**計算方法**

ルート要素の font-size × rem の値 = 実際のサイズ

---

## %（パーセント）- 親要素基準

親要素のサイズに対する割合で指定

```css
.parent {
  width: 300px;
  height: 200px;
}
.child {
  width: 50%;  /* 300px × 50% = 150px */
  height: 10%; /* 200px × 10% = 20px */
}
```

**使うべき場面**

- 幅、高さ（`width: 50%`, `height: 10%`）

---

### サイズ単位まとめ

| 単位  | 基準                   | 入れ子   | 実務での使用頻度 |
| ----- | ---------------------- | -------- | ---------------- |
| `px`  | 絶対値（画面ドット）   | 影響なし | ⭐⭐⭐⭐         |
| `em`  | 親要素の font-size     | 影響あり | ⭐⭐             |
| `rem` | ルート要素の font-size | 影響なし | ⭐⭐⭐⭐⭐       |
| `%`   | 親要素のサイズ         | 影響あり | ⭐⭐⭐           |

##### 表：サイズ単位

**おすすめの使い分け**：

- **フォントサイズ**：`rem`（最もおすすめ！）
- **幅・高さ**：`%` または `px`
- **余白**：`rem` または `px`

---

## フォント関連のプロパティ

テキストのフォント（書体）やサイズを変更する方法を学ぼう！

- font-family - フォントの種類 ⭐
- font-size - 文字サイズ ⭐
- font-weight - 文字の太さ ⭐
- font-style - 斜体
- font - 一括指定

---

## font-family - フォントの種類 ⭐

使用するフォント（書体）を指定する。

```css
h1 {
  font-family: "Arial", "Helvetica", sans-serif;
}

p {
  font-family: "游ゴシック", "Yu Gothic", "Hiragino Sans", sans-serif;
}
```

---

### フォントファミリーの種類

**欧文フォント**：

```css
/* ゴシック体（sans-serif） */
font-family: Arial, Helvetica, sans-serif;

/* 明朝体（serif） */
font-family: "Times New Roman", Times, serif;

/* 等幅フォント（monospace） */
font-family: "Courier New", Courier, monospace;
```

**和文フォント**：

```css
/* ゴシック体 */
font-family: "游ゴシック", "Yu Gothic", "ヒラギノ角ゴシック", "Hiragino Kaku Gothic", sans-serif;

/* 明朝体 */
font-family: "游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
```

---

### フォールバック（fallback）の仕組み

フォントは左から順に試され、見つからなければ次のフォントが使われる。

```css
font-family: "游ゴシック", "ヒラギノ角ゴシック", sans-serif;
```

1. 「游ゴシック」があれば使う
2. なければ「ヒラギノ角ゴシック」を使う
3. なければブラウザのデフォルトのゴシック体（sans-serif）を使う

**実務では**、最後に必ず一般的なフォントファミリー（`sans-serif`, `serif` など）を指定しよう！

---

## font-size - 文字サイズ ⭐

文字のサイズを指定する。

```css
h1 {
  font-size: 32px; /* px */
}

h2 {
  font-size: 2rem; /* rem */
}

p {
  font-size: 1rem; /* rem */
}
```

---

## font-weight - 文字の太さ ⭐

文字の太さをキーワードか数値で指定する。

```css
/* キーワード */
font-weight: normal; /* 通常（400） */
font-weight: bold;   /* 太字（700） */

/* 数値 */
font-weight: 100; /* 最も細い */
font-weight: 200;
font-weight: 300; /* 細い */
font-weight: 400; /* 通常（normal と同じ） */
font-weight: 500; /* やや太い */
font-weight: 600;
font-weight: 700; /* 太字（bold と同じ） */
font-weight: 800;
font-weight: 900; /* 最も太い */
```

---

## font-style - 斜体

文字を斜体にする。

```css
font-style: normal;  /* 通常 */
font-style: italic;  /* 斜体 */
font-style: oblique; /* 斜体（italicと似ている） */
```

---

## 5. font - 一括指定

フォント関連のプロパティを一括で指定できる。

```css
/* 個別指定 */
h1 {
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  font-family: Arial, sans-serif;
}

/* 一括指定 */
h1 {
  font: italic bold 32px Arial, sans-serif;
} /* 形式：font: style weight size family; */
```

**注意**：`size` と `family` は必須！

---

## テキストの色と背景

### color - 文字色 ⭐

文字の色を指定する。

```css
h1 {
  color: blue; /* 色名 */
}

p {
  color: #333333; /* 16進数 */
}

.highlight {
  color: rgb(239, 68, 68); /* RGB */
}
```

---

### background-color - 背景色 ⭐

要素の背景色を指定する。

```css
body {
  background-color: #f3f4f6; /* 薄い灰色 */
}

.highlight {
  background-color: yellow; /* 黄色 */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒 */
}
```

---

## テキストの装飾

### text-decoration - 下線・打ち消し線 ⭐

テキストに下線や打ち消し線を付ける。

```css
a {
  text-decoration: underline; /* 下線 */
}
```

**値の種類**

```css
text-decoration: none;         /* なし */
text-decoration: underline;    /* 下線 */
text-decoration: overline;     /* 上線 */
text-decoration: line-through; /* 打ち消し線 */
```

---

### text-transform - 大文字・小文字変換

英字の大文字・小文字を変換する。

```css
h1 {
  text-transform: uppercase;  /* すべて大文字 */
}
```

**値の種類**

```css
text-transform: uppercase;  /* すべて大文字 */
text-transform: lowercase;  /* すべて小文字 */
text-transform: capitalize; /* 単語の先頭だけ大文字 */
```

---

## テキストの配置

### text-align - 水平方向の配置 ⭐

テキストの水平方向の配置を指定する。

```css
h1 {
  text-align: center; /* 中央寄せ */
}
```

**値の種類**

```css
text-align: left;    /* 左寄せ */
text-align: center;  /* 中央寄せ */
text-align: right;   /* 右寄せ */
text-align: justify; /* 両端揃え */
```

---

## 行間と文字間隔

### line-height - 行間 ⭐

行の高さ（行間）を指定する。

```css
p {
  line-height: 1.6; /* 倍率（おすすめ） */
}
h1 {
  line-height: 1.2; /* 見出しは狭め */
}
.tight {
  line-height: 1; /* ぎゅっと詰める */
}
.loose {
  line-height: 2; /* ゆったり */
}
```

---

### letter-spacing - 文字間隔

文字と文字の間隔を指定する。

```css
p {
  letter-spacing: normal;  /* 通常 */
}
h1 {
  letter-spacing: 0.05em;  /* やや広げる */
}
.tight {
  letter-spacing: -0.05em; /* 狭める */
}
.loose {
  letter-spacing: 0.1em;   /* 広げる */
}
```

---

## Lesson 5: テキストスタイリングまとめ

このレッスンで学んだこと：

- **色の指定方法**を学んだ
- **サイズ単位**を学んだ
- **フォント関連のプロパティ**を学んだ
- **テキストの装飾**を学んだ
- **テキストの配置**を学んだ
- **行間と文字間隔**を学んだ

---

## Phase 1 のまとめ

- HTML の基本構造を理解した
- HTML 基本要素（見出し、段落、リスト、画像、リンク）を使える
- セマンティック HTML を理解した
- CSS の基本（セレクタ、ボックスモデル、display）を理解した
- テキストスタイリング（色、フォント、配置、行間）ができる
