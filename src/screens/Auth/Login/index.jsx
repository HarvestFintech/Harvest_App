import React from 'react';
import {View, Text} from 'react-native';

import {Input, Icon, Button} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {Logo, ScreenContainer} from '@shared';
import axios from 'axios';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(({userInfo}) => userInfo);

  return (
    <ScreenContainer>
      <Text>HARVEST LOGIN PAGE</Text>

      <View className="registerForm">
        <Input
          placeholder="email@address.com"
          label="Your Email Address"
          leftIcon={<Icon name="person-circle" type="ionicon" />}
        />
        <Input
          placeholder="Password"
          label="Password"
          leftIcon={<Icon name="lock-closed" type="ionicon" />}
        />

        <Button
          title="log into my account"
          onPress={() =>
            dispatch(
              logIn({
                username: 'larry',
                password: 'password',
              }),
            )
          }
        />

        <Button
          title="to Register"
          type="clear"
          onPress={() => navigation.replace('Register')}
        />
      </View>
      <Logo />
    </ScreenContainer>
  );
};

export default Login;
