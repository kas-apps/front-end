# Lesson 2: Bootstrap コンポーネント - 演習問題 🎯

Lesson 2 で学んだ Bootstrap コンポーネントを、実際に手を動かして練習しよう！

---

## 基礎編（3問）

### 演習 2-1: シンプルな Navbar

**難易度**：⭐

**課題**：
Bootstrap の Navbar を使って、シンプルなヘッダーを作成してください。

**仕様**：
- 背景色：Dark
- ロゴ/ブランド名：「MyWebsite」
- メニュー項目：Home、About、Services、Contact
- レスポンシブ対応（992px 未満でハンバーガーメニュー）
- Home を active 状態にする

**ヒント**：
- `navbar navbar-expand-lg navbar-dark bg-dark`
- `navbar-toggler` でハンバーガーメニュー
- `nav-link active` で現在のページを表示

---

### 演習 2-2: Modal を使ったログインフォーム

**難易度**：⭐⭐

**課題**：
Modal を使って、ログインフォームを作成してください。

**仕様**：
- 「ログイン」ボタンをクリックで Modal を開く
- Modal のタイトル：「ログイン」
- フォーム内容：
  - メールアドレス（type="email"）
  - パスワード（type="password"）
  - 「ログイン状態を保持する」チェックボックス
- フッターに「キャンセル」と「ログイン」ボタン

**ヒント**：
- `data-bs-toggle="modal"` と `data-bs-target`
- `form-label`、`form-control` でフォームスタイリング
- `form-check` でチェックボックス

---

### 演習 2-3: お問い合わせフォーム

**難易度**：⭐⭐

**課題**：
Bootstrap の Form コンポーネントを使って、お問い合わせフォームを作成してください。

**仕様**：
- 入力項目：
  - 名前（text）
  - メールアドレス（email）
  - 件名（select：お問い合わせ / サポート / その他）
  - メッセージ（textarea、4行）
  - プライバシーポリシーへの同意（checkbox）
- 送信ボタン（Primary カラー）
- 各項目に `required` 属性を付ける

**ヒント**：
- `mb-3` で各フォームグループの余白
- `form-select` で select 要素
- `form-check` でチェックボックス

---

## 応用編（3問）

### 演習 2-4: 画像ギャラリー with Carousel

**難易度**：⭐⭐⭐

**課題**：
Carousel を使って、画像ギャラリーを作成してください。

**仕様**：
- 4 枚の画像スライド（placeholder 使用）
- 各スライドにタイトルとキャプション
- インジケーター（ドット）を表示
- 前へ・次へボタンを表示
- 自動再生（3 秒間隔）

**ヒント**：
- `carousel slide` と `data-bs-ride="carousel"`
- `data-bs-interval="3000"` で 3 秒間隔
- `carousel-indicators` でドット
- `carousel-caption` でキャプション

---

### 演習 2-5: Navbar + Modal + Form の統合

**難易度**：⭐⭐⭐

**課題**：
Navbar、Modal、Form を組み合わせて、ヘッダー付きのページを作成してください。

**仕様**：

**Navbar**：
- 背景色：Primary
- メニュー：Home、Features、Pricing
- 右側に「お問い合わせ」ボタン（白背景）
- 「お問い合わせ」ボタンをクリックで Modal を開く

**Modal（お問い合わせフォーム）**：
- タイトル：「お問い合わせ」
- フォーム：名前、メール、メッセージ
- フッター：閉じる、送信ボタン

**ヒント**：
- Navbar のボタンに `data-bs-toggle="modal"`
- Modal の ID と `data-bs-target` を一致させる

---

### 演習 2-6: 商品カタログページ

**難易度**：⭐⭐⭐

**課題**：
複数のコンポーネントを組み合わせて、商品カタログページを作成してください。

**仕様**：

**構成**：
1. Navbar（ロゴ、メニュー、検索ボックス）
2. Breadcrumb（Home > Products）
3. 商品カードグリッド（3 カラム、6 商品）
   - 各カードに画像、タイトル、価格、「カートに追加」ボタン
   - 一部の商品に「New」Badge
4. Pagination（ページ送り、5 ページ分）

**ヒント**：
- `col-md-4` で 3 カラム
- `badge bg-danger` で New ラベル
- `pagination` でページ送り

---

## チャレンジ編（1問）

### 演習 2-7: Bootstrap コンポーネント総合課題

**難易度**：⭐⭐⭐⭐

**課題**：
これまで学んだ全てのコンポーネントを使って、本格的なポートフォリオサイトを作成してください。

**仕様**：

**1. Navbar**
- 背景色：Dark
- ロゴ：「My Portfolio」
- メニュー：Home、About、Works、Contact
- Contact は Modal を開く

**2. Carousel（メインビジュアル）**
- 3 枚のスライド
- 各スライドにキャッチコピー
- 自動再生

**3. About セクション**
- 自己紹介文
- スキルをプログレスバーで表示（HTML:90%、CSS:85%、JavaScript:75%）

**4. Works セクション（作品ギャラリー）**
- 6 つの作品カード（2 行 × 3 列）
- 各カードに画像、タイトル、説明
- 一部に「Featured」Badge
- カードをクリックで Modal で詳細表示

**5. Contact Modal**
- 名前、メール、メッセージのフォーム
- 送信ボタン

**6. Footer**
- 背景色：Dark
- コピーライト表記
- ソーシャルリンク（アイコンの代わりにテキストでOK）

**ヒント**：
- セクションごとに `container` と `my-5` で区切る
- Modal は複数作成（各作品用 + Contact 用）
- Progress は `progress-bar` と `style="width: XX%"`
- 全体の構造を先に作ってから、細部を調整

---

## 📚 解答例

全ての演習問題の解答例は [solutions](./solutions/) ディレクトリにあります。

- [解答例の解説](./solutions/README.md)
- [演習 2-1 の解答](./solutions/02-01.html)
- [演習 2-2 の解答](./solutions/02-02.html)
- [演習 2-3 の解答](./solutions/02-03.html)
- [演習 2-4 の解答](./solutions/02-04.html)
- [演習 2-5 の解答](./solutions/02-05.html)
- [演習 2-6 の解答](./solutions/02-06.html)
- [演習 2-7 の解答](./solutions/02-07.html)

**まずは自分で挑戦してから、解答例を見てね！** 💪
