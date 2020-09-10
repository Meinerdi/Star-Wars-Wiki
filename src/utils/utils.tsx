import axios from 'axios'

export const createLinkForPaginationControls = (link: string) => {
  if (!link) return null
  const array = link.split('/')
  array.splice(4, 0, '/')
  return array.slice(-2).join('/')
}

export const createThumbnailResponseDispatcher = (
  arrayOfEndpoints: string[],
  actionCreator: any
) => {
  const arrayOfRequests = arrayOfEndpoints.map((request: any) =>
    axios.get(request)
  )

  axios.all(arrayOfRequests).then(
    axios.spread((...responses) => {
      const arrOfStructuredData = responses.map((resp: any) => {
        if (resp.data.title) return resp.data.title
        return resp.data.name
      })
      actionCreator(arrOfStructuredData)
    })
  )
}
