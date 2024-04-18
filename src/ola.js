import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

import Dropdown from './dropDowm/Dropdown'
import HorizontalLine from './HorizontalLine'
import { Picker } from '@react-native-picker/picker'
import ParentDropdown from './dropDowm/ParentDropdown'
import { useNavigation } from '@react-navigation/native'
const Ola = () => {

    const [amount, setAmount] = useState('');
    const [father, setFather] = useState('');
    const [mother, setMother] = useState('');
    const [son, setSon] = useState('');
    const [daughter, setDaughter] = useState("");
    const [borther, setBrother] = useState('');
    const [sister, setSister] = useState('');
    const [grandFather, setGrandFather] = useState("");
    const [grandmother, setGrandMother] = useState("");
    const [Genders, setGender] = useState('');
    const [couple, setCouple] = useState([]);
    const [coupleValue, setCoupleValue] = useState("");
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
    // Define data for both pickers
    const firstPickerData = [
        { label: 'Select Gender', value: '' },
        { label: 'Male/Man', value: 'option1' },
        { label: 'Female/Woman', value: 'option2' },

    ];

    const coupleMap = {
        option2: [
            { label: 'No', value: '00' },
            { label: 'Yes', value: '11' },

        ],
        option1: [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
        ],

    };
    const data = [

        { name: 'Mother', population: 8, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Grand_Father', population: 8, color: '#d9dd4f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ];

    const formatCurrency = (value) => {
        // Convert string to number
        let num = parseFloat(value.replace(/[$,]/g, ''));
        // Format the number to currency
        return isNaN(num) ? '' : num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    function currencyToNumber(currency) {
        // Remove currency symbols and separators
        const cleanedCurrency = currency.replace(/[^\d.-]/g, '');

        // Parse the cleaned string to a number
        const number = parseFloat(cleanedCurrency);

        // Return the number
        return number;
    }
    const Amt_num = currencyToNumber(amount);
    const handleInputChange = (input) => {
        // Remove non-numeric characters
        const numericValue = input.replace(/[^0-9.]/g, '');
        // Update state with formatted currency value
        setAmount(formatCurrency(numericValue));
    };
    const GenderAlert = () => {
        Alert.alert(
            'Select Gender',
            'Please Select The Gender !',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ],
            { cancelable: false }
        );
    };
    const CoupleAlert = () => {
        Alert.alert(
            'Select If  Alive',
            'Please Select If Husband Alive !',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ],
            { cancelable: false }
        );
    };

    const AmountAlert = () => {
        Alert.alert(
            'Input Amount',
            'Please Input The Amount!',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ],
            { cancelable: false }
        );
    };
    const parentAlive = [
        { label: 'NO', value: "0" },
        { label: 'YES', value: "1" },

    ]
    const renderTextBasedOnValue = () => {
        switch (Genders) {
            case 'option2':
                return 'Husband';
            case 'option1':
                return 'No.of Wive(s)';
            default:
                return 'Select Gender';
        }
    };
    const navigation = useNavigation();

    const Calculate = () => {
        if (!Genders) {
            console.log(coupleValue)
            GenderAlert();
        }

        else if (!amount) {
            AmountAlert();
        }

        else {
            if (Genders === 'option1') // Checking if is Male
            {
                if (grandFather === '1' && mother === '1')// For the first condition
                 {
                    const data = [

                        { name: 'Mother', population: 8, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Grand_Father', population: 8, color: '#d9dd4f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    ];
                    console.log("amount", Amt_num)
                    const heriteValueOfMother = (1 / 3) * Amt_num;
                    const heriteValueFather = Amt_num - heriteValueOfMother;

                    data.forEach(item => {
                        if (item.name === 'Grand_Father') {
                            item.population = heriteValueFather;
                        } else if (item.name === 'Mother') {
                            item.population = heriteValueOfMother;
                        }
                    });
                    navigation.navigate('myPieChart', { data: data });

                } // first condition end here
                else if ( coupleValue => '4' && borther <= '10') // second condition start herrrrre
                {
console.log(" Good Joy")
const data = [

    { name: 'Brother', population: 8, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Wive(s)', population: 8, color: '#d9dd4f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];
console.log("amount", Amt_num)
const heriteValueOfwive = (1 / 4) * Amt_num;
const heriteValueBrother = Amt_num - heriteValueOfwive;

data.forEach(item => {
    if (item.name === 'Wive(s)') {
        item.population = heriteValueOfwive;
    } else if (item.name === 'Brother') {
        item.population = heriteValueBrother;
    }
});
navigation.navigate('myPieChart', { data: data });
                }
            } 
            else if (Genders.toLowerCase() === 'option2') // Checking if is a Female
            {
                console.log("this is a female")
                if (coupleValue === "11" && father === "1" && son <= 10) {
                    console.log('good one')
                    const data = [

                        { name: 'Mother', population: 8, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Father', population: 8, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Husband', population: 8, color: '#800000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Son', population: 8, color: '#FFFF00', legendFontColor: '#7F7F7F', legendFontSize: 15 },

                    ];

                    console.log("amount", Amt_num)
                    const heriteValueFather = (1 / 6) * Amt_num;
                    const Husband = (1 / 4) * Amt_num;
                    const MotherValue = (1 / 6) * Amt_num;
                    const SonValue = Amt_num - MotherValue - heriteValueFather - Husband;

                    data.forEach(item => {
                        if (item.name === 'Father') {
                            item.population = heriteValueFather;
                        } else if (item.name === 'Mother') {
                            item.population = MotherValue;
                        } else if (item.name === 'Husband') {
                            item.population = Husband;
                        } else if (item.name === 'Son') {
                            item.population = SonValue;
                        }
                    });

                    navigation.navigate('myPieChart', { data: data });
                }

            }
            // navigation.navigate('myPieChart', { data: data });
            console.log(Amt_num - 5)
        }

    };
    // const data = [
    //     { name: 'Father', population: 50, color: '#297AB1', legendFontColor: '#7F7F7F', legendFontSize: 15 },

    //     { name: 'Mother', population: 90, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Wive(s)', population: 20, color: '#d9534f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Son', population: 20, color: '#d9534f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Daughter', population: 20, color: '#ff534f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Brother', population: 20, color: '#df564f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Sister', population: 20, color: '#d9534f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Grand Father', population: 20, color: '#d9dd4f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: 'Grand Mother', population: 20, color: '#d9c74f', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    // ];


    // const newPopulationValueFather = 69
    // const newPopulationValueSon = 25;

    // // Changing the population values
    // data.forEach(item => {
    //     if (item.name === 'Father') {
    //         item.population = newPopulationValueFather;
    //     } else if (item.name === 'Son') {
    //         item.population = newPopulationValueSon;
    //     }
    // });

    const handleFirstPickerChange = (value) => {
        setGender(value);
        console.log(value)
        // Update the second picker data based on the selection in the first picker
        const newData = coupleMap[value] || [];
        setCouple(newData);
        setCoupleValue('');
    };

    const handleSecondPickerChange = (value) => {
        setCoupleValue(value);
        console.log(value)
    };


    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View style={styles.inputTitle} >
                    <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>Gender Of The deceased?</Text></View>
                    <View style={{ width: 180 }}>
                        <Picker
                            selectedValue={Genders}
                            onValueChange={handleFirstPickerChange}
                            setGender={Genders}
                        >
                            {firstPickerData.map((item, index) => (
                                <Picker.Item key={index} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <HorizontalLine />
                <View style={styles.inputTitle} >

                    <View>
                        <Text style={{ marginTop: 1 }}>Property Value/Amount{"\n"}That the deceased has Left</Text></View>
                    <View style={{ width: -30 }}>
                        <TextInput
                            style={styles.amount}
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
                            {parentAlive.map((item, index) => (
                                <Picker.Item key={index} label={item.label} value={item.value} />
                            ))}
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
                            <Picker.Item label="No" value="0" />
                            <Picker.Item label="Yes" value="1" />

                        </Picker>
                    </View>
                </View>
                <HorizontalLine />
                <View style={styles.inputTitle} >
                    <View><Text style={{ marginTop: 15, fontWeight: "bold" }}>{renderTextBasedOnValue()}</Text></View>
                    <View style={{ width: 180 }}>
                        <Picker
                            selectedValue={coupleValue}

                            onValueChange={handleSecondPickerChange}

                        >
                            {couple.map((item, index) => (
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
            <Button style={{ width: 2 }}
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
    amount: {
        marginRight: 20,
        height: 40,
        width: 150,
        borderRadius: 5,
        borderWidth: 1 / 2,
        backgroundColor: "#009fff",
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
        fontWeight: "bold",


    },
    veiwInput: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        textAlign: "center"
    }
    , Button: {
        backgroundColor: "white",
        width: "50",
        fontWeight: "bold",
    }
})


export default Ola
