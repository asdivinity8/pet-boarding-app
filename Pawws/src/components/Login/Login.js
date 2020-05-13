import React, { Component } from "react";
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    image = { uri: "https://i.pinimg.com/originals/21/71/b7/2171b78e28322b87281061714a929769.jpg" };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={this.image} style={styles.image}>
                    <Text h1 style={styles.greeting}>Welcome !</Text>
                    <Button
                        title={'REGISTER'}
                        onPress={() => this.props.navigation.navigate("Home")}
                        buttonStyle={styles.register}
                        raised={true}
                    />
                    <Text style={styles.extraText}>Or</Text>
                    <TextInput
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'Username'}
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <Text style={styles.forgotPwd}>Forgot Password</Text>
                    <Button
                        title={'LOGIN'}
                        onPress={() => this.props.navigation.navigate("Home")}
                        buttonStyle={styles.login}
                        raised={true}
                    />
                </ImageBackground>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    greeting: {
        fontFamily: "Cochin",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,

    },
    input: {
        width: 300,
        height: 60,
        padding: 10,
        marginBottom: 10,
        borderColor: 'grey',
        borderRadius: 18,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    login: {
        padding: 10,
        width: 300,
        height: 60,
        backgroundColor: '#da5e5a',
        borderRadius: 18,
    },
    register: {
        backgroundColor: '#304057',
        padding: 10,
        width: 300,
        height: 60,
        borderRadius: 18,
    },
    extraText: {
        fontFamily: "Cochin",
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 20,
        marginTop: 20
    },
    forgotPwd: {
        fontFamily: "Cochin",
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 120,
        marginBottom: 10
    }
})

export default Login
