import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export function Login() {
    const [text, setText] = useState("hello")
    let num = "568888";

    return (
        // <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.header}>login</Text>
                <TextInput 
                placeholder='Enter text'
                placeholderTextColor={"gray"}
                style={styles.input}
                // onChange={()=>{console.log("something changed");}}
                 onChangeText={(inp)=>{setText(inp)}}
                />
                <Text>{text}</Text>
                {/* <View>
                <Button title ="submit" color={"green"}/>
                  </View> */}
                  <TouchableOpacity onPress={()=>{console.log(text);}} style={styles.btn}>
                    <Text style={{color: "white"}}>Submit</Text>
                  </TouchableOpacity>

            </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        fontSize: 30,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:20,
    },
    input:{
        borderColor:"green",
        borderWidth: 1,
        padding:10,
        borderRadius:50,
        fontSize: 18,

    },
    btn:{
        backgroundColor:"green",
        borderRadius:30,
        padding: 10,
        alignItems:"center"
    }
})