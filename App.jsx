import 'react-native-gesture-handler';
import React from 'react';

// REDUX
import {Provider as ReduxProvider} from 'react-redux';
import store, {persistor} from '@redux/store';

// REDUX PERSIST
import {PersistGate} from 'redux-persist/integration/react';

// NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Base from '@nav/Root';
import AppTheme from '@util/theme';

const App = () => (
  <ReduxProvider store={store}>
    {/* loading={<LoadingMarkup />} */}
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer theme={AppTheme}>
        <SafeAreaProvider>
          <Base />
        </SafeAreaProvider>
      </NavigationContainer>
    </PersistGate>
  </ReduxProvider>
);

export default App;

// TODO: Add react-native-vector-icons compatibility for ios (see docs https://github.com/oblador/react-native-vector-icons#ios)
