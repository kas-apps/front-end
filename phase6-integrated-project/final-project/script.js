// ============================================
// 定数定義
// ============================================

/**
 * アプリケーション全体で使用する定数
 */
const STORAGE_KEY = 'card-todo-tasks';
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;
const TOAST_DURATION = 3000;
const DEBOUNCE_DELAY = 300;
const LOADING_DELAY = 500;

/**
 * フィルター種別の定義
 */
const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

/**
 * カテゴリ種別の定義
 */
const CATEGORY = {
  ALL: 'all',
  WORK: 'work',
  PERSONAL: 'personal',
  SHOPPING: 'shopping',
};

/**
 * 優先度の定義と値
 */
const PRIORITY = {
  HIGH: { value: 'high', weight: 3, icon: '🔴', label: '高' },
  MEDIUM: { value: 'medium', weight: 2, icon: '🟡', label: '中' },
  LOW: { value: 'low', weight: 1, icon: '🟢', label: '低' },
};

/**
 * カテゴリアイコンのマッピング
 */
const CATEGORY_ICONS = {
  [CATEGORY.WORK]: '💼',
  [CATEGORY.PERSONAL]: '🏠',
  [CATEGORY.SHOPPING]: '🛒',
};

// ============================================
// DOM要素の取得
// ============================================

const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskPrioritySelect = document.getElementById('task-priority');
const taskCategorySelect = document.getElementById('task-category');
const taskDueDateInput = document.getElementById('task-due-date');
const taskListElement = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const loadingElement = document.getElementById('loading');
const toastContainer = document.getElementById('toast-container');
const noTasksMessage = document.getElementById('no-tasks-message');

// 統計表示用の要素
const totalCountElement = document.getElementById('total-count');
const incompleteCountElement = document.getElementById('incomplete-count');
const completedCountElement = document.getElementById('completed-count');

// ============================================
// グローバル変数
// ============================================

let tasks = [];
let editingTaskId = null;
let currentStatusFilter = FILTER.ALL;
let currentCategoryFilter = CATEGORY.ALL;
let currentSort = 'createdAt-desc';
let searchKeyword = '';

// ============================================
// ユーティリティ関数
// ============================================

/**
 * HTMLエスケープ（XSS対策）
 * @param {string} str - エスケープする文字列
 * @returns {string} エスケープされた文字列
 */
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * デバウンス関数
 * @param {Function} func - 実行する関数
 * @param {number} delay - 遅延時間（ミリ秒）
 * @returns {Function} デバウンスされた関数
 */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 日付をフォーマット（YYYY-MM-DD形式）
 * @param {string} dateString - 日付文字列
 * @returns {string} フォーマットされた日付
 */
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 優先度情報を取得
 * @param {string} priority - 優先度の値
 * @returns {Object} 優先度の情報
 */
function getPriorityInfo(priority) {
  const priorityMap = {
    high: PRIORITY.HIGH,
    medium: PRIORITY.MEDIUM,
    low: PRIORITY.LOW,
  };
  return priorityMap[priority] || PRIORITY.MEDIUM;
}

// ============================================
// UI関連の関数
// ============================================

/**
 * ローディング画面を表示
 */
function showLoading() {
  if (loadingElement) {
    loadingElement.style.display = 'flex';
  }
}

/**
 * ローディング画面を非表示
 */
function hideLoading() {
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}

/**
 * トースト通知を表示
 * @param {string} message - 表示するメッセージ
 * @param {string} type - トーストの種類（success, error, info, warning）
 * @param {number} duration - 表示時間（ミリ秒、デフォルト：3000）
 */
function showToast(message, type = 'info', duration = TOAST_DURATION) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `
    <span class="text-2xl">${icon}</span>
    <span class="flex-1">${escapeHTML(message)}</span>
    <button onclick="this.parentElement.remove()" aria-label="閉じる">
      ✕
    </button>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('showing');
  });

  setTimeout(() => {
    toast.classList.remove('showing');
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// ============================================
// LocalStorage関連の関数
// ============================================

/**
 * タスクをLocalStorageに保存
 * @throws {Error} 容量不足の場合
 */
function saveToLocalStorage() {
  try {
    const json = JSON.stringify(tasks);

    if (json.length > 5000000) {
      showToast('データ容量が上限に達しました', 'error');
      return;
    }

    localStorage.setItem(STORAGE_KEY, json);
    console.log('✅ データを保存しました:', tasks.length, '件');
  } catch (error) {
    console.error('❌ データの保存に失敗:', error);

    if (error.name === 'QuotaExceededError') {
      showToast('ストレージの容量が不足しています', 'error');
    } else {
      showToast('データの保存に失敗しました', 'error');
    }
  }
}

/**
 * LocalStorageからタスクを読み込み
 */
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);

    if (json) {
      const parsed = JSON.parse(json);

      if (Array.isArray(parsed)) {
        tasks = parsed;
        console.log('✅ データを読み込みました:', tasks.length, '件');
      } else {
        throw new Error('データ形式が不正です');
      }
    } else {
      tasks = [];
      console.log('ℹ️ 初回起動：空のタスクリストで開始');
    }
  } catch (error) {
    console.error('❌ データの読み込みに失敗:', error);
    localStorage.removeItem(STORAGE_KEY);
    tasks = [];
    showToast('データが破損していたため、初期化しました', 'error');
  }
}

// ============================================
// フィルター・検索・ソート関連の関数
// ============================================

/**
 * フィルターを適用
 * @param {Array} taskList - タスクのリスト
 * @returns {Array} フィルターされたタスクのリスト
 */
function applyFilters(taskList) {
  return taskList.filter((task) => {
    if (currentStatusFilter === FILTER.ACTIVE && task.completed) return false;
    if (currentStatusFilter === FILTER.COMPLETED && !task.completed)
      return false;
    if (
      currentCategoryFilter !== CATEGORY.ALL &&
      task.category !== currentCategoryFilter
    ) {
      return false;
    }
    return true;
  });
}

/**
 * 検索を適用
 * @param {Array} taskList - タスクのリスト
 * @returns {Array} 検索結果のタスクのリスト
 */
function applySearch(taskList) {
  if (!searchKeyword) return taskList;

  return taskList.filter((task) => {
    const titleMatch = task.title
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    const descriptionMatch = (task.description || '')
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    return titleMatch || descriptionMatch;
  });
}

/**
 * ソートを適用
 * @param {Array} taskList - タスクのリスト
 * @returns {Array} ソートされたタスクのリスト
 */
function applySort(taskList) {
  const [field, order] = currentSort.split('-');

  return [...taskList].sort((a, b) => {
    let aValue, bValue;

    if (field === 'priority') {
      aValue = getPriorityInfo(a.priority).weight;
      bValue = getPriorityInfo(b.priority).weight;
    } else if (field === 'dueDate') {
      aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
      bValue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    } else if (field === 'createdAt') {
      aValue = new Date(a.createdAt).getTime();
      bValue = new Date(b.createdAt).getTime();
    }

    return order === 'asc' ? aValue - bValue : bValue - aValue;
  });
}

/**
 * 処理済みタスクを取得（フィルター・検索・ソート適用）
 * @returns {Array} 処理済みのタスクのリスト
 */
function getProcessedTasks() {
  let result = tasks;
  result = applyFilters(result);
  result = applySearch(result);
  result = applySort(result);
  return result;
}

/**
 * ステータスフィルターを設定
 * @param {string} status - フィルターの種類
 */
function setStatusFilter(status) {
  currentStatusFilter = status;
  updateFilterButtons();
  renderTasks();
}

/**
 * カテゴリフィルターを設定
 * @param {string} category - カテゴリの種類
 */
function setCategoryFilter(category) {
  currentCategoryFilter = category;
  updateCategoryButtons();
  renderTasks();
}

/**
 * ソート順を設定
 * @param {string} sortOrder - ソート順（field-direction形式）
 */
function setSort(sortOrder) {
  currentSort = sortOrder;
  renderTasks();
}

/**
 * 検索キーワードを設定
 * @param {string} keyword - 検索キーワード
 */
function setSearchKeyword(keyword) {
  searchKeyword = keyword.trim().toLowerCase();
  renderTasks();
}

/**
 * フィルターボタンのUI更新
 */
function updateFilterButtons() {
  const buttons = {
    [FILTER.ALL]: document.getElementById('filter-all'),
    [FILTER.ACTIVE]: document.getElementById('filter-active'),
    [FILTER.COMPLETED]: document.getElementById('filter-completed'),
  };

  Object.entries(buttons).forEach(([filter, button]) => {
    if (button) {
      const isActive = currentStatusFilter === filter;
      button.classList.toggle('active', isActive);
      button.classList.toggle('bg-blue-600', isActive);
      button.classList.toggle('text-white', isActive);
      button.classList.toggle('bg-gray-200', !isActive);
      button.classList.toggle('text-gray-700', !isActive);
      button.setAttribute('aria-pressed', isActive);
    }
  });
}

/**
 * カテゴリボタンのUI更新
 */
function updateCategoryButtons() {
  const buttons = {
    [CATEGORY.ALL]: document.getElementById('category-all'),
    [CATEGORY.WORK]: document.getElementById('category-work'),
    [CATEGORY.PERSONAL]: document.getElementById('category-personal'),
    [CATEGORY.SHOPPING]: document.getElementById('category-shopping'),
  };

  Object.entries(buttons).forEach(([category, button]) => {
    if (button) {
      const isActive = currentCategoryFilter === category;
      button.classList.toggle('active', isActive);
      button.classList.toggle('bg-blue-600', isActive);
      button.classList.toggle('text-white', isActive);
      button.classList.toggle('bg-gray-200', !isActive);
      button.classList.toggle('text-gray-700', !isActive);
      button.setAttribute('aria-pressed', isActive);
    }
  });
}

// ============================================
// タスク操作関連の関数
// ============================================

/**
 * タスクを追加
 * @param {Event} e - フォーム送信イベント
 */
function handleAddTask(e) {
  e.preventDefault();

  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const priority = taskPrioritySelect.value;
  const category = taskCategorySelect.value;
  const dueDate = taskDueDateInput.value;

  if (!title) {
    showToast('タスクタイトルを入力してください', 'warning');
    taskTitleInput.focus();
    return;
  }

  if (title.length > MAX_TITLE_LENGTH) {
    showToast(
      `タスクタイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`,
      'warning'
    );
    return;
  }

  if (description.length > MAX_DESCRIPTION_LENGTH) {
    showToast(
      `タスクの説明は${MAX_DESCRIPTION_LENGTH}文字以内で入力してください`,
      'warning'
    );
    return;
  }

  const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    priority: priority,
    category: category,
    dueDate: dueDate || null,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveToLocalStorage();
  renderTasks();
  showToast('タスクを追加しました！', 'success');

  taskForm.reset();
  taskTitleInput.focus();
}

/**
 * タスクを削除
 * @param {number} taskId - 削除するタスクのID
 */
function deleteTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  tasks = tasks.filter((t) => t.id !== taskId);
  saveToLocalStorage();
  renderTasks();
  showToast('タスクを削除しました', 'info');
}

/**
 * タスクの完了状態を切り替え
 * @param {number} taskId - 切り替えるタスクのID
 */
function toggleComplete(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  saveToLocalStorage();
  renderTasks();

  const message = task.completed
    ? 'タスクを完了しました'
    : 'タスクを未完了に戻しました';
  showToast(message, 'info');
}

/**
 * 編集モードを開始
 * @param {number} taskId - 編集するタスクのID
 */
function startEdit(taskId) {
  editingTaskId = taskId;
  renderTasks();

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
  if (editingTaskId !== null) {
    editingTaskId = null;
    renderTasks();
    showToast('編集をキャンセルしました', 'info');
  }
}

/**
 * 編集を保存
 * @param {Event} event - フォーム送信イベント
 * @param {number} taskId - 編集するタスクのID
 */
function saveEdit(event, taskId) {
  event.preventDefault();

  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  const title = document.getElementById(`edit-title-${taskId}`).value.trim();
  const description = document
    .getElementById(`edit-description-${taskId}`)
    .value.trim();
  const priority = document.getElementById(`edit-priority-${taskId}`).value;
  const category = document.getElementById(`edit-category-${taskId}`).value;
  const dueDate = document.getElementById(`edit-duedate-${taskId}`).value;

  if (!title) {
    showToast('タスクタイトルを入力してください', 'warning');
    return;
  }

  if (title.length > MAX_TITLE_LENGTH) {
    showToast(
      `タスクタイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`,
      'warning'
    );
    return;
  }

  task.title = title;
  task.description = description;
  task.priority = priority;
  task.category = category;
  task.dueDate = dueDate || null;

  editingTaskId = null;
  saveToLocalStorage();
  renderTasks();
  showToast('タスクを更新しました', 'success');
}

// ============================================
// 描画関連の関数
// ============================================

/**
 * タスクカードのHTMLを生成
 * @param {Object} task - タスクオブジェクト
 * @returns {string} タスクカードのHTML
 */
function generateTaskCard(task) {
  const priorityInfo = getPriorityInfo(task.priority);
  const categoryIcon = CATEGORY_ICONS[task.category] || '📝';
  const completedClass = task.completed ? 'completed-task' : '';
  const dueDateText = task.dueDate ? formatDate(task.dueDate) : '期限なし';

  return `
    <div class="card ${completedClass} bg-white rounded-lg shadow-md p-6" role="listitem">
      <!-- チェックボックスと優先度 -->
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            class="task-checkbox w-5 h-5 cursor-pointer"
            data-task-id="${task.id}"
            ${task.completed ? 'checked' : ''}
            aria-label="タスク「${escapeHTML(task.title)}」を完了する"
          />
          <span class="text-2xl" title="${priorityInfo.label}優先度">${
    priorityInfo.icon
  }</span>
        </div>
        <span class="text-2xl" title="${task.category}カテゴリ">${categoryIcon}</span>
      </div>

      <!-- タイトル -->
      <h3 class="task-title text-lg font-bold mb-2 text-gray-800">
        ${escapeHTML(task.title)}
      </h3>

      <!-- 説明 -->
      ${
        task.description
          ? `
      <p class="text-sm text-gray-600 mb-3 line-clamp-2">
        ${escapeHTML(task.description)}
      </p>
      `
          : ''
      }

      <!-- 締切日 -->
      <div class="text-xs text-gray-500 mb-4">
        📅 締切：${escapeHTML(dueDateText)}
      </div>

      <!-- ボタン -->
      <div class="flex gap-2">
        <button
          class="edit-btn flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
          data-task-id="${task.id}"
          aria-label="タスク「${escapeHTML(task.title)}」を編集"
        >
          ✏️ 編集
        </button>
        <button
          class="delete-btn flex-1 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
          data-task-id="${task.id}"
          aria-label="タスク「${escapeHTML(task.title)}」を削除"
        >
          🗑️ 削除
        </button>
      </div>
    </div>
  `;
}

/**
 * 編集フォームのHTMLを生成
 * @param {Object} task - タスクオブジェクト
 * @returns {string} 編集フォームのHTML
 */
function generateEditForm(task) {
  return `
    <div class="card edit-form bg-gray-50 rounded-lg shadow-md p-6" role="listitem">
      <form onsubmit="saveEdit(event, ${task.id})" aria-label="タスク「${escapeHTML(
    task.title
  )}」を編集">
        <!-- タイトル -->
        <div class="mb-3">
          <label for="edit-title-${
            task.id
          }" class="block text-sm font-medium text-gray-700 mb-1">
            タイトル <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="edit-title-${task.id}"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            value="${escapeHTML(task.title)}"
            required
            aria-required="true"
          />
        </div>

        <!-- 説明 -->
        <div class="mb-3">
          <label for="edit-description-${
            task.id
          }" class="block text-sm font-medium text-gray-700 mb-1">
            説明
          </label>
          <textarea
            id="edit-description-${task.id}"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            rows="2"
          >${escapeHTML(task.description || '')}</textarea>
        </div>

        <!-- 優先度・カテゴリ・締切日 -->
        <div class="grid grid-cols-3 gap-2 mb-3">
          <!-- 優先度 -->
          <div>
            <label for="edit-priority-${
              task.id
            }" class="block text-xs font-medium text-gray-700 mb-1">
              優先度
            </label>
            <select
              id="edit-priority-${task.id}"
              class="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
            >
              <option value="high" ${
                task.priority === 'high' ? 'selected' : ''
              }>🔴 高</option>
              <option value="medium" ${
                task.priority === 'medium' ? 'selected' : ''
              }>🟡 中</option>
              <option value="low" ${
                task.priority === 'low' ? 'selected' : ''
              }>🟢 低</option>
            </select>
          </div>

          <!-- カテゴリ -->
          <div>
            <label for="edit-category-${
              task.id
            }" class="block text-xs font-medium text-gray-700 mb-1">
              カテゴリ
            </label>
            <select
              id="edit-category-${task.id}"
              class="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
            >
              <option value="work" ${
                task.category === 'work' ? 'selected' : ''
              }>💼 仕事</option>
              <option value="personal" ${
                task.category === 'personal' ? 'selected' : ''
              }>🏠 プライベート</option>
              <option value="shopping" ${
                task.category === 'shopping' ? 'selected' : ''
              }>🛒 買い物</option>
            </select>
          </div>

          <!-- 締切日 -->
          <div>
            <label for="edit-duedate-${
              task.id
            }" class="block text-xs font-medium text-gray-700 mb-1">
              締切日
            </label>
            <input
              type="date"
              id="edit-duedate-${task.id}"
              class="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
              value="${task.dueDate || ''}"
            />
          </div>
        </div>

        <!-- ボタン -->
        <div class="flex gap-2">
          <button
            type="submit"
            class="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
            aria-label="変更を保存"
          >
            💾 保存
          </button>
          <button
            type="button"
            class="cancel-edit-btn flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600"
            data-task-id="${task.id}"
            aria-label="編集をキャンセル"
          >
            ❌ キャンセル
          </button>
        </div>
      </form>
    </div>
  `;
}

/**
 * タスクリストを描画
 * @param {Array} taskList - 描画するタスクのリスト
 */
function renderTaskList(taskList) {
  const html = taskList
    .map((task) => {
      return editingTaskId === task.id
        ? generateEditForm(task)
        : generateTaskCard(task);
    })
    .join('');

  taskListElement.innerHTML = html;
}

/**
 * 空状態を描画
 */
function renderEmptyState() {
  taskListElement.innerHTML = '';
  noTasksMessage.style.display = 'block';
}

/**
 * 統計情報を更新
 */
function updateStats() {
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const incompleteCount = totalCount - completedCount;

  totalCountElement.textContent = totalCount;
  completedCountElement.textContent = completedCount;
  incompleteCountElement.textContent = incompleteCount;
}

/**
 * タスクを描画（メイン関数）
 */
function renderTasks() {
  const processedTasks = getProcessedTasks();

  if (processedTasks.length === 0) {
    renderEmptyState();
  } else {
    noTasksMessage.style.display = 'none';
    renderTaskList(processedTasks);
  }

  updateStats();
}

// ============================================
// イベントハンドラー
// ============================================

/**
 * タスクリストのクリックイベントを処理（イベントデリゲーション）
 * @param {Event} event - クリックイベント
 */
function handleTaskListClick(event) {
  const target = event.target;

  // チェックボックスのクリック
  if (
    target.type === 'checkbox' &&
    target.classList.contains('task-checkbox')
  ) {
    const taskId = parseInt(target.dataset.taskId);
    toggleComplete(taskId);
    return;
  }

  // 編集ボタンのクリック
  if (target.classList.contains('edit-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    startEdit(taskId);
    return;
  }

  // 削除ボタンのクリック
  if (target.classList.contains('delete-btn')) {
    const taskId = parseInt(target.dataset.taskId);
    deleteTask(taskId);
    return;
  }

  // 編集キャンセルボタンのクリック
  if (target.classList.contains('cancel-edit-btn')) {
    cancelEdit();
    return;
  }
}

/**
 * フィルターボタンのクリックイベントを処理
 * @param {Event} event - クリックイベント
 */
function handleFilterClick(event) {
  const target = event.target;
  if (!target.classList.contains('filter-btn')) return;

  const filter = target.dataset.filter;
  if (filter) {
    setStatusFilter(filter);
  }
}

/**
 * カテゴリボタンのクリックイベントを処理
 * @param {Event} event - クリックイベント
 */
function handleCategoryClick(event) {
  const target = event.target;
  if (!target.classList.contains('category-btn')) return;

  const category = target.dataset.category;
  if (category) {
    setCategoryFilter(category);
  }
}

/**
 * ソート変更イベントを処理
 * @param {Event} event - 変更イベント
 */
function handleSortChange(event) {
  setSort(event.target.value);
}

/**
 * 検索入力イベントを処理（デバウンス適用）
 */
const handleSearchInput = debounce((event) => {
  setSearchKeyword(event.target.value);
}, DEBOUNCE_DELAY);

/**
 * キーボードイベントを処理
 * @param {Event} event - キーボードイベント
 */
function handleKeydown(event) {
  // Escapeキーで編集をキャンセル
  if (event.key === 'Escape' && editingTaskId !== null) {
    cancelEdit();
  }
}

// ============================================
// 初期化
// ============================================

/**
 * アプリケーションの初期化
 */
function init() {
  console.log('🚀 アプリを初期化中...');

  // ローディング表示
  showLoading();

  // LocalStorageからデータを読み込み
  loadFromLocalStorage();

  // 画面を描画
  renderTasks();

  // イベントリスナーの設定
  taskForm.addEventListener('submit', handleAddTask);
  taskListElement.addEventListener('click', handleTaskListClick);
  searchInput.addEventListener('input', handleSearchInput);
  sortSelect.addEventListener('change', handleSortChange);
  document.addEventListener('keydown', handleKeydown);

  // フィルターボタンのイベントリスナー（イベントデリゲーション）
  const filterContainer = document.querySelector(
    '[role="group"][aria-label="ステータスフィルター"]'
  );
  if (filterContainer) {
    filterContainer.addEventListener('click', handleFilterClick);
  }

  // カテゴリボタンのイベントリスナー（イベントデリゲーション）
  const categoryContainer = document.querySelector(
    '[role="group"][aria-label="カテゴリフィルター"]'
  );
  if (categoryContainer) {
    categoryContainer.addEventListener('click', handleCategoryClick);
  }

  // ローディング非表示
  setTimeout(() => {
    hideLoading();
    console.log('✅ アプリの初期化が完了しました');
  }, LOADING_DELAY);
}

// ページ読み込み時に初期化を実行
document.addEventListener('DOMContentLoaded', init);
