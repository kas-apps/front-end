# Lesson 6：データ永続化とUI改善 - 実用レベルに仕上げよう！

**所要時間**：3-4時間
**難易度**：⭐⭐⭐⭐☆

---

## 🎯 学習目標

このレッスンでは、Lesson 5で作成した機能拡張版アプリに、データの永続化とUI改善を加えて、実用レベルに仕上げるよ！

**目標**：

- LocalStorageでデータを永続化し、ページを閉じても残るようにする
- ローディング表示でユーザー体験を向上させる
- エラーハンドリングでアプリが落ちないようにする
- アニメーションで操作を滑らかにする
- トースト通知で操作のフィードバックを提供する

**完成イメージ**：

- ページを閉じて開いても、データが残っている
- ローディング中は「読み込み中...」と表示される
- エラーが起きても、適切なメッセージが表示される
- タスクの追加・削除時に滑らかなアニメーション
- 操作成功時に「タスクを追加しました！」と通知
- コード規模：約500-600行

---

## 💡 なぜ永続化とUI改善が重要か（Why）

### データ永続化がないと

```text
❌ 困ること：
- ページをリロードすると、すべてのタスクが消える
- ブラウザを閉じたら、また最初から入力し直し
- 「毎日使うアプリ」としては成り立たない
```

```text
✅ LocalStorageで永続化すると：
- ページをリロードしても、データが残る
- ブラウザを閉じても、次回開いたときにデータが復元される
- 本当に「使える」アプリになる
```

### UI改善がないと

```text
❌ ユーザー体験が悪い：
- データが読み込まれたのか分からない
- エラーが起きても何も表示されない
- 操作が成功したか分からない
- 画面の変化が唐突で、分かりにくい
```

```text
✅ UI改善すると：
- ローディング中は「読み込み中...」と表示
- エラーが起きたら「データの保存に失敗しました」と通知
- 操作成功時は「タスクを追加しました！」と確認
- アニメーションで滑らかに動く
```

### プロフェッショナルなアプリとは

```text
基本的なアプリ：
「動くけど、使いにくいし、信頼性も低い」

プロフェッショナルなアプリ：
「動くのは当然。使いやすくて、安心して使える」
```

Lesson 6では、アプリを「プロフェッショナルレベル」に引き上げるよ！

---

## 📚 実装する機能（What）

### 機能全体像

Lesson 6では、以下の5つの要素を実装していくよ：

#### 1. LocalStorageでのデータ永続化

```text
【できること】
- タスクの追加・編集・削除・完了切替のたびに、LocalStorageに自動保存
- ページ読み込み時に、LocalStorageからデータを自動復元
- JSON形式でデータを保存・読み込み
- エラーが起きても、データが失われないようにする
```

#### 2. ローディング表示

```text
【できること】
- ページ読み込み時に「読み込み中...」を表示
- データ復元が完了したら、ローディングを非表示にする
- スピナーアニメーションで視覚的に分かりやすく
```

#### 3. エラーハンドリング

```text
【できること】
- LocalStorageの読み込み失敗時に、空配列で初期化
- LocalStorageの保存失敗時に、エラーメッセージを表示
- JSON.parseのエラーをキャッチして、データ破損を防ぐ
- try-catchでエラーを適切に処理
```

#### 4. アニメーション

```text
【できること】
- タスク追加時：フェードイン + スライドイン
- タスク削除時：フェードアウト + スライドアウト
- ホバー時：カードが浮き上がる
- ボタンクリック時：押下アニメーション
```

#### 5. トースト通知

```text
【できること】
- タスク追加時：「タスクを追加しました！」
- タスク編集時：「タスクを更新しました！」
- タスク削除時：「タスクを削除しました！」
- エラー時：「データの保存に失敗しました」
- 3秒後に自動で消える
- 画面右上に表示
```

---

## 🛠️ 実装の進め方（How）

### ステップ1：LocalStorageの基本実装（1-1.5時間）

#### LocalStorageとは

LocalStorageは、ブラウザにデータを保存できる仕組みだよ！

```text
特徴：
- ブラウザを閉じてもデータが残る
- 同じドメイン内でのみアクセス可能
- 文字列データのみ保存可能（JSON.stringifyで変換）
- 容量は約5-10MB
```

#### LocalStorageの基本操作

```javascript
// データを保存
localStorage.setItem('key', 'value');

// データを取得
const value = localStorage.getItem('key');

// データを削除
localStorage.removeItem('key');

// すべてのデータを削除
localStorage.clear();
```

#### ストレージキーの定義

```javascript
// ストレージキー名を定数として定義
const STORAGE_KEY = 'card-todo-tasks';

// 理由：
// - タイポを防ぐ
// - 一箇所で管理できる
// - 他のアプリと名前が被らないようにする
```

#### データの保存関数

```javascript
/**
 * タスクデータをLocalStorageに保存
 */
function saveToLocalStorage() {
  try {
    // JavaScriptの配列 → JSON文字列に変換
    const json = JSON.stringify(tasks);

    // LocalStorageに保存
    localStorage.setItem(STORAGE_KEY, json);

    console.log('データを保存しました:', tasks.length, '件');
  } catch (error) {
    // エラーが起きたらコンソールに出力
    console.error('データの保存に失敗:', error);

    // ユーザーに通知（後で実装）
    showToast('データの保存に失敗しました', 'error');
  }
}
```

#### データの読み込み関数

```javascript
/**
 * LocalStorageからタスクデータを読み込み
 */
function loadFromLocalStorage() {
  try {
    // LocalStorageから JSON 文字列を取得
    const json = localStorage.getItem(STORAGE_KEY);

    // データがあれば、JSON文字列 → JavaScriptの配列に変換
    if (json) {
      tasks = JSON.parse(json);
      console.log('データを読み込みました:', tasks.length, '件');
    } else {
      // データがなければ、空配列で初期化
      tasks = [];
      console.log('初回起動：空のタスクリストで開始');
    }
  } catch (error) {
    // エラーが起きたら、空配列で初期化
    console.error('データの読み込みに失敗:', error);
    tasks = [];

    // ユーザーに通知
    showToast('データの読み込みに失敗しました', 'error');
  }
}
```

#### 初期化処理

```javascript
/**
 * アプリの初期化
 */
function init() {
  // 1. LocalStorageからデータを読み込み
  loadFromLocalStorage();

  // 2. 画面を描画
  renderTasks();

  // 3. 統計を更新
  updateStats();

  console.log('アプリを初期化しました');
}

// ページ読み込み時に初期化
window.addEventListener('DOMContentLoaded', init);
```

#### 既存の関数にsaveToLocalStorage()を追加

```javascript
// タスク追加時
function handleAddTask(e) {
  // ...既存のコード

  tasks.push(newTask);

  saveToLocalStorage(); // ← 追加
  renderTasks();
  // ...
}

// タスク編集時
function saveEdit(event, taskId) {
  // ...既存のコード

  saveToLocalStorage(); // ← 追加
  renderTasks();
}

// タスク削除時
function deleteTask(taskId) {
  // ...既存のコード

  tasks = tasks.filter(t => t.id !== taskId);

  saveToLocalStorage(); // ← 追加
  renderTasks();
}

// 完了切替時
function toggleComplete(taskId) {
  // ...既存のコード

  task.completed = !task.completed;

  saveToLocalStorage(); // ← 追加
  renderTasks();
}
```

---

### ステップ2：ローディング表示の実装（30分）

#### ローディングHTML

```html
<!-- index.htmlに追加 -->
<div id="loading" class="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
  <div class="text-center">
    <!-- スピナー -->
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
    <p class="text-gray-600 text-lg">読み込み中...</p>
  </div>
</div>
```

#### ローディング表示・非表示

```javascript
/**
 * ローディングを表示
 */
function showLoading() {
  document.getElementById('loading').style.display = 'flex';
}

/**
 * ローディングを非表示
 */
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

/**
 * アプリの初期化（修正版）
 */
function init() {
  // 1. ローディング表示
  showLoading();

  // 2. LocalStorageからデータを読み込み
  loadFromLocalStorage();

  // 3. 画面を描画
  renderTasks();

  // 4. 統計を更新
  updateStats();

  // 5. ローディング非表示
  setTimeout(() => {
    hideLoading();
  }, 500); // 0.5秒後に非表示（視覚的な効果のため）

  console.log('アプリを初期化しました');
}
```

---

### ステップ3：トースト通知の実装（1時間）

#### トーストHTML

```html
<!-- index.htmlに追加 -->
<div id="toast-container" class="fixed top-4 right-4 z-50 space-y-2">
  <!-- トーストがJavaScriptで動的に追加される -->
</div>
```

#### トーストCSS

```css
/* styles.cssに追加 */
.toast {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 300px;
  animation: slideInRight 0.3s ease;
}

.toast.success {
  background-color: #10B981;
  color: white;
}

.toast.error {
  background-color: #EF4444;
  color: white;
}

.toast.info {
  background-color: #3B82F6;
  color: white;
}

@keyframes slideInRight {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}
```

#### トースト表示関数

```javascript
/**
 * トースト通知を表示
 * @param {string} message - 表示するメッセージ
 * @param {string} type - トーストの種類（'success' | 'error' | 'info'）
 * @param {number} duration - 表示時間（ミリ秒、デフォルト：3000）
 */
function showToast(message, type = 'info', duration = 3000) {
  // トーストコンテナを取得
  const container = document.getElementById('toast-container');

  // トースト要素を作成
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  // アイコンを設定
  let icon = '📝';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'info') icon = 'ℹ️';

  // トーストのHTML
  toast.innerHTML = `
    <span class="text-2xl">${icon}</span>
    <span class="flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white hover:text-gray-200">
      ✕
    </button>
  `;

  // コンテナに追加
  container.appendChild(toast);

  // 指定時間後に自動削除
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}
```

#### 各操作にトースト通知を追加

```javascript
// タスク追加時
function handleAddTask(e) {
  // ...既存のコード

  tasks.push(newTask);
  saveToLocalStorage();
  renderTasks();

  showToast('タスクを追加しました！', 'success'); // ← 追加

  // ...
}

// タスク編集時
function saveEdit(event, taskId) {
  // ...既存のコード

  saveToLocalStorage();
  renderTasks();

  showToast('タスクを更新しました！', 'success'); // ← 追加
}

// タスク削除時
function deleteTask(taskId) {
  if (!confirm('このタスクを削除しますか？')) return;

  tasks = tasks.filter(t => t.id !== taskId);
  saveToLocalStorage();
  renderTasks();

  showToast('タスクを削除しました', 'info'); // ← 追加
}
```

---

### ステップ4：アニメーションの実装（30分-1時間）

#### カード追加時のアニメーション

```css
/* styles.cssに追加 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card {
  animation: fadeInUp 0.3s ease;
}
```

#### ホバーエフェクト（既に実装済みの改善版）

```css
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

#### ボタンのアニメーション

```css
button {
  transition: all 0.2s ease;
}

button:active {
  transform: scale(0.95);
}

button:hover {
  transform: translateY(-2px);
}
```

#### チェックボックスのアニメーション

```css
input[type="checkbox"] {
  transition: all 0.2s ease;
}

input[type="checkbox"]:checked {
  transform: scale(1.1);
}
```

---

### ステップ5：エラーハンドリングの強化（30分）

#### バリデーション強化

```javascript
function handleAddTask(e) {
  e.preventDefault();

  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  // バリデーション
  if (!title) {
    showToast('タイトルを入力してください', 'error');
    taskTitleInput.focus(); // フォーカスを当てる
    return;
  }

  if (title.length > 100) {
    showToast('タイトルは100文字以内で入力してください', 'error');
    return;
  }

  if (description.length > 500) {
    showToast('説明は500文字以内で入力してください', 'error');
    return;
  }

  // ...既存のコード
}
```

#### LocalStorageの容量チェック

```javascript
function saveToLocalStorage() {
  try {
    const json = JSON.stringify(tasks);

    // データサイズをチェック（約5MB = 5,000,000バイト）
    if (json.length > 5000000) {
      showToast('データ容量が上限に達しました。古いタスクを削除してください', 'error');
      return;
    }

    localStorage.setItem(STORAGE_KEY, json);
    console.log('データを保存しました:', tasks.length, '件');
  } catch (error) {
    console.error('データの保存に失敗:', error);

    // QuotaExceededErrorの場合
    if (error.name === 'QuotaExceededError') {
      showToast('ストレージの容量が不足しています', 'error');
    } else {
      showToast('データの保存に失敗しました', 'error');
    }
  }
}
```

#### データ破損時の復旧

```javascript
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);

    if (json) {
      const parsed = JSON.parse(json);

      // データが配列かチェック
      if (Array.isArray(parsed)) {
        tasks = parsed;
        console.log('データを読み込みました:', tasks.length, '件');
      } else {
        throw new Error('データ形式が不正です');
      }
    } else {
      tasks = [];
      console.log('初回起動：空のタスクリストで開始');
    }
  } catch (error) {
    console.error('データの読み込みに失敗:', error);

    // 破損したデータを削除
    localStorage.removeItem(STORAGE_KEY);

    // 空配列で初期化
    tasks = [];

    showToast('データが破損していたため、初期化しました', 'error');
  }
}
```

---

## 🤖 AIとの協働

### 📝 AIへの指示例

#### LocalStorage実装の指示

```text
✅ 良い指示の例：

「カード型TODOアプリに、LocalStorageでのデータ永続化を実装したいです。

【実装したいこと】
1. タスクの追加・編集・削除・完了切替のたびに、LocalStorageに自動保存
2. ページ読み込み時に、LocalStorageからデータを自動復元
3. エラー時は空配列で初期化して、ユーザーに通知

【必要な機能】
- STORAGE_KEY定数：'card-todo-tasks'
- saveToLocalStorage()関数：tasksをJSON文字列に変換して保存
- loadFromLocalStorage()関数：JSON文字列をパースしてtasksに復元
- init()関数：ページ読み込み時にloadFromLocalStorage()を実行

【エラーハンドリング】
- try-catchでJSON.parseのエラーをキャッチ
- エラー時はconsole.errorに出力
- エラー時は空配列で初期化

以下のコードに追加する形で実装してください。

[script.jsの現在のコードを貼り付け]
```

#### トースト通知の指示

```text
✅ 良い指示の例：

「操作のフィードバックとして、トースト通知を実装したいです。

【実装したいこと】
1. 画面右上に表示される通知
2. 3秒後に自動で消える
3. 成功（緑）、エラー（赤）、情報（青）の3種類
4. スライドインアニメーション

【必要な機能】
- showToast(message, type, duration)関数
- toast-container要素（HTML）
- トーストのCSS（アニメーション含む）

【使用例】
showToast('タスクを追加しました！', 'success');
showToast('データの保存に失敗しました', 'error');

よろしくお願いします！
```

---

## 🔍 生成されたコードの読み方

### ✅ LocalStorageのチェックポイント

```javascript
// ✅ try-catchでエラーをキャッチしているか
try {
  const json = JSON.stringify(tasks);
  localStorage.setItem(STORAGE_KEY, json);
} catch (error) {
  console.error('エラー:', error);
}

// ✅ JSON.parseの前にnullチェックしているか
const json = localStorage.getItem(STORAGE_KEY);
if (json) { // ← nullチェック
  tasks = JSON.parse(json);
}

// ✅ 配列かどうかチェックしているか
if (Array.isArray(parsed)) {
  tasks = parsed;
} else {
  throw new Error('データ形式が不正');
}
```

### ✅ トースト通知のチェックポイント

```javascript
// ✅ 自動削除のタイマーが設定されているか
setTimeout(() => {
  toast.remove();
}, duration);

// ✅ アニメーションが適用されているか
toast.style.animation = 'slideOutRight 0.3s ease';
setTimeout(() => {
  toast.remove();
}, 300); // アニメーション時間と同じ
```

---

## ⚠️ よくある問題と解決方法

### 問題1：ページを更新してもデータが残らない

```text
❌ 原因：
saveToLocalStorage()を呼び忘れている

✅ 解決方法：
すべてのデータ変更操作の後にsaveToLocalStorage()を呼ぶ
```

### 問題2：「SyntaxError: Unexpected token」エラー

```text
❌ 原因：
LocalStorageに保存されたデータが破損している

✅ 解決方法：
try-catchでJSON.parseを囲み、エラー時は空配列で初期化
```

### 問題3：トーストが表示されない

```text
❌ 原因：
toast-container要素がHTMLに存在しない

✅ 解決方法：
index.htmlに<div id="toast-container">を追加
```

### 問題4：トーストが消えない

```text
❌ 原因：
setTimeout()でtoast.remove()を呼んでいない

✅ 解決方法：
setTimeout(() => { toast.remove(); }, duration);
```

### 問題5：LocalStorageの容量オーバー

```text
❌ 原因：
データ量が多すぎる（約5MB超過）

✅ 解決方法：
保存前にデータサイズをチェックし、エラーメッセージを表示
```

---

## 💪 実践課題

### 課題1：基礎編（必須）

Lesson 5で作成したTODOアプリに、以下の機能を追加してください：

1. **LocalStorageでのデータ永続化**
   - saveToLocalStorage()とloadFromLocalStorage()を実装
   - すべてのデータ変更操作で自動保存

2. **ローディング表示**
   - ページ読み込み時に「読み込み中...」を表示

3. **トースト通知**
   - 操作成功時に通知を表示（3秒後に自動消去）

4. **エラーハンドリング**
   - try-catchでエラーをキャッチ
   - エラー時にユーザーに通知

**目標コード行数**：約500-600行

### 課題2：応用編（推奨）

基礎編の機能に加えて、以下の改善を加えてください：

1. **データのバックアップ/リストア機能**

   ```text
   「バックアップ」ボタン：データをJSONファイルとしてダウンロード
   「リストア」ボタン：JSONファイルを読み込んでデータを復元
   ```

2. **データのクリア機能**

   ```text
   「すべてのデータを削除」ボタン
   確認ダイアログ表示
   削除後はLocalStorageもクリア
   ```

3. **オフライン対応**

   ```text
   navigator.onLineでオンライン/オフラインを検出
   オフライン時は「オフラインモードで動作中」と表示
   オンラインに復帰したら通知
   ```

4. **複数のトーストを同時表示**

   ```text
   トーストが複数ある場合、縦に並べて表示
   古いトーストから順に消える
   ```

### 課題3：チャレンジ（任意）

さらに高度な機能に挑戦してみよう！

1. **データの同期履歴**

   ```text
   LocalStorageに保存した日時を記録
   「最終更新：2025-12-01 14:30」と表示
   ```

2. **容量使用状況の表示**

   ```text
   LocalStorageの使用容量を表示
   「使用中：1.2MB / 5MB」のようにプログレスバー表示
   ```

3. **データの圧縮**

   ```text
   LZ-String などのライブラリを使ってデータを圧縮
   LocalStorageの容量を節約
   ```

---

## 📝 まとめ

### このレッスンで学んだこと

✅ **LocalStorage**：ブラウザにデータを永続保存  
✅ **エラーハンドリング**：try-catchで安全にデータを扱う  
✅ **ローディング表示**：ユーザーに状態を伝える  
✅ **トースト通知**：操作のフィードバックを提供  
✅ **アニメーション**：滑らかな動きでUX向上

### コードの成長

```text
Lesson 5（機能拡張）：
- 基本機能 + 編集、フィルター、ソート、検索
- 約400-500行

Lesson 6（永続化とUI改善）：
- 上記 + LocalStorage、ローディング、トースト、アニメーション
- 約500-600行
```

### 次のステップ

次の Lesson 7 では、以下の内容に取り組むよ：

- **コードの整理** → 読みやすく、保守しやすいコードに
- **パフォーマンス最適化** → 大量のタスクでも快適に動作
- **アクセシビリティ改善** → キーボード操作、スクリーンリーダー対応
- **ブラウザ互換性確認** → 複数のブラウザで動作確認

プロフェッショナルなコード品質に仕上げていくよ！

👉 [Lesson 7: 最終調整とリファクタリング へ進む](../07-final-touches/README.md)

---

**Let's vibe and code!** 🎉

データ永続化とUI改善で、あなたのTODOアプリが実用レベルになったよ！
次のLesson 7で、さらに磨きをかけて完成させよう！ ✨
