import React, { useState } from 'react';
import {View, Text} from 'react-native';

import {Input, Icon, Button} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import { updateToken } from '@redux/userSlice';

import {Logo, ScreenContainer} from '@shared';
import axios from 'axios';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const status = useSelector(({userInfo}) => userInfo);

  const handleLogin = async (email, password) => {
    let res = await axios
      .post('http://localhost:7070/auth/login', {
        email,
        password
      }, {});
      if (res.data.status === 200) {
        dispatch(updateToken(res.data.payload.token));
      } else {
        // silent error
      }
  };

  return (
    <ScreenContainer>
      <Text>HARVEST LOGIN PAGE</Text>

      <View className="registerForm">
        <Input
          placeholder="email@address.com"
          label="Your Email Address"
          onChangeText={(email) => setEmail(email)}
          leftIcon={<Icon name="person-circle" type="ionicon" />}
        />
        <Input
          placeholder="Password"
          label="Password"
          onChangeText={(password) => setPassword(password)}
          leftIcon={<Icon name="lock-closed" type="ionicon" />}
        />

        <Button
          title="log into my account"
          onPress={() =>
            handleLogin(email.toLowerCase(), password.toLowerCase())
            /*dispatch(
              logIn({
                email: email.toLowerCase(),
                password: password.toLowerCase(),
              }),
            )*/
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
