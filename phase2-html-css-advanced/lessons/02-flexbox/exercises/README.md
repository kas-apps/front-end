# Lesson 2: Flexbox - 演習問題 💪

このレッスンで学んだ Flexbox を実際に手を動かして練習しよう！

---

## 基礎編

### 演習 1：最初の Flexbox - 横並びレイアウト

以下の条件で、3 つのボックスを横並びにしてください：

**要件**：

- 3 つの div 要素（「ボックス 1」「ボックス 2」「ボックス 3」）を作成
- 親要素に Flexbox を適用して横並びにする
- 各ボックスの背景色を変える（例：青、緑、オレンジ）
- パディング 20px、マージン 10px を設定

**ヒント**：`display: flex;` を親要素に付けるだけで横並びになるよ！

**解答例**：[solutions/02-01.html](solutions/02-01.html)

---

### 演習 2：完全な中央配置

以下の条件で、要素を完全に中央に配置してください：

**要件**：

- コンテナの高さは 300px
- 1 つのボックス要素を横方向・縦方向ともに中央に配置
- ボックスには「完全に中央！」というテキストを表示
- 背景色を設定して、中央に配置されていることがわかるようにする

**ヒント**：`justify-content: center;` と `align-items: center;` を組み合わせよう！

**解答例**：[solutions/02-02.html](solutions/02-02.html)

---

### 演習 3：space-between で両端配置

以下の条件で、要素を両端に配置してください：

**要件**：

- 3 つのボタン要素を作成（「左」「中央」「右」）
- 最初のボタンを左端、最後のボタンを右端に配置
- 真ん中のボタンは自動的に中央に配置される
- ボタンにスタイルを付ける（パディング、背景色など）

**ヒント**：`justify-content: space-between;` を使おう！

**解答例**：[solutions/02-03.html](solutions/02-03.html)

---

## 応用編

### 演習 4：ナビゲーションメニューを作ろう

以下の条件でナビゲーションメニューを作成してください：

**要件**：

- 左側にロゴ（「MyWebsite」というテキスト）
- 右側にメニューリンク（「ホーム」「サービス」「会社概要」「お問い合わせ」の 4 つ）
- メニューリンクは横並びで、間隔は 2rem
- 背景色は濃いグレー（#1f2937）、テキストは白色
- ロゴとメニューを両端に配置（space-between を使用）
- ロゴとメニューリンクを縦方向で中央揃え
- パディングを適切に設定

**ヒント**：ナビゲーション全体とメニューリンク部分の 2 箇所で Flexbox を使うよ！

**解答例**：[solutions/02-04.html](solutions/02-04.html)

---

### 演習 5：カードレイアウトを作ろう

以下の条件で 3 つのカードを横並びにしてください：

**要件**：

- 3 つのカード要素を作成
- 各カードには、タイトル（h3）と説明文（p）を含める
- カード間の余白は 20px（gap を使用）
- 画面が狭い時は折り返す（flex-wrap を使用）
- 各カードの最小幅は 250px
- カードにボーダー、角丸、影を付ける
- 背景色は白、ボーダーは薄いグレー

**カードの内容例**：

- カード 1: 「Flexbox とは」「1 次元レイアウトシステムです」
- カード 2: 「簡単な配置」「要素を簡単に横並びにできます」
- カード 3: 「レスポンシブ」「画面サイズに応じて自動調整されます」

**ヒント**：`flex: 1 1 250px;` で最小幅を設定しつつ、可変にできるよ！

**解答例**：[solutions/02-05.html](solutions/02-05.html)

---

### 演習 6：AI に指示して作ってもらおう

AI に以下の内容のレイアウトを作ってもらってください：

**レイアウトの内容**：「商品カード 3 列レイアウト」

- 商品カードを 3 つ作成
- 各カードには：
  - 商品画像のプレースホルダー（150x150px の色付き div）
  - 商品名（h3）
  - 価格（p、太字）
  - 「カートに追加」ボタン
- カードは横並びで、等幅に配置
- カード間の余白は 30px
- 各カード内の要素は縦並び（flex-direction: column を使用）
- カード内の要素を中央揃え
- ホバー時にカードが少し浮き上がる効果（box-shadow を変更）

**AI への指示例**：

```text
「Flexboxを使って商品カード3列レイアウトを作成してください：

親要素：
- display: flexで3つのカードを横並びに
- justify-content: space-betweenで均等配置
- gap: 30pxで余白を設定

各カードの構造：
- カード自体もdisplay: flexでflex-direction: columnにして縦並び
- align-items: centerで中央揃え
- 商品画像プレースホルダー（150x150pxの背景色付きdiv）
- 商品名（h3タグ）
- 価格（pタグ、font-weight: bold）
- 「カートに追加」ボタン

スタイル：
- カードの背景色: 白
- ボーダー: 1px solid #e5e7eb
- 角丸: 8px
- パディング: 20px
- ホバー時にbox-shadowを強くする

商品例：
- 商品1: ワイヤレスイヤホン、¥8,800
- 商品2: スマートウォッチ、¥12,800
- 商品3: モバイルバッテリー、¥3,980
```

生成されたコードを、以下のチェックリストで確認してみよう！

#### ✅ チェックリスト

1. **親要素に display: flex が設定されているか？**
2. **justify-content で横方向の配置が制御されているか？**
3. **gap で要素間の余白が設定されているか？**
4. **各カードも display: flex で flex-direction: column になっているか？**
5. **align-items: center でカード内の要素が中央揃えになっているか？**
6. **カードにボーダー、角丸、パディングが設定されているか？**
7. **ホバー効果（:hover）が実装されているか？**
8. **商品画像のプレースホルダーが適切なサイズで作られているか？**

**解答例**：[solutions/02-06.html](solutions/02-06.html)

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
    <title>Flexboxレイアウト</title>
    <style>
      /* 問題1: containerの高さが設定されていないので、align-itemsが効かない */
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
      }

      /* 問題2: itemにwidth: 100%が設定されているので、横並びにならない */
      .item {
        width: 100%;
        background-color: #3b82f6;
        color: white;
        padding: 20px;
        margin: 10px;
      }

      /* 問題3: navにdisplay: flexが設定されていない */
      .nav {
        background-color: #1f2937;
        padding: 1rem 2rem;
      }

      /* 問題4: nav-linksにgapではなくmarginが使われている（非効率） */
      .nav-links {
        display: flex;
        list-style: none;
      }

      .nav-links li {
        margin-right: 2rem;
      }

      /* 問題5: 最後のliだけmarginをリセットする必要がある（gapを使えば不要） */
      .nav-links li:last-child {
        margin-right: 0;
      }

      /* 問題6: カードが画面幅が狭い時に潰れる（flex-wrapがない） */
      .card-container {
        display: flex;
        gap: 20px;
      }

      .card {
        background-color: white;
        border: 1px solid #e5e7eb;
        padding: 20px;
        min-width: 250px;
      }
    </style>
  </head>
  <body>
    <h1>Flexboxのエラー修正</h1>

    <!-- セクション1: 中央配置 -->
    <div class="container">
      <div class="item">中央に配置したい</div>
    </div>

    <!-- セクション2: ナビゲーション -->
    <nav class="nav">
      <ul class="nav-links">
        <li><a href="#">ホーム</a></li>
        <li><a href="#">サービス</a></li>
        <li><a href="#">お問い合わせ</a></li>
      </ul>
    </nav>

    <!-- セクション3: カードレイアウト -->
    <div class="card-container">
      <div class="card">
        <h3>カード1</h3>
        <p>これは最初のカードです。</p>
      </div>
      <div class="card">
        <h3>カード2</h3>
        <p>これは2番目のカードです。</p>
      </div>
      <div class="card">
        <h3>カード3</h3>
        <p>これは3番目のカードです。</p>
      </div>
    </div>
  </body>
</html>
```

**ヒント**：レッスンの「よくある問題と修正方法」を参考にしよう！

**修正すべき点**：

1. `.container` に高さを設定する（例：`height: 300px;`）
2. `.item` から `width: 100%;` を削除
3. `.nav` に `display: flex;` と適切な配置プロパティを追加
4. `.nav-links` で `gap` を使う（`margin-right` を削除）
5. `.nav-links li:last-child` のスタイルを削除（gap を使うので不要）
6. `.card-container` に `flex-wrap: wrap;` を追加

**解答例**：[solutions/02-07.html](solutions/02-07.html)

---

## 学習のポイント

### 演習を終えたら確認しよう

- [ ] `display: flex;` で Flexbox を有効化できる
- [ ] `justify-content` で主軸方向の配置を制御できる
- [ ] `align-items` で交差軸方向の配置を制御できる
- [ ] `gap` で要素間の余白を簡単に設定できる
- [ ] `flex-wrap` で折り返しを制御できる
- [ ] `flex-direction` で並べる方向を変更できる
- [ ] ナビゲーションやカードレイアウトなど実践的なパターンを作れる
- [ ] AI に具体的な指示を出して Flexbox レイアウトを生成できる
- [ ] 生成されたコードの問題点を見つけられる

[解答例と解説はこちら](solutions/README.md)で確認できます。

---

**お疲れ様！** 🎉

Flexbox の基本をしっかりマスターできたね！次のレッスンに進もう！

👉 [Lesson 3: Grid へ進む](../../03-grid/README.md)

---

**Let's vibe and code!** 🎉
