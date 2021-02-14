import React, { Component } from 'react';
import WashIronPriceListTab from '../../components/PriceList/WashIronPriceListTab';

export default class WashIronScreen extends Component {

    render() {
        return (
            <WashIronPriceListTab navigation={this.props.navigation} />
        )
    }
}
