import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import BookingIcon from '../../atoms/BookingAtoms/BookingGoBackIcon';
import BookingTitle from '../../atoms/BookingAtoms/BookingTitle';
import BookingInformation from '../../atoms/BookingAtoms/BookingInformation';
import {BookingConstants} from '../../../utils/Constants';
const BookingFormInformation = ({
  title,
  enabled,
  RouteToGo,
  navigation,
  values,
  dateValues,
}) => {
  return (
    <View style={styles.ContainerInformation}>
      <BookingIcon RouteToGo={RouteToGo} navigation={navigation} />
      {title !== BookingConstants.TitleOrigin && (
        <BookingInformation
          enabled={enabled}
          values={values}
          dateValues={dateValues}
        />
      )}
      <BookingTitle title={title} />
    </View>
  );
};

export default BookingFormInformation;
