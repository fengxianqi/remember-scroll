# remember-scroll
[![NPM version](https://img.shields.io/npm/v/remember-scroll.svg)](https://www.npmjs.com/package/remember-scroll)
[![npm download](https://img.shields.io/npm/dt/remember-scroll.svg?style=flat-square)](https://www.npmjs.com/package/remember-scroll)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/remember-scroll/badge)](https://www.jsdelivr.com/package/npm/remember-scroll)
[![license](https://img.shields.io/npm/l/remember-scroll.svg?style=flat-square)](https://github.com/fengxianqi/remember-scroll/blob/master/LICENSE)

English | [中文](https://github.com/fengxianqi/remember-scroll/blob/master/README_ZH-CN.md)

A plugin using localStorage to remember element scroll-position when detached.

## Demo
[examples](https://fengxianqi.github.io/remember-scroll/examples/)

## Installation
```bash
npm i remember-scroll --save
```
CDN
```html
<script src="https://cdn.jsdelivr.net/npm/remember-scroll@0.0.2/dist/scroll-remember.min.js"></script>
```
You can get the latest version on [jsdelivr.com/npm/remember-scroll](https://www.jsdelivr.com/package/npm/remember-scroll)

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

## Options
| Name | Type | Default | Description |
| :--: | :--: | :--: | :--: |
| pageKey | String | '_page1' | A unique identity of the page |
| maxLength | Number | 5 | The max length of page count, prevent localStorage too big |
