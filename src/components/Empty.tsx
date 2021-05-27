import Image from 'next/image'

const Empty = () => (
  <div className="d-flex flex-column" style={{ gap: 50 }}>
    <Image
      src="/noResult.svg"
      alt="No results to show!"
      width="400px"
      height="400px"
    />
    <h1 className="display-4">Nothing here to see!</h1>
  </div>
)

export default Empty
