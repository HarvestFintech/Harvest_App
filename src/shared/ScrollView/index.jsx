import React from 'react';
import {StyleSheet, ScrollView as RNScrollView} from 'react-native';

const ScrollView = ({children, style, centerX, fullscreen, ...props}) => {
  return (
    <RNScrollView
      style={[style, styles.scrollView, fullscreen && styles.fullscreen]}
      contentContainerStyle={[centerX && styles.centerX]}
      {...props}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: -30,
    paddingHorizontal: 30,
  },
  centerX: {
    alignItems: 'center',
  },
  fullscreen: {
    minHeight: 500,
  },
});
