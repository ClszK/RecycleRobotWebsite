import Card from '@mui/material/Card'
import { useRouter } from 'next/router'

const Robot = () => {
  const router = useRouter()
  const { robotData } = router.query || []

  console.log(router)
  console.log(router.query)

  return <Card></Card>
}

export default Robot

export async function getServerSideProps({ query: { params } }) {
  return {
    props: {
        params
    }
  }
}
