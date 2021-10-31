import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import {Logo} from '@shared';

import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const userStatus = useSelector(({userInfo}) => userInfo.isLoggedIn);
  console.log(`logged in: ${userStatus}`);

  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Logo size="32" />
    </SafeAreaView>
  );
};

export default Splash;
