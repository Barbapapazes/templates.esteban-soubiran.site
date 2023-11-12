export default defineEventHandler(async () => {
  const keys = await useStorage().getKeys()
  const templatesKeys = keys.filter(key => key.startsWith('root:templates'))

  const files = await Promise.all(
    templatesKeys.map(key => useStorage().getItem(key)),
  )

  return files.sort((a, b) => a.name.localeCompare(b.name))
})
