import React, {useState} from 'react';
import {View} from 'react-native';
import BookingFormInformation from '../components/molecules/BookingMolecules/BookingFormInformation';
import BookingForm from '../components/molecules/BookingMolecules/BookingForm';
import {BookingConstants} from '../utils/Constants';
import {styles} from '../styles/BookingStyles';
const BookingDate = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(new Date().toString());
  const {first, second} = route.params;

  return (
    <View style={styles.dateContainer}>
      <BookingFormInformation
        title={BookingConstants.SelectDate}
        RouteToGo={BookingConstants.BookingToRoute}
        navigation={navigation}
        enabled={true}
        values={route.params}
        dateValues={[first, second, selectedValue]}
      />
      <BookingForm
        RouteToGo={BookingConstants.BookingPassengersRoute}
        navigation={navigation}
        date={true}
        setSelectedValue={setSelectedValue}
        values={[first, second, selectedValue]}
      />
    </View>
  );
};

export default BookingDate;
