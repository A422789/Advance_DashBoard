import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { ResponsiveLine } from '@nivo/line'; 
import data from './data'; 

const LineChart = ({IsDashBoard=false}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

 
  const transformDataForLine = (barData) => {
    const series = [
      { id: 'Electronics', data: [] },
      { id: 'Home Goods', data: [] },
      { id: 'Apparel', data: [] },
    ];

    barData.forEach(monthData => {
      series[0].data.push({ x: monthData.month, y: monthData.Electronics });
      series[1].data.push({ x: monthData.month, y: monthData['Home Goods'] });
      series[2].data.push({ x: monthData.month, y: monthData.Apparel });
    });

    return series;
  };

  const lineData = transformDataForLine(data);

  const nivoTheme = {
    axis: {
      ticks: { text: { fill: theme.palette.text.secondary, fontSize: isMobile ? 10 : 12 } },
      legend: { text: { fill: theme.palette.text.secondary, fontSize: isMobile ? 12 : 14 } },
    },
    legends: { text: { fill: theme.palette.text.secondary, fontSize: isMobile ? 10 : 12 } },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    },
  };

  return (
    <Box sx={{ p: isMobile ? 2 : 4, height:IsDashBoard?'100%':{xs:'80vh',md:'100vh'}, display: 'flex', flexDirection: 'column', margin: IsDashBoard?0:7, width: IsDashBoard?'100%':{xs:'75vw',md:'90vw'}, marginLeft: IsDashBoard?(0):isMobile ? 3 : 7 }}>
      
      {!IsDashBoard?(
        <>
        <Box sx={{ marginLeft: isMobile ? 3 : 7, }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant={isMobile ? "h5" : "h4"} 
          fontWeight="bold"
        >
          Line Chart 
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Monthly Sales Trend 
        </Typography>
      </Box>
        </>
      ): (
         <>
        <Box sx={{ marginLeft: isMobile ? 3 : 7 ,height:'3%' }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant={isMobile ? "h5" : "h4"} 
          fontWeight="bold"
        >
          Revenue Generated
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
         $59,342.32
        </Typography>
      </Box>
        </>
      )}

      <Box sx={{ flexGrow: 1, mt: IsDashBoard?1:2, height: 'calc(100% - 80px)', width: IsDashBoard?'100%':{xs:'135%' ,md:'100%'}}}>
        
       
        <ResponsiveLine
          data={lineData} 
          theme={nivoTheme}
          margin={{ top: 50, right:IsDashBoard?0: isMobile ? 30 : 130, bottom: isMobile ? 80 : 50, left: IsDashBoard?30:60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isMobile ? '' : 'Month',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={
            isMobile
              ? [
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateY: 60,
                    itemsSpacing: 2,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 12,
                  },
                ]
              : [
                  {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                  },
                ]
          }
          role="application"
        />
      </Box>
    </Box>
  );
};

export default LineChart;
