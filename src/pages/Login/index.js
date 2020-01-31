import React, {useState, useEffect} from 'react';
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
import {connect} from 'react-redux';

import Style from './style';
import imageTopBg from '../../assets/images/Blob_BG.png';
import logo from '../../assets/images/logo.png';
import {actions} from '../../store';

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.user.token,
    userData: state.user.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(actions.UserAction.login(data)),
  };
};

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const judul = 'Hello again';
  const deskripsi = 'Welcome Back';

  const onPressLogin = () => {
    props.login({
      email: email,
      password: password,
      token: '123123123',
    });
  };

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
            value={email}
            placeholder={'Email'}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={Style.input}
            value={password}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={Style.buttonSignIn} onPress={onPressLogin}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
