import {StyleSheet} from 'react-native';
import {colors} from '../Colors';

export const styles = StyleSheet.create({
  myFlightsTitle: {
    color: colors.Purple,
    fontWeight: 'bold',
    fontSize: 35,
  },
  titleContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListContainer: {
    padding: 15,
    height: 520,
  },
  TopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.ligthGray,
    marginTop: 5,
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  fatherContainer: {
    marginBottom: 15,
    borderBottomWidth: 2,
  },
  country: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  city: {
    color: colors.greyTitle,
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  dateTitle: {
    fontWeight: 'bold',
  },
  passengersTitle: {
    fontWeight: 'bold',
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,

    alignSelf: 'center',
    backgroundColor: colors.Purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flexDirection: 'column',
  },
  BookingButton: {
    backgroundColor: colors.Purple,
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
  },
  noFlights:{
    fontSize: 25,
    textAlign: 'center',
    color: colors.Purple
  }
});
