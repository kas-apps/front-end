# ミニプロジェクト 3: レスポンシブギャラリー

Phase 2 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**レスポンシブな画像ギャラリー**を作成することで、Phase 2 で学んだ HTML/CSS の発展的な技術を総合的に復習します。

写真やイラストを美しく表示する、実用的なギャラリーページです。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ Grid レイアウトによる画像ギャラリー
- ✅ レスポンシブ対応（デバイスごとにカラム数を変更）
- ✅ CSS アニメーション（ホバー時の拡大、オーバーレイ表示）
- ✅ transform と transition の組み合わせ
- ✅ オーバーレイエフェクト
- ✅ フィルター機能の UI 設計

---

## 📁 ファイル構成

```text
gallery/
├── index.html      # メインページ
├── styles.css      # スタイルシート
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（セマンティック構造）

#### ギャラリー構造

```html
<!-- ギャラリーコンテナ -->
<div class="gallery-grid">
  <!-- ギャラリーアイテム -->
  <div class="gallery-item">
    <img src="..." alt="..." />
    <div class="overlay">
      <h3>タイトル</h3>
      <p>説明</p>
    </div>
  </div>
</div>
```

**ポイント**:

- `gallery-grid` でグリッドコンテナ
- 各アイテムに画像とオーバーレイを含める
- セマンティックな alt 属性で画像を説明

### CSS（Lesson 02-05 で学んだ内容）

#### 1. Grid レイアウト（Lesson 03）

```css
/* ギャラリーグリッド */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

**ポイント**:

- `repeat(auto-fit, minmax(300px, 1fr))` でレスポンシブグリッド
- 画面幅に応じて自動的にカラム数が変わる
- `gap` で要素間の間隔を統一

**auto-fit と minmax の説明**:

- `auto-fit`: 利用可能なスペースに合わせて自動的に列数を調整
- `minmax(300px, 1fr)`: 最小 300px、最大 1fr の幅
- これにより、画面幅に応じて 2 列、3 列、4 列と自動的に変化

#### 2. オーバーレイエフェクト（Lesson 05）

```css
/* オーバーレイ（初期状態は非表示） */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* ホバー時にオーバーレイを表示 */
.gallery-item:hover .overlay {
  opacity: 1;
}
```

**ポイント**:

- `position: absolute` でオーバーレイを配置
- 初期状態は `opacity: 0` で非表示
- ホバー時に `opacity: 1` で表示
- `transition` でスムーズな変化

#### 3. 画像のホバーアニメーション（Lesson 05）

```css
.gallery-item img {
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}
```

**ポイント**:

- `transform: scale(1.1)` で画像を 1.1 倍に拡大
- `transition` でスムーズな拡大
- ホバー時に画像が浮き上がる効果

#### 4. レスポンシブデザイン（Lesson 04）

```css
/* Grid が自動調整するので、メディアクエリは最小限 */

/* モバイル: 余白を調整 */
@media (max-width: 480px) {
  .gallery-grid {
    gap: 1rem;
  }
}
```

**ポイント**:

- `auto-fit` と `minmax` により、自動的にレスポンシブ
- メディアクエリは細かい調整のみ
- コードがシンプルで保守しやすい

---

## 🌟 このプロジェクトの特徴

### 1. 自動レスポンシブグリッド

`repeat(auto-fit, minmax(300px, 1fr))` を使った、自動的にレスポンシブになるグリッドです。

**学べること**:

- auto-fit の使い方
- minmax による柔軟な幅設定
- メディアクエリなしでレスポンシブ実現

### 2. オーバーレイエフェクト

画像にホバーすると、タイトルと説明が表示されます。

**学べること**:

- position: absolute によるオーバーレイ配置
- opacity による表示/非表示
- スムーズなアニメーション

### 3. 画像のホバーアニメーション

ホバー時に画像が拡大し、オーバーレイが表示されます。

**学べること**:

- transform: scale による拡大
- overflow: hidden で拡大時のはみ出しを防ぐ
- 複数のアニメーションの組み合わせ

### 4. フィルター機能の UI

カテゴリーごとに画像をフィルターするボタンの UI です（Phase 3 で動作を実装）。

**学べること**:

- Flexbox によるボタン配置
- アクティブ状態のスタイリング
- JavaScript との連携を考慮した設計

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **色を変える**

   - オーバーレイの背景色を変更
   - ボタンのアクティブ色を変更
   - ヘッダーのグラデーションを調整

2. **フォントを調整**

   - オーバーレイのタイトルサイズを変更
   - ボタンのフォントウェイトを調整

3. **余白を調整**
   - gap の値を変えて、画像間の間隔を調整
   - padding を変えて、全体の余白を調整

### 中級編

1. **新しいギャラリーアイテムを追加**

   - 画像を追加（絵文字でも OK）
   - タイトルと説明を変更
   - カテゴリーを追加

2. **ライトボックス（モーダル）の UI を追加**

   - 画像をクリックすると拡大表示されるモーダルの UI
   - 実際の動作は Phase 3 で JavaScript で実装

3. **アニメーションのバリエーション**
   - ズームイン以外のホバーエフェクトを試す
   - オーバーレイがスライドインするアニメーション

### 上級編

1. **AI にフィルター機能を追加してもらう**

   ```text
   「ギャラリーに『自然』『都市』『動物』のカテゴリーフィルターボタンを追加してください。
   各ギャラリーアイテムに data-category 属性を追加し、
   ボタンをクリックすると該当カテゴリーのアイテムだけが表示されるようにしてください。
   Phase 3 で JavaScript を実装するための準備として、HTML と CSS だけ作成してください。」
   ```

2. **Masonry レイアウト**

   - 高さが異なる画像を美しく配置する Masonry レイアウト
   - CSS Grid の高度な使い方

3. **無限スクロール対応**
   - スクロールすると新しい画像が読み込まれる UI
   - Intersection Observer API（JavaScript）との連携

---

## 💡 学習のポイント

### 1. auto-fit と minmax の組み合わせ

`repeat(auto-fit, minmax(300px, 1fr))` は、レスポンシブグリッドの魔法です。

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

**動作**:

- 画面幅 1200px: 4 列（300px × 4）
- 画面幅 900px: 3 列（300px × 3）
- 画面幅 600px: 2 列（300px × 2）
- 画面幅 300px: 1 列（300px × 1）

**メリット**:

- メディアクエリ不要
- 自動的にレスポンシブ
- コードがシンプル

### 2. position: relative と absolute の組み合わせ

オーバーレイを配置するために、親要素に `position: relative`、子要素に `position: absolute` を設定します。

```css
/* 親要素 */
.gallery-item {
  position: relative;
}

/* 子要素（オーバーレイ） */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

**ポイント**:

- 親要素が基準位置になる
- 子要素を親要素の範囲内に配置
- オーバーレイが画像の上に重なる

### 3. overflow: hidden で拡大時のはみ出しを防ぐ

画像を拡大すると、親要素からはみ出してしまいます。`overflow: hidden` で防ぎます。

```css
.gallery-item {
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item:hover img {
  transform: scale(1.1); /* はみ出した部分は hidden で隠れる */
}
```

**メリット**:

- レイアウトが崩れない
- 他の要素に影響しない
- きれいな拡大アニメーション

### 4. opacity と visibility の違い

オーバーレイの表示/非表示に `opacity` を使っています。

```css
/* opacity: 透明度を変更（要素は存在する） */
.overlay {
  opacity: 0; /* 透明（見えない）だが、要素は存在 */
  transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1; /* 不透明（見える） */
}
```

**opacity のメリット**:

- transition でアニメーション可能
- スムーズな表示/非表示

**visibility との違い**:

- `visibility: hidden`: 要素は存在するが見えない（スペースは確保）
- `display: none`: 要素が消える（スペースも消える、transition 不可）

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```text
「ギャラリーに新しいアイテムを3つ追加してください。
各アイテムには以下を含めてください：
- 画像（絵文字で代用: 🌸, 🏔️, 🌊）
- タイトル（画像に関連したタイトル）
- 説明（1-2文の簡単な説明）
- カテゴリー（data-category属性: nature）

既存のギャラリーアイテムと同じ構造とスタイルで統一してください。」
```

**ポイント**:

- 追加する数を明確に（3 つ）
- 各アイテムに含める要素をリストアップ
- 画像の代替案を提示（絵文字）
- データ属性も指定
- 統一性を指示

### 生成されたコードのチェックポイント

1. **HTML 構造**

   - `gallery-item` クラスが付いているか
   - `img` タグと `overlay` が含まれているか
   - `data-category` 属性が設定されているか

2. **画像**

   - `alt` 属性が適切に設定されているか
   - 画像のサイズが統一されているか（実際の画像の場合）

3. **オーバーレイ**

   - `h3` と `p` が含まれているか
   - 内容が画像に関連しているか

4. **レスポンシブ対応**
   - Grid が自動調整するので、新しいアイテムも自動的に対応
   - モバイルでも正しく表示されるか確認

---

## 📝 まとめ

このプロジェクトで、Phase 2 で学んだ以下の内容を実践しました:

- ✅ Grid レイアウトによる画像ギャラリー
- ✅ auto-fit と minmax による自動レスポンシブグリッド
- ✅ position を使ったオーバーレイ配置
- ✅ CSS アニメーション（ホバー時の拡大、オーバーレイ表示）
- ✅ transform と transition の組み合わせ

**Phase 2 の知識で、こんなにプロフェッショナルなギャラリーが作れる！** 💪

これで Phase 2 のミニプロジェクトはすべて完了！3 つのプロジェクトを通じて、Flexbox、Grid、レスポンシブデザイン、アニメーションをマスターしたね！

次は Phase 3 で JavaScript を学んで、これらのプロジェクトにインタラクティブな機能を追加していこう！

---

**Happy Coding!** 🎉
