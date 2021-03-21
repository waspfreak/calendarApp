import React, {useContext, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppContext from '../../context/App/appContext';

const Calendar = (props) => {
  const appContext = useContext(AppContext);
  const {events, getEvents} = appContext;

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  return (
    <div className='col-lg-9'>
      <div>
        <FullCalendar
          initialView='dayGridMonth'
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next  today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay',
          }}
          events={events}
        />
      </div>
    </div>
  );
};

export default Calendar;
