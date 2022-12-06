// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'
import axios from 'axios'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import { height } from '@mui/system'
import { auto } from '@popperjs/core'
import { Player } from '@lottiefiles/react-lottie-player'

const Dashboard = () => {
  const buttonClickHandler = () => {
    axios
      .get('http://34.64.221.5:7579/Mobius/robot1/la', {
        headers: {
          'Accept': 'application/json',
          'X-M2M-RI': '12345',
          'X-M2M-Origin': 'SOrigin'
        }
      })
      .then(respones => {
        console.log(respones.data)
      })
  }

  return (
    <ApexChartWrapper>
      <Grid>
        <Grid spacing={0} direction='column' alignItems='center' justifyContent='center' style={{ margin: '30px' }}>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_6e0qqtpa.json'
            className='player'
            speed={1}
            style={{ height: '300px', width: '300px' }}
          />
        </Grid>
      </Grid>
      <Stack direction='row' alignItems='center' justifyContent='center'>
        <Button onClick={buttonClickHandler} variant='contained' style={{ width: '250px', height: '75px' }}>
          Call Robot!
        </Button>
      </Stack>
    </ApexChartWrapper>
  )
}

export default Dashboard
