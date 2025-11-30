# Lesson 2: Bootstrap コンポーネント - 解答例と解説

各演習問題の解答例と、重要なポイントを解説します。

---

## 演習 2-1: シンプルな Navbar

**ファイル**：[02-01.html](./02-01.html)

### ポイント

✅ **Navbar の基本構造**
- `navbar navbar-expand-lg`：レスポンシブNavbar
- `navbar-dark bg-dark`：暗い背景に白文字
- `navbar-toggler`：ハンバーガーメニューボタン
- `collapse navbar-collapse`：折りたたみ可能なメニュー

✅ **data-bs-* 属性**
- `data-bs-toggle="collapse"`：折りたたみ機能を有効化
- `data-bs-target="#navbarNav"`：制御対象の ID を指定

✅ **アクティブ状態**
- `nav-link active`：現在のページを示す

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">MyWebsite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <!-- 他のメニュー項目 -->
      </ul>
    </div>
  </div>
</nav>
```

---

## 演習 2-2: Modal を使ったログインフォーム

**ファイル**：[02-02.html](./02-02.html)

### ポイント

✅ **Modal の構造**
- `modal fade`：フェードイン効果
- `modal-dialog` > `modal-content`：Modal のコンテナ
- `modal-header`、`modal-body`、`modal-footer`：3 つのセクション

✅ **Modal の開閉**
- ボタンに `data-bs-toggle="modal"` と `data-bs-target`
- 閉じるボタンに `data-bs-dismiss="modal"`

✅ **フォームのスタイリング**
- `form-label`：ラベル
- `form-control`：input、textarea
- `form-check`：チェックボックス

```html
<!-- Modal を開くボタン -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
  ログイン
</button>

<!-- Modal -->
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
          <!-- 他のフィールド -->
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">キャンセル</button>
        <button type="button" class="btn btn-primary">ログイン</button>
      </div>
    </div>
  </div>
</div>
```

---

## 演習 2-3: お問い合わせフォーム

**ファイル**：[02-03.html](./02-03.html)

### ポイント

✅ **フォームグループ**
- 各フィールドを `mb-3` の div で囲む
- `form-label` → `form-control` の順

✅ **select 要素**
- `form-select` でスタイリング
- 最初の option に `value=""` で空の選択肢

✅ **textarea**
- `form-control` を使用
- `rows` 属性で高さを指定

```html
<form>
  <!-- テキスト入力 -->
  <div class="mb-3">
    <label for="name" class="form-label">名前</label>
    <input type="text" class="form-control" id="name" required />
  </div>

  <!-- select（ドロップダウン） -->
  <div class="mb-3">
    <label for="subject" class="form-label">件名</label>
    <select class="form-select" id="subject" required>
      <option value="">選択してください</option>
      <option value="inquiry">お問い合わせ</option>
      <option value="support">サポート</option>
    </select>
  </div>

  <!-- textarea -->
  <div class="mb-3">
    <label for="message" class="form-label">メッセージ</label>
    <textarea class="form-control" id="message" rows="4" required></textarea>
  </div>

  <!-- チェックボックス -->
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="agree" required />
    <label class="form-check-label" for="agree">プライバシーポリシーに同意します</label>
  </div>

  <button type="submit" class="btn btn-primary">送信</button>
</form>
```

---

## 演習 2-4: 画像ギャラリー with Carousel

**ファイル**：[02-04.html](./02-04.html)

### ポイント

✅ **Carousel の基本構造**
- `carousel slide`：Carousel の基本クラス
- `data-bs-ride="carousel"`：自動再生
- `data-bs-interval="3000"`：3 秒間隔

✅ **インジケーター**
- `carousel-indicators`：ドットインジケーター
- `data-bs-slide-to="0"`：対応するスライド番号

✅ **スライド**
- 最初のスライドに `active` クラス
- `carousel-caption`：キャプション
- `d-none d-md-block`：スマホでは非表示

✅ **コントロール**
- `carousel-control-prev/next`：前へ・次へボタン
- `data-bs-slide="prev/next"`：動作の指定

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <!-- インジケーター -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
  </div>

  <!-- スライド -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>タイトル</h5>
        <p>説明文</p>
      </div>
    </div>
    <!-- 他のスライド -->
  </div>

  <!-- コントロール -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

---

## 演習 2-5: Navbar + Modal + Form の統合

**ファイル**：[02-05.html](./02-05.html)

### ポイント

✅ **コンポーネントの連携**
- Navbar のボタンから Modal を開く
- `data-bs-toggle="modal"` を Navbar のボタンに設定

✅ **ID の一致**
- Modal の ID と `data-bs-target` が一致していることが重要

✅ **レイアウト**
- Navbar の右側にボタンを配置（`ms-auto`）

```html
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      </ul>
      <!-- Modalを開くボタン -->
      <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#contactModal">
        お問い合わせ
      </button>
    </div>
  </div>
</nav>

<!-- Modal -->
<div class="modal fade" id="contactModal" tabindex="-1">
  <!-- Modal の中身 -->
</div>
```

---

## 演習 2-6: 商品カタログページ

**ファイル**：[02-06.html](./02-06.html)

### ポイント

✅ **複数コンポーネントの組み合わせ**
- Navbar、Breadcrumb、Card、Badge、Pagination を統合

✅ **Breadcrumb**
- 現在のページに `active` クラス
- `aria-current="page"` でアクセシビリティ対応

✅ **Badge**
- `badge bg-danger` で「New」ラベル
- カードタイトルに `<span class="badge">` で追加

✅ **Pagination**
- `page-item` と `page-link`
- 現在のページに `active` クラス
- 使用不可なリンクに `disabled` クラス

```html
<!-- Breadcrumb -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Products</li>
  </ol>
</nav>

<!-- Card with Badge -->
<div class="card">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">
      Product Name <span class="badge bg-danger">New</span>
    </h5>
    <p class="card-text">¥2,980</p>
    <a href="#" class="btn btn-primary">カートに追加</a>
  </div>
</div>

<!-- Pagination -->
<nav>
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">前へ</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">次へ</a></li>
  </ul>
</nav>
```

---

## 演習 2-7: Bootstrap コンポーネント総合課題

**ファイル**：[02-07.html](./02-07.html)

### ポイント

✅ **全体構成**
1. Navbar（ヘッダー）
2. Carousel（メインビジュアル）
3. About セクション（プログレスバー）
4. Works セクション（カードグリッド + Modal）
5. Contact Modal
6. Footer

✅ **Progress Bar**
- `progress` と `progress-bar`
- `style="width: XX%"` で進捗を設定
- `bg-*` で色を変更

```html
<div class="progress">
  <div class="progress-bar bg-success" style="width: 90%">HTML 90%</div>
</div>
```

✅ **複数の Modal**
- 各作品カード用の Modal を作成
- ID を一意にする（`workModal1`、`workModal2` など）

✅ **セクションの区切り**
- `container` と `my-5` で各セクションを区切る

✅ **Footer**
- `bg-dark text-white` で暗い背景
- `py-4` でパディング
- `text-center` で中央寄せ

---

## 🎯 重要な共通ポイント

### 1. Bootstrap JavaScript の読み込み

全ての解答例で、Bootstrap JavaScript を読み込んでいます：

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

**重要**：Modal、Navbar の折りたたみ、Carousel などのインタラクティブなコンポーネントには必須！

---

### 2. data-bs-* 属性の正しい使い方

| 属性 | 説明 | 使用例 |
|------|------|--------|
| `data-bs-toggle` | 機能を指定 | `="modal"`, `="collapse"`, `="dropdown"` |
| `data-bs-target` | 制御対象の ID | `="#myModal"`, `="#navbarNav"` |
| `data-bs-dismiss` | 閉じる | `="modal"`, `="alert"` |
| `data-bs-slide` | スライド方向 | `="prev"`, `="next"` |
| `data-bs-slide-to` | スライド番号 | `="0"`, `="1"`, `="2"` |
| `data-bs-ride` | 自動実行 | `="carousel"` |
| `data-bs-interval` | 間隔（ms） | `="3000"` |

---

### 3. ID の一致が重要

Modal や Navbar の折りたたみが動かない原因の多くは、**ID の不一致**！

```html
<!-- ✅ 正しい例 -->
<button data-bs-toggle="modal" data-bs-target="#myModal">開く</button>
<div class="modal" id="myModal"><!-- IDが一致 -->
  <!-- ... -->
</div>

<!-- ❌ 悪い例 -->
<button data-bs-toggle="modal" data-bs-target="#myModal">開く</button>
<div class="modal" id="modal"><!-- IDが違う！ -->
  <!-- ... -->
</div>
```

---

### 4. レスポンシブクラスの活用

カードグリッドでは、レスポンシブクラスを使って柔軟なレイアウトを実現：

```html
<!-- スマホ:1列、タブレット:2列、PC:3列 -->
<div class="row g-4">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card"><!-- カード1 --></div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card"><!-- カード2 --></div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card"><!-- カード3 --></div>
  </div>
</div>
```

---

## 💡 デバッグのヒント

### 問題: Navbar がモバイルで動かない

**確認すべきこと**：
- [ ] Bootstrap JavaScript が読み込まれているか
- [ ] `data-bs-toggle="collapse"` が設定されているか
- [ ] `data-bs-target` と collapse の ID が一致しているか

### 問題: Modal が開かない

**確認すべきこと**：
- [ ] Bootstrap JavaScript が読み込まれているか
- [ ] `data-bs-toggle="modal"` が設定されているか
- [ ] `data-bs-target` と Modal の ID が一致しているか
- [ ] Modal に `tabindex="-1"` が設定されているか

### 問題: Carousel が動かない

**確認すべきこと**：
- [ ] Bootstrap JavaScript が読み込まれているか
- [ ] 最初のスライドに `active` クラスがあるか
- [ ] `data-bs-target` が Carousel の ID と一致しているか

---

## 🚀 さらに学ぶために

解答例をベースに、以下のカスタマイズに挑戦してみよう：

1. **Navbar のカスタマイズ**
   - 色を変える（`bg-primary`、`bg-success` など）
   - ドロップダウンメニューを追加
   - 検索ボックスを追加

2. **Modal のカスタマイズ**
   - サイズを変更（`modal-sm`、`modal-lg`、`modal-xl`）
   - 全画面 Modal（`modal-fullscreen`）
   - 複数の Modal を連携

3. **Carousel のカスタマイズ**
   - 自動再生間隔を変更
   - フェード効果（`carousel-fade`）
   - インジケーターのスタイルを変更

4. **Form のカスタマイズ**
   - バリデーションスタイルを追加（`is-valid`、`is-invalid`）
   - 水平フォームに変更
   - インライン フォームに変更

**実験することで、Bootstrap の理解が深まるよ！** 💪

---

**お疲れ様でした！次のレッスンで Tailwind CSS を学びましょう！** 🎉
