# Lesson 1: HTML フォーム - 演習問題 💪

このレッスンで学んだ内容を実際に手を動かして練習しよう！

---

## 基礎編

### 演習 1：最初のフォームを作ろう

以下の条件でフォームを作成してください：

**フォームの内容**：

- フォームのタイトル（h1）：「お問い合わせフォーム」
- 名前の入力欄（必須）
- メールアドレスの入力欄（必須）
- 送信ボタン

**要件**：

- 全ての input に label を付ける
- label と input を `for` と `id` で関連付ける
- 適切な `type` 属性を使用する
- 必須項目には `required` 属性を付ける
- 各 input に `name` 属性を設定する

**ヒント**：レッスンで学んだ基本構造を思い出そう！

**解答例**：[solutions/01-01.html](solutions/01-01.html)

---

### 演習 2：テキストエリアを追加しよう

演習 1 で作ったフォームに、以下を追加してください：

- メッセージの入力欄（textarea、5 行、必須）
- label は「お問い合わせ内容」

**ヒント**：`<textarea>` タグを使おう！`rows` 属性で行数を指定できるよ。

**解答例**：[solutions/01-02.html](solutions/01-02.html)

---

### 演習 3：ドロップダウンリストを追加しよう

演習 2 で作ったフォームに、以下を追加してください：

- お問い合わせの種類を選ぶドロップダウンリスト（必須）
- label は「お問い合わせ種類」
- 選択肢：
  - 「選択してください」（初期状態、value は空）
  - 「製品について」（value="product"）
  - 「サポート」（value="support"）
  - 「その他」（value="other"）

**ヒント**：`<select>` と `<option>` を使おう！

**解答例**：[solutions/01-03.html](solutions/01-03.html)

---

## 応用編

### 演習 4：複数の入力タイプを使ったフォーム

以下の内容を含む「会員登録フォーム」を作成してください：

**フォームの内容**：

- ユーザー名（テキスト、必須）
- メールアドレス（email、必須）
- パスワード（password、8 文字以上、必須）
- 生年月日（date、必須）
- 性別（ラジオボタン：「男性」「女性」「その他」）
- 興味のある分野（チェックボックス：「プログラミング」「デザイン」「ビジネス」）※複数選択可
- 送信ボタン

**要件**：

- 全ての input に label を付ける
- 適切な `type` 属性を使用する
- パスワードには `minlength="8"` を設定する
- ラジオボタンは同じ `name` を付ける

**解答例**：[solutions/01-04.html](solutions/01-04.html)

---

### 演習 5：バリデーションを追加しよう

演習 4 で作ったフォームに、以下のバリデーションを追加してください：

- ユーザー名：3 文字以上、20 文字以内
- パスワード：8 文字以上、20 文字以内
- メールアドレス：placeholder で入力例を表示（`example@email.com`）
- 生年月日：18 歳以上であることを確認（hint: `max` 属性で今日から 18 年前の日付を設定）
- 利用規約への同意（チェックボックス、必須）を追加

**ヒント**：

- `minlength` と `maxlength` で文字数を制限
- `placeholder` で入力例を表示
- `required` で必須項目を設定

**解答例**：[solutions/01-05.html](solutions/01-05.html)

---

### 演習 6：AI に指示して作ってもらおう

AI に以下の内容のフォームを作ってもらってください：

**フォームの内容**：「イベント申込フォーム」

- 氏名（テキスト、必須）
- メールアドレス（email、必須、placeholder 付き）
- 電話番号（tel、任意、placeholder 付き）
- 参加人数（number、1〜10 人、必須）
- 参加希望日（date、必須）
- 食事の有無（ラジオボタン：「あり」「なし」、必須）
- アレルギー情報（textarea、3 行、任意）
- プライバシーポリシーへの同意（チェックボックス、必須）
- 送信ボタン

**AI への指示例**：

```text
「イベント申込フォームを作成してください。以下の項目を含めてください：
- 氏名（必須、テキスト入力）
- メールアドレス（必須、email形式、placeholderで入力例を表示）
- 電話番号（任意、tel形式、placeholderで入力例を表示）
- 参加人数（必須、number形式、1〜10人の範囲）
- 参加希望日（必須、date形式）
- 食事の有無（必須、ラジオボタンで「あり」「なし」）
- アレルギー情報（任意、3行のtextarea）
- プライバシーポリシーへの同意（必須、チェックボックス）
- 送信ボタン

全てのinputにlabelを付けて、必須項目にはrequired属性を設定してください。
for属性とid属性で正しく関連付けてください。」
```

生成されたコードを、レッスンで学んだ「チェックリスト」で確認してみよう！

#### ✅ チェックリスト

1. **全ての input に label が付いているか？**
2. **label と input が正しく関連付けられているか？**（`for` と `id` が一致）
3. **name 属性が設定されているか？**
4. **適切な input タイプが使われているか？**（email, tel, number, date など）
5. **必須項目に required が付いているか？**
6. **ラジオボタンの name が統一されているか？**
7. **参加人数に min="1" max="10" が設定されているか？**
8. **placeholder が適切に設定されているか？**

**解答例**：[solutions/01-06.html](solutions/01-06.html)

---

## チャレンジ 🏆

### チャレンジ 1：エラーを見つけて修正しよう

以下のフォームには複数の問題があります。何が間違っているか見つけて修正してください：

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
      <!-- 問題1：labelとinputが関連付けられていない -->
      <label>名前:</label>
      <input type="text" id="name" />

      <!-- 問題2：メールアドレスなのにtype="text" -->
      <label for="email">メールアドレス:</label>
      <input type="text" id="email" />

      <!-- 問題3：name属性がない -->
      <label for="phone">電話番号:</label>
      <input type="tel" id="phone" />

      <!-- 問題4：ラジオボタンのnameが統一されていない -->
      <p>性別:</p>
      <label>
        <input type="radio" name="gender1" value="male" />
        男性
      </label>
      <label>
        <input type="radio" name="gender2" value="female" />
        女性
      </label>

      <!-- 問題5：必須項目なのにrequiredがない -->
      <label for="message">メッセージ:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">送信</button>
    </form>
  </body>
</html>
```

**ヒント**：レッスンの「よくある問題と修正方法」を参考にしよう！

**修正すべき点**：

1. label に `for` 属性を追加、または input を label で囲む
2. メールアドレスの input を `type="email"` に変更
3. 全ての input に `name` 属性を追加
4. ラジオボタンの `name` を統一（同じ名前にする）
5. 必須項目に `required` 属性を追加

**解答例**：[solutions/01-07.html](solutions/01-07.html)

---

## 学習のポイント

### 演習を終えたら確認しよう

- [ ] フォームの基本構造（form, label, input）を理解した
- [ ] 様々な input タイプを使い分けられる
- [ ] label と input を正しく関連付けられる
- [ ] HTML5 バリデーション（required, minlength, min, max など）を使える
- [ ] AI に具体的な指示を出してフォームを生成できる
- [ ] 生成されたフォームの問題点を見つけられる

[解答例と解説はこちら](solutions/README.md)で確認できます。

---

**お疲れ様！** 🎉

フォームの基本をしっかりマスターできたね！次のレッスンに進もう！

👉 [Lesson 2: Flexbox へ進む](../../02-flexbox/README.md)

---

**Let's vibe and code!** 🎉
