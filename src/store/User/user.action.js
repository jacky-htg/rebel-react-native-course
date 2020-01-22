export default {
  login: data => {
    return {
      type: 'LOGIN',
      payload: data,
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
