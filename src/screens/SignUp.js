import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/SignUpStyles';
import Form from '../components/molecules/SignUpMolecules/SignUpForm';
import SignUpTitle from '../components/atoms/SignUpAtoms/SignUpTitle';
import SignUpButtons from '../components/atoms/SignUpAtoms/SignUpButtons';
import {validateInputs} from '../utils/Functions';
const SignUp = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    termsCheckbox: false,
    updatesCheckbox: false,
    validName: true,
    validEmail: true,
    validPassword: true,
    validatedName: false,
    validatedEmail: false,
    validatedPassword: false,
  });
  const validationObject = {
    terms: formValues.termsCheckbox,
    updates: formValues.updatesCheckbox,
    validatedName: formValues.validatedName,
    validatedEmail: formValues.validatedEmail,
    validatedPassword: formValues.validatedPassword,
  };
  return (
    <View style={styles.SignUpContainer} testID="SignUpScreen">
      <SignUpTitle />
      <Form formValues={formValues} setFormValues={setFormValues} />
      <SignUpButtons
        validateInputs={validateInputs}
        validationValues={validationObject}
        formValues={formValues}
        navigation={navigation}
      />
    </View>
  );
};

export default SignUp;
