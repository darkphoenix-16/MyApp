import { Text, StyleSheet, View, StatusBar, SafeAreaView, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export function SignUp() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.bg} source={require("../assets/pexels.jpg")}>
                <View style={styles.container}>
                    <Text style={styles.text}>Sign Up</Text>

                    <TextInput
                        placeholder='Enter  Full Name'
                        placeholderTextColor={"gray"}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter E-mail'
                        placeholderTextColor={"gray"}
                        style={styles.input}
                    />
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
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: "black", fontSize: 20 }}>Register</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:3,marginTop:5}}>You can also register on our website at www.website.com</Text>
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
        backgroundColor: "#01162511",
    },
    text: {
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 197,
        marginBottom: 20
    },
    input: {
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        marginTop: 13

    },
    btn: {
        backgroundColor: "#50785ca5",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        marginVertical: 10,
        marginTop: 30
    }
})