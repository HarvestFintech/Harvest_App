import React from 'react';

import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonSimple} from '@shared';

const Register2 = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Register 2</Text>
      </View>
      <ButtonSimple
        label="Next Step"
        onPress={() => navigation.navigate('Register3')}
      />
      <Button
        title="click me"
        onPress={() => navigation.navigate('Register3')}
      />
    </SafeAreaView>
  );
};

export default Register2;
