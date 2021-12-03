import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FlightsListItem from '../components/atoms/MyFlightsAtoms/FlightsListItem';
import {styles} from '../styles/BookingStyles';
import {BookingConstants} from '../utils/Constants';
const BookingDone = ({route, navigation}) => {
  return (
    <View style={styles.doneContainer}>
      <View style={styles.doneInfo}>
        <FlightsListItem item={route.params} />
        <Text style={styles.title}>{BookingConstants.doneMessage}</Text>
      </View>
      <TouchableOpacity
        style={styles.BookingButton}
        onPress={() => navigation.navigate(BookingConstants.MyFlightsRoute)}>
        <Text style={styles.BookingButtonText}>{BookingConstants.finish}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingDone;
