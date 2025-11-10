# ミニプロジェクト 2: レスポンシブランディングページ

Phase 2 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**レスポンシブなランディングページ**を作成することで、Phase 2 で学んだ HTML/CSS の発展的な技術を総合的に復習します。

製品やサービスを紹介する 1 ページ完結型のウェブサイトです。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ Flexbox と Grid を組み合わせた複雑なレイアウト
- ✅ ヒーローセクション（Hero Section）の作成
- ✅ グリッドレイアウトによる特徴紹介セクション
- ✅ メディアクエリによるレスポンシブ対応
- ✅ CSS アニメーション（スクロール時、ホバー時）
- ✅ CTA（Call To Action）ボタンのデザイン

---

## 📁 ファイル構成

```text
landing-page/
├── index.html      # メインページ
├── styles.css      # スタイルシート
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（セマンティック構造）

#### ページ構造

```html
<header>
  <!-- ナビゲーションバー -->
  <nav>...</nav>
</header>

<main>
  <!-- ヒーローセクション -->
  <section class="hero">...</section>

  <!-- 特徴紹介セクション -->
  <section class="features">...</section>

  <!-- お客様の声セクション -->
  <section class="testimonials">...</section>

  <!-- CTAセクション -->
  <section class="cta">...</section>
</main>

<footer>...</footer>
```

**ポイント**:

- セマンティックな `section` で各セクションを区別
- `header`, `main`, `footer` で大まかな構造を定義
- BEM（Block Element Modifier）に近い命名規則

### CSS（Lesson 02-05 で学んだ内容）

#### 1. Flexbox レイアウト（Lesson 02）

```css
/* ナビゲーションバー */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ヒーローセクション */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* お客様の声（横並び） */
.testimonials-container {
  display: flex;
  gap: 2rem;
}
```

**ポイント**:

- `justify-content` と `align-items` で中央配置
- `flex-direction: column` で縦並び
- `gap` で要素間の間隔を統一

#### 2. Grid レイアウト（Lesson 03）

```css
/* 特徴紹介（3カラム） */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* タブレット: 2カラム */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* モバイル: 1カラム */
@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
```

**ポイント**:

- `repeat(3, 1fr)` で等幅の 3 列
- メディアクエリでカラム数を変更
- レスポンシブ対応が簡単

#### 3. レスポンシブデザイン（Lesson 04）

```css
/* モバイルファースト */
.hero h1 {
  font-size: 2rem;
}

/* タブレット */
@media (min-width: 481px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

/* デスクトップ */
@media (min-width: 769px) {
  .hero h1 {
    font-size: 3.5rem;
  }
}
```

**ポイント**:

- モバイルファーストアプローチ
- min-width で段階的に拡張
- フォントサイズ、余白、レイアウトを調整

#### 4. アニメーション（Lesson 05）

```css
/* CTAボタンのアニメーション */
.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
}

/* 特徴カードのホバーアニメーション */
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
```

**ポイント**:

- `transform` で要素を移動・拡大
- `box-shadow` で浮き上がる効果
- `transition` でスムーズな変化

---

## 🌟 このプロジェクトの特徴

### 1. ヒーローセクション

画面全体を使った大きな見出しと CTA ボタンで、訪問者の注目を集めます。

**学べること**:

- `min-height: 100vh` で画面いっぱいに表示
- Flexbox で中央配置
- グラデーション背景
- CTA ボタンのデザイン

### 2. Grid レイアウトによる特徴紹介

商品・サービスの特徴を Grid で美しく配置します。

**学べること**:

- `repeat(3, 1fr)` で 3 カラムグリッド
- レスポンシブでカラム数を変更
- カードデザインの基本

### 3. お客様の声

実際のユーザーの声を Flexbox で横並びに表示します。

**学べること**:

- Flexbox による横並び
- 等幅のカード配置
- プロフィール画像の丸型表示

### 4. CTA セクション

ページ最後にアクションを促すセクションを配置します。

**学べること**:

- 視覚的に目立つデザイン
- ボタンのアニメーション効果
- ユーザー導線の設計

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **色を変える**

   - グラデーションの色を変更
   - CTA ボタンの色を変更
   - 背景色を調整

2. **フォントを変える**

   - Google Fonts を使って見出しのフォントを変更
   - 本文のフォントファミリーを変更

3. **画像を追加**
   - ヒーローセクションに背景画像を追加
   - 特徴カードにアイコン画像を追加

### 中級編

1. **新しいセクションを追加**

   - 「料金プラン」セクション（Grid で 3 プラン）
   - 「よくある質問」セクション（Accordion 風デザイン）
   - 「チーム紹介」セクション

2. **ナビゲーションバーを固定**

   - `position: sticky` でスクロール時も固定
   - スクロール時に背景色を変更

3. **アニメーションを追加**
   - スクロール時にフェードイン
   - カウントアップアニメーション（数値）

### 上級編

1. **AI にセクションを追加してもらう**

   ```text
   「ランディングページに『料金プラン』セクションを追加してください。
   3つのプラン（Basic, Pro, Enterprise）をGridで横並びに表示し、
   各プランに料金、機能リスト、申し込みボタンを含めてください。
   中央のProプランを強調するデザインにしてください。」
   ```

2. **ダークモード対応**

   - ライト/ダークの切り替えボタン
   - prefers-color-scheme を使った自動切り替え

3. **スクロールアニメーション**
   - Intersection Observer API（JavaScript）を使ったフェードイン
   - パララックス効果

---

## 💡 学習のポイント

### 1. 100vh で画面いっぱいに表示

ヒーローセクションに `min-height: 100vh` を使うと、画面の高さいっぱいに表示できます。

```css
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**メリット**:

- 訪問者に強いインパクトを与える
- スクロールせずに重要な情報を見せられる
- モダンなデザイン

### 2. Grid の repeat() 関数

`repeat(3, 1fr)` は `1fr 1fr 1fr` と同じ意味です。

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 等幅の3列 */
}
```

**メリット**:

- コードがシンプル
- カラム数の変更が簡単
- レスポンシブ対応しやすい

### 3. transform と transition の組み合わせ

`transform` で要素を動かし、`transition` でスムーズに変化させます。

```css
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px); /* 上に10px移動 */
}
```

**メリット**:

- ユーザーの操作に対する視覚的フィードバック
- パフォーマンスが良い（GPU で処理される）
- モダンな UX

### 4. グラデーション背景

`linear-gradient` で美しいグラデーション背景を作れます。

```css
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**パラメータ**:

- `135deg`: グラデーションの角度
- `#667eea 0%`: 開始色とその位置
- `#764ba2 100%`: 終了色とその位置

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```text
「ランディングページに『お客様の実績』セクションを追加してください。
Gridで2行2列（合計4つ）のカードを配置し、各カードに以下を含めてください：
- 大きな数値（例: 10,000+）
- 説明テキスト（例: 'ユーザー数'）
- アイコン（絵文字でOK）

スタイルは既存の features-grid と同様のデザインで、
タブレットでは2列、モバイルでは1列に変更してください。」
```

**ポイント**:

- セクション名を明確に
- レイアウト（Grid、2 行 2 列）を具体的に指定
- 含めるべき要素をリストアップ
- レスポンシブの動作を明示
- 既存のスタイルを参考にすることを伝える

### 生成されたコードのチェックポイント

1. **HTML 構造**

   - `<section>` で適切に区切られているか
   - セマンティックな要素が使われているか
   - クラス名が分かりやすいか

2. **Grid レイアウト**

   - `display: grid` が設定されているか
   - `grid-template-columns` が正しく設定されているか
   - `gap` で間隔が調整されているか

3. **レスポンシブ対応**

   - メディアクエリが設定されているか
   - タブレット、モバイルで適切に表示されるか
   - フォントサイズや余白が調整されているか

4. **デザインの統一性**
   - 色、フォント、余白が既存セクションと統一されているか
   - ボタンのスタイルが一貫しているか

---

## 📝 まとめ

このプロジェクトで、Phase 2 で学んだ以下の内容を実践しました:

- ✅ Flexbox と Grid を組み合わせた複雑なレイアウト
- ✅ ヒーローセクションの作成
- ✅ Grid による特徴紹介セクション
- ✅ メディアクエリによるレスポンシブ対応
- ✅ CSS アニメーションによる UX 向上
- ✅ CTA ボタンのデザインと配置

**Phase 2 の知識で、こんなにプロフェッショナルなランディングページが作れる！** 💪

次は、最後のミニプロジェクト「レスポンシブギャラリー」に挑戦してみよう！

---

**Happy Coding!** 🎉
