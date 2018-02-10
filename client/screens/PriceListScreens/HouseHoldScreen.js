import React, { Component } from 'react';
import HouseHoldListTab from '../../components/PriceList/HouseHoldListTab';

export default class HouseHoldScreen extends Component {
    static navigationOptions = {
        title: 'House Hold',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#04A2E1' }
    };

    render() {
        return (
            <HouseHoldListTab navigation={this.props.navigation} />
        );
    }
}
