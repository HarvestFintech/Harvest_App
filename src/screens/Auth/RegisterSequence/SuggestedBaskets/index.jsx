import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {ScreenContainer, ScrollView, ButtonPrimary, Basket} from '@shared';

import {API_URL} from '@env';

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //   TODO:AJ Handle getting portfolios from backend
    // GET SUGGESTED PORTFOLIOS
    const {
      data: {status, payload},
      data,
    } = axios.push(`${API_URL}/auth/login`, {});
  }, []);

  return (
    <ScreenContainer>
      <Text h3 style={[styles.text, styles.title]}>
        These portfolios would be perfect for you!
      </Text>
      <ScrollView>
        <Basket title="Stable Crops" mreturn={20} yreturn={-20} />
      </ScrollView>

      <View style={styles.button}>
        <ButtonPrimary
          title="Go straight to dashboard"
          onPress={() => {
            dispatch(logIn());
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default SuggestedBaskets;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    marginVertical: 20,
  },

  button: {
    marginVertical: 10,
  },
});
