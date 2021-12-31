import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text as RNText} from 'react-native';

import {Chip, Tooltip, Divider, Icon} from 'react-native-elements';

import {VictoryChart, VictoryTheme, VictoryPie} from 'victory';
import {PieChart} from 'react-native-svg-charts';

import {Text, Caret, ScreenContainer} from '@shared';

import img from './recommended.png';

// BASKET OBJECT:

// baskets.append({
// 	"uid": b.basket_id,
// 	"basket_name": b.basket_name,
// 	"coins": [Coin.getCoinName(int(_coin)) for _coin in b.coins.split(",")],
// 	"partition": b.partition
// })

const Basket = ({mreturn, yreturn, coinIcons, harvestIcons, data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {uid, basket_name, coins, partition} = data;


  return (
    <View style={styles.box}>
      {isModalOpen && (
        <Modal>
          <ScreenContainer centerX>
            <Text h1>{basket_name}</Text>
            {/* <VictoryChart theme={VictoryTheme.material}></VictoryChart> */}

            <Text>
              {
                //   contents hardcoded, change in future sprints!
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.'
              }
            </Text>
            <Chip
              onPress={() => setIsModalOpen(false)}
              title="Go Back"
              buttonStyle={styles.chip}
            />
          </ScreenContainer>
        </Modal>
      )}
      <View style={[styles.row, styles.spaceOut]}>
        <Text style={styles.title}>{basket_name}</Text>
        <View style={styles.row}>

          {/*<Tooltip
            containerStyle={{width: 145, height: 130}}
            popover={
              <Text>
              when you see this icon, its a recommended portfolio tailored for you!
              </Text>
            }
            overlayColor="rgba(20, 0, 54, 0.9)">
            <Image source={img} />
          </Tooltip>
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
