import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import Index from './src';
import {name as appName} from './app.json';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
