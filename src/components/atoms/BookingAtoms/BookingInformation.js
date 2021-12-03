import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {colors} from '../../../styles/Colors';
import BookingText from './BookingText';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBookingValues} from '../../../hooks';
const BookingInformation = ({enabled, values, dateValues, passenger}) => {
  const {DateVal, Destiny, Origin} = useBookingValues(values, dateValues);

  return (
    <View>
      <View style={styles.BookingInformation}>
        <View style={styles.BookingInf}>
          <BookingText title={Origin[0]} subtitle={Origin[1]} />
          <Icon
            style={styles.plane}
            name="md-airplane-sharp"
            color={colors.Purple}
            size={25}
          />
        </View>
        {enabled && <BookingText title={Destiny[0]} subtitle={Destiny[1]} />}
      </View>
      {passenger && <Text style={styles.bold}>{DateVal}</Text>}
    </View>
  );
};

export default BookingInformation;
