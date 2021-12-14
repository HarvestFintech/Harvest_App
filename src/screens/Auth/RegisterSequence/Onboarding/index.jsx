import React from 'react';

import {Image, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import {ScreenContainer, ButtonPrimary, Logo} from '@shared';

import img from './welcome.png';

const OnboardingPrompt = ({navigation}) => {
  return (
    <ScreenContainer centerX logo>
      <View style={styles.textContainer}>
        <Text h4 style={[styles.text, styles.title]}>
          Risk Assesment Survey
        </Text>
        <Text style={styles.text}>
          We’ll use this information to help you pick the right allocation for
          your funds and provide better advice in the future
        </Text>
      </View>
      <Image style={styles.image} source={img} />
      <ButtonPrimary
        title="Onboard"
        onPress={() => navigation.navigate('RiskAssessment')}
      />
    </ScreenContainer>
  );
};

export default OnboardingPrompt;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 30,
  },
  text: {
    color: 'white',
    maxWidth: 275,
    textAlign: 'center',
  },
  image: {
    marginVertical: 50,
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
