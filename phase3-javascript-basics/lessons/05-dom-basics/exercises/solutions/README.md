# Lesson 5: 基本的なDOM操作 - 解答例と解説 💡

## 基礎編

### 問題 5-1 - 解答例
**解答例**: [05-01.html](05-01.html)

```javascript
const message = document.querySelector('#message');
message.textContent = 'Hello, DOM!';
```

### 問題 5-2 - 解答例
**解答例**: [05-02.html](05-02.html)

```javascript
const box = document.querySelector('#box');
box.style.backgroundColor = 'lightblue';
box.style.height = '100px';
```

### 問題 5-3 - 解答例
**解答例**: [05-03.html](05-03.html)

```javascript
const button = document.querySelector('button');
const paragraph = document.querySelector('p');
button.addEventListener('click', () => {
  paragraph.textContent = 'クリックされました！';
});
```

## 応用編

### 問題 5-4 - 解答例
**解答例**: [05-04.html](05-04.html)

```javascript
const input = document.querySelector('#input');
const output = document.querySelector('#output');
input.addEventListener('input', (e) => {
  output.textContent = e.target.value;
});
```

### 問題 5-5 - 解答例
**解答例**: [05-05.html](05-05.html)

```javascript
const button = document.querySelector('button');
const element = document.querySelector('#target');
button.addEventListener('click', () => {
  element.classList.toggle('highlight');
});
```

### 問題 5-6 - 解答例
**解答例**: [05-06.html](05-06.html)

```javascript
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = '新しい項目';
  list.appendChild(li);
});
```

## チャレンジ編

### 問題 5-7 - 解答例
**解答例**: [05-07.html](05-07.html)

```javascript
let count = 0;
const display = document.querySelector('#count');
document.querySelector('#increment').addEventListener('click', () => {
  count++;
  display.textContent = count;
});
document.querySelector('#decrement').addEventListener('click', () => {
  count--;
  display.textContent = count;
});
document.querySelector('#reset').addEventListener('click', () => {
  count = 0;
  display.textContent = count;
});
```

**Let's vibe and code!** 🎉
