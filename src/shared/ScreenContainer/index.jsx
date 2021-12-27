import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Logo} from '@shared';

const ScreenContainer = ({children, centerY, centerX, logo}) => (
  <SafeAreaView
    style={[
      styles.container,
      logo ? styles.wologo : styles.wlogo,
      centerY && styles.centerVertical,
      centerX && styles.centerHorizontal,
    ]}>
    {!logo ? (
      children
    ) : (
      <>
        <View style={styles.wlogo}>{children}</View>
        <View style={[styles.containerLogo]}>
          <Logo text />
        </View>
      </>
    )}
  </SafeAreaView>
);

export default ScreenContainer;

const styles = StyleSheet.create({
  wologo: {
    flex: 1,
  },
  wlogo: {
    flex: 5,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#140036',
    paddingHorizontal: 30,
  },
  containerLogo: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
});
