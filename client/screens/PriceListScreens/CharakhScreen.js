import React, { Component } from 'react';
import CharakhPriceListTab from '../../components/PriceList/CharakhPriceListTab';

export default class CharakhScreen extends Component {

    render() {
        return (
            <CharakhPriceListTab navigation={this.props.navigation} />
        )
    }
}
