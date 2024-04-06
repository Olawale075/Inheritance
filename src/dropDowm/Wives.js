import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Wives = ({ selectedValue, onValueChange, wivesAlive }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={onValueChange}
      >
        {wivesAlive.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Wives;
