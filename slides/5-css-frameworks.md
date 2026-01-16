---
marp: true
theme: udemy
lang: ja
paginate: true
# header: "バイブコーダーに贈るフロントエンド開発入門(Phase 5)"
---

<!-- _class: center -->
<!-- _header: "" -->
<!-- _paginate: skip -->

# バイブコーダーに贈るフロントエンド開発入門

## Phase 5: CSS フレームワーク編 🎨

---

## Phase 5 の目標

**Bootstrap と Tailwind CSS を使って、効率的にスタイリングできるようになる**

### Phase 5 でできるようになること

- Bootstrap でコンポーネント豊富な UI が作れる
- Tailwind CSS でカスタマイズ性の高い UI が作れる
- グリッドシステムでレスポンシブレイアウトが簡単に作れる
- フレームワークの使い分けができる
- プロトタイプを爆速で作れる

---

## Bootstrap と Tailwind CSS の違い

| 項目                       | Bootstrap 🅱️         | Tailwind CSS 🌊          |
|----------------------------|----------------------|--------------------------|
| **アプローチ**             | コンポーネントベース | ユーティリティファースト |
| **学習曲線**               | やさしい             | 少し急                   |
| **カスタマイズ性**         | 中程度               | 高い                     |
| **デザインの統一感**       | 高い                 | 自由                     |
| **ファイルサイズ**         | 中〜大               | 小（使った分だけ）       |
| **JavaScript**             | あり（Modal等）      | なし                     |

**両方学ぶメリット**：

- プロジェクトに応じて最適なツールを選べる
- フレームワークの考え方を理解できる

---

## 使い分けのヒント 💡

**Bootstrap がおすすめの場合**：

- 管理画面やダッシュボードを作る 📊
- とにかく速くプロトタイプを作りたい ⏰
- デザインにこだわりがない（Bootstrap のデザインで OK） 🎨
- JavaScript コンポーネント（Modal、Dropdown など）も欲しい 🚀

**Tailwind CSS がおすすめの場合**：

- 独自のデザインを作りたい 🎨
- 軽量で高速なサイトを作りたい ⚡
- カスタマイズ性を重視する 🔧

---

## Phase 5 の構成

### Lesson 1: Bootstrap 基礎 🅱️

- Bootstrap の導入、グリッドシステム、ユーティリティクラス、基本コンポーネント

### Lesson 2: Bootstrap コンポーネント 🎯

- Navbar、Modal、Form、Carousel、その他の便利なコンポーネント

### Lesson 3: Tailwind CSS 基礎 🌊

- Tailwind CSS の導入、ユーティリティファースト、レスポンシブデザイン、Flexbox/Grid

### Lesson 4: Tailwind CSS 実践 ⚡

- カスタマイズ、ダークモード、アニメーション
- 実践的なテクニック

---

<!-- _class: center -->

# Lesson 1

# Bootstrap 基礎 🅱️

---

## Lesson 1 : Bootstrap 基礎

**学習目標**：Bootstrap の基本を理解し、グリッドシステムとユーティリティクラスを使って、レスポンシブなレイアウトを爆速で作れるようになる

### なぜ Bootstrap を学ぶの?

#### 手書き CSS の現実

<div class="demerit">

- レスポンシブ対応に何十行も書く必要がある
- ブラウザ間の互換性を気にしないといけない
- デザインの統一感を保つのが大変

</div>

#### Bootstrap を使うと

- レスポンシブ対応が**クラス名一つ**で完成
- ブラウザ互換性は **Bootstrap が保証**
- 統一感のあるデザインが**自動的に適用**

---

## Bootstrap とは?

**世界で最も人気のある CSS フレームワーク**（2011 年に Twitter 社が開発・公開）

- すぐ使える美しいコンポーネント（40種類以上） ✨
- モバイルファースト設計 📱
- クロスブラウザ対応 🌐
- カスタマイズ可能 🎨
- 充実したドキュメント 📖

**現在、世界中の2000万以上のウェブサイトで使われている!**

---

## Bootstrap の導入: CDN で超簡単!

**CDN**（Content Delivery Network） = インターネット上のファイル配信サービス

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap入門</title>

    <!-- Bootstrap CSS（これを追加するだけ！） -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet">

  </head>
  <body>
    <h1>Hello, Bootstrap!</h1>

    <!-- Bootstrap JavaScript（Modal、Dropdownなどで必要） -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
    </script>
  </body>
</html>
```

---

## 最初の Bootstrap ボタン

```html
<!-- 通常のボタン（Bootstrap なし） -->
<button>普通のボタン</button>

<!-- Bootstrap ボタン -->
<button class="btn btn-primary">Primary ボタン</button>
<button class="btn btn-secondary">Secondary ボタン</button>
<button class="btn btn-success">Success ボタン</button>
<button class="btn btn-danger">Danger ボタン</button>
```

**たった `class="btn btn-primary"` だけで、プロ級のボタンが完成!** ✨

---

## グリッドシステム: Bootstrap の心臓部!

### 基本概念

Bootstrap のグリッドは、**画面を12分割**して要素を配置する仕組み

```text
画面全体
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│   │   │   │   │   │   │   │   │   │   │   │   │
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10│ 11│ 12│  ← 12カラム
│   │   │   │   │   │   │   │   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
```

**なぜ12分割?**

- 12は2、3、4、6で割り切れる
- 様々なレイアウトに対応できる
- 柔軟性が高い

---

## グリッドシステムの3つの要素

<div class="flex gap-x-1">
<div class="flex-1">

### 1. Container（コンテナ）

全体を囲む外枠。中央寄せと左右の余白を自動で設定

### 2. Row（行）

カラムを横並びにするための行

### 3. Column（列）

実際のコンテンツを配置する列

</div>
<div class="flex-1">

```text
 ┌────────────────────────────────────┐
 │ Container                          │
 │ ┌────────────────────────────────┐ │
 │ │ Row                            │ │
 │ │ ┌────────┐┌────────┐┌────────┐ │ │
 │ │ │ Column ││ Column ││ Column │ │ │
 │ │ └────────┘└────────┘└────────┘ │ │
 │ └────────────────────────────────┘ │
 │ ┌────────────────────────────────┐ │
 │ │ Row                            │ │
 │ │ ┌────────┐┌──────────────────┐ │ │
 │ │ │ Column ││ Column           │ │ │
 │ │ └────────┘└──────────────────┘ │ │
 │ └────────────────────────────────┘ │
 └────────────────────────────────────┘
```

</div>
</div>

---

## グリッドの基本例

<div class="flex gap-x-1">
<div class="flex-1">

```html
<div class="container">
  <div class="row">
    <!-- 等幅の3カラム -->
    <div class="col">カラム 1</div>
    <div class="col">カラム 2</div>
    <div class="col">カラム 3</div>
  </div>

  <div class="row">
    <!-- カラム幅を指定 -->
    <div class="col-4">4カラム分（1/3）</div>
    <div class="col-8">8カラム分（2/3）</div>
  </div>
</div>
```

</div>
<div class="flex-1">

```css
/* 見やすくするための装飾 */
.col,
[class*="col-"] {
  background-color: #e7f3ff;
  border: 2px solid #0d6efd;
  padding: 20px;
  margin-bottom: 10px;
  text-align: center;
}
```

</div>
</div>

**ポイント**: カラムの合計が12になるように組み合わせる

---

## レスポンシブグリッド

Bootstrap の真骨頂、**レスポンシブグリッド**を学ぼう！

### ブレークポイント：画面サイズの区切り

Bootstrap は、画面サイズを **6 段階** に分類しているよ。

| サイズ            | プレフィックス | 画面幅   | デバイス例   |
|-------------------|----------------|----------|--------------|
| Extra small       | なし           | < 576px  | スマホ（縦） |
| Small             | `sm`           | ≥ 576px  | スマホ（横） |
| Medium            | `md`           | ≥ 768px  | タブレット   |
| Large             | `lg`           | ≥ 992px  | PC（小）     |
| Extra large       | `xl`           | ≥ 1200px | PC（中）     |
| Extra extra large | `xxl`          | ≥ 1400px | PC（大）     |

---

## レスポンシブの実例

```html
<div class="container mt-5">
  <p>スマホ（< 768px）: 12カラム = 縦並び（全幅）</p>
  <p>タブレット（≥ 768px）: 6カラム = 2列</p>
  <p>PC（≥ 992px）: 4カラム = 3列</p>

  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <h3>カード 1</h3>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <h3>カード 2</h3>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <h3>カード 3</h3>
    </div>
  </div>
</div>
```

**たった1行のクラスで、3つのレイアウトに対応!**

---

## ユーティリティクラス: 超便利な小技集!

Bootstrap には、**よく使うスタイルを簡単に適用できるクラス**がたくさん用意されているよ！

### テキストユーティリティ

```html
<p>テキストの配置</p>
<p class="text-start">text-start: 左寄せ</p>
<p class="text-center">text-center: 中央寄せ</p>
<p class="text-end">text-end: 右寄せ</p>

<p>テキストの色</p>
<p class="text-primary">text-primary: 青</p>
<p class="text-success">text-success: 緑</p>
<p class="text-danger">text-danger: 赤</p>

<p>フォントウェイト</p>
<p class="fw-bold">fw-bold: 太字</p>
<p class="fw-normal">fw-normal: 通常</p>
```

---

### 背景色とボーダー

```html
<p>背景色</p>
<div class="bg-primary text-white p-3 m-3">bg-primary: 青</div>
<div class="bg-success text-white p-3 m-3">bg-success: 緑</div>
<div class="bg-danger text-white p-3 m-3">bg-danger: 赤</div>

<p>ボーダー</p>
<div class="border p-3 m-3">border: 枠線</div>
<div class="border border-primary p-3 m-3">border border-primary: 青色枠線</div>
<div class="border rounded p-3 m-3">border rounded: 角丸枠線</div>
<div class="border rounded-circle p-3 m-3" style="width: 300px; height: 300px">
  border rounded-circle: 円形
</div>
```

---

### スペーシング（余白）

**フォーマット**: `{property}{sides}-{size}`

- **property**: `m`（margin）または `p`（padding）
- **sides**: 方向（`t`=上、`b`=下、`s`=左、`e`=右、`x`=左右、`y`=上下）
- **size**: 0〜5（0=0px、1=0.25rem、2=0.5rem、3=1rem、4=1.5rem、5=3rem）

```html
<div class="border mt-3">mt-3: 上マージン</div>
<div class="border mb-5">mb-5: 下マージン大</div>
<div class="border mx-auto w-25">mx-auto: 中央寄せ</div>
<div class="border p-4">p-4: パディング</div>
<div class="border px-5 py-2">px-5 py-2: 左右パディング大、上下小</div>
```

---

### Flexbox ユーティリティ

```html
<p>d-flex: 横並び</p>
<div class="d-flex gap-3">
  <div class="border p-4">アイテム 1</div>
  <div class="border p-4">アイテム 2</div>
  <div class="border p-4">アイテム 3</div>
</div>

<p>d-flex justify-content-center: 中央寄せ</p>
<div class="d-flex justify-content-center">
  <div class="border p-4">中央</div>
</div>

<p>d-flex justify-content-between: 両端寄せ</p>
<div class="d-flex justify-content-between">
  <div class="border p-4">左</div>
  <div class="border p-4">中央</div>
  <div class="border p-4">右</div>
</div>
```

---

## 基本コンポーネント：すぐ使える UI パーツ！

Bootstrap の**既製コンポーネント**を使ってみよう！

### Button

```html
<div class="m-4">
  <p>基本のボタン</p>
  <button class="btn btn-primary">btn-primary</button>
  <button class="btn btn-secondary">btn-secondary</button>
  <button class="btn btn-success">btn-success</button>
  <button class="btn btn-danger">btn-danger</button>
</div>
<div class="m-4">
  <p>アウトラインボタン</p>
  <button class="btn btn-outline-primary">btn-outline-primary</button>
  <button class="btn btn-outline-success">btn-outline-success</button>
</div>
<div class="m-4">
  <p>ボタンサイズ</p>
  <button class="btn btn-primary btn-lg">btn-lg: 大きいボタン</button>
  <button class="btn btn-primary">通常サイズ</button>
  <button class="btn btn-primary btn-sm">btn-sm: 小さいボタン</button>
</div>
```

---

### Alert（アラート・通知）

```html
<p>alert-success: 成功メッセージ</p>
<div class="alert alert-success m-4" role="alert">
  ✓ 登録が完了しました！
</div>

<p>alert-info: 情報メッセージ</p>
<div class="alert alert-info m-4" role="alert">
  ℹ️ 新しい機能が追加されました。
</div>

<p>alert-warning: 警告メッセージ</p>
<div class="alert alert-warning m-4" role="alert">
  ⚠️ パスワードの有効期限が近づいています。
</div>

<p>alert-danger: エラーメッセージ</p>
<div class="alert alert-danger m-4" role="alert">
  ❌ エラーが発生しました。もう一度お試しください。
</div>
```

---

### Card（カード）

```html
<div class="card m-4 w-25">
  <img src="https://placehold.jp/400x200.png" class="card-img-top" alt="カード画像" />
  <div class="card-body">
    <h5 class="card-title">カードのタイトル</h5>
    <p class="card-text">
      カードの説明文がここに入ります。Bootstrap のカードは柔軟で便利！
    </p>
    <div class="text-end">
      <a href="#" class="btn btn-primary">詳しく見る</a>
    </div>
  </div>
</div>
```

**カード**は、Bootstrap で最もよく使うコンポーネントの一つ!

---

## 実践例: ランディングページ

```html
<!-- ヒーローセクション -->
<div class="bg-primary text-white text-center py-5">
  <div class="container">
    <h1 class="display-4">Bootstrap で爆速開発！</h1>
    <p class="lead">美しいウェブサイトを、たった数行のコードで作れます</p>
    <button class="btn btn-light btn-lg mt-3">今すぐ始める</button>
  </div>
</div>

<!-- 特徴セクション（3カラムカード） -->
<div class="container my-5">
  <h2 class="text-center mb-5">3つの特徴</h2>
  <div class="row">
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h3>⚡ 超高速</h3>
          <p>既製コンポーネントを使うから、開発スピードが10倍に！</p>
        </div>
      </div>
    </div>
    <!-- 他のカードも同様 -->
  </div>
</div>
```

---

## Lesson 1 まとめ

### 学んだこと

- Bootstrap とは何か（世界で最も人気の CSS フレームワーク）
- CDN で簡単導入（2行追加するだけ）
- グリッドシステム（container → row → col の構造）
- ユーティリティクラス（スペーシング、テキスト、背景色など）
- 基本コンポーネント（Button、Alert、Card）

**メディアクエリ不要で、レスポンシブ完成!** 🎉

---

<!-- _class: center -->

# Lesson 2

# Bootstrap コンポーネント 🎯

---

## Lesson 2: Bootstrap コンポーネント

**学習目標**：Bootstrap の高度なコンポーネント（Navbar、Modal、Carousel など）を使って、プロフェッショナルな UI を爆速で作れるようになる

### なぜ Bootstrap コンポーネントを学ぶの?

実際の Web サイトには高度な UI が必要

- レスポンシブなナビゲーションメニュー 📱
- 画像スライダー 🖼️、ポップアップウィンドウ 💬
- 美しいフォーム（入力フィールド、ボタン、バリデーション） 📝

Bootstrap コンポーネントを使うと

- **コピペだけ**で**レスポンシブ対応済み**の高度な UI が完成
- **JavaScript も自動**で動く
- **アクセシビリティ対応済み**

---

## Navbar: レスポンシブナビゲーション 🧭

**Navbar** は、Web サイトの**最も重要な UI の一つ**！ヘッダーメニュー、ロゴ、検索ボックスなど、全部含められるよ。

#### 基本構造

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Website</a>
    <button type="button" class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

#### Navbar のポイント

- `navbar navbar-expand-lg`：基本クラス（lg = 992px以上で横並び）
- `navbar-dark bg-dark`：暗い背景に白文字
- `navbar-toggler`：ハンバーガーメニューボタン
- `data-bs-toggle="collapse"`：折りたたみ機能を有効化
- `collapse navbar-collapse`：折りたたみ可能なコンテンツ

---

### Navbar のカスタマイズ

#### 色を変える

```html
<!-- 明るい背景 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- ... -->
</nav>

<!-- Primaryカラー -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <!-- ... -->
</nav>
```

#### 検索ボックスを追加

```html
<form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="検索" />
  <button class="btn btn-outline-success" type="submit">検索</button>
</form>
```

---

### Navbar のドロップダウンメニュー

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#"
     role="button" data-bs-toggle="dropdown">
    Services
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Web Design</a></li>
    <li><a class="dropdown-item" href="#">App Development</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Consulting</a></li>
  </ul>
</li>
```

#### ドロップダウンメニューのポイント

- `dropdown`：ドロップダウンを有効化
- `dropdown-toggle`：矢印アイコンを表示
- `data-bs-toggle="dropdown"`：クリックで開閉
- `dropdown-menu`：ドロップダウンの中身
- `dropdown-divider`：区切り線

---

## Modal: モーダルダイアログ 🗨️

**Modal** は、ページ上に重ねて表示される**ポップアップウィンドウ**！ログインフォーム、画像の拡大表示、確認ダイアログなど、様々な用途で使えるよ。

#### 基本的な Modal

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#exampleModal">Modal を開く</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal のタイトル</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">ここに内容が入ります</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal">閉じる</button>
        <button type="button" class="btn btn-primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

---

#### Modal　のポイント

- `data-bs-toggle="modal"`：ボタンをクリックで Modal を開く
- `data-bs-target="#exampleModal"`：開く Modal の ID を指定
- `modal fade`：フェードイン効果
- `modal-dialog`：Modal のコンテナ
- `modal-content`：Modal の中身
- `modal-header`、`modal-body`、`modal-footer`：3 つのセクション
- `data-bs-dismiss="modal"`：Modal を閉じる

---

### Modal のサイズ

```html
<!-- 小さいModal -->
<div class="modal-dialog modal-sm">
  <!-- ... -->
</div>

<!-- 通常サイズ（デフォルト） -->
<div class="modal-dialog">
  <!-- ... -->
</div>

<!-- 大きいModal -->
<div class="modal-dialog modal-lg">
  <!-- ... -->
</div>

<!-- 超大きいModal -->
<div class="modal-dialog modal-xl">
  <!-- ... -->
</div>

<!-- 全画面Modal -->
<div class="modal-dialog modal-fullscreen">
  <!-- ... -->
</div>
```

---

### Modal にフォームを入れる

```html
<div class="modal fade" id="loginModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">ログイン</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">メールアドレス</label>
            <input type="email" class="form-control" id="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">パスワード</label>
            <input type="password" class="form-control" id="password" required />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          キャンセル
        </button>
        <button type="button" class="btn btn-primary">ログイン</button>
      </div>
    </div>
  </div>
</div>
```

---

## Form: 美しいフォーム 📝

Bootstrap の **Form コンポーネント**を使えば、HTML5 のフォーム要素を美しくスタイリングできるよ！

#### 基本のフォーム

```html
<div class="container mt-5">
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">お名前</label>
      <input type="text" class="form-control" id="name" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">メールアドレス</label>
      <input type="email" class="form-control" id="email" required>
      <div class="form-text">このメールアドレスは公開されません。</div>
    </div>
    <button type="submit" class="btn btn-primary">送信</button>
  </form>
</div>
```

---

### フォーム要素のバリエーション

```html
<!-- セレクトボックス -->
<div class="mb-3">
  <label for="subject" class="form-label">件名</label>
  <select class="form-select" id="subject" required>
    <option value="">選択してください</option>
    <option value="inquiry">お問い合わせ</option>
    <option value="feedback">フィードバック</option>
  </select>
</div>

<!-- テキストエリア -->
<div class="mb-3">
  <label for="message" class="form-label">メッセージ</label>
  <textarea class="form-control" id="message" rows="4" required></textarea>
</div>

<!-- チェックボックス -->
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="agree" required />
  <label class="form-check-label" for="agree">
    利用規約に同意します
  </label>
</div>
```

---

### バリデーション（検証）スタイル

```html
<form class="was-validated">
  <!-- 正しい入力 -->
  <div class="mb-3">
    <label for="validInput" class="form-label">正しい入力</label>
    <input type="text" class="form-control is-valid" id="validInput" value="OK" required>
    <div class="valid-feedback">正しく入力されています！</div>
  </div>

  <!-- エラーのある入力 -->
  <div class="mb-3">
    <label for="invalidInput" class="form-label">エラーのある入力</label>
    <input type="text" class="form-control is-invalid" id="invalidInput" required>
    <div class="invalid-feedback">この項目は必須です。</div>
  </div>
</form>
```

#### バリデーションスタイルのポイント

- `is-valid`：正しい入力（緑の枠線）
- `is-invalid`：エラーのある入力（赤の枠線）
- `valid-feedback`：成功メッセージ（緑）
- `invalid-feedback`：エラーメッセージ（赤）

---

## Carousel: 画像スライダー 🎠

#### 基本的な Carousel

<div class="columns-2">

```html
<div class="container mt-5">
  <!-- Carousel -->
  <div id="carouselExample" class="carousel slide"
       data-bs-ride="carousel">
    <!-- インジケーター（下部のドット） -->
    <div class="carousel-indicators">
      <button type="button" data-bs-slide-to="0"
              data-bs-target="#carouselExample"
              class="active"></button>
      <button type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"></button>
    </div>

    <!-- スライド本体 -->
    <div class="carousel-inner">
      <!-- スライド1 -->
      <div class="carousel-item active">
        <img src="https://placehold.jp/800x400.png"
             class="d-block w-100" alt="スライド1">
        <div class="carousel-caption d-none d-md-block">
          <h5>最初のスライド</h5>
          <p>ここに説明文が入ります。</p>
        </div>
      </div>
      <!-- スライド2 -->
      <div class="carousel-item">
        <img src="https://placehold.jp/800x400.png"
             class="d-block w-100" alt="スライド2">
        <div class="carousel-caption d-none d-md-block">
          <h5>2番目のスライド</h5>
          <p>別の説明文がここに。</p>
        </div>
      </div>
    </div>

    <!-- 前へボタン -->
    <button type="button" data-bs-slide="prev"
            class="carousel-control-prev"
            data-bs-target="#carouselExample">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">前へ</span>
    </button>
    <!-- 次へボタン -->
    <button type="button" data-bs-slide="next"
            class="carousel-control-next"
            data-bs-target="#carouselExample">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">次へ</span>
    </button>
  </div>
</div>
```

</div>

---

#### Carousel　のポイント

- `carousel slide`：Carousel の基本クラス
- `data-bs-ride="carousel"`：自動でスライド開始
- `carousel-indicators`：下部のドットインジケーター
- `carousel-inner`：スライドのコンテナ
- `carousel-item`：個々のスライド
- `active`：最初に表示されるスライド
- `carousel-caption`：スライド上のキャプション
- `d-none d-md-block`：スマホでは非表示、タブレット以上で表示
- `carousel-control-prev/next`：前へ・次へボタン

---

### Carousel の自動再生間隔を変更

```html
<!-- 5秒ごとに切り替わる -->
<div id="carouselExample" class="carousel slide"
     data-bs-ride="carousel" data-bs-interval="5000">
  <!-- ... -->
</div>

<!-- 自動再生しない（手動操作のみ） -->
<div id="carouselExample" class="carousel slide"
     data-bs-ride="false">
  <!-- ... -->
</div>
```

---

## その他の便利なコンポーネント 🏷️

### Badge（バッジ）

```html
<h1>見出し <span class="badge bg-secondary">New</span></h1>
<h2>メール <span class="badge bg-danger">5</span></h2>

<button type="button" class="btn btn-primary">
  通知 <span class="badge bg-light text-dark">4</span>
</button>

<!-- 丸いバッジ（pill） -->
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-success">Success</span>
```

---

### Breadcrumb（パンくずリスト）

現在位置を示すナビゲーション

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">カテゴリー</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      現在のページ
    </li>
  </ol>
</nav>
```

---

### Pagination（ページネーション）

```html
<nav>
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#">前へ</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">次へ</a>
    </li>
  </ul>
</nav>

<!-- サイズ変更 -->
<ul class="pagination pagination-lg"><!-- 大きい --></ul>
<ul class="pagination pagination-sm"><!-- 小さい --></ul>
```

---

### Progress（プログレスバー）

```html
<!-- 基本のプログレスバー -->
<div class="progress" role="progressbar">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<!-- 色付きプログレスバー -->
<div class="progress mt-3">
  <div class="progress-bar bg-success" style="width: 50%">50%</div>
</div>

<!-- 縞模様のプログレスバー -->
<div class="progress mt-3">
  <div class="progress-bar progress-bar-striped"
       style="width: 60%">60%</div>
</div>

<!-- アニメーション付き -->
<div class="progress mt-3">
  <div class="progress-bar progress-bar-striped progress-bar-animated"
       style="width: 75%">読み込み中...</div>
</div>
```

---

### Spinner（スピナー・ローディング）

```html
<!-- 基本のスピナー -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">読み込み中...</span>
</div>

<!-- 色付きスピナー -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-success"></div>
<div class="spinner-border text-danger"></div>

<!-- 成長するスピナー -->
<div class="spinner-grow text-primary"></div>

<!-- ボタン内のスピナー -->
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm"></span>
  読み込み中...
</button>
```

---

## Lesson 2 まとめ

### 学んだこと

- **Navbar**: レスポンシブナビゲーション、ハンバーガーメニュー
- **Modal**: モーダルダイアログ、サイズ変更、フォームの組み込み
- **Form**: フォーム要素のスタイリング、バリデーションスタイル
- **Carousel**: 画像スライダー、自動再生
- **その他**: Badge、Breadcrumb、Pagination、Progress、Spinner

### 重要なポイント

- `data-bs-*` 属性で JavaScript を書かずに動的な機能が使える
- ID の一致が重要
- Bootstrap JavaScript が必須

---

<!-- _class: center -->

# Lesson 3

# Tailwind CSS 基礎 🌊

---

## Lesson 3: Tailwind CSS 基礎 🌊

**学習目標**：Tailwind CSS の基本を理解し、ユーティリティファーストのアプローチで、カスタマイズ性の高い UI を爆速で作れるようになる

### なぜ Tailwind CSS を学ぶの?

#### Bootstrap の悩み

<div class="demerit">

- 独自のデザインを作りたいけど、カスタマイズが難しい
- 使わないコンポーネントも読み込まれて、ファイルサイズが大きい
- 細かい調整をしたいけど、カスタム CSS を書くのが面倒

</div>

#### Tailwind CSS の特徴

- **ユーティリティファースト**: 小さな部品（クラス）を組み合わせて作る
- **完全カスタマイズ可能**: 独自のデザインが簡単に作れる（Bootstrap っぽさゼロ）
- **超軽量**: 使った分だけ CSS が生成される

---

## ユーティリティファーストとは?

### コンポーネントベースの CSS

```html
<button class="btn btn-primary">ボタン</button>
```

➡️ `btn` や `btn-primary` という**完成されたコンポーネント**を使う

### Tailwind CSS（ユーティリティファースト）

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  ボタン
</button>
```

➡️ `bg-blue-500`（背景色）、`text-white`（文字色）、`px-4`（左右パディング）など、**小さなユーティリティクラス**を組み合わせて作る

---

## Tailwind CSS の導入：CDN で超簡単！

Tailwind CSS を使うには、**たった 1 行追加するだけ**！**Play CDN**（= 開発・学習用の CDN）を使って、インストール・設定ファイル不要、ですぐに試せる

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

**注意**：本番環境では、ビルドツールを使った方が良い（ファイルサイズを最小化できる）。

---

## 最初の Tailwind ボタン

```html
<!-- 通常のボタン（Tailwind なし） -->
<button>普通のボタン</button>

<!-- Tailwind ボタン -->
<button class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
  Primary ボタン
</button>
<button class="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 ml-2 transition">
  Success ボタン
</button>
```

#### クラス名の読み方

- `bg-blue-500`: 背景色を青（500の濃さ）
- `text-white`: 文字色を白
- `px-6`: 左右のパディング（1.5rem = 24px）
- `py-3`: 上下のパディング（0.75rem = 12px）
- `rounded`: 角を丸く
- `hover:bg-blue-600`: ホバー時に背景色を濃く

---

## ユーティリティクラスの基本

Tailwind CSS の**最も重要な概念**を理解しよう！

### 基本的なパターン

Tailwind のクラス名は、以下のパターンで構成されているよ。

```text
{property}-{value}
```

#### 例

- `text-center`: text-align: center
- `font-bold`: font-weight: bold
- `bg-red-500`: background-color: #ef4444

---

## よく使うユーティリティクラス

### スペーシング（余白）

```html
<!-- margin（外側の余白） -->
<div class="m-4 border">全方向マージン</div>
<div class="mt-4 border">上マージン</div>
<div class="mb-4 border">下マージン</div>
<div class="mx-4 border">左右マージン</div>
<div class="my-4 border">上下マージン</div>

<!-- padding（内側の余白） -->
<div class="p-4 border">全方向パディング</div>
<div class="px-4 border">左右パディング</div>
<div class="py-4 border">上下パディング</div>
```

#### 数値の対応表

```text
0 = 0px
1 = 0.25rem (4px)
2 = 0.5rem (8px)
3 = 0.75rem (12px)
4 = 1rem (16px)
6 = 1.5rem (24px)
8 = 2rem (32px)
```

---

### カラー

Tailwind CSS には、**豊富なカラーパレット**が用意されている

```html
<p>背景色</p>
<div class="bg-gray-100 m-4 p-4">bg-gray-100: 薄いグレー</div>
<div class="bg-blue-500 m-4 p-4">bg-blue-500: 青</div>
<div class="bg-green-500 m-4 p-4">bg-green-500: 緑</div>
<div class="bg-red-500 m-4 p-4">bg-red-500: 赤</div>

<p>文字色</p>
<p class="text-gray-600 m-4 p-4">text-gray-600: グレー文字</p>
<p class="text-blue-500 m-4 p-4">text-blue-500: 青文字</p>
<p class="text-red-500 m-4 p-4">text-red-500: 赤文字</p>

<p>ボーダー色</p>
<div class="border border-gray-300 m-4 p-4">border-gray-300: グレーの枠線</div>
<div class="border border-blue-500 m-4 p-4">border-blue-500: 青の枠線</div>
```

**色の濃さ**: `50`（最も薄い）〜 `900`（最も濃い）

---

### テキストとフォント

```html
<p>フォントサイズ</p>
<p class="text-xs m-4">text-xs: 極小テキスト</p>
<p class="text-sm m-4">text-sm: 小テキスト</p>
<p class="text-base m-4">text-base: 通常テキスト</p>
<p class="text-lg m-4">text-lg: 大テキスト</p>
<p class="text-xl m-4">text-xl: 特大テキスト</p>
<p class="text-2xl m-4">text-2xl: 超特大テキスト</p>

<p>フォントウェイト</p>
<p class="font-light m-4">font-light: 細字</p>
<p class="font-normal m-4">font-normal: 通常</p>
<p class="font-bold m-4">font-bold: 太字</p>

<p>テキスト配置</p>
<p class="text-left m-4">text-left: 左寄せ</p>
<p class="text-center m-4">text-center: 中央寄せ</p>
<p class="text-right m-4">text-right: 右寄せ</p>
```

---

### 幅と高さ

```html
<p>固定幅</p>
<div class="w-32 bg-gray-300 m-4 p-2">w-32: 幅 8rem (128px)</div>
<div class="w-64 bg-gray-300 m-4 p-2">w-64: 幅 16rem (256px)</div>

<p>パーセント幅</p>
<div class="w-1/2 bg-gray-300 m-4 p-2">w-1/2: 幅 50%</div>
<div class="w-1/3 bg-gray-300 m-4 p-2">w-1/3: 幅 33.333%</div>
<div class="w-full bg-gray-300 my-4 p-2">w-full: 幅 100%</div>

<p>画面幅・高さ</p>
<div class="w-screen bg-gray-300 my-4 p-2">w-screen: 画面幅いっぱい</div>
<div class="h-screen bg-gray-300 m-4 p-2">h-screen: 画面高さいっぱい</div>

<p>最大幅</p>
<div class="max-w-sm bg-gray-300 m-4 p-2">max-w-sm: 最大幅 24rem (384px)</div>
<div class="max-w-md bg-gray-300 m-4 p-2">max-w-md: 最大幅 28rem (448px)</div>
<div class="max-w-lg bg-gray-300 m-4 p-2">max-w-lg: 最大幅 32rem (512px)</div>
```

---

### ボーダーと角丸

```html
<p>ボーダー</p>
<div class="border m-4 p-4">border: 1px ボーダー</div>
<div class="border-2 m-4 p-4">border-2: 2px ボーダー</div>
<div class="border-4 m-4 p-4">border-4: 4px ボーダー</div>

<p>角丸</p>
<div class="rounded bg-gray-200 m-4 p-4">rounded: 角丸 (4px)</div>
<div class="rounded-lg bg-gray-200 m-4 p-4">rounded-lg: 大角丸 (8px)</div>
<div class="rounded-full bg-gray-200 m-4 p-4">rounded-full: 完全な円</div>

<p>影</p>
<div class="shadow bg-gray-50 m-4 p-4">shadow: 小さい影</div>
<div class="shadow-md bg-gray-50 m-4 p-4">shadow-md: 中影</div>
<div class="shadow-lg bg-gray-50 m-4 p-4">shadow-lg: 大きい影</div>
```

---

## レスポンシブデザイン

Tailwind CSS の**レスポンシブデザイン**は超シンプル！

### ブレークポイント

- デフォルト = スマホ
- `md:`、`lg:` で大きい画面用のスタイルを追加

| プレフィックス     | 画面幅   | デバイス例   |
|--------------------|----------|--------------|
| なし（デフォルト） | すべて   | 全デバイス   |
| `sm:`              | ≥ 640px  | スマホ（横） |
| `md:`              | ≥ 768px  | タブレット   |
| `lg:`              | ≥ 1024px | PC（小）     |
| `xl:`              | ≥ 1280px | PC（中）     |
| `2xl:`             | ≥ 1536px | PC（大）     |

---

### レスポンシブの実例

```html
<div class="bg-red-500 md:bg-blue-500 lg:bg-green-500 m-4 p-4">
  <p>スマホ:赤、タブレット:青、PC:緑</p>
</div>

<div class="text-sm lg:text-2xl border m-4 p-4">
  <p>スマホ:テキスト小、PC:テキスト大</p>
</div>

<div class="flex flex-col lg:flex-row">
  <div class="border m-4 p-4">アイテム1（スマホ:縦並び、PC:横並び）</div>
  <div class="border m-4 p-4">アイテム2（スマホ:縦並び、PC:横並び）</div>
</div>
```

---

### レスポンシブカードレイアウト

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="https://placehold.jp/400x200.png" alt="Card 1" class="w-full" />
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">カード 1</h2>
      <p class="text-gray-600">
        スマホ:1列、タブレット:2列、PC:3列で表示されます。
      </p>
    </div>
  </div>
  <!-- 他のカードも同様 -->
</div>
```

**クラスの読み方**:

- `grid`: Grid レイアウトを有効化
- `grid-cols-1`: 1列（デフォルト = スマホ）
- `md:grid-cols-2`: 768px以上で2列
- `lg:grid-cols-3`: 1024px以上で3列
- `gap-6`: カード間の余白（1.5rem = 24px）

---

## Flexbox：柔軟な 1 次元レイアウト 📦

```html
<p>横並び: flex gap-4</p>
<div class="flex gap-4 m-4">
  <div class="bg-blue-500 text-white p-4 rounded">アイテム 1</div>
  <div class="bg-blue-500 text-white p-4 rounded">アイテム 2</div>
  <div class="bg-blue-500 text-white p-4 rounded">アイテム 3</div>
</div>

<p>中央寄せ: flex justify-center items-center</p>
<div class="flex justify-center items-center h-32 m-4">
  <div class="bg-green-500 text-white p-4 rounded">中央</div>
</div>

<p>両端寄せ: flex justify-between items-center</p>
<div class="flex justify-between items-center m-4">
  <div class="bg-red-500 text-white p-4 rounded">左</div>
  <div class="bg-red-500 text-white p-4 rounded">右</div>
</div>

<p>縦並び: flex flex-col gap-4</p>
<div class="flex flex-col gap-4 m-4">
  <div class="bg-purple-500 text-white p-4 rounded">上</div>
  <div class="bg-purple-500 text-white p-4 rounded">下</div>
</div>
```

---

### Flexbox クラス一覧

| クラス            | CSS                              | 説明                 |
|-------------------|----------------------------------|----------------------|
| `flex`            | `display: flex`                  | Flexbox を有効化     |
| `flex-row`        | `flex-direction: row`            | 横並び（デフォルト） |
| `flex-col`        | `flex-direction: column`         | 縦並び               |
| `justify-start`   | `justify-content: flex-start`    | 左寄せ               |
| `justify-center`  | `justify-content: center`        | 中央寄せ             |
| `justify-end`     | `justify-content: flex-end`      | 右寄せ               |
| `justify-between` | `justify-content: space-between` | 両端寄せ             |
| `items-center`    | `align-items: center`            | 縦方向中央寄せ       |
| `gap-4`           | `gap: 1rem`                      | 要素間の余白         |

---

## Grid：強力な 2 次元レイアウト 🎯

```html
<p>3カラム: grid grid-cols-3 gap-4</p>
<div class="grid grid-cols-3 gap-4 m-4">
  <div class="bg-blue-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">3</div>
</div>

<p>不均等なカラム: grid grid-cols-3 gap-4</p>
<div class="grid grid-cols-3 gap-4 m-4">
  <div class="col-span-2 bg-green-500 text-white p-4 rounded">
    col-span-2: 2カラム分
  </div>
  <div class="bg-green-500 text-white p-4 rounded">
    1カラム分
  </div>
</div>

<p>レスポンシブ: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4</p>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
  <div class="bg-purple-500 text-white p-4 rounded">1</div>
  <div class="bg-purple-500 text-white p-4 rounded">2</div>
  <div class="bg-purple-500 text-white p-4 rounded">3</div>
  <div class="bg-purple-500 text-white p-4 rounded">4</div>
</div>
```

---

## 疑似クラス: ホバーやフォーカス

```html
<div>ホバー効果: hover:bg-blue-700 hover:scale-105</div>
<button class="bg-blue-500 text-white px-6 py-3 rounded
               hover:bg-blue-700 hover:scale-105 transition m-4">
  ホバーしてみて！
</button>

<div>フォーカス効果: focus:border-blue-500</div>
<input type="text" placeholder="クリックしてフォーカス"
       class="border-2 border-gray-300 px-4 py-2 rounded
              focus:border-blue-500 m-4">

<div>グループホバー: group</div>
<div class="group bg-white p-6 rounded-lg shadow-lg
            hover:shadow-2xl transition cursor-pointer m-4">
  <h3 class="text-xl font-bold transition">
    カードタイトル
  </h3>
  <p class="text-gray-600 mt-2 group-hover:text-blue-500">
    group-hover:text-blue-500: 親要素にホバーすると、このテキストの色が変わります。
  </p>
</div>
```

---

### 疑似クラスプレフィックス

| プレフィックス | 説明                       | 例                          |
|----------------|----------------------------|-----------------------------|
| `hover:`       | ホバー時                   | `hover:bg-blue-600`         |
| `focus:`       | フォーカス時               | `focus:border-blue-500`     |
| `active:`      | アクティブ時（クリック中） | `active:scale-95`           |
| `disabled:`    | 無効時                     | `disabled:opacity-50`       |
| `group-hover:` | 親がホバーされた時         | `group-hover:text-blue-500` |

**transition** クラスで、滑らかなアニメーション効果を追加できる!

---

## 実践例：Tailwind CSS で作る美しいランディングページ 🚀

これまで学んだことを全部使って、本格的なランディングページを作ってみよう！

<div class="columns-2">

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
          <button class="bg-blue-600 text-white px-6 py-2
                         rounded-lg hover:bg-blue-700 transition">
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
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg
                       font-bold hover:bg-gray-100 transition">
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
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg
                       font-bold hover:bg-gray-100 transition">
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

</div>

---

## Lesson 3 まとめ

### 学んだこと

- **Tailwind CSS とは**: ユーティリティファーストのフレームワーク
- **導入方法**: Play CDN で簡単導入（`<script>` タグ1行だけ）
- **ユーティリティクラス**: スペーシング、カラー、テキスト、幅・高さ、ボーダー
- **レスポンシブデザイン**: モバイルファースト、`sm:`、`md:`、`lg:` プレフィックス
- **Flexbox と Grid**: `flex`、`grid` クラス
- **疑似クラス**: `hover:`、`focus:`、`transition`

**メディアクエリ不要で、レスポンシブ完成!** 🎉

---

<!-- _class: center -->

# Lesson 4

# Tailwind CSS 実践 ⚡

---

## Lesson 4 : Tailwind CSS 実践

**学習目標**：Tailwind CSS の実践的なテクニックを理解し、本格的なプロジェクトを構築できるようになる

### Lesson 4 で学ぶこと

- Tailwind CSS のカスタマイズ設定
- ダークモードの実装
- アニメーション＆トランジション
- 実践的なテクニック
- 本格的なプロジェクトの構築

---

## Tailwind CSS のカスタマイズ設定

### CDN版 vs ビルド版

| 項目                 | CDN版                      | ビルド版                     |
|----------------------|----------------------------|------------------------------|
| **読み込み方法**     | `<script>` タグで読み込み  | npm install + ビルドツール   |
| **カスタマイズ方法** | HTMLに`<script>`で直接記述 | `tailwind.config.js`ファイル |
| **ビルド必要?**      | 不要                       | 必要                         |
| **本番環境で使う?**  | ❌ 推奨しない              | ✅ 推奨                      |
| **ファイルサイズ**   | 大きい                     | 小さい（使用分のみ）         |
| **学習のしやすさ**   | ⭐⭐⭐ 超簡単！            | ⭐⭐ セットアップが必要      |

**初めて学ぶ時は CDN 版で OK！慣れてきたらビルド版に移行しよう**

---

### CDN版でのカスタマイズ方法

<div class="columns-2">

```html
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
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

<body>
  <!-- カスタムカラーが使える！ -->
  <button class="bg-secondary text-white
                 px-6 py-3 rounded-lg m-4">
    ブランドカラーのボタン
  </button>
</body>

</html>
```

</div>

---

## ダークモードの実装 🌙

### ダークモードの有効化（CDN版）

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',  // 'class' または 'media'
  }
</script>
```

- **`'class'`**: 手動で切り替え（`<html class="dark">` を追加/削除）
- **`'media'`**: OS の設定に従う（自動）

---

### dark: プレフィックスの使い方

```html
<!-- ライトモード：白背景＋黒文字、ダークモード：黒背景＋白文字 -->
<div class="bg-white dark:bg-gray-900
            text-gray-900 dark:text-white p-8">
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

<div class="columns-2">

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>ダークモード切り替え</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900
             dark:text-white min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">ダークモード対応アプリ</h1>
      <button
        id="theme-toggle"
        class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
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

</div>

---

### ダークモードのカラー設計

| 要素         | ライトモード      | ダークモード           |
|--------------|-------------------|------------------------|
| 背景         | `bg-white`        | `dark:bg-gray-900`     |
| 2nd 背景     | `bg-gray-100`     | `dark:bg-gray-800`     |
| テキスト     | `text-gray-900`   | `dark:text-white`      |
| 2nd テキスト | `text-gray-600`   | `dark:text-gray-400`   |
| ボーダー     | `border-gray-300` | `dark:border-gray-700` |

**例**:

```html
<div class="border p-6 rounded-lg
            bg-white border-gray-300  
            dark:bg-gray-900 dark:border-gray-700">
  <h3 class="text-gray-900 dark:text-white font-bold mb-2">タイトル</h3>
  <p class="text-gray-600 dark:text-gray-400">説明文</p>
</div>
```

---

## アニメーション＆トランジション ✨

### transition ユーティリティ

スムーズな変化を実現する `transition` クラス

```html
<p>全てのプロパティに transition</p>
<button class="bg-blue-300 hover:bg-red-300 hover:scale-110 transition m-4 p-4">
  Hover してみて
</button>

<p>特定のプロパティだけ transition</p>
<button class="bg-blue-300 hover:bg-red-300 transition-colors m-4 p-4">
  transition-colors: 色だけ変化
</button>

<button class="bg-blue-300 hover:scale-110 transition-transform m-4 p-4">
  transition-transform: 拡大するボタン
</button>

<p>duration と ease のカスタマイズ</p>
<button class="bg-blue-300 hover:bg-red-300 transition duration-1000 ease-in-out m-4 p-4">
  duration-1000 ease-in-out: ゆっくり変化
</button>
```

---

## transform（scale/rotate/translate）

```html
<p>拡大: hover:scale-125</p>
<button class="bg-blue-300 hover:scale-125 transition m-4 p-4">
  1.25 倍に拡大
</button>

<p>回転: hover:rotate-45</p>
<button class="bg-blue-300 hover:rotate-45 transition m-4 p-4">
  45 度回転
</button>

<p>移動: hover:translate-x-8</p>
<button class="bg-blue-300 hover:translate-x-8 transition m-4 p-4">
  右に 2rem 移動
</button>

<p>組み合わせ: hover:scale-110 hover:-translate-y-2 hover:rotate-3</p>
<button class="bg-blue-300 hover:scale-110 hover:-translate-y-2
               hover:rotate-3 transition m-4 p-4">
  複合的な変化
</button>
```

---

## animate- クラス（組み込みアニメーション）

```html
<p>animate-spin: スピン（ローディングアニメに最適）</p>
<div class="animate-spin w-8 h-8 border-4 border-blue-500
            border-t-transparent rounded-full m-6"></div>

<p>animate-pulse: パルス（通知など）</p>
<div class="animate-pulse bg-blue-500 w-12 h-12 rounded-full m-4"></div>

<p>animate-bounce: バウンス</p>
<div class="animate-bounce bg-red-500 w-12 h-12 rounded-full m-4"></div>

<p>animate-ping: ピン（ベル通知など）</p>
<div class="animate-ping bg-green-500 w-4 h-4 rounded-full m-8"></div>
```

**実用例：ローディングスピナー**

```html
<div class="flex flex-col items-center justify-center min-h-screen">
  <div class="animate-spin rounded-full h-16 w-16 border-4
              border-blue-500 border-t-transparent"></div>
  <p class="mt-4 text-gray-600">読み込み中...</p>
</div>
```

---

## 実践的なテクニック

### group と group-hover

親要素に `group` を付けると、子要素で `group-hover:` が使える!

```html
<div class="group w-1/2 bg-white p-6 rounded-lg shadow-lg
            hover:shadow-2xl transition cursor-pointer m-4">
  <img src="https://placehold.jp/400x200.png" alt="画像"
       class="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition">
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
    カードタイトル
  </h3>
  <p class="text-gray-600">
    カードをホバーすると、カード全体に影が付き、画像が拡大、タイトルとボタンの色が変化します。
  </p>
  <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded
                 group-hover:bg-blue-600 transition">
    詳しく見る
  </button>
</div>
```

---

### peer と peer-checked

input に `peer`、兄弟要素に `peer-checked:` を付けると、input の状態に応じて兄弟要素のスタイルが変わる

```html
<p>チェックボックスの状態に応じて、ラベルに取り消し線</p>
<div class="flex items-center space-x-3 m-4">
  <input type="checkbox" id="task" class="peer w-5 h-5 text-blue-500 rounded">
  <label for="task"
         class="text-gray-700 peer-checked:text-blue-500 peer-checked:line-through">
    peer-checked: ラベル
  </label>
</div>

<p>ラジオボタンの状態に応じて、ラベルの色を変更</p>
<div class="flex items-center space-x-3 m-4">
  <input type="radio" id="radio" name="color" value="blue" class="peer">
  <label for="radio" class="cursor-pointer peer-checked:text-blue-500">
    peer-checked: ラベル
  </label>
</div>
```

---

### arbitrary values（任意の値）

Tailwind にない値を使いたい時は、`[]` で任意の値を指定できる

```html
<p>任意のサイズ: w-[**px], h-[**px]</p>
<div class="w-[217px] h-[42px] border m-4 p-2">
  w-[217px] h-[42px]
</div>

<p>任意の色: bg-[#******]</p>
<div class="bg-[#1da1f2] text-white m-4 p-4">
  bg-[#1da1f2]: ブルー
</div>

<p>任意のグリッド: grid-cols-[**_**]</p>
<p>grid-cols-[200px_1fr_200px]</p>
<div class="grid grid-cols-[200px_1fr_200px] gap-4 m-4">
  <div class="border">サイドバー</div>
  <div class="border">メインコンテンツ</div>
  <div class="border">サイドバー</div>
</div>

<p>任意のマージン</p>
<div class="mt-[13px] mb-[7.5rem] border">
  mt-[13px] mb-[7.5rem]
</div>
```

---

## 実践プロジェクト例

### ダッシュボード UI

```html
<div class="flex min-h-screen">
  <!-- サイドバー -->
  <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-blue-600">Dashboard</h1>
    </div>
    <nav class="px-4">
      <a href="#" class="flex items-center px-4 py-3
                         bg-blue-500 text-white rounded-lg mb-2">
        <span class="mr-3">📊</span> ダッシュボード
      </a>
      <a href="#" class="flex items-center px-4 py-3
                         text-gray-600 dark:text-gray-400
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         rounded-lg mb-2 transition">
        <span class="mr-3">👥</span> ユーザー
      </a>
    </nav>
  </aside>
  <!-- メインコンテンツ -->
  <main class="flex-1 p-8">
    <h2 class="text-3xl font-bold mb-2">ダッシュボード</h2>
    <p class="text-gray-600 dark:text-gray-400">ようこそ、管理画面へ</p>
  </main>
</div>
```

---

### 統計カード

```html
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
```

---

## Lesson 4 まとめ

### 学んだこと

- **カスタマイズ設定**: CDN版とビルド版の違い、カスタムカラーの追加
- **ダークモード**: `dark:` プレフィックスで簡単に対応
- **アニメーション**: transition、transform、animate- クラス
- **実践テクニック**: group/group-hover、peer/peer-checked、arbitrary values
- **実践プロジェクト**: ダッシュボード UI の構築

**Tailwind CSS を使えば、どんな UI でも自由自在!** 💪✨

---

<!-- _class: center -->

# Phase 5 総まとめ 📝

---

## Phase 5 で学んだこと

### Bootstrap 🅱️

- グリッドシステム（container → row → col）
- ユーティリティクラス（スペーシング、テキスト、背景色）
- コンポーネント（Navbar、Modal、Form、Carousel など）
- レスポンシブ対応（col-sm、col-md、col-lg）

### Tailwind CSS 🌊

- ユーティリティファーストのアプローチ
- レスポンシブデザイン（sm:、md:、lg: プレフィックス）
- Flexbox と Grid
- ダークモード対応
- アニメーション＆トランジション
