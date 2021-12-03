import React from 'react';
import {styles} from '../../../styles/BookingStyles';
import {Picker} from '@react-native-picker/picker';
const BookingPicker = ({data, selectedValue, setSelectedValue}) => {
  return (
    <Picker
      testID="picker"
      selectedValue={selectedValue}
      style={styles.Picker}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}>
      {data.map((value, index) => (
        <Picker.Item
          label={value.label}
          value={value.value}
          key={index}
          testID="item"
        />
      ))}
    </Picker>
  );
};

export default BookingPicker;
