// ===================================
// グローバル変数（Lesson 01: 変数）
// ===================================

// 現在の表示値
let currentValue = '0';

// 前の値
let previousValue = null;

// 選択された演算子
let operator = null;

// 新しい数値を入力中かどうか
let isNewNumber = true;

// ===================================
// DOM要素の取得（Lesson 05: DOM操作）
// ===================================

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// ===================================
// イベントリスナーの設定（Lesson 05: イベント）
// ===================================

// 各ボタンにクリックイベントを設定
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    handleButtonClick(value);
  });
});

// ===================================
// ボタンクリック処理（Lesson 02: 条件分岐）
// ===================================

function handleButtonClick(value) {
  // 数字または小数点
  if ((value >= '0' && value <= '9') || value === '.') {
    handleNumber(value);
  }
  // 演算子
  else if (value === '+' || value === '-' || value === '×' || value === '÷') {
    handleOperator(value);
  }
  // イコール
  else if (value === '=') {
    calculate();
  }
  // クリア
  else if (value === 'C') {
    clear();
  }
}

// ===================================
// 数字入力処理（Lesson 03: 関数）
// ===================================

function handleNumber(value) {
  // 小数点の処理
  if (value === '.') {
    // 既に小数点が含まれている場合は追加しない
    if (currentValue.includes('.')) {
      return;
    }

    // 新しい数値の場合は "0." から始める
    if (isNewNumber) {
      currentValue = '0.';
      isNewNumber = false;
    } else {
      currentValue += '.';
    }
  }
  // 数字の処理
  else {
    if (isNewNumber) {
      // 新しい数値の入力開始
      currentValue = value;
      isNewNumber = false;
    } else {
      // 既存の値に追加
      if (currentValue === '0') {
        // "0" の場合は置き換え
        currentValue = value;
      } else {
        currentValue += value;
      }
    }
  }

  updateDisplay();
}

// ===================================
// 演算子処理（Lesson 03: 関数）
// ===================================

function handleOperator(op) {
  // 既に演算子が選択されている場合は、まず計算を実行
  if (operator !== null && !isNewNumber) {
    calculate();
  }

  previousValue = currentValue;
  operator = op;
  isNewNumber = true;
}

// ===================================
// 計算処理（Lesson 02: 条件分岐、switch文）
// ===================================

function calculate() {
  // 演算子または前の値がない場合は何もしない
  if (operator === null || previousValue === null) {
    return;
  }

  // 文字列を数値に変換
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  let result;

  // 演算子に応じて計算
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '÷':
      // 0で割る場合のエラー処理
      if (current === 0) {
        alert('0で割ることはできません！');
        clear();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  // 結果を小数点以下10桁で丸める（浮動小数点の誤差対策）
  result = Math.round(result * 10000000000) / 10000000000;

  // 結果を文字列に変換
  currentValue = String(result);

  // 状態をリセット
  operator = null;
  previousValue = null;
  isNewNumber = true;

  updateDisplay();
}

// ===================================
// クリア処理（Lesson 03: 関数）
// ===================================

function clear() {
  currentValue = '0';
  previousValue = null;
  operator = null;
  isNewNumber = true;
  updateDisplay();
}

// ===================================
// ディスプレイ更新（Lesson 05: DOM操作）
// ===================================

function updateDisplay() {
  // 表示する値を整形
  let displayValue = currentValue;

  // 数値が長すぎる場合は指数表記
  if (displayValue.length > 12) {
    const num = parseFloat(displayValue);
    displayValue = num.toExponential(6);
  }

  display.textContent = displayValue;
}

// ===================================
// キーボード入力対応（オプション）
// ===================================

document.addEventListener('keydown', (e) => {
  // 数字キー（0-9）
  if (e.key >= '0' && e.key <= '9') {
    handleButtonClick(e.key);
  }
  // 演算子キー
  else if (e.key === '+') {
    handleButtonClick('+');
  } else if (e.key === '-') {
    handleButtonClick('-');
  } else if (e.key === '*') {
    handleButtonClick('×');
  } else if (e.key === '/') {
    e.preventDefault(); // デフォルトの検索を防ぐ
    handleButtonClick('÷');
  }
  // Enterキーまたは=キー
  else if (e.key === 'Enter' || e.key === '=') {
    handleButtonClick('=');
  }
  // Escapeキーでクリア
  else if (e.key === 'Escape') {
    handleButtonClick('C');
  }
  // 小数点
  else if (e.key === '.') {
    handleButtonClick('.');
  }
  // Backspaceキー
  else if (e.key === 'Backspace') {
    // 最後の1文字を削除
    if (currentValue.length > 1) {
      currentValue = currentValue.slice(0, -1);
    } else {
      currentValue = '0';
      isNewNumber = true;
    }
    updateDisplay();
  }
});

// ===================================
// 初期化
// ===================================

// 初期表示を更新
updateDisplay();
