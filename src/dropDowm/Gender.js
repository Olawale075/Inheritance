import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Gender = ({ Genders, onValueChange, gender }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Picker
        Genders={Genders}
        style={{ height: 50, width: 150 }}
        onValueChange={onValueChange}
      >
        {gender.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
        
      </Picker>
    </View>
  );
};

export default Gender;
