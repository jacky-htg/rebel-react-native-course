import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from '../../components/Container';
import Style from './style';

const Register = props => {
  return (
    <Container>
      <View style={Style.container}>
        <Text>Ini Register</Text>
        <View style={Style.inputContainer}>
          <TextInput style={Style.input} />
        </View>
        <Button title={'to Login'} onPress={Actions.pop} />
      </View>
    </Container>
  );
};

export default Register;
