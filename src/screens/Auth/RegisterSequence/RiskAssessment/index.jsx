import React from 'react';
import {View, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonSimple} from '@shared';

const RiskAssessment = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Risk Assessment</Text>
      </View>
      <ButtonSimple
        label="Next Step"
        onPress={() => navigation.navigate('SuggestedBaskets')}
      />
    </SafeAreaView>
  );
};

export default RiskAssessment;
