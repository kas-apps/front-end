# Lesson 3: Grid - 演習問題 💪

このレッスンで学んだ CSS Grid を実際に手を動かして練習しよう！

---

## 基礎編

### 演習 1：最初の Grid - 基本的なグリッド

以下の条件で、6 つのボックスを 2 行 ×3 列のグリッドに配置してください：

**要件**：

- 6 つの div 要素（「アイテム 1」〜「アイテム 6」）を作成
- 親要素に Grid を適用して 2 行 ×3 列に配置
- 各列の幅は等しく（1fr）
- 各行の高さは 100px
- グリッド間の余白は 10px
- 各ボックスに背景色を付ける

**ヒント**：`display: grid;` と `grid-template-columns` を使おう！

**解答例**：[solutions/03-01.html](solutions/03-01.html)

---

### 演習 2：2×2 グリッド

以下の条件で、4 つのボックスを 2 行 ×2 列のグリッドに配置してください：

**要件**：

- 4 つの div 要素を作成
- 2 行 ×2 列のグリッド
- 各列の幅は 200px
- 各行の高さは 150px
- グリッド間の余白は 20px
- 各ボックスに異なる背景色とテキストを中央揃え

**ヒント**：`grid-template-columns: 200px 200px;` で列幅を指定できるよ！

**解答例**：[solutions/03-02.html](solutions/03-02.html)

---

### 演習 3：3 カラムレイアウト

以下の条件で、ヘッダー・サイドバー・メインコンテンツ・フッターを配置してください：

**要件**：

```text
┌───────────────────────┐
│header                 │
├────┬──────────────────┤
│side│main content      │
│bar │                  │
│    │                  │
├────┴──────────────────┤
│footer                 │
└───────────────────────┘
```

- ヘッダーは全幅
- サイドバーは 200px、メインコンテンツは残りの幅
- フッターは全幅
- グリッド間の余白は 10px
- 各セクションに背景色とテキストを設定

**ヒント**：`grid-column: 1 / -1;` で全列をまたげるよ！

**解答例**：[solutions/03-03.html](solutions/03-03.html)

---

## 応用編

### 演習 4：ギャラリーレイアウト

以下の条件で、画像ギャラリー風のレイアウトを作成してください：

**要件**：

- 9 つのアイテムを作成
- 3 行 ×3 列のグリッド
- 各列の幅は等しく（1fr）
- 各行の高さは 200px
- グリッド間の余白は 15px
- 各アイテムには色付きの背景と「画像 1」〜「画像 9」というテキスト
- アイテムを中央揃え（水平・垂直）
- ホバー時に少し拡大する効果を追加

**ヒント**：Flexbox と組み合わせて、各グリッドアイテムの中身を中央揃えにできるよ！

**解答例**：[solutions/03-04.html](solutions/03-04.html)

---

### 演習 5：ダッシュボード風レイアウト

以下の条件で、ダッシュボード風のレイアウトを作成してください：

**レイアウト構成**：

```text
┌───────────────────────────┐
│header                     │
├────┬────────┬────────┬────┤
│nav │ card 1 │ card 2 │side│
│    │        │        │bar │
│    │        │        │    │
│    ├────────┼────────┤    │
│    │ card 3 │ card 4 │    │
│    │        │        │    │
│    │        │        │    │
├────┴────────┴────────┴────┤
│footer                     │
└───────────────────────────┘
```

**要件**：

- ヘッダー：全幅、高さ 60px
- ナビゲーション：幅 150px、高さ自動
- メインコンテンツエリア：2 行 ×2 列のサブグリッド（統計カード）
- サイドバー：幅 200px、高さ自動
- フッター：全幅、高さ 50px
- グリッド間の余白は 10px
- 各セクションに背景色とテキストを設定

**ヒント**：グリッドの中にグリッドを入れられるよ（ネストされたグリッド）！

**解答例**：[solutions/03-05.html](solutions/03-05.html)

---

### 演習 6：AI に指示して作ってもらおう

AI に以下の内容のレイアウトを作ってもらってください：

**レイアウトの内容**：「ブログ記事カードのグリッドレイアウト」

**要件**：

- 記事カードを 6 つ作成
- 3 列のグリッドレイアウト（画面幅に応じて自動調整）
- 各カードには：
  - 記事画像のプレースホルダー（全幅、高さ 150px）
  - 記事タイトル（h3）
  - 記事の概要（p）
  - 公開日（小さいテキスト）
  - 「続きを読む」リンク
- グリッド間の余白は 25px
- カードにボーダー、角丸、影を付ける
- ホバー時にカードが浮き上がる効果

**AI への指示例**：

```text
「CSS Gridを使ってブログ記事カードのグリッドレイアウトを作成してください：

グリッドコンテナ：
- display: gridで3列のグリッド
- grid-template-columns: repeat(3, 1fr)で等幅の3列
- gap: 25pxでカード間の余白を設定

各カードの構造：
- カード全体をdivで囲む
- 記事画像のプレースホルダー（divで作成、背景色付き、高さ150px）
- 記事タイトル（h3タグ）
- 記事の概要（pタグ、2-3行）
- 公開日（smallタグまたは小さいpタグ）
- 「続きを読む」リンク（aタグ）

カードのスタイル：
- 背景色: 白
- ボーダー: 1px solid #e5e7eb
- 角丸: 8px
- パディング: 0（画像は全幅、テキスト部分だけパディング）
- box-shadow: 0 2px 4px rgba(0,0,0,0.1)
- ホバー時：box-shadowを強くして、transform: translateY(-5px)で浮き上がる

記事例：
- 記事1: 「Gridレイアウトの基本」、2024年1月15日
- 記事2: 「Flexboxとの使い分け」、2024年1月20日
- 記事3: 「レスポンシブデザイン」、2024年1月25日
- （以下同様に6記事）
```

生成されたコードを、以下のチェックリストで確認してみよう！

#### ✅ チェックリスト

1. **親要素に display: grid が設定されているか？**
2. **grid-template-columns で 3 列が指定されているか？**
3. **gap でグリッド間の余白が設定されているか？**
4. **各カードが適切な構造になっているか？**（画像、タイトル、概要、日付、リンク）
5. **カードにボーダー、角丸、影が設定されているか？**
6. **ホバー効果（:hover）が実装されているか？**
7. **画像プレースホルダーが全幅で表示されているか？**
8. **テキスト部分にパディングが設定されているか？**

**解答例**：[solutions/03-06.html](solutions/03-06.html)

---

## チャレンジ 🏆

### チャレンジ 1：エラーを見つけて修正しよう

以下のコードには複数の問題があります。何が間違っているか見つけて修正してください：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gridレイアウト</title>
    <style>
      body {
        margin: 0;
        font-family: sans-serif;
      }

      /* 問題1: grid-template-columnsが間違っている（列数が合わない） */
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* 2列なのに、3つの要素がある */
        gap: 20px;
        padding: 20px;
      }

      /* 問題2: grid-columnの指定が間違っている */
      .header {
        grid-column: 1 / 2; /* 全列をまたぐべきなのに、1列目だけ */
        background-color: #3b82f6;
        color: white;
        padding: 20px;
        text-align: center;
      }

      /* 問題3: grid-rowの指定が重複している */
      .sidebar {
        grid-row: 2; /* 行の指定 */
        background-color: #f3f4f6;
        padding: 20px;
      }

      .main {
        grid-row: 2; /* サイドバーと同じ行 */
        background-color: white;
        padding: 20px;
      }

      /* 問題4: サブグリッドにdisplay: gridがない */
      .stats {
        /* display: gridがない！ */
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .stat-box {
        background-color: #dbeafe;
        padding: 15px;
        text-align: center;
      }

      /* 問題5: footerがグリッドアイテムとして認識されていない */
      .footer {
        /* grid-columnの指定がない */
        background-color: #1f2937;
        color: white;
        padding: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>ヘッダー</h1>
      </div>

      <div class="sidebar">
        <h2>サイドバー</h2>
        <p>ナビゲーション</p>
      </div>

      <div class="main">
        <h2>メインコンテンツ</h2>
        <div class="stats">
          <div class="stat-box">統計1</div>
          <div class="stat-box">統計2</div>
          <div class="stat-box">統計3</div>
          <div class="stat-box">統計4</div>
        </div>
      </div>

      <div class="footer">
        <p>フッター</p>
      </div>
    </div>
  </body>
</html>
```

**ヒント**：レッスンの内容を参考にしよう！

**修正すべき点**：

1. `.container` の `grid-template-columns` を 3 列に変更（例：`200px 1fr 200px`）
2. `.header` の `grid-column` を `1 / -1` に変更（全列をまたぐ）
3. `.sidebar` と `.main` の `grid-row` を削除（自動配置に任せる）、または明確に列を指定
4. `.stats` に `display: grid;` を追加
5. `.footer` に `grid-column: 1 / -1;` を追加（全列をまたぐ）

**解答例**：[solutions/03-07.html](solutions/03-07.html)

---

## 学習のポイント

### 演習を終えたら確認しよう

- [ ] `display: grid;` で Grid を有効化できる
- [ ] `grid-template-columns` で列の数と幅を指定できる
- [ ] `grid-template-rows` で行の数と高さを指定できる
- [ ] `gap` でグリッド間の余白を設定できる
- [ ] `grid-column` で要素を複数列にまたがせられる
- [ ] `grid-row` で要素を複数行にまたがせられる
- [ ] `1fr` を使って余白を柔軟に分配できる
- [ ] `repeat()` で繰り返しパターンを簡潔に書ける
- [ ] グリッドの中にグリッドを入れられる（ネスト）
- [ ] AI に具体的な指示を出して Grid レイアウトを生成できる

[解答例と解説はこちら](solutions/README.md)で確認できます。

---

**お疲れ様！** 🎉

Grid の基本をしっかりマスターできたね！次のレッスンに進もう！

👉 [Lesson 4: レスポンシブデザイン へ進む](../../04-responsive/README.md)

---

**Let's vibe and code!** 🎉
