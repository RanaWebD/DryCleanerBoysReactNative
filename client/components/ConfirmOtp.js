import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { verifyOtp } from '../actions';
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
                    "message": name + services + ' Contact no: ' + number + totalQuantity + totalPrice + fullAddress + fullTime,
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
        let otpVerifyStatus = this.props.otpVerifyStatus;
        //Action
        this.props.verifyOtp(this.state);
        //API response take some second to response so that we used setTimeout
        //Redirect the page if API response is 200
        switch (otpVerifyStatus) {
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
                alert('Wrong OTP!!');
                break;
        }
    }

    render() {
        const { container, labelStyle, inputStyle } = styles;
        return (
            <View style={container}>
                <ScrollView>
                    <FormLabel labelStyle={labelStyle}>W R I T E  OTP</FormLabel>
                    <FormInput onChangeText={OTP => { this.setState({ OTP }); }} inputStyle={inputStyle} />
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

function mapStateToProps({ Time, Address, PriceListFooterData, otpVerifyStatus }) {
    return { Time, Address, PriceListFooterData, otpVerifyStatus };
}

export default connect(mapStateToProps, { verifyOtp })(ConformOtp);

