import firebase from '@react-native-firebase/app';

export const useBookingSubmit = (values) => {
  let Origin;
  let Destiny;
  let Dated;
  let DateVal;
  let passengers;
  Origin = values[0][0].split(',');
  Destiny = values[0][1].split(',');
  Dated = values[0][2].split(' ');
  DateVal = `${Dated[1]} ${Dated[2]}, ${Dated[3]}`;
  passengers = values[1];
  return {
    originCity: Origin[0],
    originCountry: Origin[1],
    destinyCity: Destiny[0],
    destinyCountry: Destiny[1],
    date: DateVal,
    passengers,
    user: firebase.auth().currentUser.uid,
  };
};
