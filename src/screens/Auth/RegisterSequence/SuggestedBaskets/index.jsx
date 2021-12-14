import React, {useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Text} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {ScreenContainer, ButtonPrimary} from '@shared';

const SuggestedBaskets = ({navigation}) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(({userInfo}) => userInfo);

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <ScreenContainer>
      <View>
        <Text h3 style={styles.text}>
          These portfolios would be perfect for you!
        </Text>
      </View>
      <ButtonPrimary
        title="log in"
        onPress={() => {
          dispatch(logIn('le token'));
        }}
      />
    </ScreenContainer>
  );
};

export default SuggestedBaskets;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    marginBottom: 30,
  },
});
