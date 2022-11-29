// ** MUI Imports
import Grid from '@mui/material/Grid'

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
import Trophy from 'src/views/dashboard/Trophy'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import Lottie from 'lottie-react'
import test from './../lottie/test.json'
import { height } from '@mui/system'
import { auto } from '@popperjs/core'

const Dashboard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: test,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    height: 50
  }

  return (
    <ApexChartWrapper>
      <Grid>
        <Grid xs={12} width={400}>
          <Lottie animationData={test} />
        </Grid>
        <Grid sm={12}>
          <Trophy />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
