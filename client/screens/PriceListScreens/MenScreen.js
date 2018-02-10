import React, { Component } from 'react';
import MenPriceListTab from '../../components/PriceList/MenPriceListTab';

export default class MenScreen extends Component {

    render() {
        return (
            <MenPriceListTab navigation={this.props.navigation} />
        )
    }
}
