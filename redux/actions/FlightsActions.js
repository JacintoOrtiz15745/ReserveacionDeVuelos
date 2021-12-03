import firestore from '@react-native-firebase/firestore';
import {SAVE_FLIGHT, GET_FLIGHTS} from './types';

export const saveFlight = (flight) => {
  return {
    type: SAVE_FLIGHT,
    payload: flight,
  };
};

export const saveFlightFunction = (values) => {
  return async (dispatch) => {
    try {
      const res = await firestore().collection('Flights').add(values);
      const flight = await res.get();
      dispatch(saveFlight(flight));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getFlights = (flights) => {
  return {
    type: GET_FLIGHTS,
    payload: flights,
  };
};

export const getFlightsFunction = (user) => {
  return (dispatch) => {
    firestore()
      .collection('Flights')
      .where('user', '==', user)
      .get()
      .then((querySnapshot) => {
        dispatch(getFlights(querySnapshot.docs));
      });
  };
};
