
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStack from './src/NavigationStack';

const Stack = createStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
    <NavigationStack />
  </NavigationContainer>
  );
}


