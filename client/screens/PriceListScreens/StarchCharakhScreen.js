import React, { Component } from 'react';
import StarchCharakhListTab from '../../components/PriceList/StarchCharakhListTab';

export default class SteamIronScreen extends Component {

    render() {
        return (
            <StarchCharakhListTab navigation={this.props.navigation} />
        )
    }
}
