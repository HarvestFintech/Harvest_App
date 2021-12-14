import React from 'react';
import {StyleSheet, Image} from 'react-native';
// import {Image} from 'react-native-elements';

import logo from './logo.png';
import logoText from './logoText.png';

const Logo = ({text}) => {
  let destImg = '';
  text ? (destImg = logoText) : (destImg = logo);
  return (
    <Image
      source={destImg}
      style={[styles.default, text && styles.logoText, !text && styles.logo]}
    />
  );
};

const styles = StyleSheet.create({
  default: {},
  logo: {
    width: 16,
    height: 16,
  },
  logoText: {},
});

export default Logo;
