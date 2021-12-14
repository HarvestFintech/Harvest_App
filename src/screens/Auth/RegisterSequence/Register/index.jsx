import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {updateToken} from '@redux/userSlice';

import axios from 'axios';

import {View, Text, StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';

import {Formik} from 'formik';

import {
  Input,
  Logo,
  ScreenContainer,
  ButtonPrimary,
  ButtonClear,
} from '@shared';

import {API_URL} from '@env';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [pwd2, setPwd2] = useState('');

  const endpoint = `${API_URL}/auth/signup`;

  //   HANDLE REGISTER BUTTON (WILL BE MOVED TO "REGISTER 3" WHEN ONBOARDING SEQUENCE IS COMPLETED)
  const handleRegister = async (email, fname, lname, password, pwd2) => {
    password != pwd2 && console.error(`passwords don't match!`);
    console.log(password, pwd2);

    const {
      data: {status, payload},
      data,
    } = await axios.post(
      endpoint,
      {
        fname,
        lname,
        email,
        password,
      },
      {},
    );

    if (status === 200 && payload.token) {
      const token = `Bearer ${payload.token}`;
      dispatch(updateToken(token));

      //   Navigate to onboarding if register request was successful
      navigation.navigate('Onboarding');
    }
  };

  const handleNext = () => {
    console.log(fname, lname, email, password);

    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <ScreenContainer center logo>
      <Text style={[styles.text, styles.title]}>Create an account!</Text>
      <View className="registerForm">
        {page == 0 && (
          <>
            <Input
              defaultValue={fname}
              label="First name"
              onChangeText={e => setFname(e)}
            />
            <Input
              defaultValue={lname}
              label="Last name"
              onChangeText={e => setLname(e)}
            />
            <Input
              defaultValue={email}
              label="Email address"
              onChangeText={e => setEmail(e)}
            />
            <ButtonPrimary title="Next" onPress={() => handleNext()} />
          </>
        )}
        {page == 1 && (
          <>
            <Input label="Birth date" onChangeText={e => setBdate(e)} />
            <Input label="Address" onChangeText={e => setAddress(e)} />
            <Input label="Zip code" onChangeText={e => setZipcode(e)} />
            <View style={styles.navButtons}>
              <ButtonClear title="Back" onPress={() => handlePrev()} />
              <ButtonPrimary title="Next" onPress={() => handleNext()} />
            </View>
          </>
        )}
        {page == 2 && (
          <>
            <Input label="Password" onChangeText={e => setPassword(e)} />
            <Input label="Repeat Password" onChangeText={e => setPwd2(e)} />
            <View style={styles.navButtons}>
              <ButtonClear title="Back" onPress={() => handlePrev()} />
              <ButtonPrimary
                title="Register"
                onPress={() =>
                  // TODO:AJ line below executes register call to backend
                  //   handleRegister(email, fname, lname, password, pwd2)
                  navigation.navigate('Onboarding')
                }
              />
            </View>
          </>
        )}
        <View style={styles.login}>
          <Text style={styles.text}>Already have an account? </Text>
          <Button
            title="LOG IN"
            titleStyle={styles.buttonLogin}
            type="clear"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

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
  login: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    color: '#F0750A',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Register;
