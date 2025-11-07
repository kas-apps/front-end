# Lesson 5: CSS アニメーション - 演習問題 💪

このレッスンで学んだ内容を実際に手を動かして練習しよう！

---

## 基礎編

### 演習 1：最初の transition を作ろう

以下の条件でボタンのホバー効果を作成してください：

**要件**：

- ボタンを 1 つ作成する
- 通常時：青い背景（`#3498db`）、白いテキスト、padding は `15px 30px`
- ホバー時：濃い青の背景（`#2980b9`）に変化
- 背景色の変化に 0.3 秒の transition を設定

**ヒント**：`transition: background-color 0.3s;` を使おう！

**解答例**：[solutions/05-01.html](solutions/05-01.html)

---

### 演習 2：複数プロパティの transition を作ろう

演習 1 で作ったボタンに、さらに効果を追加してください：

**要件**：

- ホバー時に背景色だけでなく、**サイズも大きく**する（`transform: scale(1.1)`）
- 背景色とサイズの両方に 0.3 秒の transition を設定
- `border-radius: 8px` で角を丸くする

**ヒント**：`transition: all 0.3s;` を使うか、複数のプロパティを個別に指定しよう！

**解答例**：[solutions/05-02.html](solutions/05-02.html)

---

### 演習 3：タイミング関数を試してみよう

同じボタンを 3 つ作成し、それぞれ異なるタイミング関数を設定してください：

**要件**：

- ボタン 1：`ease`（デフォルト）
- ボタン 2：`linear`（一定速度）
- ボタン 3：`ease-in-out`（ゆっくり始まってゆっくり終わる）
- 各ボタンの下に、使っているタイミング関数の名前を表示
- transition の時間は `0.5s` に設定（違いが分かりやすくなる）

**ヒント**：`transition: all 0.5s ease;` のように、3 番目の値でタイミング関数を指定するよ！

**解答例**：[solutions/05-03.html](solutions/05-03.html)

---

## 応用編

### 演習 4：@keyframes でフェードインアニメーション

ページを開いた時に、テキストがふわっと現れるフェードインアニメーションを作成してください：

**要件**：

- h1 タグで「ようこそ！」というテキストを表示
- 最初は透明（`opacity: 0`）で、徐々に不透明（`opacity: 1`）に
- アニメーションの時間は 2 秒
- `@keyframes` を使ってアニメーションを定義

**アニメーションの流れ**：

- 0%：`opacity: 0;`（透明）
- 100%：`opacity: 1;`（不透明）

**ヒント**：
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

h1 {
  animation: fadeIn 2s;
}
```

**解答例**：[solutions/05-04.html](solutions/05-04.html)

---

### 演習 5：ローディングスピナーを作ろう

くるくる回るローディングスピナーを作成してください：

**要件**：

- 円形の div を作成（`border-radius: 50%`）
- サイズは `50px × 50px`
- border で円を描く（上だけ色を付ける）
  - `border: 4px solid #f3f3f3;`（全体は薄いグレー）
  - `border-top: 4px solid #3498db;`（上だけ青）
- 無限に回転し続ける（`animation-iteration-count: infinite`）
- 1 秒で 1 回転（`animation-duration: 1s`）
- 一定速度で回転（`animation-timing-function: linear`）

**アニメーションの流れ**：

- 0%：`transform: rotate(0deg);`
- 100%：`transform: rotate(360deg);`

**ヒント**：`@keyframes spin` でアニメーションを定義しよう！

**解答例**：[solutions/05-05.html](solutions/05-05.html)

---

### 演習 6：AI に指示して作ってもらおう

AI に以下の内容のアニメーションを作ってもらってください：

**アニメーションの内容**：「パルス（脈打つ）アニメーション」

- 円形のボタンを作成（サイズ：`80px × 80px`、背景色：`#e74c3c`、中央に「♡」を表示）
- 1.5 秒かけて、小さくなったり大きくなったりを繰り返す
- 無限ループ
- アニメーションの流れ：
  - 0%：`transform: scale(1);`
  - 50%：`transform: scale(1.2);`（1.2 倍に拡大）
  - 100%：`transform: scale(1);`（元のサイズに戻る）

**AI への指示例**：

```
「パルスアニメーションを作成してください。以下の要件を満たすHTMLファイルを作成してください：

- 円形のボタンを作成（幅・高さ80px、border-radius 50%、背景色 #e74c3c）
- 中央に白い♡（ハート）を表示（font-size 30px、color white）
- @keyframesで"pulse"という名前のアニメーションを定義
  - 0%: transform: scale(1);
  - 50%: transform: scale(1.2);
  - 100%: transform: scale(1);
- アニメーションは1.5秒、無限ループ、ease-in-outで実行
- ボタンは画面中央に配置

すべてのスタイルは<style>タグ内に記述してください。」
```

生成されたコードを、レッスンで学んだ「チェックリスト」で確認してみよう！

#### ✅ チェックリスト

1. **@keyframes が正しく定義されているか？**（pulse という名前、0%, 50%, 100% のキーフレーム）
2. **animation プロパティが設定されているか？**（名前、時間、infinite、ease-in-out）
3. **transform: scale() が使われているか？**
4. **ボタンが円形になっているか？**（border-radius: 50%）
5. **中央配置されているか？**（flexbox や margin: auto など）
6. **アニメーションが無限ループしているか？**（animation-iteration-count: infinite）

**解答例**：[solutions/05-06.html](solutions/05-06.html)

---

## チャレンジ 🏆

### チャレンジ 1：複雑なアニメーションを作ろう

以下の要件で、「スライドイン + フェードイン」の組み合わせアニメーションを作成してください：

**要件**：

- カードを 3 枚作成（h3 タイトル、p 説明文、サイズ 200px × 150px）
- ページを開いた時に、カードが左から右へスライドしながら、同時にフェードイン
- 3 枚のカードは 0.2 秒ずつ時間差で表示（1 枚目：0s、2 枚目：0.2s、3 枚目：0.4s）
- アニメーションの流れ：
  - 0%：`opacity: 0; transform: translateX(-50px);`（透明で左に 50px ずれた位置）
  - 100%：`opacity: 1; transform: translateX(0);`（不透明で元の位置）
- カードは横並び（flexbox を使用）
- カードのスタイル：
  - 背景色：`#ecf0f1`
  - padding：`20px`
  - border-radius：`8px`
  - 影：`box-shadow: 0 2px 8px rgba(0,0,0,0.1);`

**ヒント**：

- `animation-delay` プロパティで時間差を設定できるよ！
  - 1 枚目：`animation-delay: 0s;`
  - 2 枚目：`animation-delay: 0.2s;`
  - 3 枚目：`animation-delay: 0.4s;`
- 最初は `opacity: 0;` の状態にしておこう（`animation-fill-mode: backwards;` を使うと便利）

**解答例**：[solutions/05-07.html](solutions/05-07.html)

---

## 学習のポイント

### 演習を終えたら確認しよう

- [ ] transition を使ってホバー効果を作れる
- [ ] 複数のプロパティに同時に transition を適用できる
- [ ] タイミング関数の違いを理解した
- [ ] @keyframes を使ってアニメーションを定義できる
- [ ] 回転、フェードイン、スケールなどの基本的なアニメーションが作れる
- [ ] animation-iteration-count で無限ループを設定できる
- [ ] animation-delay で時間差のあるアニメーションを作れる
- [ ] AI に具体的な指示を出してアニメーションを生成できる

---

**お疲れ様！** 🎉

CSS アニメーションの基本をしっかりマスターできたね！これで動きのあるインタラクティブなウェブサイトが作れるよ！

次は Phase 3 で JavaScript を学んで、さらに高度なインタラクションを実装しよう！

👉 [Phase 3: JavaScript 基礎へ進む](../../../phase3-javascript-basics/README.md)

---

**Let's vibe and code!** 🎉
