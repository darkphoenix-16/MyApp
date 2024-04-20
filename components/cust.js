import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { appStyles } from './components/AppStyles';

export default function Cust() {
  return (
    <ImageBackground style={styles.bg} source={require("./assets/splash.png")}>
    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontSize : 30, }}>Hello hello!</Text>
       <Image source={require("./assets/icon.png")} style={styles.img}/>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo {"\n"}
        hello
       </Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo</Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo</Text>
       </View>
       <View style={appStyles.card}>
       <Text>helloooooo</Text>
       </View>
       </ScrollView>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg :{
    flex : 1
  },
  container: {
    flex: 1, //takes available space of screen
    backgroundColor: '',
    padding : 20,
    marginTop : 30,
    borderRadius: 20,
    borderBottomLeftRadius: 53,
    borderBottomRightRadius: 53,
    backgroundColor: "orange" ,
    // margin: 10,
    // height : 100,
    width : "100%",
    borderWidth :3,
    borderColor : "orangered",
    borderStyle: "dotted"
  },
  img : {
    height:200,
    width: 200,
    
  },
  
});
