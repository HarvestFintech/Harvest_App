import React from 'react';

import {View, Text, Button} from 'react-native';

import {ScreenContainer} from '@shared';

const Register2 = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Register 2</Text>
      </View>
      <Button
        title="click me"
        onPress={() => navigation.navigate('Register3')}
      />
    </View>
  );
};

export default Register2;
