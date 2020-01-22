import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import {Redux} from './src/store';

const App = props => {
  return (
    <Redux>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={Login} initial />
          <Scene key="register" component={Register} title="Register" />
        </Stack>
      </Router>
    </Redux>
  );
};

export default App;
