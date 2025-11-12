// ===================================
// クイズデータ（Lesson 01: 配列とオブジェクト）
// ===================================

const quizData = [
  {
    question: 'JavaScriptで変数を宣言するキーワードはどれ？',
    choices: ['variable', 'let', 'const', 'すべて正解'],
    correctAnswer: 1
  },
  {
    question: '配列の要素数を取得するプロパティは？',
    choices: ['size', 'length', 'count', 'total'],
    correctAnswer: 1
  },
  {
    question: 'DOM要素を取得するメソッドはどれ？',
    choices: ['getElement', 'findElement', 'querySelector', 'selectElement'],
    correctAnswer: 2
  },
  {
    question: 'イベントリスナーを追加するメソッドは？',
    choices: ['addEvent', 'addEventListener', 'onEvent', 'attachEvent'],
    correctAnswer: 1
  },
  {
    question: '条件分岐に使うキーワードは？',
    choices: ['if', 'when', 'check', 'condition'],
    correctAnswer: 0
  },
  {
    question: '配列の各要素に対して処理を実行するメソッドは？',
    choices: ['loop', 'forEach', 'iterate', 'repeat'],
    correctAnswer: 1
  },
  {
    question: '関数を定義するキーワードは？',
    choices: ['func', 'function', 'def', 'method'],
    correctAnswer: 1
  },
  {
    question: '文字列を数値に変換する関数は？',
    choices: ['toNumber', 'parseFloat', 'convert', 'numberify'],
    correctAnswer: 1
  },
  {
    question: 'オブジェクトのプロパティにアクセスする記法は？',
    choices: ['object[property]', 'object.property', 'object->property', 'すべて可能'],
    correctAnswer: 1
  },
  {
    question: 'JavaScriptのコメントの書き方は？',
    choices: ['# コメント', '<!-- コメント -->', '// コメント', '/* コメント'],
    correctAnswer: 2
  }
];

// ===================================
// グローバル変数（Lesson 01: 変数）
// ===================================

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// ===================================
// DOM要素の取得（Lesson 05: DOM操作）
// ===================================

const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// ===================================
// イベントリスナーの設定（Lesson 05: イベント）
// ===================================

// 次へボタンをクリック
nextButton.addEventListener('click', () => {
  // 次の問題へ
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    // 次の問題を表示
    loadQuestion();
  } else {
    // 結果を表示
    showResult();
  }
});

// ===================================
// 問題を読み込む関数（Lesson 03: 関数、Lesson 04: ループ）
// ===================================

function loadQuestion() {
  // 選択をリセット
  selectedAnswer = null;

  // フィードバックと次へボタンを非表示
  feedbackElement.classList.add('hidden');
  nextButton.classList.add('hidden');

  // 現在の問題を取得
  const currentQuestion = quizData[currentQuestionIndex];

  // 問題文を表示
  questionElement.textContent = currentQuestion.question;

  // プログレスバーを更新
  updateProgress();

  // 選択肢をクリア
  choicesContainer.innerHTML = '';

  // 選択肢をループで表示
  currentQuestion.choices.forEach((choice, index) => {
    const button = createChoiceButton(choice, index);
    choicesContainer.appendChild(button);
  });
}

// ===================================
// 選択肢ボタンを作成する関数（Lesson 05: DOM操作）
// ===================================

function createChoiceButton(text, index) {
  const button = document.createElement('button');
  button.className = 'choice-btn';
  button.textContent = text;

  // ボタンをクリックした時
  button.addEventListener('click', () => {
    selectAnswer(index, button);
  });

  return button;
}

// ===================================
// 回答を選択する関数（Lesson 02: 条件分岐）
// ===================================

function selectAnswer(index, button) {
  // 既に選択済みの場合は何もしない
  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = index;

  // すべての選択肢ボタンを無効化
  const allButtons = document.querySelectorAll('.choice-btn');
  allButtons.forEach(btn => {
    btn.disabled = true;
  });

  // 選択されたボタンを強調
  button.classList.add('selected');

  // 正誤判定
  checkAnswer(index, button);
}

// ===================================
// 正誤判定する関数（Lesson 02: 条件分岐）
// ===================================

function checkAnswer(selectedIndex, selectedButton) {
  const currentQuestion = quizData[currentQuestionIndex];
  const correctIndex = currentQuestion.correctAnswer;

  // 正解の選択肢を取得
  const allButtons = document.querySelectorAll('.choice-btn');
  const correctButton = allButtons[correctIndex];

  if (selectedIndex === correctIndex) {
    // 正解
    score++;
    selectedButton.classList.add('correct');
    showFeedback('正解！ 🎉', 'correct');
  } else {
    // 不正解
    selectedButton.classList.add('incorrect');
    correctButton.classList.add('correct');
    showFeedback(`不正解... 正解は「${currentQuestion.choices[correctIndex]}」です`, 'incorrect');
  }

  // 次へボタンを表示
  nextButton.classList.remove('hidden');
}

// ===================================
// フィードバックを表示する関数（Lesson 05: DOM操作）
// ===================================

function showFeedback(message, type) {
  feedbackText.textContent = message;
  feedbackElement.className = `feedback ${type}`;
  feedbackElement.classList.remove('hidden');
}

// ===================================
// プログレスバーを更新する関数（Lesson 05: DOM操作）
// ===================================

function updateProgress() {
  // 進捗率を計算
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  // プログレスバーの幅を更新
  progressBar.style.setProperty('--progress', `${progress}%`);
  progressBar.querySelector('::before') || (progressBar.style.width = `${progress}%`);

  // CSSで幅を設定（::beforeが使えない場合の代替）
  const style = document.createElement('style');
  style.textContent = `.progress-bar::before { width: ${progress}% !important; }`;
  document.head.appendChild(style);

  // テキストを更新
  progressText.textContent = `問題 ${currentQuestionIndex + 1} / ${quizData.length}`;
}

// ===================================
// 結果を表示する関数（Lesson 05: DOM操作）
// ===================================

function showResult() {
  // クイズ画面を非表示
  quizContainer.classList.add('hidden');

  // 結果画面を表示
  resultContainer.classList.remove('hidden');

  // 正答率を計算
  const percentage = Math.round((score / quizData.length) * 100);

  // メッセージを決定
  let message = '';
  let icon = '';

  if (percentage === 100) {
    message = '完璧です！素晴らしい！';
    icon = '🏆';
  } else if (percentage >= 80) {
    message = 'とても良い成績です！';
    icon = '🎉';
  } else if (percentage >= 60) {
    message = '良い成績です！';
    icon = '😊';
  } else if (percentage >= 40) {
    message = 'もう少し頑張りましょう！';
    icon = '💪';
  } else {
    message = '復習が必要ですね。もう一度挑戦してみましょう！';
    icon = '📚';
  }

  // 結果を表示
  resultContainer.innerHTML = `
    <div class="result-icon">${icon}</div>
    <h2>クイズ終了！</h2>
    <div class="result-score">${score} / ${quizData.length}</div>
    <div class="result-percentage">正答率: ${percentage}%</div>
    <div class="result-message">${message}</div>
    <button class="btn-restart" onclick="restartQuiz()">もう一度挑戦</button>
  `;
}

// ===================================
// クイズを再スタートする関数（Lesson 03: 関数）
// ===================================

function restartQuiz() {
  // 変数をリセット
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;

  // 画面を切り替え
  resultContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');

  // 最初の問題を読み込み
  loadQuestion();
}

// ===================================
// 初期化（ページ読み込み時に実行）
// ===================================

// 最初の問題を読み込み
loadQuestion();
