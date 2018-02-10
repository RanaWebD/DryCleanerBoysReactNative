import React, { Component } from 'react';
import AccessoriesPriceListTab from '../../components/PriceList/AccessoriesPriceListTab';

export default class AccessoriesScreen extends Component {

    render() {
        return (
            <AccessoriesPriceListTab navigation={this.props.navigation} />
        )
    }
}
