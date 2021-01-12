import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ThirdScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Navigation</Text>
            <Image source={require('../images/third.png')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, color: 'black', alignSelf: 'center' }}>How does it work?</Text>
                <Text style={styles.description}>For displaying any screen we have to define function or class that is returning some JSX and than put it in our Stack Navigator into main file of our application.{'\n'}Voilà, your screens are ready to display!</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>
            </View>
            <Button title='Next' onPress={() => props.navigation.navigate('Fourth')} />

        </View >)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
