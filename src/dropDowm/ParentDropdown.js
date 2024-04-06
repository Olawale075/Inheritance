import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const ParentDropdown = ({ mother, onValueChanges, parentAlive }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Picker
        selectedValue={mother}
        style={{ height: 50, width: 150 }}
        onValueChanges={onValueChanges}
      >
        {parentAlive.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default ParentDropdown;
