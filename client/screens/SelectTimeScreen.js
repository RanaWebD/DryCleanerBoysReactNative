import React, { Component } from 'react';
import SelectTime from '../components/SelectTime';

export default class SelectTimeScreen extends Component {
  static navigationOptions = {
    title: 'Select Time',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#04A2E1' }
  };
  onTimeSubmit = (pDate, dDate) => {
    pDate && dDate ? this.props.navigation.navigate('ScheduleAddress') : alert('Please select Pickup and Delivery dates.');
  }
  render() {
    return (
      <SelectTime onTimeSubmited={(d1, d2) => this.onTimeSubmit(d1, d2)} />
    );
  }
}
