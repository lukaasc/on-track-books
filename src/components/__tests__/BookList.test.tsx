import { render, screen } from '@testing-library/react'
import BookList from '../BookList'

const data = [
  {
    id: 2086,
    book_author: ['Ανώνυμος'],
    book_title: 'Ο Αλέξανδρος ο Μακεδών',
    book_publication_year: 1529,
    book_publication_country: 'Ιταλία',
    book_publication_city: 'Βενετία',
    book_pages: 104,
  },
  {
    id: 2060,
    book_author: ['Ανώνυμος'],
    book_title:
      'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
    book_publication_year: 1548,
    book_publication_country: 'Ιταλία',
    book_publication_city: 'Βενετία',
    book_pages: 32,
  },
  {
    id: 2087,
    book_author: ['Ανώνυμος'],
    book_title: 'Ο Αλέξανδρος ο Μακεδών',
    book_publication_year: 1553,
    book_publication_country: 'Ιταλία',
    book_publication_city: 'Βενετία',
    book_pages: 104,
  },
  {
    id: 2061,
    book_author: ['Ανώνυμος'],
    book_title:
      'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των Ρωμαίων μεγάλου Βελισαρίου',
    book_publication_year: 1554,
    book_publication_country: 'Ιταλία',
    book_publication_city: 'Βενετία',
    book_pages: 0,
  },
]

describe('BookList', () => {
  it('should render a spinner when loading', async () => {
    render(<BookList data={data} isLoading={true} isError={false} />)

    expect(await screen.findByTestId('spinner')).toBeInTheDocument()
  })

  it('should render error message when in error state', async () => {
    render(<BookList data={data} isLoading={false} isError={true} />)

    const errorImage = await screen.findByAltText(/something wrong/i)
    const errorMessage = screen.getByRole('heading', {
      name: /oops! something went wrong./i,
    })

    expect(errorImage).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })

  it(`should render empty state message when there's no data`, async () => {
    render(<BookList data={[]} isLoading={false} isError={false} />)

    const emptyImage = await screen.findByAltText(/no results to show!/i)
    const emptyMessage = screen.getByRole('heading', {
      name: /nothing here to see!/i,
    })

    expect(emptyImage).toBeInTheDocument()
    expect(emptyMessage).toBeInTheDocument()
  })

  it(`should render list of books`, async () => {
    render(<BookList data={data} isLoading={false} isError={false} />)

    const bookCards = await screen.findAllByTestId('book-card')

    expect(bookCards).toHaveLength(4)

    bookCards.forEach((card) => {
      expect(card).toHaveTextContent(/Publication City/i)
      expect(card).toHaveTextContent(/Publication Country/i)
      expect(card).toHaveTextContent(/Publication Year/i)
      expect(card).toHaveTextContent(/Pages/i)
    })
  })
})
