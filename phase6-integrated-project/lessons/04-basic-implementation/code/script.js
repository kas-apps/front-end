// ========================================
// グローバル変数
// ========================================

// タスク配列（ここに全てのタスクを保存）
let tasks = [];

// ========================================
// DOM要素の取得
// ========================================

// フォーム関連
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskPriorityInput = document.getElementById('task-priority');
const taskCategoryInput = document.getElementById('task-category');
const taskDueDateInput = document.getElementById('task-due-date');

// タスク一覧関連
const taskListElement = document.getElementById('task-list');
const noTasksMessage = document.getElementById('no-tasks-message');

// 統計表示関連
const totalCountElement = document.getElementById('total-count');
const incompleteCountElement = document.getElementById('incomplete-count');
const completedCountElement = document.getElementById('completed-count');

// ========================================
// イベントリスナー
// ========================================

// フォーム送信時の処理
taskForm.addEventListener('submit', handleAddTask);

// ========================================
// メイン機能
// ========================================

/**
 * タスク追加処理
 */
function handleAddTask(e) {
  // ページリロードを防ぐ
  e.preventDefault();

  // フォームから値を取得
  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const priority = taskPriorityInput.value;
  const category = taskCategoryInput.value;
  const dueDate = taskDueDateInput.value;

  // バリデーション
  if (!title) {
    alert('タスクタイトルを入力してください');
    return;
  }

  if (title.length > 100) {
    alert('タスクタイトルは100文字以内で入力してください');
    return;
  }

  // 新しいタスクオブジェクトを作成
  const newTask = {
    id: Date.now(), // 一意のIDとしてタイムスタンプを使用
    title: title,
    description: description,
    priority: priority,
    category: category,
    dueDate: dueDate || null,
    completed: false,
    createdAt: new Date().toISOString()
  };

  // タスク配列に追加
  tasks.push(newTask);

  // 画面を更新
  renderTasks();

  // フォームをリセット
  taskForm.reset();

  // フォームの最初の入力欄にフォーカス
  taskTitleInput.focus();
}

/**
 * タスク一覧を描画
 */
function renderTasks() {
  // タスクがない場合
  if (tasks.length === 0) {
    taskListElement.innerHTML = '';
    noTasksMessage.style.display = 'block';
    updateStats();
    return;
  }

  // タスクがある場合はメッセージを非表示
  noTasksMessage.style.display = 'none';

  // タスクカードのHTMLを生成
  const tasksHTML = tasks.map(task => createTaskCard(task)).join('');

  // タスク一覧エリアに表示
  taskListElement.innerHTML = tasksHTML;

  // 統計を更新
  updateStats();
}

/**
 * タスクカードのHTMLを生成
 */
function createTaskCard(task) {
  // 優先度の色を決定
  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  const priorityLabels = {
    high: '🔴 高',
    medium: '🟡 中',
    low: '🟢 低'
  };

  // カテゴリのアイコンを決定
  const categoryIcons = {
    work: '💼',
    personal: '🏠',
    shopping: '🛒'
  };

  const categoryLabels = {
    work: '仕事',
    personal: 'プライベート',
    shopping: '買い物'
  };

  // 完了したタスクのスタイル
  const completedStyle = task.completed ? 'opacity-60' : '';
  const completedTextStyle = task.completed ? 'line-through' : '';

  // 締切日の表示
  const dueDateHTML = task.dueDate
    ? `<div class="text-sm text-gray-600 mt-2">
         📅 締切: ${formatDate(task.dueDate)}
       </div>`
    : '';

  return `
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-6 ${completedStyle}">
      <!-- 完了チェックボックス -->
      <div class="flex items-start mb-3">
        <input
          type="checkbox"
          ${task.completed ? 'checked' : ''}
          onchange="toggleComplete(${task.id})"
          class="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
        <div class="ml-3 flex-1">
          <!-- タイトル -->
          <h3 class="text-lg font-bold text-gray-800 ${completedTextStyle}">
            ${escapeHTML(task.title)}
          </h3>
          <!-- 説明 -->
          ${task.description
            ? `<p class="text-gray-600 mt-2 line-clamp-2">${escapeHTML(task.description)}</p>`
            : ''
          }
        </div>
      </div>

      <!-- 優先度とカテゴリ -->
      <div class="flex gap-2 mt-3">
        <span class="${priorityColors[task.priority]} text-white text-xs font-semibold px-3 py-1 rounded-full">
          ${priorityLabels[task.priority]}
        </span>
        <span class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
          ${categoryIcons[task.category]} ${categoryLabels[task.category]}
        </span>
      </div>

      <!-- 締切日 -->
      ${dueDateHTML}

      <!-- 削除ボタン -->
      <div class="mt-4 pt-4 border-t border-gray-200">
        <button
          onclick="deleteTask(${task.id})"
          class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          🗑️ 削除
        </button>
      </div>
    </div>
  `;
}

/**
 * タスクの完了/未完了を切り替え
 */
function toggleComplete(taskId) {
  // 該当するタスクを見つけて、completedフラグを反転
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

/**
 * タスクを削除
 */
function deleteTask(taskId) {
  // 確認ダイアログを表示
  if (!confirm('このタスクを削除しますか？')) {
    return;
  }

  // 該当するタスクを配列から削除
  tasks = tasks.filter(t => t.id !== taskId);

  // 画面を更新
  renderTasks();
}

/**
 * 統計情報を更新
 */
function updateStats() {
  const totalCount = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const incompleteCount = totalCount - completedCount;

  totalCountElement.textContent = totalCount;
  completedCountElement.textContent = completedCount;
  incompleteCountElement.textContent = incompleteCount;
}

// ========================================
// ユーティリティ関数
// ========================================

/**
 * HTMLエスケープ（XSS対策）
 */
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * 日付をYYYY-MM-DD形式から読みやすい形式に変換
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

// ========================================
// 初期化
// ========================================

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
  // 初期状態を描画
  renderTasks();

  // サンプルデータを追加（デモ用）
  // コメントを外すと、最初からサンプルタスクが表示されます
  /*
  tasks = [
    {
      id: 1,
      title: "Phase 6の教材を完成させる",
      description: "Lesson 1-8とfinal-projectを作成する",
      priority: "high",
      category: "work",
      dueDate: "2025-12-15",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: "買い物に行く",
      description: "牛乳、卵、パンを買う",
      priority: "medium",
      category: "shopping",
      dueDate: null,
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      title: "ジムに行く",
      description: "",
      priority: "low",
      category: "personal",
      dueDate: "2025-12-05",
      completed: true,
      createdAt: new Date().toISOString()
    }
  ];
  renderTasks();
  */
});
