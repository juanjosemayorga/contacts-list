import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

import { User } from '../screens/User';
import { ContactsScreens } from './ContactsScreens';
import { FavoritesScreens } from './FavoritesScreens';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {

  const getTabBarIcon = (icon: string) => ({ color }: { color: string }) => (
    <MaterialIcons name={icon} size={26} color={color} />
  );

  return (
    <Tab.Navigator
      initialRouteName="Contacts"
      barStyle={{
        backgroundColor: colors.greyLight,
      }}
      labeled={false}
      activeColor={colors.blue}
      inactiveColor={colors.grey}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsScreens}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: getTabBarIcon('list'),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreens}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: getTabBarIcon('star'),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: getTabBarIcon('person'),
        }}
      />
    </Tab.Navigator>
  );
}