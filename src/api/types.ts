/* eslint-disable camelcase */

export type Book = {
  book_author: string[]
  book_pages: number
  book_publication_city: string
  book_publication_country: string
  book_publication_year: number
  book_title: string
  id: number
}

export type ApiParams = {
  page: number
  itemsPerPage: number
  filters: { type: 'all'; values: string[] }[]
}
