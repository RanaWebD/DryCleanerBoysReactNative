import React, { Component } from 'react';
import Axios from 'axios';
import { View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';

class ComformOtp extends Component {
    constructor(props) {
        super(props);

        this.state = { data: null, OTP: null, number: null };
    }

    componentWillMount() {
        const address = this.props.Address;
        const time = this.props.Time;
        const QandP = this.props.PriceListFooterData;

        const name = address.name;
        const number = address.number;
        const add = address.address;
        const state = address.state;
        const pincode = address.pincode;
        const quantity = QandP.totalQuantity;
        const price = QandP.totalPrice;
        const pickupDate = time.pickupDate;
        const pickupDay = time.pickupDay;
        const pickupTime = time.pickupTime;
        const deliveryDate = time.deliveryDate;
        const deliveryDay = time.deliveryDay;
        const deliveryTime = time.deliveryTime;
        const iron = address.IroningService;
        const wash = address.WashingService;
        const laundry = address.LaundryService;
        const dryClean = address.DryCleanService;

        let data = {
            "sender": "SOCKET",
            "route": "4",
            "country": "91",
            "sms": [
                {
                    "message": name + ", You choose " +
                        iron + " " + wash + " " + laundry + " " + dryClean + " " + " services." + " Contect no: " + number
                        + " Quantity: " + quantity + " Total Amount: " + price + ". Address: " + add + " " + state + " " + pincode + ". Pickup time: " +
                        pickupDate + " " + pickupDay + " " + pickupTime + ". Delivery time: " +
                        deliveryDate + " " + deliveryDay + " " + deliveryTime + ".",
                    "to": [
                        number,
                    ]
                },
            ]
        };

        JSON.stringify(data);
        JSON.stringify(data.sms[0].to[0]);

        this.setState({ data, number });
    }


    onConfirm() {
        console.log("checkkkk");
        Axios.post('http://192.168.0.106:3000/verifyOTP', this.state)
            .then(res => {
                console.log("check");

            })
            .catch(error => {
                console.log(error);
            });
        this.props.onOtpComfirm();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FormLabel>Address</FormLabel>
                <FormInput onChangeText={OTP => { this.setState({ OTP }); }} />
                <Button
                    title='C O N F I R M'
                    onPress={this.onConfirm.bind(this)}
                />
            </View>
        );
    }
}

function mapStateToProps({ Time, Address, PriceListFooterData }) {
    return { Time, Address, PriceListFooterData };
}

export default connect(mapStateToProps)(ComformOtp);
