import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.logo}>
            <TouchableOpacity onPress={() => navigation.navigate('olas')} style={styles.smallbuttonView1}>
                <View>
                    <Image

                        source={require('../assets/cal.png')} // Change this to the path of your image
                        style={styles.image}
                    />
                    <Text style={styles.ruleText}>Calculate</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('rules')} style={styles.smallbuttonView1}>
            <View>
                <Image
                    source={require('../assets/rule.png')} // Change this to the path of your image
                    style={styles.image}
                />
                <Text style={styles.ruleText}>    Rules</Text>
            </View>
            </TouchableOpacity>
         
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        flex: 1,
       backgroundColor:"blue",
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"center",
       

    },
    image:{
        marginRight:4
    },
    imageN:{
        
        justifyContent:"center",
        alignItems:"center"

    },
    ruleText:{
        alignItems:"center",
       paddingLeft:10,
       
    },
    smallbuttonView1:{
        backgroundColor:"#fff",
        justifyContent:"space-between",
        alignItems:"center",
       margin:40,
       borderRadius:20

    }
})
export default Home