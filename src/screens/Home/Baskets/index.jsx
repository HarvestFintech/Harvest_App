import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, ScreenContainer, ScrollView, Basket} from '@shared';

const Baskets = () => {
  return (
    <ScreenContainer>
      <Text style={styles.text} h1>
        Baskets
      </Text>
      <ScrollView>
        <Basket
          title="Stable Crops"
          mreturn={+140}
          yreturn={-20}
          harvestIcons={['xd']}
        />
        <Basket title="Stable Crops" mreturn={+20} yreturn={-200} />
        <Basket title="Stable Crops" mreturn={+20} yreturn={-20} />
        <Basket title="Stable Crops" mreturn={+20} yreturn={-20} />
        <Basket title="Stable Crops" mreturn={+20} yreturn={-20} />
        <Basket title="Stable Crops" mreturn={+20} yreturn={-20} />
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
