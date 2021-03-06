import React, {useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {updateToken} from '@redux/userSlice';

import axios from 'axios';

import {View, StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';

import {Formik} from 'formik';
import {userSchema} from '@util/models';

import {
  Text,
  Input,
  ScreenContainer,
  ButtonPrimary,
  ButtonClear,
} from '@shared';

import {chunk} from 'lodash';

import {API_URL} from '@env';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [clump, setClump] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const endpoint = `${API_URL}/auth/signup`;

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    const part = chunk(
      [
        'fname',
        'lname',
        'email',
        'birthDate',
        'address',
        'zipcode',
        'password',
        'pwd2',
      ],
      3,
    )[page];
    setClump(userSchema.pick(part));
  }, [page]);

  //   HANDLE REGISTER BUTTON (WILL BE MOVED TO "REGISTER 3" WHEN ONBOARDING SEQUENCE IS COMPLETED)
  const handleRegister = async ({
    email,
    fname,
    lname,
    birthDate,
    address,
    zipcode,
    password,
    pwd2,
  }) => {
    if (page != 2) {
      handleNext();
    } else {
      setIsLoading(true);
      password != pwd2 && console.error(`passwords don't match!`);

      const {
        data: {status, payload},
        data,
      } = await axios.post(
        endpoint,
        {
          email,
          fname,
          lname,
          birthDate,
          address,
          zipcode,
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
    }
  };

  return (
    <ScreenContainer center logo>
      <Text h3 style={[styles.text, styles.title]}>
        Create an account!
      </Text>
      <Formik
        initialValues={{
          fname: '',
          lname: '',
          email: '',
          birthDate: '',
          address: '',
          zipcode: '',
          password: '',
        }}
        validationSchema={clump}
        onSubmit={values => handleRegister(values)}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          values,
        }) => (
          <View>
            {page == 0 && (
              <>
                <Input
                  label="First name"
                  value={values.fname}
                  onChangeText={handleChange('fname')}
                  onBlur={handleBlur('email')}
                  errorMessage={errors.fname}
                  autoCapitalize="none"
                />
                <Input
                  label="Last name"
                  value={values.lname}
                  onChangeText={handleChange('lname')}
                  errorMessage={touched.lname && errors.lname}
                  autoCapitalize="none"
                />
                <Input
                  label="Email address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  errorMessage={touched.email && errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </>
            )}
            {page == 1 && (
              <>
                <Input
                  label="Birth date"
                  value={values.birthDate}
                  onChangeText={handleChange('birthDate')}
                  errorMessage={touched.birthDate && errors.birthDate}
                />
                <Input
                  label="Address"
                  value={values.address}
                  onChangeText={handleChange('address')}
                  errorMessage={touched.address && errors.address}
                />
                <Input
                  label="Zip code"
                  value={values.zipcode}
                  onChangeText={handleChange('zipcode')}
                  errorMessage={touched.zipcode && errors.zipcode}
                />
              </>
            )}
            {page == 2 && (
              <>
                <Input
                  label="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorMessage={touched.password && errors.password}

                  //   secureTextEntry // uncomment to obscure input content
                />
                <Input
                  label="Repeat Password"
                  value={values.pwd2}
                  onChangeText={handleChange('pwd2')}
                  errorMessage={touched.pwd2 && errors.pwd2}
                  // secureTextEntry // uncomment to obscure input content
                />
              </>
            )}

            <View style={styles.navButtons}>
              {page > 0 && (
                <ButtonClear title="Back" onPress={() => handlePrev()} />
              )}
              <ButtonPrimary
                title={page == 2 ? 'Register' : 'Next'}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
      <View className="registerForm">
        <View style={styles.login}>
          <Text>Already have an account? </Text>
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
    color: 'white',
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
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

/*
get all input promps from server as an array
render 3 promps max. per page



create page component
render single page per view

*/
