import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Dropdown = ({ Daughters, onValueChange, valueNumber }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Picker
        setDaughters={Daughters}
        style={{ height: 50, width: 150 }}
        onValueChange={onValueChange}
      >
        {valueNumber.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Dropdown;
