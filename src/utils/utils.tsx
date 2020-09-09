export const createLinkForPaginationControls = (link: string) => {
  if (!link) return null
  const array = link.split('/')
  array.splice(4, 0, '/')
  return array.slice(-2).join('/')
}
