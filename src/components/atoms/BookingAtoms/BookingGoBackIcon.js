import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const BookingGoBackIcon = ({navigation, RouteToGo}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteToGo)}
      testID="GoBackBtn">
      <Icon name="left" color={colors.Purple} size={30} testID="GoBackIcon" />
    </TouchableOpacity>
  );
};

export default BookingGoBackIcon;
