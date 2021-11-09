import React from 'react';
import {StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenContainer = ({children}) => (
  <SafeAreaView style={styles.contain}>{children}</SafeAreaView>
);

export default ScreenContainer;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
});
