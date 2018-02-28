import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { verifyOtp, resendOTP } from '../actions';
import ButtonContainer from '../common/ButtonContainer';
import styles from '../css/ConfirmOtpCSS';

class ConformOtp extends Component {
    constructor(props) {
        super(props);

        this.state = { data: null, OTP: null, number: null };
    }

    componentWillMount() {
        const { address } = this.props.Address;
        const time = this.props.Time;
        const QandP = this.props.PriceListFooterData;

        const { name, number, add, state, pincode, iron, wash, laundry, dryClean } = address;
        const { quantity, price } = QandP;
        const { pickupDate, pickupDay, pickupTime, deliveryDate, deliveryDay, deliveryTime } = time;
        const { offerCategory, offerPrice, offerQuantity, offerValidity } = this.props.selectedOffer;
        let offer = '';

        if (!!offerCategory) {
            offer = ` You select ${offerQuantity} ${offerCategory} offer at ${offerPrice} price ${offerValidityString}`;

            let offerValidityString = '';
            if (!offerValidity) {
                offerValidityString = `for ${offerValidity}`;
            }
        }

        //Combine all things together
        let services = '';
        let totalQuantity = '';
        let totalPrice = '';
        const fullAddress = `. Address: ${add} ${state} ${pincode}`;
        const fullTime = `. Pickup time: ${pickupDate} ${pickupDay} ${pickupTime}. Delivery time: ${deliveryDate} ${deliveryDay} ${deliveryTime}`;

        if (iron || wash || laundry || dryClean) {
            services = `, You choose ${iron} ${wash} ${laundry} ${dryClean} services.`;
        }
        if (quantity !== undefined) {
            totalQuantity = ` Quantity: '${quantity}`;
        }
        if (price !== undefined) {
            totalPrice = ` Total Amount: ${quantity}`;
        }


        const data = {
            "sender": "SOCKET",
            "route": "4",
            "country": "91",
            "sms": [
                {
                    "message": name + services + offer + ' Contact no: ' + number + totalQuantity + totalPrice + fullAddress + fullTime + '. Our pickup boy will reach you soon. Thank you.',
                    "to": [
                        number
                    ]
                },
            ]
        };

        JSON.stringify(data);
        JSON.stringify(data.sms[0].to[0]);

        this.setState({ data, number });
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.otpVerifyStatus) {
            case 'otp_verified':
                //Redirect page to an another page
                this.props.onOtpComfirm();
                break;
            case 'invalid_mobile':
                alert('Invalid number type format go back and check!!');
                break;
            case 'mobile_not_found':
                alert('Number not found go back and check your number!!');
                break;
            case 'otp_not_verified':
                alert('Wrong OTP!');
                break;
            case 'invalid_otp':
                alert('Wrong OTP!')
        }
    }

    onConfirm() {
        if (!this.state.OTP) {
            alert("Please enter OTP!")
        } else {
            //Action
            this.props.verifyOtp(this.state);
        }
    }

    onResendOTP() {
        this.props.resendOTP(this.state.number);
        alert(this.props.resendOtpResponse.status);
    }

    render() {
        const { container, labelStyle, subLabel, resendText, inputStyle } = styles;
        return (
            <View style={container}>
                <ScrollView>
                    <FormLabel labelStyle={labelStyle}>W R I T E  OTP</FormLabel>
                    <View><Text style={subLabel}>Check your mobile for OTP</Text></View>
                    <FormInput onChangeText={OTP => { this.setState({ OTP }); }} inputStyle={inputStyle} />
                    <TouchableOpacity
                        onPress={this.onResendOTP.bind(this)}
                    >
                        <Text style={resendText}>Resend OTP!</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ButtonContainer>
                    <Button
                        title='C O N F I R M'
                        color="#04A2E1"
                        onPress={this.onConfirm.bind(this)}
                    />
                </ButtonContainer>
            </View>
        );
    }
}

function mapStateToProps({ Time, Address, PriceListFooterData, otpVerifyStatus, resendOtpResponse, selectedOffer }) {
    return { Time, Address, PriceListFooterData, otpVerifyStatus, resendOtpResponse, selectedOffer };
}

export default connect(mapStateToProps, { verifyOtp, resendOTP })(ConformOtp);

