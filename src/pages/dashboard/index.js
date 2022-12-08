import { useRef } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import spacing from 'src/@core/theme/spacing'
import Link from 'next/link'

import { Player } from '@lottiefiles/react-lottie-player'

const robotDatas = [
  {
    name: 'Robot1',
    id: '1',
    imgsrc: 'https://assets9.lottiefiles.com/packages/lf20_wh1si7js.json'
  },
  {
    name: 'Robot2',
    id: '2',
    imgsrc: 'https://assets9.lottiefiles.com/packages/lf20_pmhz1tar.json'
  },
  {
    name: 'Robot3',
    id: '3',
    imgsrc: 'https://assets8.lottiefiles.com/packages/lf20_3flf0dzg.json'
  }
]

const Dashboard = () => {
  const playerRef = useRef([])

  const animationMouseEnterHandler = id => playerRef.current[id].play()
  const animationMouseOutHandler = id => playerRef.current[id].stop()

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item>
        <Grid container spacing={4}>
          {robotDatas.map(index => (
            <Grid key={index.id} item md={4} xs={6}>
              <Link
                passHref
                href={{
                  pathname: '/dashboard/robot',
                  query: { params: JSON.stringify(index) }
                }}
              >
                <Paper
                  sx={[
                    {
                      height: '100%',
                      width: '100%',
                      textAlign: 'center',
                      borderRadius: 2,
                      padding: 3,
                      boxShadow: 5,
                      transition: 'all 0.2s linear'
                    },
                    {
                      '&:hover': {
                        transform: 'scale(1.15)',
                        cursor: 'pointer'
                      }
                    }
                  ]}
                  variant='outlined'
                  onMouseEnter={event => {
                    animationMouseEnterHandler(index.id)
                  }}
                  onMouseLeave={event => {
                    animationMouseOutHandler(index.id)
                  }}
                >
                  {index.name}
                  <Player
                    src={index.imgsrc}
                    speed={1}
                    style={{ height: '160%', width: '100%' }}
                    ref={el => (playerRef.current[index.id] = el)}
                  />
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
