# ミニプロジェクト 3: シンプルなクイズアプリ

Phase 3 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**シンプルなクイズアプリ**を作成することで、Phase 3 で学んだ JavaScript の基礎を総合的に復習します。

複数の問題を表示し、ユーザーの回答を判定してスコアを表示する実用的なクイズアプリです。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ 配列とオブジェクトで問題データを管理
- ✅ ループで問題を順番に表示
- ✅ 条件分岐で正誤判定
- ✅ DOM 操作で画面を動的に更新
- ✅ イベントリスナーでユーザー操作を処理
- ✅ 関数でコードを整理

---

## 📁 ファイル構成

```text
quiz-app/
├── index.html      # メインページ
├── styles.css      # スタイルシート
├── script.js       # JavaScript
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（Phase 1 で学んだ内容）

#### クイズアプリの構造

```html
<!-- クイズコンテナ -->
<div id="quizContainer">
  <!-- 問題文 -->
  <h2 id="question">問題文がここに表示されます</h2>

  <!-- 選択肢 -->
  <div id="choices">
    <!-- JavaScriptで動的に生成 -->
  </div>

  <!-- 次へボタン -->
  <button id="nextButton">次へ</button>
</div>

<!-- 結果画面 -->
<div id="resultContainer" class="hidden">
  <!-- JavaScriptで結果を表示 -->
</div>
```

**ポイント**:
- コンテナで画面を分離
- `class="hidden"` で初期状態では非表示
- ボタンとイベントで画面遷移

### CSS（Phase 2 で学んだ内容）

#### Flexbox によるレイアウト

```css
#choices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.choice-btn {
  padding: 1rem;
  text-align: left;
}
```

**ポイント**:
- 選択肢を縦並び
- gap で間隔を統一

### JavaScript（Phase 3 で学んだ内容）

#### 1. 配列とオブジェクトでデータ管理（Lesson 01, 04）

```javascript
const quizData = [
  {
    question: 'JavaScriptで変数を宣言するキーワードは？',
    choices: ['var', 'let', 'const', 'すべて正解'],
    correctAnswer: 3
  },
  {
    question: '配列の要素数を取得するプロパティは？',
    choices: ['size', 'length', 'count', 'total'],
    correctAnswer: 1
  }
];
```

**ポイント**:
- 問題ごとにオブジェクト
- 配列で複数の問題を管理
- `correctAnswer` はインデックス番号

#### 2. ループで問題を表示（Lesson 04）

```javascript
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];

  // 問題文を表示
  questionElement.textContent = currentQuestion.question;

  // 選択肢をループで表示
  choicesContainer.innerHTML = '';
  currentQuestion.choices.forEach((choice, index) => {
    const button = createChoiceButton(choice, index);
    choicesContainer.appendChild(button);
  });
}
```

**ポイント**:
- `forEach` で各選択肢を処理
- インデックスで回答を識別

#### 3. 条件分岐で正誤判定（Lesson 02）

```javascript
function checkAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswer) {
    // 正解
    score++;
    showFeedback('正解！', 'correct');
  } else {
    // 不正解
    showFeedback('不正解...', 'incorrect');
  }
}
```

**ポイント**:
- 選択されたインデックスと正解を比較
- 正解・不正解でスコアを更新
- フィードバックを表示

#### 4. DOM 操作で画面更新（Lesson 05）

```javascript
function showResult() {
  // クイズ画面を非表示
  quizContainer.classList.add('hidden');

  // 結果画面を表示
  resultContainer.classList.remove('hidden');

  // スコアを表示
  const percentage = Math.round((score / quizData.length) * 100);
  resultContainer.innerHTML = `
    <h2>クイズ終了！</h2>
    <p>正解数: ${score} / ${quizData.length}</p>
    <p>正答率: ${percentage}%</p>
  `;
}
```

**ポイント**:
- `classList` でクラスを追加・削除
- テンプレートリテラルで動的に HTML を生成
- 正答率を計算して表示

#### 5. イベントリスナーで操作処理（Lesson 05）

```javascript
// 次へボタンをクリック
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    // 次の問題を表示
    loadQuestion();
  } else {
    // 結果を表示
    showResult();
  }
});
```

**ポイント**:
- ボタンクリックで次の問題へ
- 最後の問題の後は結果画面へ

---

## 🌟 このプロジェクトの特徴

### 1. データ駆動の設計

問題データを配列で管理し、ループで表示します。

**学べること**:
- データと表示ロジックの分離
- 問題の追加が簡単
- スケーラブルな設計

### 2. 画面遷移の実装

クイズ画面と結果画面を切り替えます。

**学べること**:
- `classList` による表示制御
- 状態管理（現在の問題番号、スコア）
- ユーザーフロー の設計

### 3. フィードバックの表示

正解・不正解の視覚的フィードバックを提供します。

**学べること**:
- ユーザー体験の向上
- CSS との連携
- アニメーション効果

### 4. 配列とオブジェクトの実践

実際のアプリで配列とオブジェクトを活用します。

**学べること**:
- データ構造の設計
- プロパティへのアクセス
- 配列の操作

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **問題を追加**
   - `quizData` 配列に新しい問題を追加
   - 様々なテーマの問題を作成

2. **正解の選択肢を表示**
   - 不正解時に正しい答えを表示
   - 解説を追加

3. **スタイルをカスタマイズ**
   - 正解時は緑、不正解時は赤に色を変更
   - アニメーション効果を追加

### 中級編

1. **タイマー機能**
   - 各問題に制限時間を設定
   - カウントダウンを表示
   - 時間切れで次の問題へ

2. **問題のシャッフル**
   - 毎回異なる順番で出題
   - `Math.random()` を使ってランダム化

3. **難易度別の問題**
   - 簡単・普通・難しいの3レベル
   - 難易度に応じて得点を変更

### 上級編

1. **AI にカテゴリー選択機能を追加してもらう**
   ```
   「クイズアプリに問題のカテゴリー（HTML、CSS、JavaScript）を選択できる機能を追加してください。
   最初の画面でカテゴリーボタンを表示し、選択されたカテゴリーの問題だけを出題してください。
   問題データにcategoryプロパティを追加し、filter()メソッドで絞り込んでください。」
   ```

2. **ランキング機能**
   - LocalStorage でスコアを保存
   - 過去の成績を表示
   - ベストスコアを強調

3. **クイズ作成機能**
   - ユーザーが問題を追加できる
   - フォームで問題、選択肢、正解を入力
   - LocalStorage で保存

---

## 💡 学習のポイント

### 1. 配列とオブジェクトの組み合わせ

問題データを配列とオブジェクトで管理します。

```javascript
const quizData = [
  {
    question: '問題文',
    choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    correctAnswer: 0  // 正解のインデックス
  }
];
```

**ポイント**:
- 問題ごとにオブジェクト
- `choices` は配列
- インデックスで正解を指定

### 2. インデックスの活用

配列のインデックスで選択肢と正解を管理します。

```javascript
// 選択肢をループで表示
choices.forEach((choice, index) => {
  // index: 0, 1, 2, 3
});

// 正解判定
if (selectedIndex === correctAnswer) {
  // 正解
}
```

**メリット**:
- シンプルで分かりやすい
- 正解判定が簡単
- データ構造がコンパクト

### 3. テンプレートリテラル

文字列に変数を埋め込みます。

```javascript
const name = '太郎';
const score = 8;
const total = 10;

const message = `${name}さんの得点: ${score}/${total}`;
// "太郎さんの得点: 8/10"
```

**ポイント**:
- バッククォート `` で囲む
- `${}` で変数を埋め込む
- 改行もそのまま使える

### 4. classList の使い方

クラスの追加・削除で表示/非表示を切り替えます。

```javascript
// クラスを追加
element.classList.add('hidden');

// クラスを削除
element.classList.remove('hidden');

// クラスの有無を切り替え
element.classList.toggle('active');

// クラスが含まれているか確認
if (element.classList.contains('hidden')) {
  // 処理
}
```

**メリット**:
- CSS と連携しやすい
- コードが読みやすい
- 複数のクラスを管理可能

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```
「クイズアプリにタイマー機能を追加してください。
以下の仕様で実装してください：
- 各問題に15秒の制限時間を設定
- 画面上部にカウントダウンタイマーを表示
- 時間切れになったら自動的に次の問題へ
- 残り時間が5秒以下になったら赤色で強調

setInterval()を使ってタイマーを実装し、
時間切れ時は不正解として扱ってください。
スタイルは既存のデザインと統一してください。」
```

**ポイント**:
- 機能を具体的に説明
- 制限時間を明記
- UI の要件を詳細に指定
- 実装方法を提案
- デザインの統一を指示

### 生成されたコードのチェックポイント

1. **HTML 構造**
   - タイマー表示要素が追加されているか
   - 適切な位置に配置されているか

2. **JavaScript のロジック**
   - `setInterval` が正しく使われているか
   - タイマーのクリア処理があるか
   - 時間切れ時の処理が適切か

3. **CSS のスタイル**
   - タイマーが見やすいか
   - 残り時間が少ない時の強調表示があるか

4. **動作確認**
   - タイマーが正しくカウントダウンするか
   - 時間切れで次の問題へ進むか
   - 回答後にタイマーが止まるか

---

## 📝 まとめ

このプロジェクトで、Phase 3 で学んだ以下の内容を実践しました:

- ✅ 配列とオブジェクトで問題データを管理
- ✅ ループで問題を順番に表示
- ✅ 条件分岐で正誤判定
- ✅ DOM 操作で画面を動的に更新
- ✅ イベントリスナーでユーザー操作を処理
- ✅ 関数でコードを整理

**Phase 3 の知識で、こんなに楽しいクイズアプリが作れる！** 💪

これで Phase 3 のミニプロジェクトはすべて完了！3つのプロジェクトを通じて、JavaScript の基礎をマスターしたね！

次は Phase 4 で JavaScript の発展的な内容を学んで、さらに高度な機能を追加していこう！

---

**Happy Coding!** 🎉
