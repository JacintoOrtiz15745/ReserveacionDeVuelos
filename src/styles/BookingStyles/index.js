import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../Colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  FlightTitle: {
    color: colors.black,
    fontSize: 35,
    fontWeight: 'bold',
    width: 300,
    marginBottom: 80,
  },
  BookingTextInput: {
    height: 70,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: colors.ligthGray,
  },
  BookingButton: {
    backgroundColor: colors.Purple,
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
  },
  BookingButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  ScreenContainer: {
    margin: 20,
  },
  ContainerInformation: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  ContainerFlightInformation: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  ContainerForm: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '42%',
  },
  dateForm: {
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  BookingInformation: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: colors.ligthGray,
    height: 70,
  },
  InformationFlightsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  InformationFlightsSubtitle: {
    color: colors.ligthGray,
    marginTop: 5,
  },
  left: {
    alignSelf: 'flex-start',
  },
  plane: {
    alignSelf: 'center',
  },
  BookingInf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList: {
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '50%',
    height: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  Picker: {
    width: '100%',
    height: 50,
  },
  dateContainer: {
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 525,
  },
  dateTextContainer: {
    flexDirection: 'column',
  },
  dateText: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 200,
  },
  bold: {
    fontWeight: 'bold',
  },
  doneContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  doneInfo: {
    paddingTop: height * 0.2,
  },
});
