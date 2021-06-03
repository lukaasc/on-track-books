import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import { Book } from '../api/types'
import BookCard from './BookCard'
import Empty from './Empty'
import ErrorState from './ErrorState'

type Props = {
  isLoading: boolean
  isError: boolean
  data: Book[]
}

const BookList = ({ isLoading, isError, data }: Props) => {
  if (isLoading) return <Spinner animation="grow" data-testid="spinner" />
  if (isError) return <ErrorState />
  if (!data?.length) return <Empty />

  return (
    <Container
      fluid
      className="d-flex justify-content-between flex-wrap"
      style={{ gap: 20, padding: 0 }}
    >
      {data?.map(({ id, ...restBook }) => (
        <BookCard key={id} {...restBook} />
      ))}
    </Container>
  )
}

export default BookList
