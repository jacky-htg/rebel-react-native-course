import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

const App = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
      </Stack>
    </Router>
  );
};

export default App;
