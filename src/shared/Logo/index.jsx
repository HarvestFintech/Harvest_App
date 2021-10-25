import React from 'react';
import {Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import img from './logo.png';

const Logo = () => {
  return <Image source={img} style={tw`w-16 h-16`} />;
};

export default Logo;
