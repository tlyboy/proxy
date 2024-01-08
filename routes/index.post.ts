export default eventHandler(async (event) => {
  const body = await readBody(event)

  const { request, opts } = JSON.parse(body)

  const res = await $fetch(request, opts)

  return res
})
