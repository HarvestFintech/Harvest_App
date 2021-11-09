import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';

import {Dashboard, Profile, News, Baskets, Purchase} from '@screens/Home';

const tabIcons = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'dashboard':
      iconName = 'home';
      break;
    case 'news':
      iconName = 'newspaper';
      break;
    case 'baskets':
      iconName = 'basket';
      break;
    case 'profile':
      iconName = 'happy';
      break;
    case 'purchase':
      iconName = 'download';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} type="ionicon" />;
};

const Tab = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => tabIcons(route, color),
        // tabBarIcon: <Icon name={'heartbeat'} color={'#00aced'} size={24} />,
      })}
      initialRouteName="dashboard"
      backBehavior="history">
      <Tab.Screen name="baskets" component={Baskets} />
      <Tab.Screen name="purchase" component={Purchase} />
      <Tab.Screen name="dashboard" component={Dashboard} />

      {/* vvv EDIT TAB BAR BADGE TO REFLECT UNREAD NEWS ARTICLES vvv */}
      <Tab.Screen
        name="news"
        component={News}
        options={{tabBarBadge: 'New!'}}
      />

      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeNav;
