# directives-vue3
常用的vue3自定义指令（只提供了方法，需要自己注册指令）

# Install
NPM:
```
npm i directives-vue3 --save
```

# Usage
```javascript
import { createApp } from "vue";
import { debounce } from 'directives-vue3'

const app = createApp(App);
app.directive("debounce", debounce)
app.mount("#app");

```

```html
<script setup>
const clickFun = () => {
  console.log("点击了")
}
</script>
<template>
  <div v-debounce:500="clickFun">点击防抖函数</div>
</template>
```

# 已有的方法：
### 1.防抖函数
### 2.节流函数
### 3.拖拽
### 4.自动获取焦点