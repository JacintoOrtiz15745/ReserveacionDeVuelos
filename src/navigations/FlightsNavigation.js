import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MyFlights from '../screens/MyFlights';
import BookingNow from '../screens/BookingNow';
import BookingTo from '../screens/BookingTo';
import BookingPassenger from '../screens/BookingPassenger';
import BookingDate from '../screens/BookingDate';
import BookingDone from '../screens/BookingDone';
const Stack = createStackNavigator();

const FlighsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="MyFlights">
      <Stack.Screen name="MyFlights" component={MyFlights} />
      <Stack.Screen name="BookingNow" component={BookingNow} />
      <Stack.Screen name="BookingTo" component={BookingTo} />
      <Stack.Screen name="BookingDate" component={BookingDate} />
      <Stack.Screen name="BookingPassenger" component={BookingPassenger} />
      <Stack.Screen name="BookingDone" component={BookingDone} />
    </Stack.Navigator>
  );
};

export default FlighsNavigation;
