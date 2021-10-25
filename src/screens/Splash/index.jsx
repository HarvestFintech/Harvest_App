import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      console.log('timed-out!');
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={tw`bg-purple-900 flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-lg text-white`}>HARVEST LOGO</Text>

      {/* <Logo /> */}
    </SafeAreaView>
  );
};

export default Splash;
