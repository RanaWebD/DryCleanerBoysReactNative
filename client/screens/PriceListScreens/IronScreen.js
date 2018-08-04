import React, { Component } from 'react';
import IronPriceListTab from '../../components/PriceList/IronPriceListTab';

export default class IronScreen extends Component {

    render() {
        return (
            <IronPriceListTab navigation={this.props.navigation} />
        )
    }
}
