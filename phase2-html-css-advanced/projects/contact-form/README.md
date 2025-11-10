# ミニプロジェクト 1: レスポンシブお問い合わせフォーム

Phase 2 で学んだ全ての技術を使った実践プロジェクトです。

---

## 📋 プロジェクト概要

このプロジェクトは、**レスポンシブなお問い合わせフォーム**を作成することで、Phase 2 で学んだ HTML/CSS の発展的な技術を総合的に復習します。

---

## 🎯 学習目標

このプロジェクトを通じて、以下のスキルを実践します:

- ✅ HTML フォーム要素の実践的な使用（input, textarea, select など）
- ✅ Flexbox によるフォームレイアウト
- ✅ メディアクエリによるレスポンシブ対応
- ✅ CSS アニメーション（ボタンのホバー効果）
- ✅ フォームのバリデーション表示（視覚的フィードバック）
- ✅ アクセシブルなフォーム設計

---

## 📁 ファイル構成

```text
contact-form/
├── index.html      # メインページ
├── styles.css      # スタイルシート
└── README.md       # このファイル
```

---

## 🔍 使用している技術

### HTML（Lesson 01 で学んだ内容）

#### フォーム要素の活用

```html
<!-- テキスト入力 -->
<input type="text" id="name" name="name" required />

<!-- メールアドレス入力 -->
<input type="email" id="email" name="email" required />

<!-- セレクトボックス -->
<select id="subject" name="subject" required>
  <option value="">選択してください</option>
  <option value="inquiry">お問い合わせ</option>
  <option value="support">サポート</option>
</select>

<!-- テキストエリア -->
<textarea id="message" name="message" rows="5" required></textarea>

<!-- 送信ボタン -->
<button type="submit">送信する</button>
```

**ポイント**:

- `required` 属性で必須項目を指定
- `type="email"` でメールアドレスの形式チェック
- `label` 要素と `for` 属性でアクセシビリティ向上

### CSS（Lesson 02-05 で学んだ内容）

#### 1. Flexbox レイアウト（Lesson 02）

```css
/* フォーム全体のレイアウト */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* フォームグループ（ラベルと入力欄） */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

**ポイント**:

- `flex-direction: column` で縦並び
- `gap` で要素間の間隔を均等に設定
- シンプルで保守しやすいレイアウト

#### 2. Grid レイアウト（Lesson 03）

```css
/* 名前とメールアドレスを横並びに */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
```

**ポイント**:

- デスクトップでは 2 カラム、モバイルでは 1 カラムに切り替え
- `1fr 1fr` で等幅の 2 列

#### 3. レスポンシブデザイン（Lesson 04）

```css
/* タブレット以下 */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: 1.5rem;
  }
}

/* モバイル */
@media (max-width: 480px) {
  .form-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
```

**ポイント**:

- 768px 以下で 2 カラムから 1 カラムに切り替え
- 480px 以下でフォントサイズと余白を調整

#### 4. アニメーション（Lesson 05）

```css
/* 送信ボタンのホバーアニメーション */
button[type="submit"] {
  background-color: #3b82f6;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* フォーカス時のアニメーション */
input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  transition: all 0.2s ease;
}
```

**ポイント**:

- `transition` でスムーズな変化
- `transform: translateY(-2px)` でボタンが浮き上がる効果
- フォーカス時の視覚的フィードバック

---

## 🌟 このプロジェクトの特徴

### 1. 実用的なフォーム設計

実際のウェブサイトで使われるお問い合わせフォームを想定した設計です。

**学べること**:

- 必須項目とオプション項目の使い分け
- ユーザーフレンドリーなフォーム設計
- アクセシビリティに配慮したマークアップ

### 2. レスポンシブ対応

デスクトップ、タブレット、モバイルのすべてのデバイスで使いやすいフォームです。

**学べること**:

- メディアクエリを使った段階的な調整
- 画面サイズに応じたレイアウト変更
- タッチデバイスでも使いやすいサイズ設定

### 3. 視覚的フィードバック

ユーザーの操作に対して適切なフィードバックを提供します。

**学べること**:

- ホバー、フォーカス、アクティブ状態のスタイリング
- CSS アニメーションによる UX 向上
- エラー表示とバリデーション

### 4. Flexbox と Grid の組み合わせ

フォーム全体は Flexbox、名前・メール欄は Grid というように、適材適所でレイアウト手法を使い分けています。

**学べること**:

- Flexbox と Grid の使い分け
- それぞれの長所を活かしたレイアウト
- 実践的なレイアウト設計

---

## 🚀 カスタマイズのアイデア

このプロジェクトをベースに、以下のカスタマイズに挑戦してみよう！

### 初級編

1. **色を変える**

   - 送信ボタンの色を変更（例: グリーン、オレンジ）
   - フォーカス時の枠線の色を変更
   - 背景色のグラデーションを試す

2. **フォント調整**

   - 見出しや入力欄のフォントサイズを調整
   - フォントファミリーを変更（Google Fonts など）

3. **余白を調整**
   - padding や gap の値を変えて、余裕のあるデザインに

### 中級編

1. **新しいフォーム項目を追加**

   - 電話番号の入力欄（`type="tel"`）
   - ファイル添付（`type="file"`）
   - チェックボックス（利用規約への同意など）

2. **成功メッセージの表示領域を追加**

   - フォーム送信後に表示される「送信完了」メッセージのデザイン
   - フェードインアニメーション付き

3. **エラー表示の追加**
   - 未入力の項目に赤い枠線を表示
   - エラーメッセージのスタイリング

### 上級編

1. **AI にカスタムバリデーションスタイルを追加してもらう**

   ```text
   「お問い合わせフォームに、入力欄が未入力の場合は赤い枠線、
   正しく入力されている場合は緑の枠線を表示するスタイルを追加してください。
   アニメーション効果も付けてください。」
   ```

2. **ダークモード対応**

   - prefers-color-scheme を使ったダークモード実装
   - ライト/ダークの切り替えボタン（JavaScript 使用）

3. **複数ステップのフォームに拡張**
   - ステップ 1: 基本情報、ステップ 2: 詳細情報、ステップ 3: 確認
   - プログレスバーの表示

---

## 💡 学習のポイント

### 1. label と input の紐付け

フォームのアクセシビリティを向上させるために、`label` の `for` 属性と `input` の `id` を紐付けます。

```html
<label for="name">お名前</label>
<input type="text" id="name" name="name" required />
```

**メリット**:

- label をクリックしても input にフォーカスが当たる
- スクリーンリーダーが読み上げやすい
- ユーザビリティ向上

### 2. required 属性の活用

HTML5 の `required` 属性を使うと、ブラウザ標準のバリデーションが使えます。

```html
<input type="email" name="email" required />
```

**メリット**:

- JavaScript なしでバリデーション
- ブラウザが自動でエラーメッセージを表示
- type="email" でメールアドレス形式もチェック

### 3. Flexbox の gap プロパティ

Flexbox の `gap` を使うと、margin を使わずに要素間の間隔を設定できます。

```css
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* すべての子要素間に 1.5rem の間隔 */
}
```

**メリット**:

- margin の調整が不要
- 最後の要素に余分な margin が付かない
- コードがシンプルになる

### 4. モバイルファーストの考え方

このプロジェクトでは、基本はモバイル向けのデザインにして、大きい画面向けにメディアクエリで調整しています。

```css
/* モバイル向けの基本スタイル */
.form-row {
  display: grid;
  grid-template-columns: 1fr;
}

/* デスクトップ向けに調整 */
@media (min-width: 769px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
```

**メリット**:

- モバイルユーザーが多い現代に適している
- シンプルなスタイルから始められる
- パフォーマンスが良い

---

## 🤖 AI との協働

このプロジェクトを AI と一緒にカスタマイズする時の指示例:

### 良い指示の例

```text
「お問い合わせフォームに『電話番号』の入力欄を追加してください。
type="tel"を使用し、プレースホルダーに『090-1234-5678』と表示し、
ラベルは『電話番号（任意）』としてください。
スタイルは既存の入力欄と統一してください。」
```

**ポイント**:

- 追加する項目を具体的に指定
- HTML の属性も明示（type, placeholder）
- 必須/任意を明確に
- スタイルの統一性を指示

### 生成されたコードのチェックポイント

1. **HTML 構造が正しいか**

   - label と input が紐付いているか（for と id）
   - form-group クラスで囲まれているか
   - 適切な input type が使われているか

2. **CSS が統一されているか**

   - 既存の form-group や input のスタイルが適用されるか
   - gap や padding が一貫しているか

3. **レスポンシブ対応ができているか**

   - モバイルでも使いやすいサイズか
   - タップしやすい大きさか（最低 44×44px）

4. **アクセシビリティ**
   - required 属性が適切に設定されているか
   - aria-label や aria-describedby が必要な場合に使われているか

---

## 📝 まとめ

このプロジェクトで、Phase 2 で学んだ以下の内容を実践しました:

- ✅ HTML フォーム要素の実践的な使用
- ✅ Flexbox と Grid の組み合わせによるレイアウト
- ✅ メディアクエリによるレスポンシブデザイン
- ✅ CSS アニメーションによる UX 向上
- ✅ アクセシブルなフォーム設計

**Phase 2 の知識で、こんなにプロフェッショナルなフォームが作れる！** 💪

次は、もう一つのミニプロジェクト「レスポンシブランディングページ」に挑戦してみよう！

---

**Happy Coding!** 🎉
