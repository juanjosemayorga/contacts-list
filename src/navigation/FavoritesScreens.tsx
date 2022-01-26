import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ParamListBase, RouteProp} from '@react-navigation/native';
import colors from '../utils/colors';

import {Profile} from '../screens/Profile';
import {Favorites} from '../screens/Favorites';

const Stack = createStackNavigator();

export const FavoritesScreens = () => {
  return (
    <Stack.Navigator initialRouteName="FavoritesScreens">
      <Stack.Screen
        name="FavoritesScreens"
        options={{title: 'Favorites'}}
        component={Favorites}
      />
      <Stack.Screen
        name="Profile"
        options={(props: {
          route: RouteProp<ParamListBase, 'Profile'>;
          navigation: any;
        }) => {
          const {contact}: any = props.route.params;
          const {name} = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
              elevation: 12,
              shadowColor: 'black',
            },
          };
        }}
        component={Profile}
      />
    </Stack.Navigator>
  );
};
