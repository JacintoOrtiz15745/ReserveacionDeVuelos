import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import GoogleSignUp from './GoogleSignUp';
import {SignUpConstants} from '../../../utils/Constants';
import SignUpButton from './SignUpButton';
import {signUpSubmit} from '../../../utils/Functions';
import LoginMessage from './LoginMessage';
const SignUpButtons = ({
  validationValues,
  formValues,
  validateInputs,
  navigation,
}) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  useEffect(() => {
    const res = validateInputs(validationValues);
    setIsButtonEnabled(res);
  }, [validationValues]);
  return (
    <View style={styles.btnSignupContainer} testID="view">
      <SignUpButton
        isButtonEnabled={isButtonEnabled}
        formValues={formValues}
        signUpSubmit={signUpSubmit}
      />
      <Text style={styles.or}>{SignUpConstants.OR}</Text>
      <GoogleSignUp />
      <LoginMessage navigation={navigation} />
    </View>
  );
};

export default SignUpButtons;
