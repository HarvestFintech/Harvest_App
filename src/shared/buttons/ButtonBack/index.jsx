import React from 'react';
import {StyleSheet} from 'react-native';

import {Button, Icon} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

const ButtonBack = ({text, onPress}) => {
  const navigation = useNavigation();
  const action = onPress || navigation.goBack();

  return (
    <Button
      titleStyle={styles.text}
      title={text && 'Back'}
      type="clear"
      icon={<Icon name="chevron-back" type="ionicon" />}
      onPress={action}
    />
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
