import React from 'react';

import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonSimple} from '@shared';

const OnboardingPrompt = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Answer this small questionare so we can show you the best options for
          you to invest
        </Text>
      </View>
      <ButtonSimple
        label="Next Step"
        onPress={() => navigation.navigate('RiskAssessment')}
      />
    </SafeAreaView>
  );
};

export default OnboardingPrompt;
