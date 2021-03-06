import React, {useState, useEffect} from 'react';

// NAVIGATION
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';

import {useSelector} from 'react-redux';

const RootStack = createNativeStackNavigator();

const Base = () => {
  const userStatus = useSelector(({userInfo}) => userInfo.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(userStatus);

  useEffect(() => {
    setIsLoggedIn(userStatus);
  }, [userStatus]);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <RootStack.Screen name="Homepage" component={HomeNav} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNav} />
      )}
    </RootStack.Navigator>
  );
};

export default Base;
