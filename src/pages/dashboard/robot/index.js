import { Box, Button, Typography, useTheme } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from 'src/@core/components/headers'
import NivoBarChart from 'src/@core/components/NivoBarChart'
import { tokens } from 'src/@core/theme/theme'
import StatBox from 'src/@core/components/StateBox'
import { Player } from '@lottiefiles/react-lottie-player'
import PieChart from 'src/@core/components/PieChart'
import { LoadingButton } from '@mui/lab'
import { useState, useRef } from 'react'
import NestedModal from 'src/@core/components/NestedModal'

const Robot = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const router = useRouter()
  const { params } = router.query
  const robotData = JSON.parse(params)
  const motor = true

  const lottieRef = useRef()

  const [wait, setWait] = useState(false)
  const [arrival, setArrival] = useState(false)

  //   const AElist = getApplicationEntityList('http://34.64.221.5:7579')

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title={`${robotData.name}'s DASHBOARD`} subtitle='Welcome to your dashboard' />
        <Box>
          <LoadingButton
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px'
            }}
            loading={wait && !arrival}
            onClick={() => {
              setWait(true)
              lottieRef.current.play()
            }}
          >
            Call Recycle Robot
          </LoadingButton>
        </Box>
      </Box>
      {arrival && <NestedModal open={arrival} />}
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
            autoplay={false}
            loop
            style={{ width: '350px' }}
            ref={lottieRef}
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
