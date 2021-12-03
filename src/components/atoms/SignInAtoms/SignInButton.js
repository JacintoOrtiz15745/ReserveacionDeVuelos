import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/Colors';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
import {signinFunction} from '../../../../redux/actions/AuthActions';
import {connect} from 'react-redux';
const SignInButton = ({isButtonEnabled, formValues, signinFunction}) => {
  return (
    <TouchableOpacity
      testID="SignUpBtn"
      style={[
        styles.btnSignup,
        {backgroundColor: isButtonEnabled ? colors.Purple : colors.ligthGray},
      ]}
      onPress={() => {
        isButtonEnabled
          ? signinFunction(formValues)
          : alert('Invalid Credentials');
      }}>
      <Text testID="btnTitle" style={styles.btnSignupText}>
        {SignUpConstants.SignIn}
      </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signinFunction,
};
export default connect(null, mapDispatchToProps)(SignInButton);
