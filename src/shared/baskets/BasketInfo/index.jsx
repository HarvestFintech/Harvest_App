import React, {useState, useEffect} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {Chip} from 'react-native-elements';

// charting docs: https://formidable.com/open-source/victory/docs/native/
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
} from 'victory-native';

import {Text, ScreenContainer, ScrollView} from '@shared';

const BasketInfo = ({data, onPress}) => {
  const {basket_name, uid, coins, partition} = data;
  const [obj, setObj] = useState({});

  useEffect(() => {
    coins.forEach((key, i) => (obj[key] = partition[i]));
    console.log(obj);
    setObj(obj);
    console.log(obj);
  }, []);

  return (
    <Modal>
      <ScreenContainer>
        <ScrollView centerX>
          <Text h1>{basket_name}</Text>
          {/* <VictoryChart theme={VictoryTheme.material}></VictoryChart> */}
          <Text>Pie chart template</Text>
          <VictoryPie data={data.partition} innerRadius={50} />
          <Text>
            {
              //   contents hardcoded, change in future sprints!
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat augue, nec lobortis diam. Donec at metus ut ante posuere aliquet. Nam ac maximus sapien. Integer convallis sapien at enim venenatis, a tempus nibh aliquet. In lacinia massa vitae sem consequat, vel ullamcorper leo egestas. Phasellus pellentesque nisi sapien, vitae tempus dui mattis sit amet. Aenean at mattis magna. Mauris sed mollis ex, quis tincidunt nisl. In vel ipsum in augue condimentum blandit et in libero.'
            }
          </Text>
          <Chip
            onPress={() => onPress()}
            title="Go Back"
            buttonStyle={styles.chip}
          />
        </ScrollView>
      </ScreenContainer>
    </Modal>
  );
};

export default BasketInfo;

const styles = StyleSheet.create({});
