import React from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';

const FirstScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to our tour!</Text>
            <Image source={require('../images/first.png')} style={styles.image} />
            <View>
                <Text style={styles.description}>In this tour I want to show you some basic information about this app.</Text>
                <Text style={{ marginTop: 15, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to start this tutorial.</Text>
            </View>
            <Button title='Next' onPress={() => props.navigation.navigate('Second')} />
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
        height: '60%'
    },
    description: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    }
})

export default FirstScreen
