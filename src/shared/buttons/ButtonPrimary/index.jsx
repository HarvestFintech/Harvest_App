import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from 'react-native-elements';

const ButtonPrimary = ({...props}) => {
  return (
    <Button
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
      {...props}
    />
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F0750A',
    width: 150,
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
