/* eslint-disable import/no-anonymous-default-export */
import {ADD_EVENT, GET_EVENTS, SELECT_EVENT} from '../type';

export default (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    default:
      return state;
  }
};
