import React, { Component } from "react";
import { View, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class PetTaxi extends Component {
    constructor(props) {
        super(props);
        this.error = false;
        this.state = {
            source: '',
            destination: '',
            date: '',
            time: '',
            sourceError: false,
            destError: false,
            dateError: false,
            timeError: false,
        }
    }

    validate() {
        if (this.state.source === '') {
            this.setState({ sourceError: true });
            this.error = true;
        } else {
            this.setState({ sourceError: false });
            this.error = false;
        }

        if (this.state.destination === '') {
            this.setState({ destError: true });
            this.error = true;
        } else {
            this.setState({ destError: false });
            this.error = false;
        }

        if (this.state.date === '') {
            this.setState({ dateError: true });
            this.error = true;
        } else {
            this.setState({ dateError: false });
            this.error = false;
        }

        if (this.state.time === '') {
            this.setState({ timeError: true });
            this.error = true;
        } else {
            this.setState({ timeError: false });
            this.error = false;
        }
    };

    navigate() {
        this.validate();
        if (!this.error) {
            this.props.navigation.navigate("PetTaxiConfirm", { state: this.state });
        }
    }

    image = { uri: "https://i.pinimg.com/originals/21/71/b7/2171b78e28322b87281061714a929769.jpg" };
    currentDate = new Date();
    minDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 1);
    maxDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.image} style={styles.image}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.body}>
                            <Image source={require('../../../assets/book-a-ride.png')} style={styles.ImageStyle} />
                            <TextInput placeholder={'pick-up address'}
                                style={[styles.input, { borderColor: this.state.sourceError ? 'red' : 'white', borderWidth: 1, borderStyle: 'solid' }]}
                                value={this.state.source}
                                onChangeText={(source) => this.setState({ source })}
                                onBlur={() => this.validate()} />
                            <TextInput placeholder={'drop address'}
                                style={[styles.input, { borderColor: this.state.destError ? 'red' : 'white', borderWidth: 1, borderStyle: 'solid' }]}
                                value={this.state.destination}
                                onChangeText={(destination) => this.setState({ destination })}
                                onBlur={() => this.validate()} />
                            <DatePicker
                                style={{ width: '90%', marginBottom: 36 }}
                                date={this.state.date} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate={this.minDate}
                                maxDate={this.maxDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 20,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: [{
                                        height: 50,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderRadius: 4
                                    }, { borderColor: this.state.dateError ? 'red' : 'white', borderWidth: 1, borderStyle: 'solid' }]
                                }}
                                onDateChange={(date) => { this.validate(); this.setState({ date: date }) }}
                            />
                            <DatePicker
                                style={{ width: '90%' }}
                                date={this.state.time} //initial date from state
                                mode="time" //The enum of date, datetime and time
                                placeholder="select time"
                                format="HH:mm"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                ref='picker'
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 20,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: [{
                                        height: 50,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderRadius: 4
                                    }, { borderColor: this.state.timeError ? 'red' : 'white', borderWidth: 1, borderStyle: 'solid' }]
                                }}
                                onDateChange={(time) => { this.validate(); this.setState({ time: time }) }}

                            />
                            <Button
                                title={'Book Ride'}
                                onPress={() => this.navigate()}
                                buttonStyle={styles.bookRide}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
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
    input: {
        width: '90%',
        marginBottom: 30,
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        borderRadius: 4,
    },
    bookRide: {
        padding: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#da5e5a',
        borderRadius: 18,
        position: "relative",
        top: 30
    },
    ImageStyle: {
        width: 400,
        height: 350,
        resizeMode: 'contain'
    }
});

export default PetTaxi