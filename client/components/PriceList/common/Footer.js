import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../css/FooterCSS';

class Footer extends Component {

    render() {
        const { footer, footerContentLeft, footerContentRight, iconContent, iconContentText, icon, estimatePriceText, quantityText, go } = styles;
        return (
            <View style={footer}>
                <View style={footerContentLeft}>
                    <View style={iconContent}>
                        <Text style={iconContentText}>{this.props.PriceListFooterData.totalQuantity}</Text>
                        <Image
                            style={icon}
                            source={require('../../../assets/images/laundry-basket.png')}
                        />
                    </View>
                    <Text style={estimatePriceText}>{'ESTIMATED PRICE: Rs.' + ' '}</Text>
                    <Text style={quantityText}>{this.props.PriceListFooterData.totalPrice}</Text>
                </View>
                <View style={footerContentRight}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ScheduleTime')}
                    >
                        <Text style={go}>GO</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

//Get redux state as props
const mapStateToProps = ({ PriceListFooterData }) => {
    return { PriceListFooterData };
};

//Connet react component with redux store and action creator with the help of react-redux connect funtion
export default connect(mapStateToProps)(Footer);
