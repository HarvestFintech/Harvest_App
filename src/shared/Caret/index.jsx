import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icon} from 'react-native-elements';

import {Text} from '@shared';

const ArrowUp = () => (
  <Icon
    iconStyle={styles.icon}
    color="#02D7A4"
    name="caret-up"
    type="ionicon"
    size={15}
  />
);
const ArrowDown = () => (
  <Icon
    iconStyle={styles.icon}
    color="#E73552"
    name="caret-down"
    type="ionicon"
    size={15}
  />
);

const Caret = ({value, hideValue, hideSymbol}) => {
  return (
    <View style={styles.container}>
      {value > 0 ? <ArrowUp /> : <ArrowDown />}
      {!hideValue && (
        <Text>
          {!hideSymbol && value > 0 && <Text>+</Text>}
          {value}%
        </Text>
      )}
    </View>
  );
};

export default Caret;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 20,
  },
  icon: {
    marginRight: 3,
  },
});
