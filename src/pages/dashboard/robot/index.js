import { Box, Button, Typography, useTheme } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from 'src/@core/components/headers'
import NivoBarChart from 'src/@core/components/nivoBarChart'
import { tokens } from 'src/@core/theme/theme'
import StatBox from 'src/@core/components/StateBox'
import { Player } from '@lottiefiles/react-lottie-player'
import PieChart from 'src/@core/components/PieChart'
import { LoadingButton } from '@mui/lab'

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

  /*return JSON.parse(res)['m2m:uril']*/
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
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const router = useRouter()
  const { params: robotData } = router.query || []
  const testFunction = headers => {}
  const motor = true

  //   const AElist = getApplicationEntityList('http://34.64.221.5:7579')

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
        <Box>
          <LoadingButton
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px'
            }}
            loading={false}
          >
            Call Recycle Robot
          </LoadingButton>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='100px' gap='20px'>
        {/* ROW 1 */}
        <Box justifyContent='space-between' textAlign='center'>
          <Typography
            variant='h5'
            fontWeight='bold'
            sx={{ writingMode: 'vertical-rl', textOrientation: 'upright', color: colors.grey[300], margin: 5 }}
          >
            MOTOR
          </Typography>
        </Box>
        <Box
          gridArea='1/2/2/5'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='F_Left' progress={motor} />
        </Box>
        <Box
          gridArea='1/5/2/8'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='F_Right' subtitle='good' progress={motor} />
        </Box>
        <Box
          gridArea='2/2/3/5'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='B_Left' progress={motor} />
        </Box>
        <Box
          gridArea='2/5/3/8'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='B_Right' progress={motor} />
        </Box>
        <Box gridArea='1/8/3/13'>
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_eHZRuUxa9i.json'
            speed={1}
            autoplay={true}
            loop
            style={{ width: '350px' }}
          />
        </Box>
        {/* ROW 2 */}
        <Box gridArea='3/1/6/8' backgroundColor={colors.primary[400]}>
          <Box mt='25px' p='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box textAlign='center'>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Battery balance & Raspberry CPU/GPU Temperature
              </Typography>
              <Box height='280px' m='-20px 0 0 0'>
                <NivoBarChart isDashboard={true} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box gridArea='4/8/7/13' backgroundColor={colors.primary[400]}>
          <Box mt='25px' p='0 20px' justifyContent='space-between'>
            <Typography textAlign='center' variant='h5' fontWeight='600' color={colors.grey[100]}>
              Weight
            </Typography>
          </Box>
          <PieChart />
        </Box>
        <Box
          gridColumn='1/5'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='Tracking & Camera' progress={motor} />
        </Box>
        <Box
          gridColumn='5/8'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox title='WiFi' progress={motor} />
        </Box>
      </Box>
    </Box>
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
