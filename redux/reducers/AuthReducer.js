import {
  SIGNUP,
  SIGNOUT,
  SIGNUP_FAILURE,
  SIGNUP_GOOGLE,
  SIGN_IN,
} from '../actions/types';
const initalState = {
  user: null,
  message: '',
};
function AuthReducer(state = initalState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        message: '',
        user: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    case SIGNUP_GOOGLE:
      return {
        message: '',
        user: action.payload,
      };
    case SIGNOUT:
      return {
        message: '',
        user: null,
      };
    case SIGN_IN:
      return {
        message: '',
        user: action.payload,
      };
    default:
      return state;
  }
}

export default AuthReducer;
