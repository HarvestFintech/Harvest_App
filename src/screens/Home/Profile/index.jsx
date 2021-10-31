import React from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch} from 'react-redux';
import {logOut} from '@redux/userSlice';

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile Image</Text>
      <Text>Username</Text>

      <Text>Change personal info (?)</Text>

      <Text>Account Details</Text>

      <Button title="log out" onPress={() => dispatch(logOut())} />
    </View>
  );
};

export default Profile;
