import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
const BookingText = ({title, subtitle}) => {
  return (
    <View testID="view">
      <Text style={styles.InformationFlightsTitle} testID="title">
        {title}
      </Text>
      <Text style={styles.InformationFlightsSubtitle} testID="subtitle">
        {subtitle}
      </Text>
    </View>
  );
};

export default BookingText;
