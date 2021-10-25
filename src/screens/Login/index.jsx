import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-lg text-white`}>HARVEST LOGIN PAGE</Text>
      <TouchableOpacity
        style={tw`bg-red-100 p-5`}
        onPress={() => {
          console.log('to register');
          navigation.navigate('Register');
        }}>
        <Text>Nav to REGISTER</Text>
      </TouchableOpacity>
      {/* <Logo /> */}
    </SafeAreaView>
  );
};

export default Login;
