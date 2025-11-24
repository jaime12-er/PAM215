import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/profile';
import ProfileDetail from './screens/detalle';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen name="ProfileMain" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}
