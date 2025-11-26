# Lesson 5: テキストスタイリング ✍️

**学習目標**：テキストの見た目を自由に変更できるようになる

---

## なぜテキストスタイリングを学ぶの？

Lesson 4 で CSS の基本を学んだけど、まだテキストの装飾については詳しく学んでないよね。

このレッスンでは、**テキストを美しく、読みやすく、魅力的にする方法**を学ぶよ！

### テキストスタイリングでできること

- ✅ 色を自由に変更（16 進数カラーコード、RGB など）
- ✅ フォントを変更（ゴシック、明朝、Web フォントなど）
- ✅ 文字サイズを柔軟に調整（px, em, rem など）
- ✅ 太字、斜体、下線などの装飾
- ✅ 行間や文字間隔を調整して読みやすく
- ✅ 中央寄せ、右寄せなどの配置

**まるで、ワープロソフトのフォント設定みたい！** Word や Pages でやったことが、全部できるよ！✨

---

## 色の指定方法（詳細版）

Lesson 4 では色名（`blue`, `red` など）を使ったけど、実はもっと細かく色を指定する方法があるんだ！

### 1. 色名（Color Name）- 基本

英語の色名を使う方法。シンプルで分かりやすい！

```css
h1 {
  color: blue;
  background-color: lightgray;
}
```

#### よく使う色名

| 色名        | 見た目 | 用途             |
| ----------- | ------ | ---------------- |
| `red`       | 赤     | 警告、エラー     |
| `blue`      | 青     | リンク、見出し   |
| `green`     | 緑     | 成功メッセージ   |
| `yellow`    | 黄     | 警告、ハイライト |
| `gray`      | 灰色   | 補足テキスト     |
| `white`     | 白     | 背景、文字       |
| `black`     | 黒     | 文字             |
| `lightblue` | 薄青   | 背景、アクセント |
| `lightgray` | 薄灰色 | ボーダー、背景   |
| `darkblue`  | 濃青   | 見出し、強調     |

#### メリット・デメリット

**メリット**：

- ✅ 分かりやすい、覚えやすい
- ✅ 学習に最適

**デメリット**：

- ❌ 細かい色の調整ができない
- ❌ 色の種類が限られている（約 140 色）

---

### 2. 16 進数カラーコード（Hex Code）- 実務で最も使う！⭐

`#` で始まる 6 桁（または 3 桁）の英数字で色を指定する方法。

```css
h1 {
  color: #3b82f6; /* 青色 */
  background-color: #f3f4f6; /* 薄い灰色 */
}
```

#### 仕組み

**形式**：`#RRGGBB`

- **RR**：赤（Red）の明るさ（00〜FF）
- **GG**：緑（Green）の明るさ（00〜FF）
- **BB**：青（Blue）の明るさ（00〜FF）

**値の範囲**：

- `00`：暗い（0）
- `FF`：明るい（255）

#### 例

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

#### 短縮形（3 桁）

同じ値が連続する場合、3 桁で短縮できる。

```css
#ff0000 → #f00 /* 赤 */
#00ff00 → #0f0 /* 緑 */
#0000ff → #00f /* 青 */
#ffffff → #fff /* 白 */
#000000 → #000 /* 黒 */
```

#### メリット・デメリット

**メリット**：

- ✅ **細かい色の調整が可能**
- ✅ **実務で最もよく使われる**（デザインツールから直接コピペできる）
- ✅ 短くて読みやすい

**デメリット**：

- ❌ 直感的に色が分からない（`#3b82f6` が青色だとパッと分からない）

---

### 3. RGB / RGBA - 透明度も指定できる！

赤・緑・青の光の三原色を 0〜255 の数値で指定する方法。

#### RGB（不透明）

```css
h1 {
  color: rgb(59, 130, 246); /* 青色（#3b82f6 と同じ） */
  background-color: rgb(243, 244, 246); /* 薄い灰色 */
}
```

**形式**：`rgb(赤, 緑, 青)`

- **赤**：0〜255
- **緑**：0〜255
- **青**：0〜255

#### RGBA（透明度付き）⭐

```css
.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* 黒、透明度50% */
}

.highlight {
  background-color: rgba(59, 130, 246, 0.2); /* 青、透明度20% */
}
```

**形式**：`rgba(赤, 緑, 青, 透明度)`

- **赤**：0〜255
- **緑**：0〜255
- **青**：0〜255
- **透明度**：0（完全に透明）〜 1（完全に不透明）

#### 例

```css
/* 基本色 */
rgb(0, 0, 0) /* 黒 */
rgb(255, 255, 255) /* 白 */
rgb(255, 0, 0) /* 赤 */

/* 透明度付き */
rgba(0, 0, 0, 0.5) /* 半透明の黒（オーバーレイに最適） */
rgba(255, 255, 255, 0.9) /* ほぼ不透明の白 */
rgba(59, 130, 246, 0.2) /* 薄い青（ハイライト背景） */
```

#### メリット・デメリット

**メリット**：

- ✅ **透明度を指定できる**（超便利！）
- ✅ 数値が直感的（0〜255 は分かりやすい）

**デメリット**：

- ❌ 16 進数より少し長い

---

### 4. HSL / HSLA - 色相・彩度・明度で指定

色相（Hue）、彩度（Saturation）、明度（Lightness）で色を指定する方法。

```css
h1 {
  color: hsl(217, 91%, 60%); /* 青色 */
  background-color: hsla(217, 91%, 60%, 0.2); /* 薄い青 */
}
```

**形式**：`hsl(色相, 彩度, 明度)` / `hsla(色相, 彩度, 明度, 透明度)`

- **色相**：0〜360（色の種類）
  - 0/360：赤
  - 120：緑
  - 240：青
- **彩度**：0%〜100%（鮮やかさ）
- **明度**：0%〜100%（明るさ）
- **透明度**：0〜1

#### メリット・デメリット

**メリット**：

- ✅ 色の調整がしやすい（色相を変えるだけで色を変えられる）
- ✅ 同系色を作りやすい

**デメリット**：

- ❌ 直感的に理解しづらい（慣れが必要）

---

### 色の指定方法まとめ

| 方法    | 例                         | 透明度 | 実務での使用頻度 | おすすめ度 |
| ------- | -------------------------- | ------ | ---------------- | ---------- |
| 色名    | `blue`                     | ❌     | ⭐⭐             | ⭐⭐⭐     |
| 16 進数 | `#3b82f6`                  | ❌     | ⭐⭐⭐⭐⭐       | ⭐⭐⭐⭐⭐ |
| RGB     | `rgb(59, 130, 246)`        | ❌     | ⭐⭐             | ⭐⭐⭐     |
| RGBA    | `rgba(59, 130, 246, 0.5)`  | ✅     | ⭐⭐⭐⭐         | ⭐⭐⭐⭐⭐ |
| HSL     | `hsl(217, 91%, 60%)`       | ❌     | ⭐⭐             | ⭐⭐       |
| HSLA    | `hsla(217, 91%, 60%, 0.5)` | ✅     | ⭐⭐             | ⭐⭐⭐     |

**おすすめの使い分け**：

- **学習中**：色名（`blue`, `red`）
- **実務（不透明）**：16 進数（`#3b82f6`）
- **実務（透明度付き）**：RGBA（`rgba(59, 130, 246, 0.5)`）

---

## サイズ単位（詳細版）

Lesson 4 では `px`（ピクセル）を使ったけど、実は他にも色々な単位があるんだ！

### 1. px（ピクセル）- 基本 ⭐

画面のドット数で指定する絶対単位。

```css
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}
```

#### 特徴

- ✅ **分かりやすい**（1px = 画面の 1 ドット）
- ✅ **正確**（指定した通りのサイズになる）
- ❌ **拡大・縮小に弱い**（ユーザーがフォントサイズを変更しても変わらない）

**使うべき場面**：

- 学習中
- ボーダーの太さ（`border: 1px solid`）
- 小さな要素（アイコン、余白など）

---

### 2. em - 親要素基準の相対単位

**親要素の font-size を基準**にした相対単位。

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em; /* 16px × 2 = 32px */
}
```

#### 計算方法

**親要素の font-size × em の値 = 実際のサイズ**

```css
/* 例1 */
.parent {
  font-size: 20px;
}
.child {
  font-size: 1.5em; /* 20px × 1.5 = 30px */
}

/* 例2 */
.parent {
  font-size: 16px;
}
.child {
  font-size: 0.875em; /* 16px × 0.875 = 14px */
}
```

#### 入れ子になった場合（注意！）

```css
.grandparent {
  font-size: 16px;
}

.parent {
  font-size: 1.5em; /* 16px × 1.5 = 24px */
}

.child {
  font-size: 1.5em; /* 24px × 1.5 = 36px（どんどん大きくなる！） */
}
```

⚠️ **注意**：入れ子になると、どんどん大きく（または小さく）なってしまう！

#### メリット・デメリット

**メリット**：

- ✅ 親要素に応じてサイズが変わる（柔軟）

**デメリット**：

- ❌ 入れ子の計算が複雑
- ❌ 予期しないサイズになりやすい

**使うべき場面**：

- 特定の要素内だけでサイズを調整したい時
- margin, padding（`padding: 1em` など）

---

### 3. rem（Root EM）- ルート要素基準の相対単位 ⭐

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

#### 計算方法

**ルート要素の font-size × rem の値 = 実際のサイズ**

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 16px × 2 = 32px */
}

h2 {
  font-size: 1.5rem; /* 16px × 1.5 = 24px */
}

p {
  font-size: 1rem; /* 16px × 1 = 16px */
}

small {
  font-size: 0.875rem; /* 16px × 0.875 = 14px */
}
```

#### 入れ子になっても安心！

```css
html {
  font-size: 16px;
}

.grandparent {
  font-size: 1.5rem; /* 16px × 1.5 = 24px */
}

.parent {
  font-size: 1.5rem; /* 16px × 1.5 = 24px（親の影響を受けない！） */
}

.child {
  font-size: 1.5rem; /* 16px × 1.5 = 24px（常に同じ！） */
}
```

✅ **`rem` は常にルート要素を基準にするから、入れ子でも安心！**

#### メリット・デメリット

**メリット**：

- ✅ **入れ子の影響を受けない**（予測しやすい！）
- ✅ **一括でサイズ変更できる**（ルート要素の font-size を変えるだけ）
- ✅ **アクセシビリティに優れている**（ユーザーのフォント設定を尊重）

**デメリット**：

- ❌ 計算が必要（16px × 1.5 = 24px）

**使うべき場面**：

- **実務では最もおすすめ！**
- font-size
- margin, padding
- 全体的なサイズ調整が必要な場合

---

### 4. %（パーセント）- 親要素基準

親要素のサイズに対する割合で指定。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 150%; /* 20px × 150% = 30px */
}
```

#### 使うべき場面

- 幅、高さ（`width: 50%`, `height: 100%`）
- font-size（ただし、rem の方が分かりやすい）

---

### サイズ単位まとめ

| 単位  | 基準                   | 入れ子   | 実務での使用頻度 | おすすめ度 |
| ----- | ---------------------- | -------- | ---------------- | ---------- |
| `px`  | 絶対値（画面ドット）   | 影響なし | ⭐⭐⭐⭐         | ⭐⭐⭐⭐   |
| `em`  | 親要素の font-size     | 影響あり | ⭐⭐             | ⭐⭐       |
| `rem` | ルート要素の font-size | 影響なし | ⭐⭐⭐⭐⭐       | ⭐⭐⭐⭐⭐ |
| `%`   | 親要素のサイズ         | 影響あり | ⭐⭐⭐           | ⭐⭐⭐     |

**おすすめの使い分け**：

- **学習中**：`px`
- **実務（font-size）**：`rem`（最もおすすめ！）
- **実務（幅・高さ）**：`%` または `px`
- **実務（余白）**：`rem` または `px`

---

## フォント関連のプロパティ

テキストのフォント（書体）やサイズを変更する方法を学ぼう！

### 1. font-family - フォントの種類 ⭐

使用するフォント（書体）を指定する。

```css
h1 {
  font-family: "Arial", "Helvetica", sans-serif;
}

p {
  font-family: "游ゴシック", "Yu Gothic", "Hiragino Sans", sans-serif;
}
```

#### フォントファミリーの種類

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
font-family: "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;

/* 明朝体 */
font-family: "游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN",
  serif;
```

#### フォールバック（fallback）の仕組み

フォントは左から順に試され、見つからなければ次のフォントが使われる。

```css
font-family: "游ゴシック", "Yu Gothic", sans-serif;
```

1. 「游ゴシック」があれば使う
2. なければ「Yu Gothic」を使う
3. なければブラウザのデフォルトのゴシック体（sans-serif）を使う

#### 一般的なフォントファミリー

| 値           | 意味             | 例               |
| ------------ | ---------------- | ---------------- |
| `serif`      | 明朝体           | Times New Roman  |
| `sans-serif` | ゴシック体       | Arial, Helvetica |
| `monospace`  | 等幅フォント     | Courier New      |
| `cursive`    | 筆記体           | Comic Sans MS    |
| `fantasy`    | 装飾的なフォント | Impact           |

**実務では**、最後に必ず一般的なフォントファミリー（`sans-serif`, `serif` など）を指定しよう！

#### Web フォント

Google Fonts などの Web フォントを使えば、どの環境でも同じフォントが表示できる！

```html
<!-- HTML の <head> 内 -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

```css
/* CSS */
body {
  font-family: "Noto Sans JP", sans-serif;
}
```

---

### 2. font-size - 文字サイズ ⭐

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

#### よく使うサイズ（px 基準）

| 要素    | サイズ  | 用途               |
| ------- | ------- | ------------------ |
| `h1`    | 32-48px | メインタイトル     |
| `h2`    | 24-32px | サブタイトル       |
| `h3`    | 20-24px | 小見出し           |
| `p`     | 16px    | 本文（基本）       |
| `small` | 12-14px | 補足、キャプション |

#### よく使うサイズ（rem 基準）

```css
html {
  font-size: 16px; /* 基準 */
}

h1 {
  font-size: 2.5rem;
} /* 40px */
h2 {
  font-size: 2rem;
} /* 32px */
h3 {
  font-size: 1.5rem;
} /* 24px */
p {
  font-size: 1rem;
} /* 16px */
small {
  font-size: 0.875rem;
} /* 14px */
```

---

### 3. font-weight - 文字の太さ ⭐

文字の太さを指定する。

```css
h1 {
  font-weight: bold; /* 太字 */
}

p {
  font-weight: normal; /* 通常 */
}

.thin {
  font-weight: 300; /* 細字 */
}
```

#### 値の種類

**キーワード**：

```css
font-weight: normal; /* 通常（400） */
font-weight: bold; /* 太字（700） */
```

**数値**：

```css
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

#### よく使う値

| 値    | 見た目   | 用途         |
| ----- | -------- | ------------ |
| `300` | 細い     | 補足テキスト |
| `400` | 通常     | 本文         |
| `500` | やや太い | 小見出し     |
| `700` | 太字     | 見出し、強調 |

---

### 4. font-style - 斜体

文字を斜体にする。

```css
em {
  font-style: italic; /* 斜体 */
}

p {
  font-style: normal; /* 通常（斜体を解除） */
}
```

#### 値の種類

```css
font-style: normal; /* 通常 */
font-style: italic; /* 斜体 */
font-style: oblique; /* 斜体（italicと似ている） */
```

---

### 5. font（一括指定）

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
}
```

**形式**：`font: style weight size family;`

**注意**：`size` と `family` は必須！

---

## テキストの色と背景

### 1. color - 文字色 ⭐

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

### 2. background-color - 背景色 ⭐

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

### 1. text-decoration - 下線・打ち消し線 ⭐

テキストに下線や打ち消し線を付ける。

```css
a {
  text-decoration: underline; /* 下線 */
}

.no-underline {
  text-decoration: none; /* 下線なし */
}

del {
  text-decoration: line-through; /* 打ち消し線 */
}
```

#### 値の種類

```css
text-decoration: none; /* なし */
text-decoration: underline; /* 下線 */
text-decoration: overline; /* 上線 */
text-decoration: line-through; /* 打ち消し線 */
```

#### よくある使い方

**リンクの下線を消す**：

```css
a {
  text-decoration: none; /* リンクの下線を消す */
}

a:hover {
  text-decoration: underline; /* ホバー時に下線を表示 */
}
```

---

### 2. text-transform - 大文字・小文字変換

英字の大文字・小文字を変換する。

```css
.uppercase {
  text-transform: uppercase; /* すべて大文字 */
}

.lowercase {
  text-transform: lowercase; /* すべて小文字 */
}

.capitalize {
  text-transform: capitalize; /* 単語の先頭だけ大文字 */
}
```

#### 例

```html
<p class="uppercase">hello world</p>
<!-- HELLO WORLD -->
<p class="lowercase">HELLO WORLD</p>
<!-- hello world -->
<p class="capitalize">hello world</p>
<!-- Hello World -->
```

---

## テキストの配置

### 1. text-align - 水平方向の配置 ⭐

テキストの水平方向の配置を指定する。

```css
h1 {
  text-align: center; /* 中央寄せ */
}

p {
  text-align: left; /* 左寄せ（デフォルト） */
}

.right {
  text-align: right; /* 右寄せ */
}

.justify {
  text-align: justify; /* 両端揃え */
}
```

#### 値の種類

```css
text-align: left; /* 左寄せ */
text-align: center; /* 中央寄せ */
text-align: right; /* 右寄せ */
text-align: justify; /* 両端揃え */
```

#### 使用例

```html
<h1 style="text-align: center;">中央寄せのタイトル</h1>
<p style="text-align: justify;">
  両端揃えの段落。長い文章を両端揃えにすると、
  左右の端がきれいに揃って見やすくなります。
</p>
```

---

## 行間と文字間隔

### 1. line-height - 行間 ⭐

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

#### 指定方法

**倍率（おすすめ）**：

```css
line-height: 1.6; /* font-size の 1.6 倍 */
```

**px**：

```css
line-height: 24px; /* 固定値 */
```

**%**：

```css
line-height: 160%; /* font-size の 160% */
```

#### よく使う値

| 値    | 用途                     |
| ----- | ------------------------ |
| `1`   | ぎゅっと詰める（見出し） |
| `1.2` | 見出し                   |
| `1.5` | 本文（やや狭め）         |
| `1.6` | 本文（標準、おすすめ）   |
| `1.8` | 本文（やや広め）         |
| `2`   | ゆったり（読みやすい）   |

**おすすめ**：本文は `1.6` 前後が読みやすい！

---

### 2. letter-spacing - 文字間隔

文字と文字の間隔を指定する。

```css
h1 {
  letter-spacing: 0.05em; /* やや広げる */
}

.tight {
  letter-spacing: -0.05em; /* 狭める */
}

.loose {
  letter-spacing: 0.1em; /* 広げる */
}
```

#### よく使う値

```css
letter-spacing: normal; /* 通常 */
letter-spacing: 0.05em; /* やや広げる（見出しに最適） */
letter-spacing: 0.1em; /* 広げる */
letter-spacing: -0.05em; /* 狭める */
```

---

### 3. word-spacing - 単語間隔

単語と単語の間隔を指定する（英語など）。

```css
p {
  word-spacing: 0.2em; /* 単語間を広げる */
}
```

**日本語では**、あまり使わない（英語向け）。

---

## 🤖 バイブコーディング実践

テキストスタイリングを AI に生成してもらう時のコツを学ぼう！

### AI への指示例

#### ⭕ 良い指示の例

```text
「以下のHTMLにCSSを追加してください：
- h1は青色（#3b82f6）、36px、中央寄せ、太字
- pは灰色（#6b7280）、16px、行間1.6、左寄せ
- .highlight クラスは黄色背景、太字、文字間隔0.05em
- リンク（a）は青色、下線なし、ホバー時に下線を表示」
```

**ポイント**：

- 色を具体的に指定（色名または 16 進数）
- サイズ、行間、配置を明示
- 状態（ホバー時など）も指定

---

#### ❌ 曖昧な指示の例

```text
「見出しをかっこよくして」
```

**問題点**：

- 「かっこよく」が曖昧
- 色、サイズ、配置が不明
- どの要素かも不明確

---

### 生成されたコードの読み方

AI が CSS を生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **フォントサイズの単位があるか？**

   ```css
   /* 良い例 */
   font-size: 16px;
   font-size: 1rem;

   /* 悪い例：単位がない */
   font-size: 16; /* ❌ */
   ```

2. **色の指定が正しいか？**

   ```css
   /* 良い例 */
   color: blue;
   color: #3b82f6;
   color: rgb(59, 130, 246);

   /* 悪い例 */
   color: #gggggg; /* ❌ 不正な16進数 */
   ```

3. **line-height に単位が付いていないか？**

   ```css
   /* 良い例：倍率（単位なし） */
   line-height: 1.6;

   /* 悪い例：単位が付いている（意図しない挙動） */
   line-height: 1.6px; /* ❌ */
   ```

4. **font-family の最後に一般的なファミリーがあるか？**

   ```css
   /* 良い例 */
   font-family: "Arial", sans-serif;

   /* 悪い例：フォールバックがない */
   font-family: "Arial"; /* ⚠️ フォールバックを追加した方が良い */
   ```

---

### よくある問題と修正方法

#### 問題 1：line-height に単位が付いている

**症状**：行間が意図した通りにならない

```css
/* 悪い例 */
p {
  font-size: 16px;
  line-height: 1.6px; /* ❌ これだと行間が超狭い！ */
}

/* 良い例 */
p {
  font-size: 16px;
  line-height: 1.6; /* ✅ 単位なし（倍率） */
}
```

**修正**：`line-height` は倍率なので、単位を付けない！

---

#### 問題 2：rem と px を混在させすぎている

**症状**：統一感がない、管理しづらい

```css
/* 悪い例：混在しすぎ */
h1 {
  font-size: 32px;
  margin-bottom: 1rem;
  padding: 10px;
  letter-spacing: 0.05em;
}

/* 良い例：統一 */
h1 {
  font-size: 2rem; /* rem で統一 */
  margin-bottom: 1rem;
  padding: 0.625rem; /* 10px ÷ 16 = 0.625rem */
  letter-spacing: 0.05em;
}
```

**修正**：できるだけ統一する（font-size は rem、細かい調整は px、など）

---

#### 問題 3：色が多すぎる

**症状**：デザインがまとまらない

```css
/* 悪い例：色が多すぎ */
h1 {
  color: #3b82f6;
}
h2 {
  color: #2563eb;
}
h3 {
  color: #1d4ed8;
}
p {
  color: #6b7280;
}
.highlight {
  background-color: #fef3c7;
}
.warning {
  background-color: #fecaca;
}
```

**修正**：色を 3〜5 色に絞る（メイン色、アクセント色、グレーなど）

---

### カスタマイズポイント

AI が生成した CSS をカスタマイズする時、よくいじる箇所：

#### 1. 色の微調整

```css
h1 {
  color: #3b82f6; /* ← 好みの青に変える */
}
```

**Tips**：[Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors) から選ぶと楽！

---

#### 2. 行間の調整

```css
p {
  line-height: 1.6; /* ← 1.5〜2.0 の間で調整 */
}
```

**試してみよう**：

- `1.5`：やや狭め
- `1.6`：標準（おすすめ）
- `1.8`：やや広め
- `2.0`：ゆったり

---

#### 3. 文字間隔の調整

```css
h1 {
  letter-spacing: 0.05em; /* ← 0〜0.1em の間で調整 */
}
```

**試してみよう**：

- `0`：通常
- `0.05em`：やや広げる（見出しに最適）
- `0.1em`：広げる

---

## 💪 演習

学んだ内容を実際に試してみよう！

👉 **[演習問題に挑戦する](exercises/README.md)**

演習には以下の内容が含まれているよ：

- **基礎編**：色の変更、rem でフォントサイズ調整、行間調整
- **応用編**：見出しの完全なスタイリング、リンクのスタイリング、AI で包括的なスタイリング

すべての演習に解答例と詳しい解説が用意されているから、分からなくても安心！

---

## 📝 まとめ

このレッスンで学んだこと：

- ✅ **色の指定方法**を学んだ

  - 色名：シンプル、学習に最適
  - 16 進数：実務で最も使う
  - RGBA：透明度も指定できる
  - HSL：色相・彩度・明度で指定

- ✅ **サイズ単位**を学んだ

  - px：絶対値、分かりやすい
  - em：親要素基準、入れ子に注意
  - rem：ルート要素基準、実務でおすすめ
  - %：親要素のサイズに対する割合

- ✅ **フォント関連のプロパティ**を学んだ

  - font-family：フォントの種類
  - font-size：文字サイズ
  - font-weight：文字の太さ
  - font-style：斜体

- ✅ **テキストの装飾**を学んだ

  - text-decoration：下線、打ち消し線
  - text-transform：大文字・小文字変換

- ✅ **テキストの配置**を学んだ

  - text-align：左寄せ、中央、右寄せ、両端揃え

- ✅ **行間と文字間隔**を学んだ

  - line-height：行間（倍率で指定、単位なし）
  - letter-spacing：文字間隔
  - word-spacing：単語間隔

- ✅ **AI への指示の出し方**が分かった

  - 色、サイズ、配置を具体的に指定
  - 状態（ホバー時など）も明示

- ✅ **生成されたコードのチェック方法**を学んだ
  - line-height は単位なし
  - 色の統一
  - rem と px の使い分け

### 重要なポイント

**テキストスタイリングは、デザインの基本！** ✍️✨

- 色、サイズ、フォント、配置を組み合わせて、美しいテキストを作れる
- rem を使えば、アクセシビリティに優れたサイトになる
- 行間（line-height）を調整するだけで、読みやすさが劇的に変わる
- AI に具体的に指示すれば、望み通りのスタイリングが生成される

**まるで、ワープロソフトのフォント設定をコードで書いているみたい！** 💻

---

## 🚀 次のステップ

テキストスタイリングをマスターしたら、Phase 1 は完了！🎉

次は Phase 1 全体の復習と、ミニプロジェクトに挑戦しよう！

**Phase 1 の完了チェックリスト**：

- [ ] HTML の基本構造を理解した
- [ ] HTML 基本要素（見出し、段落、リスト、画像、リンク）を使える
- [ ] セマンティック HTML を理解した
- [ ] CSS の基本（セレクタ、ボックスモデル、display）を理解した
- [ ] テキストスタイリング（色、フォント、配置、行間）ができる
- [ ] AI と協働して HTML/CSS を作成できる

**全部チェックできたら、Phase 2 へ進む準備完了！** 🚀

👉 [Phase 1 の復習とミニプロジェクト](../../README.md)

---

**Let's vibe and code!** 🎉

テキストスタイリングで、美しいページを作ろう！
