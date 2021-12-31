import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
import {logIn, updateUserData} from '@redux/userSlice';

import {ScreenContainer, ScrollView, ButtonPrimary, Basket} from '@shared';

import {API_URL} from '@env';

const exampleBaskets = [
  {
    uid: 1,
    basket_name: 'Basket 1',
    coins: ['btc', 'eth'],
    partition: [0.5, 0.5],
  },
  {
    uid: 2,
    basket_name: 'Basket 2',
    coins: ['btc', 'eth'],
    partition: [0.5, 0.6],
  },
];

const getRecommendedBaskets = (baskets, reco) => {
  return baskets.filter(basket => reco.includes(basket.uid));
};

// BASKET OBJECT:

// baskets.append({
// 	"uid": b.basket_id,
// 	"basket_name": b.basket_name,
// 	"coins": [Coin.getCoinName(int(_coin)) for _coin in b.coins.split(",")],
// 	"partition": b.partition
// })

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(obj => obj.userInfo);
  const [recommended, setRecommended] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //   TODO:AJ Handle getting portfolios from backend
    // GET SUGGESTED PORTFOLIOS

    // const {
    //   data: {status, payload},
    //   data,
    // } = axios.get(`${API_URL}/user/dashboard`, {
    //   Authorization: token,
    // });
    // if (status === 200) {
    //   dispatch(updateUserData(payload));
    //   setUserData(payload);

    //   const finalBaskets = getRecommendedBaskets(
    //     payload.baskets,
    //     payload.recommended,
    //   );

    //   setRecommended(finalBaskets);
    // }

    // ! uncomment above / comment below when connecting to backend!!!!!!!!
    const recommendedBaskets = [2, 4];
    const finalBaskets = getRecommendedBaskets(
      exampleBaskets,
      recommendedBaskets,
    );
    setRecommended(finalBaskets);
  }, []);

  return (
    <ScreenContainer>
      <Text h3 style={[styles.text, styles.title]}>
        {userData.name}, these portfolios are a perfect fit for you!
      </Text>
      <ScrollView>
        {recommended.map((basket, index) => (
          <Basket key={index} mreturn={-1.2} yreturn={+3.6} data={basket} />
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
