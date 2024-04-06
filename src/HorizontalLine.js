import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
color:"dark",
    borderBottomColor: "dark",
    borderBottomWidth: 1,
    marginVertical: 10, // Adjust margin as needed
  },
});

export default HorizontalLine;
