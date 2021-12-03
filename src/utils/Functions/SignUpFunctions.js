export const handleInputNameChange = (state, setState, newValue) => {
  if (newValue.length < 3) {
    setState({
      ...state,
      name: newValue,
      validName: false,
      validatedName: false,
    });
  } else {
    setState({...state, name: newValue, validName: true, validatedName: true});
  }
};

const emailRegex = /^\S+@\S+\.\S+$/;
export const handleInputEmailChange = (state, setState, newValue) => {
  if (!emailRegex.test(newValue)) {
    setState({
      ...state,
      email: newValue,
      validEmail: false,
      validatedEmail: false,
    });
  } else {
    setState({
      ...state,
      email: newValue,
      validEmail: true,
      validatedEmail: true,
    });
  }
};

export const handleEmailChange = (state, setState, newValue) => {
  setState({
    ...state,
    email: newValue,
  });
};
export const handlePasswordChange = (state, setState, newValue) => {
  setState({
    ...state,
    password: newValue,
  });
};
export const handleTermsCheckboxMark = (state, setState, newValue) => {
  setState({...state, termsCheckbox: newValue});
};
export const handleUpdatesCheckboxMark = (state, setState, newValue) => {
  setState({...state, updatesCheckbox: newValue});
};
export const handleInputPasswordChange = (state, setState, newValue) => {
  if (newValue.length < 7) {
    setState({
      ...state,
      password: newValue,
      validPassword: false,
      validatedPassword: false,
    });
  } else {
    setState({
      ...state,
      password: newValue,
      validPassword: true,
      validatedPassword: true,
    });
  }
};

export const validateInputs = (validationObject) => {
  const {
    terms,
    updates,
    validatedName,
    validatedEmail,
    validatedPassword,
  } = validationObject;
  if (
    terms === true &&
    updates === true &&
    validatedName === true &&
    validatedEmail === true &&
    validatedPassword === true
  ) {
    return true;
  } else {
    return false;
  }
};
