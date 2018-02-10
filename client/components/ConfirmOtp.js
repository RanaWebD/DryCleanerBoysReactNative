import React, { Component } from 'react';
import ButtonContainer from '../common/ButtonContainer';
import { View, Button, TextInput } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { verifyOtp } from '../actions';

class ConformOtp extends Component {
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


        let data = {
            "sender": "SOCKET",
            "route": "4",
            "country": "91",
            "sms": [
                {
                    "message": name + services + ' Contect no: ' + number + totalQuantity + totalPrice + fullAddress + fullTime,
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
        //Action
        this.props.verifyOtp(this.state);
        //Send function as a props
        this.props.onOtpComfirm();
    }

    render() {
        const { container, labelStyle, inputStyle } = styles;
        return (
            <View style={container}>
                <FormLabel labelStyle={labelStyle}>W R I T E  OTP</FormLabel>
                <FormInput onChangeText={OTP => { this.setState({ OTP }); }} inputStyle={inputStyle} />
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

function mapStateToProps({ Time, Address, PriceListFooterData }) {
    return { Time, Address, PriceListFooterData };
}

export default connect(mapStateToProps, { verifyOtp })(ConformOtp);

const styles = {
    container: {
        flex: 1,
        marginTop: 30
    },
    labelStyle: {
        textAlign: 'center',
        fontSize: 20
    },
    inputStyle: {
        textAlign: 'center',
        fontSize: 20
    }
}