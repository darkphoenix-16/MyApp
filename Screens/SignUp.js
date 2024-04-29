import { Text, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import React  from 'react'

export function SignUp() {
    return (
        <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text>SignUp</Text>
      </View>
        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
})