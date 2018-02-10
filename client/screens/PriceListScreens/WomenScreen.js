import React, { Component } from 'react';
import WomenPriceListTab from '../../components/PriceList/WomenPriceListTab';

export default class WomenScreen extends Component {

    render() {
        return (
            <WomenPriceListTab navigation={this.props.navigation} />
        )
    }
}
