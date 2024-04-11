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

# 已有的方法（注意：这里只展示了使用的参数及含义，需要自己注册指令）：
### 1.防抖函数：debounce
使用方式：
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
其中的500是限制的时间，单位为毫秒
### 2.节流函数: throttle
使用方式：
```html
<script setup>
const clickFun = () => {
  console.log("点击了")
}
</script>
<template>
  <div v-debounce:500="clickFun">点击节流函数</div>
</template>
```
其中的500是限制的时间，单位为毫秒
### 3.拖拽: drag
使用方式：
```html
<script setup>
const dragRef = ref()
const drapOptions = ref({
  x: 200,   // 弹框的初始left值
  y: 200,   // 弹框的初始top值
  targetRef: dragRef,   // 拖拽的盒子(使用ref)
  targetId: "fjdafla"   // 拖拽的盒子(使用id)
});
</script>

<template>
  <div class="dialog" v-drag="drapOptions">
    <div class="header" ref="dragRef" id="drag_box">弹框标题</div>
    <div class="main" v-debounce:1000="clickContent">内容</div>
  </div>
</template>

<style scoped>
.dialog {
  width: 300px;
  background-color: blue;
  color: #fff;
}
.header {
  height: 80px;
}
.main {
  height: 400px;
}
</style>
```
该指令接收一个对象作为参数，对象的可选项分别是
* x: 元素的style的left值
* y: 元素的style的top值
* targetRef: 可拖拽处的元素的ref
* targetId: 可拖拽处的元素的id

targetRef 和 targetId选其中一个就可以，也可以不传，不传默认整个使用指令的元素全部可以拖拽

### 4.自动获取焦点: focus
```html
<template>
  <div><input type="text" v-focus></div>
</template>
```

