import axios from 'axios'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { ApiParams, Book } from './types'

const API_KEY = 'fetch-books'
const baseUrl = process.env.baseUrl
const ITEMS_PER_PAGE = 20

export type BooksApiData = {
  books: Book[]
  count: number
}

const fetchData = async ({
  page = 1,
  search = '',
}: {
  page: number
  search: string
}): Promise<BooksApiData> => {
  const params: ApiParams = {
    page,
    itemsPerPage: 20,
    filters: [
      {
        type: 'all',
        values: [search],
      },
    ],
  }

  return await axios
    .post<BooksApiData>(`${baseUrl}/api/books`, params)
    .then((res) => res.data)
}

const useBooksApi = () => {
  const { query } = useRouter()

  const { page: pageQuery, search } = query
  const page = parseInt((pageQuery as string) || '1')

  const response = useQuery<BooksApiData>(
    [API_KEY, page, search],
    () => fetchData({ page, search: search as string }),
    { enabled: !!page }
  )

  return {
    ...response,
    page,
    itemsPerPage: ITEMS_PER_PAGE,
  }
}
export default useBooksApi
