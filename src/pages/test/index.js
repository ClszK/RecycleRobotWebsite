import * as React from 'react'
import Grid from '@mui/material/Grid'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2)

  const handleChange = event => {
    setSpacing(Number(event.target.value))
  }

  return (
    <Box>
    </Box>
  )
}
