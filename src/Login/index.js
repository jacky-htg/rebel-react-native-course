import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Style from './style';

const Login = props => {
  return (
    <View style={Style.container}>
      <Text>Ini Login</Text>
      <View style={Style.inputContainer}>
        <TextInput style={Style.input} />
      </View>
    </View>
  );
};

export default Login;
