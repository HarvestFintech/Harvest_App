import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Image} from 'react-native';

import {Chip, Tooltip, Divider, Icon} from 'react-native-elements';

import {Text, Caret} from '@shared';

import BasketDetails from '../BasketInfo';

import img from './recommended.png';

// BASKET OBJECT:

// baskets.append({
// 	"uid": b.basket_id,
// 	"basket_name": b.basket_name,
// 	"coins": [Coin.getCoinName(int(_coin)) for _coin in b.coins.split(",")],
// 	"partition": b.partition
// })

const Basket = ({mreturn, yreturn, coinIcons, harvestIcons, data}) => {
  const {userData} = useSelector(obj => obj.userInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {uid, basket_name, coins, partition} = data;

  return (
    <View style={styles.box}>
      {isModalOpen && (
        <BasketDetails data={data} onPress={() => setIsModalOpen(false)} />
      )}
      <View style={[styles.row, styles.spaceOut]}>
        <Text style={styles.title}>{basket_name}</Text>
        <View style={styles.row}>
          {/* {userData.recommended.includes(data.uid) && (
            <Tooltip
              containerStyle={{width: 145, height: 130}}
              popover={
                <Text>
                  when you see this icon, its a recommended portfolio tailored
                  for you!
                </Text>
              }
              overlayColor="rgba(20, 0, 54, 0.9)">
              <Image source={img} />
            </Tooltip>
          )} */}

          {/* {coinIcons &&
            coinIcons.length > 0 &&
            coinIcons.sort().map((post, index) => {
              //   <Image key={index} source={require('./hicon.png')} />
              return <Text key={index}>{post}</Text>;
            })}*/}
        </View>
        <Chip
          title="Invest"
          buttonStyle={styles.chip}
          onPress={() => setIsModalOpen(!isModalOpen)}
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
