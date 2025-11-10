# Lesson 3: Grid - 解答例と解説 📝

各演習問題の解答例と、そのポイントを解説します。

---

## 演習 1：最初の Grid - 基本的なグリッド

### 解答例：[03-01.html](03-01.html)

### ポイント解説

#### 1. Grid の基本構造

```css
.container {
  display: grid; /* Gridを有効化 */
  grid-template-columns: 1fr 1fr 1fr; /* 3列、等幅 */
  grid-template-rows: 100px 100px; /* 2行、各100px */
  gap: 10px; /* グリッド間の余白 */
}
```

**ポイント**：

- `display: grid;` で Grid を有効化
- `grid-template-columns` で列の数と幅を指定
- `grid-template-rows` で行の数と高さを指定
- `gap` でグリッド間の余白を設定

#### 2. 1fr とは？

```css
grid-template-columns: 1fr 1fr 1fr;
/* 利用可能な余白を3等分 */
```

**`fr`（fraction）**：利用可能な余白を分配する単位

- `1fr 1fr 1fr`：余白を 3 等分
- `2fr 1fr 1fr`：最初の列が他の列の 2 倍の幅

#### 3. repeat で簡潔に書く

```css
/* 長い書き方 */
grid-template-columns: 1fr 1fr 1fr;

/* 短い書き方 */
grid-template-columns: repeat(3, 1fr);
```

`repeat(3, 1fr)` は「1fr を 3 回繰り返す」という意味です。

---

## 演習 2：2×2 グリッド

### 解答例：[03-02.html](03-02.html)

### ポイント解説

#### 固定幅のグリッド

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px; /* 2列、各200px */
  grid-template-rows: 150px 150px; /* 2行、各150px */
  gap: 20px;
}
```

**固定幅 vs 可変幅**：

- **固定幅**（`200px`）：画面サイズに関わらず常に同じサイズ
- **可変幅**（`1fr`）：利用可能な余白に応じて変化

#### グリッドアイテムの中央揃え

```css
.box {
  display: flex;
  justify-content: center; /* 横方向の中央 */
  align-items: center; /* 縦方向の中央 */
}
```

**Grid と Flexbox の組み合わせ**：

- Grid コンテナの中のアイテムを Flex コンテナにできる
- グリッドアイテムの中身を中央揃えにする時に便利

---

## 演習 3：3 カラムレイアウト

### 解答例：[03-03.html](03-03.html)

### ポイント解説

#### 要素を複数列・複数行にまたがせる

```css
/* ヘッダー：全列をまたぐ */
.header {
  grid-column: 1 / -1; /* 1列目から最後の列まで */
}

/* フッター：全列をまたぐ */
.footer {
  grid-column: 1 / -1;
}
```

**grid-column の指定方法**：

```css
grid-column: 開始列 / 終了列;

/* 例 */
grid-column: 1 / 3; /* 1列目から3列目の手前まで（1〜2列目） */
grid-column: 1 / -1; /* 1列目から最後の列まで（全列） */
grid-column: span 2; /* 2列分をまたぐ */
```

**`-1` の意味**：「最後の列」を表す。列数が変わっても対応できる！

#### grid-template-rows で行の高さを制御

```css
.container {
  grid-template-rows: auto 1fr auto;
  /* ヘッダー: コンテンツに応じた高さ */
  /* メイン: 残りの高さ */
  /* フッター: コンテンツに応じた高さ */
}
```

**行の高さの指定方法**：

- `auto`：コンテンツに応じた高さ
- `1fr`：残りの余白を使う
- `100px`：固定の高さ

---

## 演習 4：ギャラリーレイアウト

### 解答例：[03-04.html](03-04.html)

### ポイント解説

#### repeat で繰り返しパターンを簡潔に

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列、等幅 */
  grid-template-rows: repeat(3, 200px); /* 3行、各200px */
  gap: 15px;
}
```

**repeat の使い方**：

```css
repeat(繰り返し回数, 繰り返すパターン);

/* 例 */
repeat(3, 1fr); /* → 1fr 1fr 1fr */
repeat(2, 100px 200px); /* → 100px 200px 100px 200px */
```

#### ホバー効果でインタラクティブに

```css
.gallery-item {
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05); /* 1.05倍に拡大 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 影を強く */
}
```

**transform: scale(1.05)**：要素を 1.05 倍に拡大

**transition**：変化をなめらかにする

#### nth-child で色を変える

```css
.gallery-item:nth-child(1) {
  background-color: #3b82f6;
}
.gallery-item:nth-child(2) {
  background-color: #10b981;
}
```

`nth-child(n)` で n 番目の子要素を選択できます。

---

## 演習 5：ダッシュボード風レイアウト

### 解答例：[03-05.html](03-05.html)

### ポイント解説

#### ネストされたグリッド

```html
<div class="container">
  <!-- 外側のグリッド -->
  <div class="main">
    <!-- 内側のグリッド -->
    <div class="stat-box">統計1</div>
    <div class="stat-box">統計2</div>
  </div>
</div>
```

```css
/* 外側のグリッド */
.container {
  display: grid;
  grid-template-columns: 150px 1fr 200px;
}

/* 内側のグリッド */
.main {
  display: grid; /* ネストされたグリッド */
  grid-template-columns: 1fr 1fr; /* 2列 */
  grid-template-rows: 1fr 1fr; /* 2行 */
  gap: 10px;
}
```

**ポイント**：Grid コンテナの中のアイテムを、さらに Grid コンテナにできる！

#### 複雑なレイアウトの作り方

```css
.container {
  grid-template-columns: 150px 1fr 200px;
  grid-template-rows: 60px 1fr 50px;
}
```

**レイアウトのイメージ**：

```text
 150px      1fr      200px
┌──────┬──────────┬────────┐
│         Header           │ 60px
├──────┼──────────┼────────┤
│Nav   │Main      │Side    │
│      │          │        │ 1fr
│      │          │        │
│      │          │        │
├──────┼──────────┼────────┤
│         Footer           │ 50px
└──────┴──────────┴────────┘
```

---

## 演習 6：AI に指示して作ってもらおう

### 解答例：[03-06.html](03-06.html)

### ポイント解説

#### AI への良い指示の出し方

```text
✅ 良い指示：
「CSS Gridを使ってブログ記事カードのグリッドレイアウトを作成してください：

グリッドコンテナ：
- display: gridで3列のグリッド
- grid-template-columns: repeat(3, 1fr)で等幅の3列
- gap: 25pxでカード間の余白を設定
...」
```

**良い点**：

- **Grid を使う**ことを明示
- **具体的なプロパティ名**を指定（grid-template-columns, repeat, gap など）
- **構造を説明**（カードの中身、画像、タイトル、本文など）
- **細かい仕様**も含める（サイズ、色、ホバー効果など）

#### overflow: hidden で角丸を適用

```css
.blog-card {
  border-radius: 8px;
  overflow: hidden; /* 角丸を画像にも適用 */
}
```

**overflow: hidden**：

- 親要素からはみ出た部分を隠す
- `border-radius` が子要素（画像）にも適用される

#### 画像を全幅で表示

```css
.blog-image {
  width: 100%; /* 親要素の幅いっぱい */
  height: 150px;
}
```

---

## チャレンジ 1：エラーを見つけて修正しよう

### 解答例：[03-07.html](03-07.html)

### 修正ポイント解説

#### 問題 1：列数が合わない

```css
/* 修正前：2列なのに、3つの要素がある */
.container {
  grid-template-columns: 1fr 1fr; /* 2列 */
}

/* 修正後：3列に変更 */
.container {
  grid-template-columns: 200px 1fr 200px; /* 3列 */
}
```

**原因**：列数が足りないと、要素が自動的に次の行に配置されてしまいます。

**解決策**：必要な列数を確保する。

#### 問題 2：grid-column の指定が間違っている

```css
/* 修正前：1列目だけ */
.header {
  grid-column: 1 / 2; /* 1列目のみ */
}

/* 修正後：全列をまたぐ */
.header {
  grid-column: 1 / -1; /* 1列目から最後の列まで */
}
```

**grid-column の指定**：

- `1 / 2`：1 列目のみ
- `1 / 3`：1〜2 列目
- `1 / -1`：1 列目から最後の列まで（全列）

#### 問題 3：grid-row の指定が重複している

```css
/* 修正前：サイドバーとメインが同じ行 */
.sidebar {
  grid-row: 2;
}

.main {
  grid-row: 2; /* サイドバーと重複 */
}

/* 修正後：grid-rowを削除（自動配置に任せる） */
.sidebar {
  /* grid-rowを削除 */
}

.main {
  /* grid-rowを削除 */
}
```

**原因**：同じ行に複数の要素を配置すると、重なってしまいます。

**解決策**：

- `grid-row` を削除して、自動配置に任せる
- または、明確に異なる列を指定する（`grid-column` を使う）

#### 問題 4：サブグリッドに display: grid がない

```css
/* 修正前：display: gridがない */
.stats {
  /* display: gridがない！ */
  grid-template-columns: 1fr 1fr; /* 効果がない */
}

/* 修正後：display: gridを追加 */
.stats {
  display: grid; /* 追加 */
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
```

**原因**：`display: grid;` がないと、`grid-template-columns` などのプロパティが効きません。

#### 問題 5：footer に grid-column がない

```css
/* 修正前：grid-columnの指定がない */
.footer {
  /* 自動配置されるが、全列をまたがない */
}

/* 修正後：grid-columnを追加 */
.footer {
  grid-column: 1 / -1; /* 全列をまたぐ */
}
```

**原因**：`grid-column` がないと、フッターは 1 列目だけに配置されます。

---

## まとめ

### よくある間違いと解決策

| 間違い                          | 問題                     | 解決策                         |
| ------------------------------- | ------------------------ | ------------------------------ |
| 親要素に display: grid がない   | Grid にならない          | 親要素に `display: grid;`      |
| 列数が足りない                  | 要素が次の行に配置       | `grid-template-columns` を調整 |
| grid-column の指定が間違い      | 要素が意図した場所にない | `1 / -1` で全列をまたぐ        |
| grid-row が重複                 | 要素が重なる             | 自動配置に任せるか、列を指定   |
| fr と px の違いを理解していない | レイアウトが崩れる       | `1fr` = 可変、`px` = 固定      |
| gap を忘れている                | 要素がくっついている     | `gap` で余白を設定             |

### Grid の主要プロパティ

**Grid コンテナ（親要素）に指定**：

- `display: grid;` - Grid を有効化
- `grid-template-columns` - 列の数と幅
- `grid-template-rows` - 行の数と高さ
- `gap` - グリッド間の余白
- `justify-items` - グリッドアイテムの横方向の配置
- `align-items` - グリッドアイテムの縦方向の配置

**Grid アイテム（子要素）に指定**：

- `grid-column` - 複数列をまたぐ（例：`1 / -1`）
- `grid-row` - 複数行をまたぐ（例：`1 / 3`）
- `justify-self` - 個別の横方向の配置
- `align-self` - 個別の縦方向の配置

### 重要な概念

#### 1. fr ユニット

```css
grid-template-columns: 1fr 2fr 1fr;
/* 1:2:1の比率で余白を分配 */
```

#### 2. repeat 関数

```css
grid-template-columns: repeat(3, 1fr);
/* 1fr 1fr 1fr と同じ */
```

#### 3. grid-column の指定

```css
grid-column: 1 / -1; /* 全列をまたぐ */
grid-column: 1 / 3; /* 1〜2列目 */
grid-column: span 2; /* 2列分をまたぐ */
```

#### 4. 固定幅と可変幅の組み合わせ

```css
grid-template-columns: 200px 1fr 200px;
/* サイドバー200px、メインは残り、サイドバー200px */
```

### 学習のポイント

- ✅ `display: grid;` で Grid を有効化する
- ✅ `grid-template-columns` で列の数と幅を指定
- ✅ `grid-template-rows` で行の数と高さを指定
- ✅ `gap` でグリッド間の余白を設定
- ✅ `1fr` で余白を柔軟に分配
- ✅ `repeat()` で繰り返しパターンを簡潔に書く
- ✅ `grid-column: 1 / -1;` で全列をまたぐ
- ✅ Grid の中に Grid を入れられる（ネスト）
- ✅ AI に指示する時は、プロパティ名を具体的に指定する

---

**お疲れ様！** 🎉

Grid の使い方をしっかりマスターできたね！

次は Lesson 4 でレスポンシブデザインを学んで、様々な画面サイズに対応しよう！

---

**Let's vibe and code!** 🎉
