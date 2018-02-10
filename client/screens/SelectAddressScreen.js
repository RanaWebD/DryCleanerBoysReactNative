import React, { Component } from 'react';
import SelectAddress from '../components/SelectAddress';

export default class SelectAddressScreen extends Component {
    static navigationOptions = {
        title: 'Address',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#04A2E1' }
    };
    onConfirm = () => {
        this.props.navigation.navigate('ConfirmOtp');
    }
    render() {
        return (
            <SelectAddress onConfirm={this.onConfirm} />
        );
    }
}

