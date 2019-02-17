# remember-scroll
[![NPM version](https://img.shields.io/npm/v/remember-scroll.svg)](https://www.npmjs.com/package/remember-scroll)
[![npm download](https://img.shields.io/npm/dt/remember-scroll.svg?style=flat-square)](https://www.npmjs.com/package/remember-scroll)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/remember-scroll/badge)](https://www.jsdelivr.com/package/npm/remember-scroll)
[![license](https://img.shields.io/npm/l/remember-scroll.svg?style=flat-square)](https://github.com/fengxianqi/remember-scroll/blob/master/LICENSE)

English | [中文](https://github.com/fengxianqi/remember-scroll/blob/master/README_ZH-CN.md)

A plugin using localStorage to remember element scroll-position when detached.

## Demo
[demo](https://fengxianqi.github.io/remember-scroll/examples/)

## Installation
```bash
npm i remember-scroll --save
```
CDN
```html
<script src="https://cdn.jsdelivr.net/npm/remember-scroll@latest/dist/remember-scroll.min.js"></script>
```
You can get the latest version on [jsdelivr.com](https://www.jsdelivr.com/package/npm/remember-scroll).

## Usage
Direct `<script>` Include
```html
<html>
<head>
  <meta charset="utf-8">
  <title>remember-scroll examples</title>
</head>
<body>
  <script src="../dist/remember-scroll.js"></script>
  <script>
    new RememberScroll({
      pageKey: 'page1',
      maxLength: 5
    })
  </script>
</body>
</html>
```
ES6 module
```javascript
import RememberScroll from 'remember-scroll'

new RememberScroll()
```

Use in Vue
```vue
<template>
  <div class="normal">
    <p v-for="item in 100" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'

export default {
  name: 'normal',
  created () {
    this.rememberScroll = new RememberScroll({
      pageKey: 'your_page_key'
    })
  }
}
</script>
```

If your page data is async, you can init `RememberScroll` in the async function, such as,
```vue
<template>
  <div class="home">
    <p v-for="item in ele" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'
export default {
  name: 'home',
  data () {
    return {
      ele: [],
      rememberScroll: null
    }
  },
  created () {
    // async get data.
    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        this.ele.push(i)
      }
      // init
      this.rememberScroll = new RememberScroll({
        pageKey: 'home'
      })
    }, 2000)
  }
}
</script>
```

## Options
| Name | Type | Default | Description |
| :--: | :--: | :--: | :--: |
| pageKey | String | '_page1' | A unique identity of the page |
| maxLength | Number | 5 | The max length of page count, prevent localStorage too big |
