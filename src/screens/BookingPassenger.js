import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/BookingStyles';
import {BookingConstants} from '../utils/Constants';
import BookingFormPassengers from '../components/molecules/BookingMolecules/BookingFormPassengers';
import BookingFormButtonPassengers from '../components/molecules/BookingMolecules/BookingFormButtonPassengers';
const BookingPassenger = ({route, navigation}) => {
  const [selectedValue, setSelectedValue] = useState('1');
  const values = route.params;

  return (
    <View style={styles.ScreenContainer}>
      <BookingFormPassengers
        values={values}
        dateValues={values}
        passenger={true}
        RouteToGo={BookingConstants.BookingDateRoute}
        navigation={navigation}
      />
      <BookingFormButtonPassengers
        RouteToGo={BookingConstants.BookingDoneRoute}
        navigation={navigation}
        setSelectedValue={setSelectedValue}
        values={[values, selectedValue]}
      />
    </View>
  );
};

export default BookingPassenger;
