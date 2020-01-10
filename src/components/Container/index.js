import React from 'react';
import {SafeAreaView} from 'react-native';

const Container = props => {
  return <SafeAreaView>{props.children}</SafeAreaView>;
};

export default Container;
