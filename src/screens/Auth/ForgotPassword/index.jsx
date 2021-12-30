import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import axios from 'axios';

import {Formik} from 'formik';
import {userSchema} from '@util/models';

import {
  ScreenContainer,
  Input,
  Text,
  ButtonPrimary,
  ButtonClear,
} from '@shared';

import {API_URL} from '@env';

const ForgotPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = userSchema.pick(['email']);

  const handleForgot = ({email}) => {
    setIsLoading(true);
    const {
      data: {status, payload},
      data,
    } = axios.post(
      `${API_URL}/auth/forgot`,
      {
        email,
      },
      {},
    );
    setIsLoading(false);
  };

  return (
    <ScreenContainer centerX style={styles.root}>
      <Text h1>forgot!</Text>
      <Text>forgot!</Text>
      <Formik
        initialValues={{email: ''}}
        validationSchema={schema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <>
            <Input
              label="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
              errorMessage={touched.email && errors.email}
              keyboardType="email-address"
            />
            <View style={styles.row}>
              <ButtonClear title="Back" onPress={() => navigation.goBack()} />
              <ButtonPrimary
                title="Send Confirmation"
                disabled={isLoading}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    gapHorizontal: 100,
    gapVertical: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
