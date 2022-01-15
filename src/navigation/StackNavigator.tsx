import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Contacts } from '../screens/Contacts'
import { Profile } from '../screens/Profile'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
