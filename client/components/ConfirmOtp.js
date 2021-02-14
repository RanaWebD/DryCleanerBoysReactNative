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
        const itemArr = [];
        //Remove duplicate objects into the SelectedItem Array
        if (this.props.SelectedItem.filter !== undefined) {
            const arr = this.props.SelectedItem.filter((itemObj, index, self) =>
                index === self.findIndex((t) => (
                    t.title === itemObj.title
                ))  
            );
            arr.map(itemObj => itemArr.push(itemObj.title, itemObj.itmeTotalQuantity));
        }

        const { address } = this.props.Address;
        const time = this.props.Time;
        const { totalPrice, totalQuantity } = this.props.PriceListFooterData;
        const { name, number, add, state, pincode, IroningService, WashingService, LaundryService, DryCleanService } = address;
        const { pickupDate, pickupDay, pickupTime, deliveryDate, deliveryDay, deliveryTime } = time;
        const { offerCategory, offerPrice, offerQuantity, offerValidity } = this.props.selectedOffer;
        let offer = '';

        if (!!offerCategory) {
                offer = ` You select ${!!offerQuantity? offerQuantity: ''} ${!!offerCategory? offerCategory : '' } offer at ${offerPrice} price for ${!!offerValidity? offerValidity : ''}.`;
        }

        //Combine all things together
        let services = '';
        let TQandTA = '';
        const fullAddress = `. Address: ${add} ${state} ${pincode}`;
        const fullTime = `. Pickup time: ${pickupDate} ${pickupDay} ${pickupTime}. Delivery time: ${deliveryDate} ${deliveryDay} ${deliveryTime}`;

        if (IroningService || WashingService || LaundryService || DryCleanService) {
            services = `, You choose ${IroningService} ${WashingService} ${LaundryService} ${DryCleanService} services. `;
        }
        if(!!totalQuantity){
            TQandTA = ` |Total Quantity: ${totalQuantity} Total Price:  ${totalPrice}|.`    
        }
        const data = {
            "sender": "DRYCLN",
            "route": "4",
            "country": "91",
            "sms": [
                {
                    "message": name + services + itemArr + offer + TQandTA + ' Contact no: ' + number + fullAddress + fullTime + '. Our pickup boy will reach you soon. Thank you.',
                    "to": [
                        number,
                        7027151616
                    ]
                },
            ]
        };

        JSON.stringify(data);
        JSON.stringify(data.sms[0].to[0]);

        this.setState({ data, number });
    }

    onConfirm() {
        if (!this.state.OTP) {
            alert("Please enter OTP!")
        } else {
            //Action
            this.props.verifyOtp(this.state);

            setTimeout(() => {
                switch (this.props.otpVerifyStatus) {
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
                        alert('otp_not_verified. try again.');
                        break;
                    case 'invalid_otp':
                        alert('Wrong OTP!')
                }
            }, 2000);
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

function mapStateToProps({ Time, Address, PriceListFooterData, otpVerifyStatus, resendOtpResponse, selectedOffer, SelectedItem }) {
    return { Time, Address, PriceListFooterData, otpVerifyStatus, resendOtpResponse, selectedOffer, SelectedItem };
}

export default connect(mapStateToProps, { verifyOtp, resendOTP })(ConformOtp);

