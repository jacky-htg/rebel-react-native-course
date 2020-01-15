import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from '../../components/Container';
import Style from './style';
import imageTopBg from '../../assets/images/Blob_BG.png';
import logo from '../../assets/images/logo.png';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const judul = 'Hello again';
  const deskripsi = 'Welcome Back';

  // const onPressChange = () => {
  //   setJudul('Rebelworks');
  // };

  return (
    <View style={Style.container}>
      <View style={Style.imageContainer}>
        <Image style={Style.imageBg} source={imageTopBg} />
        <Image style={Style.logo} source={logo} />
      </View>

      <ScrollView
        style={Style.bottomContainer}
        contentContainerStyle={Style.bottomContentContainer}
        bounces={false}>
        <Text>{judul}</Text>
        <Text>{deskripsi}</Text>

        <View style={Style.inputContainer}>
          <TextInput
            style={Style.input}
            placeholder={'Email'}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={Style.input}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={Style.buttonSignIn} onPress={null}>
          <Text style={Style.textSignIn}>Sign In</Text>
        </TouchableOpacity>

        <Button
          title={'Sign Up'}
          onPress={() => Actions.register({text: judul})}
        />
      </ScrollView>
    </View>
  );
};

export default Login;
