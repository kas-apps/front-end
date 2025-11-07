# Phase 4: JavaScript 発展編 🚀

**目標**:イベント処理や非同期処理を使った動的な機能を実装できるようになる

---

## この Phase で学ぶこと

Phase 3 では、JavaScript の基礎文法、条件分岐、ループ、関数、配列、オブジェクト、基本的な DOM 操作を学んだね！

でも、それだけでは**本格的な Web アプリケーション**はまだ作れない。ユーザーの複雑な操作に対応したり、サーバーからデータを取得したり、**もっと高度な動的機能**が必要になるんだ！

Phase 4 では、**実践的で高度な JavaScript テクニック**を学んで、プロが作るような Web アプリケーションを開発できるようになるよ！

### できるようになること

- イベントの詳細な制御（伝播、委譲など）ができる
- フォームのリアルタイムバリデーションが実装できる
- 非同期処理（Promise、async/await）を理解して使える
- API と通信してデータを取得・表示できる
- モダンな JavaScript の書き方をマスターできる

**これだけできれば、検索機能、TODO アプリ、天気情報アプリなど、実用的な Web アプリが作れるよ！** 💪

---

## 📚 レッスン一覧

### Lesson 1: 高度なイベント処理 🎯

- addEventListener の詳細
- イベントオブジェクト
- イベント伝播（バブリング、キャプチャリング）
- イベント委譲（delegation）
- preventDefault と stopPropagation
- カスタムイベント

**学習時間の目安：3-4 時間**

👉 [Lesson 1 へ進む](lessons/01-advanced-events/README.md)

---

### Lesson 2: フォーム操作とバリデーション 📝

- フォームデータの取得
- リアルタイムバリデーション
- カスタムバリデーション
- 動的なフォーム要素の追加・削除
- FormData の使用
- エラーメッセージの表示

**学習時間の目安：3-4 時間**

👉 [Lesson 2 へ進む](lessons/02-form-validation/README.md)

---

### Lesson 3: 非同期処理の基礎 ⏱️

- 同期処理 vs 非同期処理
- setTimeout と setInterval
- コールバック関数
- Promise の基本（then, catch, finally）
- async/await の基本
- エラーハンドリング（try-catch）

**学習時間の目安：3-4 時間**

👉 [Lesson 3 へ進む](lessons/03-async-basics/README.md)

---

### Lesson 4: API 連携と JSON 🌐

- fetch API の基本
- JSON とは何か
- API からデータを取得する
- POST リクエストでデータを送信する
- エラーハンドリング
- ローディング表示の実装
- 実践例（天気情報、TODO API）

**学習時間の目安：4-5 時間**

👉 [Lesson 4 へ進む](lessons/04-api-json/README.md)

---

### Lesson 5: モダン JavaScript 🎨

- スプレッド構文（...）の詳細
- 分割代入（配列、オブジェクト）
- オプショナルチェーン（?.）
- Nullish coalescing（??）
- テンプレートリテラルの高度な使い方
- モジュール（import/export）の基本
- その他の便利な機能

**学習時間の目安：3-4 時間**

👉 [Lesson 5 へ進む](lessons/05-modern-javascript/README.md)

---

## 🚀 Phase 4 の進め方

### 推奨ステップ

1. **Phase 3 の復習**

   - 変数、関数、配列、オブジェクト、基本的な DOM 操作を復習しよう
   - Phase 4 は Phase 3 の知識が前提になるよ
   - 不安な部分があれば Phase 3 に戻って確認！

2. **Lesson 1 から順番に進める**

   - Phase 4 も積み重ねが大切！
   - 特に Lesson 3（非同期処理）は、Lesson 4（API 連携）の前提知識
   - 焦らず、一つずつ理解していこう

3. **実際にコードを動かす**

   - サンプルコードを必ず自分で書いて実行する
   - console.log() で動作を確認する
   - 値を変えて実験してみる
   - エラーが出ても恐れず、原因を探そう

4. **ブラウザの開発者ツールを活用する**

   - Network タブで API 通信を確認できる
   - Console タブでエラーを確認できる
   - Debugger で処理の流れを追える

5. **演習問題に挑戦する**

   - 各レッスンの演習問題を必ず解く
   - AI と相談しながらでも OK
   - 自分で考えて、試行錯誤することが大切

6. **実践プロジェクトで総復習**
   - Phase 4 を終えたら、ミニプロジェクトに挑戦しよう
   - 学んだことを組み合わせて、本格的なアプリを作ってみよう

---

## 🤖 バイブコーダー向けポイント

### Phase 4 での AI の使い方

Phase 4 では、より高度な JavaScript を学ぶけど、AI はあなたの最強のペアプログラマー！

#### 1. 複雑な機能の実装を依頼する

```
良い指示の例：
「fetch APIを使って、https://api.example.com/usersからユーザー一覧を取得し、
取得したデータをリスト形式でHTMLに表示するコードを書いてください。
エラーハンドリングとローディング表示も含めてください。」

悪い指示の例：
「APIでデータ取ってきて」
```

#### 2. 非同期処理のパターンを学ぶ

```
良い質問の例：
「このPromiseチェーンをasync/awaitで書き換えるとどうなりますか？
エラーハンドリングも含めて教えてください。」

AI から現代的な書き方を学べる！
```

#### 3. デバッグを相談する

```
良い質問の例：
「fetch APIでデータを取得しようとしていますが、
'Uncaught (in promise) TypeError: Failed to fetch'
というエラーが出ます。原因と修正方法を教えてください。」

エラーメッセージとコードを伝えるのが大事！
```

#### 4. ベストプラクティスを学ぶ

```
良い質問の例：
「このコードは動きますが、もっとモダンで読みやすい書き方はありますか？
エラーハンドリングやパフォーマンスの観点で改善点があれば教えてください。」

AI からプロの書き方を学べる！
```

### チェックポイント

AI が生成した Phase 4 レベルのコードを見る時、こんなポイントをチェックしよう：

- ✅ **非同期処理が適切か**

  - async/await が使われているか（Promise チェーンより読みやすい）
  - try-catch でエラーハンドリングされているか
  - Promise が適切に処理されているか

- ✅ **API 通信が正しいか**

  - fetch の使い方が正しいか
  - レスポンスの JSON パースが適切か
  - エラー時の処理があるか
  - ローディング状態を表示しているか

- ✅ **イベント処理が効率的か**

  - イベント委譲を使っているか（パフォーマンス向上）
  - 不要なイベントリスナーが削除されているか
  - preventDefault や stopPropagation が適切に使われているか

- ✅ **モダンな JavaScript が使われているか**

  - const/let が適切に使われているか
  - スプレッド構文や分割代入が活用されているか
  - オプショナルチェーン（?.）でエラー防止しているか

- ✅ **コードが読みやすいか**
  - 関数が適切に分割されているか
  - 変数名が分かりやすいか
  - コメントが適切に付いているか

---

## 💡 Phase 4 学習のコツ

### 1. 非同期処理を恐れない

非同期処理は最初は難しく感じるかもしれないけど、パターンを覚えれば大丈夫！

```javascript
// パターン1: async/awaitの基本形
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("エラー:", error);
  }
}

// このパターンを覚えれば、ほとんどの非同期処理に対応できる！
```

**パターンを理解すれば、応用は簡単！** 🎯

---

### 2. console.log() と Network タブを活用する

API 通信のデバッグには、Console と Network タブが必須：

```javascript
async function fetchUsers() {
  console.log("データ取得開始"); // ① 処理の開始を確認

  const response = await fetch("https://api.example.com/users");
  console.log("レスポンス:", response); // ② レスポンスを確認

  const data = await response.json();
  console.log("取得データ:", data); // ③ データの中身を確認
}
```

**Network タブでは、リクエストの詳細（URL、ステータスコード、レスポンス）が見られる！** 🔍

---

### 3. エラーメッセージから学ぶ

非同期処理のエラーは、原因が分かりにくいことも。でも、エラーメッセージをよく読めば解決できる！

```javascript
// Uncaught (in promise) TypeError: Cannot read property 'name' of undefined
// → dataがundefinedになってる！APIからデータが返ってきてない可能性

// Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
// → レスポンスがJSONじゃない！HTMLが返ってきてるかも

// TypeError: Failed to fetch
// → ネットワークエラー！URLが間違ってるか、CORSエラーかも
```

**エラーメッセージは、問題解決の最大のヒント！** 💡

---

### 4. 小さく実装して、徐々に機能を追加

いきなり完璧なコードを書こうとしない！

```javascript
// ステップ1: まずシンプルに取得だけ
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

// ステップ2: エラーハンドリングを追加
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("エラー:", error);
  }
}

// ステップ3: ローディング表示を追加
async function fetchData() {
  showLoading(); // ローディング表示
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    displayData(data); // データを表示
  } catch (error) {
    showError(error); // エラー表示
  } finally {
    hideLoading(); // ローディング非表示
  }
}
```

**段階的に実装すると、どこで問題が起きたか分かりやすい！** 🔬

---

## 🎯 Phase 4 で身につく力

### 1. 非同期処理の理解

- Promise と async/await を使いこなせる
- エラーハンドリングができる
- 複数の非同期処理を並列・直列で実行できる

### 2. API 連携スキル

- REST API と通信できる
- JSON データを扱える
- リクエスト・レスポンスを理解できる
- エラーに適切に対応できる

### 3. 実践的な DOM 操作

- イベント委譲で効率的なコードが書ける
- フォームバリデーションが実装できる
- 動的にコンテンツを追加・削除できる

### 4. モダン JavaScript の習得

- ES6+ の機能を活用できる
- 読みやすく保守しやすいコードが書ける
- 現代的な開発スタイルを身につけられる

---

## 🏗️ Phase 4 ミニプロジェクト（準備中）

Phase 4 の仕上げとして、これまで学んだことを全部使ったプロジェクトに挑戦しよう！

### プロジェクト例

#### 1. リアルタイム天気情報アプリ

**内容**：

- API から天気情報を取得
- 都市名で検索できる
- 現在の天気と 3 日間の予報を表示
- ローディング表示とエラーハンドリング

**使う技術**：

- fetch API でデータ取得
- async/await で非同期処理
- フォームバリデーション
- 動的な DOM 操作

---

#### 2. TODO 管理アプリ（API 連携版）

**内容**：

- サーバーと同期する TODO アプリ
- タスクの追加・編集・削除・完了
- データは API に保存
- リアルタイムバリデーション

**使う技術**：

- fetch API で CRUD 操作
- Promise でデータ処理
- イベント委譲
- フォーム操作

---

#### 3. ユーザー検索アプリ

**内容**：

- API からユーザーリストを取得
- 名前で検索できる
- ユーザーカードを動的に生成
- ページネーション機能

**使う技術**：

- fetch API でデータ取得
- 配列メソッド（filter, map）
- 動的な DOM 操作
- イベント処理

---

## ✅ Phase 4 完了チェックリスト

Phase 4 を終える前に、以下の項目をチェックしよう！

- [ ] addEventListener でイベントを登録できる
- [ ] イベントオブジェクトを活用できる
- [ ] イベント委譲を理解して使える
- [ ] preventDefault と stopPropagation を使い分けられる
- [ ] フォームデータを取得・バリデーションできる
- [ ] リアルタイムバリデーションを実装できる
- [ ] 同期処理と非同期処理の違いを理解した
- [ ] Promise の基本（then, catch）を理解した
- [ ] async/await を使って非同期処理を書ける
- [ ] try-catch でエラーハンドリングできる
- [ ] fetch API で GET リクエストができる
- [ ] fetch API で POST リクエストができる
- [ ] JSON データをパース・使用できる
- [ ] API のエラーを適切に処理できる
- [ ] スプレッド構文を活用できる
- [ ] 分割代入を使える
- [ ] オプショナルチェーン（?.）を使える
- [ ] AI に的確な指示を出して高度な JavaScript を生成できる
- [ ] 生成されたコードの非同期処理を理解できる

全部チェックできたら、Phase 5 または Phase 6 へ進む準備完了！🎉

---

## 🚀 次のステップ

Phase 4 お疲れ様！JavaScript の発展的な機能、しっかり身についたね！

次は 2 つの選択肢があるよ：

### 選択肢 1: Phase 5: CSS フレームワーク

- Bootstrap や Tailwind CSS などのフレームワークを学ぶ
- より効率的にスタイリングできるようになる
- レスポンシブデザインが簡単に作れるようになる

👉 [Phase 5: CSS フレームワークへ進む](../phase5-frameworks/README.md)（準備中）

---

### 選択肢 2: Phase 6: 統合プロジェクト

- Phase 1-4 で学んだことを総動員
- 本格的な Web アプリケーションを開発
- ポートフォリオに載せられる作品を作る

👉 [Phase 6: 統合プロジェクトへ進む](../phase6-projects/README.md)（準備中）

---

## 📖 学習リソース

### 公式ドキュメント

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript) - 最も信頼できる JavaScript のリファレンス
- [MDN - Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API) - fetch API の詳細
- [MDN - Promise](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) - Promise の詳細

### オンラインツール

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 練習用の無料 REST API
- [Postman](https://www.postman.com/) - API テストツール
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - デバッグツール

### デバッグツール

- **Network タブ** - API 通信を確認
- **Console タブ** - エラーと console.log を確認
- **Sources タブ** - デバッガーでコードをステップ実行

---

**Let's vibe and code!** 🎉

JavaScript の発展的な機能、楽しく学んでいこう！非同期処理や API 連携は最初は難しく感じるかもしれないけど、パターンを覚えれば必ずできるようになるよ！実際のアプリケーション開発で最も重要なスキルだから、じっくり取り組もう！💪
