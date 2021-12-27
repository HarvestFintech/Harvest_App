import React from 'react';
import {StyleSheet} from 'react-native';

import {Text as RNText} from 'react-native-elements';

const Text = ({children, style, dark, ...props}) => {
  return (
    <RNText
      style={[styles.text, dark ? styles.colorDark : styles.colorLight, style]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {},
  colorLight: {
    color: 'white',
  },
  colorDark: {
    color: '#140036',
  },
});
