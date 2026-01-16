---
marp: true
theme: udemy
lang: ja
paginate: true
# header: "バイブコーダーに贈るフロントエンド開発入門（Phase 2）"
# footer: "© 2026 Kazuhiko Sugimoto"
---

<!-- _class: center -->
<!-- _header: "" -->
<!-- _paginate: skip -->

# バイブコーダーに贈るフロントエンド開発入門

## Phase 2： HTML/CSS 発展編

---

## Phase 2 で学ぶこと

Phase 1 で学んだ HTML/CSS の基礎を土台に、**実践的でインタラクティブなレイアウト**を作る方法を学ぶよ！

### Phase 2 のゴール

- フォームを使ってユーザー入力を受け取れる
- Flexbox で柔軟な 1 次元レイアウトが作れる
- Grid で複雑な 2 次元レイアウトが作れる
- レスポンシブデザインで全デバイスに対応できる
- CSS アニメーションで魅力的な動きを追加できる

---

## Lesson 1: HTML フォーム 📝

**学習目標**：HTML フォームの基本構造を理解し、ユーザー入力を受け取る様々なフォーム要素を使いこなせるようになる

### なぜ HTML フォームを学ぶの？

Web ページは情報を**見る**だけじゃない！ユーザーが情報を**入力する**場面も超重要だよね。

- Google で検索する 🔍
- お問い合わせフォームを送信する 📧
- 商品を注文する 🛒
- ログインする 🔐

###### これらは全部、HTML フォームで作られてる！

---

## フォームの基本構造

### 最もシンプルなフォーム

```html
<form>
  <label for="name">お名前:</label>
  <input type="text" id="name" name="name" />

  <label for="email">メールアドレス:</label>
  <input type="email" id="email" name="email" />

  <button type="submit">送信</button>
</form>
```

###### たったこれだけで、ユーザーが情報を入力できるフォームの完成！ 🎉

---

## `<form>` タグ

```html
<form action="/submit" method="POST">
  <!-- フォームの内容がここに入る -->
</form>
```

- **役割**：フォーム全体を囲む箱
- **action**：送信先の URL
- **method**：送信方法（`GET` または `POST`）

**例え話**：紙のアンケート用紙全体。この中に質問と回答欄が入る。

---

## `<input>` タグ

```html
<input type="text" id="name" name="name" />
```

- **役割**：ユーザーが情報を入力する欄
- **type 属性**：入力の種類を指定（超重要！）
- **name 属性**：データを送信する時の名前
- **id 属性**：label との関連付け用

**例え話**：アンケート用紙の「回答欄」。種類によって、テキスト欄だったり、チェックボックスだったり。

---

## `<label>` タグ

```html
<label for="email">メールアドレス:</label>
<input type="email" id="email" name="email" />
```

- **役割**：入力欄の説明文
- **for 属性**：対応する input の `id` を指定
- **必須度**：⭐⭐⭐⭐⭐（アクセシビリティのため必須！）

**例え話**：アンケート用紙の「質問文」。何を入力すればいいか示す。

**重要！** label と input を関連付けると：

- label をクリックしても input にフォーカスできる（便利！）
- スクリーンリーダーが正しく読み上げる（アクセシビリティ向上！）

---

## `<input>` の様々なタイプ

`type` 属性を変えると、入力欄の種類が変わるよ！

| type       | 用途                       | 特徴                                    |
| ---------- | -------------------------- | --------------------------------------- |
| `text`     | 1 行テキスト               | 名前、住所など                          |
| `email`    | メールアドレス             | スマホで`@`入りキーボード、形式チェック |
| `password` | パスワード                 | 入力が`⚫︎⚫︎⚫︎⚫︎`で隠れる                |
| `number`   | 数値                       | 上下ボタン、数値キーボード              |
| `date`     | 日付                       | カレンダーから選択                      |
| `tel`      | 電話番号                   | 電話番号キーボード                      |

---

## `<input>` の様々なタイプ（続き）

| type       | 用途               | 特徴                           |
| ---------- | ------------------ | ------------------------------ |
| `url`      | URL                | URL 形式をチェック             |
| `checkbox` | チェックボックス   | 複数選択可能                   |
| `radio`    | ラジオボタン       | 1 つだけ選択可能               |
| `file`     | ファイル選択       | 画像、PDF などのアップロード   |

##### 表：`<input>` の様々なタイプ

###### type を変えるだけで、スマホのキーボードも自動で最適化される！📱

---

## checkbox と radio の違い

```html
<!-- checkbox（複数選択可能） -->
<label>
  <input type="checkbox" name="interests" value="coding">プログラミング
</label>
<label>
  <input type="checkbox" name="interests" value="design">デザイン
</label>
```

```html
<!-- radio（1 つだけ選択可能） -->
<label>
  <input type="radio" name="gender" value="female">女性
</label>
<label>
  <input type="radio" name="gender" value="male">男性
</label>
<label>
  <input type="radio" name="gender" value="other">その他
</label>
```

**重要！** radio は同じ `name` 属性を持つと、1 つだけ選択可能になる！

---

## その他の入力要素

### `<textarea>` - 複数行テキスト

長い文章の入力（お問い合わせ内容、コメントなど）

```html
<label for="message">メッセージ:</label>
<textarea id="message" name="message" rows="5"></textarea>
```

### `<select>` - ドロップダウンリスト

多くの選択肢から 1 つを選ぶ

```html
<label for="country">国:</label>
<select id="country" name="country">
  <option value="">選択してください</option>
  <option value="jp">日本</option>
  <option value="us">アメリカ</option>
</select>
```

---

## HTML5 バリデーション属性

フォームに入力制限を付けて、間違った入力を防ごう！

### `required` - 必須項目

```html
<input type="email" name="email" required>
```

- 空欄のまま送信できない

### `minlength`, `maxlength` - 文字数制限

```html
<input type="password" name="password" minlength="8" maxlength="20">
```

- **minlength**：最小文字数
- **maxlength**：最大文字数

---

## HTML5 バリデーション属性（続き）

### `min`, `max` - 数値範囲

```html
<input type="number" name="age" min="18" max="120">
```

- **min**：最小値
- **max**：最大値

### `pattern` - 正規表現パターン

```html
<input type="text" name="zipcode" pattern="\d{3}-\d{4}" placeholder="123-4567">
```

- **pattern**：正規表現で入力形式を指定
- **例**：
  - `\d{3}-\d{4}`：3 桁-4 桁（郵便番号）
  - `[a-zA-Z0-9]+`：英数字のみ

---

## HTML5 バリデーション属性（続き）

### `placeholder` - 入力例の表示

```html
<input type="email" name="email" placeholder="email@example.com">
```

- **効果**：入力欄に薄く例を表示（ヒント）

<div class="caution">

- **注意**：placeholder は label の代わりにならない！必ず label も付けよう

</div>

---

## 完全版のフォーム例

ここまで学んだことを全部使った、実践的なお問い合わせフォーム：

<div class="columns-2">

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>お問い合わせフォーム</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>

    <form action="/submit" method="POST">
      <!-- 名前 -->
      <div>
        <label for="name">お名前（必須）:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <!-- メールアドレス -->
      <div>
        <label for="email">メールアドレス（必須）:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@email.com"
        />
      </div>

      <!-- 電話番号 -->
      <div>
        <label for="phone">電話番号:</label>
        <input type="tel" id="phone" name="phone" placeholder="090-1234-5678" />
      </div>

      <!-- お問い合わせ種類 -->
      <div>
        <label for="category">お問い合わせ種類:</label>
        <select id="category" name="category" required>
          <option value="">選択してください</option>
          <option value="product">製品について</option>
          <option value="support">サポート</option>
          <option value="other">その他</option>
        </select>
      </div>

      <!-- メッセージ -->
      <div>
        <label for="message">メッセージ（必須）:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <!-- 利用規約同意 -->
      <div>
        <label>
          <input type="checkbox" name="agree" value="yes" required />
          利用規約に同意します
        </label>
      </div>

      <!-- 送信ボタン -->
      <button type="submit">送信</button>
    </form>
  </body>
</html>
```

</div>

---

## Lesson 1: HTML フォームまとめ

このレッスンで学んだこと：

- **フォームの基本構造**（`<form>`, `<label>`, `<input>`）
- **様々な input タイプ**（text, email, password, checkbox など）
- **label と input の正しい関連付け**（アクセシビリティ）
- **その他の入力要素**（`<textarea>`, `<select>`）
- **HTML5 バリデーション**（required, minlength, pattern など）

---

## Lesson 2: Flexbox - 柔軟な 1 次元レイアウト 📦

**学習目標**：Flexbox を使って、要素を柔軟に配置できるようになる

### なぜ Flexbox を学ぶの？

Phase 1 で学んだ CSS では、要素を横に並べたり、中央に配置したりするのが結構大変だったよね。

**Flexbox を使うと、こんなレイアウトが簡単に作れる！** 🎯

- 要素を横並びにする（縦並びも！）
- 要素を中央に配置する
- 要素の間隔を均等にする
- 要素の高さを揃える
- スマホでは縦並び、PC では横並びに切り替える

---

## Flexbox の基本概念

### Flexbox とは？

**Flexbox（フレキシブルボックスレイアウト）** は、**1 次元**のレイアウトシステムだよ。

**「1 次元」ってどういうこと？**

- **横方向（行）** または **縦方向（列）** のどちらか一方に要素を並べる
- 「横と縦を同時に」ではなく、「横だけ」「縦だけ」を扱う

```text
【1次元レイアウト = Flexbox】
横方向：
□ □ □ □

縦方向：
□
□
□
□
```

---

## Flex Container と Flex Item

### Flex Container（親要素）

```html
<!-- これがflex container -->
<div class="container">
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
  <div class="item">アイテム3</div>
</div>
```

```css
.container {
  display: flex; /* これでflex containerになる！ */
}
```

- **役割**：子要素（flex item）を並べる「箱」
- **設定**：`display: flex;` を指定する

---

### Flex Item（子要素）

```html
<div class="container">
  <!-- これがflex item -->
  <div class="item">アイテム1</div>
  <!-- これもflex item -->
  <div class="item">アイテム2</div>
  <!-- これもflex item -->
  <div class="item">アイテム3</div>
</div>
```

- **役割**：並べられる「要素」
- **自動的に**：親が `display: flex;` になると、その直下の子要素が flex item になる

---

## 最もシンプルな Flexbox

<div class="flex gap-x-1">
<div class="flex-1">

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 20px;
}

.item {
  background-color: #3b82f6;
  color: white;
  padding: 20px;
  margin: 5px;
}
```

</div>
<div class="flex-1">

```html
<div class="container">
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
  <div class="item">アイテム3</div>
</div>
```

</div>
</div>

**結果**：3 つのアイテムが**横並び**になる！🎉

---

## flex-direction - 並べる方向を変える

### `flex-direction: row`（デフォルト）

```css
.container {
  display: flex;
  flex-direction: row; /* 横並び（左→右） */
}
```

### `flex-direction: column`

```css
.container {
  display: flex;
  flex-direction: column; /* 縦並び（上→下） */
}
```

---

## 主軸と交差軸 - Flexbox の重要な概念

<div class="flex">
<div class="flex-1">

### 主軸（Main Axis）

- **定義**：flex item が並ぶ方向の軸
- **デフォルト**：横方向（左 → 右）

### 交差軸（Cross Axis）

- **定義**：主軸に垂直な軸
- **デフォルト**：縦方向（上 → 下）

**なぜ軸が重要？**

`justify-content`：**主軸方向**の配置を制御
`align-items`：**交差軸方向**の配置を制御

</div>
<div class="flex-1">

```text
【flex-direction: row（デフォルト）】
 主軸 ➡️（横）
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
└───────┴───────┴───────┘
  交
  差
  軸
  ⬇️（縦）

【flex-direction: column】
交差軸 ➡️（横）
┌───────┐
│Item 1 │
├───────┤
│Item 2 │
├───────┤
│Item 3 │
└───────┘
  主
  軸
  ⬇️（縦）
```

</div>
</div>

---

## justify-content - 主軸方向の配置

`justify-content` で、**主軸方向**（デフォルトは横方向）の配置を制御できるよ！

#### 主要な値

```css
justify-content: flex-start;    /* 左寄せ（デフォルト） */
justify-content: center;        /* 中央揃え */
justify-content: flex-end;      /* 右寄せ */
justify-content: space-between; /* 両端に配置、間隔を均等に */
justify-content: space-around;  /* 各要素の周りに均等な余白 */
justify-content: space-evenly;  /* 全ての余白が均等 */
```

---

### `justify-content: flex-start`（デフォルト）

```css
.container {
  display: flex;
  justify-content: flex-start; /* 左寄せ */
}
```

**結果**：

```text
┌───────────────────────────────────────────────┐
│┌───────┬───────┬───────┐                      │
││Item 1 │Item 2 │Item 3 │                      │
│└───────┴───────┴───────┘                      │
│                                               │
```

---

### `justify-content: flex-end`

```css
.container {
  display: flex;
  justify-content: flex-end; /* 右寄せ */
}
```

**結果**：

```text
┌───────────────────────────────────────────────┐
│                      ┌───────┬───────┬───────┐│
│                      │Item 1 │Item 2 │Item 3 ││
│                      └───────┴───────┴───────┘│
│                                               │
```

---

### `justify-content: center`

```css
.container {
  display: flex;
  justify-content: center; /* 中央揃え */
}
```

**結果**：

```text
┌───────────────────────────────────────────────┐
│           ┌───────┬───────┬───────┐           │
│           │Item 1 │Item 2 │Item 3 │           │
│           └───────┴───────┴───────┘           │
│                                               │
```

**超便利！** 要素を中央に配置するのが、こんなに簡単！🎯

---

### `justify-content: space-between`

```css
.container {
  display: flex;
  justify-content: space-between; /* 両端に配置、間隔を均等に */
}
```

**結果**：

```text
┌───────────────────────────────────────────────────┐
│┌───────┐            ┌───────┐            ┌───────┐│
││Item 1 │            │Item 2 │            │Item 3 ││
│└───────┘            └───────┘            └───────┘│
│                                                   │
```

**特徴**：

- 最初の要素は左端
- 最後の要素は右端
- 間隔が均等

---

### `justify-content: space-around`

```css
.container {
  display: flex;
  justify-content: space-around; /* 各要素の周りに均等な余白 */
}
```

**結果**：

```text
┌───────────────────────────────────────────────────┐
│    ┌───────┐        ┌───────┐        ┌───────┐    │
│    │Item 1 │        │Item 2 │        │Item 3 │    │
│    └───────┘        └───────┘        └───────┘    │
│                                                   │
```

**特徴**：

- 各要素の左右に同じサイズの余白
- 端の余白は要素間の余白の半分

---

### `justify-content: space-evenly`

```css
.container {
  display: flex;
  justify-content: space-evenly; /* 全ての余白が均等 */
}
```

**結果**：

```text
┌───────────────────────────────────────────────────┐
│      ┌───────┐      ┌───────┐      ┌───────┐      │
│      │Item 1 │      │Item 2 │      │Item 3 │      │
│      └───────┘      └───────┘      └───────┘      │
│                                                   │
```

**特徴**：

- 端の余白も要素間の余白も同じ

---

### 1. `align-items: stretch`（デフォルト）

```css
.container {
  display: flex;
  align-items: stretch; /* 高さを揃える */
  height: 200px;
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│       │       │       │
│Item 1 │Item 2 │Item 3 │
│       │       │       │
└───────┴───────┴───────┘
```

**特徴**：全ての flex item が container の高さいっぱいに伸びる

---

### 2. `align-items: flex-start`

```css
.container {
  display: flex;
  align-items: flex-start; /* 上揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
├───────┴───────┴───────┤
│                       │
│                       │
└───────────────────────┘
```

---

### 3. `align-items: flex-end`

```css
.container {
  display: flex;
  align-items: flex-end; /* 下揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────────────────────┐
│                       │
│                       │
├───────┬───────┬───────┤
│Item 1 │Item 2 │Item 3 │
└───────┴───────┴───────┘
```

---

### 4. `align-items: center`

```css
.container {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────────────────────┐
│                       │
├───────┬───────┬───────┤
│Item 1 │Item 2 │Item 3 │
├───────┴───────┴───────┤
│                       │
└───────────────────────┘
```

**超便利！** 縦方向の中央揃えも簡単！🎯

---

### 5. `align-items: baseline`

```css
.container {
  display: flex;
  align-items: baseline; /* テキストのベースラインで揃える */
}
```

**特徴**：各要素のテキストのベースライン（文字の下端）で揃える

---

## align-items - 交差軸方向の配置

`align-items` で、**交差軸方向**の配置を制御できる

#### 主要な値

```css
align-items: stretch;    /* 高さを揃える（デフォルト） */
align-items: flex-start; /* 上揃え */
align-items: center;     /* 縦方向の中央揃え */
align-items: flex-end;   /* 下揃え */
align-items: baseline;   /* テキストのベースラインで揃える */
```

---

### `align-items: stretch`（デフォルト）

```css
.container {
  display: flex;
  align-items: stretch; /* 高さを揃える */
  height: 200px;
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│       │       │       │
│Item 1 │Item 2 │Item 3 │
│       │       │       │
└───────┴───────┴───────┘
```

**特徴**：全ての flex item が container の高さいっぱいに伸びる

---

### `align-items: flex-start`

```css
.container {
  display: flex;
  align-items: flex-start; /* 上揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
├───────┴───────┴───────┤
│                       │
│                       │
└───────────────────────┘
```

---

### `align-items: flex-end`

```css
.container {
  display: flex;
  align-items: flex-end; /* 下揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────────────────────┐
│                       │
│                       │
├───────┬───────┬───────┤
│Item 1 │Item 2 │Item 3 │
└───────┴───────┴───────┘
```

---

### `align-items: center`

```css
.container {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  height: 200px;
}
```

**結果**：

```text
┌───────────────────────┐
│                       │
├───────┬───────┬───────┤
│Item 1 │Item 2 │Item 3 │
├───────┴───────┴───────┤
│                       │
└───────────────────────┘
```

**超便利！** 縦方向の中央揃えも簡単！🎯

---

### `align-items: baseline`

```css
.container {
  display: flex;
  align-items: baseline; /* テキストのベースラインで揃える */
}
```

**特徴**：各要素のテキストのベースライン（文字の下端）で揃える

---

## 完全な中央配置

`justify-content` と `align-items` を組み合わせると、**完全な中央配置**が超簡単！

```css
.container {
  display: flex;
  justify-content: center; /* 横方向の中央 */
  align-items: center;     /* 縦方向の中央 */
  height: 300px;
}
```

**結果**：

```text
┌──────────────────┐
│                  │
│                  │
│     ┌──────┐     │
│     │ Item │     │
│     └──────┘     │
│                  │
│                  │
└──────────────────┘
```

---

## flex-wrap - 折り返しの制御

### `flex-wrap: wrap`

```css
.container {
  display: flex;
  flex-wrap: wrap; /* 折り返す */
}
```

**結果**：画面幅が狭いと、次の行に折り返す

```text
【広い画面】
┌───────┬───────┬───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │Item 4 │Item 5 │
└───────┴───────┴───────┴───────┴───────┘

【狭い画面】
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
├───────┼───────┼───────┘
│Item 4 │Item 5 │
└───────┴───────┘
```

---

## gap - 要素間の余白

`gap` プロパティを使うと、flex item 間の余白を簡単に設定できる

```css
.container {
  display: flex;
  gap: 20px; /* 要素間の余白を20pxに */
}
```

---

## 実践例：ナビゲーションメニュー

Flexbox の定番の使い方！横並びのナビゲーションメニューを作ろう。

<div class="flex gap-x-1">
<div class="flex-1">

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

</div>
<div class="flex-1">

```html
<nav>
  <div class="logo">MyWebsite</div>
  <ul class="nav-links">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">サービス</a></li>
    <li><a href="#">会社概要</a></li>
    <li><a href="#">お問い合わせ</a></li>
  </ul>
</nav>
```

</div>
</div>

- `justify-content: space-between`：ロゴとメニューを両端に配置
- `gap: 2rem`：メニュー項目の間隔を均等に

---

## Lesson 2: Flexbox まとめ

このレッスンで学んだこと：

- **Flexbox は 1 次元レイアウトシステム**
- **`display: flex;` で flex container になる**
- **`flex-direction` で並べる方向を変更**
- **主軸と交差軸の概念**
- **`justify-content` で主軸方向の配置を制御**
- **`align-items` で交差軸方向の配置を制御**
- **`flex-wrap` で折り返しを制御**
- **`gap` で要素間の余白を設定**

---

## Lesson 3: Grid - 強力な 2 次元レイアウト 🎨

**学習目標**：CSS Grid を使って、複雑な 2 次元レイアウトを簡単に作れるようになる

### なぜ Grid を学ぶの？

Lesson 2 で学んだ Flexbox は、**1 次元**のレイアウトシステムだったよね。

でも、こんなレイアウトを作りたい時はどうする？

```text
┌──────────────────────────┐
│         Header           │
├────────┬────────┬────────┤
│ Side A │ Main   │ Side B │
│        │        │        │
│        │        │        │
│        │        │        │
├────────┴────────┴────────┤
│         Footer           │
└──────────────────────────┘
```

**縦と横の両方を同時に制御したい！** そんな時に Grid が大活躍！🎯

---

## Grid の基本概念

### Grid とは？

**CSS Grid（グリッドレイアウト）** は、**2 次元**のレイアウトシステムだよ。

**「2 次元」ってどういうこと？**

- **横方向（列）と縦方向（行）を同時に**制御できる

```text
【2次元レイアウト = Grid】
□ □ □
□ □ □
□ □ □
```

---

## Grid Container と Grid Item

### Grid Container（親要素）

```html
<!-- これがgrid container -->
<div class="grid-container">
  <div class="grid-item">アイテム1</div>
  <div class="grid-item">アイテム2</div>
  <div class="grid-item">アイテム3</div>
</div>
```

```css
.grid-container {
  display: grid; /* これでgrid containerになる！ */
}
```

- **役割**：子要素（grid item）を配置する「方眼紙」
- **設定**：`display: grid;` を指定する

**例え話**：碁盤（マス目に石を配置する）

---

### Grid Item（子要素）

```html
<div class="grid-container">
  <!-- これがgrid item -->
  <div class="grid-item">アイテム1</div>
  <!-- これもgrid item -->
  <div class="grid-item">アイテム2</div>
  <!-- これもgrid item -->
  <div class="grid-item">アイテム3</div>
</div>
```

- **役割**：配置される「要素」
- **自動的に**：親が `display: grid;` になると、その直下の子要素が grid item になる
- **例え話**：碁盤の上に置く碁石

---

## 最もシンプルな Grid

<div class="flex gap-x-1">
<div class="flex-1">

```css
.grid-container {
  display: grid; /* Gridを有効化 */
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px
}
.grid-item {
  border: solid 1px #3b82f6;
  text-align: center;
}
```

</div>
<div class="flex-1">

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

</div>
</div>

**結果**：6 つのアイテムが**3 列 × 2 行**の格子状に配置される！🎉

```text
┌───────┬───────┬───────┐
│   1   │   2   │   3   │
├───────┼───────┼───────┤
│   4   │   5   │   6   │
└───────┴───────┴───────┘
```

**たったこれだけ！** 方眼紙のようなレイアウトが簡単に作れる！

---

## grid-template-columns - 列の設定

`grid-template-columns` で、列の数と幅を設定できるよ！

### 等幅の列（fr 単位）

```css
.grid-container {
  grid-template-columns: 1fr 1fr 1fr; /* 3列、等幅 */
}
```

**`fr` とは？**

- **fraction（分数）** の略
- **利用可能な空間を分割**する単位
- `1fr 1fr 1fr` = 3 等分

---

## grid-template-columns - 異なる幅の列

### 異なる幅の列

```css
.grid-container {
  grid-template-columns: 2fr 1fr 1fr; /* 最初の列だけ2倍の幅 */
}
```

### 固定幅とフレキシブル幅の組み合わせ

```css
.grid-container {
  grid-template-columns: 200px 1fr 1fr; /* 最初の列は固定200px */
}
```

**固定幅とフレキシブル幅を組み合わせる**のが Grid の強み！

---

## repeat() 関数で簡潔に

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr); /* 1fr 1fr 1fr と同じ */
}
```

**超便利！** 同じパターンを繰り返す時に使える！

```css
/* 4列の等幅 */
grid-template-columns: repeat(4, 1fr);

/* 3列、最初だけ200px、残りは等幅 */
grid-template-columns: 200px repeat(2, 1fr);
```

---

## auto-fit と minmax() で究極のレスポンシブ

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* 最小200px、画面幅に応じて列数が自動調整！ */
}
```

**結果**：

- **広い画面**：200px 以上の列が横に並ぶ
- **狭い画面**：列数が自動で減る（レスポンシブ！）

**これが Grid の魔法！** メディアクエリなしでレスポンシブ！✨

---

## grid-template-rows - 行の設定

`grid-template-rows` で、行の数と高さを設定できるよ！

### 固定の行の高さ

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px; /* 1行目は100px、2行目は200px */
}
```

### auto で自動調整

```css
.grid-container {
  grid-template-rows: auto auto; /* 内容に応じて高さが決まる */
}
```

**`auto`**：内容の量に応じて自動で高さが決まる（便利！）

---

## gap - マス目の余白

`gap` プロパティで、grid item 間の余白を設定できるよ！

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 行と列の両方に20pxの余白 */
}
```

### 行と列で異なる余白

```css
.grid-container {
  row-gap: 30px; /* 行の余白 */
  column-gap: 10px; /* 列の余白 */
  /* または */
  gap: 30px 10px; /* 行 列 の順 */
}
```

**超簡単！** Flexbox と同じように、`gap` で余白を設定できる！

---

## grid-column と grid-row - 要素の配置

Grid の真骨頂！特定の grid item を**複数のセルにまたがって配置**できるよ！

### 列をまたぐ（grid-column）

```css
.item1 {
  grid-row: 1 / 3; /* 1行目から3行目の手前まで（2行分） */
}
```

**結果**：

```text
┌─────┬─────┬─────┐
│     │  2  │  3  │
│  1  ├─────┼─────┤
│     │  4  │  5  │
└─────┴─────┴─────┘
```

---

## grid-column と grid-row - 要素の配置（続き）

### 行をまたぐ（grid-row）

```css
.item1 {
  grid-row: 1 / 3; /* 1行目から3行目の手前まで（2行分） */
}
```

**結果**：

```text
┌─────┬─────┬─────┐
│     │  2  │  3  │
│  1  ├─────┼─────┤
│     │  4  │  5  │
└─────┴─────┴─────┘
```

---

## grid-column と grid-row - 要素の配置（続き）

### 行と列の両方をまたぐ

```css
.item1 {
  grid-column: 1 / 3; /* 2列分 */
  grid-row: 1 / 3; /* 2行分 */
}
```

**結果**：

```text
┌───────────┬─────┐
│           │  2  │
│     1     ├─────┤
│           │  3  │
└───────────┴─────┘
```

**大きなアイテムを作るのも簡単！** ダッシュボードやギャラリーに最適！🎯

---

## grid-column と grid-row - 要素の配置（続き）

### span で指定する（より直感的）

```css
.item1 {
  grid-column: span 2; /* 2列分を占有 */
  grid-row: span 2; /* 2行分を占有 */
}
```

**`span`**：「何列/行分を占有するか」を直接指定（わかりやすい！）

```css
/* 同じ結果 */
grid-column: 1 / 3; /* 1列目から3列目の手前まで */
grid-column: span 2; /* 2列分 */
```

---

## grid-template-areas - 名前付きエリア

Grid の最も強力な機能の 1 つ！**視覚的にレイアウトを定義**できるよ！

<div class="flex gap-x-1">
<div class="flex-1">

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 100px 1fr 100px;
  gap: 4px;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
.grid-item {
  border: 1px solid black;
}
.header {grid-area: header;}
.sidebar {grid-area: sidebar;}
.main {grid-area: main;}
.aside {grid-area: aside;}
.footer {grid-area: footer;}
```

</div>
<div class="flex-1">

```html
<div class="grid-container">
  <header class="grid-item header">
    ヘッダー
  </header>
  <div class="grid-item sidebar">
    サイドバー A
  </div>
  <main class="grid-item main">
    メインコンテンツ
  </main>
  <aside class="grid-item aside">
    サイドバー B
  </aside>
  <footer class="grid-item footer">
    フッター
  </footer>
</div>
```

</div>
</div>

---

## grid-template-areas - 名前付きエリア（続き）

**結果**：

```text
┌─────────────────────────────────┐
│header                           │
│                                 │
├─────────┬─────────────┬─────────┤
│sidebar  │main         │aside    │
│         │             │         │
│         │             │         │
├─────────┴─────────────┴─────────┤
│footer                           │
│                                 │
└─────────────────────────────────┘
```

---

## grid-template-areas の利点

### 1. 視覚的にわかりやすい

- コードを見ただけでレイアウトが想像できる

### 2. メディアクエリで簡単に変更

- **レイアウトの変更が超簡単！** レスポンシブデザインに最適！📱

```css
/* PC版 */
grid-template-areas:
  "header header header"
  "sidebar main aside"
  "footer footer footer";

/* スマホ版 */
@media (max-width: 768px) {
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "aside"
    "footer";
}
```

---

## Lesson 3: Grid まとめ

このレッスンで学んだこと：

- **Grid は 2 次元レイアウトシステム**
- **`display: grid;` で grid container になる**
- **`grid-template-columns` で列の数と幅を設定**
- **`repeat()`, `auto-fit`, `minmax()` でレスポンシブなレイアウト**
- **`grid-template-rows` で行の数と高さを設定**
- **`gap` で要素間の余白を設定**
- **`grid-column` / `grid-row` で要素を複数のセルにまたがせる**
- **`grid-template-areas` で視覚的にレイアウトを定義**

---

## Flexbox vs Grid - どっちを使う？

**迷った時の選び方**：

### Flexbox を使う場合

- **1 次元**のレイアウト（横並び or 縦並び）
- ナビゲーションメニュー
- ボタンの配置
- 小さなコンポーネント

### Grid を使う場合

- **2 次元**のレイアウト（行と列の両方）
- ページ全体のレイアウト
- 画像ギャラリー、カードグリッド
- ダッシュボード

**Grid と Flexbox は競合しない！** むしろ、組み合わせると最強！💪

---

## Lesson 4: レスポンシブデザイン 📱

**学習目標**：様々なデバイスで美しく表示されるレスポンシブなウェブサイトを作れるようになる

### なぜレスポンシブデザインを学ぶの？

現代のウェブサイトは、**様々なデバイス**で閲覧されるよね：

- 📱 スマートフォン（375px ~ 428px）
- 📱 タブレット（768px ~ 1024px）
- 💻 ノートパソコン（1366px ~ 1920px）
- 🖥️ デスクトップ（1920px ~）

**1 つのデザインで、全てのデバイスに対応する！** それがレスポンシブデザイン！🎯

---

## レスポンシブデザインの基本概念

- Viewport（ビューポート）
- Media Queries（メディアクエリ）
- Breakpoint（ブレークポイント）
- Mobile First（モバイルファースト）
- Fluid Units（可変単位）

---

## Viewport（ビューポート）

**viewport** = ブラウザの表示領域のサイズ

#### viewport meta タグ

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**これがないと、スマホで見た時に PC 版が縮小表示される！**

**必須！** すべての HTML ファイルの `<head>` に入れよう！

---

## メディアクエリ（Media Queries）

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

## ブレークポイント（Breakpoint）

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

/* PC */
@media (min-width: 1025px) {
}
```

**重要！** これは一般的な目安。実際のプロジェクトでは、コンテンツに応じて調整しよう！

---

## モバイルファーストの考え方

**モバイルファースト** = スマホのデザインから徐々に画面が大きいデバイスに対応する考え方

```css
/* デフォルトはスマホ向け */
.container {
  width: 100%;
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

### 2. vw と vh（Viewport Width / Height）

```css
.hero {
  width: 100vw; /* ビューポートの幅の100% */
  height: 100vh; /* ビューポートの高さの100% */
}
```

- `1vw` = ビューポート幅の 1%
- `1vh` = ビューポート高さの 1%

---

## 可変単位（Fluid Units）続き

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

### 4. calc() - 計算で値を指定

```css
.container {
  width: calc(100% - 40px); /* 幅100%から40pxを引く */
  height: calc(100vh - 80px); /* 画面の高さからヘッダー分を引く */
}
```

**超便利！** 異なる単位を組み合わせて計算できる！

---

## 実践例：レスポンシブナビゲーション

<div class="columns-2">

```css
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
```

</div>

---

## 実践例：レスポンシブナビゲーション（続き）

```html
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

## 実践例：レスポンシブグリッドレイアウト

<div class="columns-2">

```css
.page-layout {
  display: grid;
  gap: 20px;
  padding: 20px;
}

/* スマホ：1列 */
.page-layout {
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
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
      "header header"
      "main sidebar"
      "footer footer";
  }
}

/* PC：ヘッダーとフッターを全幅に */
@media (min-width: 1024px) {
  .page-layout {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

</div>

---

## 実践例：レスポンシブグリッドレイアウト（続き）

```html
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

**ポイント**：`grid-template-areas` でレイアウトを視覚的に定義

---

## Lesson 4: レスポンシブデザインまとめ

このレッスンで学んだこと：

- **レスポンシブデザインの重要性**
- **viewport メタタグの必要性**
- **メディアクエリの基本**
- **ブレークポイントの設定**
- **モバイルファーストの考え方**
- **可変単位**（%, vw, vh, rem, em, calc()）

---

## Lesson 5: CSS アニメーション ✨

**学習目標**：CSS でアニメーションを作成し、ウェブサイトをインタラクティブで魅力的にできるようになる

### なぜ CSS アニメーションを学ぶの？

静的なウェブサイトも良いけど、**動きがあるウェブサイト**はもっと魅力的！

### アニメーションの効果

- **ユーザーの注意を引く**（重要な要素を目立たせる）
- **操作のフィードバック**（ボタンを押した感覚）
- **スムーズな UX**（画面遷移が自然に感じる）
- **視覚的な魅力**（ワクワクするデザイン）

**でも注意！** アニメーションは「演出」。使いすぎると**邪魔**になる！

---

## CSS アニメーションの 2 つの方法

CSS でアニメーションを作る方法は、主に 2 つあるよ：

### 1. transition（トランジション）

- **使い方**：状態変化（ホバー、クリックなど）をスムーズに
- **特徴**：シンプル、使いやすい
- **用途**：ホバー効果、色の変化など

### 2. animation（@keyframes）

- **使い方**：複雑なアニメーションを定義
- **特徴**：細かい制御が可能、ループも可能
- **用途**：ローディングアニメーション、複雑な動きなど

**まずは transition から学ぼう！** 簡単で、すぐに使える！🎯

---

## transition - 状態変化をスムーズに

### 基本的な使い方

<div class="flex gap-x-1">
<div class="flex-1">

```css
.button {
  /* これがtransition！ */
  transition: background-color 0.3s;
  background-color: blue;
  color: white;
  padding: 12px 24px;
}
.button:hover {
  /* ホバー時の色 */
  background-color: green;
}
```

</div>
<div class="flex-1">

```html
<button class="button">
  ホバーしてみて！
</button>
```

</div>
</div>

**結果**：ホバーすると、背景色が**0.3 秒かけて**スムーズに変化する！✨

**transition なし**：パッと瞬時に変わる
**transition あり**：ゆっくりスムーズに変わる

---

## transition の 4 つのプロパティ

```css
.button {
  /* 個別に指定 */
  transition-property: background-color; /* 何を変化させるか */
  transition-duration: 0.3s; /* 何秒かけて変化させるか */
  transition-timing-function: ease; /* どのように変化させるか */
  transition-delay: 0s; /* 何秒待ってから開始するか */

  /* まとめて指定（ショートハンド） */
  transition: background-color 0.3s ease 0s;
  /* または */
  transition: background-color 0.3s;
}
```

---

## transition-property - 何を変化させるか

```css
/* 特定のプロパティだけ */
.button {
  transition-property: background-color;
}

/* 複数のプロパティ */
.button {
  transition-property: background-color, transform;
}

/* 全てのプロパティ */
.button {
  transition-property: all; /* 全部に適用（便利だけど重い） */
}
```

---

## アニメーション可能なプロパティ

**全てのプロパティがアニメーションできるわけではない！**

### アニメーション可能

- **色**：`color`, `background-color`, `border-color`
- **サイズ**：`width`, `height`, `padding`, `margin`
- **位置**：`top`, `left`, `right`, `bottom`
- **変形**：`transform`
- **透明度**：`opacity`
- **影**：`box-shadow`, `text-shadow`

### アニメーション不可

<div class="demerit">

- **表示/非表示**：`display`（`none` ⇔ `block` は瞬時）
- **配置方法**：`position`（`static` ⇔ `absolute` は瞬時）
- **フォント**：`font-family`

</div>

---

## transition-timing-function - どのように変化させるか

```css
.ease {
  transition-timing-function: ease; /* ゆっくり始まり、ゆっくり終わる */
}
.linear {
  transition-timing-function: linear; /* 一定速度 */
}
.ease-in {
  transition-timing-function: ease-in; /* ゆっくり始まる */
}
.ease-out {
  transition-timing-function: ease-out; /* ゆっくり終わる */
}
.ease-in-out {
  transition-timing-function: ease-in-out; /* ゆっくり始まり、ゆっくり終わる */
}
```

**おすすめ**：

- **ease**：汎用的（デフォルト）
- **ease-out**：自然な動き（多くの場面で使える）

---

## 実践例：ホバー効果のボタン

<div class="flex gap-x-1">
<div class="flex-1">

```css
.button-hover {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-hover:hover {
  background-color: #2563eb;
  /* 上に2px移動 */
  transform: translateY(-2px); 
  /* 影を追加 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.button-hover:active {
  /* クリック時は元に戻す */
  transform: translateY(0); 
}
```

</div>
<div class="flex-1">

```html
<button class="button-hover">
  クリックしてみて！
</button>
```

</div>
</div>

**ポイント**：ホバーで少し浮き上がる（`translateY(-2px)`）

---

## transform - 要素を変形させる

`transform` は、要素を移動、回転、拡大縮小できる超強力なプロパティ！

### 1. translate - 移動

```css
.box {
  transform: translateX(100px); /* 右に100px移動 */
  transform: translateY(-50px); /* 上に50px移動 */
  transform: translate(100px, -50px); /* 右に100px、上に50px */
}
```

### 2. scale - 拡大縮小

```css
.box {
  transform: scale(1.5); /* 1.5倍に拡大 */
  transform: scale(0.5); /* 0.5倍に縮小 */
}
```

---

## transform（続き）

### 3. rotate - 回転

```css
.box {
  transform: rotate(45deg); /* 45度回転 */
  transform: rotate(-90deg); /* -90度回転（反時計回り） */
}
```

### 4. 複数の transform を組み合わせる

```css
.box {
  transform: translateX(100px) rotate(45deg) scale(1.5);
  /* 右に100px移動、45度回転、1.5倍に拡大 */
}
```

**重要！** `transform` は複数のプロパティを 1 つにまとめる！

---

## @keyframes - 複雑なアニメーションを定義

`@keyframes` を使うと、より複雑なアニメーションを作れるよ！

### 基本的な使い方

<div class="flex gap-x-1">
<div class="flex-1">

```css
/* アニメーションを定義 */
@keyframes fadeIn {
  from {
    opacity: 0; /* 開始時：透明 */
  }
  to {
    opacity: 1; /* 終了時：不透明 */
  }
}
/* アニメーションを適用 */
.fade-in-box {
  background-color: yellow;
  animation: fadeIn 1s ease;
  /* アニメーション名 期間 タイミング関数 */
}
```

</div>
<div class="flex-1">

```html
<div class="fade-in-box">
  フェードインする要素
</div>
```

</div>
</div>

**結果**：要素が 1 秒かけて、透明から不透明に変化する！✨

---

## パーセントで細かく制御

<div class="flex gap-x-1">
<div class="flex-1">

```css
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-in {
  background-color: yellow;
  animation: slideInFromLeft 5s ease;
}
```

</div>
<div class="flex-1">

```html
<div class="slide-in">
  スライドインする要素
</div>
```

</div>
</div>

- `0%`：アニメーション開始時
- `50%`：アニメーション半分
- `100%`：アニメーション終了時

---

## animation プロパティの詳細

```css
.box {
  /* 個別に指定 */
  animation-name: fadeIn; /* アニメーション名 */
  animation-duration: 1s; /* 期間 */
  animation-timing-function: ease; /* タイミング関数 */
  animation-delay: 0.5s; /* 遅延 */
  animation-iteration-count: infinite; /* 繰り返し回数（infiniteで無限） */
  animation-direction: alternate; /* 方向（alternateで往復） */
  animation-fill-mode: forwards; /* 終了後の状態 */

  /* まとめて指定（ショートハンド） */
  animation: fadeIn 1s ease 0.5s infinite alternate forwards;
}
```

---

## 実践例：ローディングスピナー

<div class="flex gap-x-1">
<div class="flex-1">

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f4f6;
  border-top-color: #3b82f6;
  border-radius: 50%;
  /* 1秒で1回転、無限ループ */
  animation: spin 1s linear infinite;
}
```

</div>
<div class="flex-1">

```html
<div class="spinner"></div>
```

</div>
</div>

- 円形（`border-radius: 50%`）
- 上部だけ色を変える（`border-top-color`）
- 回転アニメーション（`rotate(360deg)`）

---

## パフォーマンスの注意点

### ⚡ 高速なプロパティ（GPU アクセラレーション）

```css
/* ✅ 推奨：GPUで処理されるので高速 */
.box {
  transform: translateX(100px);
  opacity: 0.5;
}
```

**GPU アクセラレーション**：

- `transform`（translate, scale, rotate）
- `opacity`

**これらは超高速！** 60fps のスムーズなアニメーションが可能！

---

## パフォーマンスの注意点（続き）

### 🐌 低速なプロパティ（CPU で処理）

```css
/* ❌ 非推奨：CPUで処理されるので遅い */
.box {
  left: 100px; /* 代わりにtransform: translateX()を使う */
  width: 200px; /* サイズ変更は重い */
}
```

### パフォーマンス改善のコツ

```css
/* 悪い例：leftでアニメーション */
.box:hover {
  left: 100px; /* 遅い */
}
/* 良い例：transformでアニメーション */
.box:hover {
  transform: translateX(100px); /* 高速 */
}
```

**重要！** 位置の変更には `left` ではなく `transform: translateX()` を使おう！

---

## Lesson 5: CSS アニメーションまとめ

このレッスンで学んだこと：

- **CSS アニメーションの 2 つの方法**（transition と animation）
- **transition の基本**（property, duration, timing-function, delay）
- **transform**（translate, scale, rotate）
- **@keyframes で複雑なアニメーションを定義**
- **animation プロパティ**（iteration-count, direction, fill-mode）
- **パフォーマンスの注意点**（GPU アクセラレーション）

---

## Phase 2 のまとめ

- HTML フォームでユーザー入力を受け取れる
- Flexbox で柔軟な 1 次元レイアウトが作れる
- Grid で複雑な 2 次元レイアウトが作れる
- レスポンシブデザインで全デバイスに対応できる
- CSS アニメーションで魅力的な動きを追加できる
