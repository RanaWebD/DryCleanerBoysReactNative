import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Linking, Button } from 'react-native';
import { connect } from 'react-redux';
import { selectOffer } from '../actions';
import Card from '../common/Card';
import styles from '../css/homeCSS';

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    componentWillReceiveProps(nextPros) {
        this.props.onOfferSelected();
    }

    onOfferPress(offer) {
        this.props.selectOffer(offer);
    }

    offerJXS() {
        const { offerContainer, imageBackground, offerContent, offerHeading, offerItem, offerPriceContent, offerPriceText, offerPriceAmount, validityText } = styles;
        const data = [
            {
                url: require('../assets/images/903194c73f76c9ad83c90079c985ffd3.jpg'),
                offerCategory: 'I R O N I N G  T R I A L',
                offerQuantity: '4 Clothes',
                offerPrice: 'Free',
                offerValidity: 'Only for first time'
            },
            {
                url: require('../assets/images/landscape-1427642388-ironing-steam.jpg'),
                offerCategory: 'I R O N I N G',
                offerQuantity: '400 Clothes',
                offerPrice: 999,
                offerValidity: '3 months'
            },
            {
                url: require('../assets/images/shutterstock_526101427.jpg'),
                offerCategory: 'I R O N I N G',
                offerQuantity: '200 Clothes',
                offerPrice: 599,
                offerValidity: '2 months'
            },
            {
                url: require('../assets/images/ironing.jpg'),
                offerCategory: 'I R O N I N G',
                offerQuantity: '100 clothes',
                offerPrice: 399,
                offerValidity: '1 months'
            },
            {
                url: require('../assets/images/pexels-photo-212269.jpeg'),
                offerCategory: 'D r y  C l e a n',
                offerQuantity: '3 Blanket',
                offerPrice: 549
            }
        ];

        return data.map((offer, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={{ marginBottom: 8 }}
                    onPress={() => this.onOfferPress(offer)}
                >
                    <Card>
                        <View style={offerContainer}>
                            <ImageBackground
                                style={imageBackground}
                                source={offer.url}
                            >
                                <View style={offerContent}>
                                    <Text style={offerHeading}>{offer.offerCategory}</Text>
                                    <Text style={offerItem}>{offer.offerQuantity}</Text>
                                    <View style={offerPriceContent}>
                                        <Text style={offerPriceText}>only in</Text>
                                        <Text style={offerPriceAmount}>{offer.offerPrice}</Text>
                                    </View>
                                    <Text style={validityText}>{offer.offerValidity}</Text>
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

const mapStateToProps = ({ selectedOffer }) => {
    return { selectedOffer };
};

export default connect(mapStateToProps, { selectOffer })(MainScreen);
