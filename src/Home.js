import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => navigation.navigate('olas')} style={styles.smallbuttonView1}>
                <View>
                    <Image

                        source={require('../assets/cal.png')} // Change this to the path of your image
                        style={styles.image}
                    />
                    <Text style={styles.ruleText}>CALCULATEE</Text>
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
    Container: {
        flex: 1,
       backgroundColor:'#ffffff',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
      

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
       paddingLeft:20,
       color: "white",
       
       
       
    },
    smallbuttonView1:{
        backgroundColor:"#009fff",
        justifyContent:"space-between",
        alignItems:"center",
       margin:20,
       borderRadius:20,
       width: "70%",
       height: "15%",
      

    }
})
export default Home