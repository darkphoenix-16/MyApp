import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ActivityIndicator, Avatar, Button, Card, MD2Colors, Modal, PaperProvider, Portal, Switch } from 'react-native-paper'
import { useState } from "react"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SedgwickAveDisplay_400Regular } from '@expo-google-fonts/sedgwick-ave-display'
import { Manrope_400Regular } from '@expo-google-fonts/manrope'

export function Products() {

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [load, setLoad] = useState(true);
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {};

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ SedgwickAveDisplay_400Regular });
                await Font.loadAsync({ Manrope_400Regular });
                await new Promise(resolve => setTimeout(resolve, 3000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>

                <View style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: "SedgwickAveDisplay_400Regular", fontSize: 20 }}>Products</Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    <FontAwesomeIcon icon={faUser} size={30} style={{ marginBottom: 30 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", borderColo: "#ff67c0", borderWidth: 1, borderRadius: 10 }}>
                        <FontAwesomeIcon icon={faFacebook} size={30} color='blue' />
                        <FontAwesomeIcon icon={faTwitter} size={30} color="blue" />
                        <FontAwesomeIcon icon={faInstagram} size={30} color="purple" />
                        <FontAwesomeIcon icon={faGithub} size={30} color='black' />
                        <FontAwesomeIcon icon={faWhatsapp} size={30} color='green' />
                    </View>
                    {
                        isSwitchOn ? <ActivityIndicator animating={true} size={90} color={MD2Colors.red800} /> : null
                    }

                    <Button mode='contained-tonal'
                        onPress={() => console.log("react native")}
                        loading={false}
                        icon="camera"
                        style={{ marginBottom: 15 }}
                    >Click here</Button>

                    <View style={styles.shadow}></View>

                    <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" />
                        <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card content</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>

                    <Button mode='contained-tonal'
                        onPress={() => setLoad(!load)}
                        loading={load}
                        style={{ marginTop: 15 }}
                    >Assignment
                    </Button>

                    <PaperProvider>
                        <Button
                            mode='contained-tonal' style={{ color: "purple", marginTop: 15 }} onPress={showModal}  >
                            Show
                        </Button>
                        <Portal>
                            <Modal visible={visible} style={{ flex: 1 }}
                                contentContainerStyle={containerStyle}
                                onDismiss={hideModal}
                            >
                                <Text>Example Modal.  Click outside this area to dismiss.</Text>
                            </Modal>
                        </Portal>
                    </PaperProvider>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 20,
    },
    shadow: {
        backgroundColor: "#ffffff",
        marginVertical: 10,
        borderRadius: 10,
        padding: 50,
        elevation: 10, //for android only
        shadowColor: "ffffff",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
})