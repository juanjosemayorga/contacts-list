import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Contacts } from '../screens/Contacts';
import { Favorites } from '../screens/Favorites';
import { User } from '../screens/User';
import { StackNavigator } from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const icon = <FontAwesome5 name={'list'} />;

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Contacts">
      <Tab.Screen
        name="Contacts"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'home'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}