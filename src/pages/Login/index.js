import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from '../../components/Container';
import Style from './style';

const Login = props => {
  return (
    <Container>
      <View style={Style.container}>
        <Text>Ini Login</Text>
        <View style={Style.inputContainer}>
          <TextInput style={Style.input} />
        </View>
        <Button title={'to Register'} onPress={Actions.register} />
      </View>
    </Container>
  );
};

export default Login;
