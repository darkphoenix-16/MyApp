import { Alert, Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export function Login() {
    const [text, setText] = useState("");
    const [alltext, setAllText] = useState([]);

    function submitText() {
        const date = new Date();
        setAllText(prev => [...prev, {text : text, date:date}])
        Alert.alert("Adding text",
            "Text added successfully",
            [{ text: "nice!" }, { text: "remove", onPress: () => { setAllText(alltext.slice(0, -1)) } }]
        )
        ToastAndroid.showWithGravity("Text added successfully",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        )
        setText("")
    }

    function timeAdded(date) {
        const timestamp = new Date().getTime() - date.getTime();
        const secAgo = timestamp / 1000;
        if (secAgo < 60) {
          return secAgo.toFixed(0) + " seconds ago";
        }
        const minAgo = secAgo / 60;
        if (minAgo < 60) {
          return minAgo.toFixed(0) + " minutes ago";
        }
        const hoursAgo = minAgo / 60;
        if (hoursAgo < 24) {
          return hoursAgo.toFixed(0) + " hours ago";
        }
        const daysAgo = hoursAgo / 24;
        if (daysAgo < 7) {
          return daysAgo.toFixed(0) + " days ago";
        }
        const weeksAgo = daysAgo / 7;
        if (weeksAgo < 4) {
          return weeksAgo.toFixed(0) + " weeks ago";
        }
        const monthsAgo = weeksAgo / 4;
        if (monthsAgo < 12) {
          return monthsAgo.toFixed(0) + " months ago";
        }
        const yearsAgo = monthsAgo / 12;
        return yearsAgo.toFixed(0) + " years ago";
      }
    return (
        // <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.header}>login</Text>
            <TextInput
                placeholder='Enter text'
                placeholderTextColor={"gray"}
                style={styles.input}
                // onChange={()=>{console.log("something changed");}}
                onChangeText={(inp) => { setText(inp) }}
                value={text}
                multiline
                
            />
            {/* <Text>{text}</Text> */}
            {/* <View>
                <Button title ="submit" color={"green"}/>
                  </View> */}
            <TouchableOpacity onPress={submitText} style={styles.btn}>
                <Text style={{ color: "white" }}>Submit Text</Text>
            </TouchableOpacity>
            <FlatList
                data={alltext}
                renderItem={({ item }) => {
                    const timeago = timeAdded(item.date);
                    return (
                        <View style={styles.card}>
                            <Text style={styles.text}>{item.text}</Text>
                            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", alignItems: "flex-end" }}>
                                <Text style={styles.date}>{timeago}</Text>
                                <TouchableOpacity style={styles.cardBtn}>
                                    <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
                key={({ item }) => { { item } }} //incase theres an error
            />
        </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        fontSize: 30,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        height:100,

    },
    btn: {
        backgroundColor: "green",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        marginVertical: 10,
    },
    card: {
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        padding: 5,
        marginTop: 5,
    },
    date: {
        fontSize: 15,
        textAlign: "right",
        fontStyle: "italic",
        color: "gray"
    },
    text: {
        fontSize: 18,
    },
    cardBtn: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 10,

    }
})