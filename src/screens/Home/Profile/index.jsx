import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Button, Avatar, Icon} from 'react-native-elements';

import {useDispatch} from 'react-redux';
import {logOut} from '@redux/userSlice';

import {ScreenContainer} from '@shared';

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <ScreenContainer>
      <View style={styles.main}>
        <Avatar rounded title="NP" />
        <Text>Username</Text>
      </View>

      <Text>Change personal info (?)</Text>

      <Text>Account Details</Text>

      <Button title="Log Out" onPress={() => dispatch(logOut())} />
    </ScreenContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});
