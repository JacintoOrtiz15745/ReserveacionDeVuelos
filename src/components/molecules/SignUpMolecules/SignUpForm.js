import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
  import SignUpFormInput from '../../atoms/SignUpAtoms/SignUpFormInput';
import SignUpFormCheckBox from '../../atoms/SignUpAtoms/SignUpFormCheckBox';
import {
  handleInputNameChange,
  handleInputEmailChange,
  handleInputPasswordChange,
  handleTermsCheckboxMark,
  handleUpdatesCheckboxMark,
} from '../../../utils/Functions';
const SignUpForm = (props) => {
  const {formValues, setFormValues} = props;
  return (
    <View testID='signUpForm'>
      <SignUpFormInput
        inputName={SignUpConstants.NameInputTitle}
        value={formValues.name}
        validation={formValues.validName}
        errorMessage={SignUpConstants.nameErrorMessage}
        setFormValues={setFormValues}
        handleChange={handleInputNameChange}
        formValues={formValues}
        isValidated={formValues.validatedName}
      />
      <SignUpFormInput
        inputName={SignUpConstants.EmailInputTitle}
        value={formValues.email}
        validation={formValues.validEmail}
        errorMessage={SignUpConstants.emailErrorMessage}
        setFormValues={setFormValues}
        handleChange={handleInputEmailChange}
        formValues={formValues}
        isValidated={formValues.validatedEmail}
      />
      <SignUpFormInput
        inputName={SignUpConstants.PasswordInputTitle}
        value={formValues.password}
        validation={formValues.validPassword}
        errorMessage={SignUpConstants.passwordErrorMessage}
        setFormValues={setFormValues}
        handleChange={handleInputPasswordChange}
        formValues={formValues}
        isValidated={formValues.validatedPassword}
      />
      <View style={styles.checkboxFather}>
        <SignUpFormCheckBox
          checkBoxValue={formValues.termsCheckbox}
          formValues={formValues}
          setFormValues={setFormValues}
          checkboxMessage={SignUpConstants.TermsCheckboxTitle}
          handleChange={handleTermsCheckboxMark}
        />
        <SignUpFormCheckBox
          checkBoxValue={formValues.updatesCheckbox}
          formValues={formValues}
          setFormValues={setFormValues}
          checkboxMessage={SignUpConstants.UpdatesCheckboxTitle}
          handleChange={handleUpdatesCheckboxMark}
        />
      </View>
    </View>
  );
};

export default SignUpForm;
