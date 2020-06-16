import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Router from './router';
import configStore from './redux/configStore';
import {Loading} from './components';

const store = configStore();

const MainApp = () => {
  const loading = useSelector(state => state.loadingReducer.loading);
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
