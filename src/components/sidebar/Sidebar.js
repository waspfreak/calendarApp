import React, {useContext} from 'react';
import AddEvent from '../modal/AddEvent';
import SelectModal from '../modal/SelectModal';
import AppContext from '../../context/App/appContext';

const Sidebar = (props) => {
  const appContext = useContext(AppContext);
  const {events, selected} = appContext;

  return (
    <div className='col-lg-3'>
      <button
        type='button'
        data-toggle='modal'
        data-target='#add-event'
        className='btn btn-primary btn-block'>
        Create New Event
      </button>

      <div className='m-t-20'>
        <br />
        {events.length > 0
          ? events.map((event, index) => (
              <div
                onClick={() => selected(event)}
                key={event.id + index}
                className={`external-event bg-${event.bgColor}`}
                data-toggle='modal'
                data-target='#selection-modal'>
                {event.title}
              </div>
            ))
          : 'No events Added'}
      </div>
      <AddEvent />
      <SelectModal />
    </div>
  );
};

export default Sidebar;
