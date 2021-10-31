import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import tw from 'tailwind-react-native-classnames';

import {Logo, ButtonSimple} from '@shared';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(({userInfo}) => userInfo);

  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-lg text-white`}>HARVEST LOGIN PAGE</Text>

      <View className="registerForm">
        <TextInput placeholder="user" />
        <TextInput placeholder="pass" />

        <ButtonSimple
          label="log into my account"
          onPress={() => dispatch(logIn())}
        />

        <ButtonSimple
          label="to Register"
          onPress={() => navigation.replace('Register')}
        />
      </View>
      <Logo />
    </SafeAreaView>
  );
};

export default Login;
