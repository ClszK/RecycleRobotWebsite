import { tokens } from '../theme/theme'

const getRandom = (min, max) => Math.random() * (max - min) + min

const test = getRandom(30, 50)
const test2 = getRandom(30, 50)

export const mockBarData = [
  {
    sensor: 'Battery',
    battery: 40,
    batteryColor: 'hsl(229, 70%, 50%)'
  },
  {
    sensor: 'CPU',
    cpu: 35,
    cpuColor: 'hsl(111, 70%, 50%)'
  },
  {
    sensor: 'GPU',
    gpu: 24,
    gpuColor: 'hsl(256, 70%, 50%)'
  }
]

export const mockPieData = [
  {
    data: [
      {
        x: 'Weight',
        y: 0
      }
    ]
  }
]
