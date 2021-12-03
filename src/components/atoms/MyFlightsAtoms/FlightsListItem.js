import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import GenericListItem from './GenericFlightListItem';
import {FlightsListConstants} from '../../../utils/Constants';

const FlightsListItem = ({item}) => {
  return (
    <View style={styles.fatherContainer} testID="view">
      <GenericListItem
        ContainerStyle={styles.TopContainer}
        Title={item.originCity}
        Subtitle={item.destinyCity}
        TitleFont={styles.country}
        SubtitleFont={styles.country}
        Icon={FlightsListConstants.planeIconName}
      />
      <GenericListItem
        ContainerStyle={styles.middleContainer}
        Title={item.originCountry}
        Subtitle={item.destinyCountry}
        TitleFont={styles.city}
        SubtitleFont={styles.city}
      />
      <GenericListItem
        ContainerStyle={styles.bottomContainer}
        Title={item.date}
        Subtitle={`${item.passengers} ${FlightsListConstants.passengers}`}
        TitleFont={styles.dateTitle}
        SubtitleFont={styles.passengersTitle}
      />
    </View>
  );
};

export default FlightsListItem;
