import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
