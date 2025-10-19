import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import data from './data';


const BarChart = ({ IsDashBoard = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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


  if (IsDashBoard) {
    return (
      <>
       <Typography 
          color={theme.palette.primary.main} 
          variant={isMobile ? "h5" : "h5"} 
          fontWeight="bold"
          sx={{margin:3}}
        >
          Sales Quantity
        </Typography>
      <Box sx={{ height: "80%", width: "100%" }}>
        <ResponsiveBar
          data={data}
          keys={['Electronics', 'Home Goods', 'Apparel']}
          indexBy="month"
          theme={nivoTheme}

          margin={{ top: 5, right: 10, bottom:50, left: 40 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'paired' }} 
          
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '', 
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
          }}

          enableLabel={false}
          legends={[]}
          
          role="application"
        />
      </Box>
      </>
    );
  }


  return (
    <Box sx={{ p: isMobile ? 2 : 4, height: {xs:'80vh',md:'100vh'}, display: 'flex', flexDirection: 'column', margin: 7, width: {xs:'75vw',md:'90vw'}, marginLeft: isMobile ? 3 : 7 }}>
      
      <Box sx={{ marginLeft: isMobile ? 3 : 7 }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant={isMobile ? "h5" : "h4"} 
          fontWeight="bold"
        >
          Bar Chart
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Monthly Sales Revenue (in thousands)
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 2, height: 'calc(100% - 80px)', width:{xs:'135%' ,md:'115%'}}}>
        <ResponsiveBar
          data={data}
          keys={['Electronics', 'Home Goods', 'Apparel']}
          indexBy="month"
          theme={nivoTheme}
          margin={{ top: 50, right: isMobile ? 30 : 130, bottom: isMobile ? 80 : 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={
            isMobile
              ? [  ]
              : [  ]
          }
          role="application"
        />
      </Box>
    </Box>
  );
};

export default BarChart;
