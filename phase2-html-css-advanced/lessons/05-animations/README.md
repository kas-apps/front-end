# Lesson 5: CSS アニメーション ✨

**学習目標**：CSS でアニメーションを作成し、ウェブサイトをインタラクティブで魅力的にできるようになる

---

## なぜ CSS アニメーションを学ぶの？

静的なウェブサイトも良いけど、**動きがあるウェブサイト**はもっと魅力的！

### アニメーションの効果

- ✨ **ユーザーの注意を引く**（重要な要素を目立たせる）
- 🎯 **操作のフィードバック**（ボタンを押した感覚）
- 📱 **スムーズな UX**（画面遷移が自然に感じる）
- 🎨 **視覚的な魅力**（ワクワクするデザイン）

**例**：

- ホバー時にボタンが少し浮き上がる 🔘
- メニューがスライドインで表示される 📱
- ローディング中のスピナーがくるくる回る ⏳
- スクロールに応じて要素がフェードインする ✨

**でも注意！** アニメーションは「演出」。使いすぎると邪魔になる！

---

## CSS アニメーションの 2 つの方法

CSS でアニメーションを作る方法は、主に 2 つあるよ：

### 1. transition（トランジション）

- **使い方**：状態変化（ホバー、クリックなど）をスムーズに
- **特徴**：シンプル、使いやすい
- **用途**：ホバー効果、色の変化など

### 2. animation（@keyframes）

- **使い方**：複雑なアニメーションを定義
- **特徴**：細かい制御が可能、ループも可能
- **用途**：ローディングアニメーション、複雑な動きなど

**まずは transition から学ぼう！** 簡単で、すぐに使える！🎯

---

## transition - 状態変化をスムーズに

### 基本的な使い方

```html
<style>
  .button {
    background-color: #3b82f6;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s; /* これがtransition！ */
  }

  .button:hover {
    background-color: #2563eb; /* ホバー時の色 */
  }
</style>

<button class="button">ホバーしてみて！</button>
```

**結果**：ホバーすると、背景色が**0.3 秒かけて**スムーズに変化する！✨

**transition なし**：パッと瞬時に変わる（カクカク）
**transition あり**：ゆっくりスムーズに変わる（気持ちいい！）

---

### transition の 4 つのプロパティ

```css
.button {
  /* 個別に指定 */
  transition-property: background-color; /* 何を変化させるか */
  transition-duration: 0.3s; /* 何秒かけて変化させるか */
  transition-timing-function: ease; /* どのように変化させるか */
  transition-delay: 0s; /* 何秒待ってから開始するか */

  /* まとめて指定（ショートハンド） */
  transition: background-color 0.3s ease 0s;
  /* または */
  transition: background-color 0.3s;
}
```

---

### transition-property - 何を変化させるか

```css
/* 特定のプロパティだけ */
.button {
  transition-property: background-color;
}

/* 複数のプロパティ */
.button {
  transition-property: background-color, transform;
}

/* 全てのプロパティ */
.button {
  transition-property: all; /* 全部に適用（便利だけど重い） */
}
```

---

### transition-duration - 何秒かけて変化させるか

```css
.button {
  transition-duration: 0.3s; /* 0.3秒 */
}

.slow {
  transition-duration: 1s; /* 1秒（ゆっくり） */
}

.fast {
  transition-duration: 0.1s; /* 0.1秒（素早く） */
}
```

**おすすめの速度**：

- **0.1s ~ 0.2s**：素早い変化（ボタンのホバーなど）
- **0.3s ~ 0.5s**：標準的な変化（多くの場面で使える）
- **0.5s ~ 1s**：ゆっくりした変化（大きな要素の移動など）

---

### transition-timing-function - どのように変化させるか

```css
.ease {
  transition-timing-function: ease; /* ゆっくり始まり、ゆっくり終わる（デフォルト） */
}

.linear {
  transition-timing-function: linear; /* 一定速度 */
}

.ease-in {
  transition-timing-function: ease-in; /* ゆっくり始まる */
}

.ease-out {
  transition-timing-function: ease-out; /* ゆっくり終わる */
}

.ease-in-out {
  transition-timing-function: ease-in-out; /* ゆっくり始まり、ゆっくり終わる */
}
```

**おすすめ**：

- **ease**：汎用的（デフォルト）
- **ease-out**：自然な動き（多くの場面で使える）
- **ease-in-out**：滑らかな動き

---

### transition-delay - 何秒待ってから開始するか

```css
.button {
  transition: background-color 0.3s ease 0.5s;
  /* 0.5秒待ってから、0.3秒かけて変化 */
}
```

**使い方**：複数の要素を順番にアニメーションさせる時に便利！

---

## アニメーション可能なプロパティ

**全てのプロパティがアニメーションできるわけではない！**

### ✅ アニメーション可能

- **色**：`color`, `background-color`, `border-color`
- **サイズ**：`width`, `height`, `padding`, `margin`
- **位置**：`top`, `left`, `right`, `bottom`
- **変形**：`transform`（後述）
- **透明度**：`opacity`
- **影**：`box-shadow`, `text-shadow`

### ❌ アニメーション不可

- **表示/非表示**：`display`（`none` ⇔ `block` は瞬時）
- **配置方法**：`position`（`static` ⇔ `absolute` は瞬時）
- **フォント**：`font-family`

---

## 実践例 1：ホバー効果のボタン

```html
<style>
  .button-hover {
    background-color: #3b82f6;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button-hover:hover {
    background-color: #2563eb;
    transform: translateY(-2px); /* 上に2px移動 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 影を追加 */
  }

  .button-hover:active {
    transform: translateY(0); /* クリック時は元に戻す */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>

<button class="button-hover">クリックしてみて！</button>
```

**ポイント**：

- ホバーで少し浮き上がる（`translateY(-2px)`）
- 影を追加して立体感を出す
- クリック時は元に戻す（押した感じ）

---

## 実践例 2：カードのホバー効果

```html
<style>
  .card {
    width: 300px;
    margin: 0 auto;
    background-color: #befbff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px) scale(1.02); /* 浮き上がり+少し拡大 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* 影を強く */
  }

  .card h3 {
    margin: 0 0 10px 0;
    color: #1f2937;
  }

  .card p {
    color: #6b7280;
    margin: 0;
  }
</style>

<div class="card">
  <h3>カードタイトル</h3>
  <p>カードの説明文がここに入ります。</p>
</div>
```

**ポイント**：

- ホバーで浮き上がる
- 少し拡大（`scale(1.02)`）
- 影を強くして立体感

---

## transform - 要素を変形させる

`transform` は、要素を移動、回転、拡大縮小できる超強力なプロパティ！

### 1. translate - 移動

```css
.box {
  transform: translateX(100px); /* 右に100px移動 */
  transform: translateY(-50px); /* 上に50px移動 */
  transform: translate(100px, -50px); /* 右に100px、上に50px */
}
```

**例**：

```html
<style>
  .slide-button {
    background-color: #10b981;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .slide-button:hover {
    transform: translateX(10px); /* 右に10px移動 */
  }
</style>

<button class="slide-button">→ スライド</button>
```

---

### 2. scale - 拡大縮小

```css
.box {
  transform: scale(1.5); /* 1.5倍に拡大 */
  transform: scale(0.5); /* 0.5倍に縮小 */
  transform: scaleX(2); /* 横方向だけ2倍 */
  transform: scaleY(0.5); /* 縦方向だけ0.5倍 */
}
```

**例**：

```html
<style>
  .zoom-image {
    display: block;
    margin: 40px auto;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .zoom-image:hover {
    transform: scale(1.1); /* 1.1倍に拡大 */
  }
</style>

<img class="zoom-image" src="cat.jpg" alt="画像" />
```

---

### 3. rotate - 回転

```css
.box {
  transform: rotate(45deg); /* 45度回転 */
  transform: rotate(-90deg); /* -90度回転（反時計回り） */
}
```

**例**：

```html
<style>
  .rotate-icon {
    display: inline-block;
    font-size: 2rem;
    transition: transform 0.6s ease;
  }

  .rotate-icon:hover {
    transform: rotate(-180deg); /* -180度回転 */
  }
</style>

<span class="rotate-icon">🔄</span>
```

---

### 4. 複数の transform を組み合わせる

```css
.box {
  transform: translateX(100px) rotate(45deg) scale(1.5);
  /* 右に100px移動、45度回転、1.5倍に拡大 */
}
```

**重要！** `transform` は複数のプロパティを 1 つにまとめる！

```css
/* ❌ 悪い例：最後のtransformだけが適用される */
.box:hover {
  transform: translateY(-10px);
  transform: scale(1.1); /* これだけが適用される */
}

/* ⭕ 良い例：1つのtransformにまとめる */
.box:hover {
  transform: translateY(-10px) scale(1.1); /* 両方適用される */
}
```

---

## @keyframes - 複雑なアニメーションを定義

`@keyframes` を使うと、より複雑なアニメーションを作れるよ！

### 基本的な使い方

```html
<style>
  /* アニメーションを定義 */
  @keyframes fadeIn {
    from {
      opacity: 0; /* 開始時：透明 */
    }
    to {
      opacity: 1; /* 終了時：不透明 */
    }
  }

  /* アニメーションを適用 */
  .fade-in-box {
    animation: fadeIn 1s ease;
    /* アニメーション名 期間 タイミング関数 */
  }
</style>

<div class="fade-in-box">フェードインする要素</div>
```

**結果**：要素が 1 秒かけて、透明から不透明に変化する！✨

---

### パーセントで細かく制御

```css
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideInFromLeft 1s ease;
}
```

**ポイント**：

- `0%`：アニメーション開始時
- `50%`：アニメーション半分
- `100%`：アニメーション終了時

**何パーセントでも指定できる！** 細かい制御が可能！

---

## animation プロパティの詳細

```css
.box {
  /* 個別に指定 */
  animation-name: fadeIn; /* アニメーション名 */
  animation-duration: 1s; /* 期間 */
  animation-timing-function: ease; /* タイミング関数 */
  animation-delay: 0.5s; /* 遅延 */
  animation-iteration-count: infinite; /* 繰り返し回数（infiniteで無限） */
  animation-direction: alternate; /* 方向（alternateで往復） */
  animation-fill-mode: forwards; /* 終了後の状態 */

  /* まとめて指定（ショートハンド） */
  animation: fadeIn 1s ease 0.5s infinite alternate forwards;
}
```

---

### animation-iteration-count - 繰り返し回数

```css
.box {
  animation-iteration-count: 1; /* 1回だけ（デフォルト） */
  animation-iteration-count: 3; /* 3回繰り返す */
  animation-iteration-count: infinite; /* 無限ループ */
}
```

---

### animation-direction - アニメーションの方向

```css
.box {
  animation-direction: normal; /* 順方向（デフォルト） */
  animation-direction: reverse; /* 逆方向 */
  animation-direction: alternate; /* 往復（順→逆→順...） */
  animation-direction: alternate-reverse; /* 往復（逆→順→逆...） */
}
```

---

### animation-fill-mode - 終了後の状態

```css
.box {
  animation-fill-mode: none; /* 元に戻る（デフォルト） */
  animation-fill-mode: forwards; /* 終了時の状態を保持 */
  animation-fill-mode: backwards; /* 開始前から開始時の状態 */
  animation-fill-mode: both; /* forwardsとbackwardsの両方 */
}
```

**よく使うのは `forwards`**：アニメーション終了後も、最後の状態を保持！

---

## 実践例 3：ローディングスピナー

```html
<style>
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f4f6;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite; /* 1秒で1回転、無限ループ */
  }
</style>

<div class="spinner"></div>
```

**ポイント**：

- 円形（`border-radius: 50%`）
- 上部だけ色を変える（`border-top-color`）
- 回転アニメーション（`rotate(360deg)`）
- 無限ループ（`infinite`）

---

## 実践例 4：パルスアニメーション

```html
<style>
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  .pulse-button {
    background-color: #ef4444;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    animation: pulse 2s ease infinite; /* 2秒で1サイクル、無限ループ */
  }
</style>

<button class="pulse-button">重要なボタン</button>
```

**ポイント**：

- 拡大して、元に戻る（`scale(1) → scale(1.1) → scale(1)`）
- 透明度も変化（`opacity: 1 → 0.8 → 1`）
- 注意を引く効果

---

## 実践例 5：フェードイン（スクロール時）

```html
<div class="fade-in-up">要素1</div>
<div class="fade-in-up">要素2</div>
<div class="fade-in-up">要素3</div>
<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px); /* 下から */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* 元の位置へ */
    }
  }

  .fade-in-up {
    opacity: 0; /* 最初は非表示 */
    animation: fadeInUp 1s ease forwards; /* forwardsで最後の状態を保持 */
  }

  /* 遅延を追加して、順番に表示 */
  .fade-in-up:nth-child(1) {
    animation-delay: 0s;
  }
  .fade-in-up:nth-child(2) {
    animation-delay: 0.2s;
  }
  .fade-in-up:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>
```

**ポイント**：

- 下から上にフェードイン
- 遅延（`animation-delay`）で順番に表示
- `forwards` で最後の状態を保持

---

## パフォーマンスの注意点

### ⚡ 高速なプロパティ（GPU アクセラレーション）

```css
/* ✅ 推奨：GPUで処理されるので高速 */
.box {
  transform: translateX(100px);
  opacity: 0.5;
}
```

**GPU アクセラレーション**：

- `transform`（translate, scale, rotate）
- `opacity`

**これらは超高速！** 60fps（1 秒間に 60 回）のスムーズなアニメーションが可能！

---

### 🐌 低速なプロパティ（CPU で処理）

```css
/* ❌ 非推奨：CPUで処理されるので遅い */
.box {
  left: 100px; /* 代わりにtransform: translateX()を使う */
  width: 200px; /* サイズ変更は重い */
  margin: 20px; /* 代わりにtransformを使う */
}
```

**これらは遅い！** カクカクしたアニメーションになる可能性がある。

---

### パフォーマンス改善のコツ

```css
/* 悪い例：leftでアニメーション */
.box {
  position: absolute;
  left: 0;
  transition: left 0.3s;
}
.box:hover {
  left: 100px; /* 遅い */
}

/* 良い例：transformでアニメーション */
.box {
  position: absolute;
  transition: transform 0.3s;
}
.box:hover {
  transform: translateX(100px); /* 高速 */
}
```

**重要！** 位置の変更には `left` ではなく `transform: translateX()` を使おう！

---

### will-change でさらに最適化

```css
.box {
  will-change: transform, opacity;
  /* ブラウザに「これからアニメーションするよ」と事前に伝える */
}
```

**注意！** 使いすぎると逆効果。アニメーションする要素にだけ使おう！

---

## 🤖 バイブコーディング実践

### AI への指示例

アニメーションを AI に作ってもらう時は、**動きの詳細**を明確に指定しよう！

#### ⭕ 良い指示の例

```text
「CSS transitionを使って、ホバー効果のボタンを作ってください：
- 背景色：青（#3b82f6）、ホバー時は濃い青（#2563eb）
- ホバー時に上に2px浮き上がる（transform: translateY）
- ホバー時に影を追加（box-shadow）
- アニメーションは0.3秒、ease-out
- クリック時（:active）は元の位置に戻る
- transitionは全てのプロパティに適用してください」
```

**良い点**：

- transition か animation か明示
- 具体的な動き（浮き上がる、影を追加）を指定
- 色やサイズも明示
- タイミング関数も指定

---

#### ❌ 曖昧な指示の例

```text
「ボタンをかっこよくアニメーションさせて」
```

**問題点**：

- どんなアニメーションか不明
- transition か animation か不明
- 具体的な動きが不明

---

### 生成されたコードの読み方

AI がアニメーションのコードを生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **transition が設定されているか？**

   ```css
   .button {
     transition: all 0.3s ease; /* これがないとアニメーションしない */
   }
   ```

2. **アニメーション可能なプロパティが使われているか？**

   ```css
   /* 良い例 */
   .button:hover {
     transform: translateY(-2px); /* アニメーション可能 */
     opacity: 0.8;
   }

   /* 悪い例 */
   .button:hover {
     display: none; /* アニメーション不可（瞬時に消える） */
   }
   ```

3. **パフォーマンスの良いプロパティが使われているか？**

   ```css
   /* 良い例：transformを使用 */
   .box:hover {
     transform: translateX(100px); /* GPU加速 */
   }

   /* 悪い例：leftを使用 */
   .box:hover {
     left: 100px; /* CPU処理、遅い */
   }
   ```

4. **@keyframes のアニメーション名が一致しているか？**

   ```css
   /* 良い例 */
   @keyframes fadeIn {
     /* ... */
   }
   .box {
     animation: fadeIn 1s; /* 名前が一致 */
   }

   /* 悪い例 */
   @keyframes fadeIn {
     /* ... */
   }
   .box {
     animation: fadeOut 1s; /* 名前が一致しない */
   }
   ```

5. **animation-fill-mode が適切か？**

   ```css
   /* アニメーション終了後も状態を保持したい場合 */
   .box {
     animation: fadeIn 1s forwards; /* forwardsを追加 */
   }
   ```

---

### よくある問題と修正方法

#### 問題 1：アニメーションがカクカクする

**症状**：アニメーションがスムーズでない

**原因**：パフォーマンスの悪いプロパティを使っている

**修正方法**：

```css
/* 修正前 */
.box {
  transition: left 0.3s;
}
.box:hover {
  left: 100px; /* 遅い */
}

/* 修正後 */
.box {
  transition: transform 0.3s;
}
.box:hover {
  transform: translateX(100px); /* 高速 */
}
```

---

#### 問題 2：transition が効かない

**症状**：`transition` を設定したのに、アニメーションしない

**原因 1**：アニメーション不可能なプロパティを使っている

**修正方法**：

```css
/* 修正前 */
.box {
  display: none;
  transition: display 0.3s; /* displayはアニメーション不可 */
}
.box:hover {
  display: block;
}

/* 修正後 */
.box {
  opacity: 0;
  transition: opacity 0.3s; /* opacityはアニメーション可能 */
}
.box:hover {
  opacity: 1;
}
```

---

**原因 2**：`transition` が変化する側に書かれている

**修正方法**：

```css
/* 修正前 */
.box:hover {
  background-color: red;
  transition: background-color 0.3s; /* ホバー時だけ効く */
}

/* 修正後 */
.box {
  transition: background-color 0.3s; /* 通常時に書く */
}
.box:hover {
  background-color: red;
}
```

**重要！** `transition` は、**変化前の状態**に書く！

---

#### 問題 3：アニメーションが 1 回だけで止まる

**症状**：アニメーションが 1 回だけ再生されて、繰り返されない

**原因**：`animation-iteration-count` が設定されていない

**修正方法**：

```css
/* 修正前 */
.box {
  animation: spin 1s; /* 1回だけ */
}

/* 修正後 */
.box {
  animation: spin 1s infinite; /* 無限ループ */
}
```

---

#### 問題 4：アニメーション終了後に元に戻る

**症状**：アニメーション終了後、元の状態に戻ってしまう

**原因**：`animation-fill-mode` が設定されていない

**修正方法**：

```css
/* 修正前 */
.box {
  animation: fadeIn 1s; /* 終了後、元に戻る */
}

/* 修正後 */
.box {
  animation: fadeIn 1s forwards; /* 最後の状態を保持 */
}
```

---

#### 問題 5：複数の transform が適用されない

**症状**：`translateY` と `scale` を同時に使いたいのに、片方しか効かない

**原因**：`transform` を 2 回書いている

**修正方法**：

```css
/* 修正前 */
.box:hover {
  transform: translateY(-10px);
  transform: scale(1.1); /* これだけが適用される */
}

/* 修正後 */
.box:hover {
  transform: translateY(-10px) scale(1.1); /* 1つにまとめる */
}
```

---

## カスタマイズポイント

AI が生成したアニメーションを、自分で微調整する時のポイント：

### 1. アニメーションの速度を変更

```css
/* 速度を変更 */
.box {
  transition: all 0.3s; /* 変更前 */
  transition: all 0.5s; /* 変更後：ゆっくり */
}
```

### 2. タイミング関数を変更

```css
/* タイミング関数を変更 */
.box {
  transition: all 0.3s ease; /* 変更前 */
  transition: all 0.3s ease-out; /* 変更後：より自然 */
}
```

### 3. 遅延を追加

```css
/* 遅延を追加 */
.box {
  animation: fadeIn 1s; /* 変更前 */
  animation: fadeIn 1s 0.5s; /* 変更後：0.5秒待ってから開始 */
}
```

### 4. 繰り返し回数を変更

```css
/* 繰り返し回数を変更 */
.box {
  animation: pulse 2s infinite; /* 変更前：無限ループ */
  animation: pulse 2s 3; /* 変更後：3回だけ */
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ CSS アニメーションの 2 つの方法（transition と animation）
- ✅ transition の基本（property, duration, timing-function, delay）
- ✅ アニメーション可能なプロパティとそうでないプロパティ
- ✅ transform（translate, scale, rotate）
- ✅ @keyframes で複雑なアニメーションを定義
- ✅ animation プロパティ（iteration-count, direction, fill-mode）
- ✅ 実践例（ホバー効果、ローディングスピナー、フェードイン）
- ✅ パフォーマンスの注意点（GPU アクセラレーション）
- ✅ AI に的確な指示を出してアニメーションを生成する方法
- ✅ 生成されたコードのチェックポイント

### アニメーションのベストプラクティス

- ✅ パフォーマンスの良いプロパティを使う（`transform`, `opacity`）
- ✅ `transition` は変化前の状態に書く
- ✅ 複数の `transform` は 1 つにまとめる
- ✅ アニメーションは適度に（使いすぎない）
- ✅ ユーザーの設定を尊重する（`prefers-reduced-motion` メディアクエリ）

### アクセシビリティへの配慮

```css
/* アニメーションを減らしたいユーザーへの配慮 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**重要！** アニメーションで酔ってしまう人もいる。配慮しよう！

---

### 次のステップ

このレッスンで学んだアニメーションの知識を活かして、演習問題に挑戦しよう！

実際に手を動かすことで、アニメーションの作り方がしっかり身につくよ！💪

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

CSS アニメーションをマスターして、魅力的でインタラクティブなウェブサイトを作ろう！
