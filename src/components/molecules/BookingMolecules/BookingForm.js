import React from 'react';
import {View} from 'react-native';
import BookingPicker from '../../atoms/BookingAtoms/BookingPicker';
import BookingButton from '../../atoms/BookingAtoms/BookingButton';
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';
import CalendarPicker from 'react-native-calendar-picker';
const BookingForm = ({
  navigation,
  RouteToGo,
  selectedValue,
  setSelectedValue,
  values,
  date,
}) => {
  return (
    <View style={!date ? styles.ContainerForm : styles.dateForm}>
      {!date ? (
        <BookingPicker
          data={BookingConstants.PickerData}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ) : (
        <CalendarPicker
          selectedStartDate={new Date()}
          onDateChange={(date) => setSelectedValue(date.toString())}
        />
      )}
      <BookingButton
        navigation={navigation}
        RouteToGo={RouteToGo}
        selectedValue={selectedValue}
        values={values}
        date={date}
      />
    </View>
  );
};

export default BookingForm;
