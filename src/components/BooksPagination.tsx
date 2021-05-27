import { useRouter } from 'next/router'
import Pagination from 'react-bootstrap/Pagination'

type Props = {
  isLoading: boolean
  page: number
  totalCount: number
  itemsPerPage: number
}

const BooksPagination = ({
  isLoading,
  page,
  totalCount,
  itemsPerPage,
}: Props) => {
  const { push, query } = useRouter()

  if (isLoading) return null

  const onClick = (page: number) =>
    push({ pathname: '/', query: { ...query, page } })

  const numberOfPages = Math.ceil(totalCount / itemsPerPage)

  return (
    <Pagination>
      <Pagination.First onClick={() => onClick(1)} />
      <Pagination.Prev
        onClick={() => onClick(page - 1)}
        disabled={page === 1}
      />
      {page > 1 ? <Pagination.Ellipsis /> : null}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < numberOfPages ? <Pagination.Ellipsis /> : null}

      <Pagination.Next
        onClick={() => onClick(page + 1)}
        disabled={page === numberOfPages}
      />
      <Pagination.Last onClick={() => onClick(numberOfPages)} />
    </Pagination>
  )
}

export default BooksPagination
