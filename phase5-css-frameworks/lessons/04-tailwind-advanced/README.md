# Lesson 4: Tailwind CSS 実践テクニック 🚀

前回のレッスンで Tailwind CSS の基礎をマスターしたね！このレッスンでは、**実践的なテクニック**と**プロレベルのカスタマイズ方法**を学んでいこう。

このレッスンを終えると、Tailwind CSS を使って**本格的なプロジェクト**を作れるようになるよ！

---

## 📚 このレッスンで学ぶこと

- ✅ Tailwind CSS のカスタマイズ設定（tailwind.config.js）
- ✅ コンポーネントの再利用テクニック（@apply）
- ✅ ダークモードの実装
- ✅ アニメーション＆トランジションの活用
- ✅ 便利なプラグインの紹介
- ✅ 実践的なテクニック（group、peer、arbitrary values）
- ✅ パフォーマンス最適化
- ✅ 本格的なプロジェクトの構築

---

## 1. Tailwind CSS のカスタマイズ設定 ⚙️

### tailwind.config.js とは？

Tailwind CSS は、カラー、フォント、スペーシング、ブレークポイントなどを**自分好みにカスタマイズ**できるよ！

でも、カスタマイズ方法は**CDN 版**と**ビルド版**で全然違う。まずは、この2つの違いを理解しよう！

---

### 🎯 CDN版 vs ビルド版：どう違うの?

| 項目 | CDN版 | ビルド版 |
|------|-------|---------|
| **読み込み方法** | `<script src="https://cdn.tailwindcss.com">` | npm install + ビルドツール |
| **カスタマイズ方法** | HTMLに`<script>`で直接記述 | `tailwind.config.js`ファイル |
| **ビルド必要?** | 不要 | 必要 |
| **本番環境で使う?** | ❌ 推奨しない（プロトタイプのみ） | ✅ 推奨 |
| **ファイルサイズ** | 大きい（全クラスを読み込む） | 小さい（使用したクラスのみ） |
| **学習のしやすさ** | ⭐⭐⭐ 超簡単！すぐ試せる | ⭐⭐ セットアップが必要 |

**初めて学ぶ時は CDN 版で OK！** 慣れてきたらビルド版に移行しよう。

---

## 1-A. CDN版でのカスタマイズ方法 🚀

CDN 版では、`tailwind.config.js` ファイルは**使えない**んだ。代わりに、**HTML 内に `<script>` タグで設定を書く**よ！

### ステップ1：CDN を読み込む

まず、Tailwind CSS の CDN を読み込む：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind カスタマイズ</title>

  <!-- 1. CDN を読み込む -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- ここにコンテンツ -->
</body>
</html>
```

---

### ステップ2：カスタム設定を追加

CDN の**すぐ後に**、カスタム設定を `<script>` タグで書く：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind カスタマイズ</title>

  <!-- 1. CDN を読み込む -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- 2. すぐ後にカスタム設定を追加 -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          // ここにカスタマイズを追加
          colors: {
            // ブランドカラーを追加
            brand: {
              50: '#e6f7ff',
              100: '#bae7ff',
              200: '#91d5ff',
              300: '#69c0ff',
              400: '#40a9ff',
              500: '#1890ff',  // メインカラー
              600: '#096dd9',
              700: '#0050b3',
              800: '#003a8c',
              900: '#002766',
            },
            // シンプルに1色だけ追加
            primary: '#1890ff',
            secondary: '#52c41a',
            danger: '#ff4d4f',
          },
        },
      },
    }
  </script>
</head>
<body class="p-8">
  <!-- カスタムカラーが使える！ -->
  <button class="bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 transition">
    ブランドカラーのボタン
  </button>

  <div class="bg-primary text-white p-4 rounded mt-4">
    プライマリカラー
  </div>

  <button class="bg-danger text-white px-6 py-3 rounded-lg mt-4">
    危険ボタン
  </button>
</body>
</html>
```

---

### CDN版のポイント ⚡

1. **CDN の直後に書く**：`<script src="https://cdn.tailwindcss.com"></script>` のすぐ後に設定を書く
2. **`tailwind.config`という変数に代入**：`tailwind.config = { ... }` の形式
3. **構文は同じ**：ビルド版の `tailwind.config.js` と同じ構文が使える

---

### CDN版のメリット・デメリット

**✅ メリット**

- セットアップ不要！HTML 1 つで完結
- 初心者でもすぐ試せる
- プロトタイプやデモに最適

**❌ デメリット**

- ファイルサイズが大きい（全クラスを読み込む）
- 本番環境では推奨されない
- ビルドプロセスがないので、一部の機能が使えない（`@apply` など）

---

## 1-B. ビルド版でのカスタマイズ方法 🛠️

本格的なプロジェクトでは、**ビルド版**を使おう！ファイルサイズが小さく、高速で、プロフェッショナルな開発ができる。

### ステップ1：Tailwind CSS をインストール

まず、npm で Tailwind CSS をインストール：

```bash
npm install -D tailwindcss
npx tailwindcss init
```

これで、`tailwind.config.js` ファイルが作成される！

---

### ステップ2：tailwind.config.js を編集

作成された `tailwind.config.js` を編集して、カスタマイズを追加：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',  // スキャン対象のファイルを指定
  ],
  theme: {
    extend: {
      // ここにカスタマイズを追加
      colors: {
        // ブランドカラーを追加
        brand: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',  // メインカラー
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        // シンプルに1色だけ追加
        primary: '#1890ff',
        secondary: '#52c41a',
        danger: '#ff4d4f',
      },
    },
  },
  plugins: [],
}
```

---

### ステップ3：CSS ファイルを作成

`src/input.css` ファイルを作成して、Tailwind のディレクティブを追加：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### ステップ4：ビルドコマンドを実行

Tailwind CSS をビルド：

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

これで、`dist/output.css` が生成される！

---

### ステップ5：HTML で読み込む

生成された CSS を HTML で読み込む：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind カスタマイズ</title>

  <!-- ビルドされた CSS を読み込む -->
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="p-8">
  <!-- カスタムカラーが使える！ -->
  <button class="bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 transition">
    ブランドカラーのボタン
  </button>

  <div class="bg-primary text-white p-4 rounded mt-4">
    プライマリカラー
  </div>
</body>
</html>
```

---

### ビルド版のポイント ⚡

1. **`content` セクションが重要**：スキャン対象のファイルパスを正しく指定する
2. **`theme.extend` を使う**：デフォルトカラーを残しながらカスタマイズする
3. **ビルドが必要**：設定を変更したら、ビルドコマンドを実行する（`--watch` で自動化できる）

---

### ビルド版のメリット・デメリット

**✅ メリット**

- ファイルサイズが超小さい（使用したクラスのみ）
- パフォーマンスが高い
- `@apply` など、全機能が使える
- 本番環境で推奨される

**❌ デメリット**

- セットアップが必要
- ビルドプロセスが必要
- 初心者には少しハードルが高い

---

### 📊 どちらを選ぶ？

| 用途 | おすすめ |
|------|---------|
| **学習・練習** | CDN 版 |
| **プロトタイプ・デモ** | CDN 版 |
| **本番環境** | ビルド版 |
| **チーム開発** | ビルド版 |
| **高速なサイト** | ビルド版 |

**まずは CDN 版で学んで、慣れたらビルド版に移行しよう！**

---

### カスタムフォントの追加

Google Fonts などのカスタムフォントを追加しよう！

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // 日本語フォント
        ja: ['"Noto Sans JP"', 'sans-serif'],
        // 英語フォント
        en: ['"Roboto"', 'sans-serif'],
        // コード用フォント
        code: ['"Fira Code"', 'monospace'],
      },
    },
  },
}
```

HTML の head に Google Fonts を読み込む：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

使い方：

```html
<p class="font-ja">これは日本語フォントです。</p>
<p class="font-en">This is English font.</p>
<code class="font-code">const hello = 'world';</code>
```

---

### カスタムスペーシングの追加

デフォルトにない間隔を追加したい時：

```javascript
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',    // 288px
        '84': '21rem',    // 336px
        '96': '24rem',    // 384px
        '128': '32rem',   // 512px
      },
    },
  },
}
```

使い方：

```html
<div class="mt-72 mb-128">
  カスタムスペーシング
</div>
```

---

### カスタムブレークポイントの追加

デフォルトのブレークポイントに加えて、独自のブレークポイントを追加できる：

```javascript
module.exports = {
  theme: {
    screens: {
      'xs': '480px',     // 追加
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',   // 追加
    },
  },
}
```

使い方：

```html
<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4">
  <!-- 480px以上で2列、768px以上で3列、1920px以上で4列 -->
  <div class="bg-blue-100 h-32">1</div>
  <div class="bg-blue-200 h-32">2</div>
  <div class="bg-blue-300 h-32">3</div>
  <div class="bg-blue-400 h-32">4</div>
  <div class="bg-blue-500 h-32">5</div>
  <div class="bg-blue-600 h-32">6</div>
</div>
```

---

## 2. コンポーネントの再利用テクニック ♻️

### @apply ディレクティブ

> ⚠️ **重要**：`@apply` は**ビルド版のみ**で使える機能だよ！CDN 版では使えないので注意してね。CDN 版で再利用したい場合は、JavaScript でクラスをまとめるか、ビルド版に移行しよう。

同じユーティリティクラスの組み合わせを何度も使う場合、`@apply` で再利用可能なクラスを作れるよ！

**CSS ファイル**（例：`styles.css`）**※ ビルド版のみ**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* カスタムコンポーネント */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold;
    @apply hover:bg-blue-600 transition;
  }

  .btn-secondary {
    @apply bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold;
    @apply hover:bg-gray-600 transition;
  }

  .card {
    @apply bg-white shadow-lg rounded-lg p-6;
  }

  .input-field {
    @apply border border-gray-300 rounded-lg px-4 py-2;
    @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
}
```

**HTML での使い方**

```html
<!-- シンプルになった！ -->
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>

<div class="card">
  <h3 class="text-xl font-bold mb-2">カードタイトル</h3>
  <p>カードの内容</p>
</div>

<input type="text" class="input-field" placeholder="メールアドレス" />
```

---

### ユーティリティクラス vs コンポーネントクラス

**いつユーティリティクラスを使う？**

- 1 回だけ使うスタイル
- 微調整が必要な場所
- レイアウトやスペーシング

**いつコンポーネントクラス（@apply）を使う？**

- プロジェクト全体で何度も使うスタイル
- ボタン、カード、入力フィールドなど
- チーム全体で統一したいデザイン

**良いバランスの例**

```html
<!-- ボタンは共通クラス、レイアウトはユーティリティ -->
<div class="flex gap-4 mt-8">
  <button class="btn-primary">保存</button>
  <button class="btn-secondary">キャンセル</button>
</div>
```

---

### CDN版での再利用テクニック（@apply の代替案）

CDN版では `@apply` が使えないけど、**JavaScript で再利用可能なクラスセット**を作ることができるよ！

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CDN版での再利用</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-8">
  <!-- ボタンを配置 -->
  <div id="button-container"></div>

  <script>
    // 再利用可能なクラスセットを定義
    const buttonStyles = {
      primary: 'bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition',
      secondary: 'bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition',
      danger: 'bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition',
    };

    // ボタンを作成する関数
    function createButton(text, type = 'primary') {
      const button = document.createElement('button');
      button.textContent = text;
      button.className = buttonStyles[type];
      return button;
    }

    // ボタンを追加
    const container = document.getElementById('button-container');
    container.appendChild(createButton('保存', 'primary'));
    container.appendChild(createButton('キャンセル', 'secondary'));
    container.appendChild(createButton('削除', 'danger'));
  </script>
</body>
</html>
```

**または、もっとシンプルに HTML テンプレートとして再利用**：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-8">
  <!-- 何度も使うクラスの組み合わせを、そのまま書く -->
  <button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
    保存
  </button>

  <button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
    送信
  </button>

  <button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
    確認
  </button>
</body>
</html>
```

**CDN版での再利用のポイント**：

- ✅ JavaScript で共通クラスセットを定義
- ✅ コンポーネントフレームワーク（React、Vue など）を使う場合は、コンポーネントとして定義
- ✅ 小規模なプロジェクトなら、同じクラスを繰り返し書いても OK
- ❌ 大規模プロジェクトや本格的な開発では、ビルド版への移行を検討しよう

---

## 3. ダークモードの実装 🌙

Tailwind CSS には、**ダークモード**を簡単に実装できる機能が組み込まれているよ！

### ダークモードの有効化

`tailwind.config.js` でダークモードを有効にする：

```javascript
module.exports = {
  darkMode: 'class', // 'class' または 'media'
  // ...
}
```

- **`'class'`**：手動で切り替え（`<html class="dark">` を追加/削除）
- **`'media'`**：OS の設定に従う（自動）

---

### dark: プレフィックスの使い方

`dark:` を使って、ダークモード時のスタイルを指定できる：

```html
<!-- ライトモード：白背景＋黒文字、ダークモード：黒背景＋白文字 -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
  <h1 class="text-3xl font-bold mb-4">ダークモード対応</h1>
  <p class="text-gray-600 dark:text-gray-400">
    ダークモードに自動的に対応したコンテンツです。
  </p>
  <button class="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-lg">
    ボタン
  </button>
</div>
```

---

### 手動でダークモードを切り替える

JavaScript でダークモードを切り替える例：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ダークモード切り替え</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">ダークモード対応アプリ</h1>
      <button
        id="theme-toggle"
        class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg"
      >
        🌙 ダークモード切り替え
      </button>
    </div>

    <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">カードタイトル</h2>
      <p class="text-gray-600 dark:text-gray-400">
        ダークモードに対応したカードコンテンツです。
      </p>
    </div>
  </div>

  <script>
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      // ローカルストレージに保存
      if (html.classList.contains('dark')) {
        localStorage.theme = 'dark';
        toggle.textContent = '☀️ ライトモード切り替え';
      } else {
        localStorage.theme = 'light';
        toggle.textContent = '🌙 ダークモード切り替え';
      }
    });

    // ページ読み込み時にテーマを復元
    if (localStorage.theme === 'dark') {
      html.classList.add('dark');
      toggle.textContent = '☀️ ライトモード切り替え';
    }
  </script>
</body>
</html>
```

---

### ダークモードのカラー設計

ダークモードでは、色の選び方が重要！

| 要素 | ライトモード | ダークモード |
|------|-------------|--------------|
| 背景 | `bg-white` | `dark:bg-gray-900` |
| 2nd 背景 | `bg-gray-100` | `dark:bg-gray-800` |
| テキスト | `text-gray-900` | `dark:text-white` |
| 2nd テキスト | `text-gray-600` | `dark:text-gray-400` |
| ボーダー | `border-gray-300` | `dark:border-gray-700` |

**例**

```html
<div class="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
  <h3 class="text-gray-900 dark:text-white font-bold mb-2">タイトル</h3>
  <p class="text-gray-600 dark:text-gray-400">説明文</p>
</div>
```

---

## 4. アニメーション＆トランジション ✨

### transition ユーティリティ

スムーズな変化を実現する `transition` クラス：

```html
<!-- 全てのプロパティに transition -->
<button class="bg-blue-300 hover:bg-blue-600 transition">
  Hover してみて
</button>

<!-- 特定のプロパティだけ transition -->
<button class="bg-blue-300 hover:bg-blue-600 transition-colors">
  色だけ変化
</button>

<button class="transform hover:scale-110 transition-transform">
  拡大するボタン
</button>

<!-- duration と ease のカスタマイズ -->
<button class="bg-blue-300 hover:bg-blue-600 transition duration-500 ease-in-out">
  ゆっくり変化
</button>
```

**transition の種類**

| クラス | 対象 |
|--------|------|
| `transition` | 全てのプロパティ |
| `transition-colors` | 色だけ |
| `transition-opacity` | 透明度だけ |
| `transition-shadow` | 影だけ |
| `transition-transform` | 変形だけ |

---

### transform と scale/rotate/translate

要素を変形させる：

```html
<!-- 拡大 -->
<div class="transform scale-110 hover:scale-125 transition">
  Hover で拡大
</div>

<!-- 回転 -->
<div class="transform rotate-45 hover:rotate-90 transition">
  回転する
</div>

<!-- 移動 -->
<div class="transform translate-x-4 hover:translate-x-8 transition">
  右に移動
</div>

<!-- 組み合わせ -->
<div class="transform hover:scale-110 hover:-translate-y-2 hover:rotate-3 transition">
  複合的な変化
</div>
```

---

### animate- クラス（組み込みアニメーション）

Tailwind CSS には、いくつかの**組み込みアニメーション**があるよ！

```html
<!-- スピン（ローディングアイコンに最適） -->
<div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>

<!-- パルス（通知など） -->
<div class="animate-pulse bg-blue-500 w-12 h-12 rounded-full"></div>

<!-- バウンス -->
<div class="animate-bounce bg-red-500 w-12 h-12 rounded-full"></div>

<!-- ピン（ベル通知など） -->
<div class="animate-ping bg-green-500 w-4 h-4 rounded-full"></div>
```

**実用例：ローディングスピナー**

```html
<div class="flex items-center justify-center min-h-screen">
  <div class="relative">
    <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
    <p class="text-center mt-4 text-gray-600">読み込み中...</p>
  </div>
</div>
```

---

### カスタムアニメーションの追加

`tailwind.config.js` で独自のアニメーションを追加できる：

```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
}
```

使い方：

```html
<div class="animate-fade-in">
  フェードインするコンテンツ
</div>

<div class="animate-slide-in">
  スライドインするコンテンツ
</div>
```

---

## 5. 実践的なテクニック 🛠️

### group と group-hover

親要素に `group` を付けると、子要素で `group-hover:` が使える！

```html
<div class="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
  <img
    src="https://placehold.jp/400x300.png"
    alt="画像"
    class="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition"
  />
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
    カードタイトル
  </h3>
  <p class="text-gray-600">
    カード全体を hover すると、画像とタイトルが変化します。
  </p>
  <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded group-hover:bg-blue-600 transition">
    詳しく見る
  </button>
</div>
```

**ポイント**：親に `group`、子に `group-hover:` を付けるだけ！

---

### peer と peer-checked

兄弟要素の状態に応じてスタイルを変える：

```html
<!-- チェックボックスの状態に応じて、ラベルの色を変える -->
<div class="flex items-center space-x-3">
  <input
    type="checkbox"
    id="task1"
    class="peer w-5 h-5 text-blue-500 rounded"
  />
  <label
    for="task1"
    class="text-gray-700 peer-checked:text-blue-500 peer-checked:line-through"
  >
    タスク 1
  </label>
</div>

<!-- ラジオボタンで色を変える -->
<div class="space-y-4">
  <label class="flex items-center space-x-3 cursor-pointer">
    <input type="radio" name="color" value="blue" class="peer sr-only" />
    <div class="w-6 h-6 bg-blue-500 rounded-full peer-checked:ring-4 peer-checked:ring-blue-300"></div>
    <span class="peer-checked:font-bold">青</span>
  </label>

  <label class="flex items-center space-x-3 cursor-pointer">
    <input type="radio" name="color" value="red" class="peer sr-only" />
    <div class="w-6 h-6 bg-red-500 rounded-full peer-checked:ring-4 peer-checked:ring-red-300"></div>
    <span class="peer-checked:font-bold">赤</span>
  </label>
</div>
```

**ポイント**：input に `peer`、兄弟要素に `peer-checked:` を付ける！

---

### arbitrary values（任意の値）

Tailwind にない値を使いたい時は、`[]` で任意の値を指定できる：

```html
<!-- 特殊なサイズ -->
<div class="w-[137px] h-[42px] bg-blue-500"></div>

<!-- 特殊な色 -->
<div class="bg-[#1da1f2] text-white p-4">
  Twitter ブルー
</div>

<!-- 特殊なグリッド -->
<div class="grid grid-cols-[200px_1fr_200px] gap-4">
  <div>サイドバー</div>
  <div>メインコンテンツ</div>
  <div>サイドバー</div>
</div>

<!-- 特殊なマージン -->
<div class="mt-[13px] mb-[7.5rem]">
  任意のマージン
</div>
```

**ポイント**：デザインカンプ通りに実装したい時に便利！

---

### important modifier（!強制）

他の CSS を上書きしたい時に `!` を使う：

```html
<!-- 他のスタイルより優先される -->
<div class="text-blue-500 !text-red-500">
  赤色が優先される
</div>

<button class="bg-gray-500 hover:!bg-red-600">
  hover 時に強制的に赤
</button>
```

**注意**：多用しすぎると保守性が下がるので、最小限にとどめよう。

---

## 6. 便利なプラグイン 🧩

Tailwind CSS には、公式プラグインや コミュニティプラグインがたくさんあるよ！

### @tailwindcss/forms

フォーム要素を美しくスタイリングするプラグイン。

**インストール**

```bash
npm install @tailwindcss/forms
```

**tailwind.config.js**

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

**効果**

自動的に、input、textarea、select、checkbox、radio がきれいにスタイリングされる！

```html
<!-- プラグインなし：デフォルトの見た目 -->
<!-- プラグインあり：モダンでクリーンな見た目 -->
<input type="text" placeholder="メールアドレス" class="rounded-lg" />
<input type="checkbox" /> チェックボックス
```

---

### @tailwindcss/typography

記事コンテンツを美しくスタイリングする `prose` クラスを追加。

**インストール**

```bash
npm install @tailwindcss/typography
```

**tailwind.config.js**

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

**使い方**

```html
<article class="prose lg:prose-xl">
  <h1>記事のタイトル</h1>
  <p>
    この <code>prose</code> クラスを付けるだけで、記事コンテンツが美しくスタイリングされます。
  </p>
  <ul>
    <li>リスト項目 1</li>
    <li>リスト項目 2</li>
  </ul>
  <blockquote>
    引用も自動的にスタイリング
  </blockquote>
</article>
```

**ダークモード対応**

```html
<article class="prose dark:prose-invert">
  <!-- ダークモードでも読みやすい -->
</article>
```

---

### その他の便利なプラグイン

| プラグイン | 説明 |
|-----------|------|
| `@tailwindcss/aspect-ratio` | アスペクト比を簡単に設定 |
| `@tailwindcss/line-clamp` | テキストの行数制限 |
| `daisyui` | コンポーネントライブラリ（ボタン、カード、Modal など） |
| `tailwindcss-animate` | より多くのアニメーション |

---

## 7. パフォーマンス最適化 ⚡

### 本番環境での最適化

Tailwind CSS は、**使っていないクラスを自動的に削除**してくれる！

`tailwind.config.js` の `content` セクションで、スキャン対象のファイルを指定：

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // src 配下の全てのファイル
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  // ...
}
```

これで、本番ビルド時に**使っていないクラスが削除**され、CSS ファイルサイズが劇的に小さくなる！

---

### JIT モード（Just-In-Time）

Tailwind CSS v3 以降は、デフォルトで **JIT モード**が有効になっているよ。

**JIT モードのメリット**：

- ⚡ 開発時のビルドが超高速
- 🎨 任意の値（`w-[137px]` など）が使える
- 📦 ファイルサイズが小さい

JIT モードは自動的に有効なので、特に設定は不要！

---

## 8. バイブコーディング実践：Tailwind CSS カスタマイズ編 🤖💻

ここまで学んだ実践テクニックを、**AI と一緒に使う**方法を見ていこう！

### AI への指示例：カスタマイズ設定（CDN版）

まずは、**CDN 版**でのカスタマイズ指示例から！

**✅ 良い指示の例（CDN版）**

```text
Tailwind CSS の CDN 版を使った HTML ファイルを作成してください。

要件：
- CDN 版の Tailwind CSS を読み込む
- カスタム設定で以下を追加：
  - ブランドカラー「brand」（メインカラー: #1890ff、50-900の階調）
  - プライマリカラー「primary」（#1890ff）
  - セカンダリカラー「secondary」（#52c41a）
- ダークモードを「class」方式で有効化
- カスタムカラーを使ったボタンを3つ表示
```

**❌ 曖昧な指示の例**

```text
Tailwind の CDN 版を使って、カスタムカラーを追加して。
```

**AI が生成したコードのチェックポイント（CDN版）**：

- ✅ `<script src="https://cdn.tailwindcss.com"></script>` が含まれているか
- ✅ CDN の直後に `<script>tailwind.config = {...}</script>` があるか
- ✅ `theme.extend` でカスタマイズしているか（デフォルトを上書きしていないか）
- ✅ カスタムカラーが実際に HTML で使われているか
- ✅ ブラウザで開いてカスタムカラーが正しく表示されるか

---

### AI への指示例：カスタマイズ設定（ビルド版）

次に、**ビルド版**でのカスタマイズ指示例！

**✅ 良い指示の例（ビルド版）**

```text
Tailwind CSS の設定ファイル（tailwind.config.js）を作成してください。

要件：
- ブランドカラー「brand」を追加（メインカラー: #1890ff、50-900の階調）
- カスタムフォント「Noto Sans JP」を追加（font-ja）
- カスタムスペーシング：72（18rem）、128（32rem）
- ダークモードを「class」方式で有効化
- content セクションで ./src/**/*.{html,js} をスキャン対象に
```

**❌ 曖昧な指示の例**

```text
Tailwind の設定ファイルを作って。色とかフォントとか追加して。
```

**AI が生成したコードのチェックポイント（ビルド版）**：

- ✅ `module.exports` の形式になっているか
- ✅ `theme.extend` でカスタマイズしているか（デフォルトを上書きしていないか）
- ✅ `content` セクションで適切なファイルパスが指定されているか
- ✅ `darkMode: 'class'` が設定されているか
- ✅ カスタムカラーの階調（50-900）が全て含まれているか

---

### AI への指示例：ダークモード対応

**良い指示の例**

```text
この HTML をダークモード対応にしてください。

- 背景：白 → 濃いグレー（gray-900）
- テキスト：黒 → 白
- セカンダリテキスト：gray-600 → gray-400
- カードの背景：gray-100 → gray-800
- ボーダー：gray-300 → gray-700

dark: プレフィックスを使って、全ての要素に対応してください。
```

**曖昧な指示の例**

```text
これをダークモードにして。
```

**AI が生成したコードのチェックポイント**：

- ✅ すべての背景色に `dark:bg-*` が付いているか
- ✅ テキスト色に `dark:text-*` が付いているか
- ✅ コントラストが十分確保されているか（読みやすいか）
- ✅ `<html>` に `class="dark"` を付けたときに正しく表示されるか

---

### AI への指示例：アニメーション

**良い指示の例**

```text
カードコンポーネントに、以下のアニメーションを追加してください：

1. hover 時にカード全体が少し浮く（shadow を強く、上に2px移動）
2. hover 時に画像が 1.05 倍に拡大
3. hover 時にタイトルが青色に変化
4. 全てのアニメーションを 300ms で滑らかに

group と group-hover を使って実装してください。
```

**曖昧な指示の例**

```text
カードをかっこよくして。
```

**AI が生成したコードのチェックポイント**：

- ✅ 親要素に `group` が付いているか
- ✅ 子要素に `group-hover:` が付いているか
- ✅ `transition` が付いているか
- ✅ 実際に hover してスムーズに動作するか

---

### AI への指示例：カスタムコンポーネント（@apply）

**良い指示の例**

```text
以下のボタンスタイルを、@apply を使って再利用可能なクラスにしてください：

- .btn-primary: 青背景、白文字、パディング px-6 py-3、角丸 lg、hover で濃い青
- .btn-secondary: グレー背景、白文字、同じパディング、hover で濃いグレー
- .btn-outline: 透明背景、青枠線、青文字、hover で青背景＋白文字

全てのボタンに transition を付けてください。
```

**AI が生成したコードのチェックポイント**：

- ✅ `@layer components` で囲まれているか
- ✅ `@apply` が正しく使われているか
- ✅ hover 効果が含まれているか
- ✅ transition が含まれているか

---

### よくある問題と修正方法

#### 問題 1：CDN版でカスタム設定が反映されない 🆘

**原因**：

- カスタム設定のスクリプトが CDN の前に書かれている
- `tailwind.config` ではなく別の変数名を使っている
- 構文エラーがある

**修正方法**：

1. **CDN を先に読み込む**：必ず `<script src="https://cdn.tailwindcss.com"></script>` を先に書く
2. **直後に設定を書く**：CDN の直後に `<script>tailwind.config = {...}</script>` を書く
3. **ブラウザのコンソールをチェック**：エラーが出ていないか確認する

```html
<!-- ❌ 悪い例：設定が先 -->
<script>
  tailwind.config = { ... }
</script>
<script src="https://cdn.tailwindcss.com"></script>

<!-- ✅ 良い例：CDN が先 -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = { ... }
</script>
```

---

#### 問題 2：ビルド版で tailwind.config.js が反映されない 🆘

**原因**：

- ファイルパスが間違っている
- ビルドツールを再起動していない

**修正方法**：

1. `content` セクションのファイルパスを確認
2. 開発サーバーを再起動（`--watch` モードで実行し直す）
3. ブラウザのキャッシュをクリア

---

#### 問題 3：ダークモードが動かない 🆘

**原因**：

- `darkMode: 'class'` が設定されていない
- `<html class="dark">` が追加されていない

**修正方法**：

**CDN版の場合**：

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',  // ← これを追加
  }
</script>
```

**ビルド版の場合**：

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',  // ← これを追加
  // ...
}
```

**共通**：

- JavaScript で `document.documentElement.classList.add('dark')` を実行
- ブラウザの開発者ツールで `<html>` に `dark` クラスがあるか確認

---

#### 問題 4：CDN版で @apply が使えない 🆘

**原因**：

- CDN版には**ビルドプロセスがない**ため、`@apply` ディレクティブは使えない

**修正方法**：

CDN版で `@apply` を使いたい場合は、**ビルド版に移行**する必要があるよ！

**代替案（CDN版のまま使う）**：

- ユーティリティクラスを直接 HTML に書く
- JavaScript で動的にクラスを追加する
- インラインスタイルを使う（推奨しない）

---

#### 問題 5：カスタムカラーが効かない 🆘

**原因**：

- `theme.extend` ではなく `theme.colors` で上書きしている（デフォルトカラーが消える）

**修正方法**：

```javascript
// ❌ 悪い例：デフォルトカラーが消える
module.exports = {
  theme: {
    colors: {
      brand: '#1890ff',
    },
  },
}

// ✅ 良い例：デフォルトカラーを残す
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#1890ff',
      },
    },
  },
}
```

---

## 9. 実践プロジェクト例 🎨

### ダッシュボード UI

```html
<!DOCTYPE html>
<html lang="ja" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ダッシュボード</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- サイドバー -->
  <div class="flex min-h-screen">
    <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-blue-600">Dashboard</h1>
      </div>
      <nav class="px-4">
        <a href="#" class="flex items-center px-4 py-3 bg-blue-500 text-white rounded-lg mb-2">
          <span class="mr-3">📊</span> ダッシュボード
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition">
          <span class="mr-3">👥</span> ユーザー
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition">
          <span class="mr-3">⚙️</span> 設定
        </a>
      </nav>
    </aside>

    <!-- メインコンテンツ -->
    <main class="flex-1 p-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-2">ダッシュボード</h2>
        <p class="text-gray-600 dark:text-gray-400">ようこそ、管理画面へ</p>
      </div>

      <!-- 統計カード -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- カード1 -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-600 dark:text-gray-400">総ユーザー数</h3>
            <span class="text-3xl">👥</span>
          </div>
          <p class="text-4xl font-bold text-blue-600">1,234</p>
          <p class="text-green-500 text-sm mt-2">↑ 12% 先月比</p>
        </div>

        <!-- カード2 -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-600 dark:text-gray-400">売上</h3>
            <span class="text-3xl">💰</span>
          </div>
          <p class="text-4xl font-bold text-green-600">¥567,890</p>
          <p class="text-green-500 text-sm mt-2">↑ 8% 先月比</p>
        </div>

        <!-- カード3 -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-600 dark:text-gray-400">新規登録</h3>
            <span class="text-3xl">📈</span>
          </div>
          <p class="text-4xl font-bold text-purple-600">89</p>
          <p class="text-red-500 text-sm mt-2">↓ 3% 先月比</p>
        </div>
      </div>

      <!-- テーブル -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-4">最近のユーザー</h3>
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-3 px-4">名前</th>
              <th class="text-left py-3 px-4">メール</th>
              <th class="text-left py-3 px-4">ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="py-3 px-4">山田太郎</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-400">yamada@example.com</td>
              <td class="py-3 px-4">
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  アクティブ
                </span>
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="py-3 px-4">佐藤花子</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-400">sato@example.com</td>
              <td class="py-3 px-4">
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  保留
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## 10. まとめ 📝

このレッスンで学んだこと：

✅ **カスタマイズ設定**

- tailwind.config.js でカラー、フォント、スペーシングをカスタマイズ
- プロジェクトに合わせた独自のデザインシステムを作成

✅ **コンポーネントの再利用**

- @apply でよく使うスタイルを再利用可能に
- ユーティリティクラスとコンポーネントクラスのバランス

✅ **ダークモード**

- dark: プレフィックスで簡単に対応
- 手動切り替えと自動切り替えの実装

✅ **アニメーション**

- transition、transform、animate- クラスでリッチな UI
- カスタムアニメーションの追加方法

✅ **実践テクニック**

- group/group-hover、peer/peer-checked
- arbitrary values、important modifier

✅ **プラグイン**

- @tailwindcss/forms、@tailwindcss/typography などの便利なプラグイン

✅ **パフォーマンス最適化**

- 未使用クラスの自動削除
- JIT モードで高速開発

✅ **バイブコーディング**

- AI への効果的な指示の出し方
- 生成コードのチェックポイント

---

## 次のステップ 🚀

おめでとう！Tailwind CSS の実践テクニックをマスターしたね！

次は、**演習問題**で実際に手を動かして、学んだことを定着させよう！

- [演習問題はこちら](./exercises/README.md)
- [解答例はこちら](./exercises/solutions/README.md)

**Tailwind CSS を使えば、どんな UI でも自由自在！楽しんで学んでいこう！** 💪✨
