import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Chip, colors, Divider, Icon} from 'react-native-elements';

import {ScreenContainer} from '@shared';

const Baskets = () => {
  return (
    <ScreenContainer>
      <Text>Baskets</Text>

      {/* Make this a scroll view */}
      <View style={styles.box}>
        <View style={[styles.row, styles.spaceOut]}>
          <Text style={styles.title}>Stable Crops</Text>
          <Text>CRYPTO ICONS</Text>
          <Chip title="Invest" />
        </View>
        <View style={styles.data}>
          <View style={[styles.row, styles.spaceOut]}>
            <Text>1 month return</Text>
            <View style={styles.row}>
              <Icon name="caret-up" type="ionicon" size={15} />
              <Text>42%</Text>
            </View>
          </View>
          <Divider style={styles.divider} color="white" width={1} />
          <View style={[styles.row, styles.spaceOut]}>
            <Text>1 year return</Text>
            <View style={styles.row}>
              <Icon name="caret-down" type="ionicon" size={15} />
              <Text>437%</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Baskets;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceOut: {
    justifyContent: 'space-between',
  },
  data: {
    marginTop: 25,
  },
  divider: {
    marginVertical: 10,
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
