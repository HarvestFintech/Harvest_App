import React from 'react';

import {View, Text, TextInput} from 'react-native';

import {Input, Button} from 'react-native-elements';

import {Logo, ScreenContainer} from '@shared';

const Register = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>REGISTER</Text>
      <Text>LET'S START</Text>

      <View className="registerForm">
        <Input title="First name" placeholder="John" />
        <Input title="Last name" placeholder="Appleseed" />
        <Input title="Email address" placeholder="email@address.com" />
      </View>
      <Button title="Next Step" onPress={() => navigation.push('Register2')} />
      <Button
        title="to Login"
        type="clear"
        onPress={() => navigation.replace('Login')}
      />
      <Logo />
    </ScreenContainer>
  );
};

export default Register;
