# ミニプロジェクト 2: 簡単な計算機

Phase 3 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**簡単な計算機**を作成することで、Phase 3 で学んだ JavaScript の基礎を総合的に復習します。

四則演算ができる実用的な計算機アプリです。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ 変数で計算の状態を管理
- ✅ 条件分岐で演算子を判定
- ✅ 関数で計算ロジックを整理
- ✅ DOM 操作でディスプレイを更新
- ✅ イベントリスナーでボタン入力を処理
- ✅ 文字列と数値の変換

---

## 📁 ファイル構成

```text
calculator/
├── index.html      # メインページ
├── styles.css      # スタイルシート
├── script.js       # JavaScript
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（Phase 1 で学んだ内容）

#### 計算機の構造

```html
<!-- ディスプレイ -->
<div class="display" id="display">0</div>

<!-- ボタングリッド -->
<div class="buttons">
  <button class="btn">7</button>
  <button class="btn">8</button>
  <button class="btn">9</button>
  <button class="btn operator">÷</button>
  <!-- ... -->
</div>
```

**ポイント**:
- ディスプレイは `div` で表示のみ
- ボタンには `class` で種類を識別
- グリッドレイアウトで配置

### CSS（Phase 2 で学んだ内容）

#### Grid レイアウト

```css
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
```

**ポイント**:
- Grid で 4 列のボタン配置
- 等幅の列で整列

### JavaScript（Phase 3 で学んだ内容）

#### 1. 変数で状態管理（Lesson 01）

```javascript
// 現在の表示値
let currentValue = '0';

// 前の値
let previousValue = null;

// 選択された演算子
let operator = null;

// 新しい数値を入力中かどうか
let isNewNumber = true;
```

**ポイント**:
- `let` で変更可能な変数
- 計算に必要な状態を管理
- フラグで入力モードを制御

#### 2. 条件分岐で処理を分岐（Lesson 02）

```javascript
function handleButtonClick(value) {
  if (value >= '0' && value <= '9') {
    // 数字ボタン
    handleNumber(value);
  } else if (value === '+' || value === '-' || value === '×' || value === '÷') {
    // 演算子ボタン
    handleOperator(value);
  } else if (value === '=') {
    // イコールボタン
    calculate();
  } else if (value === 'C') {
    // クリアボタン
    clear();
  }
}
```

**ポイント**:
- `if...else if` で処理を分岐
- ボタンの種類ごとに関数を呼び出し

#### 3. 関数で計算ロジックを整理（Lesson 03）

```javascript
// 計算を実行する関数
function calculate() {
  if (operator === null || previousValue === null) {
    return;
  }

  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  let result;

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
      result = prev / current;
      break;
  }

  currentValue = String(result);
  operator = null;
  previousValue = null;
  updateDisplay();
}
```

**ポイント**:
- `switch` 文で演算子ごとに処理
- `parseFloat` で文字列を数値に変換
- 計算結果を文字列に戻してディスプレイに表示

#### 4. DOM 操作（Lesson 05）

```javascript
// ディスプレイを更新
function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentValue;
}

// ボタンにイベントリスナーを設定
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    handleButtonClick(value);
  });
});
```

**ポイント**:
- `textContent` でディスプレイを更新
- `querySelectorAll` で複数のボタンを取得
- `forEach` で各ボタンにイベント登録

---

## 🌟 このプロジェクトの特徴

### 1. 状態管理

現在値、前の値、演算子を変数で管理します。

**学べること**:
- アプリケーションの状態管理
- フラグによる動作制御
- 変数のスコープ

### 2. 条件分岐の実践

ボタンの種類に応じて処理を分岐します。

**学べること**:
- `if...else if` の使い方
- `switch` 文の使い方
- 複雑な条件の処理

### 3. 数値と文字列の変換

ディスプレイは文字列、計算は数値で処理します。

**学べること**:
- `parseFloat` で文字列 → 数値
- `String` で数値 → 文字列
- 型変換の重要性

### 4. イベント駆動の設計

ボタンクリックで処理を実行します。

**学べること**:
- イベントハンドラーの設計
- ユーザー操作への対応
- インタラクティブなUI

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **小数点ボタンを追加**
   - `.` ボタンを追加
   - 小数の入力と計算に対応
   - 既に小数点がある場合は追加しない

2. **バックスペース機能**
   - `←` ボタンで最後の1文字を削除
   - 入力ミスに対応

3. **スタイルのカスタマイズ**
   - 色やフォントを変更
   - ボタンのホバー効果を追加

### 中級編

1. **計算履歴を表示**
   - 過去の計算結果をリスト表示
   - 配列で履歴を管理

2. **キーボード入力対応**
   - 数字キーや演算子キーで入力
   - Enterキーで計算実行

3. **エラー処理**
   - 0 で割ろうとした時にエラー表示
   - 無効な入力を防ぐ

### 上級編

1. **AI に関数電卓機能を追加してもらう**
   ```
   「計算機に√（平方根）、x²（2乗）、%（パーセント）ボタンを追加してください。
   各ボタンの計算ロジックを実装し、既存のボタンと同じスタイルで統一してください。」
   ```

2. **メモリー機能**
   - M+, M-, MR, MC ボタンを追加
   - 値をメモリーに保存・呼び出し

3. **計算式の表示**
   - ディスプレイに計算式を表示
   - 例：「5 + 3 = 8」

---

## 💡 学習のポイント

### 1. 状態管理の重要性

計算機は複数の状態を管理する必要があります。

```javascript
let currentValue = '0';  // 今表示している値
let previousValue = null;  // 前に入力した値
let operator = null;  // 選択した演算子
let isNewNumber = true;  // 新しい数値を入力中か
```

**ポイント**:
- 各変数の役割を明確に
- 状態を適切に更新
- フラグで動作を制御

### 2. 数値と文字列の使い分け

ディスプレイは文字列、計算は数値で処理します。

```javascript
// 文字列 → 数値
const num = parseFloat('3.14');  // 3.14

// 数値 → 文字列
const str = String(42);  // '42'
```

**注意点**:
- `parseFloat` は小数に対応
- `parseInt` は整数のみ
- 変換に失敗すると `NaN`（Not a Number）

### 3. switch 文の使い方

演算子ごとに処理を分岐します。

```javascript
switch (operator) {
  case '+':
    result = prev + current;
    break;
  case '-':
    result = prev - current;
    break;
  default:
    result = current;
}
```

**ポイント**:
- `break` で次の case に進まない
- `default` でそれ以外の場合を処理
- `if...else if` より読みやすい

### 4. querySelectorAll の使い方

複数の要素をまとめて取得します。

```javascript
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // 処理
  });
});
```

**メリット**:
- 複数の要素に一括でイベント登録
- コードがシンプル
- 保守しやすい

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```
「計算機に小数点ボタン（.）を追加してください。
以下の仕様で実装してください：
- ボタンのテキストは『.』
- クリックすると現在の値に小数点を追加
- 既に小数点が含まれている場合は追加しない
- 0の状態で押すと『0.』になる
- スタイルは既存の数字ボタンと同じ

JavaScriptにhandleDecimal()関数を追加し、適切に呼び出してください。」
```

**ポイント**:
- 機能を具体的に説明
- 仕様を箇条書きで明記
- 関数名を提案
- スタイルの統一を指示

### 生成されたコードのチェックポイント

1. **HTML 構造**
   - 小数点ボタンが追加されているか
   - 適切な位置に配置されているか

2. **JavaScript のロジック**
   - `handleDecimal()` 関数が実装されているか
   - 重複チェックが正しく動作するか
   - 既存の関数と連携しているか

3. **動作確認**
   - 小数点が正しく入力されるか
   - 重複して入力できないか
   - 計算が正しく実行されるか

4. **エッジケース**
   - 0 の状態で押した時の動作
   - 演算子の後に押した時の動作

---

## 📝 まとめ

このプロジェクトで、Phase 3 で学んだ以下の内容を実践しました:

- ✅ 変数で計算の状態を管理
- ✅ 条件分岐で演算子を判定
- ✅ 関数で計算ロジックを整理
- ✅ DOM 操作でディスプレイを更新
- ✅ イベントリスナーでボタン入力を処理
- ✅ 文字列と数値の変換

**Phase 3 の知識で、こんなに実用的な計算機が作れる！** 💪

次は、最後のミニプロジェクト「シンプルなクイズアプリ」に挑戦してみよう！

---

**Happy Coding!** 🎉
