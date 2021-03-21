import React, {useState, useContext} from 'react';
import moment from 'moment';
import EventForm from './EventForm';
import AppContext from '../../context/App/appContext';

const AddEvent = () => {
  const [color, setColor] = useState('');
  const [eventName, setEventName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const appContext = useContext(AppContext);
  const {addEvent, events, colors} = appContext;

  // const colors = ['Primary', 'Success', 'Info', 'Warning', 'Danger'];
  const colorObj = {
    primary: '#0275d8',
    success: '#5cb85c',
    info: '#5bc0de',
    warning: '#f0ad4e',
    danger: '#d9534f',
  };
  const onCheckBoxChange = (event) => {
    if (event.target.checked === true) {
      setShowTime(true);
      setCheckbox(true);
    } else {
      setShowTime(false);
      setCheckbox(false);
    }
  };

  const inputChange = (event) => {
    setEventName(event.target.value);
  };

  const onInputChange = (propertyName) => (event) => {
    console.log(propertyName);
    console.log(event);
    if (propertyName === 'startdate') {
      setStartDate(event);
    }
    if (propertyName === 'enddate') {
      setEndDate(event);
    }
  };

  const handleChange = (event) => {
    if (event.target.value !== 'Select Color') {
      setColor(event.target.value);
    } else {
      setColor('');
    }
  };

  const createEvent = () => {
    const event = setEvent(events.length + 1);
    //add event to events array using context
    addEvent(event);
    console.log(event);
    reset();
  };

  const setEvent = (id) => {
    let start = '';
    let end = '';
    if (!checkbox) {
      start = `${moment(startDate).format()}`;
      end = `${moment(endDate).format()}`;
    } else {
      start = `${moment(startDate).format('YYYY-MM-DD')}`;
      end = `${moment(endDate).format('YYYY-MM-DD')}`;
    }

    const event = {
      id: id,
      title: eventName,
      start,
      end,
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const reset = () => {
    setColor('');
    setEventName('');
    setCheckbox(false);
    setShowTime(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const closeModal = () => {
    reset();
  };

  return (
    <EventForm
      modalId='add-event'
      title='Add Event'
      closeModal={closeModal}
      eventName={eventName}
      inputChange={inputChange}
      checkbox={checkbox}
      onCheckBoxChange={onCheckBoxChange}
      showTime={showTime}
      startDate={startDate}
      endDate={endDate}
      color={color}
      colors={colors}
      handleChange={handleChange}
      eventType={createEvent}
      onInputChange={onInputChange}
      buttonText='Save'
    />
  );
};

export default AddEvent;
