import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import GoogleIcon from '../../../assets/images/google.png';
import {SignUpConstants} from '../../../utils/Constants';
import {signupGoogleFunction} from '../../../../redux/actions/AuthActions';
import {connect} from 'react-redux';
const GoogleSignUp = ({signupGoogleFunction}) => {
  return (
    <TouchableOpacity
      style={styles.btnSignup}
      testID="GoogleSignUp"
      onPress={signupGoogleFunction}>
      <Image
        testID="GoogleIcon"
        source={GoogleIcon}
        style={[styles.googleIcon, {marginLeft: -75}]}
      />
      <Text style={[styles.btnSignupText, {marginLeft: 50}]} testID="btnTitle">
        {SignUpConstants.GoogleSignUpButton}
      </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signupGoogleFunction,
};
export default connect(null, mapDispatchToProps)(GoogleSignUp);
