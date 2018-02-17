import React, { Component } from 'react';
import ConfirmOtp from '../components/ConfirmOtp';

export default class ConfirmationScreen extends Component {
    static navigationOptions = {
        title: 'Confirm OTP',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#04A2E1' }
    };

    onComfirm() {
        this.props.navigation.navigate('Confirmation');
    }

    render() {
        return (
            <ConfirmOtp onOtpComfirm={this.onComfirm.bind(this)} />
        );
    }
}
