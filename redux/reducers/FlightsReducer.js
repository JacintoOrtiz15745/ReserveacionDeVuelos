import {SAVE_FLIGHT, GET_FLIGHTS} from '../actions/types';
const initialState = {
  flights: [],
};

function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_FLIGHT:
      return [...state, action.payload];
    case GET_FLIGHTS:
      return action.payload;
    default:
      return state;
  }
}

export default flightsReducer;
