import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-lg text-white`}>
        HARVEST REGISTER PAGE
      </Text>
      <TouchableOpacity
        style={tw`bg-red-100 p-5`}
        onPress={() => {
          console.log('to login');
          navigation.navigate('Login');
        }}>
        <Text>Nav to LOGIN</Text>
      </TouchableOpacity>
      {/* <Logo /> */}
    </SafeAreaView>
  );
};

export default Register;
