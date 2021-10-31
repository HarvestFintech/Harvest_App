import React from 'react';

import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonSimple} from '@shared';

const Register3 = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Register 3</Text>
      </View>
      <ButtonSimple
        label="Next Step"
        onPress={() => navigation.navigate('Onboarding')}
      />
    </SafeAreaView>
  );
};

export default Register3;
