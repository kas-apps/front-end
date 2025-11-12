// ===================================
// グローバル変数（Lesson 01: 変数と配列）
// ===================================

// タスクを管理する配列
let tasks = [];

// 次のタスクID
let nextId = 1;

// ===================================
// DOM要素の取得（Lesson 05: DOM操作）
// ===================================

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

// 統計情報の要素
const totalTasksElement = document.getElementById('totalTasks');
const incompleteTasksElement = document.getElementById('incompleteTasks');
const completedTasksElement = document.getElementById('completedTasks');

// ===================================
// イベントリスナーの設定（Lesson 05: イベント）
// ===================================

// 追加ボタンをクリックした時
addButton.addEventListener('click', () => {
  addTask();
});

// Enterキーを押した時
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// ===================================
// タスクを追加する関数（Lesson 03: 関数）
// ===================================

function addTask() {
  // 入力値を取得（前後の空白を削除）
  const taskText = taskInput.value.trim();

  // 空の場合は何もしない（Lesson 02: 条件分岐）
  if (taskText === '') {
    alert('タスクを入力してください！');
    return;
  }

  // タスクオブジェクトを作成（Lesson 04: オブジェクト）
  const task = {
    id: nextId++,
    text: taskText,
    completed: false
  };

  // 配列に追加
  tasks.push(task);

  // タスクリストを再描画
  renderTasks();

  // 入力欄をクリア
  taskInput.value = '';

  // 入力欄にフォーカスを戻す
  taskInput.focus();
}

// ===================================
// タスクリストを描画する関数（Lesson 04: ループ）
// ===================================

function renderTasks() {
  // リストをクリア
  taskList.innerHTML = '';

  // 配列をループで処理
  tasks.forEach((task) => {
    // タスク要素を作成
    const li = createTaskElement(task);

    // リストに追加
    taskList.appendChild(li);
  });

  // 統計情報を更新
  updateStats();

  // 空メッセージの表示/非表示を切り替え
  toggleEmptyMessage();
}

// ===================================
// タスク要素を作成する関数（Lesson 05: DOM操作）
// ===================================

function createTaskElement(task) {
  // li要素を作成
  const li = document.createElement('li');
  li.className = 'task-item';

  // 完了済みの場合はクラスを追加
  if (task.completed) {
    li.classList.add('completed');
  }

  // チェックボックスを作成
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  checkbox.checked = task.completed;

  // チェックボックスをクリックした時
  checkbox.addEventListener('click', () => {
    toggleTask(task.id);
  });

  // タスクテキストを作成
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = task.text;

  // 削除ボタンを作成
  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn-delete';
  deleteButton.textContent = '削除';

  // 削除ボタンをクリックした時
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });

  // li要素に追加
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}

// ===================================
// タスクの完了状態を切り替える関数（Lesson 02: 条件分岐）
// ===================================

function toggleTask(id) {
  // 配列から該当のタスクを検索
  const task = tasks.find(t => t.id === id);

  if (task) {
    // 完了状態を反転
    task.completed = !task.completed;

    // 再描画
    renderTasks();
  }
}

// ===================================
// タスクを削除する関数（Lesson 04: 配列操作）
// ===================================

function deleteTask(id) {
  // 削除確認（オプション）
  if (!confirm('このタスクを削除してもよろしいですか？')) {
    return;
  }

  // 配列から該当のタスクを除外
  tasks = tasks.filter(t => t.id !== id);

  // 再描画
  renderTasks();
}

// ===================================
// 統計情報を更新する関数（Lesson 04: 配列操作）
// ===================================

function updateStats() {
  // 全タスク数
  const total = tasks.length;

  // 完了済みタスク数
  const completed = tasks.filter(t => t.completed).length;

  // 未完了タスク数
  const incomplete = total - completed;

  // 統計情報を表示
  totalTasksElement.textContent = total;
  completedTasksElement.textContent = completed;
  incompleteTasksElement.textContent = incomplete;
}

// ===================================
// 空メッセージの表示/非表示を切り替える関数
// ===================================

function toggleEmptyMessage() {
  if (tasks.length === 0) {
    emptyMessage.classList.remove('hidden');
  } else {
    emptyMessage.classList.add('hidden');
  }
}

// ===================================
// 初期化（ページ読み込み時に実行）
// ===================================

// 初期状態を表示
renderTasks();
