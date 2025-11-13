# Lesson 1: Bootstrap 基礎 🅱️

**学習目標**：Bootstrap の基本を理解し、グリッドシステムとユーティリティクラスを使って、レスポンシブなレイアウトを爆速で作れるようになる

---

## なぜ Bootstrap を学ぶの？

想像してみて。**美しいレスポンシブなウェブサイトを、たった数行のコードで作れたら**どう？

Phase 1-2 で学んだ CSS は超重要！でも、実際のプロジェクトでは：

❌ **手書き CSS の現実**：
- レスポンシブ対応に何十行も書く必要がある
- ブラウザ間の互換性を気にしないといけない
- デザインの統一感を保つのが大変
- ボタン一つ作るのに 20 行以上の CSS が必要

✅ **Bootstrap を使うと**：
- レスポンシブ対応が**クラス名一つ**で完成
- ブラウザ互換性は**Bootstrap が保証**
- 統一感のあるデザインが**自動的に適用**
- ボタンは `class="btn btn-primary"` だけで完成

**たとえるなら...**

- **手書き CSS** = 食材から全部自分で調理する料理
- **Bootstrap** = 高品質な調理済み食材を組み合わせる料理

どちらも大切だけど、**Bootstrap を使えば開発スピードが10倍になる**！🚀

### このレッスンで学ぶこと

- 🎯 Bootstrap とは何か、CDN での導入方法
- 📏 グリッドシステム（container、row、col）
- 📱 レスポンシブクラス（col-sm、col-md、col-lg）
- 🎨 ユーティリティクラス（margin、padding、text、color）
- 🔘 基本コンポーネント（Button、Card、Alert）
- ⚡ 実践例（ランディングページの基礎）

---

## Bootstrap とは何か？

**Bootstrap** は、**世界で最も人気のある CSS フレームワーク**だよ！

### Bootstrap の特徴

✨ **すぐ使える美しいコンポーネント**
- ボタン、カード、ナビゲーションなど、40種類以上のコンポーネント
- プロのデザイナーが作った統一感のあるデザイン
- コピペするだけで使える

📱 **モバイルファースト設計**
- スマホ対応が標準装備
- タブレット、PC にも自動対応
- レスポンシブグリッドシステム

🌐 **クロスブラウザ対応**
- Chrome、Firefox、Safari、Edge すべてで動く
- 古いブラウザもサポート（IE11 は Bootstrap 4 まで）

🎨 **カスタマイズ可能**
- 色やサイズを簡単に変更できる
- 自分の CSS を追加して拡張できる

📖 **充実したドキュメント**
- 公式ドキュメントが超分かりやすい
- コード例が豊富
- コミュニティが巨大（困ったらググればすぐ解決）

### Bootstrap の歴史

- **2011 年**：Twitter 社が開発・公開（当初は Twitter Bootstrap）
- **2013 年**：Bootstrap 3 リリース（モバイルファースト化）
- **2018 年**：Bootstrap 4 リリース（Flexbox 採用）
- **2021 年**：Bootstrap 5 リリース（jQuery 依存を削除、現在の最新版）

**現在、世界中の 2000 万以上のウェブサイトで使われている！** 🌍

---

## Bootstrap の導入：CDN で超簡単！

Bootstrap を使うには、**たった 2 行追加するだけ**でOK！

### CDN（Content Delivery Network）とは？

**CDN** = インターネット上のファイル配信サービス

- ファイルをダウンロードする必要なし
- 高速で安定した配信
- 世界中のどこからでもアクセス可能

### 基本的な HTML テンプレート

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
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>Hello, Bootstrap!</h1>

    <!-- Bootstrap JavaScript（Modal、Dropdownなどで必要） -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**重要なポイント**：
- `<head>` 内に CSS を読み込む
- `</body>` の直前に JavaScript を読み込む
- `viewport` メタタグは**必須**（レスポンシブに必要）

### 最初の Bootstrap ボタン

早速、Bootstrap の力を体感してみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrapボタン</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h1>Bootstrap ボタンの例</h1>

      <!-- 通常のボタン（Bootstrap なし） -->
      <button>普通のボタン</button>

      <!-- Bootstrap ボタン -->
      <button class="btn btn-primary">Primary ボタン</button>
      <button class="btn btn-secondary">Secondary ボタン</button>
      <button class="btn btn-success">Success ボタン</button>
      <button class="btn btn-danger">Danger ボタン</button>
      <button class="btn btn-warning">Warning ボタン</button>
      <button class="btn btn-info">Info ボタン</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このコードを実行すると...**
- 普通のボタン：シンプルで地味
- Bootstrap ボタン：美しい色、丸み、ホバー効果が自動適用！

**たった `class="btn btn-primary"` だけで、プロ級のボタンが完成！** ✨

---

## グリッドシステム：Bootstrap の心臓部！

Bootstrap の**最も重要な機能**が、この**グリッドシステム**だよ！

### グリッドシステムの基本概念

Bootstrap のグリッドは、**画面を 12 分割**して要素を配置する仕組み。

```
画面全体
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│1│2│3│4│5│6│7│8│9│10│11│12│  ← 12カラム
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘

例1: 3カラムレイアウト
┌────┬────┬────┐
│ 4  │ 4  │ 4  │  ← それぞれ4カラム分
└────┴────┴────┘

例2: 2カラムレイアウト（左：広い、右：狭い）
┌────────┬────┐
│   8    │ 4  │
└────────┴────┘
```

**なぜ 12 分割？**
- 12 は 2、3、4、6 で割り切れる
- 様々なレイアウトに対応できる
- 柔軟性が高い

### グリッドシステムの 3 つの要素

Bootstrap のグリッドは、**3 段階の入れ子構造**になっているよ。

```
1. Container（コンテナ）
   ↓
2. Row（行）
   ↓
3. Column（列）
```

#### 1. Container（コンテナ）

**役割**：全体を囲む外枠。中央寄せと左右の余白を自動で設定。

```html
<!-- 固定幅のコンテナ（画面サイズに応じて幅が変わる） -->
<div class="container">
  <!-- コンテンツ -->
</div>

<!-- 全幅のコンテナ（画面幅いっぱいに広がる） -->
<div class="container-fluid">
  <!-- コンテンツ -->
</div>
```

#### 2. Row（行）

**役割**：カラムを横並びにするための行。

```html
<div class="container">
  <div class="row">
    <!-- ここにカラムを配置 -->
  </div>
</div>
```

#### 3. Column（列）

**役割**：実際のコンテンツを配置する列。

```html
<div class="container">
  <div class="row">
    <div class="col">カラム1</div>
    <div class="col">カラム2</div>
    <div class="col">カラム3</div>
  </div>
</div>
```

### グリッドシステムの基本例

#### 例 1: 等幅の 3 カラム

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3カラムレイアウト</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      /* 見やすくするための装飾 */
      .col {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
        padding: 20px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>等幅の3カラム</h2>
      <div class="row">
        <!-- col だけ指定すると、自動的に等幅になる -->
        <div class="col">カラム 1</div>
        <div class="col">カラム 2</div>
        <div class="col">カラム 3</div>
      </div>
    </div>
  </body>
</html>
```

**結果**：3 つのカラムが等幅で横並びになる！

---

#### 例 2: カラム幅を指定する

カラム数を指定して、幅を調整できるよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>カラム幅指定</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      .col,
      [class*="col-"] {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
        padding: 20px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>カラム幅を指定</h2>

      <!-- 例1: 4 + 8 = 12（左：狭い、右：広い） -->
      <div class="row">
        <div class="col-4">4カラム分（1/3）</div>
        <div class="col-8">8カラム分（2/3）</div>
      </div>

      <!-- 例2: 3 + 3 + 6 = 12 -->
      <div class="row">
        <div class="col-3">3カラム分</div>
        <div class="col-3">3カラム分</div>
        <div class="col-6">6カラム分</div>
      </div>

      <!-- 例3: 6 + 6 = 12（半々） -->
      <div class="row">
        <div class="col-6">6カラム分（1/2）</div>
        <div class="col-6">6カラム分（1/2）</div>
      </div>

      <!-- 例4: 12 = 全幅 -->
      <div class="row">
        <div class="col-12">12カラム分（全幅）</div>
      </div>
    </div>
  </body>
</html>
```

**ポイント**：
- `col-4` = 4/12（約 33%）
- `col-6` = 6/12（50%）
- `col-8` = 8/12（約 67%）
- `col-12` = 12/12（100%）
- **合計が 12 になるように**組み合わせる

---

## レスポンシブグリッド：画面サイズに応じて自動調整！

Bootstrap の真骨頂、**レスポンシブグリッド**を学ぼう！

### ブレークポイント：画面サイズの区切り

Bootstrap は、画面サイズを **6 段階** に分類しているよ。

| サイズ       | プレフィックス | 画面幅             | デバイス例           |
| ------------ | -------------- | ------------------ | -------------------- |
| Extra small  | なし（デフォルト） | < 576px        | スマホ（縦）         |
| Small        | `sm`           | ≥ 576px            | スマホ（横）         |
| Medium       | `md`           | ≥ 768px            | タブレット           |
| Large        | `lg`           | ≥ 992px            | PC（小）             |
| Extra large  | `xl`           | ≥ 1200px           | PC（中）             |
| Extra extra large | `xxl`     | ≥ 1400px           | PC（大）             |

### レスポンシブクラスの書き方

```
col-{breakpoint}-{number}
```

**例**：
- `col-12` = すべての画面サイズで 12 カラム（全幅）
- `col-md-6` = 中画面（768px）以上で 6 カラム（半分）
- `col-lg-4` = 大画面（992px）以上で 4 カラム（1/3）

### レスポンシブの実例：モバイル → タブレット → PC

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>レスポンシブグリッド</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      [class*="col-"] {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
        padding: 20px;
        margin-bottom: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>レスポンシブ3カラムレイアウト</h2>
      <p>画面幅を変えてみて！</p>

      <div class="row">
        <!--
          スマホ（< 768px）: 12カラム = 縦並び（全幅）
          タブレット（≥ 768px）: 6カラム = 2列
          PC（≥ 992px）: 4カラム = 3列
        -->
        <div class="col-12 col-md-6 col-lg-4">
          <h3>カード 1</h3>
          <p>スマホ:縦並び<br />タブレット:2列<br />PC:3列</p>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <h3>カード 2</h3>
          <p>スマホ:縦並び<br />タブレット:2列<br />PC:3列</p>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <h3>カード 3</h3>
          <p>スマホ:縦並び<br />タブレット:2列<br />PC:3列</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

**この魔法のような動作を理解しよう！**

- 📱 **スマホ（< 768px）**：`col-12` が適用 → 縦並び（1列）
- 📱 **タブレット（≥ 768px）**：`col-md-6` が適用 → 2列（半分ずつ）
- 💻 **PC（≥ 992px）**：`col-lg-4` が適用 → 3列（1/3ずつ）

**たった 1 行のクラスで、3 つのレイアウトに対応！これが Bootstrap の力！** 💪

---

### 複雑なレスポンシブレイアウト

実際のプロジェクトでよく使う、複雑なレイアウトの例。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>実践的なレスポンシブレイアウト</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      .main-content {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
        padding: 20px;
        min-height: 300px;
      }
      .sidebar {
        background-color: #fff3cd;
        border: 2px solid #ffc107;
        padding: 20px;
        min-height: 300px;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>ブログレイアウト（メイン + サイドバー）</h2>
      <p>画面幅を変えてレイアウトの変化を見てみよう！</p>

      <div class="row">
        <!--
          メインコンテンツ
          スマホ: 12カラム（全幅）
          タブレット以上: 8カラム（2/3）
        -->
        <div class="col-12 col-md-8">
          <div class="main-content">
            <h3>メインコンテンツ</h3>
            <p>ブログ記事や主要なコンテンツがここに入ります。</p>
            <p>タブレット・PCでは画面の2/3を占めます。</p>
            <p>スマホでは全幅になり、サイドバーの上に表示されます。</p>
          </div>
        </div>

        <!--
          サイドバー
          スマホ: 12カラム（全幅、メインの下）
          タブレット以上: 4カラム（1/3、メインの右）
        -->
        <div class="col-12 col-md-4">
          <div class="sidebar">
            <h3>サイドバー</h3>
            <ul>
              <li>カテゴリー</li>
              <li>最新記事</li>
              <li>タグ</li>
              <li>検索</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

**このレイアウトの動作**：
- 💻 **PC/タブレット**：メイン（8）+ サイドバー（4）が横並び
- 📱 **スマホ**：メイン（12）→ サイドバー（12）が縦並び

**メディアクエリを 1 行も書かずに、レスポンシブ対応完成！** ✨

---

## ユーティリティクラス：超便利な小技集！

Bootstrap には、**よく使うスタイルを簡単に適用できるクラス**がたくさん用意されているよ！

### スペーシング（余白）：m と p

**フォーマット**：`{property}{sides}-{size}`

- **property**：`m`（margin）または `p`（padding）
- **sides**：方向（`t`=上、`b`=下、`s`=左、`e`=右、`x`=左右、`y`=上下）
- **size**：0〜5（0=0px、1=0.25rem、2=0.5rem、3=1rem、4=1.5rem、5=3rem）

**よく使う例**：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>スペーシング</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      .box {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>スペーシングの例</h2>

      <!-- mt = margin-top -->
      <div class="box mt-3">mt-3（上マージン）</div>

      <!-- mb = margin-bottom -->
      <div class="box mb-5">mb-5（下マージン大）</div>

      <!-- mx = margin-left と margin-right -->
      <div class="box mx-auto" style="width: 200px">mx-auto（中央寄せ）</div>

      <!-- p = padding（全方向） -->
      <div class="box p-4 mt-3">p-4（パディング）</div>

      <!-- px = padding-left と padding-right -->
      <div class="box px-5 py-2 mt-3">px-5 py-2（左右パディング大、上下小）</div>
    </div>
  </body>
</html>
```

**一覧表**：

```
m-0   = margin: 0
m-1   = margin: 0.25rem (4px)
m-2   = margin: 0.5rem (8px)
m-3   = margin: 1rem (16px)
m-4   = margin: 1.5rem (24px)
m-5   = margin: 3rem (48px)

mt-3  = margin-top: 1rem
mb-3  = margin-bottom: 1rem
ms-3  = margin-left: 1rem
me-3  = margin-right: 1rem
mx-3  = margin-left と margin-right: 1rem
my-3  = margin-top と margin-bottom: 1rem

p-3   = padding: 1rem（全方向）
pt-3  = padding-top: 1rem
（以下、m と同じパターン）
```

---

### テキストユーティリティ

テキストの配置、色、サイズを簡単に変更できる！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>テキストユーティリティ</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>テキストの配置</h2>
      <p class="text-start">左寄せ（text-start）</p>
      <p class="text-center">中央寄せ（text-center）</p>
      <p class="text-end">右寄せ（text-end）</p>

      <h2 class="mt-5">テキストの色</h2>
      <p class="text-primary">Primary（青）</p>
      <p class="text-secondary">Secondary（グレー）</p>
      <p class="text-success">Success（緑）</p>
      <p class="text-danger">Danger（赤）</p>
      <p class="text-warning">Warning（黄色）</p>
      <p class="text-info">Info（水色）</p>
      <p class="text-muted">Muted（薄いグレー）</p>

      <h2 class="mt-5">フォントウェイト</h2>
      <p class="fw-bold">太字（fw-bold）</p>
      <p class="fw-normal">通常（fw-normal）</p>
      <p class="fw-light">細字（fw-light）</p>

      <h2 class="mt-5">テキスト変換</h2>
      <p class="text-lowercase">UPPERCASE → lowercase</p>
      <p class="text-uppercase">lowercase → UPPERCASE</p>
      <p class="text-capitalize">capitalize each word</p>
    </div>
  </body>
</html>
```

---

### 背景色とボーダー

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>背景色とボーダー</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      .demo-box {
        padding: 20px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>背景色</h2>
      <div class="demo-box bg-primary text-white">bg-primary（青）</div>
      <div class="demo-box bg-secondary text-white">bg-secondary（グレー）</div>
      <div class="demo-box bg-success text-white">bg-success（緑）</div>
      <div class="demo-box bg-danger text-white">bg-danger（赤）</div>
      <div class="demo-box bg-warning">bg-warning（黄色）</div>
      <div class="demo-box bg-info">bg-info（水色）</div>
      <div class="demo-box bg-light">bg-light（薄いグレー）</div>
      <div class="demo-box bg-dark text-white">bg-dark（濃いグレー）</div>

      <h2 class="mt-5">ボーダー</h2>
      <div class="demo-box border">border（全方向）</div>
      <div class="demo-box border-top">border-top（上のみ）</div>
      <div class="demo-box border-bottom">border-bottom（下のみ）</div>
      <div class="demo-box border border-primary">border border-primary（青いボーダー）</div>
      <div class="demo-box border border-5">border border-5（太いボーダー）</div>
      <div class="demo-box border rounded">border rounded（角丸）</div>
      <div class="demo-box border rounded-circle" style="width: 100px; height: 100px">
        円形
      </div>
    </div>
  </body>
</html>
```

---

### Display と Flexbox

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display と Flexbox</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      .item {
        background-color: #e7f3ff;
        border: 2px solid #0d6efd;
        padding: 10px;
        margin: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h2>Flexbox（横並び）</h2>
      <div class="d-flex">
        <div class="item">アイテム 1</div>
        <div class="item">アイテム 2</div>
        <div class="item">アイテム 3</div>
      </div>

      <h2 class="mt-5">Flexbox（中央寄せ）</h2>
      <div class="d-flex justify-content-center">
        <div class="item">中央</div>
      </div>

      <h2 class="mt-5">Flexbox（右寄せ）</h2>
      <div class="d-flex justify-content-end">
        <div class="item">右寄せ</div>
      </div>

      <h2 class="mt-5">Flexbox（均等配置）</h2>
      <div class="d-flex justify-content-between">
        <div class="item">左</div>
        <div class="item">中央</div>
        <div class="item">右</div>
      </div>

      <h2 class="mt-5">Flexbox（縦方向の中央寄せ）</h2>
      <div class="d-flex align-items-center" style="height: 200px; background-color: #f8f9fa">
        <div class="item">縦方向も中央</div>
      </div>
    </div>
  </body>
</html>
```

**Flexbox ユーティリティの一覧**：

```
d-flex              = display: flex
flex-row            = 横並び（デフォルト）
flex-column         = 縦並び

justify-content-start    = 左寄せ
justify-content-center   = 中央寄せ
justify-content-end      = 右寄せ
justify-content-between  = 両端寄せ（間隔均等）
justify-content-around   = 周囲均等

align-items-start   = 上寄せ
align-items-center  = 中央寄せ
align-items-end     = 下寄せ
```

---

## 基本コンポーネント：すぐ使える UI パーツ！

Bootstrap の**既製コンポーネント**を使ってみよう！

### Button（ボタン）

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap ボタン</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>ボタンのバリエーション</h2>

      <!-- 基本のボタン -->
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-light">Light</button>
      <button class="btn btn-dark">Dark</button>

      <h2 class="mt-5">アウトラインボタン</h2>
      <button class="btn btn-outline-primary">Primary</button>
      <button class="btn btn-outline-secondary">Secondary</button>
      <button class="btn btn-outline-success">Success</button>
      <button class="btn btn-outline-danger">Danger</button>

      <h2 class="mt-5">ボタンサイズ</h2>
      <button class="btn btn-primary btn-lg">大きいボタン</button>
      <button class="btn btn-primary">通常サイズ</button>
      <button class="btn btn-primary btn-sm">小さいボタン</button>

      <h2 class="mt-5">全幅ボタン</h2>
      <button class="btn btn-primary w-100">全幅ボタン</button>

      <h2 class="mt-5">無効なボタン</h2>
      <button class="btn btn-primary" disabled>無効なボタン</button>
    </div>
  </body>
</html>
```

---

### Alert（アラート・通知）

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Alert</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>Alert（アラート）</h2>

      <!-- 成功メッセージ -->
      <div class="alert alert-success" role="alert">
        ✓ 登録が完了しました！
      </div>

      <!-- 情報メッセージ -->
      <div class="alert alert-info" role="alert">
        ℹ️ 新しい機能が追加されました。
      </div>

      <!-- 警告メッセージ -->
      <div class="alert alert-warning" role="alert">
        ⚠️ パスワードの有効期限が近づいています。
      </div>

      <!-- エラーメッセージ -->
      <div class="alert alert-danger" role="alert">
        ❌ エラーが発生しました。もう一度お試しください。
      </div>

      <h2 class="mt-5">見出し付きアラート</h2>
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">成功！</h4>
        <p>ユーザー登録が完了しました。確認メールを送信しました。</p>
        <hr />
        <p class="mb-0">ログインして、サービスを利用できます。</p>
      </div>

      <h2 class="mt-5">閉じるボタン付きアラート</h2>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        ⚠️ メンテナンスのお知らせ
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

---

### Card（カード）

**カード**は、Bootstrap で最もよく使うコンポーネントの一つ！ブログ記事、商品、ユーザープロフィールなど、あらゆる場面で活躍するよ。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Card</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h2>基本的なカード</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/400x200"
              class="card-img-top"
              alt="カード画像"
            />
            <div class="card-body">
              <h5 class="card-title">カードのタイトル</h5>
              <p class="card-text">
                カードの説明文がここに入ります。Bootstrap のカードは柔軟で便利！
              </p>
              <a href="#" class="btn btn-primary">詳しく見る</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/400x200"
              class="card-img-top"
              alt="カード画像"
            />
            <div class="card-body">
              <h5 class="card-title">別のカード</h5>
              <p class="card-text">
                同じレイアウトで複数のカードを並べることができます。
              </p>
              <a href="#" class="btn btn-success">詳しく見る</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/400x200"
              class="card-img-top"
              alt="カード画像"
            />
            <div class="card-body">
              <h5 class="card-title">3つ目のカード</h5>
              <p class="card-text">
                レスポンシブにも完全対応しています！
              </p>
              <a href="#" class="btn btn-danger">詳しく見る</a>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-5">ヘッダーとフッター付きカード</h2>
      <div class="card" style="max-width: 500px">
        <div class="card-header">お知らせ</div>
        <div class="card-body">
          <h5 class="card-title">新機能リリース</h5>
          <p class="card-text">新しい機能が追加されました。ぜひお試しください。</p>
        </div>
        <div class="card-footer text-muted">2024年1月1日</div>
      </div>
    </div>
  </body>
</html>
```

---

## 実践例：簡単なランディングページを作ろう！

これまで学んだことを組み合わせて、**実際に使えるランディングページ**を作ってみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap ランディングページ</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- ヒーローセクション -->
    <div class="bg-primary text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Bootstrap で爆速開発！</h1>
        <p class="lead">美しいウェブサイトを、たった数行のコードで作れます</p>
        <button class="btn btn-light btn-lg mt-3">今すぐ始める</button>
      </div>
    </div>

    <!-- 特徴セクション -->
    <div class="container my-5">
      <h2 class="text-center mb-5">3つの特徴</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3 class="card-title">⚡ 超高速</h3>
              <p class="card-text">
                既製コンポーネントを使うから、開発スピードが10倍に！
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3 class="card-title">📱 レスポンシブ</h3>
              <p class="card-text">
                モバイルファースト設計で、どんなデバイスでも完璧に表示！
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3 class="card-title">🎨 カスタマイズ</h3>
              <p class="card-text">
                自分のデザインに合わせて、簡単にカスタマイズできる！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA セクション -->
    <div class="bg-light py-5">
      <div class="container text-center">
        <h2>今すぐ Bootstrap を始めよう！</h2>
        <p class="lead">無料で、今すぐ使えます</p>
        <button class="btn btn-primary btn-lg">ドキュメントを見る</button>
      </div>
    </div>

    <!-- フッター -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <div class="container">
        <p class="mb-0">&copy; 2024 Bootstrap入門. All rights reserved.</p>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**このページの構成**：
- 🎯 ヒーローセクション（大きな見出しと CTA ボタン）
- 💎 特徴セクション（3カラムのカードレイアウト）
- 📣 CTA セクション（行動喚起）
- 📄 フッター

**たった 50 行程度で、プロっぽいランディングページが完成！** 🎉

---

## バイブコーディング実践 🤖：AI と一緒に Bootstrap を使おう！

ここからが**バイブコーダー必見**のセクション！AI を使って効率的に Bootstrap のレイアウトを作る方法を学ぼう！

### AI への良い指示の例

#### 例 1: 3 カラムレイアウト

✅ **良い指示**：
```
Bootstrap 5を使って、3カラムのカードレイアウトを作ってください。

【仕様】
- コンテナを使用
- レスポンシブ対応（スマホ:1列、タブレット:2列、PC:3列）
- 各カードには画像、タイトル、説明文、ボタンを含める
- カードの高さを揃える（h-100クラス使用）

【デザイン】
- ボタンはPrimaryカラー
- カード間の余白を適切に設定
```

❌ **悪い指示**：
```
カードを3つ並べて
```

---

#### 例 2: ヘッダーとフッター付きページ

✅ **良い指示**：
```
Bootstrap 5を使って、ヘッダーとフッター付きのページレイアウトを作ってください。

【ヘッダー】
- 背景色はPrimary
- 白いテキスト
- 中央寄せのタイトル
- パディング上下に5（py-5）

【メインコンテンツ】
- Containerを使用
- 2カラムレイアウト（左:8カラム、右:4カラム）
- レスポンシブ対応（スマホでは縦並び）

【フッター】
- 背景色はDark
- 白いテキスト
- 中央寄せ
- コピーライト表記
```

---

#### 例 3: レスポンシブグリッド

✅ **良い指示**：
```
Bootstrap 5のグリッドシステムを使って、
以下のレスポンシブレイアウトを作ってください：

【レイアウト】
- スマホ（< 768px）: 1列（全幅）
- タブレット（768px-991px）: 2列
- PC（≥ 992px）: 4列

【コンテンツ】
- 8個の同じサイズのカード
- 各カードには番号とダミーテキスト
- カード間の余白を適切に設定（gap使用）
```

---

### 生成されたコードの読み方：チェックリスト

AI が生成した Bootstrap のコードを受け取ったら、以下のポイントをチェックしよう！

#### ✅ チェックリスト 1: CDN の読み込み

- [ ] `<head>` 内に Bootstrap CSS が読み込まれているか
- [ ] `</body>` 直前に Bootstrap JavaScript が読み込まれているか
- [ ] `viewport` メタタグがあるか

```html
<!-- ✅ 正しい例 -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body>
  <!-- コンテンツ -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
```

---

#### ✅ チェックリスト 2: グリッドの構造

- [ ] `container` → `row` → `col` の順になっているか
- [ ] カラムの合計が 12 になっているか
- [ ] レスポンシブクラスが適切に使われているか

```html
<!-- ✅ 正しい例 -->
<div class="container">
  <div class="row">
    <div class="col-md-4">カラム1（4/12）</div>
    <div class="col-md-8">カラム2（8/12）</div>
  </div>
</div>

<!-- ❌ 悪い例（rowがない） -->
<div class="container">
  <div class="col-md-4">カラム1</div>
  <div class="col-md-8">カラム2</div>
</div>
```

---

#### ✅ チェックリスト 3: レスポンシブ対応

- [ ] モバイルファーストになっているか（小さい画面から指定）
- [ ] ブレークポイントが適切か
- [ ] すべての画面サイズで見やすいか

```html
<!-- ✅ 正しい例（モバイルファースト） -->
<div class="col-12 col-md-6 col-lg-4">
  <!-- スマホ:12、タブレット:6、PC:4 -->
</div>

<!-- ❌ 悪い例（順番が逆） -->
<div class="col-lg-4 col-md-6 col-12">
  <!-- 動くけど、モバイルファーストではない -->
</div>
```

---

#### ✅ チェックリスト 4: ユーティリティクラス

- [ ] スペーシング（m-、p-）が適切に使われているか
- [ ] 不要なカスタム CSS を書いていないか
- [ ] Bootstrap のクラスで実現できることを確認

```html
<!-- ✅ 良い例（Bootstrapのクラスを活用） -->
<div class="mt-5 mb-3 text-center">
  <h1 class="text-primary">タイトル</h1>
</div>

<!-- ❌ 悪い例（カスタムCSSを使いすぎ） -->
<style>
  .my-title {
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #0d6efd;
  }
</style>
<div class="my-title">
  <h1>タイトル</h1>
</div>
```

---

#### ✅ チェックリスト 5: コンポーネントの使用

- [ ] 適切なコンポーネントが使われているか
- [ ] 公式の構造に従っているか
- [ ] 必要なクラスが全て含まれているか

```html
<!-- ✅ 正しいカードの構造 -->
<div class="card">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">タイトル</h5>
    <p class="card-text">説明文</p>
    <a href="#" class="btn btn-primary">ボタン</a>
  </div>
</div>

<!-- ❌ 悪い例（クラス名が間違っている） -->
<div class="card">
  <img src="..." alt="..." />
  <div class="body">
    <h5>タイトル</h5>
    <p>説明文</p>
    <a href="#">ボタン</a>
  </div>
</div>
```

---

### よくある問題と修正方法

#### 問題 1: カラムが縦に並んでしまう

**原因**：`row` クラスが抜けている

```html
<!-- ❌ 問題のあるコード -->
<div class="container">
  <div class="col-md-6">左</div>
  <div class="col-md-6">右</div>
</div>

<!-- ✅ 修正後 -->
<div class="container">
  <div class="row">
    <div class="col-md-6">左</div>
    <div class="col-md-6">右</div>
  </div>
</div>
```

---

#### 問題 2: レスポンシブが効かない

**原因**：`viewport` メタタグがない

```html
<!-- ❌ 問題のあるコード -->
<head>
  <meta charset="UTF-8" />
  <link href="..." rel="stylesheet" />
</head>

<!-- ✅ 修正後 -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="..." rel="stylesheet" />
</head>
```

---

#### 問題 3: カラムの幅が揃わない

**原因**：カラムの合計が 12 を超えている

```html
<!-- ❌ 問題のあるコード（4 + 4 + 6 = 14） -->
<div class="row">
  <div class="col-4">カラム1</div>
  <div class="col-4">カラム2</div>
  <div class="col-6">カラム3（次の行に落ちる）</div>
</div>

<!-- ✅ 修正後（4 + 4 + 4 = 12） -->
<div class="row">
  <div class="col-4">カラム1</div>
  <div class="col-4">カラム2</div>
  <div class="col-4">カラム3</div>
</div>
```

---

#### 問題 4: コンポーネントが動かない（Modal、Dropdown など）

**原因**：Bootstrap JavaScript が読み込まれていない

```html
<!-- ❌ 問題のあるコード -->
<body>
  <!-- JavaScript がない -->
</body>

<!-- ✅ 修正後 -->
<body>
  <!-- コンテンツ -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
```

---

### カスタマイズポイント：ここをいじると便利！

#### 1. コンテナの幅を変更

```html
<!-- 固定幅（デフォルト） -->
<div class="container">...</div>

<!-- 全幅 -->
<div class="container-fluid">...</div>

<!-- ブレークポイント別のコンテナ -->
<div class="container-sm">576px以上で固定幅</div>
<div class="container-md">768px以上で固定幅</div>
<div class="container-lg">992px以上で固定幅</div>
```

---

#### 2. カラム間の余白を調整

```html
<!-- 余白なし -->
<div class="row g-0">
  <div class="col-6">余白なし</div>
  <div class="col-6">余白なし</div>
</div>

<!-- 余白大 -->
<div class="row g-5">
  <div class="col-6">余白大</div>
  <div class="col-6">余白大</div>
</div>

<!-- 左右のみ余白 -->
<div class="row gx-3">
  <div class="col-6">左右に余白</div>
  <div class="col-6">左右に余白</div>
</div>
```

---

#### 3. カラムの順序を変更

```html
<div class="row">
  <!-- PCでは右側に表示されるが、スマホでは最初に表示 -->
  <div class="col-md-8 order-md-2">メインコンテンツ</div>
  <div class="col-md-4 order-md-1">サイドバー</div>
</div>
```

---

#### 4. ボタンのカスタマイズ

```html
<!-- サイズ変更 -->
<button class="btn btn-primary btn-sm">小</button>
<button class="btn btn-primary">通常</button>
<button class="btn btn-primary btn-lg">大</button>

<!-- 全幅ボタン -->
<button class="btn btn-primary w-100">全幅</button>

<!-- ボタングループ -->
<div class="btn-group" role="group">
  <button class="btn btn-primary">左</button>
  <button class="btn btn-primary">中</button>
  <button class="btn btn-primary">右</button>
</div>
```

---

## まとめ 📝

このレッスンでは、**Bootstrap の基礎**を学んだよ！

### 学んだこと

✅ **Bootstrap とは何か**
- 世界で最も人気の CSS フレームワーク
- モバイルファースト設計
- 豊富なコンポーネント

✅ **導入方法**
- CDN で簡単に導入（2 行追加するだけ）
- CSS と JavaScript の読み込み
- viewport メタタグの重要性

✅ **グリッドシステム**
- container → row → col の構造
- 12 カラムシステム
- レスポンシブクラス（col-sm、col-md、col-lg）

✅ **ユーティリティクラス**
- スペーシング（m-、p-）
- テキスト（text-center、text-primary など）
- 背景色とボーダー
- Flexbox ユーティリティ

✅ **基本コンポーネント**
- Button（ボタン）
- Alert（通知）
- Card（カード）

✅ **バイブコーディング実践**
- AI への効果的な指示の出し方
- 生成されたコードのチェックポイント
- よくある問題と修正方法

### 重要なポイント

1. **グリッドシステムが全ての基本**：
   - container → row → col の順番を守る
   - カラムの合計を 12 にする
   - レスポンシブクラスでモバイル対応

2. **ユーティリティクラスを活用**：
   - カスタム CSS を書く前に、Bootstrap のクラスで実現できないか確認
   - m-、p-、text-、bg- などを使いこなす

3. **公式ドキュメントが最強**：
   - 困ったらまず公式ドキュメントを見る
   - コード例をコピペして試す
   - カスタマイズ方法を学ぶ

4. **AI と協働する**：
   - 具体的な指示を出す
   - Bootstrap のクラス名を指定する
   - 生成されたコードをチェックリストで確認

### 次のステップ 🚀

Bootstrap の基礎ができたら、次は**Lesson 2: Bootstrap コンポーネント**で、もっと高度なコンポーネントを学ぼう！

- Navbar（ナビゲーションバー）
- Modal（モーダルダイアログ）
- Carousel（画像スライダー）
- Form（フォーム要素）
- その他の便利なコンポーネント

**これらを使えば、本格的な Web アプリケーションの UI が作れるよ！** 💪

---

## 演習問題 🎯

理解を深めるために、実際に手を動かして練習しよう！

👉 [演習問題はこちら](./exercises/README.md)

- **基礎編**（3問）：グリッドシステムとユーティリティクラスの基本
- **応用編**（3問）：レスポンシブレイアウトとコンポーネントの組み合わせ
- **チャレンジ編**（1問）：ランディングページの作成

**頑張って！分からないことがあったら、このレッスンを見返したり、AI に質問してみよう！** 💪
