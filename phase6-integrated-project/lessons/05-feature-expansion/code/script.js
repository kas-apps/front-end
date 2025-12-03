// ========================================
// グローバル変数
// ========================================

// タスク配列（ここに全てのタスクを保存）
let tasks = [];

// 編集中のタスクID（nullの場合は編集モードではない）
let editingTaskId = null;

// フィルター・ソート・検索の状態
let currentStatusFilter = 'all'; // 'all' | 'active' | 'completed'
let currentCategoryFilter = 'all'; // 'all' | 'work' | 'personal' | 'shopping'
let currentSort = 'createdAt-desc'; // 'field-direction'
let searchKeyword = '';

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

// 検索
const searchInput = document.getElementById('search-input');

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

// 検索入力時の処理（デバウンス付き）
searchInput.addEventListener('input', debounce((e) => {
  setSearchKeyword(e.target.value);
}, 300));

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

// ========================================
// 編集機能
// ========================================

/**
 * 編集モードを開始
 */
function startEdit(taskId) {
  editingTaskId = taskId;
  renderTasks();

  // 編集フォームのタイトル入力欄にフォーカス
  setTimeout(() => {
    const titleInput = document.getElementById(`edit-title-${taskId}`);
    if (titleInput) {
      titleInput.focus();
      titleInput.select();
    }
  }, 0);
}

/**
 * 編集をキャンセル
 */
function cancelEdit() {
  editingTaskId = null;
  renderTasks();
}

/**
 * 編集を保存
 */
function saveEdit(event, taskId) {
  event.preventDefault();

  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  // フォームから値を取得
  const title = document.getElementById(`edit-title-${taskId}`).value.trim();
  const description = document.getElementById(`edit-description-${taskId}`).value.trim();
  const priority = document.getElementById(`edit-priority-${taskId}`).value;
  const category = document.getElementById(`edit-category-${taskId}`).value;
  const dueDate = document.getElementById(`edit-dueDate-${taskId}`).value;

  // バリデーション
  if (!title) {
    alert('タスクタイトルを入力してください');
    return;
  }

  if (title.length > 100) {
    alert('タスクタイトルは100文字以内で入力してください');
    return;
  }

  // タスクを更新
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.category = category;
  task.dueDate = dueDate || null;

  // 編集モード解除
  editingTaskId = null;

  // 画面を更新
  renderTasks();
}

// ========================================
// フィルター・ソート・検索
// ========================================

/**
 * ステータスフィルターを設定
 */
function setStatusFilter(status) {
  currentStatusFilter = status;
  updateFilterButtons();
  renderTasks();
}

/**
 * カテゴリフィルターを設定
 */
function setCategoryFilter(category) {
  currentCategoryFilter = category;
  updateCategoryButtons();
  renderTasks();
}

/**
 * ソート順を設定
 */
function setSort(sortOrder) {
  currentSort = sortOrder;
  renderTasks();
}

/**
 * 検索キーワードを設定
 */
function setSearchKeyword(keyword) {
  searchKeyword = keyword.trim().toLowerCase();
  renderTasks();
}

/**
 * フィルターを適用
 */
function applyFilters(taskList) {
  return taskList.filter(task => {
    // ステータスフィルター
    if (currentStatusFilter === 'active' && task.completed) return false;
    if (currentStatusFilter === 'completed' && !task.completed) return false;

    // カテゴリフィルター
    if (currentCategoryFilter !== 'all' && task.category !== currentCategoryFilter) {
      return false;
    }

    return true;
  });
}

/**
 * 検索を適用
 */
function applySearch(taskList) {
  if (!searchKeyword) return taskList;

  return taskList.filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchKeyword);
    const descriptionMatch = task.description.toLowerCase().includes(searchKeyword);
    return titleMatch || descriptionMatch;
  });
}

/**
 * ソートを適用
 */
function applySort(taskList) {
  const [field, order] = currentSort.split('-'); // 'priority-desc' → ['priority', 'desc']

  return [...taskList].sort((a, b) => {
    let aValue, bValue;

    if (field === 'priority') {
      // 優先度のソート（high=3, medium=2, low=1）
      const priorityValues = { high: 3, medium: 2, low: 1 };
      aValue = priorityValues[a.priority];
      bValue = priorityValues[b.priority];
    } else if (field === 'dueDate') {
      // 締切日のソート（nullは最後）
      aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
      bValue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    } else if (field === 'createdAt') {
      // 作成日のソート
      aValue = new Date(a.createdAt).getTime();
      bValue = new Date(b.createdAt).getTime();
    }

    // 昇順/降順
    if (order === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });
}

/**
 * フィルター・検索・ソートを適用したタスクリストを取得
 */
function getProcessedTasks() {
  let result = tasks;

  // 1. フィルター適用
  result = applyFilters(result);

  // 2. 検索適用
  result = applySearch(result);

  // 3. ソート適用
  result = applySort(result);

  return result;
}

// ========================================
// 描画関連
// ========================================

/**
 * タスク一覧を描画
 */
function renderTasks() {
  // フィルター・検索・ソートを適用
  const processedTasks = getProcessedTasks();

  // タスクがない場合
  if (processedTasks.length === 0) {
    taskListElement.innerHTML = '';
    noTasksMessage.style.display = 'block';
    updateStats();
    return;
  }

  // タスクがある場合はメッセージを非表示
  noTasksMessage.style.display = 'none';

  // タスクカードのHTMLを生成
  const tasksHTML = processedTasks.map(task => {
    if (editingTaskId === task.id) {
      // 編集モード
      return generateEditForm(task);
    } else {
      // 表示モード
      return createTaskCard(task);
    }
  }).join('');

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
  const completedClass = task.completed ? 'completed-task' : '';
  const completedTextClass = task.completed ? 'line-through' : '';

  // 締切日の表示
  const dueDateHTML = task.dueDate
    ? `<div class="text-sm text-gray-600 mt-2">
         📅 締切: ${formatDate(task.dueDate)}
       </div>`
    : '';

  return `
    <div class="card bg-white rounded-lg shadow-md p-6 ${completedClass}">
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
          <h3 class="task-title text-lg font-bold text-gray-800 ${completedTextClass}">
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

      <!-- 編集・削除ボタン -->
      <div class="mt-4 pt-4 border-t border-gray-200 flex gap-2">
        <button
          onclick="startEdit(${task.id})"
          class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          ✏️ 編集
        </button>
        <button
          onclick="deleteTask(${task.id})"
          class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          🗑️ 削除
        </button>
      </div>
    </div>
  `;
}

/**
 * 編集フォームのHTMLを生成
 */
function generateEditForm(task) {
  return `
    <div class="card edit-form bg-white rounded-lg shadow-md p-6">
      <form onsubmit="saveEdit(event, ${task.id})">
        <!-- タイトル -->
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            タイトル <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="edit-title-${task.id}"
            value="${escapeHTML(task.title)}"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
        </div>

        <!-- 説明 -->
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            説明
          </label>
          <textarea
            id="edit-description-${task.id}"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
          >${escapeHTML(task.description)}</textarea>
        </div>

        <!-- 優先度・カテゴリ・締切日 -->
        <div class="grid grid-cols-3 gap-2 mb-3">
          <!-- 優先度 -->
          <select
            id="edit-priority-${task.id}"
            class="px-2 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="high" ${task.priority === 'high' ? 'selected' : ''}>高</option>
            <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>中</option>
            <option value="low" ${task.priority === 'low' ? 'selected' : ''}>低</option>
          </select>

          <!-- カテゴリ -->
          <select
            id="edit-category-${task.id}"
            class="px-2 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="work" ${task.category === 'work' ? 'selected' : ''}>仕事</option>
            <option value="personal" ${task.category === 'personal' ? 'selected' : ''}>プライベート</option>
            <option value="shopping" ${task.category === 'shopping' ? 'selected' : ''}>買い物</option>
          </select>

          <!-- 締切日 -->
          <input
            type="date"
            id="edit-dueDate-${task.id}"
            value="${task.dueDate || ''}"
            class="px-2 py-1 border border-gray-300 rounded-lg text-sm"
          >
        </div>

        <!-- 保存・キャンセルボタン -->
        <div class="flex gap-2">
          <button
            type="submit"
            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            💾 保存
          </button>
          <button
            type="button"
            onclick="cancelEdit()"
            class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
          >
            ❌ キャンセル
          </button>
        </div>
      </form>
    </div>
  `;
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

/**
 * フィルターボタンのアクティブ状態を更新
 */
function updateFilterButtons() {
  // すべてのフィルターボタンからactiveクラスを削除
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-blue-600', 'text-white');
    btn.classList.add('bg-gray-200', 'text-gray-700');
  });

  // 現在のフィルターに対応するボタンにactiveクラスを追加
  const activeButton = document.getElementById(`filter-${currentStatusFilter}`);
  if (activeButton) {
    activeButton.classList.add('active', 'bg-blue-600', 'text-white');
    activeButton.classList.remove('bg-gray-200', 'text-gray-700');
  }
}

/**
 * カテゴリボタンのアクティブ状態を更新
 */
function updateCategoryButtons() {
  // すべてのカテゴリボタンからactiveクラスを削除
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-blue-600', 'text-white');
    btn.classList.add('bg-gray-200', 'text-gray-700');
  });

  // 現在のカテゴリに対応するボタンにactiveクラスを追加
  const activeButton = document.getElementById(`category-${currentCategoryFilter}`);
  if (activeButton) {
    activeButton.classList.add('active', 'bg-blue-600', 'text-white');
    activeButton.classList.remove('bg-gray-200', 'text-gray-700');
  }
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

/**
 * デバウンス（連続実行を防ぐ）
 */
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
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
      description: "週3回の運動習慣を継続する",
      priority: "low",
      category: "personal",
      dueDate: "2025-12-05",
      completed: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 4,
      title: "技術ブログを更新する",
      description: "Phase 6の進捗状況をブログ記事として公開する",
      priority: "medium",
      category: "personal",
      dueDate: "2025-12-20",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 5,
      title: "Lesson 1の要件定義を作成",
      description: "要件定義書のテンプレートと事例を作成した",
      priority: "high",
      category: "work",
      dueDate: "2025-12-01",
      completed: true,
      createdAt: new Date().toISOString()
    }
  ];
  renderTasks();
});
