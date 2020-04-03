import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Header, Tile, Card, Button } from 'react-native-elements';

class Home extends Component {
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
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>
                        {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'PAWWS...', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#000'
                    }}
                /> */}
                        <Tile
                            style={{ position: "relative" }}
                            imageSrc={{ uri: 'https://i.ytimg.com/vi/nqz3jF0zffk/maxresdefault.jpg' }}
                            featured
                        />
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
                            <Button title="BOOK NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                        </Card>
                        <Card
                            title="Pet Adoption"
                            style={styles.card}
                        >
                            <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/vectors/vector-flat-cartoon-illustration-icon-vector-id858503074?k=6&m=858503074&s=612x612&w=0&h=8j07AF8MK8h1HxVYpxDAvBlUFV5uUXFYnJGgJ42_NR0=' }}></Image>
                            <Text>Give your pets a warm and loving house to stay and a lots of toys to play while you are busy or away.</Text>
                            <Button title="ADOPT NOW" titleStyle={{ fontWeight: '700' }} buttonStyle={styles.cardButton}></Button>
                        </Card>
                    </View>
                </ScrollView>
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
        backgroundColor: 'white',
        marginHorizontal: 0,
    },
    body: {
        backgroundColor: 'white',
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
        backgroundColor: 'orange',
        marginTop: 20,
        padding: 10,
    },
});

export default Home;
