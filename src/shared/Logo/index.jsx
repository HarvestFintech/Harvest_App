import React from 'react';
import {Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import img from './logo.png';

const Logo = ({size}) => {
  const dim = size || 16;
  return <Image source={img} style={tw`w-${dim} h-${dim}`} />;
};

export default Logo;
