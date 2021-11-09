import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Login,
  Register,
  Register2,
  Register3,
  Onboarding,
  RiskAssessment,
  SuggestedBaskets,
} from '@screens/Auth';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="RiskAssessment" component={RiskAssessment} />
        <Stack.Screen name="SuggestedBaskets" component={SuggestedBaskets} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
