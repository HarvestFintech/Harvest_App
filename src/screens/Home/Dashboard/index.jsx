import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '@redux/userSlice';

import {StyleSheet, View} from 'react-native';

import {Divider, Icon} from 'react-native-elements';

import {ScreenContainer, ScrollView, Text, Caret} from '@shared';

import {API_URL} from '@env';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(({userInfo}) => userInfo);

  const [isLoading, setIsLoading] = useState(false);

  const endpoint = `${API_URL}/user/dashboard`;

  //   LOAD USER DATA WHEN DASHBOARD PAGE IS LOADED
  useEffect(() => {
    async token => {
      if (token && token.length) {
        const {
          data: {status, payload},
          data,
        } = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // DOUBLE CHECK IF TOKEN US VALID/NOT EXPIRED (THIS IS TO DISPLAY ERROR MESSAGES ONSCREEN)
        if (status === 200) {
          dispatch(logIn(payload));
        }
        //! vv REMOVE THIS ALERT IN PRODUCTION vv
        alert(`Hello ${payload.name}!`);
      }
    };
  }, [token]);

  return (
    <ScreenContainer>
      <ScrollView>
        <View style={[styles.titleSection, styles.center]}>
          <Text h4>Account Balance</Text>
          <Text style={styles.title}>$000,000</Text>
          <View style={styles.row}>
            <Text>Today's Gain</Text>
            <Caret value={2.11} />
          </View>
        </View>
        <View style={styles.chart}>
          <Text>Evolution Graph</Text>
        </View>
        <Text style={[styles.textCenter, styles.dateRange]}>Aug 1 - Sep 1</Text>
        <View style={[styles.row, styles.centerRow, styles.datesRow]}>
          <Text style={styles.dateSelected} dark>
            1M
          </Text>
          <Text dark>3M</Text>
          <Text dark>1Y</Text>
          <Text dark>YTD</Text>
          <Text dark>All Time</Text>
        </View>

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
    backgroundColor: '#CBC7ED',
    height: 40,
    width: 250,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  dateSelected: {
    backgroundColor: '#FFFFFB',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  dateRange: {
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
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
    backgroundColor: 'red',
    // marginHorizontal: -30,
    height: '20%',
  },
  textCenter: {
    textAlign: 'center',
  },
});
