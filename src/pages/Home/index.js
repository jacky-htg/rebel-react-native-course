import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import Container from '../../components/Container';
import logo from '../../assets/images/logo.png';
import {actions} from '../../store';
import Style from './style';

const mapStateToProps = state => {
  console.log(state);
  return {
    email: state.user.data.email,
    pokemonData: state.user.pokemon,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.UserAction.logout()),
    getPokemon: () => dispatch(actions.UserAction.getPokemon()),
  };
};

const Home = props => {
  useEffect(() => {
    props.getPokemon();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <View style={Style.container}>
        <Text>Ini Home</Text>
        <Text>Selamat datang {props.email}</Text>
        <TouchableOpacity onPress={() => props.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      {props.pokemonData && props.pokemonData.sprites && (
        <View>
          <Text>{props.pokemonData.name}</Text>
          <Image
            style={{height: 200, width: 200}}
            source={{uri: props.pokemonData.sprites.front_default}}
            defaultSource={logo}
          />
        </View>
      )}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
