import {Actions} from 'react-native-router-flux';

export default {
  getPokemon: () => {
    return dispatch => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          return dispatch({
            type: 'GET_POKEMON',
            payload: response,
          });
        });
    };
  },

  login: data => {
    Actions.reset('home');

    return {
      type: 'LOGIN',
      payload: data,
    };
  },

  logout: data => {
    Actions.reset('splash');

    return {
      type: 'LOGOUT',
    };
  },

  getToken: data => {
    return {
      type: 'GET_TOKEN',
      payload: data,
    };
  },

  setId: data => {
    return {
      type: 'SET_ID',
      payload: data,
    };
  },
};
