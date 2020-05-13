import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Icon, Tile, Card, Button } from 'react-native-elements';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#333333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    image = { uri: "https://i.pinimg.com/originals/21/71/b7/2171b78e28322b87281061714a929769.jpg" };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.image} style={styles.image}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.body}>
                            <View style={styles.SectionStyle}>

                                <Image source={require('../../../assets/search.png')} style={styles.ImageStyle} />

                                <TextInput placeholder={'Search for services, products, etc'}
                                    style={{ flex: 1 }}>
                                </TextInput>

                            </View>
                            <Card
                                title="Pet Boarding"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://webstockreview.net/images/clipart-designs-house-19.png' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="BOOK NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                            </Card>
                            <Card
                                title="Pet Grooming"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://www.clipartkey.com/mpngs/m/74-745584_dog-groomer-school-dog-grooming-icon-png.png' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="BOOK NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                            </Card>
                            <Card
                                title="Veterinary Consultation"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://us.123rf.com/450wm/ankomando/ankomando1803/ankomando180300021/97467692-stock-vector-veterinarian-and-nurse-who-consult-pet.jpg?ver=6 ' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="BOOK NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                            </Card>
                            <Card
                                title="Pet Store"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://cdn.clipart.email/2069e7b0bf72d850ae990c3f6ba691a0_pet-store-clipart_550-480.png' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="ORDER NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                            </Card>
                            <Card
                                title="Pet Taxi"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://webstockreview.net/images/driving-clipart-taxi-driver-16.png' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="BOOK NOW"
                                    titleStyle={{ fontWeight: '700' }}
                                    buttonStyle={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("PetTaxi")}></Button>
                            </Card>
                            <Card
                                title="Pet Adoption"
                                style={styles.card}
                            >
                                <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/vectors/vector-flat-cartoon-illustration-icon-vector-id858503074?k=6&m=858503074&s=612x612&w=0&h=8j07AF8MK8h1HxVYpxDAvBlUFV5uUXFYnJGgJ42_NR0=' }}></Image>
                                <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                                <Button title="ADOPT NOW"
                                    titleStyle={{ fontWeight: '700' }}
                                    buttonStyle={styles.cardButton}></Button>
                            </Card>
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
    },
    scrollView: {
        marginHorizontal: 0,
    },
    body: {
        paddingBottom: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    cardImage: {
        width: 300,
        height: 200,
        marginLeft: 20,
        marginBottom: 20,
    },
    cardButton: {
        backgroundColor: '#da5e5a',
        marginTop: 20,
        padding: 10,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    ImageStyle: {
        margin: 5,
        padding: 10,
        height: 25,
        width: 25,

    },
});

export default Home;
