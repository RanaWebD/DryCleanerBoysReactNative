import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { selectOffer } from '../../actions';
import Card from '../../common/Card';

const { width } = Dimensions.get('window')


const Slider = ({ offer, index, props }) => {
    const { offerContainer, imageBackground, offerContent, offerHeading, offerItem, offerPriceContent, offerPriceText, offerPriceAmount, validityText } = styles;

    return (
        <TouchableOpacity
            key={index}
            onPress={() => onOfferPress(offer, props)}
        >
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
        </TouchableOpacity>
    )
}

const onOfferPress = (offer, props) => {
    props.selectOffer(offer);
    props.navigation.navigate('ScheduleTime')
}

class WashIronPriceListTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesSlider: [
                {
                    url: require('../../assets/images/903194c73f76c9ad83c90079c985ffd3.jpg'),
                    offerCategory: 'WASH + IRON',
                    offerPrice: '80 /KG',
                    offerValidity: 'Offer only available on curtain, blanket, woolen, saree, clothes and coat.'
                }
            ]
        }
    }

    render() {
        return (
            <Card>
                    {
                        this.state.imagesSlider.map((item, i) => <Slider
                            offer={item}
                            index={i}
                            props={this.props}
                            key={i}
                        />)
                    }
            </Card>
        )
    }
}

export default connect(null, { selectOffer })(WashIronPriceListTab);

const styles = {
    offerContainer: {
        height: 200
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