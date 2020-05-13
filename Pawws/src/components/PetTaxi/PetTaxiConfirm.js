import React, { Component } from "react";
import { View, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

class PetTaxiConfirm extends Component {
    constructor(props) {
        super(props);
    }
    image = { uri: "https://i.pinimg.com/originals/21/71/b7/2171b78e28322b87281061714a929769.jpg" };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.image} style={styles.image}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.body}>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView: {
        marginHorizontal: 0,
    },
    body: {
        paddingBottom: 20,
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
});
export default PetTaxiConfirm