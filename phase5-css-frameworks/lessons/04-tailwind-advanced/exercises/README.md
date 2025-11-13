# Lesson 4: Tailwind CSS 実践テクニック - 演習問題 🎯

Lesson 4 で学んだ実践的なテクニックを、実際に手を動かして練習しよう！

---

## 基礎編（3問）

### 演習 4-1: カスタムカラーの設定と使用

**難易度**：⭐

**課題**：
Tailwind Play CDN の `tailwind.config` を使って、カスタムカラーを追加し、それを使ったボタンを作成してください。

**仕様**：
1. カスタムカラーを追加：
   - `primary`: `#1890ff`（青）
   - `secondary`: `#52c41a`（緑）
   - `danger`: `#ff4d4f`（赤）
2. 3 つのボタンを作成：
   - Primary ボタン（`bg-primary`、hover で濃く）
   - Secondary ボタン（`bg-secondary`、hover で濃く）
   - Danger ボタン（`bg-danger`、hover で濃く）
3. 各ボタンに transition を付ける

**ヒント**：
- Play CDN では `<script>` タグ内で設定
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
      },
    },
  },
}
```
- hover 時の色は filter を使う：`hover:brightness-110`

---

### 演習 4-2: ダークモード対応のカード

**難易度**：⭐⭐

**課題**：
ダークモードに対応したカードコンポーネントを作成してください。

**仕様**：
- カード：
  - ライトモード：白背景、黒文字
  - ダークモード：濃いグレー背景、白文字
- カード内容：
  - タイトル（text-xl、font-bold）
  - 説明文（セカンダリカラー）
  - ボタン（青色）
- ダークモード切り替えボタンを追加
- `darkMode: 'class'` を設定
- JavaScript でダークモードを切り替え

**ヒント**：
- ライトモード：`bg-white text-gray-900`
- ダークモード：`dark:bg-gray-800 dark:text-white`
- JavaScript：`document.documentElement.classList.toggle('dark')`
- localStorage にテーマを保存すると便利

---

### 演習 4-3: アニメーションボタン

**難易度**：⭐⭐

**課題**：
様々なアニメーションを持つボタンを 4 つ作成してください。

**仕様**：
1. **拡大ボタン**：hover で 1.1 倍に拡大
2. **浮くボタン**：hover で上に 2px 移動＋影が強く
3. **回転ボタン**：hover で 3 度回転
4. **複合ボタン**：hover で拡大＋上に移動＋影が強く

全てのボタンに transition を付けて、スムーズなアニメーションにする。

**ヒント**：
- `transform scale-110`：拡大
- `transform -translate-y-2`：上に移動
- `transform rotate-3`：回転
- `shadow-lg hover:shadow-2xl`：影の変化
- `transition-all`：全てのプロパティにアニメーション

---

## 応用編（3問）

### 演習 4-4: group-hover を使ったギャラリー

**難易度**：⭐⭐⭐

**課題**：
`group` と `group-hover` を使って、インタラクティブな画像ギャラリーを作成してください。

**仕様**：
- 3 つの画像カードを横並び（grid、3 列）
- 各カードの構成：
  - 画像（placeholder）
  - タイトル
  - 説明文
  - 「詳しく見る」ボタン
- **hover 効果**（カード全体を hover した時）：
  - カードの影が強くなる
  - 画像が 1.05 倍に拡大
  - タイトルが青色に変化
  - ボタンの背景が濃くなる
- 全てのアニメーションをスムーズに

**ヒント**：
- 親要素に `group`
- 子要素に `group-hover:scale-105`、`group-hover:text-blue-600` など
- `overflow-hidden` で画像が はみ出さないように
- `transition` を忘れずに

---

### 演習 4-5: peer を使ったタブ切り替え

**難易度**：⭐⭐⭐

**課題**：
`peer` と `peer-checked` を使って、タブ切り替え UI を作成してください。

**仕様**：
- 3 つのタブ：「概要」「特徴」「価格」
- ラジオボタンで切り替え（ラジオボタンは非表示）
- 選択されたタブ：
  - 青色の背景
  - 太字
  - 下に青い線
- 各タブに対応するコンテンツを表示
- `peer-checked:` を使って、選択されたタブだけコンテンツを表示

**ヒント**：
- ラジオボタンに `peer`、ラベルに `peer-checked:bg-blue-500` など
- ラジオボタンを非表示：`sr-only` または `hidden`
- コンテンツの表示/非表示：`peer-checked:block` と `hidden`
- タブは `flex` で横並び

---

### 演習 4-6: カスタムコンポーネントクラス

**難易度**：⭐⭐⭐

**課題**：
Play CDN では `@apply` が使えないため、JavaScript でスタイルをまとめる方法を実践してください。

**仕様**：

実際には、以下のスタイルを持つボタンを 3 種類作成：

1. **btn-solid**：
   - 背景色あり（青、緑、赤など）
   - 白文字
   - パディング px-6 py-3
   - 角丸 lg
   - hover で背景を濃く
   - transition

2. **btn-outline**：
   - 透明背景
   - 枠線あり
   - 枠線と同じ色のテキスト
   - hover で背景色＋白文字
   - transition

3. **btn-ghost**：
   - 透明背景
   - 枠線なし
   - 色付きテキスト
   - hover で薄い背景
   - transition

各タイプで 3 色（青、緑、赤）を作成してください。

**ヒント**：
- 共通のクラスをまとめる：`px-6 py-3 rounded-lg font-semibold transition`
- solid：`bg-blue-500 text-white hover:bg-blue-600`
- outline：`bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`
- ghost：`bg-transparent text-blue-500 hover:bg-blue-50`

---

## チャレンジ編（1問）

### 演習 4-7: ダッシュボードアプリ（総合課題）

**難易度**：⭐⭐⭐⭐

**課題**：
これまで学んだ全ての実践テクニックを使って、本格的なダッシュボードアプリを作成してください。

**仕様**：

**1. カスタム設定**
- カスタムカラー：
  - `brand`: `#1890ff`
  - `success`: `#52c41a`
  - `warning`: `#faad14`
  - `danger`: `#ff4d4f`
- ダークモード有効化（class 方式）

**2. サイドバー**
- 固定幅（w-64）
- 背景：白（ライト）/ 濃いグレー（ダーク）
- ロゴ/ブランド名
- メニュー項目：
  - ダッシュボード（アクティブ）
  - ユーザー
  - 設定
  - ログアウト
- メニュー項目に hover 効果

**3. ヘッダー**
- 固定ヘッダー（sticky top-0）
- 検索ボックス
- ダークモード切り替えボタン
- ユーザーアイコン

**4. メインコンテンツ**
- タイトルと説明
- **統計カード（4 つ）**：
  - カード 1：総ユーザー数（アイコン、数値、先月比）
  - カード 2：売上（同上）
  - カード 3：新規登録（同上）
  - カード 4：アクティブユーザー（同上）
- **hover 効果**（group-hover）：
  - 影が強くなる
  - カード全体が少し上に移動
  - アイコンが拡大
- **テーブル**：
  - 最近のユーザーリスト（5 人）
  - 名前、メール、ステータス
  - ステータスは Badge（アクティブ/保留/停止）

**5. アニメーション**
- 全ての hover 効果に transition
- 統計カードの数値をカウントアップ（オプション）
- スムーズなページ遷移効果

**6. ダークモード対応**
- 全ての要素がダークモードに対応
- コントラストを確保
- 切り替えボタンでテーマを変更
- localStorage にテーマを保存

**7. レスポンシブ対応**
- タブレット以下でサイドバーを非表示
- 統計カードを 4 列 → 2 列 → 1 列に
- テーブルをスクロール可能に

**ヒント**：
- サイドバー＋メインの構造：`<div class="flex">`
- サイドバー：`<aside class="w-64 fixed h-screen">`
- メイン：`<main class="ml-64 flex-1">`（サイドバーの幅分左マージン）
- 統計カード：`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- JavaScript でダークモード切り替え
- 各セクションを段階的に作っていく（サイドバー → ヘッダー → カード → テーブル）

---

## 📚 解答例

全ての演習問題の解答例は [solutions](./solutions/) ディレクトリにあります。

- [解答例の解説](./solutions/README.md)
- [演習 4-1 の解答](./solutions/04-01.html)
- [演習 4-2 の解答](./solutions/04-02.html)
- [演習 4-3 の解答](./solutions/04-03.html)
- [演習 4-4 の解答](./solutions/04-04.html)
- [演習 4-5 の解答](./solutions/04-05.html)
- [演習 4-6 の解答](./solutions/04-06.html)
- [演習 4-7 の解答](./solutions/04-07.html)

**まずは自分で挑戦してから、解答例を見てね！** 💪

---

**Phase 5 の全レッスンを終えたら、いよいよ Phase 6 の統合プロジェクトへ！** 🎉
