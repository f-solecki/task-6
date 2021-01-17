import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, BackHandler } from 'react-native';

const FourthScreen = (props) => {

    useEffect(() => {
        const backAction = () => {
            props.navigation.navigate('Third')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => {
            BackHandler.removeEventListener("hardwareBackPress",
                () => backAction)
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Stack Navigator</Text>
            <Image source={require('../images/fourth.png')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, alignSelf: 'center' }}>What is Stack Navigator?</Text>
                <Text style={styles.description}>It provides a way for your app to transition between screens and manage navigation history. The app pushes and pops items from the navigation stack when users interact with it, and they can see different screens.</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>
            </View>
            <Button title='Next' onPress={() => props.navigation.navigate('Fifth')} />

        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 35 : 0

    },
    title: {
        fontSize: 40,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '48%'
    },
    description: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    }
})

export default FourthScreen
