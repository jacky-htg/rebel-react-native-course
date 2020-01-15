import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from '../../components/Container';
import Style from './style';
import imageTopBg from '../../assets/images/Blob_BG.png';
import logo from '../../assets/images/logo.png';

const Login = props => {
  // const [judul, setJudul] = useState('Hello again');
  // const [deskripsi, setDeskripsi] = useState('Welcome Back');

  let judul = 'Hello again';
  let deskripsi = 'Welcome Back';

  // const onPressChange = () => {
  //   setJudul('Rebelworks');
  // };

  return (
    <Container style={Style.container}>
      <View style={Style.imageContainer}>
        <Image style={Style.imageBg} source={imageTopBg} />
        <Image style={Style.logo} source={logo} />
      </View>

      <View style={Style.bottomContainer}>
        <Text>{judul}</Text>
        <Text>{deskripsi}</Text>

        <View style={Style.inputContainer}>
          <TextInput style={Style.input} />
          <TextInput style={Style.input} />
        </View>

        <TouchableOpacity style={Style.buttonSignIn}>
          <Text style={Style.textSignIn}>Sign In</Text>
        </TouchableOpacity>

        <Button
          title={'to Register'}
          onPress={() => Actions.register({text: judul})}
        />
      </View>
    </Container>
  );
};

export default Login;
