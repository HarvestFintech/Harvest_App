import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {Divider, Icon} from 'react-native-elements';

import {ScreenContainer} from '@shared';

const Dashboard = () => {
  const { token } = useSelector(({userInfo}) => userInfo);

  useEffect( () => {
    const getUserInfo = async (token) => {
      if(token && token.length){
        let res = await axios.get('http://localhost:7070/user/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        // TODO: STORE USER INFO
        alert(`Hello ${res.data.payload.name}!`);
      }
    }
    getUserInfo(token);
  }, [token])

  return (
    <ScreenContainer>
      <View style={[styles.titleSection, styles.center]}>
        <Text>Account Balance</Text>
        <Text style={styles.title}>$000,000</Text>
        <Text>
          <Text>Today's Gain</Text>
          <Text> ICON 2.11%</Text>
        </Text>
      </View>
      <View style={styles.chart}>
        <Text>Evolution Graph</Text>
      </View>
      <Text style={styles.textCenter}>Aug 1 - Sep 1</Text>
      <View style={[styles.row, styles.centerRow]}>
        <Text>1M</Text>
        <Text>3M</Text>
        <Text>1Y</Text>
        <Text>YTD</Text>
        <Text>All Time</Text>
      </View>

      <ScrollView style={styles.orange}>
        <View>
          <View>
            <Text>P/L</Text>
            <Text>$XX,XXX (XX.X%)</Text>
          </View>
          <Divider />
          <View>
            <Text>Taxes Savings (estimate)</Text>
            <Text>$X,XXX</Text>
          </View>
          <Divider />
          <View>
            <Text>Harvest Fees Paid</Text>
            <Text>$XX</Text>
          </View>
        </View>

        <View>
          <Text>Portfolio Mix</Text>

          {/* EXAMPLE 1: BTC */}
          <View>
            <Text>Icon</Text>
            <View>
              <Text>BTC</Text>
              <Text>+1.6%</Text>
            </View>
            <Text>MiniGraph</Text>
            <View>
              <Text>$29,850</Text>
              <Text>2.73 BTC</Text>
            </View>
          </View>

          {/* EXAMPLE 2: ETH */}
          <View>
            <Text>Icon</Text>
            <View>
              <Text>ETH</Text>
              <Text>-0.82%</Text>
            </View>
            <Text>MiniGraph</Text>
            <View>
              <Text>$10,561</Text>
              <Text>47.61 ETH</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  datesRow: {
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSection: {
    height: '30%',
    justifyContent: 'center',
  },
  title: {
    color: 'orange',
    fontSize: 50,
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
  centerRow: {
    justifyContent: 'center',
  },
  chart: {
    backgroundColor: 'pink',
    height: '20%',
  },
  textCenter: {
    textAlign: 'center',
  },
  orange: {
    backgroundColor: 'orange',
    marginTop: 20,
  },
});
