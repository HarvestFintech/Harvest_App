import React from 'react';
import {View, Text} from 'react-native';

const Baskets = () => {
  return (
    <View>
      <Text>Baskets</Text>

      {/* Make this a scroll view */}
      <View>
        <Text>Stable Crops</Text>
        <Text>CRYPTO ICONS</Text>
        <Text>Invest</Text>
        <View>
          <Text>1 month return</Text>
          <View>
            <Text>Up/down Icon</Text>
            <Text>42%</Text>
          </View>
        </View>
        {/* Add divider */}
        <View>
          <Text>1 year return</Text>
          <View>
            <Text>Up/down Icon</Text>
            <Text>437%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Baskets;
