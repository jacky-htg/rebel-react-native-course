import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import Login from './src/Login';
import Register from './src/Register';

const App = props => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
