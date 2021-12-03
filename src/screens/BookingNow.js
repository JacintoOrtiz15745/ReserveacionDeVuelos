import React, {useState} from 'react';
import {View} from 'react-native';
import BookingForm from '../components/molecules/BookingMolecules/BookingForm';
import BookingFormInformation from '../components/molecules/BookingMolecules/BookingFormInformation';
import {styles} from '../styles/BookingStyles';
import {BookingConstants} from '../utils/Constants';
const BookingNow = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(
    BookingConstants.PickerData[0].value,
  );
  return (
    <View style={styles.ScreenContainer}>
      <BookingFormInformation
        title={BookingConstants.TitleOrigin}
        RouteToGo={BookingConstants.MyFlightsRoute}
        navigation={navigation}
      />
      <BookingForm
        RouteToGo={BookingConstants.BookingToRoute}
        navigation={navigation}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </View>
  );
};

export default BookingNow;
