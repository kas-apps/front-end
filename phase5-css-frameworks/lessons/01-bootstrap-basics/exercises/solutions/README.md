# Lesson 1: Bootstrap 基礎 - 解答例と解説

各演習問題の解答例と、重要なポイントを解説します。

---

## 演習 1-1: 2 カラムレイアウト

**ファイル**：[01-01.html](./01-01.html)

### ポイント

✅ **グリッドの基本構造**
- `container` → `row` → `col-*` の順番を守る
- カラムの合計が 12 になる（8 + 4 = 12）

✅ **ユーティリティクラス**
- `bg-light`、`bg-info` で背景色
- `p-3` でパディング
- `mt-5` で上マージン

```html
<div class="container mt-5">
  <div class="row">
    <div class="col-8"><!-- 左カラム --></div>
    <div class="col-4"><!-- 右カラム --></div>
  </div>
</div>
```

---

## 演習 1-2: 色とりどりのボタン

**ファイル**：[01-02.html](./01-02.html)

### ポイント

✅ **ボタンのバリエーション**
- `btn btn-primary` で塗りつぶしボタン
- `btn btn-outline-primary` でアウトラインボタン
- `btn-lg`、`btn-sm` でサイズ変更

✅ **セクション分け**
- 各バリエーションを見出しで区切る
- `mt-5`、`mb-3` でスペーシング

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-primary btn-lg">大きいボタン</button>
```

---

## 演習 1-3: カードコンポーネント

**ファイル**：[01-03.html](./01-03.html)

### ポイント

✅ **カードの構造**
- `card` → `card-img-top` → `card-body` の順
- `card-title`、`card-text` でコンテンツ
- `btn btn-primary` でボタン

✅ **幅の制限**
- `style="max-width: 400px"` で最大幅を設定
- `mx-auto` で中央寄せ

```html
<div class="card" style="max-width: 400px">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">商品名</h5>
    <p class="card-text">説明文</p>
    <a href="#" class="btn btn-primary">カートに追加</a>
  </div>
</div>
```

---

## 演習 1-4: レスポンシブ 3 カラムレイアウト

**ファイル**：[01-04.html](./01-04.html)

### ポイント

✅ **レスポンシブクラスの組み合わせ**
- `col-12 col-md-6 col-lg-4` で 3 段階のレイアウト
  - スマホ：12 カラム = 1 列
  - タブレット：6 カラム = 2 列
  - PC：4 カラム = 3 列

✅ **カードの高さを揃える**
- `h-100` クラスで全てのカードの高さが揃う

✅ **余白の調整**
- `g-4` で row にガター（余白）を設定

```html
<div class="row g-4">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100">
      <!-- カード内容 -->
    </div>
  </div>
  <!-- 繰り返し -->
</div>
```

---

## 演習 1-5: アラートメッセージシステム

**ファイル**：[01-05.html](./01-05.html)

### ポイント

✅ **アラートの種類**
- `alert alert-success`、`alert-info`、`alert-warning`、`alert-danger`

✅ **見出しと区切り線**
- `alert-heading` で見出し
- `<hr />` で区切り線
- `mb-0` で最後の要素の下マージンを削除

✅ **閉じるボタン**
- `alert-dismissible fade show` で閉じる機能を有効化
- `btn-close` で閉じるボタン
- `data-bs-dismiss="alert"` で動作を指定
- **JavaScript の読み込みが必要**

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  ⚠️ 警告メッセージ
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

---

## 演習 1-6: フレキシブルレイアウト

**ファイル**：[01-06.html](./01-06.html)

### ポイント

✅ **Flexbox の有効化**
- `d-flex` で Flexbox を有効化

✅ **横方向の配置**
- `justify-content-center` で中央寄せ
- `justify-content-between` で両端寄せ
- `justify-content-around` で周囲均等

✅ **縦方向の配置**
- `align-items-center` で縦方向中央寄せ
- 親要素に高さ（`style="height: 300px"`）を設定

```html
<!-- パターン1: 中央寄せ -->
<div class="d-flex justify-content-center">
  <div class="bg-primary text-white p-3 m-2">ボックス1</div>
  <div class="bg-primary text-white p-3 m-2">ボックス2</div>
  <div class="bg-primary text-white p-3 m-2">ボックス3</div>
</div>

<!-- パターン2: 両端寄せ -->
<div class="d-flex justify-content-between">
  <!-- ボックス -->
</div>

<!-- パターン3: 縦横中央 -->
<div class="d-flex justify-content-center align-items-center" style="height: 300px">
  <!-- ボックス -->
</div>
```

---

## 演習 1-7: シンプルなランディングページ

**ファイル**：[01-07.html](./01-07.html)

### ポイント

✅ **セクションごとの構成**
1. ヒーローセクション
2. 特徴セクション
3. お客様の声セクション
4. CTA セクション
5. フッター

✅ **ヒーローセクション**
- `bg-primary text-white` で背景と文字色
- `text-center` で中央寄せ
- `py-5` で上下パディング
- `display-4` で大きな見出し
- `lead` でリード文

```html
<div class="bg-primary text-white text-center py-5">
  <div class="container">
    <h1 class="display-4">メインメッセージ</h1>
    <p class="lead">サブメッセージ</p>
    <button class="btn btn-light btn-lg">CTA</button>
  </div>
</div>
```

✅ **特徴セクション（3 カラム）**
- `col-12 col-lg-4` でレスポンシブ
- `h-100` でカードの高さを揃える
- `text-center` で中央寄せ

```html
<div class="row g-4">
  <div class="col-12 col-lg-4">
    <div class="card h-100">
      <div class="card-body text-center">
        <h3>🚀</h3>
        <h5 class="card-title">特徴1</h5>
        <p class="card-text">説明文</p>
      </div>
    </div>
  </div>
  <!-- あと2つ -->
</div>
```

✅ **お客様の声（2 カラム）**
- `col-12 col-md-6` でレスポンシブ
- カード内にアイコン（絵文字）、名前、コメント

✅ **フッター**
- `bg-dark text-white` で暗い背景と白文字
- `text-center` で中央寄せ
- `py-4` でパディング
- `mt-5` で上マージン

```html
<footer class="bg-dark text-white text-center py-4 mt-5">
  <div class="container">
    <p class="mb-0">&copy; 2024 Your Company</p>
  </div>
</footer>
```

---

## 🎯 重要な共通ポイント

### 1. 必須の HTML 構造

全ての解答例で、以下の要素が含まれています：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>...</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- コンテンツ -->

    <!-- Bootstrap JavaScript（Modal、Dropdown、Alert の閉じるボタンなどで必要） -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**重要**：
- `viewport` メタタグは**必須**（レスポンシブに必要）
- Bootstrap JavaScript は `</body>` の直前に配置
- Alert の閉じるボタンなど、インタラクティブな機能を使う場合は JavaScript が必要

---

### 2. グリッドシステムの基本

```
container（外枠）
  └─ row（行）
      ├─ col-*（列1）
      ├─ col-*（列2）
      └─ col-*（列3）
```

**ルール**：
- カラムの合計が 12 になるようにする
- レスポンシブクラスは小さい画面から指定（モバイルファースト）

---

### 3. レスポンシブクラスの組み合わせ

```html
<!-- スマホ:全幅、タブレット:半分、PC:1/3 -->
<div class="col-12 col-md-6 col-lg-4">
  <!-- コンテンツ -->
</div>
```

**考え方**：
- `col-12`：デフォルト（すべての画面サイズ）
- `col-md-6`：768px 以上で半分
- `col-lg-4`：992px 以上で 1/3

---

### 4. よく使うユーティリティクラス

**スペーシング**：
```
mt-5  = margin-top: 3rem
mb-3  = margin-bottom: 1rem
py-5  = padding-top と padding-bottom: 3rem
px-3  = padding-left と padding-right: 1rem
```

**テキスト**：
```
text-center  = 中央寄せ
text-white   = 白文字
text-primary = Primaryカラー
```

**背景**：
```
bg-primary   = Primaryカラーの背景
bg-light     = 薄いグレーの背景
bg-dark      = 濃いグレーの背景
```

**Flexbox**：
```
d-flex                   = Flexboxを有効化
justify-content-center   = 横方向中央寄せ
align-items-center       = 縦方向中央寄せ
```

---

## 💡 デバッグのヒント

解答例と自分のコードを比較する際のチェックポイント：

### グリッドが動かない場合

- [ ] `container` → `row` → `col` の順番になっているか
- [ ] `row` クラスが抜けていないか
- [ ] カラムの合計が 12 を超えていないか

### レスポンシブが効かない場合

- [ ] `viewport` メタタグがあるか
- [ ] レスポンシブクラスのスペルが正しいか（`col-md-6` など）
- [ ] ブラウザの開発者ツールでデバイスをエミュレートしているか

### コンポーネントが動かない場合

- [ ] Bootstrap JavaScript が読み込まれているか
- [ ] 必要なクラスが全て含まれているか
- [ ] `data-bs-*` 属性が正しく設定されているか

---

## 🚀 さらに学ぶために

解答例をベースに、以下のカスタマイズに挑戦してみよう：

1. **色を変える**
   - `btn-primary` を `btn-success` に変更
   - `bg-primary` を `bg-info` に変更

2. **レイアウトを変える**
   - 3 カラムを 4 カラムに変更（`col-lg-3`）
   - 2 カラムの比率を変更（`col-8` と `col-4` など）

3. **要素を追加する**
   - カードにフッターを追加（`card-footer`）
   - ボタンにアイコンを追加

4. **レスポンシブを調整する**
   - ブレークポイントを変更
   - スマホとタブレットで異なるレイアウト

**実験することで、Bootstrap の理解が深まるよ！** 💪

---

**お疲れ様でした！次のレッスンでさらに高度なコンポーネントを学びましょう！** 🎉
