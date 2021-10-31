import React from 'react';

import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Logo, ButtonSimple} from '@shared';

import tw from 'tailwind-react-native-classnames';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-lg text-white`}>
        HARVEST REGISTER PAGE
      </Text>

      <View className="registerForm">
        <TextInput placeholder="user" />
        <TextInput placeholder="pass" />
      </View>
      <ButtonSimple
        label="Next Step"
        onPress={() => navigation.navigate('Register2')}
      />
      <ButtonSimple
        label="to Login"
        onPress={() => navigation.replace('Login')}
      />
      <Logo />
    </SafeAreaView>
  );
};

export default Register;
