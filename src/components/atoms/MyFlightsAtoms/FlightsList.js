import React from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import FlightsListItem from './FlightsListItem';

const FlightsList = ({flights}) => {
  return (
    <View style={styles.ListContainer} testID="listContainer">
      {flights.length > 0 ? (
        <FlatList
          testID="flightsList"
          showsVerticalScrollIndicator={false}
          data={flights}
          keyExtractor={(flight) => flight.id}
          renderItem={({item}) => <FlightsListItem item={item._data} />}
        />
      ) : (
        <Text style={styles.noFlights}>No Flights Yet!</Text>
      )}
    </View>
  );
};

export default FlightsList;
