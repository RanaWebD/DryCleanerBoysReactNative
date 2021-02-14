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
      case 'category-price-list': this.props.navigation.navigate('CategoryPriceListNavigator'); break;
      case 'category-price-list': this.props.navigation.navigate('starc/charakh'); break;
      case 'steam-iron': this.props.navigation.navigate('CategorySteamIronNavigator'); break;
      case 'starch/charakh': this.props.navigation.navigate('CategoryStarchCharakhNavigator'); break;
      case 'washIron': this.props.navigation.navigate('CategoryWashIronListNavigator'); break;
    }
  }

  // onOfferSeleted = () => {
  //   this.props.navigation.navigate('ScheduleTime');
  // }

  render() {
    return (
      <Home onPress={this.onPress} onOfferSelected={this.onOfferSeleted} navigation={this.props.navigation} />
    )
  }
}
