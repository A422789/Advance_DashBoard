import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { 
  Box, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  useTheme, 
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from '@mui/material';
import useLocalStorage from '../useLocalStorage';

const Calendar = () => {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useLocalStorage('calendarEvents', []);
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [selectedDateInfo, setSelectedDateInfo] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDateInfo(selectInfo);
    setNewEventTitle('');
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedDateInfo(null);
  };

  const handleAddEvent = () => {
    if (newEventTitle && selectedDateInfo) {
      const calendarApi = selectedDateInfo.view.calendar;
      calendarApi.unselect();
      calendarApi.addEvent({
        id: `${Date.now()}-${newEventTitle}`,
        title: newEventTitle,
        start: selectedDateInfo.startStr,
        end: selectedDateInfo.endStr,
        allDay: selectedDateInfo.allDay,
      });
      handleDialogClose();
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const calendarStyles = {
    '--fc-text-color': theme.palette.text.primary,
    '--fc-border-color': theme.palette.divider,
    '.fc .fc-button-primary': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': { backgroundColor: theme.palette.primary.dark },
    },
    '.fc .fc-button-primary:disabled': { backgroundColor: theme.palette.action.disabledBackground },
    '.fc .fc-button-primary:not(:disabled).fc-button-active': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    '--fc-today-bg-color': theme.palette.action.focus,
    '.fc-event': { backgroundColor: theme.palette.info.dark },
  };

  return (

    <Box 
      sx={{ 
        margin:7,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        p: { xs: 2, sm: 3 },
        width:{xs:'65vw',md:'95vw'},
        height: {xs:'calc(105vh - 100px)',md:'calc(100vh - 100px)'} 
      }}
    >
      

      <Paper 
        sx={{ 
          p: 2, 
      
          width: { xs: '120%', md: '25%' },
          height: { xs: 'auto', md: '110%' },
          maxHeight: { xs: '40vh', md: 'none' }, 
          overflow: 'auto',
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          All Events ({currentEvents.length})
        </Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: theme.palette.info.dark,
                color: theme.palette.info.contrastText,
                borderRadius: '4px',
                mb: 1,
                height:'8vh'
              }}
            >
              <ListItemText 
                primary={event.title} 
                secondary={new Date(event.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                secondaryTypographyProps={{ color: 'rgba(255, 255, 255, 0.7)' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

 
      <Paper 
        sx={{ 
          p: { xs: 0, sm: 2 }, 
          ...calendarStyles, 
          overflowX: 'auto', 
          overflowY: 'auto', 
         
          flex: 1,
          width:{xs:'140%',md:'240%'},
          height: {xs:'100%',md:'100%'} 
        }}
      >
        <Box sx={{ minWidth: '700px', minHeight: '650px' }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true} 
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={currentEvents} 
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => {
              const plainEvents = events.map(event => ({
                id: event.id,
                title: event.title,
                start: event.startStr,
                end: event.endStr,
                allDay: event.allDay,
              }));
              setCurrentEvents(plainEvents);
            }}
          />
        </Box>
      </Paper>

  
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddEvent()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddEvent} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
