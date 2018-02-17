import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Linking, Button } from 'react-native';
import { connect } from 'react-redux';
import selectedOffer from '../actions/';
import Card from '../common/Card';
import styles from '../css/homeCSS';

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    offerJXS() {
        const { offerContainer, imageBackground, offerContent, offerHeading, offerItem, offerPriceContent, offerPriceText, offerPriceAmount, validityText } = styles;
        const data = [
            {
                url: '../assets/images/landscape-1427642388-ironing-steam.jpg',
                category: 'I R O N I N G',
                quantity: '400 Clothes',
                price: 999,
                validity: '3 months'
            },
            {
                url: '../assets/images/shutterstock_526101427.jpg',
                category: 'I R O N I N G',
                quantity: '200 Clothes',
                price: 599,
                validity: '2 months'
            },
            {
                url: '../assets/images/ironing.jpg',
                category: 'I R O N I N G',
                quantity: '100 clothes',
                price: 399,
                validity: '1 months'
            },
            {
                url: '../assets/images/pexels-photo-212269.jpeg',
                category: 'D r y  C l e a n',
                quantity: '3 Blanket',
                price: 549
            }
        ];

        return data.map((e, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={{ marginBottom: 8 }}
                    onPress={() => { }}
                >
                    <Card>
                        <View style={offerContainer}>
                            <ImageBackground
                                style={imageBackground}
                                source={require('../assets/images/903194c73f76c9ad83c90079c985ffd3.jpg')}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>{e.category}</Text>
                                    <Text style={offerItem}>{e.quantity}</Text>
                                    <View style={offerPriceContent}>
                                        <Text style={offerPriceText}>only in</Text>
                                        <Text style={offerPriceAmount}>{e.price}</Text>
                                    </View>
                                    <Text style={validityText}>{e.validity}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </Card>
                </TouchableOpacity>
            );
        });
    }

    render() {
        const { header, offerContainer, imageBackground, offerContent, offerHeading, offerItem, headerText, bookNowBtn, footer, footerItem, footerText } = styles;
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
                                source={require('../assets/images/903194c73f76c9ad83c90079c985ffd3.jpg')}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>I R O N I N G  T R I A L</Text>
                                    <Text style={offerItem}>4 Clothes</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </Card>
                    {this.offerJXS()}
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
            </View >
        );
    }
}

export default connect(null, { selectedOffer })(MainScreen);
