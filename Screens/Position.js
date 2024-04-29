import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Position() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Position</Text>
                <View style={styles.parent}>
                    {/* <View style={styles.box}></View> */}
                    {/* <View style={styles.box}></View> */}
                    {/* <View style={[styles.box, {backgroundColor:"orange", width:120, height:120, borderRadius:500 ,position:"absolute",top:0, zIndex:-4, left:10}]}></View> */}
                    <View style={[styles.box, {marginLeft:12}]}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>

                    <View style={[styles.box,{backgroundColor:"black" , marginLeft:12}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>

                    <View style={[styles.box, {marginLeft:12}]}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>

                    <View style={[styles.box,{backgroundColor:"black" , marginLeft:12}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>

                    <View style={[styles.box, {marginLeft:12}]}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>

                    <View style={[styles.box,{backgroundColor:"black" , marginLeft:12}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>

                    <View style={[styles.box, {marginLeft:12}]}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    
                    <View style={[styles.box,{backgroundColor:"black" , marginLeft:12}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box,{backgroundColor:"black"}]}></View>
                    <View style={styles.box}></View>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal:20,
    },
    parent: {
        flex: 1,
        backgroundColor:"#71c06b50",
        flexDirection:"row",
        flexWrap:"wrap",
        // justifyContent:"center",
        // alignItems:"center",
        display:"flex",
        
    },
    box: { 
        width:40,
        height:40,
        backgroundColor :"white",
        // margin:3,
    },
})