import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ParamListBase, RouteProp } from '@react-navigation/native'
import colors from '../utils/colors'

import { Contacts } from '../screens/Contacts'
import { Profile } from '../screens/Profile'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
    >
      <Stack.Screen
        name="Contacts"
        options={{ title: 'Contacts' }}
        component={Contacts}
        />
      <Stack.Screen
        name="Profile"
        options={(props: {
          route: RouteProp<ParamListBase, "Profile">,
          navigation: any
        }) => {
          const { contact }: any = props.route.params
          const { name } = contact
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
}

// {
//           title: 'Profile',
//           headerTintColor: 'white',
//           headerStyle: {
//             backgroundColor: colors.blue,
//             elevation: 12,
//             shadowColor: 'black',
//           }
//         }