import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Input} from 'react-native-elements';

const RNInput = props => {
  return (
    <Input
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      labelStyle={styles.label}
      {...props}
    />
  );
};

export default RNInput;

const styles = StyleSheet.create({
  input: {
    color: 'white',
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: '#DBD8FD80',
    borderRadius: 6,
    borderBottomWidth: 0,
  },
  label: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 17,
  },
});
