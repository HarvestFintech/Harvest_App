import React from 'react';

import {View, Text, Button} from 'react-native';

import {ScreenContainer} from '@shared';

const Register3 = ({navigation}) => {
  return (
    <ScreenContainer>
      <View>
        <Text>Register 3</Text>
      </View>
      <Button
        title="Next Step"
        onPress={() => navigation.navigate('Onboarding')}
      />
    </ScreenContainer>
  );
};

export default Register3;
