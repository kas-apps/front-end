# Lesson 6：実用レベル版 - コード解説

**コード規模**：約630行（JavaScript）
**新機能**：LocalStorage、トースト通知、ローディング、エラーハンドリング

---

## ファイル構成

```text
code/
├── README.md        # このファイル
├── index.html       # HTML（約280行）
├── styles.css       # CSS（約190行）
└── script.js        # JavaScript（約630行）
```

---

## Lesson 5からの変更点

### 追加された定数

```javascript
const STORAGE_KEY = 'card-todo-tasks';
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;
const TOAST_DURATION = 3000;
```

**理由**：

- マジックナンバーを避ける
- 一箇所で設定を管理
- 変更が容易

### 追加されたDOM要素

```javascript
const loadingElement = document.getElementById('loading');
const toastContainer = document.getElementById('toast-container');
```

### 追加された関数（約12個）

#### LocalStorage関連（2関数）

- `saveToLocalStorage()` - タスクをLocalStorageに保存
- `loadFromLocalStorage()` - LocalStorageからタスクを読み込み

#### UI関連（3関数）

- `showLoading()` - ローディング表示
- `hideLoading()` - ローディング非表示
- `showToast(message, type, duration)` - トースト通知表示

#### 初期化（1関数）

- `init()` - アプリの初期化処理

#### イベントリスナー（1個）

- Escapeキーで編集キャンセル

#### 変更された関数

- `handleAddTask()` - トースト通知とLocalStorage保存を追加
- `toggleComplete()` - トースト通知とLocalStorage保存を追加
- `deleteTask()` - トースト通知とLocalStorage保存を追加
- `saveEdit()` - トースト通知とLocalStorage保存を追加
- `cancelEdit()` - トースト通知を追加

---

## 機能解説

### 1. LocalStorageでのデータ永続化

#### 仕組み

```text
タスク追加・編集・削除
  ↓
saveToLocalStorage()
  ↓
JSON.stringify(tasks)
  ↓
localStorage.setItem(STORAGE_KEY, json)
  ↓
ブラウザのLocalStorageに保存
```

#### 保存処理

```javascript
function saveToLocalStorage() {
  try {
    const json = JSON.stringify(tasks); // JavaScriptオブジェクト → JSON文字列

    // データサイズチェック（5MB以内）
    if (json.length > 5000000) {
      showToast('データ容量が上限に達しました', 'error');
      return;
    }

    localStorage.setItem(STORAGE_KEY, json); // 保存
    console.log('✅ データを保存しました:', tasks.length, '件');
  } catch (error) {
    console.error('❌ データの保存に失敗:', error);

    // QuotaExceededErrorのハンドリング
    if (error.name === 'QuotaExceededError') {
      showToast('ストレージの容量が不足しています', 'error');
    } else {
      showToast('データの保存に失敗しました', 'error');
    }
  }
}
```

**ポイント**：

- `try-catch`でエラーハンドリング
- データサイズのチェック（5MB制限）
- QuotaExceededErrorの個別対応
- コンソールログで状態確認

#### 読み込み処理

```javascript
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY); // JSON文字列を取得

    if (json) {
      const parsed = JSON.parse(json); // JSON文字列 → JavaScriptオブジェクト

      // 配列かどうかチェック
      if (Array.isArray(parsed)) {
        tasks = parsed;
        console.log('✅ データを読み込みました:', tasks.length, '件');
      } else {
        throw new Error('データ形式が不正です');
      }
    } else {
      // データがない場合は空配列
      tasks = [];
      console.log('ℹ️ 初回起動：空のタスクリストで開始');
    }
  } catch (error) {
    console.error('❌ データの読み込みに失敗:', error);

    // 破損したデータを削除
    localStorage.removeItem(STORAGE_KEY);

    // 空配列で初期化
    tasks = [];

    showToast('データが破損していたため、初期化しました', 'error');
  }
}
```

**ポイント**：

- `try-catch`でエラーハンドリング
- データがない場合の処理
- データ破損時の復旧処理
- 配列チェックでデータ整合性を確保

### 2. トースト通知

#### 仕組み

```text
操作実行（追加、編集、削除など）
  ↓
showToast(message, type, duration)
  ↓
トースト要素を作成
  ↓
画面右上に表示（アニメーション）
  ↓
3秒後に自動削除（アニメーション）
```

#### トースト表示関数

```javascript
function showToast(message, type = 'info', duration = TOAST_DURATION) {
  // トースト要素を作成
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  // アイコンを設定
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'warning') icon = '⚠️';

  // トーストのHTML
  toast.innerHTML = `
    <span class="text-2xl">${icon}</span>
    <span class="flex-1">${escapeHTML(message)}</span>
    <button onclick="this.parentElement.remove()" aria-label="閉じる">
      ✕
    </button>
  `;

  // コンテナに追加
  toastContainer.appendChild(toast);

  // 指定時間後に自動削除
  setTimeout(() => {
    toast.classList.add('hiding'); // 削除アニメーション
    setTimeout(() => {
      toast.remove(); // DOM から削除
    }, 300); // アニメーション時間
  }, duration);
}
```

**ポイント**：

- 4種類のトースト（success, error, info, warning）
- アイコンで視覚的に区別
- XSS対策（escapeHTML）
- ARIA属性でアクセシビリティ対応
- アニメーション付きで削除

#### 使用例

```javascript
// 成功
showToast('タスクを追加しました！', 'success');

// エラー
showToast('データの保存に失敗しました', 'error');

// 警告
showToast('タスクタイトルを入力してください', 'warning');

// 情報
showToast('タスクを削除しました', 'info');
```

### 3. ローディング表示

#### 仕組み

```text
ページ読み込み開始
  ↓
init()関数が実行される
  ↓
showLoading() - ローディング表示
  ↓
loadFromLocalStorage() - データ読み込み
  ↓
renderTasks() - 画面描画
  ↓
hideLoading() - ローディング非表示
  ↓
完了！
```

#### ローディング関数

```javascript
function showLoading() {
  if (loadingElement) {
    loadingElement.style.display = 'flex';
  }
}

function hideLoading() {
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}
```

**ポイント**：

- シンプルな表示/非表示の切り替え
- 存在チェックでエラー防止
- CSSでスピナーアニメーション

### 4. エラーハンドリング

#### バリデーション強化

**Before（Lesson 5）**：

```javascript
if (!title) {
  alert('タスクタイトルを入力してください');
  return;
}
```

**After（Lesson 6）**：

```javascript
if (!title) {
  showToast('タスクタイトルを入力してください', 'warning');
  taskTitleInput.focus(); // フォーカスを当てる
  return;
}

if (title.length > MAX_TITLE_LENGTH) {
  showToast(`タスクタイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`, 'warning');
  return;
}
```

**改善点**：

- `alert()`からトースト通知へ変更
- フォーカス管理でユーザビリティ向上
- 定数を使った柔軟な設定

#### LocalStorageのエラーハンドリング

```javascript
try {
  // 保存処理
  localStorage.setItem(STORAGE_KEY, json);
} catch (error) {
  console.error('❌ データの保存に失敗:', error);

  // エラーの種類に応じた対応
  if (error.name === 'QuotaExceededError') {
    showToast('ストレージの容量が不足しています', 'error');
  } else {
    showToast('データの保存に失敗しました', 'error');
  }
}
```

**ポイント**：

- `try-catch`で例外をキャッチ
- エラーの種類を判定（QuotaExceededError）
- ユーザーに適切なメッセージを表示
- コンソールログでデバッグ情報を出力

### 5. 初期化処理の改善

#### init()関数

```javascript
function init() {
  console.log('🚀 アプリを初期化中...');

  // 1. ローディング表示
  showLoading();

  // 2. LocalStorageからデータを読み込み
  loadFromLocalStorage();

  // 3. 画面を描画
  renderTasks();

  // 4. ローディング非表示（0.5秒後）
  setTimeout(() => {
    hideLoading();
    console.log('✅ アプリの初期化が完了しました');
  }, 500);
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', init);
```

**ポイント**：

- 初期化処理を1つの関数にまとめる
- ローディング表示でUX向上
- コンソールログで進捗確認
- 視覚的な効果のため0.5秒待つ

### 6. キーボード操作の対応

```javascript
// Escapeキーで編集をキャンセル
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && editingTaskId !== null) {
    cancelEdit();
  }
});
```

**ポイント**：

- Escapeキーで編集をキャンセル
- アクセシビリティの向上
- ユーザビリティの改善

---

## 使い方

### 1. ファイルを開く

```bash
# index.htmlをブラウザで開く
open index.html
```

### 2. データの永続化を確認

1. タスクを追加
2. ページをリロード（F5）
3. タスクが残っている → LocalStorageで保存されている！

### 3. ブラウザのDevToolsで確認

```javascript
// Consoleで実行
localStorage.getItem('card-todo-tasks');
// → タスクデータがJSON形式で表示される
```

### 4. データのクリア

```javascript
// Consoleで実行
localStorage.removeItem('card-todo-tasks');
// → データが削除される
```

---

## コードのポイント

### 1. エラーハンドリングの一貫性

```javascript
// すべてのLocalStorage操作はtry-catchで囲む
try {
  // 処理
} catch (error) {
  console.error('エラー:', error);
  showToast('エラーメッセージ', 'error');
}
```

### 2. ユーザーへのフィードバック

```javascript
// すべての操作にトースト通知を追加
handleAddTask() → showToast('タスクを追加しました！', 'success');
toggleComplete() → showToast('タスクを完了しました', 'info');
deleteTask() → showToast('タスクを削除しました', 'info');
```

### 3. デバッグログの充実

```javascript
console.log('✅ データを保存しました:', tasks.length, '件');
console.error('❌ データの保存に失敗:', error);
console.log('ℹ️ 初回起動：空のタスクリストで開始');
```

**メリット**：

- 開発時のデバッグが容易
- 本番環境でも問題の特定が可能
- 絵文字で視認性向上

### 4. 定数の活用

```javascript
// Before
if (title.length > 100) { ... }

// After
const MAX_TITLE_LENGTH = 100;
if (title.length > MAX_TITLE_LENGTH) { ... }
```

**メリット**：

- 変更が容易（1箇所修正で全体に反映）
- 意図が明確
- タイポ防止

---

## パフォーマンス最適化

### LocalStorageの書き込みタイミング

```javascript
// 各操作後に自動保存
handleAddTask() → saveToLocalStorage()
toggleComplete() → saveToLocalStorage()
deleteTask() → saveToLocalStorage()
saveEdit() → saveToLocalStorage()
```

**注意**：

- LocalStorageへの書き込みは同期処理
- 頻繁な書き込みはパフォーマンスに影響
- このアプリでは問題ないが、大規模な場合はデバウンスを検討

---

## ブラウザ互換性

### LocalStorageの対応状況

```text
✅ Chrome 4+
✅ Firefox 3.5+
✅ Safari 4+
✅ Edge 12+
✅ IE 8+
```

### プライベートブラウジングモードの注意

```text
⚠️ プライベートブラウジングモードでは：
- LocalStorageは利用可能
- ただし、ブラウザを閉じるとデータが削除される
```

---

## 次のステップ

このコードをベースに、Lesson 7では以下の改善を行います：

1. **コードの整理**
   - 関数の分割
   - イベントデリゲーション
   - コメントの充実

2. **パフォーマンス最適化**
   - デバウンスの活用
   - 不要な再レンダリングの削減

3. **アクセシビリティ改善**
   - ARIA属性の追加
   - キーボード操作の拡充

4. **ブラウザ互換性確認**
   - 複数ブラウザでのテスト
   - ポリフィルの検討

---

## トラブルシューティング

### Q1: LocalStorageにデータが保存されない

**A**: ブラウザのコンソールを確認してください。

```javascript
// コンソールで実行
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test'));
// → 'value'と表示されればOK
```

### Q2: ページをリロードするとデータが消える

**A**: プライベートブラウジングモードを使用していないか確認してください。

### Q3: トーストが表示されない

**A**: `toast-container`要素がHTMLに存在するか確認してください。

```html
<div id="toast-container" class="fixed top-4 right-4 z-50"></div>
```

---

**Let's vibe and code!** 🎉

実用レベル版で、あなたのTODOアプリが本物のアプリになったよ！
データが永続化され、ユーザーに適切なフィードバックを提供できるようになったね！ ✨

次のLesson 7で、さらにコード品質を高めていこう！ 🚀
