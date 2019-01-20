# remember-scroll
A plugin using localStorage to remember element scroll-position when detached

## Installation
```bash
npm install --save remember-scroll
```
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
  }
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
| pageKey | String | '_page1' | The unique identity of a page |
| maxLength | Number | 5 | remember the max length of the pages, prevent localStorage too big |
