import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export  function SignIn() {
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground style={styles.bg} source={require('../assets/colorful.jpg')}>
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex:1
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
        marginTop: 170,
    }
})