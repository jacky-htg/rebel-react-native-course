const initialState = {
  id: '',
  data: {},
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ID':
      let newState = JSON.parse(JSON.stringify(state));

      newState.id = action.payload;

      return newState;

    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    case 'LOGIN':
      return Object.assign({}, state, {
        data: {
          email: action.payload.email,
        },
        token: action.payload.token,
      });

    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};
