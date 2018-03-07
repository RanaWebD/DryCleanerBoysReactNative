import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ButtonContainer from '../common/ButtonContainer';
import Card from '../common/Card';
import styles from '../css/ConfirmationCSS';

class Confirmation extends Component {

    text() {
        //Remove duplicate objects into the SelectedItem Array
        if (this.props.SelectedItem.filter !== undefined) {
            const arr = this.props.SelectedItem.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.title === thing.title
                ))
            );

            return arr.map((e, index) => {
                return (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text>{e.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text>{e.itmeTotalQuantity}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text>{e.itmeTotalAmount}</Text>
                        </View>
                    </View>
                );
            });
        }
        if (this.props.selectedOffer !== {}) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text>{this.props.selectedOffer.offerCategory}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                        <Text>{this.props.selectedOffer.offerQuantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                        <Text>{this.props.selectedOffer.offerPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                        <Text>{this.props.selectedOffer.offerValidity}</Text>
                    </View>
                </View>
            );
        }
        return;
    }

    servicesHeading() {
        const { address } = this.props.Address;
        if (address.DryCleanService || address.LaundryService || address.WashingService || address.IroningService) {
            return <Text style={styles.title}>Services:</Text>;
        }
    }

    render() {
        const { address } = this.props.Address;
        const time = this.props.Time;
        const { totalPrice } = this.props.PriceListFooterData;
        const quantity = this.props.PriceListFooterData.totalQuantity;

        const { firstCardSection, cardSection, contentBoxLeft, content, contentBoxRight, title, pickupDayDateContent, deliveryDayDateContent, priceAndQuantityContent, servicesContent } = styles;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <Card>
                        <View style={firstCardSection}>
                            <View style={contentBoxLeft}>
                                <View style={content}>
                                    <Text style={title}>Name: </Text>
                                    <Text >{address.name}</Text>
                                </View>
                                <View style={content}>
                                    {this.props.PriceListFooterData.totalQuantity !== undefined ?
                                        <Text style={styles.title}>Quantity: </Text> : null
                                    }
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
                                <View style={content}>
                                    <Text style={title}>Number: </Text>
                                    <Text>{address.number}</Text>
                                </View>
                                <View style={content}>
                                    {this.props.PriceListFooterData.totalPrice !== undefined ?
                                        <Text style={title}>Price: </Text> : null
                                    }
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

                        <View style={cardSection}>
                            <Text style={title}>Address:</Text>
                            <Text>{address.add}</Text>
                            <Text>{address.state}</Text>
                            <Text>{address.pincode}</Text>
                        </View>
                        <View style={cardSection}>
                            {this.servicesHeading()}
                            <View style={servicesContent}>
                                <Text>{address.DryCleanService}</Text>
                                <Text>{address.LaundryService}</Text>
                                <Text>{address.WashingService}</Text>
                                <Text>{address.IroningService}</Text>
                            </View>
                        </View>
                        <View style={cardSection}>
                            {this.props.selectedOffer !== 'none' ? <Text style={styles.title}>Selected Offer:</Text> : null}
                            {this.props.SelectedItem[0] !== undefined ? <Text style={styles.title}>Selected Items:</Text> : null}
                            <View style={{ marginTop: 5 }}>
                                {this.text()}
                            </View>
                        </View>
                    </Card>
                </ScrollView>
                <ButtonContainer>
                    <Button
                        title="H O M E   P A G E"
                        color="#04A2E1"
                        onPress={() => this.props.onOrderDetails()}
                    />
                </ButtonContainer>
            </View>
        );
    }
}

function mapStateToProps({ Time, Address, PriceListFooterData, SelectedItem, selectedOffer }) {
    return { Time, Address, PriceListFooterData, SelectedItem, selectedOffer };
}

export default connect(mapStateToProps)(Confirmation);
