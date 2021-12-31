import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {Icon, Button} from 'react-native-elements';

import {useDispatch} from 'react-redux';
import {updateToken, logOut, logIn} from '@redux/userSlice';

import {ScreenContainer, Input, ButtonPrimary, Text} from '@shared';
import axios from 'axios';

import {Formik} from 'formik';
import {userSchema} from '@util/models';

import {API_URL} from '@env';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');

  //   HANDLE LOGIN BUTTON
  const handleLogin = async ({email, password}) => {
    setIsLoading(true);
    setLoadError('');

    // SUBMIT LOGIN & GET LOGIN STATUS WITH USERNAME AND PASSWORD
    const {
      data: {status, payload},
      data,
    } = await axios.post(
      `${API_URL}/auth/login`,
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
      console.log(loadError, payload);
      dispatch(updateToken(payload.token));
      dispatch(logIn());
    } else {
      //   CASE FAIL: LOGOUT (REMOVE TOKEN AND USER DATA, SET LOGIN TO FALSE)
      setLoadError(payload.error);
      dispatch(logOut());
    }
    setIsLoading(false);
  };

  const schema = userSchema.pick(['email', 'password']);

  return (
    <ScreenContainer center>
      <Text h1 style={styles.title}>
        Welcome to Harvest!
      </Text>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={schema}
        onSubmit={values => handleLogin(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <View className="registerForm">
            <View style={styles.formInput}>
              <Input
                label="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                errorMessage={touched.email && errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
                //   leftIcon={<Icon name="person-circle" type="ionicon" />}
              />
              <Input
                label="Password"
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur('password')}
                errorMessage={touched.password && errors.password}
                autoCapitalize="none"
                // secureTextEntry // uncomment to obscure input content
                //   leftIcon={<Icon name="lock-closed" type="ionicon" />}
              />
              <Button
                buttonStyle={styles.forgotPass}
                titleStyle={styles.forgotPassTitle}
                title="Forgot your password?"
                type="clear"
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </View>

            <ButtonPrimary
              disabled={isLoading}
              title="Log In"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <View style={styles.register}>
        <Text>You don't have an account? </Text>
        <Button
          titleStyle={styles.buttonRegister}
          title="REGISTER"
          type="clear"
          //   ! CHANGE TO REGISTER WHEN FINISHED DEBUGGING
          onPress={() => navigation.replace('Register')}
        />
      </View>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    marginBottom: 50,
    textAlign: 'center',
  },
  forgotPass: {
    width: 200,
    alignSelf: 'flex-end',
  },
  forgotPassTitle: {
    color: 'white',
    fontSize: 15,
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
