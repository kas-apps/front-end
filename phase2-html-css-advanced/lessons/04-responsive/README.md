# Lesson 4: レスポンシブデザイン 📱

**学習目標**：様々なデバイスで美しく表示されるレスポンシブなウェブサイトを作れるようになる

---

## なぜレスポンシブデザインを学ぶの？

現代のウェブサイトは、**様々なデバイス**で閲覧されるよね：

- 📱 スマートフォン（375px ~ 428px）
- 📱 タブレット（768px ~ 1024px）
- 💻 ノートパソコン（1366px ~ 1920px）
- 🖥️ デスクトップ（1920px ~）

**1 つのデザインで、全てのデバイスに対応する！** それがレスポンシブデザイン！🎯

### レスポンシブデザインがないとどうなる？

```text
【PC専用デザイン】
PC: ✅ 完璧！
スマホ: ❌ 文字が小さすぎて読めない
       ❌ 横にスクロールが必要
       ❌ ボタンが小さくてタップしづらい

【スマホ専用デザイン】
スマホ: ✅ 完璧！
PC: ❌ 画面の半分しか使っていない
    ❌ 文字が大きすぎる
    ❌ レイアウトが崩れる
```

**レスポンシブデザインなら、全てのデバイスで最適な表示！** 📐

### 統計データ

- 📊 モバイルからのウェブアクセス：**約 60%**
- 📊 レスポンシブでないサイトからの離脱率：**約 40%**
- 📊 Google の検索順位：モバイル対応が**重要な要素**

**レスポンシブデザインは、もはや必須のスキル！** 🚀

---

## レスポンシブデザインの基本概念

### 1. Viewport（ビューポート）

**viewport** = ブラウザの表示領域のサイズ

#### viewport meta タグ

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**これがないと、スマホで見た時に PC 版が縮小表示される！**

```text
【viewport なし】
スマホでPC版が小さく表示される（文字が読めない）

【viewport あり】
スマホの幅に合わせて最適化される
```

**必須！** すべての HTML ファイルの `<head>` に入れよう！

---

### 2. メディアクエリ（Media Queries）

**メディアクエリ** = デバイスの特性（画面幅など）に応じて、CSS を切り替える仕組み

```css
/* PC向けのスタイル */
.container {
  width: 1200px;
}

/* スマホ向けのスタイル */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

**画面幅が 768px 以下の時だけ、`width: 100%;` が適用される！**

---

### 3. ブレークポイント（Breakpoint）

**ブレークポイント** = デザインが切り替わる画面幅

一般的なブレークポイント：

```css
/* スマホ（縦向き） */
@media (max-width: 480px) {
}

/* スマホ（横向き）・小型タブレット */
@media (max-width: 768px) {
}

/* タブレット */
@media (max-width: 1024px) {
}

/* PC（小） */
@media (max-width: 1280px) {
}

/* PC（大） */
@media (min-width: 1281px) {
}
```

**重要！** これは一般的な目安。実際のプロジェクトでは、コンテンツに応じて調整しよう！

---

## メディアクエリの基本

### 1. max-width - 「〜以下」

```css
/* 画面幅が768px以下の時 */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

**使い方**：「この幅以下の時はこうする」という指定

---

### 2. min-width - 「〜以上」

```css
/* 画面幅が1024px以上の時 */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}
```

**使い方**：「この幅以上の時はこうする」という指定

---

### 3. 範囲指定

```css
/* 画面幅が768px〜1024pxの間 */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 90%;
  }
}
```

**使い方**：「この範囲の時だけ」という指定

---

### 4. その他のメディア特性

```css
/* 縦向きの時 */
@media (orientation: portrait) {
  /* ... */
}

/* 横向きの時 */
@media (orientation: landscape) {
  /* ... */
}

/* 高解像度ディスプレイ（Retina など） */
@media (min-resolution: 2dppx) {
  /* ... */
}
```

---

## モバイルファーストの考え方

### モバイルファーストとは？

**モバイルファースト** = スマホのデザインから始めて、徐々に画面が大きいデバイスに対応する考え方

#### 従来のアプローチ（デスクトップファースト）

```css
/* デフォルトはPC向け */
.container {
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

/* スマホでは変更 */
@media (max-width: 768px) {
  .container {
    width: 100%;
    grid-template-columns: 1fr; /* 1列に */
  }
}
```

**問題点**：

- スマホで不要な CSS も読み込まれる
- スマホのパフォーマンスが悪化

---

#### モバイルファーストのアプローチ

```css
/* デフォルトはスマホ向け */
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* 1列 */
}

/* タブレット以上では変更 */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
  }
}

/* PC では変更 */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
    grid-template-columns: repeat(4, 1fr); /* 4列 */
  }
}
```

**利点**：

- ✅ スマホのパフォーマンスが良い（必要な CSS だけ）
- ✅ コードが書きやすい（シンプルから複雑へ）
- ✅ モバイルユーザーを優先（現代の主流）

**現代のベストプラクティス** = モバイルファースト！📱

---

## 可変単位（Fluid Units）

### 1. パーセント（%）

```css
.container {
  width: 90%; /* 親要素の90% */
  max-width: 1200px; /* 最大幅を制限 */
}
```

**使い方**：親要素の幅に対する割合

**例**：

```html
<div style="width: 1000px;">
  <div style="width: 50%;">
    <!-- この幅は500px（親の50%） -->
  </div>
</div>
```

---

### 2. vw と vh（Viewport Width / Height）

```css
.hero {
  width: 100vw; /* ビューポートの幅の100% */
  height: 100vh; /* ビューポートの高さの100% */
}
```

- `1vw` = ビューポート幅の 1%
- `1vh` = ビューポート高さの 1%

**使い方**：画面全体のサイズに対する割合

**例**：

```css
/* 画面幅が1000pxの時 */
width: 50vw; /* = 500px */

/* 画面高さが800pxの時 */
height: 50vh; /* = 400px */
```

**注意！** `100vw` を使うと、スクロールバーの分だけ横スクロールが発生することがある（`100%` の方が安全）

---

### 3. rem と em

#### rem（Root EM）

```css
html {
  font-size: 16px; /* ルート要素のフォントサイズ */
}

.text {
  font-size: 1rem; /* = 16px */
  padding: 2rem; /* = 32px */
}
```

- `1rem` = ルート要素（`<html>`）のフォントサイズ
- **全体で一貫したサイズ感**を保てる

---

#### em

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em; /* = 30px（親の1.5倍） */
  padding: 2em; /* = 60px（自分のフォントサイズの2倍） */
}
```

- `1em` = 親要素のフォントサイズ（`padding`, `margin` などでは、自分のフォントサイズ）
- **相対的なサイズ調整**に便利

---

### rem vs em - どっちを使う？

```css
/* rem を使う場合 */
html {
  font-size: 16px;
}
.button {
  font-size: 1rem; /* = 16px */
  padding: 0.5rem 1rem; /* = 8px 16px */
}

/* em を使う場合 */
.button {
  font-size: 1em;
  padding: 0.5em 1em; /* ボタンのサイズに応じて自動調整 */
}
```

**おすすめ**：

- **rem**：グローバルなサイズ（余白、レイアウトなど）
- **em**：コンポーネント内の相対的なサイズ（padding, margin）

---

### 4. calc() - 計算で値を指定

```css
.container {
  width: calc(100% - 40px); /* 幅100%から40pxを引く */
  height: calc(100vh - 80px); /* 画面の高さからヘッダー分を引く */
}

.sidebar {
  width: calc(100% / 3); /* 幅を3等分 */
}
```

**超便利！** 異なる単位を組み合わせて計算できる！

---

## Flexbox のレスポンシブ活用

Flexbox は、`flex-wrap` と組み合わせるとレスポンシブに最適！

### 基本パターン

```html
<style>
  .card-container {
    display: flex;
    flex-wrap: wrap; /* 折り返しを有効化 */
    gap: 20px;
  }

  .card {
    flex: 1 1 300px; /* 最小幅300px、可変 */
    background-color: white;
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
</style>

<div class="card-container">
  <div class="card">カード1</div>
  <div class="card">カード2</div>
  <div class="card">カード3</div>
</div>
```

**結果**：

```text
【広い画面】
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
└────┴────┴────┘

【狭い画面】
┌────┐
│ 1  │
├────┤
│ 2  │
├────┤
│ 3  │
└────┘
```

**メディアクエリなしでレスポンシブ！** 超便利！✨

---

### flex プロパティの詳細

```css
.card {
  flex: 1 1 300px;
  /* flex-grow: 1  → 余白があれば伸びる */
  /* flex-shrink: 1 → 必要なら縮む */
  /* flex-basis: 300px → 最小幅は300px */
}
```

---

## Grid のレスポンシブ活用

Grid も、Lesson 3 で学んだテクニックでレスポンシブに！

### 基本パターン

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

**メディアクエリなしでレスポンシブ！** Grid の魔法！✨

---

### メディアクエリと組み合わせる

```css
/* スマホ */
.grid-container {
  display: grid;
  grid-template-columns: 1fr; /* 1列 */
  gap: 15px;
}

/* タブレット */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2列 */
    gap: 20px;
  }
}

/* PC */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr); /* 4列 */
    gap: 30px;
  }
}
```

---

## 実践例 1：レスポンシブナビゲーション

### デスクトップ版

```html
<style>
  /* モバイルファースト */
  nav {
    background-color: #1f2937;
    padding: 1rem;
  }

  .nav-container {
    display: flex;
    flex-direction: column; /* スマホでは縦並び */
    gap: 1rem;
  }

  .logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .nav-links {
    display: flex;
    flex-direction: column; /* スマホでは縦並び */
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    text-align: center;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .nav-links a:hover {
    background-color: #374151;
  }

  /* タブレット以上では横並び */
  @media (min-width: 768px) {
    .nav-container {
      flex-direction: row; /* 横並び */
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      flex-direction: row; /* 横並び */
      gap: 2rem;
    }

    .logo {
      text-align: left;
    }

    .nav-links a {
      text-align: left;
    }
  }
</style>

<nav>
  <div class="nav-container">
    <div class="logo">MyWebsite</div>
    <ul class="nav-links">
      <li><a href="#">ホーム</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">会社概要</a></li>
      <li><a href="#">お問い合わせ</a></li>
    </ul>
  </div>
</nav>
```

**ポイント**：

- スマホでは縦並び、PC では横並び
- メディアクエリで `flex-direction` を切り替える

---

## 実践例 2：レスポンシブグリッドレイアウト

```html
<style>
  .page-layout {
    display: grid;
    gap: 20px;
    padding: 20px;
  }

  /* スマホ：1列 */
  .page-layout {
    grid-template-areas:
      'header'
      'main'
      'sidebar'
      'footer';
  }

  .header {
    grid-area: header;
    background-color: #3b82f6;
    padding: 2rem;
    color: white;
  }

  .main {
    grid-area: main;
    background-color: white;
    padding: 2rem;
    min-height: 300px;
  }

  .sidebar {
    grid-area: sidebar;
    background-color: #f3f4f6;
    padding: 2rem;
  }

  .footer {
    grid-area: footer;
    background-color: #1f2937;
    padding: 2rem;
    color: white;
  }

  /* タブレット：2列 */
  @media (min-width: 768px) {
    .page-layout {
      grid-template-columns: 1fr 300px;
      grid-template-areas:
        'header header'
        'main sidebar'
        'footer footer';
    }
  }

  /* PC：ヘッダーとフッターを全幅に */
  @media (min-width: 1024px) {
    .page-layout {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>

<div class="page-layout">
  <header class="header">
    <h1>ウェブサイトタイトル</h1>
  </header>
  <main class="main">
    <h2>メインコンテンツ</h2>
    <p>ここに記事の内容が入ります...</p>
  </main>
  <aside class="sidebar">
    <h3>サイドバー</h3>
    <ul>
      <li>リンク1</li>
      <li>リンク2</li>
      <li>リンク3</li>
    </ul>
  </aside>
  <footer class="footer">
    <p>&copy; 2025 MyWebsite</p>
  </footer>
</div>
```

**ポイント**：

- `grid-template-areas` でレイアウトを視覚的に定義
- メディアクエリで、デバイスに応じてレイアウトを変更

---

## 実践例 3：レスポンシブカードレイアウト

```html
<style>
  .card-grid {
    display: grid;
    gap: 20px;
    padding: 20px;
  }

  /* スマホ：1列 */
  .card-grid {
    grid-template-columns: 1fr;
  }

  .card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background-color: #e5e7eb;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  .card-description {
    color: #6b7280;
    line-height: 1.6;
  }

  /* タブレット：2列 */
  @media (min-width: 600px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
  }

  /* PC：3列 */
  @media (min-width: 900px) {
    .card-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }

  /* 大型PC：4列 */
  @media (min-width: 1200px) {
    .card-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<div class="card-grid">
  <div class="card">
    <img class="card-image" src="image1.jpg" alt="画像1" />
    <div class="card-content">
      <h3 class="card-title">カードタイトル1</h3>
      <p class="card-description">カードの説明文がここに入ります。</p>
    </div>
  </div>
  <div class="card">
    <img class="card-image" src="image2.jpg" alt="画像2" />
    <div class="card-content">
      <h3 class="card-title">カードタイトル2</h3>
      <p class="card-description">カードの説明文がここに入ります。</p>
    </div>
  </div>
  <!-- ... more cards ... -->
</div>
```

**ポイント**：

- 段階的にブレークポイントを設定
- スマホ → タブレット → PC → 大型 PC と、徐々に列数を増やす

---

## 実践例 4：レスポンシブタイポグラフィ

```css
/* モバイルファースト */
html {
  font-size: 14px; /* スマホでは小さめ */
}

body {
  line-height: 1.6;
}

h1 {
  font-size: 2rem; /* = 28px */
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem; /* = 21px */
  margin-bottom: 0.75rem;
}

p {
  font-size: 1rem; /* = 14px */
  margin-bottom: 1rem;
}

/* タブレット以上では少し大きく */
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }

  h1 {
    font-size: 2.5rem; /* = 40px */
  }

  h2 {
    font-size: 2rem; /* = 32px */
  }
}

/* PC ではさらに大きく */
@media (min-width: 1024px) {
  html {
    font-size: 18px;
  }

  h1 {
    font-size: 3rem; /* = 54px */
  }

  h2 {
    font-size: 2.25rem; /* = 40.5px */
  }
}
```

**ポイント**：

- ルートの `font-size` を変更すると、`rem` 単位の全てが一括で変更される
- デバイスに応じて、読みやすいフォントサイズに調整

---

## 🤖 バイブコーディング実践

### AI への指示例

レスポンシブデザインを AI に作ってもらう時は、**デバイスごとの表示**を明確に指定しよう！

#### ⭕ 良い指示の例

```text
「レスポンシブなカードグリッドを作ってください：
- スマホ（768px未満）：1列
- タブレット（768px以上）：2列
- PC（1024px以上）：3列
- 各カードには画像、タイトル、説明文を含める
- カード間の余白は20px
- モバイルファーストで実装してください
- viewportメタタグも忘れずに含めてください」
```

**良い点**：

- デバイスごとの列数を明示
- ブレークポイントを指定
- モバイルファーストを指示
- viewport メタタグを要求

---

#### ❌ 曖昧な指示の例

```text
「カードグリッド作って。レスポンシブで」
```

**問題点**：

- ブレークポイントが不明
- デバイスごとの表示が不明
- モバイルファーストかデスクトップファーストか不明

---

### 生成されたコードの読み方

AI がレスポンシブデザインのコードを生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **viewport メタタグがあるか？**

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

   → これがないと、スマホで正しく表示されない！

2. **メディアクエリが適切か？**

   ```css
   /* モバイルファースト */
   @media (min-width: 768px) {
     /* タブレット以上 */
   }
   @media (min-width: 1024px) {
     /* PC以上 */
   }
   ```

3. **ブレークポイントが論理的か？**

   ```css
   /* 良い例：段階的に変化 */
   /* スマホ → タブレット → PC */

   /* 悪い例：ブレークポイントがバラバラ */
   @media (max-width: 650px) {
   }
   @media (max-width: 1150px) {
   }
   ```

4. **可変単位が使われているか？**

   ```css
   /* 良い例 */
   .container {
     width: 90%; /* 可変 */
     max-width: 1200px; /* 最大幅を制限 */
   }

   /* 悪い例 */
   .container {
     width: 1200px; /* 固定 */
   }
   ```

5. **flex-wrap や Grid のレスポンシブ機能が活用されているか？**

   ```css
   /* Flexbox */
   .container {
     display: flex;
     flex-wrap: wrap; /* 折り返し */
   }

   /* Grid */
   .container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   }
   ```

---

### よくある問題と修正方法

#### 問題 1：スマホで横スクロールが発生する

**症状**：スマホで見ると、横にスクロールできてしまう

**原因 1**：固定幅の要素がある

**修正方法**：

```css
/* 修正前 */
.container {
  width: 1200px; /* 固定幅 */
}

/* 修正後 */
.container {
  width: 90%; /* または 100% */
  max-width: 1200px; /* PC では最大1200pxまで */
}
```

---

**原因 2**：`100vw` を使っている

**修正方法**：

```css
/* 修正前 */
.container {
  width: 100vw; /* スクロールバーの分、はみ出る */
}

/* 修正後 */
.container {
  width: 100%; /* こちらが安全 */
}
```

---

#### 問題 2：メディアクエリが効かない

**症状**：メディアクエリを書いたのに、スマホで反映されない

**原因**：viewport メタタグがない

**修正方法**：

```html
<!-- HTMLのheadに追加 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

#### 問題 3：PC とスマホでレイアウトが同じ

**症状**：メディアクエリを書いたのに、レイアウトが変わらない

**原因**：メディアクエリの順序が間違っている

**修正方法**：

```css
/* 修正前：デスクトップファースト */
.container {
  grid-template-columns: repeat(4, 1fr); /* PC向け */
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* スマホ向け */
  }
}

/* 修正後：モバイルファースト */
.container {
  grid-template-columns: 1fr; /* スマホ向け */
}
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(4, 1fr); /* PC向け */
  }
}
```

**重要！** モバイルファーストでは `min-width` を使う！

---

#### 問題 4：要素がスマホで小さすぎる/大きすぎる

**症状**：スマホで見ると、ボタンが小さくてタップしづらい

**原因**：固定のピクセル値を使っている

**修正方法**：

```css
/* 修正前 */
.button {
  padding: 5px 10px; /* 小さすぎる */
  font-size: 12px;
}

/* 修正後 */
.button {
  padding: 0.75rem 1.5rem; /* remを使う */
  font-size: 1rem;
  min-height: 44px; /* タップしやすい最小サイズ */
}
```

**Apple のガイドライン**：タップ可能な要素は**最小 44px × 44px**

---

#### 問題 5：画像がスマホではみ出る

**症状**：画像が画面幅より大きく表示される

**原因**：画像に幅の制限がない

**修正方法**：

```css
/* 修正前 */
img {
  /* 何も指定していない */
}

/* 修正後 */
img {
  max-width: 100%; /* 親要素の幅を超えない */
  height: auto; /* アスペクト比を維持 */
}
```

---

## カスタマイズポイント

AI が生成したレスポンシブデザインを、自分で微調整する時のポイント：

### 1. ブレークポイントの調整

```css
/* ブレークポイントを変更 */
@media (min-width: 768px) {
  /* 変更前 */
}
@media (min-width: 800px) {
  /* 変更後：少し広くする */
}
```

### 2. 列数の変更

```css
/* スマホで2列にしたい場合 */
.card-grid {
  grid-template-columns: 1fr; /* 変更前 */
  grid-template-columns: repeat(2, 1fr); /* 変更後 */
}
```

### 3. 余白の調整

```css
/* デバイスに応じて余白を変更 */
.container {
  padding: 1rem; /* スマホ */
}
@media (min-width: 768px) {
  .container {
    padding: 2rem; /* タブレット */
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 3rem; /* PC */
  }
}
```

### 4. フォントサイズの調整

```css
/* ルートのフォントサイズを変更 */
html {
  font-size: 14px; /* スマホ */
}
@media (min-width: 768px) {
  html {
    font-size: 16px; /* タブレット */
  }
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ レスポンシブデザインの重要性
- ✅ viewport メタタグの必須性
- ✅ メディアクエリの基本（max-width, min-width）
- ✅ ブレークポイントの設定
- ✅ モバイルファーストの考え方
- ✅ 可変単位（%, vw, vh, rem, em, calc()）
- ✅ Flexbox と Grid のレスポンシブ活用
- ✅ 実践例（ナビゲーション、グリッドレイアウト、カードレイアウト）
- ✅ AI に的確な指示を出してレスポンシブデザインを生成する方法
- ✅ 生成されたコードのチェックポイント

### レスポンシブデザインのチェックリスト

- ✅ viewport メタタグを設定した
- ✅ モバイルファーストで実装した
- ✅ 可変単位（%, rem, vw/vh）を使った
- ✅ メディアクエリでデバイスごとに最適化した
- ✅ 画像に `max-width: 100%` を設定した
- ✅ タップ可能な要素は最小 44px × 44px にした
- ✅ 実機やブラウザの開発者ツールでテストした

### 次のステップ

このレッスンで学んだレスポンシブデザインの知識を活かして、演習問題に挑戦しよう！

実際に手を動かすことで、レスポンシブデザインの作り方がしっかり身につくよ！💪

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

レスポンシブデザインをマスターして、全てのデバイスで美しく表示されるウェブサイトを作ろう！
