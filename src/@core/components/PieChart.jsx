import { Typography, useTheme } from '@mui/material'
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import Header from './headers'
import Grid from '@mui/material'
import { tokens } from '../theme/theme'
import { mockPieData as data } from './mockData'

const PieChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <ResponsiveRadialBar
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100]
              }
            },
            legend: {
              text: {
                fill: colors.grey[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.grey[100]
              }
            }
          },
          legends: {
            text: {
              fill: colors.grey[100]
            }
          }
        }}
        valueFormat='>'
        startAngle={-90}
        endAngle={90}
        innerRadius={0}
        padding={0.6}
        cornerRadius={2}
        maxValue={100}
        margin={{ top: 70, right: 0, bottom: 0, left: 0 }}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableLabels={true}
        labelsSkipAngle={5}
        labelsRadiusOffset={0.35}
        transitionMode='startAngle'
        isInteractive={false}
        legends={[
          {
            anchor: 'bottom',
            direction: 'column',
            justify: false,
            translateX: 30,
            translateY: -90,
            itemsSpacing: 1,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 40,
            itemTextColor: '#999',
            symbolSize: 30,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </>
  )
}

export default PieChart
