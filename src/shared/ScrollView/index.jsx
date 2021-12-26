import React from 'react';
import {StyleSheet, ScrollView as RNScrollView} from 'react-native';

const ScrollView = ({children, style, ...props}) => {
  return (
    <RNScrollView style={[style, styles.scrollView]} {...props}>
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
});
