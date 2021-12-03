import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import BookingScrollPicker from '../../atoms/BookingAtoms/BookingScrollPicker';
import BookingSubmit from '../../atoms/BookingAtoms/BookingSubmit';
import {useBookingSubmit} from '../../../hooks';
const BookingFormButtonPassengers = ({
  setSelectedValue,
  values,
  navigation,
  RouteToGo,
}) => {
  const BookingValues = useBookingSubmit(values);

  return (
    <View style={styles.ContainerForm}>
      <BookingScrollPicker setSelectedValue={setSelectedValue} />
      <BookingSubmit
        RouteToGo={RouteToGo}
        navigation={navigation}
        values={BookingValues}
      />
    </View>
  );
};

export default BookingFormButtonPassengers;
