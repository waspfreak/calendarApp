import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventForm = (props) => {
  const {
    modalId,
    title,
    closeModal,
    eventName,
    inputChange,
    checkbox,
    onCheckBoxChange,
    showTime,
    startDate,
    endDate,
    onInputChange,
    color,
    colors,
    handleChange,
    eventType,
    buttonText,
  } = props;

  return (
    <div
      className='modal fade'
      id={modalId}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {title}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}>
              X
            </button>
          </div>
          <div className='modal-body p-3'>
            <form>
              <div className='form-group'>
                <label className='control-label'>Event Title</label>
                <input
                  className='form-control fom-white'
                  placeholder='Enter event title'
                  type='text'
                  name='event-name'
                  value={eventName}
                  onChange={inputChange}
                />
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='checkbox'
                  value={checkbox}
                  checked={checkbox}
                  onChange={onCheckBoxChange}
                />
                <label className='control-label'>
                  All the events(optional)
                </label>
              </div>
              <div className='form-group'>
                <label>Start</label>
                <div className='row'>
                  {!showTime ? (
                    <div className='col-md-12'>
                      <DatePicker
                        showTimeSelect
                        timeFormat='p'
                        timeIntervals={1}
                        dateFormat='Pp'
                        selected={startDate}
                        onChange={onInputChange('startdate')}
                        className='form-control'
                      />
                    </div>
                  ) : (
                    <div className='col-md-12'>
                      <DatePicker
                        selected={startDate}
                        onChange={onInputChange('startdate')}
                        className='form-control'
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className='form-group'>
                <label>End</label>
                <div className='row'>
                  {!showTime ? (
                    <div className='col-md-12'>
                      <DatePicker
                        selected={endDate}
                        onChange={onInputChange('enddate')}
                        showTimeSelect
                        timeFormat='p'
                        timeIntervals={1}
                        dateFormat='Pp'
                        className='form-control'
                      />
                    </div>
                  ) : (
                    <div className='col-md-12'>
                      <DatePicker
                        selected={endDate}
                        onChange={onInputChange('enddate')}
                        className='form-control'
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label'>Choose event color </label>
                <select
                  className='form-control form-white'
                  name='event-color'
                  onChange={handleChange}>
                  <option>Select Color</option>
                  {colors.map((color) => (
                    <option value={color.toLowerCase()} key={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-light '
              data-dismiss='modal'
              onClick={closeModal}>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary save'
              data-dismiss='modal'
              onClick={eventType}
              disabled={!eventName || !startDate || !endDate || !color}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
