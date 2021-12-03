import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SignUpFormInput from '../components/atoms/SignUpAtoms/SignUpFormInput';
import {SignUpConstants} from '../utils/Constants/SignUpConstants';
import {styles} from '../styles/SignUpStyles';
import SignInButton from '../components/atoms/SignInAtoms/SignInButton';
import SignUpMessage from '../components/atoms/SignInAtoms/SignUpMessage';
import {handleEmailChange, handlePasswordChange} from '../utils/Functions';
const SignIn = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.signin}>
      <Text style={styles.title}>{SignUpConstants.SignIn}</Text>
      <View style={styles.signinContainer}>
        <SignUpFormInput
          inputName={SignUpConstants.EmailInputTitle}
          value={formValues.email}
          validation={true}
          errorMessage={SignUpConstants.emailErrorMessage}
          setFormValues={setFormValues}
          handleChange={handleEmailChange}
          formValues={formValues}
          isValidated={true}
        />
        <SignUpFormInput
          inputName={SignUpConstants.PasswordInputTitle}
          value={formValues.password}
          validation={true}
          errorMessage={SignUpConstants.passwordErrorMessage}
          setFormValues={setFormValues}
          handleChange={handlePasswordChange}
          formValues={formValues}
          isValidated={true}
        />
      </View>
      <SignInButton
        formValues={formValues}
        isButtonEnabled={true}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
      <SignUpMessage navigation={navigation} />
    </View>
  );
};

export default SignIn;
