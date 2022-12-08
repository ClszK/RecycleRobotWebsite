import { Box, Typography, useTheme } from '@mui/material'
import spacing from '../theme/spacing'
import { tokens } from '../theme/theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, progress, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width='10%' m='1 20px'>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box sx={{ padding: 5 }}>
          <Typography variant='h6' textAlign='center' fontWeight='bold' sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
          <Typography variant='h6' fontWeight='bold' textAlign='center' sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StatBox
