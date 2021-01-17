import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, BackHandler } from 'react-native';

const ThirdScreen = (props) => {

    useEffect(() => {
        const thirdBackAction = () => {
            props.navigation.navigate('Second')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            thirdBackAction
        );

        return () => {
            BackHandler.removeEventListener("hardwareBackPress",
                () => thirdBackAction)
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>React Navigation</Text>
            <Image source={require('../images/third.png')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, color: 'black', alignSelf: 'center' }}>How does it work?</Text>
                <Text style={styles.description}>For displaying any screen we have to define function or class that is returning some JSX and than put it in our Stack Navigator into main file of our application.{'\n'}Voilà, your screens are ready to display!</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>
            </View>
            <Button title='Next' onPress={() => props.navigation.navigate('Fourth')} />

        </SafeAreaView >)
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

export default ThirdScreen
