# 演習問題の解答と解説 ✨

このドキュメントでは、各演習問題の解答例と詳しい解説を提供するよ！

**使い方**：

- まずは自分で演習に挑戦してみよう
- 詰まったら、該当する解答を見てヒントを得よう
- 解答を見た後は、なぜそう書くのかを理解しよう
- 解答をコピペするだけじゃなく、自分で打ち込んでみよう

---

## 演習 5-1: スプレッド構文の練習

### 学習のポイント

- スプレッド構文（`...`）の基本的な使い方
- 配列の結合、要素の追加
- オブジェクトのマージ、プロパティの更新
- イミュータブルな書き方（元のデータを変更しない）

### 解答例

👉 **実装コード**: [05-01.html](05-01.html)

### コードの解説

#### 1. 配列のマージ

```javascript
const fruits = ['りんご', 'バナナ'];
const vegetables = ['にんじん', 'トマト'];

// スプレッド構文で結合
const allFoods = [...fruits, ...vegetables];
// ['りんご', 'バナナ', 'にんじん', 'トマト']
```

**ポイント**：

- `...fruits` で配列を展開している
- 新しい配列が作られるので、元の配列は変更されない
- 複数の配列を自由な順番で結合できる

**昔の書き方と比較**：

```javascript
// concat()を使う方法
const allFoods = fruits.concat(vegetables);

// 手動でループ
const allFoods = [];
for (let i = 0; i < fruits.length; i++) {
  allFoods.push(fruits[i]);
}
for (let i = 0; i < vegetables.length; i++) {
  allFoods.push(vegetables[i]);
}
```

スプレッド構文の方が簡潔で読みやすい！

#### 2. 配列への要素追加

```javascript
const numbers = [2, 3, 4];

// 先頭と末尾に追加
const newNumbers = [1, ...numbers, 5];
// [1, 2, 3, 4, 5]
```

**ポイント**：

- 元の配列は変更されない（イミュータブル）
- 好きな位置に要素を追加できる
- `[0, ...numbers, 10, 11]` のように複数追加も可能

#### 3. オブジェクトのマージ

```javascript
const defaultSettings = {
  theme: 'light',
  fontSize: 14,
  language: 'ja',
};

const userSettings = {
  fontSize: 18,
  notifications: true,
};

// スプレッド構文でマージ
const finalSettings = { ...defaultSettings, ...userSettings };
// {
//   theme: 'light',
//   fontSize: 18,        ← ユーザー設定で上書きされた
//   language: 'ja',
//   notifications: true  ← 追加された
// }
```

**ポイント**：

- 後に書いたオブジェクトのプロパティが優先される
- 同じキーがあれば上書き、なければ追加
- 元のオブジェクトは変更されない

**順番の重要性**：

```javascript
// ユーザー設定を優先したい場合
const settings1 = { ...defaultSettings, ...userSettings }; // ✅ 正しい

// デフォルトを優先したい場合（通常は使わない）
const settings2 = { ...userSettings, ...defaultSettings }; // デフォルトで上書きされる
```

#### 4. オブジェクトのプロパティ更新

```javascript
const user = {
  id: 1,
  name: '太郎',
  age: 25,
  city: '東京',
};

// 年齢だけ更新
const updatedUser = {
  ...user, // まず全部コピー
  age: 26, // 年齢だけ上書き
};

console.log(user.age); // 25（元のデータは変わってない）
console.log(updatedUser.age); // 26
```

**ポイント**：

- 一部のプロパティだけ変更したい時に便利
- Reactなどのフレームワークでよく使うパターン
- イミュータブルな更新（元のデータを変更しない）

### よくある間違い

#### ❌ 間違い 1: ネストされたオブジェクトのコピー

```javascript
const user = {
  name: '太郎',
  address: { city: '東京' },
};

const copy = { ...user };
copy.address.city = '大阪';

console.log(user.address.city); // '大阪'（元のデータも変わっちゃった！）
```

**原因**：スプレッド構文はシャローコピー（浅いコピー）だから

**修正方法**：

```javascript
// ネストされたオブジェクトもスプレッド
const copy = {
  ...user,
  address: { ...user.address },
};
```

#### ❌ 間違い 2: 配列のメソッドで元の配列を変更

```javascript
const numbers = [3, 1, 4];
const sorted = numbers.sort(); // 元の配列を変更しちゃう！
```

**修正方法**：

```javascript
const sorted = [...numbers].sort(); // コピーしてからソート
```

### バイブコーダー向けヒント

**AIへの指示例**：

```text
「2つの配列をマージした新しい配列を作成してください。
スプレッド構文を使って、元の配列は変更しないようにしてください。」
```

**生成されたコードのチェックポイント**：

- ✅ `...` が使われているか
- ✅ `concat()` や `push()` で元の配列を変更していないか
- ✅ 新しい配列が返されているか

---

## 演習 5-2: 分割代入の練習

### 学習のポイント

- 配列の分割代入
- オブジェクトの分割代入
- 変数名の変更
- デフォルト値の設定
- 残余パターン（...rest）

### 解答例

👉 **実装コード**: [05-02.html](05-02.html)

### コードの解説

#### 1. 配列の分割代入

```javascript
const colors = ['赤', '青', '緑', '黄', '紫'];

// 最初の2つと残りを取得
const [first, second, ...rest] = colors;

console.log(first); // '赤'
console.log(second); // '青'
console.log(rest); // ['緑', '黄', '紫']
```

**ポイント**：

- `...rest` で残りの要素を配列として取得
- 一部の要素だけ取り出すことができる

**スキップもできる**：

```javascript
const [, , third] = colors; // 最初の2つはスキップ
console.log(third); // '緑'
```

#### 2. デフォルト値

```javascript
const [a, b, c = 'デフォルト'] = ['A', 'B'];

console.log(a); // 'A'
console.log(b); // 'B'
console.log(c); // 'デフォルト'（配列に要素がないから）
```

#### 3. オブジェクトの分割代入

```javascript
const user = {
  name: '太郎',
  age: 25,
  city: '東京',
  country: '日本',
};

// 必要なプロパティだけ取り出す
const { name, age, city } = user;

console.log(name); // '太郎'
console.log(age); // 25
console.log(city); // '東京'
```

**ポイント**：

- プロパティ名と変数名が一致している必要がある
- 順番は関係ない（オブジェクトはキーで識別）
- 使わないプロパティは取り出さなくてOK

#### 4. 変数名の変更

```javascript
const { name: userName, age: userAge } = user;

console.log(userName); // '太郎'
console.log(userAge); // 25
// console.log(name);  // エラー！nameという変数は存在しない
```

**構文**：`{ 元のキー名: 新しい変数名 }`

**使いどころ**：

- 変数名が衝突する場合
- より分かりやすい名前にしたい場合

#### 5. デフォルト値の設定

```javascript
const user = {
  name: '太郎',
  age: 25,
  // cityプロパティがない
};

const { name, age, city = '未登録' } = user;

console.log(city); // '未登録'（デフォルト値）
```

#### 6. ネストされたオブジェクトの分割代入

```javascript
const user = {
  name: '太郎',
  address: {
    city: '東京',
    zipCode: '123-4567',
  },
};

const {
  name,
  address: { city, zipCode },
} = user;

console.log(name); // '太郎'
console.log(city); // '東京'
console.log(zipCode); // '123-4567'
// console.log(address); // エラー！addressという変数は作られない
```

**注意**：`address`という変数は作られず、その中身だけが取り出される

**addressも変数として使いたい場合**：

```javascript
const { name, address, address: { city, zipCode } } = user;
// これでaddress変数も作られる
```

#### 7. 関数の引数で分割代入

```javascript
// ❌ 昔の書き方
function displayUser(user) {
  console.log(`名前：${user.name}`);
  console.log(`年齢：${user.age}`);
}

// ✅ モダンな書き方
function displayUser({ name, age, city = '未登録' }) {
  console.log(`名前：${name}`);
  console.log(`年齢：${age}`);
  console.log(`都市：${city}`);
}

displayUser({ name: '太郎', age: 25 });
```

**ポイント**：

- 引数の時点で分割代入
- デフォルト値も設定できる
- コードがすっきりする

### よくある間違い

#### ❌ 間違い 1: プロパティ名のスペルミス

```javascript
const user = { name: '太郎', age: 25 };
const { name, agee } = user; // 'agee'はタイポ

console.log(agee); // undefined（エラーにならないので気づきにくい）
```

**解決策**：

- TypeScriptを使う（型チェックで検出できる）
- コンソールで確認する

#### ❌ 間違い 2: デフォルト値と変数名変更を同時に使う順番

```javascript
// ❌ 間違った順番
const { name = 'ゲスト': userName } = user; // 構文エラー

// ✅ 正しい順番
const { name: userName = 'ゲスト' } = user;
```

**正しい構文**：`{ 元のキー: 新しい名前 = デフォルト値 }`

### バイブコーダー向けヒント

**AIへの指示例**：

```text
「APIから取得したユーザーデータから、name、age、emailを取り出して、
それぞれの変数に代入してください。分割代入を使ってください。
emailがない場合は、デフォルト値として"未登録"を設定してください。」
```

**生成されたコードのチェックポイント**：

- ✅ 分割代入（`const { ... } = ...`）が使われているか
- ✅ デフォルト値が設定されているか
- ✅ ドット記法（`user.name`）ではなく分割代入を使っているか

---

## 演習 5-3: オプショナルチェイニングの練習

### 学習のポイント

- オプショナルチェイニング（`?.`）で安全なアクセス
- Nullish合体演算子（`??`）でデフォルト値
- 2つの組み合わせ
- OR演算子（`||`）との違い

### 解答例

👉 **実装コード**: [05-03.html](05-03.html)

### コードの解説

#### 1. オプショナルチェイニングの基本

```javascript
const user = {
  name: '太郎',
  profile: {
    city: '東京',
  },
};

// 通常のアクセス
console.log(user.profile.city); // '東京'

// profileがない場合
const guest = { name: 'ゲスト' };
// console.log(guest.profile.city); // エラー！Cannot read property 'city' of undefined

// オプショナルチェイニングで安全にアクセス
console.log(guest.profile?.city); // undefined（エラーにならない）
```

**仕組み**：

- `?.` の左側が `null` または `undefined` の場合、`undefined` を返す
- エラーにならない
- それ以降の処理をスキップ

#### 2. 複数階層での使用

```javascript
const user = {
  profile: {
    // contactsがない
  },
};

// 何階層でも使える
const email = user?.profile?.contacts?.email;
console.log(email); // undefined
```

**ポイント**：

- 各階層で `?.` を使える
- どこかで `null` や `undefined` に遭遇したら、そこで止まる

#### 3. メソッド呼び出し

```javascript
const user = {
  greet: function () {
    return 'こんにちは！';
  },
};

const guest = {};

console.log(user.greet?.()); // 'こんにちは！'
console.log(guest.greet?.()); // undefined（エラーにならない）
```

**注意**：`greet?.()`のように、`?.`の後に`()`を付ける

#### 4. 配列要素へのアクセス

```javascript
const users = [{ name: '太郎' }, { name: '花子' }];

console.log(users[0]?.name); // '太郎'
console.log(users[10]?.name); // undefined
```

#### 5. Nullish合体演算子との組み合わせ

```javascript
const user = {
  profile: {
    // cityがない
  },
};

// オプショナルチェイニング + Nullish合体演算子
const city = user?.profile?.city ?? '未登録';
console.log(city); // '未登録'
```

**これが最強の組み合わせ！**

- `?.` で安全にアクセス
- `??` でデフォルト値を設定

#### 6. OR演算子（||）との違い

```javascript
const settings = {
  volume: 0, // 0は有効な値
  theme: '', // 空文字も有効な値
};

// ❌ OR演算子の問題
console.log(settings.volume || 50); // 50（0がfalsyとして扱われる）
console.log(settings.theme || 'light'); // 'light'（空文字がfalsyとして扱われる）

// ✅ Nullish合体演算子
console.log(settings.volume ?? 50); // 0（0は有効な値として扱われる）
console.log(settings.theme ?? 'light'); // ''（空文字は有効な値として扱われる）
```

**違いまとめ**：

| 値          | `\|\|` の結果  | `??` の結果    |
| ----------- | -------------- | -------------- |
| `null`      | デフォルト値   | デフォルト値   |
| `undefined` | デフォルト値   | デフォルト値   |
| `0`         | デフォルト値   | `0` ✅         |
| `''`        | デフォルト値   | `''` ✅        |
| `false`     | デフォルト値   | `false` ✅     |

**使い分け**：

- `??` を基本的に使う（0や空文字も有効な値として扱える）
- 条件分岐で「truthyかどうか」を判定したい場合は `||` を使う

### 実用例：APIレスポンスの処理

```javascript
function displayUserInfo(apiResponse) {
  // 安全にデータを取得して、デフォルト値を設定
  const userName = apiResponse?.data?.user?.name ?? 'ゲスト';
  const userAge = apiResponse?.data?.user?.age ?? 0;
  const userCity = apiResponse?.data?.user?.profile?.city ?? '未登録';

  console.log(`名前：${userName}`);
  console.log(`年齢：${userAge}歳`);
  console.log(`都市：${userCity}`);
}

// 完全なデータ
displayUserInfo({
  data: { user: { name: '太郎', age: 25, profile: { city: '東京' } } },
});
// 名前:太郎、年齢:25歳、都市:東京

// 不完全なデータ
displayUserInfo({ data: {} });
// 名前:ゲスト、年齢:0歳、都市:未登録

// null
displayUserInfo(null);
// 名前:ゲスト、年齢:0歳、都市:未登録
```

### よくある間違い

#### ❌ 間違い 1: オプショナルチェイニングを使いすぎる

```javascript
// 使いすぎ（すべての階層で使う必要はない）
const value = a?.b?.c?.d?.e?.f?.g;

// 本当に必要な箇所だけ使う
// userは必ず存在するが、profileはない場合がある
const city = user.profile?.city ?? '未登録';
```

**ポイント**：

- 本当に `null` や `undefined` の可能性がある箇所だけ使う
- すべてに `?.` を付けると、どこが不確定なのか分からなくなる

#### ❌ 間違い 2: メソッド呼び出しで `()` を忘れる

```javascript
// ❌ 間違い
user.greet?.(); // 構文エラー

// ✅ 正しい
user.greet?.();
```

### バイブコーダー向けヒント

**AIへの指示例**：

```text
「APIレスポンスからユーザーの住所を安全に取得してください。
データ構造：response.data.user.profile.address.city
住所データがない場合もあるので、オプショナルチェイニングとNullish合体演算子を使って、
デフォルト値として"住所未登録"を返してください。」
```

**生成されたコードのチェックポイント**：

- ✅ `?.` が使われているか
- ✅ `??` でデフォルト値が設定されているか
- ✅ 長い if 文ではなく、簡潔に書かれているか

---

## 演習 5-4: 配列メソッドを使ったデータ変換

### 学習のポイント

- map：配列の各要素を変換
- filter：条件に合う要素だけを抽出
- reduce：配列を1つの値にまとめる
- メソッドチェイン：複数のメソッドを組み合わせる

### 解答例

👉 **実装コード**: [05-04.html](05-04.html)

### コードの解説

#### 1. map で変換

```javascript
const products = [
  { id: 1, name: 'ノートPC', price: 120000 },
  { id: 2, name: 'マウス', price: 3000 },
];

// 10%割引を適用
const discounted = products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));
```

**ポイント**：

- `map` は元の配列と同じ長さの新しい配列を返す
- 各要素を変換する
- 元の配列は変更されない

**注意：オブジェクトを返す場合**

```javascript
// ❌ 間違い
products.map((p) => {
  price: p.price * 0.9;
}); // undefinedが返される

// ✅ 正しい：()で囲む
products.map((p) => ({ price: p.price * 0.9 }));

// または、returnを使う
products.map((p) => {
  return { price: p.price * 0.9 };
});
```

#### 2. filter で絞り込み

```javascript
// 価格が10000円以上の商品だけ
const expensive = products.filter((product) => product.price >= 10000);
```

**ポイント**：

- `filter` は条件に合う要素だけを含む新しい配列を返す
- 元の配列より短い配列になる（または同じ長さ、または空）
- 元の配列は変更されない

#### 3. reduce で集計

```javascript
// 合計金額を計算
const total = products.reduce((sum, product) => sum + product.price, 0);

console.log(total); // 123000
```

**reduceの仕組み**：

```javascript
// reduce((累積値, 現在の要素) => 新しい累積値, 初期値)

const sum = [1, 2, 3, 4, 5].reduce((acc, num) => {
  console.log(`累積値: ${acc}, 現在の値: ${num}`);
  return acc + num;
}, 0);

// 累積値: 0, 現在の値: 1  → 0 + 1 = 1
// 累積値: 1, 現在の値: 2  → 1 + 2 = 3
// 累積値: 3, 現在の値: 3  → 3 + 3 = 6
// 累積値: 6, 現在の値: 4  → 6 + 4 = 10
// 累積値: 10, 現在の値: 5 → 10 + 5 = 15
```

**実用例：カテゴリ別にカウント**

```javascript
const products = [
  { name: 'PC', category: '電子機器' },
  { name: 'マウス', category: '周辺機器' },
  { name: 'モニター', category: '電子機器' },
];

const categoryCount = products.reduce((acc, product) => {
  const category = product.category;
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

console.log(categoryCount);
// { '電子機器': 2, '周辺機器': 1 }
```

#### 4. メソッドチェイン

```javascript
// 在庫がある商品で、価格が安い順にソートして、上位3つを表示
const top3 = products
  .filter((p) => p.stock > 0) // 在庫がある
  .sort((a, b) => a.price - b.price) // 価格が安い順
  .slice(0, 3) // 上位3つ
  .map((p) => p.name); // 名前だけ

console.log(top3);
```

**ポイント**：

- 各メソッドは新しい配列を返すので、続けて次のメソッドを呼べる
- 読みやすいように、1行に1メソッドずつ書く
- 処理の順番が重要（filterしてからsortする）

### よくある間違い

#### ❌ 間違い 1: mapで元の配列を変更

```javascript
// ❌ 間違い：元の配列を変更している
products.map((product) => {
  product.price = product.price * 0.9; // 元のオブジェクトを変更！
  return product;
});

// ✅ 正しい：新しいオブジェクトを作る
products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));
```

#### ❌ 間違い 2: reduceの初期値を忘れる

```javascript
// ❌ 危険：初期値がない
const sum = products.reduce((acc, product) => acc + product.price);
// 最初の要素がオブジェクトになって、NaNになる可能性がある

// ✅ 正しい：初期値を設定
const sum = products.reduce((acc, product) => acc + product.price, 0);
```

#### ❌ 間違い 3: forEachの結果を使おうとする

```javascript
// ❌ 間違い：forEachは配列を返さない
const doubled = numbers.forEach((n) => n * 2); // undefined

// ✅ 正しい：mapを使う
const doubled = numbers.map((n) => n * 2);
```

### バイブコーダー向けヒント

**AIへの指示例**：

```text
「商品の配列から、価格が1000円以上の商品だけを抽出し、
価格が安い順にソートして、商品名のリストを作成してください。
filter、sort、mapメソッドをメソッドチェインで組み合わせてください。」
```

**生成されたコードのチェックポイント**：

- ✅ for 文ではなく配列メソッドを使っているか
- ✅ メソッドチェインが適切に使われているか
- ✅ 元の配列を変更していないか（イミュータブルか）

---

## 演習 5-5: オブジェクト操作（スプレッド構文と分割代入の組み合わせ）

### 学習のポイント

- スプレッド構文でオブジェクトを更新
- ネストされたオブジェクトの更新
- 分割代入でプロパティを除外

### 解答例

👉 **実装コード**: [05-05.html](05-05.html)

### コードの解説

#### 1. ユーザー情報の更新

```javascript
const user = {
  id: 1,
  name: '太郎',
  age: 25,
};

// 名前だけ更新
const updatedUser = {
  ...user,
  name: '花子',
};

console.log(user.name); // '太郎'（元のデータは変わってない）
console.log(updatedUser.name); // '花子'
```

**関数にする**：

```javascript
function updateUser(user, updates) {
  return { ...user, ...updates };
}

const updated = updateUser(user, { name: '花子', age: 26 });
```

#### 2. ネストされたオブジェクトの更新

```javascript
const user = {
  id: 1,
  name: '太郎',
  profile: {
    city: '東京',
    bio: 'エンジニアです',
  },
};

// 住所だけ更新したい
const updatedUser = {
  ...user,
  profile: {
    ...user.profile,
    city: '大阪', // 住所だけ変更
  },
};

console.log(user.profile.city); // '東京'（元のデータは変わってない）
console.log(updatedUser.profile.city); // '大阪'
```

**ポイント**：

- ネストされたオブジェクトも `...` でスプレッドする
- 各階層でスプレッド構文を使う

#### 3. オブジェクトから一部を除外

```javascript
const user = {
  id: 1,
  name: '太郎',
  email: 'taro@example.com',
  password: 'secret123',
};

// パスワードを除外したオブジェクトを作る
const { password, ...userWithoutPassword } = user;

console.log(userWithoutPassword);
// {
//   id: 1,
//   name: '太郎',
//   email: 'taro@example.com'
//   // passwordは含まれない
// }
```

**使いどころ**：

- APIレスポンスをクライアントに送る前に、機密情報を除外
- ログに出力する前に、パスワードなどを除外

**複数のプロパティを除外**：

```javascript
const { password, internalId, ...publicUser } = user;
```

#### 4. 複数のデータソースをマージ

```javascript
const defaultSettings = {
  theme: 'light',
  fontSize: 14,
  language: 'ja',
};

const profileSettings = {
  fontSize: 16,
  notifications: true,
};

const userSettings = {
  theme: 'dark',
};

// 優先順位：default < profile < user
const finalSettings = {
  ...defaultSettings,
  ...profileSettings,
  ...userSettings,
};

console.log(finalSettings);
// {
//   theme: 'dark',          ← userSettingsで上書き
//   fontSize: 16,           ← profileSettingsで上書き
//   language: 'ja',         ← defaultSettings
//   notifications: true     ← profileSettings
// }
```

### よくある間違い

#### ❌ 間違い 1: ネストの深いコピーを忘れる

```javascript
// ❌ 間違い：profileの参照がコピーされる
const updated = {
  ...user,
  profile: { city: '大阪' }, // bioが消えちゃう！
};

// ✅ 正しい：既存のprofileもスプレッド
const updated = {
  ...user,
  profile: {
    ...user.profile,
    city: '大阪',
  },
};
```

#### ❌ 間違い 2: 除外する変数を使ってしまう

```javascript
const { password, ...rest } = user;

// password変数には除外された値が入っている
console.log(password); // 'secret123'

// 使わないように注意！
```

### バイブコーダー向けヒント

**AIへの指示例**：

```text
「ユーザーオブジェクトの住所情報だけを更新する関数を作成してください。
ネストされたオブジェクト（profile.address.city）を更新します。
スプレッド構文を使って、元のオブジェクトは変更しないでください。」
```

**生成されたコードのチェックポイント**：

- ✅ 各階層でスプレッド構文が使われているか
- ✅ 元のオブジェクトが変更されていないか
- ✅ 他のプロパティが保持されているか

---

## 演習 5-6: 古いコードをモダンな記法にリファクタリング

### 学習のポイント

- 古い書き方とモダンな書き方の比較
- リファクタリングのポイント
- コードの改善点を見つける力

### 解答例

👉 **実装コード**: [05-06.html](05-06.html)

### リファクタリングのポイント

#### Before（古い書き方）→ After（モダンな書き方）

**1. var → const/let**

```javascript
// Before
var name = '太郎';
var age = 25;

// After
const name = '太郎';
let age = 25; // 再代入する場合のみlet
```

**2. for文 → 配列メソッド**

```javascript
// Before
var adults = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 25) {
    adults.push(users[i].name);
  }
}

// After
const adults = users.filter((user) => user.age >= 25).map((user) => user.name);
```

**3. 文字列結合 → テンプレートリテラル**

```javascript
// Before
var message = 'こんにちは、' + name + 'さん！' + age + '歳ですね。';

// After
const message = `こんにちは、${name}さん！${age}歳ですね。`;
```

**4. Object.assign → スプレッド構文**

```javascript
// Before
var settings = Object.assign({}, defaultSettings, userSettings);

// After
const settings = { ...defaultSettings, ...userSettings };
```

**5. if文でのnullチェック → オプショナルチェイニング**

```javascript
// Before
function getCity(user) {
  if (user && user.profile && user.profile.address) {
    return user.profile.address.city;
  }
  return '不明';
}

// After
function getCity(user) {
  return user?.profile?.address?.city ?? '不明';
}
```

**6. 関数の引数 → 分割代入**

```javascript
// Before
function displayUser(user) {
  var name = user.name;
  var age = user.age;
  console.log(name, age);
}

// After
function displayUser({ name, age }) {
  console.log(name, age);
}
```

### コードの改善効果

**行数の比較**：

- Before：約50行
- After：約20行
- **60%削減！**

**読みやすさ**：

- モダンな記法の方が意図が明確
- ネストが少なくなる
- 変数のスコープが明確

**メンテナンス性**：

- バグが起きにくい（const、イミュータブル）
- 変更箇所が分かりやすい
- チームで開発しやすい

### バイブコーダー向けヒント

**AIへのリファクタリング指示**：

```text
「以下のコードをES6以降のモダンな記法にリファクタリングしてください：
1. varをconstまたはletに変更
2. for文を配列メソッド（filter、map）に変更
3. 文字列結合をテンプレートリテラルに変更
4. Object.assignをスプレッド構文に変更
5. nullチェックをオプショナルチェイニングに変更
6. 関数の引数で分割代入を使用

[古いコードを貼り付け]
```

**チェックポイント**：

- ✅ `var` が残っていないか
- ✅ `for (var i = 0; ...)` が残っていないか
- ✅ `+` での文字列結合が残っていないか
- ✅ `Object.assign` が残っていないか
- ✅ 長い `if (a && a.b && a.b.c)` が残っていないか

---

## 演習 5-7: ユーザープロフィールエディタ（総まとめ）

### 学習のポイント

- モダンJavaScriptのすべての機能を組み合わせる
- 実用的なアプリケーションの構築
- イミュータブルな状態管理

### 解答例

👉 **実装コード**: [05-07.html](05-07.html)

### アーキテクチャのポイント

#### 1. 状態管理（イミュータブル）

```javascript
// グローバル状態
let usersData = [...initialUsers]; // 元のデータはコピー

// 更新する時は、新しい配列を作る
function updateUser(userId, updates) {
  usersData = usersData.map((user) =>
    user.id === userId ? { ...user, ...updates } : user
  );
  render(); // 再レンダリング
}

// 削除する時も、新しい配列を作る
function deleteUser(userId) {
  usersData = usersData.filter((user) => user.id !== userId);
  render();
}

// 追加する時も、新しい配列を作る
function addUser(newUser) {
  usersData = [...usersData, { ...newUser, id: Date.now() }];
  render();
}
```

**ポイント**：

- 元の配列を直接変更しない（push、splice、delete を使わない）
- 常に新しい配列・オブジェクトを作る
- 変更したら `render()` を呼んで画面を更新

#### 2. フィルタリング

```javascript
function getFilteredUsers() {
  let filtered = [...usersData];

  // 都市でフィルタ
  if (selectedCity !== 'all') {
    filtered = filtered.filter((user) => user.profile?.city === selectedCity);
  }

  // 年齢でフィルタ
  if (minAge > 0) {
    filtered = filtered.filter((user) => user.age >= minAge);
  }

  return filtered;
}
```

#### 3. 統計情報の計算

```javascript
function calculateStats() {
  const users = getFilteredUsers();

  // 総ユーザー数
  const totalUsers = users.length;

  // 平均年齢
  const avgAge =
    users.reduce((sum, user) => sum + user.age, 0) / users.length || 0;

  // 都市別の人数
  const cityCounts = users.reduce((acc, user) => {
    const city = user.profile?.city ?? '未登録';
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  return { totalUsers, avgAge, cityCounts };
}
```

#### 4. HTMLの生成（テンプレートリテラル）

```javascript
function renderUserCard(user) {
  const { id, name, age, email } = user;
  const city = user.profile?.city ?? '未登録';
  const bio = user.profile?.bio ?? '';

  return `
    <div class="user-card" data-id="${id}">
      <h3>${name}</h3>
      <p>年齢: ${age}歳</p>
      <p>都市: ${city}</p>
      <p>Email: ${email}</p>
      ${bio ? `<p class="bio">${bio}</p>` : ''}
      <div class="actions">
        <button onclick="editUser(${id})">編集</button>
        <button onclick="deleteUser(${id})">削除</button>
      </div>
    </div>
  `;
}
```

**ポイント**：

- 分割代入で必要なデータを取り出す
- オプショナルチェイニングで安全にアクセス
- Nullish合体演算子でデフォルト値
- 短絡評価で条件付きレンダリング

### 実装のコツ

#### 1. データの流れを理解する

```
ユーザー操作
   ↓
イベントハンドラ
   ↓
状態を更新（イミュータブルに）
   ↓
render()を呼ぶ
   ↓
画面を再描画
```

#### 2. 関数を小さく保つ

```javascript
// ❌ 大きな関数（何でもやる）
function handleSubmit() {
  // 100行のコード...
}

// ✅ 小さな関数に分割
function handleSubmit() {
  const formData = getFormData();
  const validationError = validateFormData(formData);
  if (validationError) {
    showError(validationError);
    return;
  }
  updateUser(selectedUserId, formData);
  closeForm();
}
```

#### 3. エラーハンドリング

```javascript
function updateUser(userId, updates) {
  // バリデーション
  if (!userId) {
    console.error('User ID is required');
    return;
  }

  if (!updates || Object.keys(updates).length === 0) {
    console.error('No updates provided');
    return;
  }

  // 更新処理
  usersData = usersData.map((user) =>
    user.id === userId ? { ...user, ...updates } : user
  );

  render();
}
```

### よくある問題と解決策

#### 問題 1: 元のデータが変更されてしまう

```javascript
// ❌ 間違い
function updateUser(userId, updates) {
  const user = usersData.find((u) => u.id === userId);
  user.name = updates.name; // 元のオブジェクトを変更！
}

// ✅ 正しい
function updateUser(userId, updates) {
  usersData = usersData.map((user) =>
    user.id === userId ? { ...user, ...updates } : user
  );
}
```

#### 問題 2: ネストされたオブジェクトの更新

```javascript
// ❌ 間違い
const updated = {
  ...user,
  profile: { city: '大阪' }, // bioが消える
};

// ✅ 正しい
const updated = {
  ...user,
  profile: {
    ...user.profile,
    city: '大阪',
  },
};
```

#### 問題 3: フィルタ後にレンダリングを忘れる

```javascript
// ❌ 間違い
function filterByCity(city) {
  selectedCity = city;
  // render()を忘れた！画面が更新されない
}

// ✅ 正しい
function filterByCity(city) {
  selectedCity = city;
  render(); // 必ず呼ぶ
}
```

### バイブコーダー向けヒント

**AIへの指示例（機能追加）**：

```text
「ユーザープロフィールエディタに検索機能を追加してください。
- 名前またはメールアドレスで検索できる
- 検索ボックスに入力すると、リアルタイムでフィルタリングされる
- filterメソッドとincludesメソッドを使う
- 既存のコードのスタイルに合わせる（イミュータブル、モダンな記法）」
```

**評価ポイント**：

- ✅ すべての機能が動作する
- ✅ モダンな記法が使われている（var、for文がない）
- ✅ イミュータブルな書き方ができている
- ✅ コードが読みやすい（関数が小さい、命名が明確）
- ✅ エラーハンドリングができている
- ✅ UIが使いやすい

---

## 総まとめ：モダンJavaScriptをマスターしたあなたへ

すべての演習をクリアしたあなたは、もう立派なモダンJavaScriptデベロッパーだ！ 🎉

### 身につけたスキル

- ✅ スプレッド構文でデータを効率的に操作
- ✅ 分割代入でコードを簡潔に書く
- ✅ オプショナルチェイニングで安全なコードを書く
- ✅ 配列メソッドでデータを変換・集計
- ✅ イミュータブルな書き方でバグを防ぐ
- ✅ AIと協働して、効率的に開発する

### 次のステップ

1. **フレームワークを学ぶ**

   - React、Vue、Svelteなどのモダンフレームワーク
   - モダンJavaScriptの知識が直接役立つ

2. **実践プロジェクトを作る**

   - ToDoアプリ、ブログ、SNSクローンなど
   - 学んだ技術をすべて使ってみよう

3. **オープンソースに貢献する**

   - GitHubでコードを読む
   - issueを解決してみる

4. **継続的に学ぶ**
   - JavaScriptは進化し続けている
   - 新しい機能をキャッチアップしよう

**おめでとう！モダンJavaScriptをマスターしたね！これからも楽しくコーディングを続けよう！** 🚀✨
