import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import BookingGoBackIcon from '../../atoms/BookingAtoms/BookingGoBackIcon';
import BookingInformation from '../../atoms/BookingAtoms/BookingInformation';
import BookingTitle from '../../atoms/BookingAtoms/BookingTitle';

const BookingFormPassengers = ({values, dateValues, navigation, RouteToGo}) => {
  return (
    <View style={styles.ContainerFlightInformation}>
      <BookingGoBackIcon navigation={navigation} RouteToGo={RouteToGo} />
      <BookingInformation
        enabled={true}
        values={values}
        dateValues={dateValues}
        passenger={true}
      />
      <BookingTitle title={BookingConstants.Passengers} />
    </View>
  );
};

export default BookingFormPassengers;
