import React, { Component } from 'react';
import Confirmation from '../components/Confirmation';

export default class ConfirmationScreen extends Component {
  static navigationOptions = {
    title: 'Order Details',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#04A2E1' }
  };

  onOrderDetails = () => { this.props.navigation.navigate('Home'); }

  render() {
    return (
      <Confirmation onOrderDetails={this.onOrderDetails} />
    );
  }
}
