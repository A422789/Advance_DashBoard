import React, { useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import useApi from '../useAPI';
import salesData from './data'; 

const GeographyChart = ({IsDashBoard=false}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const { error, data: geoFeaturesData, request, loading } = useApi();

  useEffect(() => {
    request('GET', 'https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json' );
  }, []); 


  const transformDataForGeo = (barData) => {
    const totals = { Electronics: 0, 'Home Goods': 0, Apparel: 0 };
    barData.forEach(monthData => {
      totals.Electronics += monthData.Electronics;
      totals['Home Goods'] += monthData['Home Goods'];
      totals.Apparel += monthData.Apparel;
    });
    return [
      { id: 'USA', value: totals.Electronics },
      { id: 'DEU', value: totals['Home Goods'] },
      { id: 'CHN', value: totals.Apparel },
      { id: 'BRA', value: 450 },
      { id: 'IND', value: 600 },
      { id: 'AUS', value: 350 },
    ];
  };
  const geoData = transformDataForGeo(salesData);


  const nivoTheme = {
    legends: { text: { fill: theme.palette.text.secondary, fontSize: isMobile ? 10 : 12 } },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    },
  };

  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
        <Typography sx={{ ml: 5 }}>Loading Map Data...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',ml:5 }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }


  
  return (
    <Box sx={{ p: isMobile ? 2 : 4, height:IsDashBoard?'100%':{xs:'80vh',md:'100vh'}, display: 'flex', flexDirection: 'column', margin: IsDashBoard?0:7, width: IsDashBoard?{xs:'75%',md:'90%'}:{xs:'75vw',md:'80vw'}, marginLeft: IsDashBoard?0:isMobile ? 3 : 7 }}>
      
      <Box sx={{ marginLeft: isMobile ? 3 : 7 }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant={IsDashBoard?"h5":isMobile ? "h5" : "h4"} 
          fontWeight="bold"
        >
         {IsDashBoard?'Geography Based Traffic':' Geography Chart'}
        </Typography>
    {IsDashBoard?'':(
          <Typography variant={isMobile ? "body2" : "body1"}>
          Total Annual Sales by Category (Mapped to Countries)
        </Typography>
    )}
      </Box>

      <Box sx={{ flexGrow: 1, mt: 4, height: 'calc(100% - 80px)', width: {xs:'120%' ,md:'115%'},marginLeft:{xs:3}, border: `1px solid ${theme.palette.divider}`, borderRadius: '4px' }}>
        
   
        {geoFeaturesData && (
          <ResponsiveChoropleth
            data={geoData}
            features={geoFeaturesData.features}
            theme={nivoTheme}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, Math.max(...geoData.map(d => d.value)) + 500]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isMobile ? 75 : 150}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#152537"
            legends={
             IsDashBoard?undefined:(
               isMobile 
                ? undefined
                : [
                    {
                      anchor: 'bottom-left',
                      direction: 'column',
                      justify: true,
                      translateX: 20,
                      translateY: -100,
                      itemsSpacing: 0,
                      itemWidth: 94,
                      itemHeight: 18,
                      itemDirection: 'left-to-right',
                      itemTextColor: theme.palette.text.secondary,
                      itemOpacity: 0.85,
                      symbolSize: 18,
                    },
                  ]
             )
            }
          />
        )}
      </Box>
    </Box>
  );
};

export default GeographyChart;
