import {
  signup,
  signupFailure,
  signout,
  signupGoogle,
} from '../../../redux/actions/AuthActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Render correctly', () => {
  const mockStore = configureMockStore([thunk]);
  let store;
  store = mockStore({user: null});
  const user = {name: 'juan', id: 1};
  test('signup action is working as expected', async () => {
    const a = await store.dispatch(signup(user));
    const expectedActions = [{type: 'SIGNUP', payload: {name: 'juan', id: 1}}];
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('signup_failure action is working as expected', async () => {
    await store.dispatch(signupFailure('error'));
    const expectedActions = [
      {type: 'SIGNUP', payload: {name: 'juan', id: 1}},
      {type: 'SIGNUP_FAILURE', payload: 'error'},
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  test('signup google action is working as expected', async () => {
    const user = {name: 'juan', id: 1};
    await store.dispatch(signupGoogle(user));
    const expectedActions = [
      {type: 'SIGNUP', payload: {name: 'juan', id: 1}},
      {type: 'SIGNUP_FAILURE', payload: 'error'},
      {type: 'SIGNUP_GOOGLE', payload: {name: 'juan', id: 1}},
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  test('signout action is working as expected', async () => {
    await store.dispatch(signout());
    const expectedActions = [
      {type: 'SIGNUP', payload: {name: 'juan', id: 1}},
      {type: 'SIGNUP_FAILURE', payload: 'error'},
      {type: 'SIGNUP_GOOGLE', payload: {name: 'juan', id: 1}},
      {type: 'SIGNOUT'},
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
