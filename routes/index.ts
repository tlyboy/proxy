import axios from 'axios'

export default eventHandler(async event => {
  try {
    const query = getQuery(event)
    const params = {}

    for (const key in query) {
      if (key !== 'url') {
        params[key] = query[key]
      }
    }

    const res = await axios({
      url: query.url.toString(),
      params
    })

    return res.data
  } catch (error) {
    return error
  }
})
