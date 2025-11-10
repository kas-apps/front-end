# Lesson 5: テキストスタイリング - 演習問題 💪

このレッスンで学んだテキストスタイリングを実際に試してみよう！

---

## 📁 演習ファイル

[解答例と解説はこちら](solutions/README.md)で確認できます。

---

## 基礎編

### 演習 1：色を変更しよう

以下の HTML に CSS を追加して、色を変更してください：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習1</title>
    <style>
      /* ここにCSSを書く */
    </style>
  </head>
  <body>
    <h1>私のブログ</h1>
    <p>これは私のブログです。よろしくお願いします。</p>
  </body>
</html>
```

**要件**：

- h1 の文字色を青（`#3b82f6`）にする
- p の文字色を灰色（`#6b7280`）にする

**解答例**：[05-01.html](solutions/05-01.html)

---

### 演習 2：フォントサイズを調整しよう

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習2</title>
    <style>
      html {
        font-size: 16px;
      }
      /* ここにCSSを書く */
    </style>
  </head>
  <body>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p>本文です。</p>
  </body>
</html>
```

**要件**：

- h1 を `2.5rem`（40px）にする
- h2 を `2rem`（32px）にする
- p を `1rem`（16px）にする

**解答例**：[05-02.html](solutions/05-02.html)

---

### 演習 3：行間を調整しよう

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習3</title>
    <style>
      /* ここにCSSを書く */
    </style>
  </head>
  <body>
    <p>
      これは長い段落です。行間を調整することで、読みやすさが大きく変わります。
      適切な行間を設定すると、読者はストレスなく文章を読むことができます。
    </p>
  </body>
</html>
```

**要件**：

- p の行間を `1.6` にする

**解答例**：[05-03.html](solutions/05-03.html)

---

## 応用編

### 演習 4：見出しをスタイリングしよう

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習4</title>
    <style>
      /* ここにCSSを書く */
    </style>
  </head>
  <body>
    <h1>メインタイトル</h1>
    <p>これは本文です。</p>
  </body>
</html>
```

**要件**：

- h1 の文字色を青（`#3b82f6`）にする
- h1 のフォントサイズを `2.5rem` にする
- h1 を中央寄せにする
- h1 の文字間隔を `0.05em` にする
- h1 を太字にする

**解答例**：[05-04.html](solutions/05-04.html)

---

### 演習 5：リンクをスタイリングしよう

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習5</title>
    <style>
      /* ここにCSSを書く */
    </style>
  </head>
  <body>
    <p>詳しくは<a href="#">こちら</a>をご覧ください。</p>
  </body>
</html>
```

**要件**：

- リンク（a）の文字色を青（`#3b82f6`）にする
- リンクの下線を消す
- ホバー時に下線を表示する（`:hover` を使う）

**ヒント**：

```css
a:hover {
  /* ホバー時のスタイル */
}
```

**解答例**：[05-05.html](solutions/05-05.html)

---

### 演習 6：AI に指示して完全なスタイリングを作ろう

AI に以下の指示を出して、CSS を生成してもらってください：

```text
「以下のHTMLにCSSを追加してください：
- bodyは薄い灰色の背景（#f3f4f6）
- h1は青色（#3b82f6）、40px、中央寄せ、太字、文字間隔0.05em
- h2は濃い灰色（#1f2937）、32px、太字
- pは灰色（#6b7280）、16px、行間1.6
- リンク（a）は青色（#3b82f6）、下線なし、ホバー時に下線を表示
- .highlight クラスは黄色背景（#fef3c7）、太字、内側余白10px」
```

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>演習6</title>
    <!-- ここに link タグを追加するか、内部CSSを書く -->
  </head>
  <body>
    <h1>私のウェブサイト</h1>
    <h2>ようこそ</h2>
    <p>これは私のウェブサイトです。<a href="#">こちら</a>もご覧ください。</p>
    <p class="highlight">重要なお知らせ</p>
  </body>
</html>
```

**解答例**：[05-06.html](solutions/05-06.html) + [05-06.css](solutions/05-06.css)

---

## 💡 チャレンジ

解答例を参考にしながら、以下にも挑戦してみよう：

1. **色を変えてみる**

   - 青色を他の色（`#ef4444` など）に変える
   - 背景色を追加してみる

2. **サイズを調整してみる**

   - フォントサイズを大きく/小さくしてみる
   - 行間を変えて読みやすさの違いを確認する

3. **新しいスタイルを追加**

   - テキストに影を付ける（`text-shadow: 2px 2px 4px gray;`）
   - 太字や斜体を試してみる（`font-weight`, `font-style`）

4. **AI と協働**
   - 解答例を参考に、AI に別のスタイルを生成してもらう
   - 「見出しにグラデーションを付けて」などの追加指示を出す

---

## 🎯 学習のポイント

- **色の指定**：16 進数カラーコード（`#3b82f6`）を使いこなそう
- **rem 単位**：ルート要素基準で、アクセシビリティに優れている
- **line-height**：単位なしで指定すると、フォントサイズに対する倍率になる
- **疑似クラス**：`:hover` で状態に応じたスタイルを設定できる
- **AI への指示**：色、サイズ、配置を具体的に指定すると良いコードが生成される

---

**Happy Coding!** 🎉

テキストスタイリングで、美しいページを作ろう！
