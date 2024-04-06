// In a separate file, e.g., NavigationStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPieChart from './MyPieChart';
import Inheritance from './Inheritance';
import Ola from './ola';






const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="olas" component={Ola} />
      {/* <Stack.Screen name="Inheritance" component={Inheritance} /> */}
      <Stack.Screen name="myPieChart" component={MyPieChart} />
    </Stack.Navigator>
  );
};

export default NavigationStack;