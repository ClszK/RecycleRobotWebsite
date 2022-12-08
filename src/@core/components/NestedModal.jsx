import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { tokens } from '../theme/theme'
import { Typography, useTheme } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { width } from '@mui/system'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

function ChildModal(props) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id='child-modal-title'>Text in a child modal</h2>
          <p id='child-modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  )
}

export default function NestedModal(props) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [test, setTest] = useState(false)
  const [success, setSuccess] = useState(false)

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 600, height: 400 }}>
          <Box sx={{ width: '100%', height: '45%', padding: 10 }}>
            <Typography variant='h3' textAlign='center'>
              Robot Arrive!!
            </Typography>
          </Box>
          <Typography variant='h6' textAlign='center' sx={{ color: colors.greenAccent[500] }}>
            Complete Working, Click
          </Typography>
          <Box alignItems='center' justifyContent='center' display='flex' sx={{ padding: 15 }}>
            <LoadingButton
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
                width: '30%'
              }}
              loading={test}
              onClick={() => setTest(true)}
            >
            Finish
            </LoadingButton>
          </Box>
          {success && <ChildModal />}
        </Box>
      </Modal>
    </Box>
  )
}
