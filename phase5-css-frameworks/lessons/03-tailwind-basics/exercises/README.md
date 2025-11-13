# Lesson 3: Tailwind CSS 基礎 - 演習問題 🎯

Lesson 3 で学んだ Tailwind CSS のユーティリティクラスを、実際に手を動かして練習しよう！

---

## 基礎編（3問）

### 演習 3-1: 様々なスタイルのボタン

**難易度**：⭐

**課題**：
Tailwind CSS のユーティリティクラスを使って、5 種類のボタンを作成してください。

**仕様**：
1. **Primary ボタン**：青背景、白文字、パディング、角丸、hover 時に濃い青
2. **Secondary ボタン**：グレー背景、白文字、パディング、角丸、hover 時に濃いグレー
3. **Outline ボタン**：透明背景、青枠線、青文字、hover 時に青背景＋白文字
4. **Large ボタン**：Primary スタイルで、サイズを大きく（px-8 py-4、text-lg）
5. **Disabled ボタン**：グレー背景、薄い文字、cursor-not-allowed

**ヒント**：
- `bg-{color}-{number}` で背景色
- `text-{color}-{number}` でテキスト色
- `px-{number} py-{number}` でパディング
- `rounded` で角丸
- `hover:bg-{color}-{number}` で hover 効果
- `border-2 border-{color}` で枠線
- `cursor-not-allowed opacity-50` で disabled 表現

---

### 演習 3-2: 商品カード

**難易度**：⭐⭐

**課題**：
Tailwind CSS を使って、商品カードを作成してください。

**仕様**：
- 白背景、影付き（shadow-lg）、角丸
- 画像エリア（placeholder 画像、w-full）
- 商品名（text-xl、font-bold、テキスト濃いグレー）
- 説明文（text-gray-600、小さいテキスト）
- 価格（text-2xl、font-bold、青色）
- 「カートに追加」ボタン（全幅、青背景、白文字）
- カード全体に hover で少し浮く効果（hover:shadow-2xl、transition）

**ヒント**：
- `shadow-lg` で影
- `rounded-lg` で角丸
- `p-{number}` でパディング
- `space-y-{number}` で子要素の縦間隔
- `w-full` で幅100%
- `transition` でスムーズなアニメーション

---

### 演習 3-3: 2 カラムレイアウト

**難易度**：⭐⭐

**課題**：
Flexbox を使って、2 カラムのレイアウトを作成してください。

**仕様**：
- 左カラム：画像（placeholder 画像、幅は 40%）
- 右カラム：テキストコンテンツ（幅は 60%）
  - タイトル（text-3xl、font-bold）
  - 説明文（複数行、text-gray-600）
  - 「詳しく見る」ボタン
- 全体をコンテナで囲む（max-w-4xl、mx-auto、パディング）
- 2 つのカラムの間に余白（gap-8）
- カラムを垂直方向中央揃え

**ヒント**：
- `flex` でフレックスコンテナ
- `w-2/5` で 40%、`w-3/5` で 60%
- `gap-8` で間隔
- `items-center` で垂直中央揃え
- `max-w-4xl mx-auto` で中央寄せコンテナ

---

## 応用編（3問）

### 演習 3-4: レスポンシブグリッドレイアウト

**難易度**：⭐⭐⭐

**課題**：
Grid を使って、レスポンシブな商品グリッドを作成してください。

**仕様**：
- 6 つの商品カードを配置
- 各カードの内容：
  - 画像（placeholder）
  - 商品名
  - 価格
  - 「詳細」ボタン
- **レスポンシブ対応**：
  - スマホ（デフォルト）：1 列
  - タブレット（md:）：2 列
  - PC（lg:）：3 列
- カード間の余白（gap-6）
- 全体をコンテナで囲む（container、mx-auto、px-4）

**ヒント**：
- `grid` でグリッドコンテナ
- `grid-cols-1` でスマホ 1 列
- `md:grid-cols-2` でタブレット 2 列
- `lg:grid-cols-3` で PC 3 列
- `gap-6` で間隔
- カードは演習 3-2 を参考に

---

### 演習 3-5: シンプルな Navbar

**難易度**：⭐⭐⭐

**課題**：
Tailwind CSS を使って、シンプルなナビゲーションバーを作成してください。

**仕様**：
- 背景色：青（bg-blue-600）
- 白文字
- 横並びレイアウト（Flexbox）
- 左側：ロゴ/ブランド名（text-xl、font-bold）
- 右側：メニュー項目（Home、About、Services、Contact）
- メニュー項目は hover で背景が少し明るくなる
- 全体に適切なパディング
- メニュー項目間に余白

**ヒント**：
- `flex justify-between items-center` で左右配置
- `space-x-6` でメニュー項目の間隔
- `hover:bg-blue-700` で hover 効果
- `px-4 py-3` で各メニュー項目のパディング
- `rounded` で角丸
- `transition` でスムーズな色変化

---

### 演習 3-6: アラート・通知コンポーネント

**難易度**：⭐⭐⭐

**課題**：
4 種類のアラートコンポーネントを作成してください。

**仕様**：

各アラートの共通スタイル：
- パディング（p-4）
- 角丸（rounded-lg）
- 左側に太いボーダー（border-l-4）
- 影（shadow-md）

4 種類のアラート：
1. **Success（成功）**
   - 背景：緑の薄い色（bg-green-50）
   - ボーダー：緑（border-green-500）
   - テキスト：濃い緑（text-green-800）
   - アイコン：✓
   - メッセージ：「操作が正常に完了しました！」

2. **Error（エラー）**
   - 背景：赤の薄い色（bg-red-50）
   - ボーダー：赤（border-red-500）
   - テキスト：濃い赤（text-red-800）
   - アイコン：✗
   - メッセージ：「エラーが発生しました。もう一度お試しください。」

3. **Warning（警告）**
   - 背景：黄色の薄い色（bg-yellow-50）
   - ボーダー：黄色（border-yellow-500）
   - テキスト：濃い黄色（text-yellow-800）
   - アイコン：⚠
   - メッセージ：「この操作は取り消せません。よろしいですか？」

4. **Info（情報）**
   - 背景：青の薄い色（bg-blue-50）
   - ボーダー：青（border-blue-500）
   - テキスト：濃い青（text-blue-800）
   - アイコン：ℹ
   - メッセージ：「新しいアップデートが利用可能です。」

**ヒント**：
- `flex items-start` でアイコンとテキストを横並び
- `mr-3` でアイコンとテキストの間隔
- `font-semibold` でメッセージを強調

---

## チャレンジ編（1問）

### 演習 3-7: Tailwind CSS で作るランディングページ

**難易度**：⭐⭐⭐⭐

**課題**：
これまで学んだ全ての Tailwind CSS のユーティリティクラスを使って、本格的なランディングページを作成してください。

**仕様**：

**1. Navbar**
- 背景色：白、影付き
- ロゴ（左）とメニュー項目（右）
- メニュー：Home、Features、Pricing、Contact
- 固定ヘッダー（sticky top-0）

**2. Hero セクション**
- グラデーション背景（bg-gradient-to-r from-blue-500 to-purple-600）
- 白文字
- 大きな見出し（text-5xl、font-bold）
- キャッチコピー（text-xl）
- 2 つの CTA ボタン（Primary と Secondary）
- 上下の余白（py-20）

**3. Features セクション（3 カラム）**
- 見出し「3 つの特徴」（中央揃え）
- 3 つの特徴カード：
  - アイコン（絵文字でOK）
  - タイトル
  - 説明文
- Grid レイアウト（lg:grid-cols-3）
- 各カードに影と hover 効果

**4. Pricing セクション（2 カラム）**
- 見出し「料金プラン」（中央揃え）
- 2 つのプランカード：
  1. **Basic プラン**
     - 価格：¥980/月
     - 特徴 3 つ（リスト）
     - 「無料で始める」ボタン
  2. **Pro プラン**
     - 価格：¥2,980/月
     - 特徴 5 つ（リスト）
     - 「今すぐ始める」ボタン（目立つスタイル）
     - 「人気」Badge 付き
- Grid レイアウト（md:grid-cols-2）

**5. CTA セクション**
- 背景色：青（bg-blue-600）
- 白文字
- 見出し「今すぐ始めよう！」
- 説明文
- 大きな CTA ボタン
- 上下の余白（py-16）

**6. Footer**
- 背景色：濃いグレー（bg-gray-800）
- 白文字
- コピーライト表記
- ソーシャルリンク（テキストでOK）
- 上下のパディング（py-8）

**ヒント**：
- セクションごとに `container mx-auto px-4` で囲む
- セクション間の余白は `my-16` や `my-20`
- `space-y-{number}` で縦方向の要素間隔
- `text-center` で中央揃え
- `max-w-7xl` で最大幅を制限
- Badge は `inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold`
- リストは `space-y-2` で項目間隔、`flex items-center` でアイコンとテキスト横並び

---

## 📚 解答例

全ての演習問題の解答例は [solutions](./solutions/) ディレクトリにあります。

- [解答例の解説](./solutions/README.md)
- [演習 3-1 の解答](./solutions/03-01.html)
- [演習 3-2 の解答](./solutions/03-02.html)
- [演習 3-3 の解答](./solutions/03-03.html)
- [演習 3-4 の解答](./solutions/03-04.html)
- [演習 3-5 の解答](./solutions/03-05.html)
- [演習 3-6 の解答](./solutions/03-06.html)
- [演習 3-7 の解答](./solutions/03-07.html)

**まずは自分で挑戦してから、解答例を見てね！** 💪
