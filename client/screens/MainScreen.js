import React, { Component } from 'react';
import Home from '../components/Home';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#04A2E1' }
  };

  onPress = (element) => {
    switch (element) {
      case 'go-to-price': this.props.navigation.navigate('PriceList'); break;
      case 'go-to-booknow': this.props.navigation.navigate('ScheduleTime'); break;
    }
  }
  render() {
    return (
      <Home onPress={this.onPress} />
    )
  }
}
