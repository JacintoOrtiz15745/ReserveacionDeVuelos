import React from 'react';
import {Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles';

const BookingTitle = (props) => {
  return <Text style={styles.FlightTitle} testID='title'>{props.title}</Text>;
};

export default BookingTitle;
