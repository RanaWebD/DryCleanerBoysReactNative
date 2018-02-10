import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Linking, Button } from 'react-native';
import Card from '../common/Card';

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    render() {
        const { header, offerContainer, imageBackground, offerContent, offerHeading, offerItem, offerPriceContent, offerPriceText, offerPriceAmount, headerText, bookNowBtn, buttonStyle, footer, footerItem, footerText } = styles;
        return (
            <View style={{ flex: 1 }}>
                <View style={header}>
                    <Text style={headerText}>DryCleaner Boys</Text>
                </View>
                <ScrollView>
                    <View style={bookNowBtn}>
                        <Button
                            title='D I R E C T  B O O K I N G'
                            color="#04A2E1"
                            onPress={() => this.props.onPress('go-to-booknow')}
                        />
                    </View>
                    <Card>
                        <View style={offerContainer}>
                            <ImageBackground
                                style={imageBackground}
                                source={{ uri: 'https://static.pexels.com/photos/212269/pexels-photo-212269.jpeg' }}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>D r y  C l e a n</Text>
                                    <Text style={offerItem}>3 Blanket</Text>
                                    <View style={offerPriceContent}>
                                        <Text style={offerPriceText}>only in</Text>
                                        <Text style={offerPriceAmount}>549</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </Card>
                    <Card>
                        <View style={offerContainer}>
                            <ImageBackground
                                style={imageBackground}
                                source={{ uri: 'https://static.pexels.com/photos/212269/pexels-photo-212269.jpeg' }}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>D r y  C l e a n</Text>
                                    <Text style={offerItem}>3 Blanket</Text>
                                    <View style={offerPriceContent}>
                                        <Text style={offerPriceText}>only in</Text>
                                        <Text style={offerPriceAmount}>549</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </Card>
                    <Card>
                        <View style={offerContainer}>
                            <ImageBackground
                                style={imageBackground}
                                source={{ uri: 'https://static.pexels.com/photos/212269/pexels-photo-212269.jpeg' }}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>D r y  C l e a n</Text>
                                    <Text style={offerItem}>3 Blanket</Text>
                                    <View style={offerPriceContent}>
                                        <Text style={offerPriceText}>only in</Text>
                                        <Text style={offerPriceAmount}>549</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </Card>


                </ScrollView>
                <View style={footer}>
                    {/* <TouchableOpacity
                        onPress={() => this.props.onPress('go-to-home')}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/home.png')}
                        />
                        <Text style={footerText}>Home</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => this.props.onPress('go-to-price')}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/price-tag.png')}
                        />
                        <Text style={footerText}>Price</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => { Linking.openURL('http://drycleanerboys.com/'); }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/earth-globe.png')}
                        />
                        <Text style={footerText}>WebSite</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default MainScreen;

const styles = {
    header: {
        height: 80,
        backgroundColor: '#04A2E1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 20
    },
    offerContainer: {
        height: 150
    },
    imageBackground: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    offerContent: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    offerHeading: {
        fontSize: 30,
        marginBottom: 15,
        color: 'white'
    },
    offerItem: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10
    },
    offerPriceContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offerPriceText: {
        color: 'gray',
        width: 50,
        alignItems: 'space-between'
    },
    offerPriceAmount: {
        fontSize: 20
    },
    content: {
        padding: 10
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#04A2E1'
    },
    footerItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: 'white'
    },
    bookNowBtn: {
        padding: 10
    },
    buttonStyle: {
        backgroundColor: '#04A2E1',
        padding: 10,
        alignItems: 'center',
    }
};

