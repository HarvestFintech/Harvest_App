import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {ScreenContainer, ScrollView, ButtonPrimary, Basket} from '@shared';

import {API_URL} from '@env';

const exampleBaskets = [
  {
    name: 'Basket 1',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
    badges: ['./recommended.png'],
  },
  {
    name: 'Basket 2',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
  },
  {
    name: 'Basket 3',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
  },
  {
    name: 'Basket 4',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
  },
];

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //   TODO:AJ Handle getting portfolios from backend
    // GET SUGGESTED PORTFOLIOS
    // const {
    //   data: {status, payload},
    //   data,
    // } = axios.push(`${API_URL}/auth/login`, {});
  }, []);

  return (
    <ScreenContainer>
      <Text h3 style={[styles.text, styles.title]}>
        These portfolios would be perfect for you!
      </Text>
      <ScrollView>
        {exampleBaskets.map((basket, index) => (
          <Basket
            key={index}
            title={basket.name}
            mreturn={basket.mincrease}
            yreturn={basket.yincrease}
            coinIcons={basket.coins}
            harvestIcons={basket.badges}
          />
        ))}
      </ScrollView>

      <View style={styles.button}>
        <ButtonPrimary
          title="Go straight to dashboard"
          onPress={() => dispatch(logIn())}
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
