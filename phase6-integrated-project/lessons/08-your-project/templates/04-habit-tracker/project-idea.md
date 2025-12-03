# プロジェクトアイデア：習慣トラッカー ✅

---

## プロジェクト概要

### 何を作るか

継続したい習慣を記録し、達成状況を可視化できるWebアプリケーション

### 誰が使うか

- 良い習慣を身につけたい人
- 習慣を継続したい人
- 自己改善に取り組んでいる人

### どんな問題を解決するか

- 「毎日運動する」と決めても、続かない
- 習慣が身についているか分からない
- モチベーションが下がると、やめてしまう
- 達成状況を可視化して、継続したい

---

## ユーザーストーリー例

### US-001：習慣の追加

```text
ユーザーとして、
継続したい習慣を追加したい、
なぜなら習慣化したい行動を明確にしたいから
```

### US-002：日々の達成記録

```text
ユーザーとして、
習慣を実行したらチェックインしたい、
なぜなら達成感を得て、モチベーションを維持したいから
```

### US-003：ストリークの表示

```text
ユーザーとして、
連続達成日数（ストリーク）を見たい、
なぜなら「〇日連続達成中！」というのが励みになるから
```

---

## 機能要件の例

### 必須機能（Must Have）

#### F-001：習慣の追加

- 習慣名（必須、最大100文字）
- カテゴリ（必須、健康・勉強・趣味・その他）
- 目標頻度（必須、毎日・週3回・週5回など）
- 説明（任意、最大200文字）

#### F-002：習慣の一覧表示

- カード形式で表示
- 習慣名、カテゴリ、ストリーク（連続達成日数）を表示

#### F-003：チェックイン（達成記録）

- 習慣カードの「今日の達成」ボタンをクリック
- 達成日を記録
- ストリークを更新

#### F-004：統計表示

- 全習慣数
- 今日達成した習慣数
- 週間達成率

### 拡張機能（Should Have）

#### F-101：習慣の編集・削除

#### F-102：カテゴリフィルター

#### F-103：達成カレンダー表示

#### F-104：週間・月間の達成率グラフ

#### F-105：リマインダー設定

---

## データ構造の例

### 習慣オブジェクト

```javascript
{
  id: number,
  name: string,
  category: 'health' | 'study' | 'hobby' | 'other',
  frequency: 'daily' | 'weekly3' | 'weekly5',
  description: string,
  checkIns: string[],                             // 達成日の配列 ['2025-12-01', '2025-12-02', ...]
  currentStreak: number,                          // 現在のストリーク
  longestStreak: number,                          // 最長ストリーク
  createdAt: string
}
```

### 習慣配列の例

```javascript
const habits = [
  {
    id: 1638360000000,
    name: "朝のジョギング",
    category: "health",
    frequency: "daily",
    description: "毎朝30分ジョギングする",
    checkIns: ["2025-11-28", "2025-11-29", "2025-11-30", "2025-12-01"],
    currentStreak: 4,
    longestStreak: 7,
    createdAt: "2025-11-25T10:00:00.000Z"
  },
  // ...他の習慣
];
```

---

## 画面構成のアイデア

### 習慣カード

```text
┌──────────────────────────────────┐
│ 朝のジョギング　      🔥 4日連続     │
│ 🏃 健康                           │
├──────────────────────────────────┤
│ 毎朝30分ジョギングする　　           │
├──────────────────────────────────┤
│ 今週: ✅✅✅✅⬜⬜⬜                │
├──────────────────────────────────┤
│ [今日の達成 ✅] [編集] [削除]　　    │
└──────────────────────────────────┘
```

### 週間カレンダー

```text
┌──────────────────────────────────┐
│  今週の達成状況　　　　　            │
│  月  火  水  木  金  土  日　　     │
│  ✅  ✅  ✅  ✅  ⬜  ⬜  ⬜　　     │
└──────────────────────────────────┘
```

---

## TODOアプリとの違い

| 項目 | TODOアプリ | 習慣トラッカー |
|------|-----------|---------------|
| メインデータ | タスク（1回限り） | 習慣（繰り返し） |
| 完了 | 1回完了したら終わり | 毎日達成を記録 |
| 記録 | 完了フラグのみ | 達成日の配列 |
| 統計 | 完了数のみ | ストリーク、達成率 |

---

## 実装のヒント

### ストリークの計算

```javascript
function calculateStreak(checkIns) {
  if (checkIns.length === 0) return 0;

  // 日付を降順にソート
  const sorted = checkIns.sort((a, b) => new Date(b) - new Date(a));

  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (const checkIn of sorted) {
    const checkInDate = new Date(checkIn);
    checkInDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((currentDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (diffDays === streak) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
```

### 今日達成済みかチェック

```javascript
function isCheckedInToday(habit) {
  const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
  return habit.checkIns.includes(today);
}
```

### チェックイン処理

```javascript
function checkIn(habitId) {
  const habit = habits.find(h => h.id === habitId);
  if (!habit) return;

  const today = new Date().toISOString().split('T')[0];

  // すでに今日チェックイン済みの場合
  if (habit.checkIns.includes(today)) {
    showToast('今日はすでに達成済みです', 'info');
    return;
  }

  // チェックインを追加
  habit.checkIns.push(today);

  // ストリークを再計算
  habit.currentStreak = calculateStreak(habit.checkIns);
  habit.longestStreak = Math.max(habit.longestStreak, habit.currentStreak);

  saveToLocalStorage();
  renderHabits();
  showToast('達成しました！🎉', 'success');
}
```

### 週間カレンダーの表示

```javascript
function renderWeekCalendar(habit) {
  const days = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    const isChecked = habit.checkIns.includes(dateStr);
    days.push(isChecked ? '✅' : '⬜');
  }

  return days.join(' ');
}
```

---

## AIへの質問例

```text
「習慣トラッカーを作りたいです。

【背景】
- 良い習慣を身につけたいが、続かない
- 連続達成日数（ストリーク）を可視化して、モチベーションを高めたい

【質問】
1. 習慣トラッカーに必要な機能は何ですか？
2. 連続達成日数（ストリーク）はどう計算すればよいですか？
3. 達成日を記録する良いデータ構造は？

具体的なアドバイスをお願いします！」
```

---

**Let's vibe and code!** 🎉

習慣トラッカーで、あなたの良い習慣を継続しよう！ ✅
