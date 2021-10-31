import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`py-2 px-4 bg-${bgColor} w-full text-center text-base shadow-md rounded-lg`}>
        <Text style={tw`text-gray-500 font-semibold`}>Back</Text>
        {Icon && <Icon />}
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
