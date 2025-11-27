# Lesson 1: 高度なイベント処理 - 解答例 ✅

お疲れさまでした！演習問題に挑戦してくれてありがとう！
ここでは各問題の解答例を紹介するよ。自分のコードと比べてみてね！

---

## 基礎編

### 問題 1-1: イベントオブジェクトの活用

**学習ポイント**：

- イベントオブジェクトには、イベントに関するたくさんの情報が入っているよ！
- `event.type`、`event.target`、`event.clientX`、`event.clientY` を使って、イベントの詳細情報を取得できる
- デベロッパーツールのコンソールで実際の値を見てみよう！

**解答のポイント**：

```javascript
button.addEventListener('click', (event) => {
  console.log('イベントタイプ:', event.type); // 'click'
  console.log('クリックされた要素:', event.target); // <button>要素
  console.log('マウスのX座標:', event.clientX); // 画面左端からのピクセル数
  console.log('マウスのY座標:', event.clientY); // 画面上端からのピクセル数
});
```

👉 [完全なコード例を見る](01-01.html)

---

### 問題 1-2: preventDefault の使用

**学習ポイント**：

- `event.preventDefault()` は「通常の動作をキャンセル」する魔法のメソッド！
- リンクのクリック、フォームの送信など、ブラウザのデフォルト動作を止められる
- カスタムの動作を実装したい時に超便利！

**解答のポイント**：

```javascript
link.addEventListener('click', (event) => {
  event.preventDefault(); // ページ遷移をキャンセル！
  alert('リンクがクリックされましたが、遷移はキャンセルされました');
});
```

**バイブコーダー向けのヒント**：
AI に指示する時は「デフォルトの動作をキャンセルする」という言葉を使おう！
「event.preventDefault を使って」と具体的に伝えるのもグッド！

👉 [完全なコード例を見る](01-02.html)

---

### 問題 1-3: イベント伝播の確認

**学習ポイント**：

- イベントは**バブリング**という仕組みで、子要素から親要素へと伝わっていく
- 子要素をクリックすると、子→親→祖父の順でイベントが発火する
- これを理解すると、イベント委譲（問題 1-4）が理解しやすくなる！

**解答のポイント**：

```javascript
// 子要素をクリックすると、こんな順序で発火するよ！
// 1. 子要素がクリックされました
// 2. 親要素がクリックされました
// 3. 祖父要素がクリックされました
```

**バイブコーダー向けのヒント**：
コンソールの出力を見て、イベントの伝播順序を確認しよう！
この動きを理解すると、次のイベント委譲が楽しくなる！

👉 [完全なコード例を見る](01-03.html)

---

## 応用編

### 問題 1-4: イベント委譲でリスト管理

**学習ポイント**：

- **イベント委譲**は、親要素に 1 つだけイベントリスナーを設定する技術
- 動的に追加される子要素（TODOタスク）にも自動的にイベントが適用される
- パフォーマンスも良いし、コードもシンプルになる最高の技術！

**解答のポイント**：

```javascript
// 親要素（ul）に1つだけイベントリスナーを設定
taskList.addEventListener('click', (event) => {
  // クリックされた要素が削除ボタンかどうかチェック
  if (event.target.classList.contains('delete')) {
    // 親要素（li）を削除
    event.target.parentElement.remove();
  }
});
```

**よくある間違い**：

- ❌ 各タスクに個別にイベントリスナーを設定してしまう
- ✅ 親要素に 1 つだけ設定して、`event.target` で判定する

**バイブコーダー向けのヒント**：
AI に「イベント委譲を使って」と伝えると、親要素にイベントリスナーを設定してくれるよ！
「event.target で削除ボタンを判定」とも伝えると完璧！

👉 [完全なコード例を見る](01-04.html)

---

### 問題 1-5: stopPropagation の使用

**学習ポイント**：

- `event.stopPropagation()` は「イベントの伝播を止める」メソッド
- 子要素のイベントだけを処理して、親要素のイベントを発火させたくない時に使う
- 問題 1-3 で見たバブリングを止めるための技術！

**解答のポイント**：

```javascript
// 子要素（ボタン）のイベント
button.addEventListener('click', (event) => {
  event.stopPropagation(); // 親へのイベント伝播を止める！
  alert('子がクリックされました');
});

// 親要素のイベント
parent.addEventListener('click', () => {
  alert('親がクリックされました'); // ボタンをクリックしても発火しない！
});
```

**stopPropagation と preventDefault の違い**：

- `preventDefault()`：ブラウザのデフォルト動作を止める
- `stopPropagation()`：親要素へのイベント伝播を止める

**バイブコーダー向けのヒント**：
AI に「子要素をクリックした時、親要素のイベントが発火しないようにする」と伝えると、
stopPropagation を使ったコードを生成してくれるよ！

👉 [完全なコード例を見る](01-05.html)

---

### 問題 1-6: キーボードイベントの処理

**学習ポイント**：

- キーボードイベントで、ユーザーフレンドリーなショートカットを実装できる
- `event.key` で押されたキーを判定
- `event.ctrlKey`、`event.metaKey` で修飾キー（Ctrl、Cmd）を判定
- ショートカットキーは、必ず `preventDefault()` でブラウザのデフォルト動作をキャンセルしよう

**解答のポイント**：

```javascript
input.addEventListener('keydown', (event) => {
  // Enterキーで送信
  if (event.key === 'Enter') {
    alert('送信されました');
  }

  // Escapeキーでクリア
  if (event.key === 'Escape') {
    input.value = '';
  }

  // Ctrl+S (または Cmd+S) で保存
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault(); // ブラウザの保存ダイアログをキャンセル
    alert('保存されました');
  }
});
```

**よくある間違い**：

- ❌ Ctrl+S の preventDefault を忘れる → ブラウザの保存ダイアログが開いてしまう
- ❌ Mac の Cmd キー（metaKey）を考慮していない → Mac ユーザーが使えない
- ✅ 両方の修飾キーをチェックして、preventDefault を忘れずに！

**バイブコーダー向けのヒント**：
AI への指示例：

```text
「input要素でキーボードイベントを処理してください：
1. Enterキーで「送信されました」と表示
2. Escapeキーで入力欄をクリア
3. Ctrl+S（macOSではCmd+S）で「保存されました」と表示し、デフォルト動作をキャンセル

event.ctrlKey と event.metaKey の両方をチェックして、
Ctrl+S の preventDefault を忘れずに実装してください。」
```

👉 [完全なコード例を見る](01-06.html)

---

## チャレンジ

### 問題 1-7: 高度な TODO リスト

**学習ポイント**：

- これまで学んだすべてのテクニックを組み合わせた、本格的な TODO リスト！
- イベント委譲、Enter キー処理、空欄チェック、タスク数のカウントなど盛りだくさん
- 実際のプロジェクトでも使える実用的なコード！

**解答のポイント**：

1. **イベント委譲**で削除と完了ボタンを処理

    ```javascript
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        // 削除処理
      } else if (event.target.classList.contains('toggle')) {
        // 完了/未完了の切り替え
      }
    });
    ```

2. **Enter キー**でタスクを追加

    ```javascript
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
    ```

3. **空欄チェック**で無効な入力を防ぐ

    ```javascript
    if (input.value.trim() === '') {
      alert('タスクを入力してください');
      return;
    }
    ```

4. **タスク数の表示**で進捗を可視化

    ```javascript
    const totalTasks = taskList.querySelectorAll('li').length;
    const completedTasks = taskList.querySelectorAll('.completed').length;
    ```

**よくある間違い**：

- ❌ trim() を使わずに空白だけの入力を許可してしまう
- ❌ タスク数の更新を忘れる
- ❌ 削除や完了の際に、タスク数を再計算していない
- ✅ すべての操作の後に updateCount() を呼ぶ！

**バイブコーダー向けのヒント**：

AI への指示例：

```text
「本格的なTODOリストを作成してください：

機能要件：
1. 入力欄と追加ボタンでタスクを追加
2. 各タスクに「完了」と「削除」ボタンを表示
3. 完了ボタンで取り消し線を切り替え（classList.toggle('completed')）
4. イベント委譲で親要素にイベントリスナーを1つだけ設定
5. Enterキーでもタスクを追加できる
6. 空欄（trim後）は追加できないようにする
7. 「全タスク数：X件、完了：Y件」を表示し、追加・削除・完了の度に更新

実装のポイント：
- addTask関数を作成し、ボタンとEnterキーの両方から呼び出す
- updateCount関数を作成し、タスク数を更新する
- イベント委譲で event.target.classList.contains() を使ってボタンを判定
- CSS で .completed クラスに text-decoration: line-through を設定」
```

**生成されたコードのチェックポイント**：

- [ ] イベント委譲が正しく実装されている（親要素に1つだけリスナー）
- [ ] trim() で空欄チェックをしている
- [ ] Enter キーの処理がある
- [ ] タスク数の表示と更新がある
- [ ] 完了状態の切り替えが classList.toggle で実装されている
- [ ] CSS で .completed クラスのスタイルが定義されている

👉 [完全なコード例を見る](01-07.html)

---

## まとめ

お疲れさまでした！🎉

この演習を通じて、高度なイベント処理のテクニックをマスターできたね！

**学んだこと**：

- ✅ イベントオブジェクトの活用
- ✅ preventDefault でデフォルト動作のキャンセル
- ✅ イベント伝播（バブリング）の理解
- ✅ イベント委譲で効率的なコード
- ✅ stopPropagation でイベント伝播の制御
- ✅ キーボードイベントの処理
- ✅ 実用的な TODO リストの実装

**次のステップ**：

これらのテクニックを組み合わせれば、どんな複雑なインタラクションも実装できるよ！
次のレッスンでは、さらに高度な JavaScript のテクニックを学んでいこう！

**バイブコーダーへのメッセージ**：

AI にコードを生成してもらう時、これらのテクニックの名前を知っていれば、
より的確な指示が出せるようになったはず！

「イベント委譲を使って」
「preventDefault でデフォルト動作をキャンセルして」
「Enter キーで〇〇する機能を追加して」

こんな風に具体的に伝えられるようになれば、AI との協働がもっと楽しくなる！

**Let's vibe and code!** 🚀
