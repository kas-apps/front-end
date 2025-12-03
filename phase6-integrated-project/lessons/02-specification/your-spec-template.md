# [あなたのプロジェクト名] - 技術仕様書

**プロジェクト名**：
**作成日**：
**作成者**：
**バージョン**：1.0

---

## 概要

この文書は、Lesson 1で作成した要件定義を基に、実装に必要な技術仕様をまとめたものです。

**参照**：[あなたの要件定義書](../01-requirements/your-requirements.md)

---

## データ構造

### メインオブジェクト

```javascript
// TODOアプリの場合はtask、レシピアプリの場合はrecipeなど
const item = {
  id: number,           // 一意のID
  // ...その他のプロパティ
};
```

### データ型の詳細

| プロパティ | データ型 | 必須 | デフォルト値 | 制約 |
|-----------|---------|------|------------|------|
| id | number | ✅ | `Date.now()` | 一意、正の整数 |
| （プロパティ1） | （型） | （✅/❌） | （値） | （制約） |
| （プロパティ2） | （型） | （✅/❌） | （値） | （制約） |
| （プロパティ3） | （型） | （✅/❌） | （値） | （制約） |

**ヒント**：

- 必須かどうかは、「ないとアプリが動かない」プロパティを✅に
- データ型は、string, number, boolean, null のいずれか
- デフォルト値は、新規作成時に自動設定される値

### データ配列

```javascript
// すべてのデータを格納する配列
let items = [];

// データ配列の例
items = [
  {
    id: 1638360000000,
    // ...プロパティ
  },
  // ...他のデータ
];
```

---

## 画面構成

### HTML構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>（あなたのアプリ名）</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- ヘッダー -->
  <header>
    <h1 id="app-title">（アプリ名）</h1>
  </header>

  <main>
    <!-- 統計表示（必要に応じて） -->
    <section id="stats-section">
      <!-- 統計情報 -->
    </section>

    <!-- データ追加フォーム -->
    <section id="add-section">
      <form id="main-form">
        <!-- 入力欄 -->
      </form>
    </section>

    <!-- データ一覧 -->
    <section id="list-section">
      <div id="item-list">
        <!-- カードが動的に追加される -->
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

### 要素ID/クラス名一覧

#### セクション

| ID | 用途 |
|----|------|
| （ID名） | （用途） |
| （ID名） | （用途） |

#### フォーム関連

| ID | 用途 | タイプ |
|----|------|--------|
| （ID名） | （用途） | input/select/textarea |
| （ID名） | （用途） | input/select/textarea |

#### 表示関連

| ID | 用途 |
|----|------|
| （ID名） | （用途） |
| （ID名） | （用途） |

**ヒント**：

- ID名は「何をする要素か」が分かる名前にする
- ケバブケース（main-form, item-list）を使う
- TODOアプリの例を参考に、自分のアプリに合わせて変更

---

## 機能仕様

### データ追加機能

**関数名**：`handleAdd(event)`

**処理フロー**：

1. `event.preventDefault()` でページリロードを防ぐ
2. フォームから各値を取得
3. バリデーション
   - （必須項目が空でないかチェック）
   - （文字数制限のチェック）
4. 新しいオブジェクトを作成
5. 配列に追加
6. `render()`を呼んで画面更新
7. フォームをリセット

**コード例**：

```javascript
function handleAdd(e) {
  e.preventDefault();

  // フォームから値を取得
  const value1 = document.getElementById('input-1').value.trim();
  // ...

  // バリデーション
  if (!value1) {
    alert('（項目名）を入力してください');
    return;
  }

  // 新しいオブジェクトを作成
  const newItem = {
    id: Date.now(),
    // ...プロパティ
  };

  items.push(newItem);
  render();
  document.getElementById('main-form').reset();
}
```

### データ表示機能

**関数名**：`render()`

**処理フロー**：

1. 配列が空かチェック
2. 配列をループしてカードHTML生成
3. 一覧エリアのinnerHTMLに設定
4. 統計更新（必要に応じて）

### 削除機能

**関数名**：`deleteItem(id)`

**処理フロー**：

1. 確認ダイアログ表示
2. `filter()`でIDに一致しないデータのみ残す
3. `render()`を呼んで画面更新

---

## LocalStorage仕様

### キー名

```javascript
const STORAGE_KEY = '（あなたのアプリ名-データ名）';

// 例：
// 'recipe-manager-recipes'
// 'reading-log-books'
// 'expense-tracker-expenses'
```

### 保存形式

```javascript
// JSON文字列として保存
const json = JSON.stringify(items);
localStorage.setItem(STORAGE_KEY, json);
```

### 保存タイミング

- データ追加時
- データ編集時
- データ削除時

### 読み込みタイミング

- ページ読み込み時

### エラーハンドリング

```javascript
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      items = JSON.parse(json);
    } else {
      items = [];
    }
  } catch (error) {
    console.error('データの読み込みに失敗:', error);
    items = [];
  }
  render();
}

function saveToLocalStorage() {
  try {
    const json = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('データの保存に失敗:', error);
  }
}
```

---

## ファイル構成

```text
04-basic-implementation/
└── code/
    ├── index.html        # HTMLファイル
    ├── styles.css        # カスタムCSS
    └── script.js         # JavaScript
```

---

## 命名規則

### 変数・関数名

- **変数**: キャメルケース（`itemTitle`, `isCompleted`）
- **関数**: 動詞で始まる（`handleAdd`, `render`, `deleteItem`）
- **定数**: スネークケース大文字（`STORAGE_KEY`）

### ID/クラス名

- **ID**: ケバブケース（`main-form`, `item-list`）
- **クラス**: Tailwind CSSのユーティリティクラス

---

## 技術スタック

### フロントエンド

- **HTML5**: セマンティックタグ使用
- **CSS**: Tailwind CSS 3.x（CDN）
- **JavaScript**: ES6+（Vanilla JS）

### ストレージ

- **LocalStorage**: クライアントサイドでのデータ永続化

---

## 実装の段階

### Phase 1（Lesson 4）：基本機能

- （機能1：例 データ追加）
- （機能2：例 データ表示）
- （機能3：例 削除）

**目標行数**：約150-200行

### Phase 2（Lesson 5）：拡張機能

- （機能4：例 編集）
- （機能5：例 フィルター）
- （機能6：例 検索）

**目標行数**：約400-500行

### Phase 3（Lesson 6）：永続化と改善

- LocalStorage統合
- ローディング表示
- エラーハンドリング

**目標行数**：約500-600行

### Phase 4（Lesson 7）：リファクタリング

- コードの整理
- パフォーマンス最適化

**最終行数**：約1000-1500行

---

## 制約事項

### ブラウザ対応

- Chrome 90+（メインターゲット）
- Firefox 88+
- Safari 14+

### パフォーマンス

- データ数：最大1000件まで快適に動作

### セキュリティ

- XSS対策：`textContent`使用、HTMLエスケープ
- ユーザー入力の検証

---

## まとめ

この仕様書に基づいて実装を進めれば、要件定義で決めた機能を実現できます！

**次のステップ**：

- Lesson 3でUIデザインとプロトタイプを作成
- Lesson 4-7で段階的に実装

---

## 💡 記入のヒント

### 1. まずはAIと対話してデータ構造を決めよう

```text
AIへの質問例：
「以下の要件を実現するために、データ構造を設計したいです。

【要件】
[Lesson 1の要件定義を貼り付け]

JavaScriptのオブジェクト構造を、具体例と一緒に提案してください。」
```

### 2. 事例を参考にする

カード型TODOアプリの仕様書を参考に、自分のアプリ用に書き換えよう：

👉 [事例：カード型TODOアプリの仕様書](example-spec.md)

### 3. データ型の選び方

- **string**: テキスト情報（名前、説明、URLなど）
- **number**: 数値情報（金額、時間、数量など）
- **boolean**: はい/いいえ（完了フラグ、お気に入りなど）
- **null**: 値がない状態（任意項目で未設定の場合）

### 4. 画面構成はシンプルに

最初から複雑にしない！基本機能が動くHTMLを作ってから、徐々に拡張しよう。

### 5. LocalStorageのキー名

アプリ名とデータ名を組み合わせると分かりやすい：

```text
good-examples:
- 'recipe-manager-recipes'
- 'reading-log-books'
- 'expense-tracker-expenses'

bad-examples:
- 'data'
- 'items'
- 'myapp'
```

---

**作成者ノート**：

**AIとの対話メモ**：

（ここに、AIと対話した内容や、AIからもらったアドバイスをメモしておくと便利！）

**所要時間**：

- データ構造設計：（　）分
- 画面構成設計：（　）分
- 仕様書作成：（　）分
- 合計：（　）分

---

**Let's vibe and code!** 🎉

仕様書を作ると、実装がすごくスムーズになるよ！
AIと一緒に、しっかり設計していこう！ 📐
