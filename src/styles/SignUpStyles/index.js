import {colors} from '../Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.Purple,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    height: 40,
  },
  SignUpContainer: {
    margin: 10,
    padding: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  formText: {
    marginBottom: 10,
    fontSize: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  btnSignupContainer: {
    marginTop: 15,
  },
  btnSignup: {
    backgroundColor: colors.Purple,
    padding: 12,
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnSignupText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  or: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: colors.ligthGray,
  },
  LogInText: {
    color: colors.Purple,
  },
  loginTextContainer: {
    textAlign: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginTop: 3,
  },
  characters: {
    marginBottom: 20,
  },
  checkboxFather: {
    marginBottom: 15,
  },
  errorMessage: {
    color: colors.red,
  },
  signin: {
    margin: 10,
    padding: 10,
  },
  signinContainer:{
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 450
  }
});
