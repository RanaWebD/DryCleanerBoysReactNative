import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to dry cleaning!!', color: "#03A9F4" },
  { text: 'Book ur appoinment with dry cleaning!!', color: '#009688' }
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('main');
  }
  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

