import Image from 'next/image'

const ErrorState = () => (
  <div className="d-flex flex-column" style={{ gap: 50 }}>
    <Image
      src="/errorState.svg"
      alt="Something wrong!"
      width="400px"
      height="400px"
    />
    <h1 className="display-4">Oops! Something went wrong.</h1>
  </div>
)

export default ErrorState
