# Lesson 5: モダンJavaScript ✨

**学習目標**：最新のJavaScript記法（ES6以降）をマスターし、より読みやすく、書きやすく、メンテナンスしやすいコードが書けるようになる

---

## なぜモダンJavaScriptを学ぶの？

JavaScriptは進化し続けている！**ES6（2015年）以降、めちゃくちゃ便利な機能がたくさん追加**されたんだ！

昔のJavaScriptは、こんな感じで書いていたよ：

```javascript
// 昔のやり方（2015年以前）
var name = '太郎';
var age = 25;
var greeting = 'こんにちは、' + name + 'さん！あなたは' + age + '歳ですね。';

var numbers = [1, 2, 3];
var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] * 2);
}

function getUser() {
  var user = getUserData();
  if (user && user.profile && user.profile.name) {
    return user.profile.name;
  }
  return 'ゲスト';
}
```

**今のJavaScript（モダンな書き方）** では、こうなる：

```javascript
// モダンなやり方（ES6以降）
const name = '太郎';
const age = 25;
const greeting = `こんにちは、${name}さん！あなたは${age}歳ですね。`;

const numbers = [1, 2, 3];
const newNumbers = numbers.map(n => n * 2);

function getUser() {
  const user = getUserData();
  return user?.profile?.name ?? 'ゲスト';
}
```

**違いが分かる？** モダンな書き方の方が：

- ✅ **短くて読みやすい**
- ✅ **バグが起きにくい**
- ✅ **書くのが楽しい**
- ✅ **AIとの協働がしやすい**

### なぜモダンな書き方が重要なの？

1. **AIがモダンなコードを生成する**

   - ChatGPTやGitHub Copilotは、モダンなJavaScriptでコードを書く
   - モダンな記法を知らないと、AIが生成したコードが読めない！😱

2. **実際の現場で使われている**

   - React、Vue、Next.jsなど、すべてのフレームワークがモダンJSを使用
   - 求人票でも「ES6以降の知識」が必須条件になっている

3. **コードの品質が上がる**

   - バグが減る（特にスコープの問題）
   - 読みやすくなる（チームで開発しやすい）
   - メンテナンスしやすくなる

4. **開発速度が上がる**
   - 書くコードの量が減る
   - やりたいことが直感的に書ける
   - リファクタリングが簡単になる

**バイブコーダーにとっては、特に重要！AIに正確な指示を出すためにも、モダンな記法を理解しておく必要があるよ！** 🤖✨

### 学ぶこと

このレッスンでは、こんな超便利な機能を学ぶよ：

- ✅ **スプレッド構文（`...`）**：配列やオブジェクトを展開・結合
- ✅ **残余引数（Rest Parameters）**：可変長引数を簡単に扱う
- ✅ **分割代入（Destructuring）**：データを取り出すのが超簡単
- ✅ **オプショナルチェイニング（`?.`）**：undefinedエラーから解放！
- ✅ **Nullish合体演算子（`??`）**：デフォルト値の設定が賢くなる
- ✅ **テンプレートリテラル**：文字列の扱いが楽になる
- ✅ **配列メソッド（map/filter/reduce）**：ループをスマートに
- ✅ **短絡評価とアロー関数**：コードを簡潔に
- ✅ **モジュール（import/export）**：コードを整理整頓

---

## スプレッド構文（...）：展開・結合が超簡単！

**スプレッド構文**は、配列やオブジェクトを「バラバラに展開」する魔法の記法！`...`（ドット3つ）で書くよ。

### 配列のスプレッド構文

#### 1. 配列のコピー

```javascript
// 🔴 昔のやり方：ループで1つずつコピー
const original = [1, 2, 3];
const copy = [];
for (let i = 0; i < original.length; i++) {
  copy.push(original[i]);
}

// ✅ モダンなやり方：スプレッド構文
const original = [1, 2, 3];
const copy = [...original]; // 展開してコピー！

console.log(copy); // [1, 2, 3]
console.log(copy === original); // false（別の配列になる）
```

**なぜコピーが必要？** JavaScriptの配列は「参照」で渡されるから、元の配列を変更すると、他の場所にも影響が出ちゃう！スプレッド構文なら、安全にコピーできる！

#### 2. 配列の結合

```javascript
// 🔴 昔のやり方：concat()メソッド
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);

// ✅ モダンなやり方：スプレッド構文
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5, 6]

// 途中に要素を追加することも簡単！
const merged2 = [...arr1, 99, ...arr2];
console.log(merged2); // [1, 2, 3, 99, 4, 5, 6]
```

**超便利！** 複数の配列を好きな順番で結合できる！

#### 3. 配列に要素を追加

```javascript
// 🔴 昔のやり方：push()やunshift()で変更
const numbers = [2, 3, 4];
numbers.unshift(1); // 先頭に追加
numbers.push(5); // 末尾に追加
// numbers = [1, 2, 3, 4, 5]（元の配列が変更される）

// ✅ モダンなやり方：スプレッド構文で新しい配列を作成
const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5]; // 元の配列は変更しない！
console.log(newNumbers); // [1, 2, 3, 4, 5]
console.log(numbers); // [2, 3, 4]（元の配列は変わってない）
```

**イミュータブル（不変）な書き方！** 元のデータを変更せず、新しいデータを作る → バグが減る！

#### 4. 関数の引数として展開

```javascript
const numbers = [1, 5, 3, 9, 2];

// 🔴 昔のやり方：apply()メソッド
const max = Math.max.apply(null, numbers);

// ✅ モダンなやり方：スプレッド構文
const max = Math.max(...numbers); // 配列を引数として展開！
console.log(max); // 9

// こういうことが起こってる：
// Math.max(...[1, 5, 3, 9, 2])
// ↓
// Math.max(1, 5, 3, 9, 2)
```

---

### オブジェクトのスプレッド構文

配列だけじゃない！**オブジェクトでもスプレッド構文が使える**よ！

#### 1. オブジェクトのコピー

```javascript
// 🔴 昔のやり方：Object.assign()
const user = { name: '太郎', age: 25 };
const copy = Object.assign({}, user);

// ✅ モダンなやり方：スプレッド構文
const user = { name: '太郎', age: 25 };
const copy = { ...user };

console.log(copy); // { name: '太郎', age: 25 }
console.log(copy === user); // false（別のオブジェクト）
```

#### 2. オブジェクトの結合（マージ）

```javascript
const user = { name: '太郎', age: 25 };
const address = { city: '東京', country: '日本' };

// 🔴 昔のやり方：Object.assign()
const merged = Object.assign({}, user, address);

// ✅ モダンなやり方：スプレッド構文
const merged = { ...user, ...address };

console.log(merged);
// {
//   name: '太郎',
//   age: 25,
//   city: '東京',
//   country: '日本'
// }
```

#### 3. プロパティの上書き（超重要！）

```javascript
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};

// 年齢だけ変更したい！
const updatedUser = {
  ...user, // まず全部コピー
  age: 26, // 年齢だけ上書き
};

console.log(updatedUser);
// {
//   name: '太郎',
//   age: 26,  ← 変わった！
//   city: '東京'
// }

console.log(user.age); // 25（元のオブジェクトは変わってない）
```

**順番が重要！** 後に書いたプロパティが優先される：

```javascript
const defaults = { theme: 'light', fontSize: 14, language: 'ja' };
const userSettings = { fontSize: 18 };

// デフォルト設定をベースに、ユーザー設定で上書き
const finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings);
// { theme: 'light', fontSize: 18, language: 'ja' }
//                           ↑ ユーザー設定で上書きされた！
```

**実用例：設定のマージ**

```javascript
// よくあるパターン：デフォルト設定とユーザー設定をマージ
function createConfig(userConfig = {}) {
  const defaultConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retryCount: 3,
    debug: false,
  };

  // デフォルト設定をベースに、ユーザー設定で上書き
  return { ...defaultConfig, ...userConfig };
}

const config1 = createConfig();
console.log(config1);
// { apiUrl: '...', timeout: 5000, retryCount: 3, debug: false }

const config2 = createConfig({ timeout: 10000, debug: true });
console.log(config2);
// { apiUrl: '...', timeout: 10000, retryCount: 3, debug: true }
//                        ↑                              ↑
//                   ユーザー設定で上書き
```

**注意：シャローコピー（浅いコピー）**

```javascript
const user = {
  name: '太郎',
  address: {
    city: '東京',
  },
};

const copy = { ...user };
copy.address.city = '大阪'; // ネストされたオブジェクトを変更

console.log(user.address.city); // '大阪'（元のオブジェクトも変わっちゃう！）

// ネストされたオブジェクトもコピーしたい場合
const deepCopy = {
  ...user,
  address: { ...user.address }, // ネストされたオブジェクトもスプレッド
};
```

---

## 残余引数（Rest Parameters）：可変長引数を簡単に

スプレッド構文の逆バージョン！**複数の値を配列にまとめる**機能だよ。

### 基本的な使い方

```javascript
// 🔴 昔のやり方：argumentsオブジェクト（配列じゃない！）
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// ✅ モダンなやり方：残余引数（配列として受け取れる！）
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// もっとモダンに：reduce()を使う
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

### 最初の引数と残りの引数を分ける

```javascript
function introduce(greeting, ...names) {
  console.log(`${greeting}！`);
  console.log(`参加者：${names.join(', ')}`);
}

introduce('こんにちは', '太郎', '花子', '次郎');
// こんにちは！
// 参加者：太郎, 花子, 次郎
```

**注意：残余引数は必ず最後！**

```javascript
// ✅ OK：残余引数が最後
function fn(a, b, ...rest) {}

// ❌ NG：残余引数の後に引数がある
function fn(a, ...rest, b) {} // エラー！
```

---

## 分割代入（Destructuring）：データ取り出しが超簡単！

オブジェクトや配列から値を取り出すのが、めちゃくちゃ簡単になる魔法の記法！

### 配列の分割代入

```javascript
// 🔴 昔のやり方：インデックスで1つずつ取り出す
const colors = ['赤', '青', '緑'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// ✅ モダンなやり方：分割代入
const colors = ['赤', '青', '緑'];
const [first, second, third] = colors;

console.log(first); // '赤'
console.log(second); // '青'
console.log(third); // '緑'
```

#### 一部だけ取り出す

```javascript
const numbers = [1, 2, 3, 4, 5];

// 最初の2つだけ取り出す
const [first, second] = numbers;
console.log(first, second); // 1 2

// スキップもできる
const [, , third] = numbers; // 最初の2つはスキップ
console.log(third); // 3
```

#### デフォルト値を設定

```javascript
const colors = ['赤'];

const [first, second = '青'] = colors;
console.log(first); // '赤'
console.log(second); // '青'（デフォルト値）
```

#### 残りをまとめて取得

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

#### 値の交換（スワップ）

```javascript
// 🔴 昔のやり方：一時変数を使う
let a = 1;
let b = 2;
const temp = a;
a = b;
b = temp;

// ✅ モダンなやり方：分割代入
let a = 1;
let b = 2;
[a, b] = [b, a]; // 一行で交換！

console.log(a); // 2
console.log(b); // 1
```

---

### オブジェクトの分割代入

**最も使う機能の1つ！** APIから取得したデータを扱うときに超便利！

#### 基本的な使い方

```javascript
// 🔴 昔のやり方：ドット記法で1つずつ取り出す
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};

const name = user.name;
const age = user.age;
const city = user.city;

// ✅ モダンなやり方：分割代入
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
};

const { name, age, city } = user;

console.log(name); // '太郎'
console.log(age); // 25
console.log(city); // '東京'
```

#### 変数名を変更する

```javascript
const user = {
  name: '太郎',
  age: 25,
};

// nameという変数名じゃなく、userNameにしたい！
const { name: userName, age: userAge } = user;

console.log(userName); // '太郎'
console.log(userAge); // 25
// console.log(name);  // エラー！nameという変数は存在しない
```

#### デフォルト値を設定

```javascript
const user = {
  name: '太郎',
  age: 25,
  // cityプロパティがない！
};

const { name, age, city = '不明' } = user;

console.log(name); // '太郎'
console.log(age); // 25
console.log(city); // '不明'（デフォルト値）
```

#### ネストされたオブジェクト

```javascript
const user = {
  name: '太郎',
  address: {
    city: '東京',
    zipCode: '123-4567',
  },
};

// 🔴 昔のやり方
const city = user.address.city;
const zipCode = user.address.zipCode;

// ✅ モダンなやり方：ネストした分割代入
const {
  name,
  address: { city, zipCode },
} = user;

console.log(name); // '太郎'
console.log(city); // '東京'
console.log(zipCode); // '123-4567'
// console.log(address); // エラー！addressという変数は作られない
```

#### 関数の引数で分割代入（超実用的！）

```javascript
// 🔴 昔のやり方：オブジェクトを受け取って、中でプロパティを取り出す
function displayUser(user) {
  console.log(`名前：${user.name}`);
  console.log(`年齢：${user.age}`);
  console.log(`都市：${user.city}`);
}

// ✅ モダンなやり方：引数の時点で分割代入
function displayUser({ name, age, city }) {
  console.log(`名前：${name}`);
  console.log(`年齢：${age}`);
  console.log(`都市：${city}`);
}

const user = { name: '太郎', age: 25, city: '東京' };
displayUser(user);
```

**Reactなどのフレームワークでよく見る書き方：**

```javascript
// コンポーネントのpropsを分割代入
function UserCard({ name, age, avatar }) {
  return `
    <div class="card">
      <img src="${avatar}" alt="${name}">
      <h3>${name}</h3>
      <p>${age}歳</p>
    </div>
  `;
}
```

---

## オプショナルチェイニング（?.）：undefinedエラーから解放！

**超重要！** APIからデータを取得するときに、絶対に使う機能！

### 問題：ネストされたプロパティへのアクセス

```javascript
// APIから取得したユーザーデータ（住所がない場合もある）
const user1 = {
  name: '太郎',
  address: {
    city: '東京',
  },
};

const user2 = {
  name: '花子',
  // addressプロパティがない！
};

// 🔴 昔のやり方：undefinedエラーが起きる
console.log(user1.address.city); // '東京'
console.log(user2.address.city); // エラー！ Cannot read property 'city' of undefined

// 🔴 昔のやり方：if文で確認する（長い...）
if (user2.address && user2.address.city) {
  console.log(user2.address.city);
} else {
  console.log('都市情報なし');
}

// ✅ モダンなやり方：オプショナルチェイニング
console.log(user1.address?.city); // '東京'
console.log(user2.address?.city); // undefined（エラーにならない！）
```

### どうやって動くの？

`?.`は、**左側がnullまたはundefinedの場合、undefinedを返す**よ。エラーにならない！

```javascript
const user = {
  name: '太郎',
  // addressがない
};

// 通常のアクセス
user.address.city; // エラー！

// オプショナルチェイニング
user.address?.city; // undefined（エラーにならない）

// こういうことが起こってる：
// 1. user.address を確認 → undefined
// 2. undefined だから、.city にアクセスしない
// 3. undefined を返す
```

### 複数階層で使う

```javascript
const user = {
  profile: {
    // contactsがない
  },
};

// 何階層でも使える！
const email = user.profile?.contacts?.email;
console.log(email); // undefined

// こう書くのと同じ意味
const email =
  user.profile && user.profile.contacts && user.profile.contacts.email;
```

### メソッド呼び出しでも使える

```javascript
const user = {
  name: '太郎',
  greet: function () {
    return `こんにちは、${this.name}です！`;
  },
};

const guest = {
  name: 'ゲスト',
  // greetメソッドがない
};

console.log(user.greet?.()); // 'こんにちは、太郎です！'
console.log(guest.greet?.()); // undefined（エラーにならない）
```

### 配列要素にアクセス

```javascript
const users = [{ name: '太郎' }, { name: '花子' }];

console.log(users[0]?.name); // '太郎'
console.log(users[10]?.name); // undefined（エラーにならない）
```

### 実用例：APIレスポンスの処理

```javascript
// APIから取得したデータ（構造が不確定）
function displayUserInfo(apiResponse) {
  // 🔴 昔のやり方：長い条件分岐
  const userName =
    apiResponse && apiResponse.data && apiResponse.data.user
      ? apiResponse.data.user.name
      : 'ゲスト';

  // ✅ モダンなやり方：オプショナルチェイニング + Nullish合体演算子
  const userName = apiResponse?.data?.user?.name ?? 'ゲスト';

  console.log(`ユーザー名：${userName}`);
}

displayUserInfo({ data: { user: { name: '太郎' } } }); // ユーザー名：太郎
displayUserInfo({ data: {} }); // ユーザー名：ゲスト
displayUserInfo(null); // ユーザー名：ゲスト
```

---

## Nullish合体演算子（??）：デフォルト値の設定が賢くなる

`||`（OR演算子）の問題を解決する新しい演算子！

### 問題：OR演算子の落とし穴

```javascript
const count = 0;
const message = '';

// 🔴 OR演算子の問題：0や''もfalseとして扱われる
const finalCount = count || 10;
console.log(finalCount); // 10（0がfalsyなので、10になっちゃう）

const finalMessage = message || 'メッセージなし';
console.log(finalMessage); // 'メッセージなし'（''がfalsyなので）

// でも、0や''も有効な値として使いたい場合がある！
```

### Nullish合体演算子（??）の登場

```javascript
const count = 0;
const message = '';

// ✅ Nullish合体演算子：nullまたはundefinedの場合のみ、デフォルト値を使う
const finalCount = count ?? 10;
console.log(finalCount); // 0（0は有効な値として扱われる）

const finalMessage = message ?? 'メッセージなし';
console.log(finalMessage); // ''（''は有効な値として扱われる）
```

### OR演算子（||）との違い

| 値            | `\|\|` の結果    | `??` の結果      |
| ------------- | ---------------- | ---------------- |
| `null`        | デフォルト値     | デフォルト値     |
| `undefined`   | デフォルト値     | デフォルト値     |
| `0`           | デフォルト値 ❌  | `0` ✅           |
| `''`          | デフォルト値 ❌  | `''` ✅          |
| `false`       | デフォルト値 ❌  | `false` ✅       |
| `NaN`         | デフォルト値 ❌  | `NaN` ✅         |
| 真の値        | その値           | その値           |

```javascript
// 具体例で見てみよう
const value1 = 0;
console.log(value1 || 100); // 100（0はfalsyだから）
console.log(value1 ?? 100); // 0（0はnullでもundefinedでもないから）

const value2 = '';
console.log(value2 || 'デフォルト'); // 'デフォルト'
console.log(value2 ?? 'デフォルト'); // ''

const value3 = false;
console.log(value3 || true); // true
console.log(value3 ?? true); // false

const value4 = null;
console.log(value4 || 'デフォルト'); // 'デフォルト'
console.log(value4 ?? 'デフォルト'); // 'デフォルト'
```

### 実用例：設定値のデフォルト

```javascript
function createUser(options) {
  // ユーザーが0を指定した場合も、その値を使いたい
  const maxRetries = options.maxRetries ?? 3; // 0を指定しても0が使われる
  const timeout = options.timeout ?? 5000;
  const showWelcome = options.showWelcome ?? true;

  return { maxRetries, timeout, showWelcome };
}

console.log(createUser({ maxRetries: 0 }));
// { maxRetries: 0, timeout: 5000, showWelcome: true }
//              ↑ 0が使われた！

console.log(createUser({ timeout: 0, showWelcome: false }));
// { maxRetries: 3, timeout: 0, showWelcome: false }
//                          ↑              ↑
```

### オプショナルチェイニングと組み合わせる（最強！）

```javascript
const user = {
  profile: {
    preferences: {
      // themeがない
    },
  },
};

// オプショナルチェイニング + Nullish合体演算子
const theme = user?.profile?.preferences?.theme ?? 'light';
console.log(theme); // 'light'

// こう書くのと同じ意味だけど、めちゃくちゃ短い！
let theme;
if (
  user &&
  user.profile &&
  user.profile.preferences &&
  user.profile.preferences.theme !== null &&
  user.profile.preferences.theme !== undefined
) {
  theme = user.profile.preferences.theme;
} else {
  theme = 'light';
}
```

---

## テンプレートリテラル：文字列の扱いが楽になる

Phase 3で基本を学んだけど、もっと便利な使い方を紹介するよ！

### 基本の復習

```javascript
const name = '太郎';
const age = 25;

// 🔴 昔のやり方：文字列連結
const message = 'こんにちは、' + name + 'さん！あなたは' + age + '歳ですね。';

// ✅ モダンなやり方：テンプレートリテラル
const message = `こんにちは、${name}さん！あなたは${age}歳ですね。`;
```

### 複数行の文字列

```javascript
// 🔴 昔のやり方：\nを使う、または文字列を連結
const html = '<div>\n  <h1>タイトル</h1>\n  <p>本文</p>\n</div>';

// ✅ モダンなやり方：テンプレートリテラルで複数行
const html = `
  <div>
    <h1>タイトル</h1>
    <p>本文</p>
  </div>
`;
```

### 式の埋め込み

```javascript
const a = 10;
const b = 20;

// 計算結果を埋め込める
console.log(`${a} + ${b} = ${a + b}`); // '10 + 20 = 30'

// 三項演算子も使える
const score = 85;
console.log(`結果：${score >= 60 ? '合格' : '不合格'}`); // '結果：合格'

// 関数呼び出しも可能
function getGreeting() {
  return 'こんにちは';
}
console.log(`${getGreeting()}、太郎さん！`); // 'こんにちは、太郎さん！'
```

### 実用例：HTMLの生成

```javascript
function createUserCard(user) {
  return `
    <div class="user-card">
      <img src="${user.avatar}" alt="${user.name}">
      <h3>${user.name}</h3>
      <p>${user.age}歳</p>
      <p>${user.city}</p>
      ${user.isOnline ? '<span class="online">オンライン</span>' : ''}
    </div>
  `;
}

const user = {
  name: '太郎',
  age: 25,
  city: '東京',
  avatar: 'avatar.jpg',
  isOnline: true,
};

document.body.innerHTML = createUserCard(user);
```

---

## 配列メソッド：ループをスマートに

**モダンJavaScriptでは、for文よりも配列メソッドを使う！** 読みやすくて、バグが少ない！

### map：配列の各要素を変換

```javascript
// 🔴 昔のやり方：for文で新しい配列を作る
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// ✅ モダンなやり方：map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**mapの特徴**：

- 元の配列は変更しない
- 新しい配列を返す
- 配列の長さは変わらない

```javascript
// ユーザーデータから名前だけを取り出す
const users = [
  { name: '太郎', age: 25 },
  { name: '花子', age: 30 },
  { name: '次郎', age: 28 },
];

const names = users.map((user) => user.name);
console.log(names); // ['太郎', '花子', '次郎']

// HTMLを生成
const userCards = users.map(
  (user) => `
  <div class="card">
    <h3>${user.name}</h3>
    <p>${user.age}歳</p>
  </div>
`
);
```

---

### filter：条件に合う要素だけを取り出す

```javascript
// 🔴 昔のやり方：for文で条件判定
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}

// ✅ モダンなやり方：filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4, 6, 8, 10]
```

```javascript
// 年齢が30歳以上のユーザーだけを取り出す
const users = [
  { name: '太郎', age: 25 },
  { name: '花子', age: 30 },
  { name: '次郎', age: 35 },
];

const adults = users.filter((user) => user.age >= 30);
console.log(adults);
// [
//   { name: '花子', age: 30 },
//   { name: '次郎', age: 35 }
// ]
```

---

### reduce：配列を1つの値にまとめる

```javascript
// 🔴 昔のやり方：for文で合計を計算
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// ✅ モダンなやり方：reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```

**reduceの仕組み**：

```javascript
// reduce((累積値, 現在の値) => 新しい累積値, 初期値)

const sum = numbers.reduce((acc, num) => {
  console.log(`累積値: ${acc}, 現在の値: ${num}`);
  return acc + num;
}, 0);

// 累積値: 0, 現在の値: 1  → 0 + 1 = 1
// 累積値: 1, 現在の値: 2  → 1 + 2 = 3
// 累積値: 3, 現在の値: 3  → 3 + 3 = 6
// 累積値: 6, 現在の値: 4  → 6 + 4 = 10
// 累積値: 10, 現在の値: 5 → 10 + 5 = 15
```

**実用例：配列からオブジェクトを作る**

```javascript
const users = [
  { id: 1, name: '太郎' },
  { id: 2, name: '花子' },
  { id: 3, name: '次郎' },
];

// IDをキーとしたオブジェクトに変換
const userMap = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(userMap);
// {
//   1: { id: 1, name: '太郎' },
//   2: { id: 2, name: '花子' },
//   3: { id: 3, name: '次郎' }
// }

// これで、IDから素早くユーザーを取得できる！
console.log(userMap[2]); // { id: 2, name: '花子' }
```

---

### メソッドチェイン：組み合わせて使う（超強力！）

```javascript
const users = [
  { name: '太郎', age: 25, score: 85 },
  { name: '花子', age: 30, score: 92 },
  { name: '次郎', age: 28, score: 78 },
  { name: '三郎', age: 35, score: 95 },
];

// 30歳未満のユーザーで、スコアが80点以上の人の名前を取得
const result = users
  .filter((user) => user.age < 30) // 30歳未満で絞り込み
  .filter((user) => user.score >= 80) // 80点以上で絞り込み
  .map((user) => user.name); // 名前だけ取り出す

console.log(result); // ['太郎']

// 年齢が30歳以上のユーザーの平均スコアを計算
const avgScore =
  users
    .filter((user) => user.age >= 30) // 30歳以上で絞り込み
    .reduce((acc, user) => acc + user.score, 0) / // スコアを合計
  users.filter((user) => user.age >= 30).length; // 人数で割る

console.log(avgScore); // (92 + 95) / 2 = 93.5
```

---

### find、some、every：便利な配列メソッド

```javascript
const users = [
  { id: 1, name: '太郎', age: 25 },
  { id: 2, name: '花子', age: 30 },
  { id: 3, name: '次郎', age: 28 },
];

// find：条件に合う最初の要素を返す
const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: '花子', age: 30 }

// some：条件に合う要素が1つでもあればtrue
const hasAdult = users.some((u) => u.age >= 30);
console.log(hasAdult); // true

// every：すべての要素が条件に合えばtrue
const allAdult = users.every((u) => u.age >= 30);
console.log(allAdult); // false
```

---

## 短絡評価（&&, ||）：条件付きレンダリング

### AND演算子（&&）で条件付き実行

```javascript
const user = { name: '太郎', isPremium: true };

// 🔴 昔のやり方：if文
if (user.isPremium) {
  console.log('プレミアム会員の特典があります');
}

// ✅ モダンなやり方：短絡評価
user.isPremium && console.log('プレミアム会員の特典があります');

// HTMLを条件付きで表示
const premiumBadge = user.isPremium && '<span class="badge">プレミアム</span>';
console.log(premiumBadge); // '<span class="badge">プレミアム</span>'
```

**仕組み**：`A && B`は、Aがtrueなら**Bを返す**、Aがfalseなら**Aを返す**

```javascript
true && 'Hello'; // 'Hello'
false && 'Hello'; // false
null && 'Hello'; // null
'太郎' && 'Hello'; // 'Hello'（文字列はtruthyだから）
```

### OR演算子（||）でフォールバック

```javascript
// 🔴 昔のやり方：if-else
let userName;
if (user.name) {
  userName = user.name;
} else {
  userName = 'ゲスト';
}

// ✅ モダンなやり方：OR演算子
const userName = user.name || 'ゲスト';

// ただし、Nullish合体演算子の方が正確！
const userName = user.name ?? 'ゲスト';
```

---

## 三項演算子：インライン条件分岐

```javascript
const score = 85;

// 🔴 昔のやり方：if-else
let result;
if (score >= 60) {
  result = '合格';
} else {
  result = '不合格';
}

// ✅ モダンなやり方：三項演算子
const result = score >= 60 ? '合格' : '不合格';

// テンプレートリテラルと組み合わせる
const message = `結果：${score >= 60 ? '合格' : '不合格'}`;

// HTMLの条件付きクラス
const className = `button ${isActive ? 'active' : ''}`;
```

**ネストもできるけど、読みにくくなるので注意！**

```javascript
// 読みにくい例（やりすぎ）
const grade =
  score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';

// こっちの方が読みやすい
let grade;
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else grade = 'D';
```

---

## モジュール（import/export）：コードを整理整頓

大きなプロジェクトでは、コードを複数のファイルに分割するよ！

### 基本的なエクスポート

```javascript
// utils.js - ユーティリティ関数を定義

// 名前付きエクスポート
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// まとめてエクスポート
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export { multiply, divide };
```

### 基本的なインポート

```javascript
// main.js - utils.jsの関数を使う

// 名前付きインポート
import { add, subtract, PI } from './utils.js';

console.log(add(10, 5)); // 15
console.log(PI); // 3.14159

// すべてをインポート
import * as utils from './utils.js';

console.log(utils.add(10, 5)); // 15
console.log(utils.PI); // 3.14159

// 名前を変更してインポート
import { add as addition } from './utils.js';

console.log(addition(10, 5)); // 15
```

### デフォルトエクスポート

```javascript
// user.js - メインの機能を1つエクスポート

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `こんにちは、${this.name}です！`;
  }
}

// または関数をデフォルトエクスポート
export default function createUser(name, age) {
  return { name, age };
}
```

```javascript
// main.js - デフォルトエクスポートをインポート

import User from './user.js';

const user = new User('太郎', 25);
console.log(user.greet());

// 名前は自由に付けられる
import MyUser from './user.js'; // デフォルトエクスポートは名前を変えてもOK
```

### 名前付きとデフォルトの組み合わせ

```javascript
// config.js

export const API_URL = 'https://api.example.com';
export const TIMEOUT = 5000;

export default {
  apiUrl: API_URL,
  timeout: TIMEOUT,
  debug: false,
};
```

```javascript
// main.js

import config, { API_URL, TIMEOUT } from './config.js';

console.log(config.apiUrl); // 'https://api.example.com'
console.log(API_URL); // 'https://api.example.com'
```

**注意：HTMLでモジュールを使う場合**

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>モジュールの使用</title>
  </head>
  <body>
    <!-- type="module" を付ける！ -->
    <script type="module" src="main.js"></script>
  </body>
</html>
```

---

## 実践例：モダンJavaScriptでショッピングカート

すべての機能を組み合わせた実用的な例を見てみよう！

```javascript
// cart.js - ショッピングカートの機能

// 商品データ
const products = [
  { id: 1, name: 'ノートPC', price: 120000, stock: 5 },
  { id: 2, name: 'マウス', price: 3000, stock: 20 },
  { id: 3, name: 'キーボード', price: 8000, stock: 15 },
];

// カート（初期状態は空）
let cart = [];

// 商品をカートに追加
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);

  // オプショナルチェイニングで存在確認
  if (!product) {
    console.log('商品が見つかりません');
    return;
  }

  // 在庫確認
  if (product.stock < quantity) {
    console.log(`在庫が不足しています（在庫: ${product.stock}個）`);
    return;
  }

  // 既にカートにある商品か確認
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    // スプレッド構文で更新
    cart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    // 新しいアイテムを追加
    cart = [...cart, { productId, quantity }];
  }

  console.log(`${product.name} を ${quantity}個 カートに追加しました`);
}

// カートの合計金額を計算
function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    // Nullish合体演算子でデフォルト値を設定
    const price = product?.price ?? 0;
    return total + price * item.quantity;
  }, 0);
}

// カートの内容を表示
function displayCart() {
  if (cart.length === 0) {
    console.log('カートは空です');
    return;
  }

  console.log('=== カートの内容 ===');

  // 配列メソッドで商品情報を整形
  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    const { name, price } = product ?? {}; // 分割代入
    const subtotal = (price ?? 0) * item.quantity;

    return `${name}: ${price.toLocaleString()}円 × ${item.quantity}個 = ${subtotal.toLocaleString()}円`;
  });

  // テンプレートリテラルで整形
  const output = `
${cartItems.join('\n')}
-------------------
合計: ${getCartTotal().toLocaleString()}円
  `;

  console.log(output);
}

// 使ってみよう！
addToCart(1, 1); // ノートPCを1個追加
addToCart(2, 2); // マウスを2個追加
addToCart(3, 1); // キーボードを1個追加

displayCart();
// === カートの内容 ===
// ノートPC: 120,000円 × 1個 = 120,000円
// マウス: 3,000円 × 2個 = 6,000円
// キーボード: 8,000円 × 1個 = 8,000円
// -------------------
// 合計: 134,000円
```

**このコードで使った機能**：

- ✅ スプレッド構文（配列のコピー、オブジェクトの更新）
- ✅ 分割代入（オブジェクトのプロパティ取り出し）
- ✅ オプショナルチェイニング（安全なプロパティアクセス）
- ✅ Nullish合体演算子（デフォルト値の設定）
- ✅ テンプレートリテラル（文字列の整形）
- ✅ 配列メソッド（map, reduce, find）
- ✅ アロー関数（簡潔な関数記述）
- ✅ デフォルト引数（`quantity = 1`）

---

## バイブコーディング実践：AIとモダンJavaScriptを使いこなす 🤖

モダンJavaScriptは、**AIとの協働に最適**！AIがモダンな記法でコードを生成してくれるから、読めるようになっておこう！

### AIへの指示例

#### ❌ 悪い指示（曖昧、古い用語）

```text
「配列をループして、各要素を2倍にした新しい配列を作って」
→ AIはfor文を使うかもしれない
```

#### ✅ 良い指示（具体的、モダンな用語）

```text
「配列をmapメソッドで変換して、各要素を2倍にした新しい配列を作ってください。
アロー関数を使って簡潔に書いてください。」

→ AIは確実にモダンな記法で書いてくれる！
```

### 実践的なAI指示例

#### スプレッド構文の活用

```text
「以下の2つのオブジェクトをマージして、後の方のプロパティで上書きしてください。
スプレッド構文を使ってイミュータブルに実装してください。」
```

AIの生成例：

```javascript
const defaults = { theme: 'light', language: 'ja' };
const userSettings = { theme: 'dark' };

const settings = { ...defaults, ...userSettings };
// { theme: 'dark', language: 'ja' }
```

#### 分割代入の活用

```text
「APIから取得したユーザーデータから、name、age、cityプロパティを取り出して、
それぞれの変数に代入してください。分割代入を使ってください。」
```

AIの生成例：

```javascript
const userData = {
  name: '太郎',
  age: 25,
  city: '東京',
  country: '日本',
};

const { name, age, city } = userData;
```

#### オプショナルチェイニングの活用

```text
「APIレスポンスからユーザーの住所を安全に取得してください。
住所データがない場合もあるので、オプショナルチェイニングとNullish合体演算子を使って、
デフォルト値として"住所未登録"を返してください。」
```

AIの生成例：

```javascript
const address = response?.data?.user?.address?.street ?? '住所未登録';
```

#### 配列メソッドの活用

```text
「ユーザーの配列から、年齢が30歳以上で、アクティブなユーザーだけをフィルタリングし、
その人たちの名前だけを配列で取得してください。
filterとmapメソッドを使って、メソッドチェインで書いてください。」
```

AIの生成例：

```javascript
const activeAdultNames = users
  .filter((user) => user.age >= 30 && user.isActive)
  .map((user) => user.name);
```

---

### AIが生成したコードの読み方：チェックポイント

AIがモダンJavaScriptでコードを生成した時、以下をチェックしよう！

#### 1. `var`を使っていないか？

```javascript
// ❌ 古い書き方
var name = '太郎';

// ✅ モダンな書き方
const name = '太郎'; // 再代入しない場合
let age = 25; // 再代入する場合
```

#### 2. 配列操作でfor文を使っていないか？

```javascript
// ❌ 古い書き方
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// ✅ モダンな書き方
const doubled = numbers.map((n) => n * 2);
```

#### 3. 文字列結合で`+`を使っていないか？

```javascript
// ❌ 古い書き方
const message = 'こんにちは、' + name + 'さん';

// ✅ モダンな書き方
const message = `こんにちは、${name}さん`;
```

#### 4. オブジェクトのマージで`Object.assign`を使っていないか？

```javascript
// ❌ 古い書き方
const merged = Object.assign({}, obj1, obj2);

// ✅ モダンな書き方
const merged = { ...obj1, ...obj2 };
```

#### 5. null/undefinedチェックで長い条件式を使っていないか？

```javascript
// ❌ 古い書き方
if (user && user.profile && user.profile.name) {
  console.log(user.profile.name);
}

// ✅ モダンな書き方
console.log(user?.profile?.name);
```

---

### よくある問題と修正方法

#### 問題1：スプレッド構文で深いコピーができていない

**問題のコード**：

```javascript
const original = {
  name: '太郎',
  address: { city: '東京' },
};

const copy = { ...original };
copy.address.city = '大阪';

console.log(original.address.city); // '大阪'（元のデータも変わっちゃった！）
```

**原因**：スプレッド構文は**シャローコピー**（浅いコピー）だから、ネストされたオブジェクトは参照がコピーされる

**修正方法**：

```javascript
// ネストされたオブジェクトもスプレッドする
const copy = {
  ...original,
  address: { ...original.address },
};

// または、深いコピーが必要な場合
const copy = JSON.parse(JSON.stringify(original)); // 簡易的な方法
```

#### 問題2：デフォルト値でOR演算子を使ってしまう

**問題のコード**：

```javascript
function setVolume(volume) {
  const finalVolume = volume || 50; // 0を指定したいのに、50になっちゃう！
  console.log(finalVolume);
}

setVolume(0); // 50（期待: 0）
```

**原因**：0はfalsyなので、OR演算子ではデフォルト値になってしまう

**修正方法**：

```javascript
function setVolume(volume) {
  const finalVolume = volume ?? 50; // Nullish合体演算子を使う
  console.log(finalVolume);
}

setVolume(0); // 0 ✅
setVolume(null); // 50 ✅
```

#### 問題3：配列メソッドで元の配列を変更してしまう

**問題のコード**：

```javascript
const numbers = [3, 1, 4, 1, 5];
numbers.sort(); // 元の配列を変更しちゃう！
console.log(numbers); // [1, 1, 3, 4, 5]（元の配列が変わった）
```

**修正方法**：

```javascript
const numbers = [3, 1, 4, 1, 5];
const sorted = [...numbers].sort(); // コピーしてからソート
console.log(numbers); // [3, 1, 4, 1, 5]（元の配列は変わってない）
console.log(sorted); // [1, 1, 3, 4, 5]
```

#### 問題4：オプショナルチェイニングを使いすぎる

**問題のコード**：

```javascript
// 使いすぎ
const value = a?.b?.c?.d?.e?.f?.g?.h;

// 本当にすべての階層がundefinedの可能性がある？
```

**修正方法**：

```javascript
// 本当に必要な箇所だけ使う
// userは必ず存在するけど、profileはない場合がある
const city = user.profile?.address?.city ?? '未登録';
```

---

## カスタマイズポイント：自分でいじる箇所

### スプレッド構文の順番を変える

```javascript
// 順番を変えると、上書きの動作が変わる
const settings1 = { ...defaults, ...userSettings }; // userSettingsが優先
const settings2 = { ...userSettings, ...defaults }; // defaultsが優先
```

### 分割代入でデフォルト値を変更

```javascript
// デフォルト値を調整
const { name = 'ゲスト', age = 0, city = '未登録' } = user;
```

### 配列メソッドの条件を変更

```javascript
// フィルタ条件を変更
const adults = users.filter((user) => user.age >= 20); // 20歳以上
const seniors = users.filter((user) => user.age >= 65); // 65歳以上
```

### Nullish合体演算子のデフォルト値を変更

```javascript
const timeout = options.timeout ?? 5000; // デフォルト5秒
const retryCount = options.retryCount ?? 3; // デフォルト3回
```

---

## まとめ：モダンJavaScriptで開発が変わる！

このレッスンで学んだモダンJavaScriptの機能を振り返ろう！

### 学んだこと

- ✅ **スプレッド構文（`...`）**：配列・オブジェクトの展開、コピー、結合が簡単
- ✅ **残余引数（Rest Parameters）**：可変長引数を配列として受け取れる
- ✅ **分割代入（Destructuring）**：配列・オブジェクトから値を取り出すのが超簡単
- ✅ **オプショナルチェイニング（`?.`）**：undefinedエラーから解放される
- ✅ **Nullish合体演算子（`??`）**：デフォルト値の設定が賢くなる
- ✅ **テンプレートリテラル**：文字列の扱いが楽になる
- ✅ **配列メソッド（map/filter/reduce）**：ループをスマートに書ける
- ✅ **短絡評価（&&, ||）**：条件付き実行が簡潔になる
- ✅ **三項演算子**：インライン条件分岐ができる
- ✅ **モジュール（import/export）**：コードを整理整頓できる

### モダンJavaScriptのメリット

1. **コードが短くなる**

   - 昔：20行 → 今：5行

2. **読みやすくなる**

   - 意図が明確に伝わる

3. **バグが減る**

   - イミュータブルな書き方でバグを防ぐ
   - オプショナルチェイニングでundefinedエラーを防ぐ

4. **AIとの協働がしやすい**
   - AIがモダンな記法でコードを生成してくれる
   - モダンな記法を理解していれば、AIの生成コードが読める

### これからの開発で意識すること

- **var を使わない** → const/let を使う
- **for 文を避ける** → 配列メソッド（map/filter/reduce）を使う
- **文字列結合（+）を避ける** → テンプレートリテラルを使う
- **null チェックを簡潔に** → オプショナルチェイニング（?.）を使う
- **デフォルト値は??を使う** → OR 演算子（||）の落とし穴を避ける
- **イミュータブルに書く** → スプレッド構文で元のデータを変更しない

### 次のステップ

モダンJavaScriptをマスターしたあなたは、こんなことができるようになるよ！

- 🎯 **フレームワーク（React、Vue）** を学ぶ準備ができた
- 🚀 **実践的なプロジェクト**で使える技術が身についた
- 🤖 **AIが生成したコード**を理解・修正できる
- 💪 **プロのコード**を読んで学べる

**おめでとう！モダンJavaScriptをマスターしたね！これであなたも立派なバイブコーダーだ！** 🎉✨

---

## 演習にチャレンジしよう！

理論を学んだら、実際に手を動かして練習しよう！

👉 **[演習問題へ進む](exercises/README.md)**

演習では、以下のような課題に取り組むよ：

- 基礎編：スプレッド構文、分割代入、オプショナルチェイニングの練習
- 応用編：配列メソッドを使ったデータ変換、オブジェクト操作
- チャレンジ：モダンJavaScriptを使ったユーザープロフィールエディタの構築

**Let's code with modern JavaScript!** 💻✨
