import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const MyPieChart = () => {
  const navigation = useNavigation();
      const route = useRoute();
      const { data } = route.params;
    
  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="2"
        absolute
      />
    </View>
  );
};

export default MyPieChart;