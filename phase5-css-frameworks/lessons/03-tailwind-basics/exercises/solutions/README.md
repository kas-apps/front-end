# Lesson 3: Tailwind CSS 基礎 - 解答例と解説

各演習問題の解答例と、重要なポイントを解説します。

---

## 演習 3-1: 様々なスタイルのボタン

**ファイル**：[03-01.html](./03-01.html)

### ポイント

✅ **ユーティリティクラスの組み合わせ**
- `bg-{color}-{number}` + `text-white` で色付きボタン
- `px-{number} py-{number}` でパディング
- `rounded` または `rounded-lg` で角丸

✅ **hover 効果**
- `hover:bg-{color}-{number}` で hover 時の色変更
- `transition` でスムーズな変化

✅ **Outline ボタン**
- `border-2 border-{color}` で枠線
- `bg-transparent` で透明背景
- hover 時に `hover:bg-{color} hover:text-white` で反転

✅ **Disabled ボタン**
- `opacity-50` で薄く表示
- `cursor-not-allowed` でカーソル変更

```html
<!-- Primary ボタン -->
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
  Primary Button
</button>

<!-- Outline ボタン -->
<button class="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
  Outline Button
</button>

<!-- Disabled ボタン -->
<button class="bg-gray-400 text-gray-200 px-6 py-3 rounded-lg cursor-not-allowed opacity-50" disabled>
  Disabled Button
</button>
```

---

## 演習 3-2: 商品カード

**ファイル**：[03-02.html](./03-02.html)

### ポイント

✅ **カードの基本構造**
- `bg-white` で白背景
- `shadow-lg` で影
- `rounded-lg` で角丸
- `overflow-hidden` で角丸の画像にも角丸を適用

✅ **レイアウト**
- `p-6` でコンテンツエリアのパディング
- `space-y-{number}` で子要素の縦間隔

✅ **hover 効果**
- `hover:shadow-2xl` で影を強調
- `transition-shadow` または `transition` でスムーズな変化
- `transform hover:-translate-y-1` で浮く効果（オプション）

✅ **画像**
- `w-full` で幅100%
- `h-48` または `h-64` で高さ固定
- `object-cover` で画像のアスペクト比を維持

```html
<div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
  <img src="https://via.placeholder.com/400x300" alt="商品画像" class="w-full h-48 object-cover" />
  <div class="p-6 space-y-3">
    <h3 class="text-xl font-bold text-gray-800">商品名</h3>
    <p class="text-gray-600 text-sm">商品の説明文がここに入ります。</p>
    <p class="text-2xl font-bold text-blue-600">¥2,980</p>
    <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
      カートに追加
    </button>
  </div>
</div>
```

---

## 演習 3-3: 2 カラムレイアウト

**ファイル**：[03-03.html](./03-03.html)

### ポイント

✅ **Flexbox の基本**
- `flex` でフレックスコンテナ
- `gap-{number}` で子要素間の余白
- `items-center` で垂直方向の中央揃え

✅ **幅の指定**
- `w-2/5` で 40%
- `w-3/5` で 60%
- または `flex-1` で残りの空間を自動的に埋める

✅ **コンテナ**
- `max-w-4xl` で最大幅を制限
- `mx-auto` で中央寄せ
- `px-{number}` で左右のパディング

```html
<div class="max-w-4xl mx-auto px-4 py-8">
  <div class="flex gap-8 items-center">
    <!-- 左カラム：画像 -->
    <div class="w-2/5">
      <img src="https://via.placeholder.com/400x300" alt="画像" class="w-full rounded-lg" />
    </div>

    <!-- 右カラム：テキスト -->
    <div class="w-3/5 space-y-4">
      <h2 class="text-3xl font-bold text-gray-800">タイトル</h2>
      <p class="text-gray-600">
        説明文がここに入ります。Flexboxを使うことで、簡単に2カラムレイアウトが作れます。
      </p>
      <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        詳しく見る
      </button>
    </div>
  </div>
</div>
```

---

## 演習 3-4: レスポンシブグリッドレイアウト

**ファイル**：[03-04.html](./03-04.html)

### ポイント

✅ **Grid の基本**
- `grid` でグリッドコンテナ
- `grid-cols-{number}` で列数
- `gap-{number}` で間隔

✅ **レスポンシブ対応**
- デフォルト（スマホ）：`grid-cols-1`
- タブレット（md:）：`md:grid-cols-2`
- PC（lg:）：`lg:grid-cols-3`

✅ **モバイルファースト**
- 小さい画面から順番に指定
- 大きい画面の設定は前の設定を上書き

```html
<div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- カード1 -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/400x300" alt="商品" class="w-full h-48 object-cover" />
      <div class="p-4 space-y-2">
        <h3 class="text-lg font-bold text-gray-800">商品名 1</h3>
        <p class="text-xl font-bold text-blue-600">¥1,980</p>
        <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          詳細
        </button>
      </div>
    </div>

    <!-- カード2〜6 も同様 -->
  </div>
</div>
```

---

## 演習 3-5: シンプルな Navbar

**ファイル**：[03-05.html](./03-05.html)

### ポイント

✅ **Navbar の基本構造**
- `flex justify-between items-center` で左右配置
- `px-{number} py-{number}` でパディング
- `bg-{color}` と `text-white` で色設定

✅ **メニュー項目の配置**
- メニュー全体を `flex` でラップ
- `space-x-{number}` で横方向の間隔
- または `gap-{number}` を使用

✅ **hover 効果**
- `hover:bg-{color}` で背景色変更
- `px-{number} py-{number}` で各項目のパディング
- `rounded` で角丸
- `transition` でスムーズな変化

```html
<nav class="bg-blue-600 text-white px-6 py-4">
  <div class="container mx-auto flex justify-between items-center">
    <!-- ロゴ -->
    <div class="text-xl font-bold">MyBrand</div>

    <!-- メニュー -->
    <div class="flex space-x-2">
      <a href="#" class="px-4 py-2 rounded hover:bg-blue-700 transition">Home</a>
      <a href="#" class="px-4 py-2 rounded hover:bg-blue-700 transition">About</a>
      <a href="#" class="px-4 py-2 rounded hover:bg-blue-700 transition">Services</a>
      <a href="#" class="px-4 py-2 rounded hover:bg-blue-700 transition">Contact</a>
    </div>
  </div>
</nav>
```

---

## 演習 3-6: アラート・通知コンポーネント

**ファイル**：[03-06.html](./03-06.html)

### ポイント

✅ **共通スタイル**
- `p-4` でパディング
- `rounded-lg` で角丸
- `border-l-4` で左側の太いボーダー
- `shadow-md` で影

✅ **色のバリエーション**
- Success：`bg-green-50 border-green-500 text-green-800`
- Error：`bg-red-50 border-red-500 text-red-800`
- Warning：`bg-yellow-50 border-yellow-500 text-yellow-800`
- Info：`bg-blue-50 border-blue-500 text-blue-800`

✅ **アイコンとテキストのレイアウト**
- `flex items-start` で横並び（上揃え）
- `mr-3` または `mr-4` でアイコンとテキストの間隔
- アイコンを `text-2xl` または `text-3xl` で大きく

```html
<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 rounded-lg shadow-md">
  <div class="flex items-start">
    <span class="text-2xl mr-3">✓</span>
    <p class="font-semibold">操作が正常に完了しました！</p>
  </div>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-lg shadow-md">
  <div class="flex items-start">
    <span class="text-2xl mr-3">✗</span>
    <p class="font-semibold">エラーが発生しました。もう一度お試しください。</p>
  </div>
</div>
```

---

## 演習 3-7: Tailwind CSS で作るランディングページ

**ファイル**：[03-07.html](./03-07.html)

### ポイント

✅ **全体構成**
1. Navbar（固定ヘッダー）
2. Hero セクション（グラデーション背景）
3. Features セクション（3 カラムグリッド）
4. Pricing セクション（2 カラムグリッド）
5. CTA セクション
6. Footer

✅ **固定ヘッダー**
- `sticky top-0` で固定
- `z-50` で他の要素より前面に表示
- `bg-white shadow-md` で背景と影

✅ **グラデーション背景**
- `bg-gradient-to-r from-blue-500 to-purple-600`
- `text-white` で白文字

✅ **レスポンシブグリッド**
- Features：`grid grid-cols-1 md:grid-cols-3 gap-8`
- Pricing：`grid grid-cols-1 md:grid-cols-2 gap-8`

✅ **Badge（人気ラベル）**
- `inline-block` でインライン要素として表示
- `bg-yellow-400 text-yellow-900`
- `px-3 py-1` で小さいパディング
- `rounded-full` で丸い角
- `text-sm font-semibold` で小さく太字

✅ **リスト**
- `space-y-2` で項目間隔
- `flex items-center` でアイコンとテキスト横並び
- `mr-2` でアイコンとテキストの間隔

✅ **セクションの区切り**
- `container mx-auto px-4` で各セクションを囲む
- `my-16` または `py-16` でセクション間の余白

```html
<!-- Hero セクション -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold mb-4">Tailwind CSS で始める爆速開発</h1>
    <p class="text-xl mb-8">ユーティリティファーストで、自由自在な UI を実現</p>
    <div class="flex justify-center gap-4">
      <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        今すぐ始める
      </button>
      <button class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
        詳しく見る
      </button>
    </div>
  </div>
</div>

<!-- Pricing カード（Pro プラン） -->
<div class="bg-white shadow-xl rounded-lg p-8 border-2 border-blue-500 relative">
  <!-- Badge -->
  <span class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
    人気
  </span>
  <h3 class="text-2xl font-bold text-gray-800 mb-4">Pro プラン</h3>
  <p class="text-4xl font-bold text-blue-600 mb-6">¥2,980<span class="text-lg text-gray-600">/月</span></p>
  <ul class="space-y-2 mb-6">
    <li class="flex items-center">
      <span class="text-green-500 mr-2">✓</span>
      <span>全ての Basic 機能</span>
    </li>
    <li class="flex items-center">
      <span class="text-green-500 mr-2">✓</span>
      <span>優先サポート</span>
    </li>
    <!-- 他の特徴 -->
  </ul>
  <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
    今すぐ始める
  </button>
</div>
```

---

## 🎯 重要な共通ポイント

### 1. Tailwind CSS Play CDN の読み込み

全ての解答例で、Tailwind CSS Play CDN を使用しています：

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**重要**：本番環境では、パフォーマンスのために CLI や PostCSS を使った方が良いです。Play CDN は開発・プロトタイプ用です。

---

### 2. ユーティリティクラスの組み合わせ方

Tailwind CSS では、複数のユーティリティクラスを組み合わせて UI を作ります：

```html
<!-- 良い例：必要なクラスを明確に指定 -->
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
  ボタン
</button>

<!-- 悪い例：不要なクラスを含めない -->
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform">
  <!-- transitionだけで十分な場合が多い -->
</button>
```

---

### 3. レスポンシブデザインの考え方

**モバイルファースト**：小さい画面から順番に指定していきます。

```html
<!-- スマホ:1列、タブレット:2列、PC:3列 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- カード -->
</div>
```

| ブレークポイント | プレフィックス | 幅 |
|-----------------|----------------|-----|
| スマホ | なし | 0px 〜 |
| タブレット | `md:` | 768px 〜 |
| PC | `lg:` | 1024px 〜 |
| 大画面 PC | `xl:` | 1280px 〜 |
| 超大画面 | `2xl:` | 1536px 〜 |

---

### 4. hover と transition

**hover 効果には必ず transition を付ける**とスムーズになります：

```html
<!-- transition なし：カクカクした変化 -->
<button class="bg-blue-500 hover:bg-blue-600">ボタン</button>

<!-- transition あり：スムーズな変化 ✓ -->
<button class="bg-blue-500 hover:bg-blue-600 transition">ボタン</button>
```

---

### 5. 色の濃淡の使い分け

Tailwind CSS の色は、`50`（最も薄い）から `900`（最も濃い）まであります：

| 用途 | 濃さ | 例 |
|------|------|-----|
| 背景（薄い） | 50-100 | `bg-blue-50`、`bg-gray-100` |
| ボタン | 500-600 | `bg-blue-500`、`bg-green-600` |
| hover 時 | 600-700 | `hover:bg-blue-600` |
| テキスト | 700-900 | `text-gray-800`、`text-blue-900` |

---

## 💡 デバッグのヒント

### 問題: クラスが効かない

**確認すべきこと**：
- [ ] Play CDN が正しく読み込まれているか
- [ ] クラス名のスペルミスがないか（`bg-blue-500` を `bg-blue500` と書いていないか）
- [ ] ブラウザの開発者ツールで、実際に適用されているか確認

### 問題: レスポンシブが動かない

**確認すべきこと**：
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` が設定されているか
- [ ] ブレークポイントのプレフィックスが正しいか（`md:`、`lg:` など）
- [ ] モバイルファーストで書いているか（小さい画面から順番に）

### 問題: 要素が中央に寄らない

**確認すべきこと**：
- [ ] コンテナに `mx-auto` を設定しているか
- [ ] Flexbox で中央揃え：`flex justify-center items-center`
- [ ] テキストの中央揃え：`text-center`
- [ ] 最大幅を設定しているか（`max-w-4xl` など）

---

## 🚀 さらに学ぶために

解答例をベースに、以下のカスタマイズに挑戦してみよう：

1. **色の変更**
   - `bg-blue-500` を `bg-purple-500` や `bg-green-500` に変更
   - 自分の好きなカラーパレットを作る

2. **サイズの調整**
   - `px-6 py-3` を `px-8 py-4` に変更して大きく
   - `text-xl` を `text-2xl` に変更して文字を大きく

3. **アニメーションの追加**
   - `transform hover:scale-105` で hover 時に拡大
   - `transition-all` で全てのプロパティにアニメーション

4. **レイアウトの変更**
   - 3 カラムを 4 カラムに変更
   - Flexbox を Grid に変更（またはその逆）

5. **新しいコンポーネントの作成**
   - ドロップダウンメニュー
   - タブ UI
   - アコーディオン

**Tailwind CSS は組み合わせが無限大！色々試して、自分だけの UI を作ってみよう！** 💪

---

**お疲れ様でした！次のレッスンで Tailwind CSS の実践テクニックを学びましょう！** 🎉
