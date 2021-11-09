import React from 'react';

import {View, Text, Button} from 'react-native';

import {ScreenContainer} from '@shared';

const OnboardingPrompt = ({navigation}) => {
  return (
    <ScreenContainer>
      <View>
        <Text>
          Answer this small questionare so we can show you the best options for
          you to invest
        </Text>
      </View>
      <Button
        title="Next Step"
        onPress={() => navigation.navigate('RiskAssessment')}
      />
    </ScreenContainer>
  );
};

export default OnboardingPrompt;
