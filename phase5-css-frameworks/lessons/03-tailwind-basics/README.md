# Lesson 3: Tailwind CSS 基礎 🌊

**学習目標**：Tailwind CSS の基本を理解し、ユーティリティファーストのアプローチで、カスタマイズ性の高い UI を爆速で作れるようになる

---

## なぜ Tailwind CSS を学ぶの？

Lesson 1-2 で Bootstrap を学んで、「コンポーネントベース」のフレームワークの便利さを体感したね！

でも、こんな経験はない？

❌ **Bootstrap の悩み**：

- Bootstrap らしいデザインになってしまう
- 独自のデザインを作りたいけど、カスタマイズが難しい
- 使わないコンポーネントも読み込まれて、ファイルサイズが大きい
- 細かい調整をしたいけど、カスタム CSS を書くのが面倒

そこで登場するのが **Tailwind CSS**！

✅ **Tailwind CSS の特徴**：

- **ユーティリティファースト**：小さな部品（クラス）を組み合わせて作る
- **完全カスタマイズ可能**：独自のデザインが簡単に作れる
- **超軽量**：使った分だけ CSS が生成される
- **Bootstrap らしさゼロ**：自分だけのデザインを実現

**たとえるなら...**

- **Bootstrap** = 完成品の家具セット（IKEA）
- **Tailwind CSS** = レゴブロック（自由に組み立てる）

Bootstrap は「すぐ使える完成品」、Tailwind CSS は「自由に組み合わせられる部品」！

### このレッスンで学ぶこと

- 🌊 Tailwind CSS とは何か、Bootstrap との違い
- 🚀 CDN での導入方法（Play CDN）
- 🧩 ユーティリティファーストの考え方
- 📱 レスポンシブデザイン（sm:、md:、lg: プレフィックス）
- 📦 Flexbox と Grid の使い方
- 🎨 カラー、スペーシング、タイポグラフィ
- ⚡ 実践例

---

## Tailwind CSS とは何か？

**Tailwind CSS** は、**ユーティリティファースト**の CSS フレームワーク。

### ユーティリティファーストとは？

**従来の CSS（コンポーネントベース）**：

```html
<button class="btn btn-primary">ボタン</button>
```

→ `btn` や `btn-primary` という**完成されたコンポーネント**を使う

**Tailwind CSS（ユーティリティファースト）**：

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  ボタン
</button>
```

→ `bg-blue-500`（背景色）、`text-white`（文字色）、`px-4`（左右パディング）など、**小さなユーティリティクラス**を組み合わせて作る

### Bootstrap vs Tailwind CSS：どっちを使う？

| 項目 | Bootstrap 🅱️ | Tailwind CSS 🌊 |
|------|--------------|-----------------|
| **アプローチ** | コンポーネントベース | ユーティリティファースト |
| **学習曲線** | やさしい | やや急（クラス名を覚える必要） |
| **デザインの自由度** | 中（Bootstrap らしくなる） | 超高い（完全に自由） |
| **ファイルサイズ** | 大（全部入り） | 小（使った分だけ） |
| **開発スピード** | 超速い（既製品） | 速い（組み立て） |
| **カスタマイズ性** | 中 | 超高い |
| **向いているプロジェクト** | 管理画面、プロトタイプ | ランディングページ、独自デザイン |

**結論**：どちらも素晴らしい！プロジェクトに応じて使い分けよう 💪

---

## Tailwind CSS の導入：CDN で超簡単！

Tailwind CSS を使うには、**たった 1 行追加するだけ**！

### Play CDN とは？

**Play CDN** = 開発・学習用の CDN

- インストール不要
- 設定ファイル不要
- すぐに試せる

**注意**：本番環境では、ビルドツールを使った方が良い（ファイルサイズを最小化できる）。でも、学習や小規模プロジェクトには Play CDN が超便利！

### 基本的な HTML テンプレート

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind CSS 入門</title>

    <!-- Tailwind CSS Play CDN（これを追加するだけ！） -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold text-blue-600">
      Hello, Tailwind CSS!
    </h1>
  </body>
</html>
```

**重要なポイント**：

- `<script>` タグで読み込む（CSS ではなく JavaScript）
- `<head>` 内に配置
- `viewport` メタタグは必須（レスポンシブに必要）

### 最初の Tailwind ボタン

早速、Tailwind CSS の力を体感してみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind ボタン</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <h1 class="text-2xl font-bold mb-6">Tailwind CSS ボタンの例</h1>

    <!-- 通常のボタン（Tailwind なし） -->
    <button>普通のボタン</button>

    <br /><br />

    <!-- Tailwind ボタン -->
    <button class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
      Primary ボタン
    </button>

    <button class="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 ml-2">
      Success ボタン
    </button>

    <button class="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 ml-2">
      Danger ボタン
    </button>
  </body>
</html>
```

**クラス名の読み方**：

- `bg-blue-500`：背景色を青（500 の濃さ）
- `text-white`：文字色を白
- `px-6`：左右のパディング（1.5rem = 24px）
- `py-3`：上下のパディング（0.75rem = 12px）
- `rounded`：角を丸く
- `hover:bg-blue-600`：ホバー時に背景色を濃く
- `ml-2`：左マージン（0.5rem = 8px）

**たったこれだけで、美しいボタンが完成！** ✨

---

## ユーティリティクラスの基本

Tailwind CSS の**最も重要な概念**を理解しよう！

### 基本的なパターン

Tailwind のクラス名は、以下のパターンで構成されているよ。

```text
{property}-{value}
```

**例**：

- `text-center`：text-align: center
- `font-bold`：font-weight: bold
- `bg-red-500`：background-color: #ef4444

### よく使うユーティリティクラス

#### 1. スペーシング（余白）

```html
<!-- margin（外側の余白） -->
<div class="m-4">全方向マージン</div>
<div class="mt-4">上マージン</div>
<div class="mb-4">下マージン</div>
<div class="ml-4">左マージン</div>
<div class="mr-4">右マージン</div>
<div class="mx-4">左右マージン</div>
<div class="my-4">上下マージン</div>

<!-- padding（内側の余白） -->
<div class="p-4">全方向パディング</div>
<div class="px-4">左右パディング</div>
<div class="py-4">上下パディング</div>
```

**数値の対応表**：

```text
0 = 0px
1 = 0.25rem (4px)
2 = 0.5rem (8px)
3 = 0.75rem (12px)
4 = 1rem (16px)
5 = 1.25rem (20px)
6 = 1.5rem (24px)
8 = 2rem (32px)
10 = 2.5rem (40px)
12 = 3rem (48px)
16 = 4rem (64px)
```

---

#### 2. カラー

Tailwind CSS には、**豊富なカラーパレット**が用意されているよ！

```html
<!-- 背景色 -->
<div class="bg-gray-100">薄いグレー</div>
<div class="bg-blue-500">青</div>
<div class="bg-green-500">緑</div>
<div class="bg-red-500">赤</div>
<div class="bg-yellow-500">黄色</div>
<div class="bg-purple-500">紫</div>

<!-- 文字色 -->
<p class="text-gray-600">グレー文字</p>
<p class="text-blue-500">青文字</p>
<p class="text-red-500">赤文字</p>

<!-- ボーダー色 -->
<div class="border border-gray-300">グレーのボーダー</div>
<div class="border border-blue-500">青のボーダー</div>
```

**色の濃さ**：

- `50`：最も薄い
- `100`、`200`、`300`：薄い
- `400`、`500`、`600`：中間（`500` が標準）
- `700`、`800`：濃い
- `900`：最も濃い

---

#### 3. テキストとフォント

```html
<!-- フォントサイズ -->
<p class="text-xs">極小テキスト</p>
<p class="text-sm">小テキスト</p>
<p class="text-base">通常テキスト</p>
<p class="text-lg">大テキスト</p>
<p class="text-xl">特大テキスト</p>
<p class="text-2xl">超特大テキスト</p>
<p class="text-3xl">巨大テキスト</p>

<!-- フォントウェイト -->
<p class="font-light">細字</p>
<p class="font-normal">通常</p>
<p class="font-medium">中</p>
<p class="font-semibold">やや太字</p>
<p class="font-bold">太字</p>

<!-- テキスト配置 -->
<p class="text-left">左寄せ</p>
<p class="text-center">中央寄せ</p>
<p class="text-right">右寄せ</p>

<!-- テキスト変換 -->
<p class="uppercase">UPPERCASE</p>
<p class="lowercase">lowercase</p>
<p class="capitalize">Capitalize Each Word</p>
```

---

#### 4. 幅と高さ

```html
<!-- 固定幅 -->
<div class="w-32">幅 8rem (128px)</div>
<div class="w-64">幅 16rem (256px)</div>

<!-- パーセント幅 -->
<div class="w-1/2">幅 50%</div>
<div class="w-1/3">幅 33.333%</div>
<div class="w-2/3">幅 66.666%</div>
<div class="w-full">幅 100%</div>

<!-- 画面幅・高さ -->
<div class="w-screen">画面幅いっぱい</div>
<div class="h-screen">画面高さいっぱい</div>

<!-- 最大幅 -->
<div class="max-w-sm">最大幅 24rem (384px)</div>
<div class="max-w-md">最大幅 28rem (448px)</div>
<div class="max-w-lg">最大幅 32rem (512px)</div>
<div class="max-w-xl">最大幅 36rem (576px)</div>
```

---

#### 5. ボーダーと角丸

```html
<!-- ボーダー -->
<div class="border">1px ボーダー</div>
<div class="border-2">2px ボーダー</div>
<div class="border-4">4px ボーダー</div>

<!-- 角丸 -->
<div class="rounded">角丸 (4px)</div>
<div class="rounded-md">中角丸 (6px)</div>
<div class="rounded-lg">大角丸 (8px)</div>
<div class="rounded-xl">特大角丸 (12px)</div>
<div class="rounded-full">完全な円</div>

<!-- 影 -->
<div class="shadow">小さい影</div>
<div class="shadow-md">中影</div>
<div class="shadow-lg">大きい影</div>
<div class="shadow-xl">特大影</div>
```

---

## レスポンシブデザイン：画面サイズに応じて変化！

Tailwind CSS の**レスポンシブデザイン**は超シンプル！

### ブレークポイント

| プレフィックス | 画面幅 | デバイス例 |
|------------|-------|----------|
| なし（デフォルト） | すべて | 全デバイス |
| `sm:` | ≥ 640px | スマホ（横） |
| `md:` | ≥ 768px | タブレット |
| `lg:` | ≥ 1024px | PC（小） |
| `xl:` | ≥ 1280px | PC（中） |
| `2xl:` | ≥ 1536px | PC（大） |

### レスポンシブクラスの書き方

```html
<!-- スマホ:赤、タブレット:青、PC:緑 -->
<div class="bg-red-500 md:bg-blue-500 lg:bg-green-500">
  色が変わる
</div>

<!-- スマホ:テキスト小、PC:テキスト大 -->
<p class="text-sm lg:text-2xl">
  サイズが変わる
</p>

<!-- スマホ:縦並び、PC:横並び -->
<div class="flex flex-col lg:flex-row">
  <div>アイテム1</div>
  <div>アイテム2</div>
</div>
```

**モバイルファースト**：

- デフォルト = スマホ
- `md:`、`lg:` で大きい画面用のスタイルを追加

### 実例：レスポンシブなカードレイアウト

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>レスポンシブカード</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-center mb-8">
      レスポンシブカードレイアウト
    </h1>
    <p class="text-center text-gray-600 mb-8">画面幅を変えてみて！</p>

    <!-- グリッドレイアウト -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- カード1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://placehold.jp/400x200.png/3b82f6/ffffff?text=Card+1"
          alt="Card 1"
          class="w-full"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">カード 1</h2>
          <p class="text-gray-600">
            スマホ:1列、タブレット:2列、PC:3列で表示されます。
          </p>
        </div>
      </div>

      <!-- カード2 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://placehold.jp/400x200.png/10b981/ffffff?text=Card+2"
          alt="Card 2"
          class="w-full"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">カード 2</h2>
          <p class="text-gray-600">
            grid-cols-1（スマホ）→ md:grid-cols-2（タブレット）→
            lg:grid-cols-3（PC）
          </p>
        </div>
      </div>

      <!-- カード3 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://placehold.jp/400x200.png/ef4444/ffffff?text=Card+3"
          alt="Card 3"
          class="w-full"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">カード 3</h2>
          <p class="text-gray-600">gap-6でカード間の余白を設定しています。</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

**クラスの読み方**：

- `grid`：Grid レイアウトを有効化
- `grid-cols-1`：1 列（デフォルト = スマホ）
- `md:grid-cols-2`：768px 以上で 2 列
- `lg:grid-cols-3`：1024px 以上で 3 列
- `gap-6`：カード間の余白（1.5rem = 24px）

**メディアクエリ不要で、レスポンシブ完成！** 🎉

---

## Flexbox：柔軟な 1 次元レイアウト 📦

Tailwind CSS の Flexbox クラスを使えば、Phase 2 で学んだ Flexbox が超簡単に使えるよ！

### 基本的な Flexbox

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Flexbox</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <h2 class="text-2xl font-bold mb-4">Flexbox: 横並び</h2>
    <div class="flex gap-4 bg-gray-200 p-4">
      <div class="bg-blue-500 text-white p-4 rounded">アイテム 1</div>
      <div class="bg-blue-500 text-white p-4 rounded">アイテム 2</div>
      <div class="bg-blue-500 text-white p-4 rounded">アイテム 3</div>
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Flexbox: 中央寄せ</h2>
    <div class="flex justify-center items-center gap-4 bg-gray-200 p-4 h-32">
      <div class="bg-green-500 text-white p-4 rounded">中央</div>
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Flexbox: 両端寄せ</h2>
    <div class="flex justify-between items-center bg-gray-200 p-4">
      <div class="bg-red-500 text-white p-4 rounded">左</div>
      <div class="bg-red-500 text-white p-4 rounded">中央</div>
      <div class="bg-red-500 text-white p-4 rounded">右</div>
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Flexbox: 縦並び</h2>
    <div class="flex flex-col gap-4 bg-gray-200 p-4">
      <div class="bg-purple-500 text-white p-4 rounded">上</div>
      <div class="bg-purple-500 text-white p-4 rounded">中</div>
      <div class="bg-purple-500 text-white p-4 rounded">下</div>
    </div>
  </body>
</html>
```

**Flexbox クラス一覧**：

| クラス | CSS | 説明 |
|--------|-----|------|
| `flex` | `display: flex` | Flexbox を有効化 |
| `flex-row` | `flex-direction: row` | 横並び（デフォルト） |
| `flex-col` | `flex-direction: column` | 縦並び |
| `justify-start` | `justify-content: flex-start` | 左寄せ |
| `justify-center` | `justify-content: center` | 中央寄せ |
| `justify-end` | `justify-content: flex-end` | 右寄せ |
| `justify-between` | `justify-content: space-between` | 両端寄せ |
| `items-start` | `align-items: flex-start` | 上寄せ |
| `items-center` | `align-items: center` | 縦方向中央寄せ |
| `items-end` | `align-items: flex-end` | 下寄せ |
| `gap-4` | `gap: 1rem` | 要素間の余白 |

---

## Grid：強力な 2 次元レイアウト 🎯

Tailwind CSS の Grid クラスも超便利！

### 基本的な Grid

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Grid</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <h2 class="text-2xl font-bold mb-4">Grid: 3カラム</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-blue-500 text-white p-4 rounded text-center">1</div>
      <div class="bg-blue-500 text-white p-4 rounded text-center">2</div>
      <div class="bg-blue-500 text-white p-4 rounded text-center">3</div>
      <div class="bg-blue-500 text-white p-4 rounded text-center">4</div>
      <div class="bg-blue-500 text-white p-4 rounded text-center">5</div>
      <div class="bg-blue-500 text-white p-4 rounded text-center">6</div>
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Grid: 不均等なカラム</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 bg-green-500 text-white p-4 rounded">
        2カラム分（広い）
      </div>
      <div class="bg-green-500 text-white p-4 rounded">
        1カラム分
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Grid: レスポンシブ</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-purple-500 text-white p-4 rounded text-center">1</div>
      <div class="bg-purple-500 text-white p-4 rounded text-center">2</div>
      <div class="bg-purple-500 text-white p-4 rounded text-center">3</div>
      <div class="bg-purple-500 text-white p-4 rounded text-center">4</div>
    </div>
  </body>
</html>
```

**Grid クラス一覧**：

| クラス | CSS | 説明 |
|--------|-----|------|
| `grid` | `display: grid` | Grid を有効化 |
| `grid-cols-1` | `grid-template-columns: repeat(1, 1fr)` | 1 列 |
| `grid-cols-2` | `grid-template-columns: repeat(2, 1fr)` | 2 列 |
| `grid-cols-3` | `grid-template-columns: repeat(3, 1fr)` | 3 列 |
| `grid-cols-4` | `grid-template-columns: repeat(4, 1fr)` | 4 列 |
| `col-span-2` | `grid-column: span 2` | 2 カラム分を占める |
| `gap-4` | `gap: 1rem` | グリッド間の余白 |

---

## 疑似クラス：ホバーやフォーカス時のスタイル ✨

Tailwind CSS では、**ホバー時やフォーカス時**のスタイルも簡単に指定できる！

### よく使う疑似クラス

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>疑似クラス</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <h2 class="text-2xl font-bold mb-4">ホバー効果</h2>
    <button class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 hover:scale-105 transition">
      ホバーしてみて！
    </button>

    <h2 class="text-2xl font-bold mb-4 mt-8">フォーカス効果</h2>
    <input
      type="text"
      placeholder="クリックしてフォーカス"
      class="border-2 border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />

    <h2 class="text-2xl font-bold mb-4 mt-8">アクティブ状態</h2>
    <button class="bg-green-500 text-white px-6 py-3 rounded active:bg-green-700 active:scale-95 transition">
      クリックしてみて！
    </button>

    <h2 class="text-2xl font-bold mb-4 mt-8">グループホバー</h2>
    <div class="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
      <h3 class="text-xl font-bold group-hover:text-blue-500 transition">
        カードタイトル
      </h3>
      <p class="text-gray-600 mt-2">
        親要素にホバーすると、このテキストの色が変わります。
      </p>
    </div>
  </body>
</html>
```

**疑似クラスプレフィックス**：

| プレフィックス | 説明 | 例 |
|------------|------|-----|
| `hover:` | ホバー時 | `hover:bg-blue-600` |
| `focus:` | フォーカス時 | `focus:border-blue-500` |
| `active:` | アクティブ時（クリック中） | `active:scale-95` |
| `disabled:` | 無効時 | `disabled:opacity-50` |
| `group-hover:` | 親がホバーされた時 | `group-hover:text-blue-500` |

**transition** クラスで、滑らかなアニメーション効果を追加できる！

---

## 実践例：Tailwind CSS で作る美しいランディングページ 🚀

これまで学んだことを全部使って、本格的なランディングページを作ってみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind CSS ランディングページ</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <!-- ヘッダー -->
    <header class="bg-white shadow">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-blue-600">MyApp</div>
          <div class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Pricing</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>

    <!-- ヒーローセクション -->
    <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-4">
          Tailwind CSS で爆速開発
        </h1>
        <p class="text-xl mb-8">
          ユーティリティファーストで、自由自在にデザインを実現
        </p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          今すぐ始める
        </button>
      </div>
    </section>

    <!-- 特徴セクション -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">3つの特徴</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 特徴1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="text-2xl font-bold mb-4">超高速</h3>
            <p class="text-gray-600">
              ユーティリティクラスを組み合わせるだけで、高速に開発できます。
            </p>
          </div>

          <!-- 特徴2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div class="text-5xl mb-4">🎨</div>
            <h3 class="text-2xl font-bold mb-4">完全カスタマイズ</h3>
            <p class="text-gray-600">
              独自のデザインを自由に実現できます。制限はありません。
            </p>
          </div>

          <!-- 特徴3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div class="text-5xl mb-4">📱</div>
            <h3 class="text-2xl font-bold mb-4">レスポンシブ</h3>
            <p class="text-gray-600">
              モバイルファースト設計で、全てのデバイスに対応します。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="bg-blue-600 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-4">今すぐ始めよう！</h2>
        <p class="text-xl mb-8">無料で、今すぐ使えます</p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          ドキュメントを見る
        </button>
      </div>
    </section>

    <!-- フッター -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2025 Tailwind CSS 入門. All rights reserved.</p>
      </div>
    </footer>
  </body>
</html>
```

**使用しているクラス**：

- `container mx-auto`：中央寄せコンテナ
- `bg-gradient-to-r from-blue-500 to-purple-600`：グラデーション背景
- `grid grid-cols-1 md:grid-cols-3`：レスポンシブグリッド
- `hover:shadow-2xl transition`：ホバー時に影を強調
- `space-x-6`：横方向の余白を自動調整

**たった HTML だけで、プロ級のランディングページが完成！** 🎉

---

## バイブコーディング実践 🤖：AI と一緒に Tailwind CSS を使おう！

### AI への良い指示の例

#### 例 1: カードレイアウト

✅ **良い指示**：

```text
Tailwind CSSを使って、3カラムのカードレイアウトを作ってください。

【仕様】
- レスポンシブ対応（スマホ:1列、タブレット:2列、PC:3列）
- 各カードに画像、タイトル、説明文、ボタン
- カードにホバー時に影を強調（hover:shadow-2xl）
- gap-6でカード間の余白
- Play CDN使用
```

❌ **悪い指示**：

```text
カードを3つ並べて
```

---

#### 例 2: ヘッダーメニュー

✅ **良い指示**：

```text
Tailwind CSSを使って、レスポンシブなヘッダーを作ってください。

【仕様】
- 白い背景、影付き
- 左側にロゴ（text-2xl font-bold text-blue-600）
- 中央にメニュー（Home, About, Services, Contact）
- 右側にボタン（bg-blue-600 text-white）
- メニューはmd以上で表示、スマホでは非表示
- ホバー時にリンクの色が変わる
```

---

### 生成されたコードの読み方：チェックリスト

#### ✅ チェックリスト 1: Play CDN の読み込み

- [ ] `<script src="https://cdn.tailwindcss.com"></script>` が読み込まれているか
- [ ] `<head>` 内に配置されているか
- [ ] `viewport` メタタグがあるか

```html
<!-- ✅ 正しい例 -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

---

#### ✅ チェックリスト 2: レスポンシブクラス

- [ ] モバイルファーストになっているか（デフォルト = スマホ）
- [ ] `md:`、`lg:` プレフィックスが適切に使われているか

```html
<!-- ✅ 正しい例 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- スマホ:1列、タブレット:2列、PC:3列 -->
</div>
```

---

#### ✅ チェックリスト 3: ユーティリティクラスの組み合わせ

- [ ] クラスが多すぎず、読みやすいか
- [ ] 同じ効果を持つクラスが重複していないか

```html
<!-- ✅ 良い例 -->
<button class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
  ボタン
</button>

<!-- ❌ 冗長な例（bg-blueが重複） -->
<button class="bg-blue-500 bg-blue-600 text-white px-6 py-3 rounded">
  ボタン
</button>
```

---

### よくある問題と修正方法

#### 問題 1: スタイルが適用されない

**原因**：Tailwind CDN が読み込まれていない

```html
<!-- ❌ 問題のあるコード -->
<head>
  <!-- CDNがない -->
</head>

<!-- ✅ 修正後 -->
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

---

#### 問題 2: レスポンシブが効かない

**原因**：`viewport` メタタグがない

```html
<!-- ❌ 問題のあるコード -->
<head>
  <meta charset="UTF-8" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<!-- ✅ 修正後 -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

---

#### 問題 3: ホバー効果が滑らかでない

**原因**：`transition` クラスがない

```html
<!-- ❌ ホバー効果が急に変わる -->
<button class="bg-blue-500 hover:bg-blue-600">
  ボタン
</button>

<!-- ✅ 滑らかなアニメーション -->
<button class="bg-blue-500 hover:bg-blue-600 transition">
  ボタン
</button>
```

---

## まとめ 📝

このレッスンでは、**Tailwind CSS の基礎**を学んだよ！

### 学んだこと

✅ **Tailwind CSS とは**

- ユーティリティファーストのフレームワーク
- Bootstrap との違い
- どちらを使うべきか

✅ **導入方法**

- Play CDN で簡単導入
- `<script>` タグ 1 行だけ

✅ **ユーティリティクラス**

- スペーシング（m-、p-）
- カラー（bg-、text-、border-）
- テキスト（text-、font-）
- 幅・高さ（w-、h-）
- ボーダーと角丸（border、rounded、shadow）

✅ **レスポンシブデザイン**

- モバイルファースト
- `sm:`、`md:`、`lg:` プレフィックス

✅ **Flexbox と Grid**

- `flex` と `justify-`、`items-`
- `grid` と `grid-cols-`

✅ **疑似クラス**

- `hover:`、`focus:`、`active:`
- `transition` で滑らかなアニメーション

### 次のステップ 🚀

Tailwind CSS の基礎ができたら、次は **Lesson 4: Tailwind CSS 実践**で、もっと高度なテクニックを学ぼう！

- カスタムコンポーネントの作成
- ダークモード対応
- アニメーション
- 実践的なプロジェクト

---

## 演習問題 🎯

理解を深めるために、実際に手を動かして練習しよう！

👉 [演習問題はこちら](./exercises/README.md)

- **基礎編**（3問）：ユーティリティクラスの基本
- **応用編**（3問）：レスポンシブとコンポーネント
- **チャレンジ編**（1問）：ランディングページの作成

**頑張って！** 💪
