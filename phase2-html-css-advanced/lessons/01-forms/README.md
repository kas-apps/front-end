# Lesson 1: HTML フォーム 📝

**学習目標**：HTML フォームの基本構造を理解し、ユーザー入力を受け取る様々なフォーム要素を使いこなせるようになる

---

## なぜ HTML フォームを学ぶの？

Web ページは情報を**見る**だけじゃない！ユーザーが情報を**入力する**場面も超重要だよね。

- 🔍 Google で検索する
- 📧 お問い合わせフォームを送信する
- 🛒 商品を注文する
- 📝 アンケートに答える
- 🔐 ログインする

**これ全部、HTML フォームで作られてる！**

フォームを理解すると：

- ✅ ユーザーとの双方向コミュニケーションができる
- ✅ AI に「この形式の入力フォームを作って」と的確に指示できる
- ✅ 生成されたフォームがアクセシブル（使いやすい）か判断できる

**まるで紙のアンケート用紙を Web 版で作るイメージ！** 📝

---

## フォームの基本構造

### 最もシンプルなフォーム

まずは、基本中の基本から見てみよう：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>お問い合わせフォーム</title>
  </head>
  <body>
    <h1>お問い合わせ</h1>

    <form>
      <label for="name">お名前:</label>
      <input type="text" id="name" name="name" />

      <label for="email">メールアドレス:</label>
      <input type="email" id="email" name="email" />

      <button type="submit">送信</button>
    </form>
  </body>
</html>
```

**たったこれだけで、ユーザーが情報を入力できるフォームの完成！** 🎉

---

### 各部分の役割を理解しよう

#### 1. `<form>` タグ

```html
<form>
  <!-- フォームの内容がここに入る -->
</form>
```

- **役割**：フォーム全体を囲む箱
- **位置**：すべての入力要素の親要素
- **必須度**：⭐⭐⭐⭐⭐（絶対必要！）

**例え話**：紙のアンケート用紙全体。この中に質問と回答欄が入る。

**よく使う属性**：

```html
<form action="/submit" method="POST">
  <!-- フォームの内容 -->
</form>
```

- `action`：送信先の URL（Phase 3 以降で詳しく学ぶ）
- `method`：送信方法（`GET` または `POST`）

---

#### 2. `<label>` タグ

```html
<label for="email">メールアドレス:</label>
<input type="email" id="email" name="email" />
```

- **役割**：入力欄の説明文（ラベル）
- **for 属性**：対応する input の `id` を指定
- **必須度**：⭐⭐⭐⭐⭐（アクセシビリティのため必須！）

**例え話**：アンケート用紙の「質問文」。何を入力すればいいか示す。

**重要！** label と input を関連付けると：

- ✅ label をクリックしても input にフォーカスできる（便利！）
- ✅ スクリーンリーダーが正しく読み上げる（アクセシビリティ向上！）
- ✅ AI が生成したフォームの品質が高い証拠

```html
<!-- 良い例：forとidで関連付け -->
<label for="username">ユーザー名:</label>
<input type="text" id="username" name="username" />

<!-- 悪い例：関連付けなし -->
<p>ユーザー名:</p>
<input type="text" name="username" />
```

---

#### 3. `<input>` タグ

```html
<input type="text" id="name" name="name" />
```

- **役割**：ユーザーが情報を入力する欄
- **type 属性**：入力の種類を指定（超重要！）
- **name 属性**：データを送信する時の名前
- **id 属性**：label との関連付け用

**例え話**：アンケート用紙の「回答欄」。種類によって、テキスト欄だったり、チェックボックスだったり。

---

## `<input>` の様々なタイプ

`type` 属性を変えると、入力欄の種類が変わるよ！これが超便利！🎯

### 1. `type="text"` - 1 行テキスト

```html
<label for="username">ユーザー名:</label>
<input type="text" id="username" name="username" />
```

- **用途**：名前、住所、タイトルなど、短いテキスト
- **見た目**：普通のテキスト入力欄

---

### 2. `type="email"` - メールアドレス

```html
<label for="email">メールアドレス:</label>
<input type="email" id="email" name="email" />
```

- **用途**：メールアドレスの入力
- **便利な点**：
  - スマホで入力時にキーボードが「@」入りになる！
  - ブラウザが自動でメール形式をチェック
  - `required` 属性と組み合わせると、正しいメール形式を強制できる

---

### 3. `type="password"` - パスワード

```html
<label for="password">パスワード:</label>
<input type="password" id="password" name="password" />
```

- **用途**：パスワード、PIN コードなど
- **見た目**：入力した文字が `●●●●` で隠れる

---

### 4. `type="number"` - 数値

```html
<label for="age">年齢:</label>
<input type="number" id="age" name="age" min="0" max="120" />
```

- **用途**：年齢、数量など
- **便利な点**：
  - 上下ボタンで数値を増減できる
  - スマホで数値キーボードが出る
  - `min`, `max` で範囲を制限できる

---

### 5. `type="date"` - 日付

```html
<label for="birthday">生年月日:</label>
<input type="date" id="birthday" name="birthday" />
```

- **用途**：生年月日、予約日など
- **便利な点**：
  - カレンダーから選択できる（ブラウザによる）
  - 日付形式が統一される（yyyy-mm-dd）

---

### 6. `type="tel"` - 電話番号

```html
<label for="phone">電話番号:</label>
<input type="tel" id="phone" name="phone" />
```

- **用途**：電話番号
- **便利な点**：スマホで電話番号キーボードが出る

---

### 7. `type="url"` - URL

```html
<label for="website">ウェブサイト:</label>
<input type="url" id="website" name="website" />
```

- **用途**：ウェブサイトの URL
- **便利な点**：ブラウザが URL 形式をチェック

---

### 8. `type="checkbox"` - チェックボックス

```html
<label>
  <input type="checkbox" name="terms" value="agree" />
  利用規約に同意します
</label>
```

- **用途**：複数選択可能な項目
- **見た目**：☑ チェックボックス

**複数のチェックボックスの例**：

```html
<p>興味のある分野（複数選択可）:</p>
<label>
  <input type="checkbox" name="interests" value="coding" />
  プログラミング
</label>
<label>
  <input type="checkbox" name="interests" value="design" />
  デザイン
</label>
<label>
  <input type="checkbox" name="interests" value="business" />
  ビジネス
</label>
```

---

### 9. `type="radio"` - ラジオボタン

```html
<p>性別:</p>
<label>
  <input type="radio" name="gender" value="male" />
  男性
</label>
<label>
  <input type="radio" name="gender" value="female" />
  女性
</label>
<label>
  <input type="radio" name="gender" value="other" />
  その他
</label>
```

- **用途**：複数の選択肢から 1 つだけ選ぶ
- **見た目**：◉ ラジオボタン
- **重要！** 同じ `name` 属性を持つラジオボタンは、1 つだけ選択可能

**checkbox との違い**：

- **checkbox**：複数選択可能（☑☑☑）
- **radio**：1 つだけ選択可能（◉◯◯）

---

### 10. `type="file"` - ファイル選択

```html
<label for="resume">履歴書（PDF）:</label>
<input type="file" id="resume" name="resume" accept=".pdf" />
```

- **用途**：画像、PDF、ドキュメントなどのファイルアップロード
- **accept 属性**：受け付けるファイル形式を制限

---

## その他の入力要素

### 1. `<textarea>` - 複数行テキスト

```html
<label for="message">メッセージ:</label>
<textarea id="message" name="message" rows="5" cols="40"></textarea>
```

- **用途**：長い文章の入力（お問い合わせ内容、コメントなど）
- **rows**：表示する行数
- **cols**：表示する列数

**input との違い**：

- `<input type="text">`：1 行だけ
- `<textarea>`：複数行、改行も入力可能

---

### 2. `<select>` - ドロップダウンリスト

```html
<label for="country">国:</label>
<select id="country" name="country">
  <option value="">選択してください</option>
  <option value="jp">日本</option>
  <option value="us">アメリカ</option>
  <option value="uk">イギリス</option>
</select>
```

- **用途**：多くの選択肢から 1 つを選ぶ
- **見た目**：ドロップダウンメニュー
- **option**：各選択肢を定義

**selected 属性で初期選択**：

```html
<option value="jp" selected>日本</option>
```

---

## HTML5 バリデーション属性

フォームに入力制限を付けて、間違った入力を防ごう！

### 1. `required` - 必須項目

```html
<label for="email">メールアドレス（必須）:</label>
<input type="email" id="email" name="email" required />
```

- **効果**：空欄のまま送信できない
- **ブラウザの動作**：「このフィールドを入力してください」とエラー表示

---

### 2. `minlength`, `maxlength` - 文字数制限

```html
<label for="password">パスワード（8文字以上）:</label>
<input type="password" id="password" name="password" minlength="8" maxlength="20" />
```

- **minlength**：最小文字数
- **maxlength**：最大文字数

---

### 3. `min`, `max` - 数値範囲

```html
<label for="age">年齢（18歳以上）:</label>
<input type="number" id="age" name="age" min="18" max="120" />
```

- **min**：最小値
- **max**：最大値

---

### 4. `pattern` - 正規表現パターン

```html
<label for="zipcode">郵便番号（123-4567 形式）:</label>
<input type="text" id="zipcode" name="zipcode" pattern="\d{3}-\d{4}" placeholder="123-4567" />
```

- **pattern**：正規表現で入力形式を指定
- **例**：
  - `\d{3}-\d{4}`：3 桁-4 桁（郵便番号）
  - `[a-zA-Z0-9]+`：英数字のみ

---

### 5. `placeholder` - 入力例の表示

```html
<input type="email" id="email" name="email" placeholder="example@email.com" />
```

- **効果**：入力欄に薄く例を表示（ヒント）
- **注意**：placeholder は label の代わりにならない！必ず label も付けよう

---

## 完全版のフォーム例

ここまで学んだことを全部使った、実践的なお問い合わせフォーム：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>お問い合わせフォーム</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>

    <form action="/submit" method="POST">
      <!-- 名前 -->
      <div>
        <label for="name">お名前（必須）:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <!-- メールアドレス -->
      <div>
        <label for="email">メールアドレス（必須）:</label>
        <input type="email" id="email" name="email" required placeholder="example@email.com" />
      </div>

      <!-- 電話番号 -->
      <div>
        <label for="phone">電話番号:</label>
        <input type="tel" id="phone" name="phone" placeholder="090-1234-5678" />
      </div>

      <!-- お問い合わせ種類 -->
      <div>
        <label for="category">お問い合わせ種類:</label>
        <select id="category" name="category" required>
          <option value="">選択してください</option>
          <option value="product">製品について</option>
          <option value="support">サポート</option>
          <option value="other">その他</option>
        </select>
      </div>

      <!-- メッセージ -->
      <div>
        <label for="message">メッセージ（必須）:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <!-- 利用規約同意 -->
      <div>
        <label>
          <input type="checkbox" name="agree" value="yes" required />
          利用規約に同意します
        </label>
      </div>

      <!-- 送信ボタン -->
      <button type="submit">送信</button>
    </form>
  </body>
</html>
```

---

## 🤖 バイブコーディング実践

### AI への指示例

フォームを AI に作ってもらう時は、**具体的な項目と形式**を指定しよう！

#### ⭕ 良い指示の例

```text
「お問い合わせフォームを作ってください。以下の項目を含めてください：
- 名前（必須、テキスト入力）
- メールアドレス（必須、email形式）
- 電話番号（任意、tel形式）
- お問い合わせ種類（必須、ドロップダウンで「製品」「サポート」「その他」）
- メッセージ（必須、5行のテキストエリア）
- 利用規約への同意（必須、チェックボックス）
- 送信ボタン

各inputにはlabelを付けて、必須項目にはrequired属性を設定してください」
```

**良い点**：

- 各項目の名前が明確
- 入力形式（text, email, tel, select, textarea）を指定
- 必須/任意を明示
- label と required の指示

---

#### ❌ 曖昧な指示の例

```text
「お問い合わせフォーム作って」
```

**問題点**：

- どんな項目が必要か不明
- 入力形式が指定されていない
- 必須項目が分からない
- AI が勝手に判断するため、期待と違う結果になる可能性

---

### 生成されたコードの読み方

AI がフォームのコードを生成したら、以下のポイントをチェックしよう！

#### ✅ チェックリスト

1. **全ての input に label が付いているか？**

   ```html
   <!-- 良い例 -->
   <label for="email">メールアドレス:</label>
   <input type="email" id="email" name="email" />

   <!-- 悪い例：labelなし -->
   <input type="email" name="email" />
   ```

   → label がないと、アクセシビリティが低下！

2. **label と input が正しく関連付けられているか？**

   ```html
   <!-- 良い例：forとidが一致 -->
   <label for="username">ユーザー名:</label>
   <input type="text" id="username" name="username" />

   <!-- 悪い例：forとidが一致しない -->
   <label for="user">ユーザー名:</label>
   <input type="text" id="username" name="username" />
   ```

   → `for` と `id` が一致していないと、関連付けが機能しない！

3. **name 属性が設定されているか？**

   ```html
   <!-- 良い例 -->
   <input type="text" id="username" name="username" />

   <!-- 悪い例：nameなし -->
   <input type="text" id="username" />
   ```

   → `name` がないと、データが送信されない！

4. **適切な input タイプが使われているか？**

   ```html
   <!-- 良い例：メールアドレスにはtype="email" -->
   <input type="email" id="email" name="email" />

   <!-- 悪い例：メールアドレスなのにtype="text" -->
   <input type="text" id="email" name="email" />
   ```

   → 適切な `type` を使うと、ブラウザの機能（キーボード、バリデーション）が活用できる！

5. **必須項目に required が付いているか？**

   ```html
   <!-- 良い例 -->
   <input type="email" id="email" name="email" required />

   <!-- 悪い例：必須なのにrequiredなし -->
   <input type="email" id="email" name="email" />
   ```

   → `required` がないと、空欄でも送信できてしまう！

6. **ラジオボタンの name が統一されているか？**

   ```html
   <!-- 良い例：同じnameで1つだけ選択可能 -->
   <input type="radio" name="gender" value="male" /> 男性
   <input type="radio" name="gender" value="female" /> 女性

   <!-- 悪い例：nameが違うと全部選択できてしまう -->
   <input type="radio" name="gender1" value="male" /> 男性
   <input type="radio" name="gender2" value="female" /> 女性
   ```

   → ラジオボタンは同じ `name` を付けないと、1 つだけ選択という機能が働かない！

---

### よくある問題と修正方法

#### 問題 1：label をクリックしても input にフォーカスしない

**症状**：label をクリックしても、入力欄がアクティブにならない

**原因**：

- label の `for` 属性と input の `id` 属性が一致していない
- もしくは、`for` や `id` が設定されていない

**修正方法**：

```html
<!-- 修正前 -->
<label>メールアドレス:</label>
<input type="email" name="email" />

<!-- 修正後 -->
<label for="email">メールアドレス:</label>
<input type="email" id="email" name="email" />
```

---

#### 問題 2：フォームを送信してもデータが送られない

**症状**：フォームを送信しても、サーバーにデータが届かない

**原因**：`name` 属性が設定されていない

**修正方法**：

```html
<!-- 修正前 -->
<input type="text" id="username" />

<!-- 修正後 -->
<input type="text" id="username" name="username" />
```

**重要！** データ送信には `name` 属性が必須！（`id` だけではダメ）

---

#### 問題 3：ラジオボタンで複数選択できてしまう

**症状**：ラジオボタンなのに、複数選択できてしまう

**原因**：各ラジオボタンの `name` 属性が統一されていない

**修正方法**：

```html
<!-- 修正前 -->
<input type="radio" name="option1" value="a" /> A
<input type="radio" name="option2" value="b" /> B

<!-- 修正後：同じnameに統一 -->
<input type="radio" name="option" value="a" /> A
<input type="radio" name="option" value="b" /> B
```

---

#### 問題 4：スマホで入力しづらい

**症状**：スマホでメールアドレスや電話番号を入力する時、キーボードが使いづらい

**原因**：適切な `type` 属性が使われていない

**修正方法**：

```html
<!-- 修正前：全部type="text" -->
<input type="text" name="email" />
<input type="text" name="phone" />

<!-- 修正後：適切なtypeを使用 -->
<input type="email" name="email" />
<!-- スマホで@入りキーボード -->
<input type="tel" name="phone" />
<!-- スマホで数字キーボード -->
```

---

#### 問題 5：必須項目なのに空欄で送信できてしまう

**症状**：必須項目が空欄のまま送信できる

**原因**：`required` 属性が設定されていない

**修正方法**：

```html
<!-- 修正前 -->
<input type="email" id="email" name="email" />

<!-- 修正後 -->
<input type="email" id="email" name="email" required />
```

---

## カスタマイズポイント

AI が生成したフォームを、自分で微調整する時のポイント：

### 1. バリデーションの調整

```html
<!-- パスワードを8文字以上に -->
<input type="password" name="password" minlength="8" required />

<!-- 年齢を18〜120歳に制限 -->
<input type="number" name="age" min="18" max="120" required />

<!-- 郵便番号の形式を指定 -->
<input type="text" name="zipcode" pattern="\d{3}-\d{4}" placeholder="123-4567" required />
```

### 2. placeholder の追加

```html
<!-- 入力例を表示して親切に -->
<input type="email" name="email" placeholder="example@email.com" required />
<input type="tel" name="phone" placeholder="090-1234-5678" />
```

### 3. デフォルト値の設定

```html
<!-- 国を「日本」に初期設定 -->
<select name="country">
  <option value="jp" selected>日本</option>
  <option value="us">アメリカ</option>
</select>

<!-- チェックボックスを初期状態でチェック -->
<input type="checkbox" name="newsletter" value="yes" checked />
```

---

## まとめ

### このレッスンで学んだこと

- ✅ フォームの基本構造（`<form>`, `<label>`, `<input>`）
- ✅ 様々な input タイプ（text, email, password, number, date, tel, url, checkbox, radio, file）
- ✅ その他の入力要素（`<textarea>`, `<select>`）
- ✅ HTML5 バリデーション（required, minlength, maxlength, min, max, pattern）
- ✅ label と input の正しい関連付け（アクセシビリティ）
- ✅ AI に的確な指示を出してフォームを生成する方法
- ✅ 生成されたフォームのチェックポイント

### 次のステップ

このレッスンで学んだフォームの知識を活かして、演習問題に挑戦しよう！

実際に手を動かすことで、フォームの作り方がしっかり身につくよ！💪

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

フォームをマスターして、ユーザーとの双方向コミュニケーションを実現しよう！
