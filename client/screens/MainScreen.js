import React, { Component } from 'react';
import Home from '../components/Home';

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onPress = (element) => {
    switch (element) {
      case 'go-to-price': this.props.navigation.navigate('PriceList'); break;
      case 'go-to-booknow': this.props.navigation.navigate('ScheduleTime'); break;
    }
  }

  onOfferSeleted = () => {
    this.props.navigation.navigate('ScheduleTime');
  }

  render() {
    return (
      <Home onPress={this.onPress} onOfferSelected={this.onOfferSeleted} />
    )
  }
}
