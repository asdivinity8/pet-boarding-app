import React, { Component } from "react";
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100, marginBottom: 50 }} source={{ uri: 'http://pluspng.com/img-png/paw-png-hd-large-prints-of-tiger-paws-clipart-library-png-tiger-paw-2500.png' }}></Image>
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

                <Button
                    title={'LOGIN'}
                    onPress={() => this.props.navigation.navigate("Home")}
                    buttonStyle={{ padding: 10, width: 200, backgroundColor: 'orange' }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        marginBottom: 10,
        borderColor: 'grey',
        borderRadius: 3,
        borderWidth: 1
    },
});

export default Login
