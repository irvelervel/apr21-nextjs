import { useRouter } from 'next/router'

const SingleBook = () => {
  const router = useRouter()
  console.log(router.query)
  return <h2>Single book page!</h2>
}

export default SingleBook
