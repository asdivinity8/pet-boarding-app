import React, { Component } from "react";
import { View, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class PetTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: '',
            destination: '',
            date: new Date(),
            time: '12:00',
            addressError: false,
            tdError: false,
        }
    }

    formatDate(date) {
        let sysDate = new Date();
        var day = sysDate.getDate();
        var month = sysDate.getMonth() + 1;
        var year = sysDate.getFullYear();
        date = date.split('-').map(x => +x);
        if (year > date[2] || month > date[1]) {
            return false;
        } else if (year === date[2] && month === date[1]) {
            if (day >= date[0]) {
                return false;
            }
        } else {
            return true;
        }

    }

    validate() {
        if (this.state.source === '' || this.state.destination === '') {
            this.setState({ addressError: true });
        } else if (!this.formatDate(this.state.date)) {
            this.setState({ tdError: true });
        } else {

            this.props.navigation.navigate("PetTaxiConfirm");
        }
    };

    image = { uri: "https://i.pinimg.com/originals/21/71/b7/2171b78e28322b87281061714a929769.jpg" };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.image} style={styles.image}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.body}>
                            <Image source={require('../../../assets/book-a-ride.png')} style={styles.ImageStyle} />
                            <TextInput placeholder={'pick-up address'}
                                style={styles.input}
                                value={this.state.source}
                                onChangeText={(source) => this.setState({ source })} />
                            {this.state.addressError ? <Text>Please enter a valid address</Text> : null}
                            <TextInput placeholder={'drop address'}
                                style={styles.input}
                                value={this.state.destination}
                                onChangeText={(destination) => this.setState({ destination })} />
                            {this.state.addressError ? <Text>Please enter a valid address</Text> : null}
                            <DatePicker
                                style={{ width: '90%', marginBottom: 36 }}
                                date={this.state.date} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-2020"
                                maxDate="01-01-2021"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 20,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        height: 50,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderRadius: 4
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            {this.state.tdError ? <Text>Please enter a date greater than today</Text> : null}
                            <DatePicker
                                style={{ width: '90%' }}
                                date={this.state.time} //initial date from state
                                mode="time" //The enum of date, datetime and time
                                placeholder="select time"
                                format="HH:mm"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 20,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {

                                        height: 50,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderRadius: 4
                                    }
                                }}
                                onDateChange={(time) => { this.setState({ time: time }) }}
                            />
                            <Text></Text>
                            <Button
                                title={'Book Ride'}
                                onPress={() => this.validate()}
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