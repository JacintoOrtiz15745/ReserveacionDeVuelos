import React, {useState} from 'react';
import {View} from 'react-native';
import BookingForm from '../components/molecules/BookingMolecules/BookingForm';
import BookingFormInformation from '../components/molecules/BookingMolecules/BookingFormInformation';
import {styles} from '../styles/BookingStyles';
import {BookingConstants} from '../utils/Constants';

const BookingTo = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(
    BookingConstants.PickerData[0].value,
  );

  return (
    <View style={styles.ScreenContainer}>
      <BookingFormInformation
        title={BookingConstants.TitleDestination}
        enabled={false}
        RouteToGo={BookingConstants.BookingNowRoute}
        navigation={navigation}
        values={route.params}
      />
      <BookingForm
        RouteToGo={BookingConstants.BookingDateRoute}
        navigation={navigation}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        values={[route.params, selectedValue]}
      />
    </View>
  );
};

export default BookingTo;
