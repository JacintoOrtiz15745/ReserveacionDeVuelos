import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';
import {connect} from 'react-redux';
import {saveFlightFunction} from '../../../../redux/actions/FlightsActions';
const BookingSubmit = ({navigation, RouteToGo, values, saveFlightFunction}) => {
  return (
    <TouchableOpacity
      testID="BookingBtn"
      style={styles.BookingButton}
      onPress={() => {
        saveFlightFunction(values);
        navigation.navigate(RouteToGo, values);
      }}>
      <Text style={styles.BookingButtonText} testID="BookingBtnTitle">
        {BookingConstants.BtnText}
      </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  saveFlightFunction,
};
export default connect(null, mapDispatchToProps)(BookingSubmit);
