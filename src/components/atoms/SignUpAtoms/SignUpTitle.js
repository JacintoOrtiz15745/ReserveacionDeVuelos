import React from 'react';
import {Text} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
const SignUpTitle = () => {
  return <Text testID='signUpTitle' style={styles.title}>{SignUpConstants.SignUpTitle}</Text>;
};

export default SignUpTitle;
