import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export function SignIn() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.bg} source={require('../assets/colorful.jpg')}>
                <View style={styles.container}>
                    <Text style={styles.text}>Sign In</Text>

                    <TextInput
                        placeholder='Enter Username'
                        placeholderTextColor={"gray"}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor={"gray"}
                        style={styles.input}
                    />

<TouchableOpacity  style={styles.btn}>
                <Text style={{ color: "black" , fontSize:20}}>Log In</Text>
            </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#d3e8f84b",
    },
    text: {
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 230,
        marginBottom:20
    },
    input:{
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        marginTop: 10

    },
    btn:{
        backgroundColor: "#50785ca5",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        marginVertical: 10,
        marginTop:20
    }
})