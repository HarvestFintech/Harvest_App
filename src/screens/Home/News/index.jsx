import React from 'react';
import {View, Text} from 'react-native';

import {ScreenContainer} from '@shared';

const News = () => {
  return (
    <ScreenContainer>
      <Text>THE NEWS</Text>

      <View>
        <Text>Image</Text>
        <Text>Article 1</Text>
        <Text>Article Content</Text>
      </View>
      <View>
        <Text>Image</Text>
        <Text>Article 2</Text>
        <Text>Article Content</Text>
      </View>
      <View>
        <Text>Image</Text>
        <Text>Article 3</Text>
        <Text>Article Content</Text>
      </View>
    </ScreenContainer>
  );
};

export default News;
