# Lesson 2: Bootstrap コンポーネント 🎯

**学習目標**：Bootstrap の高度なコンポーネント（Navbar、Modal、Carousel など）を使って、プロフェッショナルな UI を爆速で作れるようになる

---

## なぜ Bootstrap コンポーネントを学ぶの？

Lesson 1 で学んだグリッドシステムとユーティリティクラスは、Bootstrap の**基礎**だったね！

でも、実際の Web サイトには、もっと複雑で高度な UI が必要だよ：

- 📱 **レスポンシブなナビゲーションメニュー**（ハンバーガーメニュー付き）
- 🖼️ **画像スライダー**（カルーセル）
- 💬 **モーダルダイアログ**（ポップアップウィンドウ）
- 📝 **美しいフォーム**（入力フィールド、ボタン、バリデーション）
- 🎨 **その他の便利な UI パーツ**

これらを**手書き CSS と JavaScript で実装すると...**

❌ **大変なこと**：
- レスポンシブ対応に何百行もコードが必要
- ブラウザ間の互換性を気にする必要がある
- JavaScript のイベント処理が複雑
- アクセシビリティ対応が難しい

✅ **Bootstrap コンポーネントを使うと**：
- **コピペだけ**で高度な UI が完成
- **レスポンシブ対応**が自動
- **JavaScript も自動**で動く
- **アクセシビリティ対応済み**

**たとえるなら...**
- **手書き実装** = ゼロから家を建てる
- **Bootstrap コンポーネント** = 組み立て式の高品質な家を使う

**このレッスンで学ぶコンポーネントを使えば、本格的な Web サイトが作れるようになる！** 🚀

### このレッスンで学ぶこと

- 🧭 Navbar（レスポンシブナビゲーション）
- 🃏 Card の高度な使い方
- 🗨️ Modal（モーダルダイアログ）
- 📝 Form（フォーム要素のスタイリング）
- 🎠 Carousel（画像スライダー）
- 🏷️ その他の便利なコンポーネント（Badge、Breadcrumb、Pagination）

---

## Navbar：レスポンシブナビゲーション 🧭

**Navbar** は、Web サイトの**最も重要な UI の一つ**！ヘッダーメニュー、ロゴ、検索ボックスなど、全部含められるよ。

### Navbar の特徴

✨ **レスポンシブ対応**
- PC：横並びメニュー
- スマホ：ハンバーガーメニュー（自動で折りたたみ）

🎨 **カスタマイズ可能**
- 色、配置、サイズを簡単に変更
- ロゴ、検索ボックス、ボタンを追加できる

📱 **モバイルファースト**
- タッチデバイスでも快適に動作

### 基本的な Navbar

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Navbar</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!-- ロゴ・ブランド名 -->
        <a class="navbar-brand" href="#">My Website</a>

        <!-- ハンバーガーメニューボタン（モバイル用） -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- メニューコンテンツ -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- コンテンツ -->
    <div class="container mt-5">
      <h1>Navbar の例</h1>
      <p>画面幅を狭くすると、メニューがハンバーガーアイコンになります！</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このコードのポイント**：

- `navbar navbar-expand-lg`：基本クラス（lg = 992px以上で横並び）
- `navbar-dark bg-dark`：暗い背景に白文字
- `navbar-toggler`：ハンバーガーメニューボタン
- `data-bs-toggle="collapse"`：折りたたみ機能を有効化
- `collapse navbar-collapse`：折りたたみ可能なコンテンツ

**PC で表示**：横並びメニュー
**スマホで表示**：ハンバーガーメニュー（クリックで開閉）

---

### Navbar のカスタマイズ

#### 1. 色を変える

```html
<!-- 明るい背景 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- ... -->
</nav>

<!-- Primaryカラー -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <!-- ... -->
</nav>

<!-- カスタム色 -->
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #6610f2">
  <!-- ... -->
</nav>
```

---

#### 2. 検索ボックスを追加

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>

      <!-- 検索フォーム -->
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="検索" />
        <button class="btn btn-outline-success" type="submit">検索</button>
      </form>
    </div>
  </div>
</nav>
```

**ポイント**：
- `me-auto`：メニューを左寄せにして、検索ボックスを右に配置
- `d-flex`：検索ボックスとボタンを横並び

---

#### 3. ドロップダウンメニュー

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>

        <!-- ドロップダウン -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web Design</a></li>
            <li><a class="dropdown-item" href="#">App Development</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Consulting</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**ポイント**：
- `dropdown`：ドロップダウンを有効化
- `dropdown-toggle`：矢印アイコンを表示
- `data-bs-toggle="dropdown"`：クリックで開閉
- `dropdown-menu`：ドロップダウンの中身
- `dropdown-divider`：区切り線

---

## Modal：モーダルダイアログ 🗨️

**Modal** は、ページ上に重ねて表示される**ポップアップウィンドウ**！ログインフォーム、画像の拡大表示、確認ダイアログなど、様々な用途で使えるよ。

### Modal の特徴

✨ **JavaScript 不要**
- Bootstrap の JavaScript が全部やってくれる
- `data-bs-*` 属性だけで動く

🎨 **柔軟なレイアウト**
- ヘッダー、本文、フッターを自由に構成
- サイズも変更可能（小、中、大、超大）

📱 **レスポンシブ**
- スマホでも見やすく表示

### 基本的な Modal

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Modal</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h1>Modal の例</h1>

      <!-- Modalを開くボタン -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Modal を開く
      </button>

      <!-- Modal本体 -->
      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modalヘッダー -->
            <div class="modal-header">
              <h5 class="modal-title">Modal のタイトル</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal本文 -->
            <div class="modal-body">
              <p>ここにモーダルの内容が入ります。</p>
              <p>フォーム、画像、テキストなど、何でも配置できます！</p>
            </div>

            <!-- Modalフッター -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                閉じる
              </button>
              <button type="button" class="btn btn-primary">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このコードのポイント**：

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

### Modal に Form を入れる

```html
<!-- Modal を開くボタン -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
  ログイン
</button>

<!-- ログインModal -->
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
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="remember" />
            <label class="form-check-label" for="remember">
              ログイン状態を保持する
            </label>
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

**よくある用途**：
- ログインフォーム
- 確認ダイアログ
- 画像の拡大表示
- 詳細情報の表示

---

## Form：美しいフォーム 📝

Bootstrap の**Form コンポーネント**を使えば、HTML5 のフォーム要素を美しくスタイリングできるよ！

### Form の基本

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Form</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>お問い合わせフォーム</h2>

      <form>
        <!-- 名前 -->
        <div class="mb-3">
          <label for="name" class="form-label">お名前</label>
          <input type="text" class="form-control" id="name" placeholder="山田太郎" required />
        </div>

        <!-- メールアドレス -->
        <div class="mb-3">
          <label for="email" class="form-label">メールアドレス</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="example@email.com"
            required
          />
          <div class="form-text">このメールアドレスは公開されません。</div>
        </div>

        <!-- 件名 -->
        <div class="mb-3">
          <label for="subject" class="form-label">件名</label>
          <select class="form-select" id="subject" required>
            <option value="">選択してください</option>
            <option value="inquiry">お問い合わせ</option>
            <option value="feedback">フィードバック</option>
            <option value="other">その他</option>
          </select>
        </div>

        <!-- メッセージ -->
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

        <!-- 送信ボタン -->
        <button type="submit" class="btn btn-primary">送信</button>
      </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このコードのポイント**：

- `form-label`：ラベルのスタイリング
- `form-control`：input、textarea のスタイリング
- `form-select`：select（ドロップダウン）のスタイリング
- `form-check`：チェックボックス・ラジオボタンのコンテナ
- `form-check-input`：チェックボックス・ラジオボタン本体
- `form-check-label`：チェックボックス・ラジオボタンのラベル
- `form-text`：ヘルプテキスト（薄いグレー）
- `mb-3`：各フォームグループの下マージン

---

### バリデーション（検証）スタイル

Bootstrap には、フォームの検証状態を視覚的に表示する機能があるよ！

```html
<form class="was-validated">
  <!-- 正しい入力 -->
  <div class="mb-3">
    <label for="validInput" class="form-label">正しい入力</label>
    <input type="text" class="form-control is-valid" id="validInput" value="OK" required />
    <div class="valid-feedback">正しく入力されています！</div>
  </div>

  <!-- エラーのある入力 -->
  <div class="mb-3">
    <label for="invalidInput" class="form-label">エラーのある入力</label>
    <input type="text" class="form-control is-invalid" id="invalidInput" required />
    <div class="invalid-feedback">この項目は必須です。</div>
  </div>

  <button type="submit" class="btn btn-primary">送信</button>
</form>
```

**ポイント**：
- `is-valid`：正しい入力（緑の枠線）
- `is-invalid`：エラーのある入力（赤の枠線）
- `valid-feedback`：成功メッセージ（緑）
- `invalid-feedback`：エラーメッセージ（赤）

---

### 水平フォーム（ラベルと入力を横並び）

```html
<form>
  <div class="row mb-3">
    <label for="horizontalEmail" class="col-sm-2 col-form-label">メール</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="horizontalEmail" />
    </div>
  </div>

  <div class="row mb-3">
    <label for="horizontalPassword" class="col-sm-2 col-form-label">パスワード</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="horizontalPassword" />
    </div>
  </div>

  <button type="submit" class="btn btn-primary">ログイン</button>
</form>
```

**ポイント**：
- `row`：グリッドシステムを使用
- `col-sm-2`：ラベルの幅（2 カラム）
- `col-sm-10`：入力フィールドの幅（10 カラム）
- `col-form-label`：ラベルを縦方向中央寄せ

---

## Carousel：画像スライダー 🎠

**Carousel** は、複数の画像やコンテンツをスライドショー形式で表示できるコンポーネント！

### 基本的な Carousel

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Carousel</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>画像スライダーの例</h2>

      <!-- Carousel -->
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <!-- インジケーター（下部のドット） -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        <!-- スライド本体 -->
        <div class="carousel-inner">
          <!-- スライド1 -->
          <div class="carousel-item active">
            <img
              src="https://via.placeholder.com/800x400/0d6efd/ffffff?text=Slide+1"
              class="d-block w-100"
              alt="スライド1"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>最初のスライド</h5>
              <p>ここに説明文が入ります。</p>
            </div>
          </div>

          <!-- スライド2 -->
          <div class="carousel-item">
            <img
              src="https://via.placeholder.com/800x400/198754/ffffff?text=Slide+2"
              class="d-block w-100"
              alt="スライド2"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>2番目のスライド</h5>
              <p>別の説明文がここに。</p>
            </div>
          </div>

          <!-- スライド3 -->
          <div class="carousel-item">
            <img
              src="https://via.placeholder.com/800x400/dc3545/ffffff?text=Slide+3"
              class="d-block w-100"
              alt="スライド3"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>3番目のスライド</h5>
              <p>最後のスライドです。</p>
            </div>
          </div>
        </div>

        <!-- 前へボタン -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">前へ</span>
        </button>

        <!-- 次へボタン -->
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">次へ</span>
        </button>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このコードのポイント**：

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
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <!-- ... -->
</div>

<!-- 自動再生しない（手動操作のみ） -->
<div id="carouselExample" class="carousel slide" data-bs-ride="false">
  <!-- ... -->
</div>
```

---

## その他の便利なコンポーネント 🏷️

Bootstrap には、他にもたくさんの便利なコンポーネントがあるよ！

### Badge（バッジ）

小さなラベルや通知を表示するのに便利！

```html
<h1>見出し <span class="badge bg-secondary">New</span></h1>
<h2>メール <span class="badge bg-danger">5</span></h2>

<button type="button" class="btn btn-primary">
  通知 <span class="badge bg-light text-dark">4</span>
</button>

<!-- 丸いバッジ（pill） -->
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
```

---

### Breadcrumb（パンくずリスト）

現在位置を示すナビゲーション！

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">カテゴリー</a></li>
    <li class="breadcrumb-item active" aria-current="page">現在のページ</li>
  </ol>
</nav>
```

---

### Pagination（ページネーション）

ページ送り機能！

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

進捗状況を表示！

```html
<!-- 基本のプログレスバー -->
<div class="progress" role="progressbar">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<!-- 色付きプログレスバー -->
<div class="progress mt-3">
  <div class="progress-bar bg-success" style="width: 50%">50%</div>
</div>

<div class="progress mt-3">
  <div class="progress-bar bg-info" style="width: 75%">75%</div>
</div>

<div class="progress mt-3">
  <div class="progress-bar bg-warning" style="width: 100%">完了！</div>
</div>

<!-- 縞模様のプログレスバー -->
<div class="progress mt-3">
  <div class="progress-bar progress-bar-striped" style="width: 60%">60%</div>
</div>

<!-- アニメーション付き -->
<div class="progress mt-3">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%">
    読み込み中...
  </div>
</div>
```

---

### Spinner（スピナー・ローディング）

読み込み中を表示！

```html
<!-- 基本のスピナー -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">読み込み中...</span>
</div>

<!-- 色付きスピナー -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-secondary"></div>
<div class="spinner-border text-success"></div>
<div class="spinner-border text-danger"></div>

<!-- 小さいスピナー -->
<div class="spinner-border spinner-border-sm"></div>

<!-- 成長するスピナー -->
<div class="spinner-grow text-primary"></div>
<div class="spinner-grow text-success"></div>

<!-- ボタン内のスピナー -->
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status"></span>
  読み込み中...
</button>
```

---

## 実践例：コンポーネントを組み合わせた本格的なページ 🚀

これまで学んだコンポーネントを全部使って、**本格的なウェブページ**を作ってみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap 総合例</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">My Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Works</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Carousel -->
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1200x400/0d6efd/ffffff?text=Welcome" class="d-block w-100" alt="Welcome" />
          <div class="carousel-caption">
            <h1>Welcome to My Portfolio</h1>
            <p>最高の作品をお届けします</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1200x400/198754/ffffff?text=Projects" class="d-block w-100" alt="Projects" />
          <div class="carousel-caption">
            <h1>Our Projects</h1>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- コンテンツ -->
    <div class="container my-5">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Portfolio</li>
        </ol>
      </nav>

      <!-- カードグリッド -->
      <h2 class="mb-4">Works</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Work 1" />
            <div class="card-body">
              <h5 class="card-title">
                Project 1 <span class="badge bg-primary">New</span>
              </h5>
              <p class="card-text">プロジェクトの説明がここに入ります。</p>
              <a href="#" class="btn btn-primary">詳細を見る</a>
            </div>
          </div>
        </div>
        <!-- 他のカードも同様 -->
      </div>
    </div>

    <!-- Contact Modal -->
    <div class="modal fade" id="contactModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">お問い合わせ</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="contactEmail" class="form-label">メールアドレス</label>
                <input type="email" class="form-control" id="contactEmail" required />
              </div>
              <div class="mb-3">
                <label for="contactMessage" class="form-label">メッセージ</label>
                <textarea class="form-control" id="contactMessage" rows="3" required></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            <button type="button" class="btn btn-primary">送信</button>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**この例には以下が含まれています**：
- ✅ Navbar（レスポンシブメニュー）
- ✅ Carousel（画像スライダー）
- ✅ Breadcrumb（パンくずリスト）
- ✅ Card（作品カード）
- ✅ Badge（New ラベル）
- ✅ Modal（お問い合わせフォーム）

---

## バイブコーディング実践 🤖：AI と一緒にコンポーネントを使おう！

### AI への良い指示の例

#### 例 1: Navbar

✅ **良い指示**：
```
Bootstrap 5のNavbarを作ってください。

【仕様】
- 背景色：Primary
- ロゴ：「MyApp」
- メニュー：Home、Features、Pricing、Contact
- 右側に「ログイン」ボタン（白背景）
- レスポンシブ対応（992px未満でハンバーガーメニュー）
- Contactリンクはモーダルを開く（data-bs-toggle="modal"）
```

❌ **悪い指示**：
```
ナビゲーションメニューを作って
```

---

#### 例 2: Modal

✅ **良い指示**：
```
Bootstrap 5のModalを使って、画像ギャラリーを作ってください。

【仕様】
- サムネイル画像（3枚）をクリックすると、Modalで拡大表示
- Modalには画像のタイトルと説明文を表示
- Modalサイズ：modal-lg（大きいサイズ）
- 閉じるボタンを含める
```

---

#### 例 3: Carousel + Card

✅ **良い指示**：
```
Bootstrap 5を使って、以下の構成のページを作ってください：

【Carouselセクション】
- 3枚の画像スライド
- 自動再生（5秒間隔）
- 前へ・次へボタン付き
- インジケーター（ドット）付き

【Cardセクション】
- Carouselの下に3カラムのカードレイアウト
- 各カードに画像、タイトル、説明、「詳細」ボタン
- レスポンシブ（スマホ:1列、PC:3列）
```

---

### 生成されたコードの読み方：チェックリスト

#### ✅ チェックリスト 1: Navbar

- [ ] `navbar-expand-{breakpoint}` が設定されているか
- [ ] `navbar-toggler` ボタンがあるか
- [ ] `collapse navbar-collapse` が設定されているか
- [ ] `data-bs-toggle="collapse"` と `data-bs-target` が正しく設定されているか
- [ ] モバイルで動作するか（画面を狭くして確認）

```html
<!-- ✅ 正しい例 -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

#### ✅ チェックリスト 2: Modal

- [ ] Modal の ID が一意か
- [ ] `data-bs-toggle="modal"` と `data-bs-target` が正しく設定されているか
- [ ] `modal-dialog` > `modal-content` の構造になっているか
- [ ] 閉じるボタン（`btn-close` または `data-bs-dismiss="modal"`）があるか
- [ ] Bootstrap JavaScript が読み込まれているか

```html
<!-- ✅ 正しい例 -->
<!-- ボタン -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

---

#### ✅ チェックリスト 3: Carousel

- [ ] `carousel slide` クラスが設定されているか
- [ ] 最初のスライドに `active` クラスがあるか
- [ ] `data-bs-target` が Carousel の ID と一致しているか
- [ ] 前へ・次へボタンの `data-bs-slide` が正しく設定されているか

```html
<!-- ✅ 正しい例 -->
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

---

### よくある問題と修正方法

#### 問題 1: Navbar がモバイルで開閉しない

**原因**：Bootstrap JavaScript が読み込まれていない、または ID が一致していない

```html
<!-- ❌ 問題のあるコード -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav"><!-- IDが違う！ -->
  <!-- ... -->
</div>

<!-- ✅ 修正後 -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <!-- ... -->
</div>
```

---

#### 問題 2: Modal が開かない

**原因**：ID の不一致、または JavaScript 未読み込み

```html
<!-- ❌ 問題のあるコード -->
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
<div class="modal" id="modal"><!-- IDが違う！ -->
  <!-- ... -->
</div>

<!-- ✅ 修正後 -->
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
<div class="modal fade" id="myModal" tabindex="-1">
  <!-- ... -->
</div>
```

---

#### 問題 3: Carousel が自動再生しない

**原因**：`data-bs-ride="carousel"` がない

```html
<!-- ❌ 問題のあるコード -->
<div id="carousel" class="carousel slide">
  <!-- ... -->
</div>

<!-- ✅ 修正後 -->
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <!-- ... -->
</div>
```

---

## まとめ 📝

このレッスンでは、**Bootstrap の高度なコンポーネント**を学んだよ！

### 学んだこと

✅ **Navbar**
- レスポンシブナビゲーション
- ハンバーガーメニュー
- ドロップダウン、検索ボックス

✅ **Modal**
- モーダルダイアログの作成
- サイズ変更
- フォームの組み込み

✅ **Form**
- フォーム要素のスタイリング
- バリデーションスタイル
- 水平フォーム

✅ **Carousel**
- 画像スライダー
- 自動再生
- インジケーターとコントロール

✅ **その他のコンポーネント**
- Badge、Breadcrumb、Pagination
- Progress、Spinner

### 重要なポイント

1. **data-bs-* 属性の理解**：
   - JavaScript を書かずに動的な機能が使える
   - ID の一致が重要

2. **公式ドキュメントを活用**：
   - コンポーネントのコード例をコピペ
   - オプションをカスタマイズ

3. **Bootstrap JavaScript が必須**：
   - Modal、Navbar、Carousel などのインタラクティブなコンポーネントには必要
   - `</body>` 直前に読み込む

### 次のステップ 🚀

Bootstrap の基本とコンポーネントをマスターしたら、次は **Lesson 3: Tailwind CSS 基礎**で、もう一つの人気フレームワークを学ぼう！

---

## 演習問題 🎯

理解を深めるために、実際に手を動かして練習しよう！

👉 [演習問題はこちら](./exercises/README.md)

- **基礎編**（3問）：Navbar、Modal、Form の基本
- **応用編**（3問）：Carousel、コンポーネントの組み合わせ
- **チャレンジ編**（1問）：全コンポーネントを使った総合課題

**頑張って！** 💪
