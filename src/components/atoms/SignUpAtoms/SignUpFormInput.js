import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
import {colors} from '../../../styles/Colors';
const SignUpFormInput = (props) => {
  const {
    inputName,
    value,
    validation,
    errorMessage,
    setFormValues,
    handleChange,
    formValues,
    isValidated,
  } = props;

  return (
    <View>
      <Text style={styles.formText} testID="inputTitle">
        {inputName}
        {!validation && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </Text>
      <TextInput
        testID="input"
        value={value}
        style={[
          styles.textInput,
          {borderColor: !isValidated ? colors.black : colors.Purple},
        ]}
        onChangeText={(text) => handleChange(formValues, setFormValues, text)}
        secureTextEntry={
          inputName === SignUpConstants.PasswordInputTitle ? true : false
        }
      />
      {inputName === SignUpConstants.PasswordInputTitle && (
        <Text style={styles.characters} testID="passwordMsg">
          {SignUpConstants.CharactersMessage}
        </Text>
      )}
    </View>
  );
};

export default SignUpFormInput;
