import React, { Component } from 'react';
import SteamIronPriceListTab from '../../components/PriceList/SteamIronPriceListTab';

export default class SteamIronScreen extends Component {

    render() {
        return (
            <SteamIronPriceListTab navigation={this.props.navigation} />
        )
    }
}
