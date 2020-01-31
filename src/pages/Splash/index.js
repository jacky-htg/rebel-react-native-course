import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import Style from './style';

const mapStateToProps = state => {
  return {
    token: state.user.token,
  };
};

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      if (props.token) {
        Actions.home();
      } else {
        Actions.login();
      }
    }, 1000);
  }, [props.token]);

  return (
    <View style={Style.container}>
      <Image
        style={{height: 100, width: 100}}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/OLX_Logo.jpg/576px-OLX_Logo.jpg',
        }}
      />
    </View>
  );
};

export default connect(
  mapStateToProps,
  null,
)(Splash);
