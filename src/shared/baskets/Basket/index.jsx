import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text as RNText} from 'react-native';

import {Chip, Tooltip, Divider, Icon} from 'react-native-elements';

// dependencies deprecated, remove this dep and rncommunity/art

import {Text, Caret, ScreenContainer} from '@shared';

import {PieChart} from 'react-native-chart-kit';

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

const Basket = ({mreturn, yreturn, coinIcons, harvestIcons, data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
  const {uid, basket_name, coins, partition, description} = data;

  const dataset = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 10, // optional, default 3
    barPercentage: 0.5,
  };

  return (
    <View style={styles.box}>
      {isModalOpen && (
        <Modal>
          <ScreenContainer centerX>
            <Text h1>{basket_name}</Text>
            <Text>partition: [{data.partition.join(', ')}]</Text>
            <PieChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              height={150}
              width={300}
              chartConfig={chartConfig}
            />
            <Text>{description}</Text>
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
        <View style={[styles.row]}>
          {/* {harvestIcons &&
            harvestIcons.length > 0 &&
            harvestIcons.sort().map((post, index) => {
              return <Image key={index} source={{uri: post}} />;
            })} */}
          <Tooltip
            containerStyle={{width: 145, height: 130}}
            popover={
              <Text>
                {
                  'when you see this icon, its a recommended portfolio tailored for you!'
                }
              </Text>
            }
            overlayColor="rgba(20, 0, 54, 0.9)">
            <Image source={img} />
          </Tooltip>
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
