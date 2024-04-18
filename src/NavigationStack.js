// In a separate file, e.g., NavigationStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPieChart from './MyPieChart';
import Inheritance from './Inheritance';
import Ola from './ola';
import Home from './Home';
import Rules from './Rules';






const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Calculate" component={Ola} />
       <Stack.Screen name="rules" component={Rules} /> 
      <Stack.Screen name="myPieChart" component={MyPieChart} />
    </Stack.Navigator>
  );
};

export default NavigationStack;