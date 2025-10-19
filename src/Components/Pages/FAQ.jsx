import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, useTheme } from '@mui/material';

// 1. بيانات وهمية للأسئلة والأجوبة
const faqData = [
  {
    id: 'panel1',
    summary: 'What is this dashboard for?',
    details: 'This dashboard is a comprehensive tool for managing various aspects of your business, including team members, contacts, invoices, and scheduling. It provides a centralized platform for all your administrative needs.',
  },
  {
    id: 'panel2',
    summary: 'How can I add a new user?',
    details: 'You can add a new user by navigating to the "Create User" page from the sidebar. You will need to fill in their personal details, contact information, and assign them a role (Admin, Manager, or User).',
  },
  {
    id: 'panel3',
    summary: 'Can I export data from the charts?',
    details: 'Currently, the charting library used does not support direct export. However, you can take a screenshot of the charts for your reports. We are working on adding an export feature in a future update.',
  },
  {
    id: 'panel4',
    summary: 'How does the calendar work?',
    details: 'The calendar page allows you to view, add, and manage events. You can click on a date to add a new event, or click on an existing event to delete it. All events are saved locally in your browser.',
  },
  {
    id: 'panel5',
    summary: 'What are the different user roles?',
    details: 'There are three main roles: "Admin" has full access to all features. "Manager" can manage teams and projects but cannot change system settings. "User" has limited access, primarily for viewing information.',
  },
  {
    id_of_the_sixth_panel: 'panel6',
    summary: 'Is my data secure?',
    details: 'Yes, for this demo application, all data is stored locally on your machine using your browser\'s Local Storage. No data is sent to any external server, ensuring your privacy.',
  },
  {
    id: 'panel7',
    summary: 'How do I switch to dark mode?',
    details: 'You can switch between light and dark mode by clicking the sun/moon icon located in the top-right corner of the top navigation bar. Your preference will be saved for your next visit.',
  },
];

const FAQ = () => {
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: 3, m: { xs: 5, md: '5% 5%' } ,display:'flex',flexDirection:'column' , gap:2,width:'90%'}}>
      <Box sx={{ mb: 3 }}>
        <Typography color={theme.palette.info.main} variant="h4" fontWeight="bold">
          FAQ
        </Typography>
        <Typography color="text.secondary">
          Frequently Asked Questions Page
        </Typography>
      </Box>
 {faqData.map((item, index) => (
        <Accordion 
          key={item.id}
      
        
          expanded={expanded === item.id} 
          onChange={handleChange(item.id)}
          sx={{ mb: 1 }} 
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography variant="h6" component="span" sx={{ width: '100%' }}>
              {item.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
