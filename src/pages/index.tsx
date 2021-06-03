import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import useBooksApi from '../api/useBooksApi'
import BookList from '../components/BookList'
import BooksPagination from '../components/BooksPagination'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import styles from '../styles/App.module.scss'

const App = () => {
  const { data, isLoading, isError, page, itemsPerPage } = useBooksApi()

  const { books, count } = data ?? {}

  return (
    <Container fluid className={styles.container}>
      <Head>
        <title>Books Tracker</title>
        <meta name="description" content="List of paginated books" />
      </Head>

      <header>
        <Jumbotron fluid className="bg-light">
          <Container>
            <Header />
            <SearchBar />
          </Container>
        </Jumbotron>
      </header>

      <main className="d-flex justify-content-center">
        <BookList isLoading={isLoading} isError={isError} data={books} />
      </main>

      <footer className="d-flex justify-content-center py-5">
        <BooksPagination
          isLoading={isLoading}
          itemsPerPage={itemsPerPage}
          page={page}
          totalCount={count}
        />
      </footer>
    </Container>
  )
}

export default App
