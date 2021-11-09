import React from 'react';
import {StyleSheet} from 'react-native';

import {Button, Icon} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      type="clear"
      icon={<Icon name="chevron-back" type="ionicon" />}
      onPress={navigation.goBack()}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({});
