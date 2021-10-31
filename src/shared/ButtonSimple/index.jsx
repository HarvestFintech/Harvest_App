import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ButtonSimple = ({label, color, Icon, onPress}) => {
  const bgColor = color || 'white';

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={tw`py-2 px-4 bg-${bgColor} w-full text-center text-base shadow-md rounded-lg`}>
        <Text style={tw`text-gray-500 font-semibold`}>{label}</Text>
        {Icon && <Icon />}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSimple;
