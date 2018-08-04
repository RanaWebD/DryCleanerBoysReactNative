
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { selectOffer } from '../../actions';
import Card from '../../common/Card';
import Footer from './common/Footer';

const { width } = Dimensions.get('window')


class IronPriceListTab extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    onOfferPress(offer) {
        this.props.selectOffer(offer);
        console.log(offer)
        this.props.navigation.navigate('ScheduleTime')
    }

    offerJXS() {
        const { offerContainer, imageBackground, offerContent, offerHeading, offerItem, offerPriceContent, offerPriceText, offerPriceAmount, validityText } = styles;
        const data = [
            {
                url: require('../../assets/images/903194c73f76c9ad83c90079c985ffd3.jpg'),
                offerCategory: 'I R O N',
                offerQuantity: 'per peace',
                offerPrice: '5 Rs.',
                offerValidity: 'saree, coat, woolen curtain, bedsheet'
            },
            {
                url: require('../../assets/images/landscape-1427642388-ironing-steam.jpg'),
                offerQuantity: '80 Clothes',
                offerPrice: 299,
                offerValidity: '1 months'
            },
            {
                url: require('../../assets/images/shutterstock_526101427.jpg'),
                offerQuantity: '200 Clothes',
                offerPrice: 899,
                offerValidity: '2 months'
            },
            {
                url: require('../../assets/images/ironing.jpg'),
                offerQuantity: '400 clothes',
                offerPrice: 999,
                offerValidity: '3 months'
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
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    {this.offerJXS()}
                </ScrollView>
                
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = ({ selectedOffer }) => {
    return { selectedOffer };
};

export default connect(mapStateToProps, { selectOffer })(IronPriceListTab);

const styles = {
    offerContainer: {
        height: 155
    },
    imageBackground: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width,
        height: '100%',
        justifyContent: 'center'
    },
    offerContent: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    offerHeading: {
        fontSize: 30,
        marginBottom: 6,
        color: 'white'
    },
    offerItem: {
        fontSize: 25,
        color: 'white',
        marginBottom: 5
    },
    offerPriceContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offerPriceText: {
        color: 'gray',
        width: 50
    },
    offerPriceAmount: {
        fontSize: 30,
        color: '#33D65B'
    },
    validityText: {
        color: 'white'
    },
}