import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/Colors';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
import {connect} from 'react-redux';
import {signupFunction} from '../../../../redux/actions/AuthActions';

const SignUpButton = ({
  isButtonEnabled,
  formValues,
  signupFunction,
}) => {
  return (
    <TouchableOpacity
      testID="SignUpBtn"
      style={[
        styles.btnSignup,
        {backgroundColor: isButtonEnabled ? colors.Purple : colors.ligthGray},
      ]}
      onPress={() => {
        isButtonEnabled
          ? signupFunction(formValues)
          : alert('Invalid Credentials');
      }}>
      <Text testID="btnTitle" style={styles.btnSignupText}>
        {SignUpConstants.SignUpButton}
      </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signupFunction,
};
export default connect(null, mapDispatchToProps)(SignUpButton);
