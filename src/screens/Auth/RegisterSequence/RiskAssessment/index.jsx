import React from 'react';
import {View, Text, Button} from 'react-native';

import {ScreenContainer} from '@shared';

const RiskAssessment = ({navigation}) => {
  return (
    <ScreenContainer>
      <View>
        <Text>Risk Assessment</Text>
      </View>
      <Button
        title="Next Step"
        onPress={() => navigation.navigate('SuggestedBaskets')}
      />
    </ScreenContainer>
  );
};

export default RiskAssessment;
