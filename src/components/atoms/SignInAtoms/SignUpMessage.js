import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
const SignUpMessage = ({navigation}) => {
  return (
    <View style={styles.loginTextContainer} testID="view">
      <Text testID="account">{SignUpConstants.noAccountMsg}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text testID="logIn" style={styles.LogInText}>
          {SignUpConstants.SignUp}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpMessage;
