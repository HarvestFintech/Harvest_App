import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Chip, colors, Divider, Icon} from 'react-native-elements';

import {Text, Caret} from '@shared';

import hicon from './recommended.png';

const ArrowUp = () => (
  <Icon
    iconStyle={styles.icon}
    color="green"
    name="caret-up"
    type="ionicon"
    size={15}
  />
);
const ArrowDown = () => (
  <Icon
    iconStyle={styles.icon}
    color="red"
    name="caret-down"
    type="ionicon"
    size={15}
  />
);

import img from './recommended.png';

const Basket = ({title, mreturn, yreturn, coinIcons, harvestIcons, id}) => {
  // harvestIcons: array of strings

  return (
    <View style={styles.box}>
      <View style={[styles.row, styles.spaceOut]}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.row]}>
          {harvestIcons &&
            harvestIcons.length > 0 &&
            harvestIcons.sort().map((post, index) => {
              return <Image key={index} source={{uri: post}} />;
            })}
          {coinIcons &&
            coinIcons.length > 0 &&
            coinIcons.sort().map((post, index) => {
              //   <Image key={index} source={require('./hicon.png')} />
              return <Text key={index}>{post}</Text>;
            })}
        </View>
        <Chip
          title="Invest"
          buttonStyle={styles.chip}
          onPress={() => console.log('chip pressed!')}
        />
      </View>
      <View style={styles.data}>
        <View style={[styles.row, styles.spaceOut]}>
          <Text>1 month return</Text>
          <Caret value={mreturn} />
        </View>
        <Divider style={styles.divider} color="white" width={1} />
        <View style={[styles.row, styles.spaceOut]}>
          <Text>1 year return</Text>
          <Caret hideSymbol value={yreturn} />
        </View>
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#362558',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  chip: {
    backgroundColor: '#F0750A',
    paddingVertical: 5,
  },

  data: {
    marginTop: 25,
  },
  divider: {
    marginVertical: 10,
  },
  title: {
    color: '#F0750A',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    marginRight: 3,
    marginBottom: -4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceOut: {
    justifyContent: 'space-between',
  },
});
