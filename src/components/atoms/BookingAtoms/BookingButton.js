import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';

const BookingButton = ({
  navigation,
  RouteToGo,
  selectedValue,
  values,
  date,
}) => {
  let paramsValue = {first: selectedValue};
  values &&
    values[1] &&
    (paramsValue = {
      first: values[0].first,
      second: values[1],
    });
  date && (paramsValue = [values[0], values[1], values[2]]);
  return (
    <TouchableOpacity
      testID="BookingBtn"
      style={styles.BookingButton}
      onPress={() => navigation.navigate(RouteToGo, paramsValue)}>
      <Text style={styles.BookingButtonText} testID="BookingBtnTitle">
        {BookingConstants.BtnText}
      </Text>
    </TouchableOpacity>
  );
};

export default BookingButton;
