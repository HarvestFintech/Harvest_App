import React from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet} from 'react-native';

import {Text, ScreenContainer, ScrollView, Basket} from '@shared';

const Baskets = () => {
  const { userData } = useSelector(obj => obj.userInfo);
  return (
    <ScreenContainer>
      <Text style={styles.text} h1>
        Baskets
      </Text>
      <ScrollView>
        { userData.baskets.map( basket => {
          return <Basket
            mreturn={+140}
            yreturn={-20}
            data={basket}
            key={basket.uid}
          />
        })}
      </ScrollView>
    </ScreenContainer>
  );
};

export default Baskets;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
