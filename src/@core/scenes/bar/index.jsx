import { Box } from '@mui/material'
import Header from 'src/@core/components/headers'
import NivoBarChart from 'src/@core/components/NivoBarChart'

const Bar = () => {
  return (
    <Box m='20px' padding='5'>
      <Header title='Bar Chart' subtitle='Robot status' />
      <Box height='75vh'>
        <NivoBarChart />
      </Box>
    </Box>
  )
}

export default Bar
