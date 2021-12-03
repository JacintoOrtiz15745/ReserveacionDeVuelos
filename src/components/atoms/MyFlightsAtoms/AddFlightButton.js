import React from 'react';
import {TouchableOpacity} from 'react-native';
import PlusIcon from 'react-native-vector-icons/Entypo';
import {styles} from '../../../styles/MyFlightsStyles';
import {colors} from '../../../styles/Colors';
import {BookingConstants} from '../../../utils/Constants';
const AddFlightButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.circleButton}
      testID="view"
      onPress={() => navigation.navigate(BookingConstants.BookingNowRoute)}>
      <PlusIcon name="plus" color={colors.white} size={50} />
    </TouchableOpacity>
  );
};

export default AddFlightButton;
