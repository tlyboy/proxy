# proxy

🛠️ Proxy

## 使用说明

### axios

```js
import axios from 'axios'

const res = await axios.post('https://proxy.tlyboy.dev/', {
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
})

console.log(res.data)
```

### fetch

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

### ofetch

```js
import { ofetch } from 'ofetch'

const res = await ofetch('https://proxy.tlyboy.dev/', {
  method: 'post',
  body: {
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
  },
})

console.log(res)
```

### docker

```sh
docker run -d --name proxy -p 3000:3000 tlyboy/proxy
```

### compose.yml

```yaml
services:
  proxy:
    image: tlyboy/proxy
    restart: unless-stopped
    network_mode: host
    environment:
      - PORT=3000
```
