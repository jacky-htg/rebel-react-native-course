import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from '../../components/Container';
import Style from './style';

const Register = props => {
  return (
    <Container>
      <View style={Style.container}>
        <Text>Ini {props.text}</Text>
        <View style={Style.inputContainer}>
          <TextInput style={Style.input} />
        </View>
        <Button title={'to Login'} onPress={Actions.login} />
      </View>
    </Container>
  );
};

export default Register;

/* Props datang dari mana?
1. Navigasi
2. Component
3. Redux
*/
