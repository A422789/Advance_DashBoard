import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import data from './data';

const PieChart = ({ IsDashBoard = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const transformDataForPie = (barData) => {
    const totals = {};
    barData.forEach(monthData => {
      Object.keys(monthData).forEach(key => {
        if (key !== 'month') {
          if (!totals[key]) {
            totals[key] = 0;
          }
          totals[key] += monthData[key];
        }
      });
    });
    return Object.keys(totals).map(key => ({
      id: key,
      label: key,
      value: totals[key],
    }));
  };

  const pieData = transformDataForPie(data);
  const nivoTheme = {
 
    legends: { text: { fill: theme.palette.text.secondary, fontSize: isMobile ? 10 : 12 } },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    },
 
    labels: {
        text: {
            fill: theme.palette.text.primary,
        },
    },
  };

  if (IsDashBoard) {
    return (
      <>
      <Box>
          <Typography 
            color={theme.palette.primary.main} 
            variant="h5"
            fontWeight="bold"
          >
            Campaign
          </Typography>
        </Box>
      <Box sx={{ height: "100%", width: "100%", display: 'flex', flexDirection: 'column' ,padding:isMobile?3:10}}>
        <Box sx={{ flexGrow: 1, height: "100%", width: "100%" }}>
          <ResponsivePie
            data={pieData}
            theme={nivoTheme}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.7}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false} 
            legends={[]}
          />
        </Box>
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
          Pie Chart
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Total Sales Distribution by Category
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 2, height: 'calc(100% - 80px)', width: {xs:'135%' ,md:'115%'} }}>
        <ResponsivePie
          data={pieData}
          theme={nivoTheme}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }} 
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          
         
          enableArcLinkLabels={true} 
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.secondary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          
          enableArcLabels={false} 
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          
   
          legends={
            isMobile
              ? []
              : []
          }
        />
      </Box>
    </Box>
  );
};

export default PieChart;
