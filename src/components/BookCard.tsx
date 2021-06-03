/* eslint-disable camelcase */

import { Card } from 'react-bootstrap'
import { Book } from '../api/types'

type Props = Omit<Book, 'id'>

const BookCard = ({
  book_author,
  book_pages,
  book_publication_city,
  book_publication_country,
  book_publication_year,
  book_title,
}: Props) => (
  <Card
    bg="light"
    style={{ width: '18rem' }}
    className="mb-2"
    data-testid="book-card"
  >
    <Card.Header className="bg-primary text-light">{book_title}</Card.Header>
    <Card.Body>
      <Card.Title>{book_author}</Card.Title>
      <Card.Text>Publication City: {book_publication_city}</Card.Text>
      <Card.Text>Publication Country: {book_publication_country}</Card.Text>
      <Card.Text>Publication Year: {book_publication_year}</Card.Text>
      <Card.Text>Pages: {book_pages}</Card.Text>
    </Card.Body>
  </Card>
)

export default BookCard
