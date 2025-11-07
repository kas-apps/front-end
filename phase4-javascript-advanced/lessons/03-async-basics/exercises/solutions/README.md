# Lesson 3: 非同期処理の基礎 - 解答例 ✅

お疲れさまでした！演習問題に挑戦してくれてありがとう！
ここでは各問題の解答例を紹介するよ。自分のコードと比べてみてね！

---

## 基礎編

### 問題 3-1: setTimeout でカウントダウン

**学習ポイント**：
- `setTimeout()` は指定時間後に**1回だけ**関数を実行するよ
- `clearTimeout()` でタイマーをキャンセルできる
- タイマーIDを変数に保存しておくことで、後からキャンセルできる

**解答のポイント**：

```javascript
let timerId; // タイマーIDを保存

// 開始ボタン
startButton.addEventListener('click', () => {
  console.log('3秒後にアラートが出るよ');

  // setTimeout はタイマーIDを返す
  timerId = setTimeout(() => {
    alert('時間になりました！');
  }, 3000);
});

// キャンセルボタン
cancelButton.addEventListener('click', () => {
  clearTimeout(timerId); // タイマーIDを使ってキャンセル
  console.log('タイマーをキャンセルしました');
});
```

**バイブコーダー向けのヒント**：
AI に「setTimeout でタイマーを設定して、clearTimeout でキャンセルできるようにして」と伝えると、
タイマーIDを変数に保存したコードを生成してくれるよ！

👉 [完全なコード例を見る](03-01.html)

---

### 問題 3-2: setInterval でリアルタイムカウンター

**学習ポイント**：
- `setInterval()` は指定間隔で**繰り返し**関数を実行する
- `clearInterval()` で繰り返しを止められる
- カウンターの値は変数で管理する

**解答のポイント**：

```javascript
let count = 0;
let intervalId;

// 開始ボタン
startButton.addEventListener('click', () => {
  // 1秒ごとにカウントアップ
  intervalId = setInterval(() => {
    count++;
    display.textContent = count;
  }, 1000);
});

// 停止ボタン
stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});

// リセットボタン
resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  count = 0;
  display.textContent = count;
});
```

**よくある間違い**：
- ❌ 開始ボタンを連打すると、複数のタイマーが動いてしまう
- ✅ 開始前に `clearInterval(intervalId)` を呼んで、既存のタイマーを止める

**バイブコーダー向けのヒント**：
「setInterval で1秒ごとにカウントアップ」と伝えるだけで、基本的なコードは生成できる！
「開始前に既存のタイマーを止める」と追加で伝えると、より完璧なコードになるよ！

👉 [完全なコード例を見る](03-02.html)

---

### 問題 3-3: Promise の基本

**学習ポイント**：
- Promise は「非同期処理の成功/失敗」を表現するオブジェクト
- `new Promise((resolve, reject) => {...})` で作成
- `resolve()` で成功、`reject()` で失敗を通知
- `.then()` で成功時の処理、`.catch()` で失敗時の処理

**解答のポイント**：

```javascript
button.addEventListener('click', () => {
  // Promise を作成
  const promise = new Promise((resolve, reject) => {
    console.log('処理を開始...');

    // 2秒後にランダムで成功/失敗
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve('成功しました！🎉');
      } else {
        reject('失敗しました😢');
      }
    }, 2000);
  });

  // Promise の結果を処理
  promise
    .then((message) => {
      // 成功時
      resultElement.textContent = message;
      resultElement.style.color = 'green';
    })
    .catch((error) => {
      // 失敗時
      resultElement.textContent = error;
      resultElement.style.color = 'red';
    });
});
```

**Promise の3つの状態**：
- `Pending`（保留中）：処理中
- `Fulfilled`（成功）：resolve が呼ばれた
- `Rejected`（失敗）：reject が呼ばれた

**バイブコーダー向けのヒント**：
AI への指示例：
```
「Promiseを作成して、2秒後にランダムで成功/失敗を決めてください。
成功時はresolveで「成功しました！🎉」、
失敗時はrejectで「失敗しました😢」を返してください。
.then()と.catch()で結果を画面に表示してください。」
```

👉 [完全なコード例を見る](03-03.html)

---

## 応用編

### 問題 3-4: Promise チェーンで順番に処理

**学習ポイント**：
- Promise チェーンを使うと、複数の非同期処理を順番に実行できる
- 各 `.then()` で次の Promise を返すことで、チェーンが続く
- エラーは `.catch()` 1つで全部キャッチできる（便利！）

**解答のポイント**：

```javascript
// 各ステップを Promise を返す関数として実装
function buyIngredients() {
  return new Promise((resolve) => {
    log('1. 材料を買う...');
    setTimeout(() => {
      log('✅ 材料を買ってきた！');
      resolve('トマト、チーズ、生地');
    }, 1000);
  });
}

function cutIngredients(ingredients) {
  return new Promise((resolve) => {
    log(`2. 材料を切る（${ingredients}）...`);
    setTimeout(() => {
      log('✅ 材料を切り終えた！');
      resolve('切った' + ingredients);
    }, 1000);
  });
}

// Promise チェーンで順番に実行
buyIngredients()
  .then((ingredients) => {
    return cutIngredients(ingredients); // 次の Promise を返す
  })
  .then((prepared) => {
    return cook(prepared);
  })
  .then((food) => {
    return serve(food);
  })
  .then((message) => {
    log('🎉 ' + message);
  })
  .catch((error) => {
    log('❌ エラー: ' + error);
  });
```

**Promise チェーンの構造**：
```
Promise 1
  ↓ .then()
Promise 2
  ↓ .then()
Promise 3
  ↓ .then()
完了
  ↓ .catch()
エラー処理
```

**よくある間違い**：
- ❌ `.then()` で Promise を返し忘れる → チェーンが途切れる
- ❌ 各 `.then()` で個別に `.catch()` を書く → 冗長
- ✅ 最後に `.catch()` 1つだけ書けば、すべてのエラーをキャッチできる

**バイブコーダー向けのヒント**：
「各ステップをPromiseを返す関数にして、.then()でチェーンしてください」と伝えると、
きれいな Promise チェーンを生成してくれるよ！

👉 [完全なコード例を見る](03-04.html)

---

### 問題 3-5: async/await への変換

**学習ポイント**：
- async/await は Promise をもっとシンプルに書ける**最新の書き方**
- `async` を付けた関数は、自動的に Promise を返す
- `await` で Promise の完了を待つ
- まるで同期処理みたいに読めるから、理解しやすい！

**解答のポイント**：

```javascript
// 【Promise チェーン】（従来の書き方）
function makePizzaWithPromise() {
  buyIngredients()
    .then((ingredients) => cutIngredients(ingredients))
    .then((prepared) => cook(prepared))
    .then((food) => serve(food))
    .then((message) => log('🎉 ' + message))
    .catch((error) => log('❌ ' + error));
}

// 【async/await】（新しい書き方）
async function makePizzaWithAsync() {
  try {
    const ingredients = await buyIngredients();
    const prepared = await cutIngredients(ingredients);
    const food = await cook(prepared);
    const message = await serve(food);
    log('🎉 ' + message);
  } catch (error) {
    log('❌ ' + error);
  }
}
```

**async/await のメリット**：
- ✅ 同期処理みたいに読める（理解しやすい）
- ✅ コードが短くて見やすい
- ✅ try-catch でエラーハンドリングできる（直感的）

**Promise チェーンと async/await の対応**：
```javascript
// Promise チェーン
.then((result) => {...})
.catch((error) => {...})

// async/await
try {
  const result = await promise;
  // 処理
} catch (error) {
  // エラー処理
}
```

**バイブコーダー向けのヒント**：
「async/await を使って書き換えてください」と伝えるだけで、
Promise チェーンを async/await に変換してくれる！
「try-catch でエラーハンドリングも追加して」と伝えると完璧！

👉 [完全なコード例を見る](03-05.html)

---

### 問題 3-6: エラーハンドリング

**学習ポイント**：
- 非同期処理は**必ずエラーハンドリング**をしよう
- `try-catch-finally` を使うと安全に処理できる
- `finally` は成功でも失敗でも**必ず実行される**（クリーンアップに最適）
- ローディング表示は `finally` で消すのがベストプラクティス

**解答のポイント**：

```javascript
async function fetchUserData() {
  // ローディング表示
  loadingElement.style.display = 'block';
  resultElement.textContent = '';

  try {
    // データ取得（失敗する可能性あり）
    const user = await getUserData();

    // 成功時の処理
    resultElement.textContent = `✅ ${user.name}さん（${user.age}歳）`;
    resultElement.style.color = 'green';

  } catch (error) {
    // 失敗時の処理
    resultElement.textContent = '❌ データの取得に失敗しました';
    resultElement.style.color = 'red';
    console.error('エラー詳細:', error);

  } finally {
    // 成功でも失敗でもローディングを消す
    loadingElement.style.display = 'none';
    console.log('処理が完了しました');
  }
}
```

**try-catch-finally の実行順序**：
```
try → 成功 → finally
try → 失敗 → catch → finally
```

**よくある間違い**：
- ❌ finally を使わず、try と catch で個別にローディングを消す
  → catch での処理を忘れると、ローディングが消えないまま！
- ✅ finally で必ず実行される処理を書く

**finally の使い道**：
- ローディング表示を消す
- リソースをクリーンアップする
- タイマーを止める
- 処理完了のログを出力

**バイブコーダー向けのヒント**：

AI への指示例：
```
「非同期でユーザーデータを取得する関数を作成してください：

1. 処理開始時にローディング表示を出す
2. 2秒後にランダムで成功/失敗を決定
3. 成功時：ユーザー情報（name: '太郎', age: 25）を表示
4. 失敗時：「データの取得に失敗しました」とエラー表示
5. finally でローディング表示を消す

async/await と try-catch-finally を使ってください。
finally は成功でも失敗でも実行されることを利用して、
ローディング表示を確実に消してください。」
```

**生成されたコードのチェックポイント**：
- [ ] async 関数になっている
- [ ] try-catch-finally の構造になっている
- [ ] finally でローディングを消している
- [ ] エラーをコンソールに出力している

👉 [完全なコード例を見る](03-06.html)

---

## チャレンジ

### 問題 3-7: 画像ローダー（Promise.all）

**学習ポイント**：
- `Promise.all()` は複数の Promise を**並行実行**できる超強力な機能！
- 順番に実行するより、圧倒的に速い
- すべての Promise が成功したら結果を配列で返す
- 1つでも失敗したら、catch に行く

**解答のポイント**：

1. **画像読み込みを Promise でラップ**
```javascript
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      console.log(`✅ ${url} 読み込み完了`);
      resolve(img);
    };

    img.onerror = () => {
      console.log(`❌ ${url} 読み込み失敗`);
      reject(new Error(`Failed to load ${url}`));
    };

    img.src = url;
  });
}
```

2. **Promise.all で並行実行**
```javascript
async function loadAllImages() {
  const urls = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
  ];

  const startTime = Date.now();

  try {
    // すべての画像を並行で読み込む
    const images = await Promise.all(urls.map(loadImage));

    // 読み込み時間を計算
    const loadTime = ((Date.now() - startTime) / 1000).toFixed(2);

    // 画像を表示
    images.forEach((img) => {
      imageContainer.appendChild(img);
    });

    resultElement.textContent = `✅ ${loadTime}秒で${images.length}枚の画像を読み込みました`;

  } catch (error) {
    resultElement.textContent = '❌ 画像の読み込みに失敗しました';
    console.error(error);
  }
}
```

**Promise.all のメリット**：

```
【順番に実行】
画像1（1秒） → 画像2（1秒） → 画像3（1秒） = 合計3秒

【Promise.all で並行実行】
画像1（1秒）
画像2（1秒） → 並行して実行
画像3（1秒）
合計1秒！（3倍速い！）
```

**Promise.all vs Promise.allSettled**：

```javascript
// Promise.all
// → 1つでも失敗したら catch に行く
// → すべて成功した時だけ結果を取得

// Promise.allSettled（個別の結果が欲しい時）
// → 成功/失敗に関わらず、すべての結果を取得
const results = await Promise.allSettled(promises);
results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('成功:', result.value);
  } else {
    console.log('失敗:', result.reason);
  }
});
```

**よくある間違い**：
- ❌ `await` を for ループで使って、順番に読み込んでしまう
  ```javascript
  // これは遅い！
  for (const url of urls) {
    const img = await loadImage(url); // 1枚ずつ読み込む
  }
  ```
- ✅ Promise.all で並行読み込み
  ```javascript
  // これは速い！
  const images = await Promise.all(urls.map(loadImage));
  ```

**バイブコーダー向けのヒント**：

AI への指示例：
```
「複数の画像を並行で読み込む画像ローダーを作成してください：

機能要件：
1. 画像URLの配列（3〜5枚）を用意
2. Promise.all で並行読み込み
3. 読み込み中はローディングスピナーを表示
4. 読み込み時間を計測（Date.now()）
5. 成功時：画像をグリッドレイアウトで表示
6. 成功時：「X秒でY枚の画像を読み込みました」と表示
7. 失敗時：「画像の読み込みに失敗しました」とエラー表示

実装のポイント：
- loadImage関数でPromiseをラップ（new Image()とonload/onerror）
- Promise.all(urls.map(loadImage))で並行実行
- async/await と try-catch-finally を使用
- CSS Grid で画像をグリッド表示
- ローディングスピナーは finally で非表示に」
```

**生成されたコードのチェックポイント**：
- [ ] loadImage 関数が Promise を返している
- [ ] Promise.all で並行実行している
- [ ] 読み込み時間を計測している
- [ ] try-catch-finally でエラーハンドリング
- [ ] ローディング表示が finally で消えている
- [ ] CSS Grid でグリッドレイアウトになっている

**チャレンジ機能の実装例**：

1. **進捗表示のリアルタイム更新**
```javascript
// Promise.allSettled で個別の結果を取得
const results = await Promise.allSettled(urls.map(loadImage));

let loadedCount = 0;
results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    loadedCount++;
    progressElement.textContent = `読み込み中... ${loadedCount} / ${urls.length}`;
  }
});
```

2. **フェードインアニメーション**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.image-grid img {
  animation: fadeIn 0.5s ease-out;
}
```

3. **エラー画像の代替表示**
```javascript
const results = await Promise.allSettled(urls.map(loadImage));

results.forEach((result) => {
  if (result.status === 'fulfilled') {
    imageContainer.appendChild(result.value);
  } else {
    // 代替画像を表示
    const placeholder = document.createElement('div');
    placeholder.className = 'error-placeholder';
    placeholder.textContent = '❌ 読み込み失敗';
    imageContainer.appendChild(placeholder);
  }
});
```

👉 [完全なコード例を見る](03-07.html)

---

## まとめ

お疲れさまでした！🎉

この演習を通じて、非同期処理の基礎をマスターできたね！

**学んだこと**：
- ✅ setTimeout / setInterval でタイマー処理
- ✅ Promise の作成と利用
- ✅ Promise チェーンで順番に処理
- ✅ async/await でシンプルに書く
- ✅ try-catch-finally でエラーハンドリング
- ✅ Promise.all で並行実行

**次のステップ**：

これらのテクニックを組み合わせれば、どんな複雑な非同期処理も実装できるよ！
次のレッスンでは、実際の API からデータを取得する方法を学んでいこう！

**バイブコーダーへのメッセージ**：

AI にコードを生成してもらう時、これらのテクニックの名前を知っていれば、
より的確な指示が出せるようになったはず！

「async/await を使って」
「try-catch-finally でエラーハンドリングして」
「Promise.all で並行実行して」

こんな風に具体的に伝えられるようになれば、AI との協働がもっと楽しくなる！

**重要なポイント**：

1. **async/await を積極的に使おう**（Promise チェーンより読みやすい）
2. **必ず try-catch でエラーハンドリング**（エラーで止まらないように）
3. **並列実行できる処理は Promise.all**（パフォーマンス向上）
4. **finally でクリーンアップ**（ローディング表示を確実に消す）

**Let's vibe and code!** 🚀
