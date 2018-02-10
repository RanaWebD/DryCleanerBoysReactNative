import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import ButtonContainer from '../common/ButtonContainer';

class Confirmation extends Component {
    render() {
        const add = this.props.Address;
        const time = this.props.Time;
        const totalPrice = this.props.PriceListFooterData.totalPrice;
        const quantity = this.props.PriceListFooterData.totalQuantity;

        const { firstCardSection, secondCardSection, thirdCardSection, contentBoxLeft, contentBoxRight, title, pickupDayDateContent, deliveryDayDateContent, priceAndQuantityContent, servicesContent } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Card>
                    <View style={firstCardSection}>
                        <View style={contentBoxLeft}>
                            <View>
                                <Text style={title}>Name:</Text>
                                <Text>{add.name}</Text>
                            </View>
                            <View>
                                <Text style={title}>Quantity</Text>
                                <Text>{quantity}</Text>
                            </View>
                            <View>
                                <Text style={title}>Pickup Time:</Text>
                                <View style={pickupDayDateContent}>
                                    <Text>{time.pickupDay}</Text>
                                    <Text>{time.pickupDate}</Text>
                                </View>
                                <Text>{time.pickupTime}</Text>
                            </View>
                        </View>
                        <View style={contentBoxRight}>
                            <View>
                                <Text style={title}>Number:</Text>
                                <Text>{add.number}</Text>
                            </View>
                            <View style={priceAndQuantityContent}>
                                <Text style={title}>Price</Text>
                                <Text>{totalPrice}</Text>
                            </View>
                            <View>
                                <Text style={title}>Delivery Time:</Text>
                                <View style={deliveryDayDateContent}>
                                    <Text>{time.deliveryDay}</Text>
                                    <Text>{time.deliveryDate}</Text>
                                </View>
                                <Text>{time.deliveryTime}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={secondCardSection}>
                        <Text style={title}>Address:</Text>
                        <Text>{add.address}</Text>
                        <Text>{add.state}</Text>
                        <Text>{add.pincode}</Text>
                    </View>
                    <View style={thirdCardSection}>
                        <Text style={title}>Services:</Text>
                        <View style={servicesContent}>
                            <Text>{add.DryCleanService}</Text>
                            <Text>{add.LaundryService}</Text>
                            <Text>{add.WashingService}</Text>
                            <Text>{add.IroningService}</Text>
                        </View>
                    </View>
                </Card>

                <ButtonContainer>
                    <Button
                        title="H O M E   P A G E"
                        color="#04A2E1"
                        onPress={() => this.props.onOrderDetails()}
                    />
                </ButtonContainer>
            </View >
        );
    }
}

function mapStateToProps({ Time, Address, PriceListFooterData }) {
    return { Time, Address, PriceListFooterData };
}

export default connect(mapStateToProps)(Confirmation);

const styles = {
    firstCardSection: {
        flexDirection: 'row',
        padding: 5
    },
    secondCardSection: {
        padding: 5
    },
    thirdCardSection: {
        padding: 5
    },
    priceAndQuantityContent: {
    },
    contentBoxLeft: {
        flex: 1
    },
    contentBoxRight: {
        flex: 1
    },
    title: {
        color: 'gray',
        fontSize: 15
    },
    pickupDayDateContent: {
        flexDirection: 'row'
    },
    deliveryDayDateContent: {
        flexDirection: 'row'
    },
    servicesContent: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
};
