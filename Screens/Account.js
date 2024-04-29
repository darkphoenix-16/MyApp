import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export function Account() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.bg} source={require("../assets/frederic.jpg")}>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome</Text>
                    <View style={[styles.parent]}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnn}>
                            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#bae77b21",
    },
    text: {
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 250,
    },
    parent:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center", 
        display:"flex",
    },
    btn: {
        backgroundColor:"#98bb23b8",
        borderColor:"green",
        borderRadius: 30,
        padding: 17,
        alignItems: "flex-start",
        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 100,
        marginLeft: 42
      },
      btnn: {
        backgroundColor:"#98bb23b8",
        borderColor:"green",
        borderRadius: 30,
        padding: 17,
        alignItems: "flex-end",
        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 100,
        marginRight:42
      },
})