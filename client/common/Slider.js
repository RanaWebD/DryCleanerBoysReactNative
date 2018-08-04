import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { selectOffer } from '../actions';
import Swiper from 'react-native-swiper';

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

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesSlider: [
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
            ],
            height: 199
        }
    }

    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                height: 200
            });
        }, 500);
    }

    render() {
        this.props.LandingPageOffersLibrary.map((item, i) => console.log(item.url) )
        return (
            <View>
                <Swiper
                    autoplay={true}
                    height={this.state.height}
                >
                    {
                        this.props.LandingPageOffersLibrary.map((item, i) => <Slider
                            offer={item}
                            index={i}
                            props={this.props}
                            key={i}
                        />)
                    }
                </Swiper>
            </View>
        )
    }
}

const mapStateToProps = ({ LandingPageOffersLibrary }) => {
    return { LandingPageOffersLibrary };
};

export default connect(mapStateToProps, { selectOffer })(ImageSlider);

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