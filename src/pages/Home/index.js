import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import Container from '../../components/Container';
import Style from './style';

const mapStateToProps = state => {
  return {
    email: state.user.data.email,
  };
};

const Home = props => {
  return (
    <Container>
      <View style={Style.container}>
        <Text>Ini Home</Text>
        <Text>Selamat datang {props.email}</Text>
      </View>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  null,
)(Home);
