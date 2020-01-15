import {Dimensions} from 'react-native';

export default {
  container: {
    // paddingHorizontal: 30,
  },

  bottomContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
    // borderWidth: 1,
  },

  bottomContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    marginVertical: 20,
  },

  input: {
    height: 40,
    width: Dimensions.get('window').width - 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },

  imageContainer: {
    flex: -1,
    // borderWidth: 1,
  },

  imageBg: {
    width: Dimensions.get('window').width,
    height: 220,
  },

  logo: {
    position: 'absolute',
    bottom: 0,
    left: Dimensions.get('window').width / 2 - 85 / 2,
    // borderWidth: 1,
  },

  buttonSignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    height: 40,
    marginBottom: 10,
    width: Dimensions.get('window').width - 60,
    backgroundColor: 'red',
  },

  textSignIn: {
    color: 'white',
  },
};
