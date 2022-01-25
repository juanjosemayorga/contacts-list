import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ParamListBase, RouteProp} from '@react-navigation/native';
import colors from '../utils/colors';

import {Contacts} from '../screens/Contacts';
import {Profile} from '../screens/Profile';
import {Favorites} from '../screens/Favorites';
import {User} from '../screens/User';

const Stack = createStackNavigator();

export const ContactsScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        options={{title: 'Contacts'}}
        component={Contacts}
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
      <Stack.Screen
        name="Favorites"
        options={{title: 'Favorites'}}
        component={Favorites}
      />
      <Stack.Screen
        name="User"
        options={(props: {
          route: RouteProp<ParamListBase, 'User'>;
          navigation: any;
        }) => {
          return {
            title: 'Me',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
              elevation: 12,
              shadowColor: 'black',
            },
          };
        }}
        component={User}
      />
    </Stack.Navigator>
  );
};
