import { useRouter } from 'next/router'
import { FormControl, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { useDebouncedCallback } from 'use-debounce'

const SearchBar = () => {
  const { push } = useRouter()

  const onSearch = useDebouncedCallback(
    (searchValue) => push(`/?search=${searchValue}`),
    500
  )

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="search-icon" className="bg-primary text-light">
          <Search />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Search bar"
        placeholder="Type something to start searching..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchBar
