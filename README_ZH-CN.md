# remember-scroll
[English](https://github.com/fengxianqi/remember-scroll) | 中文


一个使用`localStorage`来记住页面浏览位置的插件。若当前浏览器不支持`localStorage`，将自动降级插件不生效。

使用时，将为当前站点记住用户的浏览位置，用户离开或关闭页面后，再次打开该页面时，将自动滚动到上一次离时的浏览位置。

为了防止用户浏览过多页面导致该站点的`localStorage`过大，可以通过```maxLength```设置缓存的最大页面数量，默认值是5，即只记录最多5个页用户最新浏览的页面，。

需要注意的是，最好能为每个不同的页面设置```pageKey```参数，表示该页面的唯一标识。

## 安装
```bash
npm install --save remember-scroll
```
CDN
```html
<script src="https://cdn.jsdelivr.net/npm/remember-scroll@0.0.1/dist/scroll-remember.min.js"></script>
```
你可以在 [jsdelivr.com/npm/remember-scroll](https://www.jsdelivr.com/package/npm/remember-scroll) 获取到最新的版本
## 使用
通过 `<script>` 直接使用
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
  }
  </script>
</body>
</html>
```
ES6 module语法
```javascript
import RememberScroll from 'remember-scroll'

new RememberScroll()
```

## 选项
| Name | Type | Default | Description |
| :--: | :--: | :--: | :--: |
| pageKey | String | '_page1' | The unique identity of a page |
| maxLength | Number | 5 | remember the max length of the pages, prevent localStorage too big |

## 原理
通过监听```window.onscroll```事件，防抖处理后将用户的```scrollTop ```位置记录在`localStorage`中，生成一条类似这样的记录：
```
[{pageKey: '_page1',y: 100},{pageKey: '_page2', y: '20'}]
```
在页面初始化时，将读取`localStorage`的值，检查当前页面的`pageKey`是否一致，若一致则将页面的滚动条位置自动滚动到响应的`y`值。

