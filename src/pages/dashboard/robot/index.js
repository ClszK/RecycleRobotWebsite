import Card from '@mui/material/Card'
import axios from 'axios'
import { useRouter } from 'next/router'
import TypographyTexts from 'src/views/typography/TypographyTexts'
import TypographyHeadings from 'src/views/typography/TypographyHeadings'
import { Typography } from '@mui/material'

const request = (serverURL, headers, AEname = '', dir = '') => {
  const respone = ''
  axios
    .get(`${serverURL}/Mobius${AEname}${dir}`, {
      headers: headers
    })
    .then(respones => console.log(respones))
    .catch(e => {
      console.log(e)
    })

  return respone
}

const getApplicationEntity = (AEname, serverURL) => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname)
  console.log(res.json())
}

const getContainer = (AEname, dir, serverURL) => {
  const directory = addSlash(dir)

  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': AEname
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname, directory)
  console.log(res.json())
}

const getApplicationEntityList = serverURL => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }

  const res = request(serverURL, header, '?fu=1&ty=2&lim=20')
  console.log(res)
  //return JSON.parse(res)['m2m:uril']
}

const getApplicationEntityRI = (serverURL, AEname) => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname)
  const resJson = res.json()
  const ae_ri = resJson['m2m:ae']['ri']
  console.log(res)

  return ae_ri
}

const getContentInstance = (AEname, dir, serverURL) => {
  const dir2 = addSlash(dir)

  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'SOrigin'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname, dir)

  const con1 = JSON.parse(res)

  return con1['m2m:cin']['con']
}

const addSlash = str => {
  if (str[0] != '/') {
    str = '/' + str
  }

  return str
}

const Robot = () => {
  const router = useRouter()
  const { params: robotData } = router.query || []
  const testFunction = headers => {}

  //   const AElist = getApplicationEntityList('http://34.64.221.5:7579')

  return (
    <Card>
      <Typography>{}</Typography>
    </Card>
  )
}

export default Robot

export async function getServerSideProps({ query: { params } }) {
  return {
    props: {
      params
    }
  }
}
