# Lesson 3: 非同期処理の基礎 ⏱️

**学習目標**：JavaScriptの非同期処理の仕組みを理解し、setTimeout、Promise、async/awaitを使いこなして、時間のかかる処理を効率的に扱えるようになる

---

## なぜ非同期処理を学ぶの?

プログラミングを始めたばかりの頃は、コードが**上から順番に実行される**ことしか知らないよね。これを**同期処理**っていうんだ。

でも、実際のWebアプリケーションでは、こんなことがよくあるよ：

- 🌐 サーバーからデータを取得する（数秒かかるかも）
- 📷 画像を読み込む（大きいファイルだと時間がかかる）
- ⏰ 一定時間後に何かを実行する（タイマー機能）
- 🎬 アニメーションを実行する（複数の処理を順番に）

**もしすべてが同期処理だったら、データの取得が終わるまで画面が固まっちゃう！** これじゃユーザーは何もできないよね😢

そこで登場するのが**非同期処理（Asynchronous Programming）**！

**非同期処理を使うと、時間のかかる処理を「待っている間」に、他のことができるんだ！** まるでレストランで料理を注文して、できあがるまでスマホをいじれるみたいな感じ！🍕📱

### 学ぶこと

- 同期処理と非同期処理の違い
- setTimeout と setInterval で時間を扱う
- コールバック関数とコールバック地獄
- Promise でスマートに非同期処理を書く
- async/await で非同期処理を同期処理っぽく書く
- エラーハンドリングの方法

---

## 同期処理 vs 非同期処理

まずは、**同期処理**と**非同期処理**の違いを理解しよう！

### 同期処理：順番に待つ

**同期処理は、1つの処理が終わるまで次の処理に進まない**よ。

**レストランの例え話**：

```text
あなた: 「ハンバーガーください！」
店員: 「かしこまりました！」
（料理が完成するまでじっと待つ...5分）
店員: 「お待たせしました！」
あなた: （やっとドリンクを注文できる）「コーラもください」
（またじっと待つ...2分）
店員: 「どうぞ！」
```

**コード例**：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>同期処理の例</title>
  </head>
  <body>
    <h1>同期処理</h1>
    <button type="button">クリック</button>

    <script>
      console.log("1. 処理開始");

      // 重い処理をシミュレート（実際にはやらない！）
      function heavyTask() {
        const start = Date.now();
        // 3秒間ループ（画面が固まる！）
        while (Date.now() - start < 3000) {
          // 何もしない
        }
        console.log("2. 重い処理が終わった");
      }

      heavyTask();

      console.log("3. 処理終了");

      // 結果：
      // 1. 処理開始
      // （3秒間画面が固まる😱）
      // 2. 重い処理が終わった
      // 3. 処理終了
    </script>
  </body>
</html>
```

**問題点**：重い処理をしている間、画面が固まって何もできない！

---

### 非同期処理：待たずに次へ進む

**非同期処理は、時間のかかる処理を「後回し」にして、すぐ次の処理に進む**よ！

**レストランの例え話**：

```text
あなた: 「ハンバーガーとコーラください！」
店員: 「かしこまりました！番号札どうぞ」
あなた: （席に座ってスマホをいじる📱）
店員: （5分後）「番号○番のお客様、お待たせしました！」
```

**コード例**：

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>非同期処理の例</title>
  </head>
  <body>
    <h1>非同期処理</h1>
    <button type="button">クリック</button>

    <script>
      console.log("1. 処理開始");

      // 非同期処理：3秒後に実行
      setTimeout(function () {
        console.log("2. 時間のかかる処理が終わった");
      }, 3000);

      console.log("3. 処理終了");

      // 結果：
      // 1. 処理開始
      // 3. 処理終了
      // （3秒後）
      // 2. 時間のかかる処理が終わった
    </script>
  </body>
</html>
```

**ポイント**：3秒待たずに「3. 処理終了」が先に実行される！画面も固まらない！✨

---

### 視覚的に理解しよう

```text
【同期処理】
タスクA → タスクB → タスクC
  ↓        ↓        ↓
 待つ     待つ     待つ
（合計: 9秒）

【非同期処理】
タスクA ↘
タスクB  → 並行して実行
タスクC ↗
（合計: 3秒）
```

**非同期処理を使うと、複数の処理を効率的に実行できる！** 🚀

---

## setTimeout：指定時間後に実行

**setTimeout** は、指定した時間（ミリ秒）後に関数を実行する非同期処理の基本だよ！

### 基本的な使い方

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>setTimeout の基本</title>
  </head>
  <body>
    <h1>setTimeout</h1>

    <script>
      console.log("今から3秒後にメッセージが表示されるよ");

      // 3秒後（3000ミリ秒後）に実行
      setTimeout(function () {
        console.log("3秒経ちました！");
      }, 3000);

      console.log("このメッセージは先に表示されるよ");
    </script>
  </body>
</html>
```

**実行結果**：

```text
今から3秒後にメッセージが表示されるよ
このメッセージは先に表示されるよ
（3秒後）
3秒経ちました！
```

---

### 実践例：カウントダウンタイマー

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>カウントダウンタイマー</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
      }
      #countdown {
        font-size: 72px;
        color: #ff6b6b;
        font-weight: bold;
        margin: 20px 0;
      }
      button {
        font-size: 20px;
        padding: 10px 30px;
        cursor: pointer;
        background: #4ecdc4;
        color: white;
        border: none;
        border-radius: 5px;
      }
      button:hover {
        background: #45b7aa;
      }
    </style>
  </head>
  <body>
    <h1>カウントダウンタイマー</h1>
    <div id="countdown">5</div>
    <button type="button" id="startButton">スタート</button>

    <script>
      const countdownElement = document.querySelector("#countdown");
      const startButton = document.querySelector("#startButton");

      startButton.addEventListener("click", function () {
        let count = 5;
        countdownElement.textContent = count;

        // カウントダウン関数
        function countdown() {
          if (count > 0) {
            count--;
            countdownElement.textContent = count;
            // 1秒後に再度実行
            setTimeout(countdown, 1000);
          } else {
            countdownElement.textContent = "🎉";
            alert("終了！");
          }
        }

        // 1秒後に開始
        setTimeout(countdown, 1000);
      });
    </script>
  </body>
</html>
```

**動かしてみよう！5秒からカウントダウンするよ！** ⏰

---

### clearTimeout：タイマーをキャンセル

setTimeout は**キャンセル**もできるよ！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>setTimeout のキャンセル</title>
  </head>
  <body>
    <h1>タイマーをキャンセル</h1>
    <button type="button" id="startButton">3秒後にアラート</button>
    <button type="button" id="cancelButton">キャンセル</button>

    <script>
      const startButton = document.querySelector("#startButton");
      const cancelButton = document.querySelector("#cancelButton");

      let timerId; // タイマーIDを保存

      startButton.addEventListener("click", function () {
        console.log("3秒後にアラートが出るよ");

        // setTimeout は「タイマーID」を返す
        timerId = setTimeout(function () {
          alert("時間になりました！");
        }, 3000);
      });

      cancelButton.addEventListener("click", function () {
        // clearTimeout でタイマーをキャンセル
        clearTimeout(timerId);
        console.log("タイマーをキャンセルしました");
      });
    </script>
  </body>
</html>
```

**ポイント**：setTimeout は**タイマーID**を返すから、それを使ってキャンセルできる！

---

## setInterval：定期的に実行

**setInterval** は、指定した間隔で関数を**繰り返し実行**するよ！

### 基本的な使い方

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>setInterval の基本</title>
  </head>
  <body>
    <h1>setInterval</h1>
    <div id="time">0</div>
    <button type="button" id="startButton">開始</button>
    <button type="button" id="stopButton">停止</button>

    <script>
      const timeElement = document.querySelector("#time");
      const startButton = document.querySelector("#startButton");
      const stopButton = document.querySelector("#stopButton");

      let count = 0;
      let intervalId;

      startButton.addEventListener("click", function () {
        // 1秒ごとに実行
        intervalId = setInterval(function () {
          count++;
          timeElement.textContent = count;
          console.log("経過時間:", count, "秒");
        }, 1000);
      });

      stopButton.addEventListener("click", function () {
        // clearInterval でストップ
        clearInterval(intervalId);
        console.log("タイマーを停止しました");
      });
    </script>
  </body>
</html>
```

**setIntervalとsetTimeoutの違い**：

- `setTimeout`：**1回だけ**実行
- `setInterval`：**繰り返し**実行

---

### 実践例：リアルタイム時計

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>リアルタイム時計</title>
    <style>
      body {
        font-family: "Courier New", monospace;
        text-align: center;
        padding: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      #clock {
        font-size: 72px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      #date {
        font-size: 24px;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <h1>⏰ リアルタイム時計</h1>
    <div id="clock">00:00:00</div>
    <div id="date">0000年00月00日</div>

    <script>
      const clockElement = document.querySelector("#clock");
      const dateElement = document.querySelector("#date");

      function updateClock() {
        const now = new Date();

        // 時刻を取得
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        // 日付を取得
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        // 表示を更新
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = `${year}年${month}月${day}日`;
      }

      // 最初に1回実行
      updateClock();

      // 1秒ごとに更新
      setInterval(updateClock, 1000);
    </script>
  </body>
</html>
```

**美しいリアルタイム時計ができた！** 🕐✨

---

## コールバック関数：処理が終わったら実行

**コールバック関数**は、非同期処理が終わった時に実行される関数だよ！

### コールバックの基本

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>コールバック関数</title>
  </head>
  <body>
    <h1>コールバック関数</h1>

    <script>
      // 料理を作る関数（非同期）
      function cookFood(foodName, callback) {
        console.log(`${foodName}を作り始めます...`);

        // 3秒後に完成
        setTimeout(function () {
          console.log(`${foodName}ができました！`);
          // 完成したらコールバック関数を実行
          callback(foodName);
        }, 3000);
      }

      // 料理ができた時に実行される関数（コールバック）
      function serveFood(foodName) {
        console.log(`${foodName}を提供します！🍕`);
      }

      // 使ってみる
      cookFood("ピザ", serveFood);

      // 実行結果：
      // ピザを作り始めます...
      // （3秒後）
      // ピザができました！
      // ピザを提供します！🍕
    </script>
  </body>
</html>
```

**ポイント**：`serveFood` は、料理が完成してから実行される！

---

### コールバック地獄（Callback Hell）

複数の非同期処理を順番に実行すると、**コールバックがネストして読みにくくなる**んだ...😰

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>コールバック地獄</title>
  </head>
  <body>
    <h1>コールバック地獄</h1>

    <script>
      // ステップ1: 材料を買う
      function buyIngredients(callback) {
        console.log("1. 材料を買いに行く...");
        setTimeout(function () {
          console.log("材料を買ってきた！");
          callback();
        }, 1000);
      }

      // ステップ2: 材料を切る
      function cutIngredients(callback) {
        console.log("2. 材料を切る...");
        setTimeout(function () {
          console.log("材料を切り終えた！");
          callback();
        }, 1000);
      }

      // ステップ3: 料理する
      function cook(callback) {
        console.log("3. 料理する...");
        setTimeout(function () {
          console.log("料理ができた！");
          callback();
        }, 1000);
      }

      // ステップ4: 盛り付ける
      function serve(callback) {
        console.log("4. 盛り付ける...");
        setTimeout(function () {
          console.log("完成！🍽️");
          callback();
        }, 1000);
      }

      // コールバック地獄！ネストが深くて読みづらい！😱
      buyIngredients(function () {
        cutIngredients(function () {
          cook(function () {
            serve(function () {
              console.log("いただきます！");
            });
          });
        });
      });
    </script>
  </body>
</html>
```

**問題点**：

- ✗ ネストが深くて読みにくい
- ✗ エラーハンドリングが難しい
- ✗ コードの修正が大変

**この問題を解決するのが Promise だよ！** 🎉

---

## Promise：スマートな非同期処理

**Promise**は、非同期処理をもっとスマートに書ける仕組みだよ！

### Promiseの3つの状態

Promiseには3つの状態があるよ：

```text
1. Pending（保留中）: 処理が進行中
2. Fulfilled（成功）: 処理が成功して完了
3. Rejected（失敗）: 処理が失敗
```

**レストランの例え話**：

```text
Pending（保留中）: 「料理を作っています...」
    ↓
Fulfilled（成功）: 「料理ができました！🍕」
または
Rejected（失敗）: 「材料切れでした😢」
```

---

### Promiseの基本的な作り方

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Promise の基本</title>
  </head>
  <body>
    <h1>Promise の基本</h1>

    <script>
      // Promiseを作成する
      const promise = new Promise(function (resolve, reject) {
        console.log("処理を開始します...");

        // 2秒後に成功
        setTimeout(function () {
          const success = true; // 成功する場合

          if (success) {
            // 成功時：resolve を呼ぶ
            resolve("処理が成功しました！");
          } else {
            // 失敗時：reject を呼ぶ
            reject("処理が失敗しました");
          }
        }, 2000);
      });

      console.log("Promiseの状態:", promise); // → Promise { <pending> }

      // Promiseの結果を受け取る
      promise
        .then(function (result) {
          // 成功時に実行される
          console.log("成功:", result);
        })
        .catch(function (error) {
          // 失敗時に実行される
          console.log("失敗:", error);
        });
    </script>
  </body>
</html>
```

**ポイント**：

- `resolve()`：成功を通知
- `reject()`：失敗を通知
- `.then()`：成功時の処理
- `.catch()`：失敗時の処理

---

### Promiseで料理を作る

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Promise で料理</title>
  </head>
  <body>
    <h1>Promise で料理</h1>

    <script>
      // 料理を作る関数（Promiseを返す）
      function cookFood(foodName, time) {
        return new Promise(function (resolve, reject) {
          console.log(`${foodName}を作り始めます...`);

          setTimeout(function () {
            // ランダムで成功/失敗を決める
            const success = Math.random() > 0.3;

            if (success) {
              resolve(`${foodName}ができました！🍕`);
            } else {
              reject(`${foodName}を作るのに失敗しました😢`);
            }
          }, time);
        });
      }

      // Promiseを使う
      cookFood("ピザ", 2000)
        .then(function (result) {
          // 成功時
          console.log("✅", result);
        })
        .catch(function (error) {
          // 失敗時
          console.log("❌", error);
        });
    </script>
  </body>
</html>
```

**何度か実行して、成功と失敗を確認してみよう！** 🎲

---

### Promiseチェーン：順番に処理を実行

**Promiseチェーン**を使うと、複数の非同期処理を順番に実行できるよ！コールバック地獄から解放される！🎉

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Promise チェーン</title>
  </head>
  <body>
    <h1>Promise チェーン</h1>

    <script>
      // ステップ1: 材料を買う
      function buyIngredients() {
        return new Promise(function (resolve) {
          console.log("1. 材料を買いに行く...");
          setTimeout(function () {
            console.log("✅ 材料を買ってきた！");
            resolve("トマト、チーズ、生地");
          }, 1000);
        });
      }

      // ステップ2: 材料を切る
      function cutIngredients(ingredients) {
        return new Promise(function (resolve) {
          console.log("2. 材料を切る...");
          console.log("材料:", ingredients);
          setTimeout(function () {
            console.log("✅ 材料を切り終えた！");
            resolve("切った" + ingredients);
          }, 1000);
        });
      }

      // ステップ3: 料理する
      function cook(preparedIngredients) {
        return new Promise(function (resolve) {
          console.log("3. 料理する...");
          console.log("準備された材料:", preparedIngredients);
          setTimeout(function () {
            console.log("✅ 料理ができた！");
            resolve("美味しいピザ🍕");
          }, 1000);
        });
      }

      // ステップ4: 盛り付ける
      function serve(food) {
        return new Promise(function (resolve) {
          console.log("4. 盛り付ける...");
          setTimeout(function () {
            console.log("✅ 完成！🍽️");
            resolve(`${food}を提供します`);
          }, 1000);
        });
      }

      // Promiseチェーン：読みやすい！✨
      buyIngredients()
        .then(function (ingredients) {
          return cutIngredients(ingredients);
        })
        .then(function (preparedIngredients) {
          return cook(preparedIngredients);
        })
        .then(function (food) {
          return serve(food);
        })
        .then(function (message) {
          console.log("🎉", message);
          console.log("いただきます！");
        })
        .catch(function (error) {
          console.log("❌ エラーが発生:", error);
        });

      // さっきのコールバック地獄より、ずっと読みやすい！
    </script>
  </body>
</html>
```

**Promiseチェーンのメリット**：

- ✅ ネストが浅くて読みやすい
- ✅ エラーハンドリングが簡単（.catch 1つでOK）
- ✅ 処理の流れが追いやすい

---

### finally：成功でも失敗でも実行

`.finally()` は、成功でも失敗でも**必ず実行される**処理を書けるよ！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>finally の使い方</title>
  </head>
  <body>
    <h1>finally</h1>
    <button id="fetchButton">データを取得</button>
    <div id="loading" style="display: none;">読み込み中...</div>
    <div id="result"></div>

    <script>
      const fetchButton = document.querySelector("#fetchButton");
      const loadingElement = document.querySelector("#loading");
      const resultElement = document.querySelector("#result");

      function fetchData() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            // ランダムで成功/失敗
            const success = Math.random() > 0.5;

            if (success) {
              resolve("データ取得成功！🎉");
            } else {
              reject("データ取得失敗😢");
            }
          }, 2000);
        });
      }

      fetchButton.addEventListener("click", function () {
        // ローディング表示
        loadingElement.style.display = "block";
        resultElement.textContent = "";

        fetchData()
          .then(function (data) {
            resultElement.textContent = "✅ " + data;
            resultElement.style.color = "green";
          })
          .catch(function (error) {
            resultElement.textContent = "❌ " + error;
            resultElement.style.color = "red";
          })
          .finally(function () {
            // 成功でも失敗でもローディングを非表示
            loadingElement.style.display = "none";
            console.log("処理が完了しました（成功でも失敗でも実行）");
          });
      });
    </script>
  </body>
</html>
```

**用途**：ローディング表示を消す、リソースをクリーンアップするなど！

---

## async/await：もっとシンプルに書く

**async/await**は、Promiseをさらにシンプルに書ける**最新の書き方**だよ！

### asyncとawaitの基本

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>async/await の基本</title>
  </head>
  <body>
    <h1>async/await</h1>

    <script>
      // Promiseを返す関数
      function wait(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }

      // 【古い書き方】Promise チェーン
      function oldWay() {
        console.log("=== Promise チェーン ===");
        console.log("開始");

        wait(1000)
          .then(function () {
            console.log("1秒経過");
            return wait(1000);
          })
          .then(function () {
            console.log("2秒経過");
            return wait(1000);
          })
          .then(function () {
            console.log("3秒経過");
          });
      }

      // 【新しい書き方】async/await
      async function newWay() {
        console.log("=== async/await ===");
        console.log("開始");

        await wait(1000);
        console.log("1秒経過");

        await wait(1000);
        console.log("2秒経過");

        await wait(1000);
        console.log("3秒経過");
      }

      // 実行してみよう
      // oldWay();
      newWay();

      // async/awaitの方が、同期処理みたいに読める！
    </script>
  </body>
</html>
```

**ポイント**：

- `async`：関数の前に付ける → 「この関数は非同期だよ」という印
- `await`：Promiseの完了を待つ → 「ここで待つよ」という印

**async/await は、非同期処理を同期処理みたいに書ける！** 🎯

---

### async関数は必ずPromiseを返す

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>async 関数の返り値</title>
  </head>
  <body>
    <h1>async 関数の返り値</h1>

    <script>
      // async 関数は、自動的に Promise を返す
      async function greet() {
        return "こんにちは！";
      }

      console.log(greet()); // → Promise { 'こんにちは！' }

      // 結果を受け取るには await か .then を使う
      greet().then(function (message) {
        console.log(message); // → こんにちは！
      });

      // または別の async 関数内で await
      async function main() {
        const message = await greet();
        console.log(message); // → こんにちは！
      }

      main();
    </script>
  </body>
</html>
```

---

### async/awaitで料理を作る

さっきの料理の例を、async/await で書き直してみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>async/await で料理</title>
  </head>
  <body>
    <h1>async/await で料理</h1>
    <button id="cookButton">料理を作る</button>
    <div id="log"></div>

    <script>
      const cookButton = document.querySelector("#cookButton");
      const logElement = document.querySelector("#log");

      function log(message) {
        const p = document.createElement("p");
        p.textContent = message;
        logElement.appendChild(p);
        console.log(message);
      }

      // ステップ1: 材料を買う
      function buyIngredients() {
        return new Promise(function (resolve) {
          log("1. 材料を買いに行く...");
          setTimeout(function () {
            log("✅ 材料を買ってきた！");
            resolve("トマト、チーズ、生地");
          }, 1000);
        });
      }

      // ステップ2: 材料を切る
      function cutIngredients(ingredients) {
        return new Promise(function (resolve) {
          log(`2. 材料を切る（${ingredients}）...`);
          setTimeout(function () {
            log("✅ 材料を切り終えた！");
            resolve("切った" + ingredients);
          }, 1000);
        });
      }

      // ステップ3: 料理する
      function cook(preparedIngredients) {
        return new Promise(function (resolve) {
          log(`3. 料理する（${preparedIngredients}）...`);
          setTimeout(function () {
            log("✅ 料理ができた！");
            resolve("美味しいピザ🍕");
          }, 1000);
        });
      }

      // ステップ4: 盛り付ける
      function serve(food) {
        return new Promise(function (resolve) {
          log(`4. 盛り付ける（${food}）...`);
          setTimeout(function () {
            log("✅ 完成！🍽️");
            resolve(`${food}を提供します`);
          }, 1000);
        });
      }

      // async/await でスッキリ書ける！
      async function makePizza() {
        try {
          logElement.innerHTML = "";
          log("料理スタート！");

          const ingredients = await buyIngredients();
          const preparedIngredients = await cutIngredients(ingredients);
          const food = await cook(preparedIngredients);
          const message = await serve(food);

          log("🎉 " + message);
          log("いただきます！");
        } catch (error) {
          log("❌ エラー: " + error);
        }
      }

      cookButton.addEventListener("click", makePizza);

      // まるで同期処理みたいに読める！でも非同期処理！
    </script>
  </body>
</html>
```

**async/await のメリット**：

- ✅ 同期処理みたいに読める（理解しやすい）
- ✅ try-catch でエラーハンドリングができる
- ✅ コードが短くてスッキリ

---

## try-catch：エラーハンドリング

async/await では、**try-catch**を使ってエラーを捕まえるよ！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>try-catch でエラーハンドリング</title>
  </head>
  <body>
    <h1>try-catch</h1>
    <button id="fetchButton">データ取得（失敗する可能性あり）</button>
    <div id="result"></div>

    <script>
      const fetchButton = document.querySelector("#fetchButton");
      const resultElement = document.querySelector("#result");

      // データを取得する関数（失敗する可能性あり）
      function fetchData() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            const success = Math.random() > 0.5;

            if (success) {
              resolve({ name: "太郎", age: 25 });
            } else {
              reject("ネットワークエラーが発生しました");
            }
          }, 1000);
        });
      }

      // async/await + try-catch
      async function getData() {
        resultElement.textContent = "読み込み中...";

        try {
          // awaitで待つ（失敗する可能性あり）
          const data = await fetchData();

          // 成功時の処理
          resultElement.textContent = `✅ 成功: ${data.name}さん（${data.age}歳）`;
          resultElement.style.color = "green";
        } catch (error) {
          // 失敗時の処理（reject されたらここに来る）
          resultElement.textContent = `❌ 失敗: ${error}`;
          resultElement.style.color = "red";
        } finally {
          // 成功でも失敗でも実行
          console.log("処理完了");
        }
      }

      fetchButton.addEventListener("click", getData);
    </script>
  </body>
</html>
```

**try-catch の構造**：

```javascript
try {
  // 実行したいコード（エラーが起こるかも）
} catch (error) {
  // エラーが起きた時の処理
} finally {
  // 成功でも失敗でも実行される処理
}
```

---

## 実践例：交通信号シミュレーター

複数の非同期処理を組み合わせて、交通信号を作ってみよう！

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>交通信号シミュレーター</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
      }
      #trafficLight {
        width: 450px;
        height: 150px;
        background: #ddd;
        margin: 30px auto;
        border-radius: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
      .light {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #777;
        transition: all 0.3s;
      }
      .light.on {
        box-shadow: 0 0 30px currentColor;
      }
      #green.on {
        background: #44ff44;
        color: #44ff44;
      }
      #yellow.on {
        background: #ffff44;
        color: #ffff44;
      }
      #red.on {
        background: #ff4444;
        color: #ff4444;
      }
      button {
        font-size: 18px;
        padding: 10px 30px;
        cursor: pointer;
        background: #4ecdc4;
        color: white;
        border: none;
        border-radius: 5px;
        margin: 5px;
      }
      button:hover {
        background: #45b7aa;
      }
      #status {
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0;
        height: 30px;
      }
    </style>
  </head>
  <body>
    <h1>🚦 交通信号シミュレーター</h1>
    <div id="status"></div>

    <div id="trafficLight">
      <div class="light" id="green"></div>
      <div class="light" id="yellow"></div>
      <div class="light" id="red"></div>
    </div>

    <button id="startButton">信号を動かす</button>
    <button id="stopButton">停止</button>

    <script>
      const greenLight = document.querySelector("#green");
      const yellowLight = document.querySelector("#yellow");
      const redLight = document.querySelector("#red");
      const statusElement = document.querySelector("#status");
      const startButton = document.querySelector("#startButton");
      const stopButton = document.querySelector("#stopButton");

      let isRunning = false;

      // すべての信号を消す
      function turnOffAll() {
        greenLight.classList.remove("on");
        yellowLight.classList.remove("on");
        redLight.classList.remove("on");
      }

      // 指定時間待つ
      function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      // 青信号
      async function showGreen() {
        turnOffAll();
        greenLight.classList.add("on");
        statusElement.textContent = "🟢 進め";
        statusElement.style.color = "#44ff44";
        await wait(3000); // 3秒
      }

      // 黄信号
      async function showYellow() {
        turnOffAll();
        yellowLight.classList.add("on");
        statusElement.textContent = "🟡 注意";
        statusElement.style.color = "#ffaa00";
        await wait(2000); // 2秒
      }

      // 赤信号
      async function showRed() {
        turnOffAll();
        redLight.classList.add("on");
        statusElement.textContent = "🔴 止まれ";
        statusElement.style.color = "#ff4444";
        await wait(3000); // 3秒
      }

      // 信号サイクル（赤 → 青 → 黄 → 赤 → ...）
      async function runTrafficLight() {
        while (isRunning) {
          await showGreen(); // 青（3秒）
          if (!isRunning) break;

          await showYellow(); // 黄（2秒）
          if (!isRunning) break;

          await showRed(); // 赤（3秒）
          if (!isRunning) break;
        }
      }

      // 開始ボタン
      startButton.addEventListener("click", function () {
        if (!isRunning) {
          isRunning = true;
          runTrafficLight();
          console.log("信号を開始しました");
        }
      });

      // 停止ボタン
      stopButton.addEventListener("click", function () {
        isRunning = false;
        turnOffAll();
        statusElement.textContent = "";
        console.log("信号を停止しました");
      });
    </script>
  </body>
</html>
```

**動かしてみよう！リアルな交通信号ができた！** 🚦✨

---

## 🤖 バイブコーディング実践

### AI への指示例

#### ⭕ 良い指示の例

```text
「画像を非同期で読み込むローダーを作成してください：

1. 「画像を読み込む」ボタンをクリックすると、複数の画像をPromise.allで並行読み込み
2. 読み込み中は「Loading...」と進捗率を表示
3. すべての画像が読み込まれたら、グリッドレイアウトで表示
4. エラーが発生した場合は、エラーメッセージを表示
5. async/await を使った実装
6. 読み込み完了後に「成功: X枚の画像を読み込みました」と表示

HTML、CSS、JavaScriptをすべて含めてください。」
```

**良い点**：

- 具体的な機能を列挙
- async/await の使用を明示
- エラーハンドリングを指示
- UIの詳細も指定

---

#### ❌ 曖昧な指示の例

```text
「非同期で何か作って」
```

**問題点**：

- 何を作るか不明
- どの非同期処理を使うか不明
- UIが不明確
- エラーハンドリングの指示なし

---

### 生成されたコードの読み方

AI が非同期処理のコードを生成したら、以下をチェックしよう！

#### ✅ チェックリスト

1. **async/await を使っているか？（推奨）**

   ```javascript
   // ✅ Good: async/await（読みやすい）
   async function fetchData() {
     try {
       const data = await getData();
       console.log(data);
     } catch (error) {
       console.error(error);
     }
   }

   // ⚠️ OK だけど読みにくい: Promise チェーン
   function fetchData() {
     getData()
       .then((data) => console.log(data))
       .catch((error) => console.error(error));
   }

   // ❌ Bad: コールバック地獄
   getData(function (data) {
     processData(data, function (processed) {
       saveData(processed, function (result) {
         console.log(result);
       });
     });
   });
   ```

2. **エラーハンドリングをしているか？**

   ```javascript
   // ✅ Good: try-catch でエラーハンドリング
   async function fetchData() {
     try {
       const data = await getData();
       return data;
     } catch (error) {
       console.error("エラー:", error);
       return null;
     }
   }

   // ❌ Bad: エラーハンドリングなし
   async function fetchData() {
     const data = await getData(); // エラーが起きたら止まる！
     return data;
   }
   ```

3. **並列実行できる処理は Promise.all を使っているか？**

   ```javascript
   // ✅ Good: Promise.all で並列実行（速い！）
   async function loadMultipleImages() {
     const urls = ["img1.jpg", "img2.jpg", "img3.jpg"];
     const promises = urls.map((url) => loadImage(url));
     const images = await Promise.all(promises);
     // すべての画像を同時に読み込む（速い）
   }

   // ❌ Bad: 順番に実行（遅い）
   async function loadMultipleImages() {
     const image1 = await loadImage("img1.jpg");
     const image2 = await loadImage("img2.jpg");
     const image3 = await loadImage("img3.jpg");
     // 1枚ずつ読み込む（遅い）
   }
   ```

4. **finally でクリーンアップしているか？**

   ```javascript
   // ✅ Good: finally でローディング表示を消す
   async function fetchData() {
     showLoading();
     try {
       const data = await getData();
       displayData(data);
     } catch (error) {
       showError(error);
     } finally {
       hideLoading(); // 必ず実行される
     }
   }

   // ❌ Bad: 各分岐で個別に消す（漏れる可能性）
   async function fetchData() {
     showLoading();
     try {
       const data = await getData();
       displayData(data);
       hideLoading();
     } catch (error) {
       showError(error);
       hideLoading(); // 書き忘れる可能性
     }
   }
   ```

5. **await を付け忘れていないか？**

   ```javascript
   // ✅ Good: await を付ける
   async function processData() {
     const data = await fetchData();
     console.log(data); // データが取得できる
   }

   // ❌ Bad: await を付け忘れる
   async function processData() {
     const data = fetchData(); // Promise オブジェクトになる
     console.log(data); // → Promise { <pending> }
   }
   ```

6. **無限ループになっていないか？**

   ```javascript
   // ✅ Good: 停止条件がある
   async function repeatTask() {
     let count = 0;
     while (count < 10) {
       await doTask();
       count++;
     }
   }

   // ❌ Bad: 無限ループ
   async function repeatTask() {
     while (true) {
       await doTask(); // 永遠に続く
     }
   }
   ```

---

### よくある問題と修正方法

#### 問題 1：await を付け忘れて Promise が返る

**症状**：データが取得できず、`Promise { <pending> }` と表示される

**原因**：async 関数を呼び出す時に `await` を付け忘れている

**修正方法**：

```javascript
// ❌ 修正前：await を付け忘れ
async function getData() {
  const result = fetchData(); // Promise が返る
  console.log(result); // → Promise { <pending> }
  return result;
}

// ✅ 修正後：await を付ける
async function getData() {
  const result = await fetchData(); // データが返る
  console.log(result); // → 実際のデータ
  return result;
}
```

---

#### 問題 2：エラーハンドリングをしていなくて止まる

**症状**：エラーが発生すると、処理が止まって何も表示されない

**原因**：try-catch でエラーを捕まえていない

**修正方法**：

```javascript
// ❌ 修正前：エラーハンドリングなし
async function fetchData() {
  const data = await getData(); // エラーが起きたら止まる
  displayData(data);
}

// ✅ 修正後：try-catch でエラーハンドリング
async function fetchData() {
  try {
    const data = await getData();
    displayData(data);
  } catch (error) {
    console.error("エラーが発生:", error);
    showErrorMessage("データの取得に失敗しました");
  }
}
```

---

#### 問題 3：並列実行できるのに順番に実行している

**症状**：複数のデータ取得に時間がかかりすぎる

**原因**：await を連続で使っていて、順番に実行している

**修正方法**：

```javascript
// ❌ 修正前：順番に実行（遅い）
async function loadAllData() {
  const data1 = await fetchData1(); // 1秒
  const data2 = await fetchData2(); // 1秒
  const data3 = await fetchData3(); // 1秒
  // 合計3秒かかる
}

// ✅ 修正後：並列実行（速い！）
async function loadAllData() {
  const [data1, data2, data3] = await Promise.all([
    fetchData1(),
    fetchData2(),
    fetchData3(),
  ]);
  // 合計1秒（同時に実行）
}
```

---

#### 問題 4：ローディング表示が消えない

**症状**：エラーが発生すると、ローディング表示が消えない

**原因**：finally を使っていない

**修正方法**：

```javascript
// ❌ 修正前：エラー時にローディングが消えない
async function fetchData() {
  showLoading();
  try {
    const data = await getData();
    hideLoading(); // 成功時しか実行されない
    displayData(data);
  } catch (error) {
    showError(error);
    // hideLoading() を書き忘れた！
  }
}

// ✅ 修正後：finally でローディングを消す
async function fetchData() {
  showLoading();
  try {
    const data = await getData();
    displayData(data);
  } catch (error) {
    showError(error);
  } finally {
    hideLoading(); // 必ず実行される
  }
}
```

---

#### 問題 5：async 関数の外で await を使っている

**症状**：`SyntaxError: await is only valid in async functions` というエラー

**原因**：async 関数の外で await を使っている

**修正方法**：

```javascript
// ❌ 修正前：async 関数の外で await
function getData() {
  const data = await fetchData(); // エラー！
  return data;
}

// ✅ 修正後：関数を async にする
async function getData() {
  const data = await fetchData(); // OK
  return data;
}

// または、トップレベルで使う場合は即時実行関数
(async function () {
  const data = await fetchData();
  console.log(data);
})();
```

---

### カスタマイズポイント

AI が生成した非同期処理コードを、自分で調整する時のポイント：

#### 1. タイムアウト時間を調整

```javascript
// 待機時間を変更
await wait(1000); // 1秒
await wait(3000); // 3秒
await wait(500); // 0.5秒
```

---

#### 2. Promise.all で並列実行の数を調整

```javascript
// 3つの処理を並列実行
const [result1, result2, result3] = await Promise.all([
  fetchData1(),
  fetchData2(),
  fetchData3(),
]);

// 10個の処理を並列実行
const urls = Array.from({ length: 10 }, (_, i) => `img${i}.jpg`);
const images = await Promise.all(urls.map((url) => loadImage(url)));
```

---

#### 3. エラーメッセージをカスタマイズ

```javascript
try {
  const data = await fetchData();
} catch (error) {
  // エラーの種類によってメッセージを変える
  if (error.message.includes("404")) {
    showError("データが見つかりませんでした");
  } else if (error.message.includes("timeout")) {
    showError("タイムアウトしました。もう一度試してください");
  } else {
    showError("予期しないエラーが発生しました");
  }
}
```

---

#### 4. リトライ機能を追加

```javascript
// 失敗したら3回まで再試行
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const data = await fetch(url);
      return data;
    } catch (error) {
      console.log(`試行 ${i + 1} 回目失敗`);
      if (i === maxRetries - 1) {
        throw error; // 最後の試行で失敗したらエラーを投げる
      }
      await wait(1000); // 1秒待ってから再試行
    }
  }
}
```

---

## まとめ

### このレッスンで学んだこと

- ✅ **同期処理 vs 非同期処理**：非同期処理で画面が固まるのを防げる
- ✅ **setTimeout / setInterval**：指定時間後に実行、定期的に実行
- ✅ **コールバック関数**：処理が終わった後に実行される関数
- ✅ **Promise**：非同期処理をスマートに書ける仕組み
- ✅ **Promise チェーン**：複数の非同期処理を順番に実行
- ✅ **async/await**：非同期処理を同期処理みたいに書ける最新の書き方
- ✅ **try-catch**：エラーハンドリングで安全に処理

---

### 重要なポイント

1. **非同期処理は必須のスキル**（APIからデータを取得する時など）
2. **async/await を積極的に使おう**（読みやすい、書きやすい）
3. **必ず try-catch でエラーハンドリング**（エラーで止まらないように）
4. **並列実行できる処理は Promise.all**（パフォーマンス向上）

---

### 非同期処理を使う場面

- 🌐 **API からデータ取得**：サーバーとの通信
- 📷 **画像の読み込み**：大きいファイルの処理
- ⏰ **タイマー機能**：カウントダウン、時計
- 🎬 **アニメーション**：複数の処理を順番に
- 💾 **ファイルの読み書き**：時間のかかる処理

---

### 次のステップ

非同期処理が理解できたら、次は**API と JSON**を学ぼう！

- fetch API でデータ取得
- JSON データの解析
- RESTful API の使い方
- 実際の Web API を使った開発

**準備はいい？Lesson 4 へ進もう！** 🚀

👉 [Lesson 4: API と JSON へ進む](../04-api-json/README.md)

---

### 演習問題

このレッスンの理解を深めるために、演習問題に挑戦しよう！

👉 [演習問題へ進む](exercises/README.md)

---

**Let's vibe and code!** 🎉

非同期処理、マスターできたかな？最初は難しいけど、慣れるとすごく便利！async/await を使いこなせるようになると、プロっぽいコードが書けるようになるよ！💪
