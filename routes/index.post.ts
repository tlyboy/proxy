export default eventHandler(async (event) => {
  const { request, opts } = await readBody(event)

  const res = await $fetch(request, opts)

  return res
})
