import { View, Text, StyleSheet,ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import Dropdown from './dropDowm/Dropdown'
import HorizontalLine from './HorizontalLine'
import { Picker } from '@react-native-picker/picker'
import ParentDropdown from './dropDowm/ParentDropdown'
import { useNavigation } from '@react-navigation/native'
const Ola = () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    const [Genders, setGender] = useState("yes");
    const [property, setProperty] = useState("")
    const [amount, setAmount] = useState('');
    const [father, setFather] = useState('Yes');
    const [mother, setMother] = useState('Yes');
    const [wives, setWives] = useState('0');
    const [son, setSon] = useState('');
    const [daughter, setDaughter] = useState("");
    const [borther, setBrother] = useState('');
    const [sister, setSister] = useState('');
    const [grandFather, setGrandFather] = useState("");
    const [grandmother, setGrandMother] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState();
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
    const parentAlive = [
        { label: 'YES', value: "1" },
        { label: 'NO', value: "0" },
      ]
      const data = [
        { name: 'Father', population: 50, color: '#297AB1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Mother', population: 30, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Son', population: 20, color: '#d9534f', legendFontColor: '#7F7F7F', legendFontSize: 15 }
      ];
      const navigation = useNavigation();
      const Calculate = () => {
        navigation.navigate('myPieChart', { data: data });
      };
    const wivesAlive = [
        { label: '0', value: "0" },
        { label: '1', value: "1" },
        { label: '2', value: "2" },
        { label: '3', value: "3" },
        { label: '4', value: "4" },
      ]
    const valueNumber = [
        { label: '0', value: "0" },
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
    
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Gender Of The deceased?</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        }>
                        <Picker.Item label="Male/Man" value="1" />
                        <Picker.Item label="Female/Woman" value="2" />
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >

                <View>
                    <Text style={{ marginTop: 1 }}>Property Value/Amount{"\n"}That the deceased has Left</Text></View>
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
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Father</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={father}
                        onValueChange={(itemValue, itemIndex) =>
                            setFather(itemValue)
                        }>
                        <Picker.Item label="Yes" value="10" />
                        <Picker.Item label="No" value="23" />
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            
        <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Mother</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={mother}
                        onValueChange={(itemValue, itemIndex) =>
                            setMother(itemValue)
                        }>
                        <Picker.Item label="Yes" value="10" />
                        <Picker.Item label="No" value="23" />
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>No. Of Wive(s)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={wives}
                        onValueChange={(itemValue, itemIndex) =>
                            setWives(itemValue)
                        }>
                         {wivesAlive.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>No.OF Son(s)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={son}
                        onValueChange={(itemValue, itemIndex) =>
                            setSon(itemValue)
                        }>
                         {valueNumber.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>No.OF Daughter(s)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={daughter}
                        onValueChange={(itemValue, itemIndex) =>
                            setDaughter(itemValue)
                        }>
                         {valueNumber.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>No.OF Brother(s)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={borther}
                        onValueChange={(itemValue, itemIndex) =>
                            setBrother(itemValue)
                        }>
                         {valueNumber.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>No.OF Sister(s)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={sister}
                        onValueChange={(itemValue, itemIndex) =>
                            setSister(itemValue)
                        }>
                         {valueNumber.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
            <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Paternal Grand{"\n"}Farther{"\n"}(Father's)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={grandFather}
                        onValueChange={(itemValue, itemIndex) =>
                            setGrandFather(itemValue)
                        }>
                         {parentAlive.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
              <View style={styles.inputTitle} >
                <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Paternal Grand{"\n"}Mother{"\n"}(Mother's)</Text></View>
                <View style={{ width: 180 }}>
                    <Picker
                        selectedValue={grandmother}
                        onValueChange={(itemValue, itemIndex) =>
                            setGrandMother(itemValue)
                        }>
                         {parentAlive.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
                    </Picker>
                </View>
            </View>
            <HorizontalLine />
        </View>
        <Button style={{width:78}}
          title="Calculate"
          onPress={Calculate}
        />
        </ScrollView>

    );
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
    timer: {
        marginRight: 20,
        height: 40,
        width: 150,
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


export default Ola
const YourComponent = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
            </Picker>
        </View>
    );
};
