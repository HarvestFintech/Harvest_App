import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Icon, Button} from 'react-native-elements';

import {useDispatch} from 'react-redux';
import {updateToken, logOut} from '@redux/userSlice';

import {ScreenContainer, Input, ButtonPrimary} from '@shared';
import axios from 'axios';

import {API_URL} from '@env';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   TODO:AJ ADD LOADING & ERROR CONDITIONS TO LOGIN HANDLER

  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');

  const endpoint = `${API_URL}/auth/login`;
  const endpoint2 = `${API_URL}/dashboard`;

  //   HANDLE LOGIN BUTTON
  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setLoadError('');

    // GET LOGIN STATUS WITH USERNAME AND PASSWORD

    const {
      data: {status, payload},
      data,
    } = await axios.post(
      endpoint,
      {
        email,
        password,
      },
      {},
    );

    // TODO:AJ REVISE LOGIN SEQUENCE LOGIC

    // VALIDATE REQUEST STATUS
    // CASE SUCCESS: UPDATETOKEN (ADD VALID TOKEN TO REDUX AND SET LOGIN TO TRUE)
    if (status === 200 && payload.token) {
      setLoadError('status is 200!!!');
      console.log(payload);
      const token = payload.token;
      dispatch(updateToken(token));

      //   CASE FAIL: LOGOUT (REMOVE TOKEN AND USER DATA, SET LOGIN TO FALSE)
    } else {
      setLoadError(payload.error);
      dispatch(logOut());
    }
    setIsLoading(false);
  };

  return (
    <ScreenContainer center>
      <Text style={[styles.text, styles.title]}>Welcome to Harvest!</Text>

      <View className="registerForm">
        <View style={styles.formInput}>
          <Input
            label="Email"
            onChangeText={e => setEmail(e)}
            //   leftIcon={<Icon name="person-circle" type="ionicon" />}
          />
          <Input
            label="Password"
            onChangeText={e => setPassword(e)}
            errorMessage={loadError}
            //   leftIcon={<Icon name="lock-closed" type="ionicon" />}
          />
          <Button
            buttonStyle={styles.forgotPass}
            titleStyle={styles.forgotPassTitle}
            title="Forgot your password?"
            type="clear"
          />
        </View>

        <ButtonPrimary
          disabled={isLoading}
          title="Log In"
          onPress={() =>
            handleLogin(email.toLowerCase(), password.toLowerCase())
          }
        />

        <View style={styles.register}>
          <Text style={styles.text}>You don't have an account? </Text>
          <Button
            titleStyle={styles.buttonRegister}
            title="REGISTER"
            type="clear"
            onPress={() => navigation.replace('Register')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
  forgotPass: {
    width: 200,
    alignSelf: 'flex-end',
  },
  forgotPassTitle: {
    color: 'white',
    fontWeight: '100',
  },

  register: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRegister: {
    color: '#F0750A',
  },
  main: {
    backgroundColor: '#DBD8FD80',
    borderRadius: 6,
  },
  formInput: {
    marginBottom: 30,
  },
});
