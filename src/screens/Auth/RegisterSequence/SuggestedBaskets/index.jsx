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
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
    partition: [0.5, 0.5],
    badges: ['./recommended.png'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.',
  },
  {
    uid: 2,
    basket_name: 'Basket 2',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
    partition: [0.5, 0.6],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.',
  },
  {
    uid: 3,
    basket_name: 'Basket 3',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
    partition: [0.5, 0.8],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.',
  },
  {
    uid: 4,
    basket_name: 'Basket 4',
    price: 12,
    mincrease: 0.12,
    yincrease: -0.24,
    coins: ['btc', 'eth'],
    partition: [0.5, 1],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.',
  },
];

const getRecommendedBaskets = (baskets, reco) => {
  return baskets.filter(basket => reco.includes(basket.uid));
};

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(obj => obj.userInfo);
  const [recommended, setRecommended] = useState([]);
  const [userData, setUserData] = useState({
    name: 'Nikolas',
  });

  useEffect(() => {
    const recommendedBaskets = [2, 4];
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
    //   setRecommended(payload.recommended);

    // const finalBaskets = getRecommendedBaskets(
    //   payload.baskets,
    //   payload.recommended,
    // );

    // setRecommended(finalBaskets);
    // }

    // ! uncomment above / comment below when connecting to backend!!!!!!!!
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
          <Basket
            key={index}
            mreturn={basket.mincrease}
            yreturn={basket.yincrease}
            coinIcons={basket.coins}
            harvestIcons={basket.badges}
            data={basket}
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
