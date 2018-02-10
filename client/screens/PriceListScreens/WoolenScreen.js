import React, { Component } from 'react';
import WoolenPriceListTab from '../../components/PriceList/WoolenPriceListTab';

export default class WoolenScreen extends Component {

    render() {
        return (
            <WoolenPriceListTab navigation={this.props.navigation} />
        )
    }
}
