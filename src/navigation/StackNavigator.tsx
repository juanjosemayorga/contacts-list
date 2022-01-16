import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Contacts } from '../screens/Contacts'
import { Profile } from '../screens/Profile'
import colors from '../utils/colors'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        options={{ title: 'Contacts' }}
        component={Contacts}
        />
      <Stack.Screen
        name="Profile"
        options={{
          title: 'Profile',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
            elevation: 12,
            shadowColor: 'black',
          }
        }}
        component={Profile}
        />
    </Stack.Navigator>
  );
}
