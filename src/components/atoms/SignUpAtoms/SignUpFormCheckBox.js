import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import CheckBox from '@react-native-community/checkbox';
const SignUpFormCheckBox = (props) => {
  const {
    checkboxMessage,
    checkBoxValue,
    formValues,
    setFormValues,
    handleChange,
  } = props;
  return (
    <View style={styles.checkBoxContainer} testID='view'>
      <CheckBox
        testID='checkBox'
        value={checkBoxValue}
        onValueChange={(value) =>
          handleChange(formValues, setFormValues, value)
        }
      />
      <Text>{checkboxMessage}</Text>
    </View>
  );
};

export default SignUpFormCheckBox;
