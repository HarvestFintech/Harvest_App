import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonSimple} from '@shared';

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(({userInfo}) => userInfo);

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <SafeAreaView>
      <View>
        <Text>These portfolios would be perfect for you!</Text>
      </View>
      <ButtonSimple
        label="log in"
        onPress={() => {
          dispatch(logIn('le token'));
        }}
      />

      {/* <ButtonSimple label="Next Step" onPress={() => navigation.popToTop()} /> */}
    </SafeAreaView>
  );
};

export default SuggestedBaskets;
