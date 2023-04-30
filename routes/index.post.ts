import axios from 'axios'

export default eventHandler(async event => {
  try {
    const body = await readBody(event)
    const res = await axios(body)

    return res.data
  } catch (error) {
    return error
  }
})
