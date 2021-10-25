import React, {useEffect} from 'react';

// REDUX
// import {Provider} from 'react-redux';
// import {store} from './redux';

// NAVIGATION
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import tw from 'tailwind-react-native-classnames';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Logo} from './src/shared';

import {Splash, Login, Register} from './src/screens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
