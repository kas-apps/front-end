# Lesson 4: Tailwind CSS 実践テクニック - 解答例と解説

各演習問題の解答例と、重要なポイントを解説します。

---

## 演習 4-1: カスタムカラーの設定と使用

**ファイル**：[04-01.html](./04-01.html)

### ポイント

✅ **Play CDN でのカスタム設定**
- `<script>` タグ内で `tailwind.config` を設定
- `theme.extend` でデフォルトを残したまま追加

✅ **カスタムカラーの使用**
- `bg-primary`、`bg-secondary`、`bg-danger` のように使える
- hover 時の色は `hover:brightness-110` で明るく

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#1890ff',
          secondary: '#52c41a',
          danger: '#ff4d4f',
        },
      },
    },
  }
</script>

<!-- ボタン -->
<button class="bg-primary text-white px-6 py-3 rounded-lg hover:brightness-110 transition">
  Primary Button
</button>
```

---

## 演習 4-2: ダークモード対応のカード

**ファイル**：[04-02.html](./04-02.html)

### ポイント

✅ **darkMode の設定**
- `darkMode: 'class'` で手動切り替え

✅ **dark: プレフィックス**
- `dark:bg-gray-800`、`dark:text-white` でダークモード時のスタイル

✅ **JavaScript での切り替え**
- `document.documentElement.classList.toggle('dark')`
- localStorage にテーマを保存

```html
<script>
  tailwind.config = {
    darkMode: 'class',
  }
</script>

<!-- カード -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
  <h3 class="text-xl font-bold mb-2">カードタイトル</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-4">説明文</p>
  <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
    ボタン
  </button>
</div>

<!-- JavaScript -->
<script>
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  });

  // ページ読み込み時にテーマを復元
  if (localStorage.theme === 'dark') {
    html.classList.add('dark');
  }
</script>
```

---

## 演習 4-3: アニメーションボタン

**ファイル**：[04-03.html](./04-03.html)

### ポイント

✅ **transform の組み合わせ**
- `scale-110`：拡大
- `-translate-y-2`：上に移動
- `rotate-3`：回転

✅ **shadow の変化**
- `shadow-lg hover:shadow-2xl`

✅ **transition-all**
- 全てのプロパティにアニメーションを適用

```html
<!-- 拡大ボタン -->
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform">
  拡大ボタン
</button>

<!-- 浮くボタン -->
<button class="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all">
  浮くボタン
</button>

<!-- 回転ボタン -->
<button class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:rotate-3 transition-transform">
  回転ボタン
</button>

<!-- 複合ボタン -->
<button class="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-all">
  複合ボタン
</button>
```

---

## 演習 4-4: group-hover を使ったギャラリー

**ファイル**：[04-04.html](./04-04.html)

### ポイント

✅ **group と group-hover**
- 親要素に `group`
- 子要素に `group-hover:scale-105`、`group-hover:text-blue-600` など

✅ **overflow-hidden**
- 画像が拡大してもカードからはみ出さないように

✅ **複数の要素を同時に変化**
- カード全体の hover で、画像、タイトル、ボタンが同時に変化

```html
<div class="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
  <!-- 画像 -->
  <div class="overflow-hidden rounded-lg mb-4">
    <img
      src="https://via.placeholder.com/400x300"
      alt="画像"
      class="w-full h-48 object-cover group-hover:scale-105 transition-transform"
    />
  </div>

  <!-- タイトル -->
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
    画像タイトル
  </h3>

  <!-- 説明文 -->
  <p class="text-gray-600 mb-4">説明文がここに入ります。</p>

  <!-- ボタン -->
  <button class="bg-blue-500 text-white px-4 py-2 rounded group-hover:bg-blue-600 transition-colors">
    詳しく見る
  </button>
</div>
```

---

## 演習 4-5: peer を使ったタブ切り替え

**ファイル**：[04-05.html](./04-05.html)

### ポイント

✅ **peer と peer-checked**
- input に `peer`
- label に `peer-checked:bg-blue-500`、`peer-checked:text-white` など

✅ **ラジオボタンの非表示**
- `sr-only`（スクリーンリーダーのみ）または `hidden`

✅ **コンテンツの表示/非表示**
- デフォルト：`hidden`
- 選択時：`peer-checked:block`

```html
<!-- タブ -->
<div class="flex border-b border-gray-300">
  <!-- タブ1 -->
  <input type="radio" name="tab" id="tab1" class="peer/tab1 sr-only" checked />
  <label
    for="tab1"
    class="px-6 py-3 cursor-pointer border-b-2 border-transparent peer-checked/tab1:border-blue-500 peer-checked/tab1:text-blue-600 peer-checked/tab1:font-bold transition"
  >
    概要
  </label>

  <!-- タブ2 -->
  <input type="radio" name="tab" id="tab2" class="peer/tab2 sr-only" />
  <label
    for="tab2"
    class="px-6 py-3 cursor-pointer border-b-2 border-transparent peer-checked/tab2:border-blue-500 peer-checked/tab2:text-blue-600 peer-checked/tab2:font-bold transition"
  >
    特徴
  </label>

  <!-- タブ3 -->
  <input type="radio" name="tab" id="tab3" class="peer/tab3 sr-only" />
  <label
    for="tab3"
    class="px-6 py-3 cursor-pointer border-b-2 border-transparent peer-checked/tab3:border-blue-500 peer-checked/tab3:text-blue-600 peer-checked/tab3:font-bold transition"
  >
    価格
  </label>
</div>

<!-- コンテンツ -->
<div class="p-6">
  <!-- コンテンツ1 -->
  <div class="hidden peer-checked/tab1:block">
    <h3 class="text-2xl font-bold mb-4">概要</h3>
    <p>概要のコンテンツがここに入ります。</p>
  </div>

  <!-- コンテンツ2 -->
  <div class="hidden peer-checked/tab2:block">
    <h3 class="text-2xl font-bold mb-4">特徴</h3>
    <p>特徴のコンテンツがここに入ります。</p>
  </div>

  <!-- コンテンツ3 -->
  <div class="hidden peer-checked/tab3:block">
    <h3 class="text-2xl font-bold mb-4">価格</h3>
    <p>価格のコンテンツがここに入ります。</p>
  </div>
</div>
```

**注意**：Tailwind CSS v3.4+ では、`peer/name` と `peer-checked/name` で複数の peer を区別できます。

---

## 演習 4-6: カスタムコンポーネントクラス

**ファイル**：[04-06.html](./04-06.html)

### ポイント

✅ **共通クラスのまとめ**
- `px-6 py-3 rounded-lg font-semibold transition` を全てのボタンに

✅ **3 つのボタンスタイル**
1. **Solid**：背景色あり、白文字
2. **Outline**：透明背景、枠線あり、hover で背景色
3. **Ghost**：透明背景、枠線なし、hover で薄い背景

```html
<!-- Solid ボタン -->
<button class="px-6 py-3 rounded-lg font-semibold transition bg-blue-500 text-white hover:bg-blue-600">
  Blue Solid
</button>

<button class="px-6 py-3 rounded-lg font-semibold transition bg-green-500 text-white hover:bg-green-600">
  Green Solid
</button>

<!-- Outline ボタン -->
<button class="px-6 py-3 rounded-lg font-semibold transition bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
  Blue Outline
</button>

<button class="px-6 py-3 rounded-lg font-semibold transition bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
  Green Outline
</button>

<!-- Ghost ボタン -->
<button class="px-6 py-3 rounded-lg font-semibold transition bg-transparent text-blue-500 hover:bg-blue-50">
  Blue Ghost
</button>

<button class="px-6 py-3 rounded-lg font-semibold transition bg-transparent text-green-500 hover:bg-green-50">
  Green Ghost
</button>
```

---

## 演習 4-7: ダッシュボードアプリ（総合課題）

**ファイル**：[04-07.html](./04-07.html)

### ポイント

✅ **全体構成**
1. カスタムカラー設定
2. ダークモード有効化
3. サイドバー（固定、w-64）
4. ヘッダー（sticky）
5. メインコンテンツ（統計カード、テーブル）
6. JavaScript でダークモード切り替え

✅ **サイドバー＋メインのレイアウト**
- `<div class="flex">` で親要素
- サイドバー：`<aside class="w-64 fixed h-screen">`
- メイン：`<main class="ml-64 flex-1">`

✅ **統計カード（group-hover）**
- 親に `group`
- hover で影、移動、アイコン拡大

✅ **ダークモード対応**
- 全ての要素に `dark:` プレフィックス
- コントラストを確保

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          brand: '#1890ff',
          success: '#52c41a',
          warning: '#faad14',
          danger: '#ff4d4f',
        },
      },
    },
  }
</script>

<body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
  <div class="flex">
    <!-- サイドバー -->
    <aside class="w-64 bg-white dark:bg-gray-800 h-screen fixed shadow-lg">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-brand">Dashboard</h1>
      </div>
      <nav class="px-4">
        <a href="#" class="flex items-center px-4 py-3 bg-brand text-white rounded-lg mb-2">
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
    <main class="ml-64 flex-1 p-8">
      <!-- ヘッダー -->
      <div class="sticky top-0 bg-gray-100 dark:bg-gray-900 pb-4 mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-3xl font-bold mb-2">ダッシュボード</h2>
          <p class="text-gray-600 dark:text-gray-400">ようこそ、管理画面へ</p>
        </div>
        <button
          id="theme-toggle"
          class="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
        >
          🌙 ダークモード切り替え
        </button>
      </div>

      <!-- 統計カード -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- カード1 -->
        <div class="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-600 dark:text-gray-400">総ユーザー数</h3>
            <span class="text-3xl group-hover:scale-110 transition-transform">👥</span>
          </div>
          <p class="text-4xl font-bold text-brand">1,234</p>
          <p class="text-success text-sm mt-2">↑ 12% 先月比</p>
        </div>

        <!-- カード2〜4 も同様 -->
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
            <!-- 他の行も同様 -->
          </tbody>
        </table>
      </div>
    </main>
  </div>

  <!-- JavaScript -->
  <script>
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
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
```

---

## 🎯 重要な共通ポイント

### 1. Play CDN でのカスタム設定

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#1890ff',
        },
      },
    },
  }
</script>
```

**重要**：Play CDN は開発・学習用です。本番環境では CLI を使いましょう！

---

### 2. ダークモードの実装パターン

```html
<!-- HTML -->
<html lang="ja">

<!-- ダークモード時 -->
<html lang="ja" class="dark">

<!-- JavaScript -->
<script>
  // ダークモード切り替え
  document.documentElement.classList.toggle('dark');

  // テーマをローカルストレージに保存
  localStorage.theme = 'dark'; // または 'light'

  // ページ読み込み時にテーマを復元
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
</script>
```

---

### 3. group と group-hover の使い分け

**使うべき場面**：
- カード全体の hover で、複数の子要素を同時に変化させたい
- ギャラリー、メニュー、ボタングループなど

**使わなくて良い場面**：
- 1 つの要素だけを変化させる（普通の `hover:` で十分）

---

### 4. peer と peer-checked の使い分け

**使うべき場面**：
- チェックボックスやラジオボタンの状態で、他の要素を変化させたい
- タブ UI、アコーディオン、トグルスイッチなど

**注意点**：
- peer は**兄弟要素**にしか効かない（親子関係では使えない）
- 複数の peer を使う場合は、`peer/name` と `peer-checked/name` で区別（Tailwind v3.4+）

---

### 5. レスポンシブ対応のポイント

**サイドバー＋メインのレイアウト**：

```html
<!-- PC：サイドバー固定＋メイン -->
<div class="flex">
  <aside class="w-64 fixed h-screen hidden lg:block">
    <!-- サイドバー -->
  </aside>
  <main class="lg:ml-64 flex-1">
    <!-- メイン -->
  </main>
</div>

<!-- タブレット以下：サイドバーを非表示 -->
<!-- lg:block でタブレット以下は非表示 -->
```

---

### 6. アニメーションのパフォーマンス

**良いアニメーション**：
- `transform`（scale、translate、rotate）
- `opacity`
- これらは GPU で処理されるため高速

**避けるべきアニメーション**：
- `width`、`height`（レイアウトの再計算が発生）
- `top`、`left`（代わりに `translate` を使う）

---

## 💡 デバッグのヒント

### 問題: カスタムカラーが効かない

**確認すべきこと**：
- [ ] `tailwind.config` が正しく設定されているか
- [ ] `theme.extend` を使っているか（`theme.colors` だとデフォルトが消える）
- [ ] ブラウザのキャッシュをクリアしたか

### 問題: ダークモードが動かない

**確認すべきこと**：
- [ ] `darkMode: 'class'` が設定されているか
- [ ] `<html class="dark">` が追加されているか
- [ ] `dark:` プレフィックスが全ての要素に付いているか
- [ ] ブラウザの開発者ツールで `<html>` を確認

### 問題: group-hover が効かない

**確認すべきこと**：
- [ ] 親要素に `group` が付いているか
- [ ] 子要素に `group-hover:` が付いているか
- [ ] 親子関係が正しいか（DOM 構造を確認）

### 問題: peer が効かない

**確認すべきこと**：
- [ ] input と label が**兄弟要素**になっているか（親子関係ではダメ）
- [ ] input に `peer` が付いているか
- [ ] label に `peer-checked:` が付いているか
- [ ] 複数の peer を使う場合、`peer/name` で区別しているか

---

## 🚀 さらに学ぶために

解答例をベースに、以下のカスタマイズに挑戦してみよう：

1. **カスタム設定の拡張**
   - カスタムフォントを追加
   - カスタムスペーシングを追加
   - カスタムブレークポイントを追加

2. **ダークモードのバリエーション**
   - OS の設定に従う（`darkMode: 'media'`）
   - 3 つのテーマ（ライト、ダーク、システム）

3. **アニメーションの追加**
   - カスタムアニメーション（fade-in、slide-in）
   - ページ遷移アニメーション
   - ローディングアニメーション

4. **コンポーネントの拡張**
   - ドロップダウンメニュー
   - モーダルダイアログ
   - トーストメッセージ

5. **レスポンシブ対応の強化**
   - ハンバーガーメニュー
   - モバイル専用レイアウト
   - タブレット専用レイアウト

**Tailwind CSS の実践テクニックをマスターして、プロレベルの UI を作ろう！** 💪

---

**お疲れ様でした！Phase 5 の全てのレッスンを完了したね！次は Phase 6 の統合プロジェクトへ進もう！** 🎉
