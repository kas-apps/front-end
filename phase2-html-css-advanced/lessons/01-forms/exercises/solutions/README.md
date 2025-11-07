# Lesson 1: HTML フォーム - 解答例と解説 📝

各演習問題の解答例と、そのポイントを解説します。

---

## 演習 1：最初のフォームを作ろう

### 解答例：[01-01.html](01-01.html)

### ポイント解説

#### 1. フォームの基本構造

```html
<form>
  <!-- フォームの内容 -->
</form>
```

すべての入力要素は `<form>` タグで囲みます。

#### 2. label と input の関連付け

```html
<label for="name">お名前（必須）:</label>
<input type="text" id="name" name="name" required />
```

- `label` の `for` 属性と `input` の `id` 属性を一致させる
- これにより、label をクリックしても input にフォーカスできる

#### 3. 適切な type 属性

```html
<input type="text" />
<!-- 名前用 -->
<input type="email" />
<!-- メールアドレス用 -->
```

- 名前には `type="text"`
- メールアドレスには `type="email"` を使用
- `type="email"` は自動でメール形式をチェックしてくれる

#### 4. name 属性は必須

```html
<input type="text" id="name" name="name" />
```

- `name` 属性がないと、データが送信されない
- `id` は label との関連付け用、`name` はデータ送信用

---

## 演習 2：テキストエリアを追加しよう

### 解答例：[01-02.html](01-02.html)

### ポイント解説

#### textarea の使い方

```html
<label for="message">お問い合わせ内容（必須）:</label>
<textarea id="message" name="message" rows="5" required></textarea>
```

- `rows` 属性で表示する行数を指定
- `cols` 属性で列数も指定可能（省略可）
- `required` で必須項目にできる
- `<textarea>` は終了タグが必要（`<input />` とは違う）

#### textarea と input の違い

- `<input type="text" />`：1 行だけ、自己閉じタグ
- `<textarea></textarea>`：複数行、終了タグが必要

---

## 演習 3：ドロップダウンリストを追加しよう

### 解答例：[01-03.html](01-03.html)

### ポイント解説

#### select の使い方

```html
<label for="category">お問い合わせ種類（必須）:</label>
<select id="category" name="category" required>
  <option value="">選択してください</option>
  <option value="product">製品について</option>
  <option value="support">サポート</option>
  <option value="other">その他</option>
</select>
```

- `<select>` で囲み、中に `<option>` を配置
- 最初の `<option>` は value を空にして、プレースホルダー的に使う
- 各 `option` の `value` がサーバーに送信される値

#### required との組み合わせ

```html
<select required>
  <option value="">選択してください</option>
  <!-- valueが空だと、これを選んだまま送信できない -->
  <option value="product">製品について</option>
</select>
```

- `required` を付けると、value が空の option を選んだまま送信できない
- 最初の option を value 空にすることで、「必ず何か選ばせる」ことができる

---

## 演習 4：複数の入力タイプを使ったフォーム

### 解答例：[01-04.html](01-04.html)

### ポイント解説

#### ラジオボタンの使い方

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

**重要！** ラジオボタンは：

- 同じ `name` 属性を付ける（これで 1 つだけ選択可能になる）
- 各選択肢に異なる `value` を設定
- label で input を囲むか、`for` と `id` で関連付ける

#### チェックボックスの使い方

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

**ラジオボタンとの違い**：

- チェックボックスは**複数選択可能**
- 同じ `name` を付けると、複数の値が配列で送信される

#### パスワードの minlength

```html
<input type="password" name="password" minlength="8" required />
```

- `minlength="8"` で、8 文字未満だと送信できない

---

## 演習 5：バリデーションを追加しよう

### 解答例：[01-05.html](01-05.html)

### ポイント解説

#### minlength と maxlength

```html
<input type="text" name="username" minlength="3" maxlength="20" required />
```

- `minlength`：最小文字数
- `maxlength`：最大文字数
- 両方設定すると、3〜20 文字の範囲に制限される

#### placeholder の活用

```html
<input type="email" name="email" placeholder="example@email.com" required />
```

- `placeholder` で入力例を表示
- ユーザーにとって分かりやすい
- **注意**：placeholder は label の代わりにならない！

#### 日付の max 制限

```html
<input type="date" name="birthday" max="2006-01-01" required />
```

- `max` で最大日付を指定
- 18 歳以上を確認する場合、今日から 18 年前の日付を設定
- 解答例では `2006-01-01` を設定（2024 年時点で 18 歳以上）

#### 利用規約への同意チェックボックス

```html
<label>
  <input type="checkbox" name="agree" value="yes" required />
  利用規約に同意します
</label>
```

- チェックボックスに `required` を付けると、チェック必須になる
- 利用規約の同意によく使われるパターン

---

## 演習 6：AI に指示して作ってもらおう

### 解答例：[01-06.html](01-06.html)

### ポイント解説

#### AI への良い指示の出し方

```text
✅ 良い指示：
「イベント申込フォームを作成してください。以下の項目を含めてください：
- 氏名（必須、テキスト入力）
- メールアドレス（必須、email形式、placeholderで入力例を表示）
...」
```

**良い点**：

- 各項目の名前が明確
- 入力形式（text, email, tel, number, date）を指定
- 必須/任意を明示
- 細かい指定（placeholder、範囲、行数など）も含む

#### 生成されたコードのチェックポイント

1. **全ての input に label が付いているか？**
2. **label と input が正しく関連付けられているか？**
3. **name 属性が全ての入力要素に設定されているか？**
4. **適切な input タイプが使われているか？**
5. **必須項目に required が付いているか？**
6. **ラジオボタンの name が統一されているか？**
7. **数値の範囲（min, max）が設定されているか？**

#### number タイプの範囲指定

```html
<input type="number" name="participants" min="1" max="10" required />
```

- `min="1"` で 1 人以上
- `max="10"` で 10 人以下
- 範囲外の値は送信できない

---

## チャレンジ 1：エラーを見つけて修正しよう

### 解答例：[01-07.html](01-07.html)

### 修正ポイント解説

#### 問題 1：label と input が関連付けられていない

```html
<!-- 修正前 -->
<label>名前:</label>
<input type="text" id="name" />

<!-- 修正後 -->
<label for="name">名前:</label>
<input type="text" id="name" name="name" />
```

- `label` に `for="name"` を追加
- `name` 属性も追加

#### 問題 2：メールアドレスなのに type="text"

```html
<!-- 修正前 -->
<input type="text" id="email" />

<!-- 修正後 -->
<input type="email" id="email" name="email" />
```

- `type="email"` に変更
- スマホでの入力がしやすくなり、自動でメール形式をチェック

#### 問題 3：name 属性がない

```html
<!-- 修正前 -->
<input type="tel" id="phone" />

<!-- 修正後 -->
<input type="tel" id="phone" name="phone" />
```

- `name` 属性を追加
- これがないとデータが送信されない！

#### 問題 4：ラジオボタンの name が統一されていない

```html
<!-- 修正前 -->
<input type="radio" name="gender1" value="male" />
<input type="radio" name="gender2" value="female" />

<!-- 修正後 -->
<input type="radio" name="gender" value="male" />
<input type="radio" name="gender" value="female" />
```

- 同じ `name="gender"` に統一
- これで 1 つだけ選択可能になる

#### 問題 5：必須項目なのに required がない

```html
<!-- 修正前 -->
<textarea id="message" name="message"></textarea>

<!-- 修正後 -->
<textarea id="message" name="message" required></textarea>
```

- `required` 属性を追加
- 空欄での送信を防ぐ

---

## まとめ

### よくある間違いと解決策

| 間違い                      | 問題                     | 解決策                            |
| --------------------------- | ------------------------ | --------------------------------- |
| label と input が未関連付け | クリックしても反応しない | `for` と `id` を一致させる        |
| name 属性がない             | データが送信されない     | `name` 属性を追加                 |
| type が不適切               | スマホで入力しづらい     | email, tel, number など適切な型へ |
| ラジオボタンの name が別々  | 複数選択できてしまう     | 同じ `name` に統一                |
| required がない             | 空欄で送信できてしまう   | `required` 属性を追加             |

### 学習のポイント

- ✅ label と input の関連付けは必須（アクセシビリティのため）
- ✅ name 属性がないとデータが送信されない
- ✅ 適切な type を使うと、ブラウザが自動でサポートしてくれる
- ✅ HTML5 バリデーションで、基本的な入力チェックができる
- ✅ AI に指示する時は、項目・形式・必須/任意を具体的に

---

**お疲れ様！** 🎉

フォームの作り方をしっかりマスターできたね！

次は Lesson 2 で Flexbox を学んで、レイアウトの幅を広げよう！

---

**Let's vibe and code!** 🎉
