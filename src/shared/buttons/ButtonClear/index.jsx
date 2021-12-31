import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from 'react-native-elements';

const ButtonClear = ({...props}) => {
  return (
    <Button
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
      type="clear"
      {...props}
    />
  );
};

export default ButtonClear;

const styles = StyleSheet.create({
  button: {
    width: 150,
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#F0750A',
    fontSize: 20,
    fontWeight: '600',
  },
});
