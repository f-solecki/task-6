import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, BackHandler } from 'react-native';

const SecondScreen = (props) => {

    useEffect(() => {
        const backAction = () => {
            props.navigation.navigate('First')
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
            <Text style={styles.title}>React Navigation</Text>
            <Image source={require('../images/second.jpg')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, alignSelf: 'center' }}>What is React Navigation?</Text>
                <Text style={styles.description}>React Navigation is the library that allows us to navigate between screens such as going to the next   slide of presentation.</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>

            </View>
            <Button title='Next' onPress={() => props.navigation.navigate('Third')} />
        </SafeAreaView>
    )
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
        height: '60%'
    },
    description: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    }
})

export default SecondScreen
