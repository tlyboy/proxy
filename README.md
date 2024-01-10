# proxy

🛠️ Proxy

## 使用说明

```js
const response = await fetch('https://proxy.tlyboy.dev/', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // https://github.com/unjs/ofetch
    request: 'https://www.bing.com/HPImageArchive.aspx',
    opts: {
      method: 'get',
      query: {
        format: 'js',
        idx: 0,
        n: 1,
        mkt: 'zh-CN',
      },
    },
  }),
})

const json = await response.json()

console.log(json)
```
