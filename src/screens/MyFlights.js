import React, {useEffect} from 'react';
import {View} from 'react-native';
import FlightsList from '../components/atoms/MyFlightsAtoms/FlightsList';
import MyFlightsTitle from '../components/atoms/MyFlightsAtoms/MyFlightsTitle';
import AddFlightButton from '../components/atoms/MyFlightsAtoms/AddFlightButton';
import {FlightsListConstants} from '../utils/Constants';
import {connect} from 'react-redux';
import {styles} from '../styles/MyFlightsStyles';
import {getFlightsFunction} from '../../redux/actions/FlightsActions';
import firebase from '@react-native-firebase/app';

const MyFlights = ({navigation, getFlightsFunction, flights, auth}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        getFlightsFunction(user.uid);
      }
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <MyFlightsTitle title={FlightsListConstants.myFlightsTitle} />
      <FlightsList flights={flights} />
      <AddFlightButton navigation={navigation} />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    flights: state.FlightsReducedr,
    auth: state.AuthReducer,
  };
};
const mapDispatchToProps = {
  getFlightsFunction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyFlights);
