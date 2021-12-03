import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {SIGNOUT, SIGNUP, SIGNUP_FAILURE, SIGNUP_GOOGLE, SIGN_IN} from './types';
export const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};

export const signupFailure = (message) => {
  return {
    type: SIGNUP_FAILURE,
    payload: message,
  };
};
export const signupFunction = (values) => {
  const {email, password} = values;
  return (dispatch) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signup(user.user));
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(signupFailure('That email address is already in use!'));
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          dispatch(signupFailure('That email address is invalid!'));
          console.log('That email address is invalid!');
        }
      });
  };
};

export const signupGoogle = (user) => {
  return {
    type: SIGNUP_GOOGLE,
    payload: user,
  };
};
export const signupGoogleFunction = () => {
  return async (dispatch) => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential);
    const currentUser = await GoogleSignin.getCurrentUser();
    dispatch(signupGoogle(currentUser.user));
  };
};

export const signout = () => {
  return {type: SIGNOUT};
};

export const signoutFunction = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        dispatch(signout());
      });
  };
};

export const signin = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signinFunction = (values) => {
  const {email, password} = values;
  return (dispatch) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signin(user.user));
        console.log('User account logged in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(signupFailure('That email address is already in use!'));
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          dispatch(signupFailure('That email address is invalid!'));
          console.log('That email address is invalid!');
        }
      });
  };
};
