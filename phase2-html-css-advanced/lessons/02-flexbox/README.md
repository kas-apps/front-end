# Lesson 2: Flexbox - 柔軟な 1 次元レイアウト 📦

**学習目標**：Flexbox を使って、要素を柔軟に配置できるようになる

---

## なぜ Flexbox を学ぶの？

Phase 1 で学んだ CSS では、要素を横に並べたり、中央に配置したりするのが結構大変だったよね。

```css
/* Phase 1の方法：floatやdisplay: inline-blockを使う */
/* でも、高さが揃わなかったり、余白の調整が難しかったり... */
```

**Flexbox を使うと、こんなレイアウトが超簡単に作れる！** 🎯

- ✅ 要素を横並びにする（縦並びも！）
- ✅ 要素を中央に配置する
- ✅ 要素の間隔を均等にする
- ✅ 要素の高さを揃える
- ✅ スマホでは縦並び、PC では横並びに切り替える

**まるで魔法みたい！** これまで苦労してたレイアウトが、たった数行の CSS で実現できるよ！✨

### Flexbox が活躍する場面

- 📱 ナビゲーションメニュー（横並びのリンク）
- 🎴 カードレイアウト（商品カード、ブログ記事カードなど）
- 📊 フッター（複数の列を並べる）
- 🔘 ボタンの配置（左寄せ、右寄せ、中央揃え）
- 📋 フォームのレイアウト（ラベルと入力欄を横並び）

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

【2次元レイアウト = Grid（Lesson 3で学ぶ）】
□ □ □
□ □ □
□ □ □
```

**例え話**：

- **Flexbox**：一列に並んだ電車の座席 🚃（横一列、または縦一列）
- **Grid**：映画館の座席 🎬（縦と横の両方）

---

## Flex Container と Flex Item

Flexbox には、2 つの重要な概念があるよ：

### 1. Flex Container（親要素）

```html
<div class="container">
  <!-- これがflex container -->
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
- **設定**：`display: flex;` を指定すると、その要素が flex container になる
- **例え話**：駐車場の区画線（車をどう並べるか決める）

### 2. Flex Item（子要素）

```html
<div class="container">
  <div class="item">アイテム1</div>
  <!-- これがflex item -->
  <div class="item">アイテム2</div>
  <!-- これもflex item -->
  <div class="item">アイテム3</div>
  <!-- これもflex item -->
</div>
```

- **役割**：並べられる「要素」
- **自動的に**：親が `display: flex;` になると、その直下の子要素が flex item になる
- **例え話**：駐車場に停める車

---

## 最もシンプルな Flexbox

まずは、基本中の基本から見てみよう：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flexbox 基本例</title>
    <style>
      .container {
        display: flex; /* Flexboxを有効化 */
        background-color: #f0f0f0;
        padding: 20px;
      }

      .item {
        background-color: #3b82f6;
        color: white;
        padding: 20px;
        margin: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">アイテム1</div>
      <div class="item">アイテム2</div>
      <div class="item">アイテム3</div>
    </div>
  </body>
</html>
```

**結果**：3 つのアイテムが**横並び**になる！🎉

```text
【display: flexなし】
┌───────┐
│Item 1 │
├───────┤
│Item 2 │
├───────┤
│Item 3 │
└───────┘

【display: flex あり】
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
└───────┴───────┴───────┘
```

**たったこれだけ！** `display: flex;` を付けるだけで、横並びになるんだ！

---

## 主軸と交差軸

Flexbox を理解する上で、**軸**の概念が超重要！

### 主軸（Main Axis）

- **定義**：flex item が並ぶ方向の軸
- **デフォルト**：横方向（左 → 右）
- **制御**：`flex-direction` で変更可能

### 交差軸（Cross Axis）

- **定義**：主軸に垂直な軸
- **デフォルト**：縦方向（上 → 下）

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

**なぜ軸が重要？**

- `justify-content`：**主軸方向**の配置を制御
- `align-items`：**交差軸方向**の配置を制御

**例え話**：

- **主軸**：電車が走る線路の方向 🚃
- **交差軸**：線路に垂直な方向

---

## flex-direction - 並べる方向を変える

`flex-direction` で、flex item を並べる方向を変えられるよ！

### 1. `flex-direction: row`（デフォルト）

```css
.container {
  display: flex;
  flex-direction: row; /* 横並び（左→右） */
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│Item 1 │Item 2 │Item 3 │
└───────┴───────┴───────┘
```

---

### 2. `flex-direction: row-reverse`

```css
.container {
  display: flex;
  flex-direction: row-reverse; /* 横並び（右→左） */
}
```

**結果**：

```text
┌───────┬───────┬───────┐
│Item 3 │Item 2 │Item 1 │
└───────┴───────┴───────┘
```

---

### 3. `flex-direction: column`

```css
.container {
  display: flex;
  flex-direction: column; /* 縦並び（上→下） */
}
```

**結果**：

```text
┌───────┐
│Item 1 │
├───────┤
│Item 2 │
├───────┤
│Item 3 │
└───────┘
```

---

### 4. `flex-direction: column-reverse`

```css
.container {
  display: flex;
  flex-direction: column-reverse; /* 縦並び（下→上） */
}
```

**結果**：

```text
┌───────┐
│Item 3 │
├───────┤
│Item 2 │
├───────┤
│Item 1 │
└───────┘
```

---

## justify-content - 主軸方向の配置

`justify-content` で、**主軸方向**（デフォルトは横方向）の配置を制御できるよ！

### 1. `justify-content: flex-start`（デフォルト）

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

### 2. `justify-content: flex-end`

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

### 3. `justify-content: center`

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

### 4. `justify-content: space-between`

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

### 5. `justify-content: space-around`

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

### 6. `justify-content: space-evenly`

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

## align-items - 交差軸方向の配置

`align-items` で、**交差軸方向**（デフォルトは縦方向）の配置を制御できるよ！

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

## 完全な中央配置

`justify-content` と `align-items` を組み合わせると、**完全な中央配置**が超簡単！

```html
<style>
  .container {
    display: flex;
    justify-content: center; /* 横方向の中央 */
    align-items: center; /* 縦方向の中央 */
    height: 300px;
    background-color: #f0f0f0;
  }

  .box {
    background-color: #3b82f6;
    color: white;
    padding: 40px;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="box">完全に中央！</div>
</div>
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

**これまで苦労してた中央配置が、たった 2 行で！** 🎉

---

## flex-wrap - 折り返しの制御

デフォルトでは、flex item は 1 行に収まるように縮小されるよ。でも、`flex-wrap` を使うと、折り返しができる！

### 1. `flex-wrap: nowrap`（デフォルト）

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* 折り返さない */
}
```

**結果**：画面幅が狭くても、1 行に無理やり収める（縮小される）

---

### 2. `flex-wrap: wrap`

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

**レスポンシブデザインに超便利！** 📱

---

### 3. `flex-wrap: wrap-reverse`

```css
.container {
  display: flex;
  flex-wrap: wrap-reverse; /* 逆順に折り返す */
}
```

---

## gap - 要素間の余白

`gap` プロパティを使うと、flex item 間の余白を簡単に設定できるよ！

```css
.container {
  display: flex;
  gap: 20px; /* 要素間の余白を20pxに */
}
```

**これまでの方法**：

```css
/* margin で余白を設定（面倒...） */
.item {
  margin-right: 20px;
}
.item:last-child {
  margin-right: 0; /* 最後の要素だけmarginをリセット */
}
```

**gap を使うと**：

```css
/* たった1行！ */
.container {
  gap: 20px;
}
```

**超便利！** 余白の設定がめちゃくちゃ簡単になった！✨

---

## 実践例 1：ナビゲーションメニュー

Flexbox の定番の使い方！横並びのナビゲーションメニューを作ろう。

```html
<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2937;
    padding: 1rem 2rem;
  }

  .logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
  }

  .nav-links a:hover {
    color: #3b82f6;
  }
</style>

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

**ポイント**：

- `justify-content: space-between`：ロゴとメニューを両端に配置
- `gap: 2rem`：メニュー項目の間隔を均等に
- ネストされた flexbox：nav 全体と nav-links の両方に flex を使用

---

## 実践例 2：カードレイアウト

商品カードやブログ記事カードを横並びにするレイアウト！

```html
<style>
  .card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* 画面が狭い時は折り返す */
    padding: 20px;
  }

  .card {
    flex: 1 1 300px; /* 最小幅300px、可変 */
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card h3 {
    margin-top: 0;
    color: #1f2937;
  }

  .card p {
    color: #6b7280;
    line-height: 1.6;
  }
</style>

<div class="card-container">
  <div class="card">
    <h3>カード1</h3>
    <p>これは最初のカードです。Flexboxで簡単に横並びにできます。</p>
  </div>
  <div class="card">
    <h3>カード2</h3>
    <p>flex-wrapを使うと、画面幅に応じて自動で折り返します。</p>
  </div>
  <div class="card">
    <h3>カード3</h3>
    <p>レスポンシブなレイアウトが簡単に作れます！</p>
  </div>
</div>
```

**ポイント**：

- `flex-wrap: wrap`：画面が狭い時は自動で折り返す
- `flex: 1 1 300px`：最小幅 300px、余白があれば伸びる
- `gap: 20px`：カード間の余白を設定

---

## 実践例 3：フッター

複数の列を並べるフッターレイアウト！

```html
<style>
  footer {
    display: flex;
    justify-content: space-between;
    background-color: #1f2937;
    color: white;
    padding: 3rem 2rem;
  }

  .footer-column {
    flex: 1;
  }

  .footer-column h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column li {
    margin-bottom: 0.5rem;
  }

  .footer-column a {
    color: #9ca3af;
    text-decoration: none;
  }

  .footer-column a:hover {
    color: white;
  }
</style>

<footer>
  <div class="footer-column">
    <h4>会社情報</h4>
    <ul>
      <li><a href="#">会社概要</a></li>
      <li><a href="#">採用情報</a></li>
      <li><a href="#">お問い合わせ</a></li>
    </ul>
  </div>
  <div class="footer-column">
    <h4>サービス</h4>
    <ul>
      <li><a href="#">サービス1</a></li>
      <li><a href="#">サービス2</a></li>
      <li><a href="#">サービス3</a></li>
    </ul>
  </div>
  <div class="footer-column">
    <h4>サポート</h4>
    <ul>
      <li><a href="#">ヘルプ</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">利用規約</a></li>
    </ul>
  </div>
</footer>
```

**ポイント**：

- `justify-content: space-between`：列を均等に配置
- `flex: 1`：各列を等幅に

---

## 🤖 バイブコーディング実践

### AI への指示例

Flexbox を使ったレイアウトを AI に作ってもらう時は、**配置方法と要素の数**を明確に指定しよう！

#### ⭕ 良い指示の例

```text
「Flexboxを使ってナビゲーションメニューを作ってください：
- 左側にロゴ（"MyWebsite"）
- 右側にメニューリンク（ホーム、サービス、会社概要、お問い合わせ）
- メニューリンクは横並びで、間隔は2rem
- 背景色は濃いグレー（#1f2937）
- justify-contentとgapを使ってください」
```

**良い点**：

- Flexbox を使うことを明示
- 配置の詳細（左側、右側）を指定
- 具体的なプロパティ名（justify-content, gap）を指定
- 色やサイズも明示

---

#### ❌ 曖昧な指示の例

```text
「ナビゲーションメニュー作って」
```

**問題点**：

- Flexbox を使うか不明
- 配置方法が指定されていない
- 要素の数や内容が不明

---

### 生成されたコードの読み方

AI が Flexbox のコードを生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **display: flex が設定されているか？**

   ```css
   .container {
     display: flex; /* これがないとFlexboxにならない */
   }
   ```

2. **justify-content が適切か？**

   ```css
   /* 左寄せ、中央、右寄せ、space-between など */
   .container {
     justify-content: center;
   }
   ```

3. **align-items が適切か？**

   ```css
   /* 縦方向の配置 */
   .container {
     align-items: center;
   }
   ```

4. **flex-wrap が必要な場合に設定されているか？**

   ```css
   /* レスポンシブなレイアウトには必要 */
   .container {
     flex-wrap: wrap;
   }
   ```

5. **gap が使われているか？**

   ```css
   /* marginより簡単 */
   .container {
     gap: 20px;
   }
   ```

6. **flex-direction が適切か？**

   ```css
   /* デフォルトはrow（横並び） */
   .container {
     flex-direction: row; /* または column */
   }
   ```

---

### よくある問題と修正方法

#### 問題 1：要素が横並びにならない

**症状**：`display: flex;` を付けたのに、要素が縦に並んでいる

**原因**：

- 親要素ではなく、子要素に `display: flex;` を付けている
- または、flex item が block 要素で width: 100% になっている

**修正方法**：

```html
<!-- 修正前 -->
<div class="container">
  <div class="item" style="display: flex;">アイテム1</div>
  <!-- ❌ 子要素にdisplay: flex -->
</div>

<!-- 修正後 -->
<div class="container" style="display: flex;">
  <!-- ⭕ 親要素にdisplay: flex -->
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
</div>
```

---

#### 問題 2：要素が縦方向で中央に揃わない

**症状**：`align-items: center;` を付けたのに、縦方向で中央にならない

**原因**：container の高さが設定されていない

**修正方法**：

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
  height: 200px; /* 高さを設定 */
  /* または min-height: 200px; */
}
```

---

#### 問題 3：画面幅が狭い時に要素が潰れる

**症状**：スマホで見ると、flex item が潰れて見えなくなる

**原因**：`flex-wrap` が設定されていない

**修正方法**：

```css
/* 修正前 */
.container {
  display: flex;
  /* flex-wrapがないので、1行に無理やり収める */
}

/* 修正後 */
.container {
  display: flex;
  flex-wrap: wrap; /* 画面幅が狭い時は折り返す */
}
```

---

#### 問題 4：要素間の余白が不均等

**症状**：最初と最後の要素だけ余白が変

**原因**：`margin` を使って余白を設定している

**修正方法**：

```css
/* 修正前：marginで余白を設定 */
.item {
  margin-right: 20px;
}
.item:last-child {
  margin-right: 0;
}

/* 修正後：gapを使う */
.container {
  display: flex;
  gap: 20px; /* 簡単！ */
}
```

---

#### 問題 5：justify-content が効かない

**症状**：`justify-content: center;` を付けたのに、中央に揃わない

**原因**：flex item の幅が 100% になっている

**修正方法**：

```css
/* 修正前 */
.item {
  width: 100%; /* これがあるとjustify-contentが効かない */
}

/* 修正後 */
.item {
  /* widthを削除、またはwidthをautoに */
  width: auto;
}
```

---

## カスタマイズポイント

AI が生成した Flexbox レイアウトを、自分で微調整する時のポイント：

### 1. 配置の変更

```css
/* 左寄せ → 中央揃えに変更 */
.container {
  justify-content: flex-start; /* 変更前 */
  justify-content: center; /* 変更後 */
}
```

### 2. 要素間の余白を調整

```css
/* 余白を広げる */
.container {
  gap: 10px; /* 変更前 */
  gap: 30px; /* 変更後 */
}
```

### 3. 折り返しを追加

```css
/* レスポンシブ対応 */
.container {
  display: flex;
  flex-wrap: wrap; /* 追加 */
}
```

### 4. 縦並びに変更

```css
/* 横並び → 縦並びに変更 */
.container {
  flex-direction: row; /* 変更前 */
  flex-direction: column; /* 変更後 */
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ Flexbox は 1 次元レイアウトシステム
- ✅ `display: flex;` で flex container になる
- ✅ 主軸と交差軸の概念
- ✅ `flex-direction` で並べる方向を変更
- ✅ `justify-content` で主軸方向の配置を制御
- ✅ `align-items` で交差軸方向の配置を制御
- ✅ `flex-wrap` で折り返しを制御
- ✅ `gap` で要素間の余白を設定
- ✅ 実践例（ナビゲーション、カードレイアウト、フッター）
- ✅ AI に的確な指示を出して Flexbox レイアウトを生成する方法
- ✅ 生成されたコードのチェックポイント

### Flexbox の主要プロパティ一覧

**Flex Container（親要素）に指定**：

- `display: flex;` - Flexbox を有効化
- `flex-direction` - 並べる方向（row, column）
- `justify-content` - 主軸方向の配置
- `align-items` - 交差軸方向の配置
- `flex-wrap` - 折り返しの制御
- `gap` - 要素間の余白

**Flex Item（子要素）に指定**：

- `flex` - 伸縮の制御（Lesson 4 で詳しく学ぶ）
- `align-self` - 個別の交差軸方向の配置

### 次のステップ

このレッスンで学んだ Flexbox の知識を活かして、演習問題に挑戦しよう！

実際に手を動かすことで、Flexbox の使い方がしっかり身につくよ！💪

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

Flexbox をマスターして、柔軟なレイアウトを自在に作ろう！
