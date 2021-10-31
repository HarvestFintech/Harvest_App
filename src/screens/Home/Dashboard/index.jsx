import React from 'react';
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Account Balance</Text>
        <Text>$000,000</Text>
        <Text>
          <Text>Today's Gain</Text>
          <Text> ICON 2.11%</Text>
        </Text>
      </View>

      <Text>Evolution Graph</Text>
      <Text>Aug 1 - Sep 1</Text>

      <View>
        <Text>1M</Text>
        <Text>3M</Text>
        <Text>1Y</Text>
        <Text>YTD</Text>
        <Text>All Time</Text>
      </View>

      <View>
        <View>
          <Text>P/L</Text>
          <Text>$XX,XXX (XX.X%)</Text>
        </View>
        {/* Add Divider */}
        <View>
          <Text>Taxes Savings (estimate)</Text>
          <Text>$X,XXX</Text>
        </View>
        {/* Add Divider */}
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
    </SafeAreaView>
  );
};

export default Dashboard;
