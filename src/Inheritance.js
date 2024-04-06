import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Button, TextInput } from 'react-native'
import PieChart from 'react-native-pie-chart';
import MyPieChart from './MyPieChart'
import { useNavigation } from '@react-navigation/native';

import HorizontalLine from './HorizontalLine';

import Dropdown from './dropDowm/Dropdown';
import ParentDropdown from './dropDowm/ParentDropdown';

import Wives from './dropDowm/Wives';
import Picker from 'react-native-picker-select';


const Inheritance = () => {
  const navigation = useNavigation();
  // const [selectedValue, setSelectedValue] = useState();
  const [Genders, setGender] = useState();
  const [property, setProperty] = useState("")
  const [amount, setAmount] = useState('');
  const [ father, setFather]= useState("");
  const[ mother,setMother]=useState('');
  const[wives,setWives]=useState('');
  const[son,setSon]=useState('');
  const[daughter,setDaughter]=useState("");
  const[borther,setBrother]=useState('');
  const[sister,setSister]=useState('');
  const[grandFather, setGrandFather]=useState("");
  const[grandmother, setGrandMother]=useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  // Function to format the currency
  const formatCurrency = (value) => {
    // Convert string to number
    let num = parseFloat(value.replace(/[$,]/g, ''));
    // Format the number to currency
    return isNaN(num) ? '' : num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  const handleInputChange = (input) => {
    // Remove non-numeric characters
    const numericValue = input.replace(/[^0-9.]/g, '');
    // Update state with formatted currency value
    setAmount(formatCurrency(numericValue));
  };
  const data = [
    { name: 'Father', population: 50, color: '#297AB1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Mother', population: 30, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Son', population: 20, color: '#d9534f', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ];
  const handleValueChange = (value) => {
    setSelectedValue(value);
    setFather(value);
    setGender(value)
  }
  const handleValueChanges = (value) => {
   
    setFather(value);
    console.log(value);
  }
  const parentAlive = [
    { label: 'YES', value: "1" },
    { label: 'NO', value: "0" },
  ]
  const wivesAlive = [
    { label: '1', value: "1" },
    { label: '2', value: "2" },
    { label: '3', value: "3" },
    { label: '4', value: "4" },
  ]
  const gender = [
    { label: 'Male/Man', value: "0" },
    { label: 'Female/Woman', value: "1" }
  ]
  const valueNumber = [
    { label: ' 1', value: '1' },
    { label: '2', value: '2' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
  ];

  const Calculate = () => {
    navigation.navigate('myPieChart', { data: data });
  };

  const placeholder = {
    label: 'Select an option...',
    value: null,
  };
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>Gender Of The deceased?</Text></View>
          <View style={{ width: -30 }}>
          <Genders
               
               selectedValue={Genders}
               onValueChange={handleValueChange}
             
             gender={gender}
           />
        
          </View>
        </View>

        <HorizontalLine />
        <View style={styles.inputTitle} > 

          <View>
            <Text style={{ marginTop: 15 }}>Property Value/Amount{"\n"}That the deceased has Left</Text></View>
          <View style={{ width: -30 }}>
            <TextInput
              style={styles.timer}
        keyboardType="numeric"
        value={amount}
        onChangeText={handleInputChange}
        placeholder="$0.00"
        placeholderTextColor="#CCCCCC"
            />
          </View>
        </View>
        <HorizontalLine />
        <Text style={styles.inputTitleText} >Select below the relative of the deceased which are present/Alive</Text>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>Father</Text></View>
          <View style={{ width: -30 }}>
            <ParentDropdown
               
                selectedValue={father}
                onValueChange={handleValueChanges}
                // onValueChange={handleValueChanges}
              parentAlive={parentAlive}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>Mother</Text></View>
          <View style={{ width: -30 }}>
            <ParentDropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              parentAlive={parentAlive}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>No.Of Wives</Text></View>
          <View style={{ width: -30 }}>
            <Wives
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              wivesAlive={wivesAlive}
            />
          </View>
        </View>

        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>No.Of Sons</Text></View>
          <View style={{ width: -30 }}>
            <Dropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              valueNumber={valueNumber}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>No.Of Daughters</Text></View>
          <View style={{ width: -30 }}>
            <Dropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              valueNumber={valueNumber}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>No.Of Brother</Text></View>
          <View style={{ width: -30 }}>
            <Dropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              valueNumber={valueNumber}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>No.Of Sisters</Text></View>
          <View style={{ width: -30 }}>
            <Dropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              valueNumber={valueNumber}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>Paternal GrandFather(s){"\n"}(Father's Farther)</Text></View>
          <View style={{ width: -30 }}>
            <ParentDropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              parentAlive={parentAlive}
            />
          </View>
        </View>
        <HorizontalLine />
        <View style={styles.inputTitle} >
          <View>
            <Text style={{ marginTop: 15 }}>Paternal GrandMother(s){"\n"}(Mother's Mother)</Text></View>
          <View style={{ width: -30 }}>
            <ParentDropdown
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
              parentAlive={parentAlive}
            />
          </View>
        </View>
        <HorizontalLine />

        <Button style={{width:78}}
          title="Calculate"
          onPress={Calculate}
        />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: "bold", paddingLeft: 3
  },
  inputTitle: {
    justifyContent: "space-between",

    flexDirection: 'row',
  }, 
  timer:{ marginRight:20,
    height: 50,
     width: 150 ,
    borderRadius: 5,
    borderWidth: 1 / 2,
    backgroundColor: "#fff",
    fontSize: 18,
    textAlign: "center"
  },
  inputView: {

    textAlign: "center",

    paddingLeft: 0,
    flex: 4,
    width: 400,
    height: 200,
    resizeMode: 'cover',

  }, inputTitleText: {
    marginRight: 20,
    textAlign: "center",
    fontWeight: "bold"

  },
  veiwInput: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    textAlign: "center"
  }
})

export default Inheritance