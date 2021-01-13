import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const FifthScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-around' }}>
                <Text style={styles.title}>Thanks for reading!</Text>
                <Image source={require('../images/fifth.png')} style={styles.image} />
                <View>
                    <Text style={{ marginBottom: 15, fontSize: 25, alignSelf: 'center' }}>That's it!</Text>
                    <Text style={styles.description}>Now you know some basics of React Navigation. The next step is to try it out.</Text>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>This is the last screen. There is no <Text style={{ color: '#9090ff' }}>'Next'</Text> button.</Text>
                </View>
            </View>
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

export default FifthScreen
