import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonContainer from '../common/ButtonContainer';
import { onTimeSubmit } from '../actions/index';

class SelectTime extends Component {
    static navigationOptions = {
        title: 'Select Time',
    };
    constructor(props) {
        super(props);

        this.state = {
            daysArray: null,
            currentDate: null,
            hours: '',
            firstTimeContainerToggle: false,
            secondTimeContainerToggle: true,
            pickupTime: null,
            deliveryDateToggle0: false,
            deliveryDateToggle1: false,
            deliveryDateToggle2: false,
            deliveryDateToggle3: false,
            deliveryDateToggle4: false,
            checkIconContentToggle0: false,
            checkIconContentToggle1: false,
            checkIconContentToggle2: false,
            checkIconContentToggle3: false,
            checkIconContentToggle4: false,
            checkIconContentToggle5: false,
            checkIconContentToggle6: false,
            checkIconContentToggle7: false,
            pickupTimeCardToggle0: false,
            pickupTimeCardToggle1: false,
            pickupTimeCardToggle2: false,
            pickupTimeCardToggle3: false,
            pickupTimeCardToggle4: false,
            deliveryTimeCardToggle0: false,
            deliveryTimeCardToggle1: false,
            deliveryTimeCardToggle2: false,
            deliveryTimeCardToggle3: false,
            deliveryTimeCardToggle4: false,
            secondPickupTimeCardToggle0: false,
            secondPickupTimeCardToggle1: false,
            secondPickupTimeCardToggle2: false,
            secondPickupTimeCardToggle3: false,
            secondPickupTimeCardToggle4: false,
            //disable elements
            disableTime: false,
            disableTimeStyle: null,
            //Selected elements
            selectedPickupDate: null,
            selectedPickupDay: null,
            selectedPickupTime: null,
            selectedDeliveryDate: null,
            selectedDeliveryDay: null,
            selectedDeliveryTime: null
        };
    }

    ///Fetched current date, day and time from new Date();
    componentWillMount() {
        const time = new Date();
        const currentDate = time.getDate();
        const day = time.getDay();
        const hours = time.getHours();
        this.setState({ currentDate, hours });
        this.createDaysArray(day);

        //Disable the time before 1 hour of schedule time and change the style of it.
        if (hours >= 8) { this.setState({ disableTime: true, disableTimeStyle: { color: 'lightgray' } }); }
        if (hours >= 10) { this.setState({ disableTime: true, disableTimeStyle: { color: 'lightgray' } }); }
        if (hours >= 1) { this.setState({ disableTime: true, disableTimeStyle: { color: 'lightgray' } }); }
        if (hours >= 3) { this.setState({ disableTime: true, disableTimeStyle: { color: 'lightgray' } }); }
        if (hours >= 5) { this.setState({ disableTime: true, disableTimeStyle: { color: 'lightgray' } }); }
    }

    //Change component states usen user press on Calendar
    onCalendarPress(index, index1) {
        const { currentDate, daysArray } = this.state;
        //Declare hideDeliveryCalendar for hideing the delivery calendar when user press on pickup calendar
        this.hideDeliveryCalendar(index1);
        //Declare hideCheckIcon fuction this function will popup the check icon on calendar when user press on any calendar
        this.hideCheckIcon(index1);
        if (index === 0) {
            return (
                this.setState({
                    firstTimeContainerToggle: false,
                    secondTimeContainerToggle: true,
                    selectedPickupDate: currentDate,
                    selectedPickupDay: daysArray[0]
                })
            );
        }
        if (index === 1) {
            return this.setState({
                secondTimeContainerToggle: false,
                firstTimeContainerToggle: true,
                selectedPickupDate: currentDate + 1,
                selectedPickupDay: daysArray[1]
            });
        }
        if (index1 === 2) {
            return this.setState({
                secondTimeContainerToggle: false,
                selectedPickupDate: currentDate + 2,
                selectedPickupDay: daysArray[2]
            });
        }
        if (index1 === 3) {
            return this.setState({
                secondTimeContainerToggle: false,
                firstTimeContainerToggle: true,
                selectedPickupDate: currentDate + 3,
                selectedPickupDay: daysArray[3]
            });
        }
        //store selected date, day in state variables
        switch (index1) {
            case 4: this.setState({ selectedDeliveryDate: currentDate + 2, selectedDeliveryDay: daysArray[2] }); break;
            case 5: this.setState({ selectedDeliveryDate: currentDate + 3, selectedDeliveryDay: daysArray[3] }); break;
            case 6: this.setState({ selectedDeliveryDate: currentDate + 4, selectedDeliveryDay: daysArray[4] }); break;
            case 7: this.setState({ selectedDeliveryDate: currentDate + 5, selectedDeliveryDay: daysArray[5] }); break;
        }
    }

    onTimePress(time) {
        //First Time Section
        switch (time) {
            case '09-11':
                this.setState({
                    pickupTimeCardToggle0: true,
                    pickupTimeCardToggle1: false,
                    pickupTimeCardToggle2: false,
                    pickupTimeCardToggle3: false,
                    pickupTimeCardToggle4: false,
                    selectedPickupTime: '09AM-11AM'
                });
                break;
            case '11-01':
                this.setState({
                    pickupTimeCardToggle0: false,
                    pickupTimeCardToggle1: true,
                    pickupTimeCardToggle2: false,
                    pickupTimeCardToggle3: false,
                    pickupTimeCardToggle4: false,
                    selectedPickupTime: '11AM-01PM'
                });
                break;
            case '02-04':
                this.setState({
                    pickupTimeCardToggle0: false,
                    pickupTimeCardToggle1: false,
                    pickupTimeCardToggle2: true,
                    pickupTimeCardToggle3: false,
                    pickupTimeCardToggle4: false,
                    selectedPickupTime: '02AM-04PM'
                });
                break;
            case '04-06':
                this.setState({
                    pickupTimeCardToggle0: false,
                    pickupTimeCardToggle1: false,
                    pickupTimeCardToggle2: false,
                    pickupTimeCardToggle3: true,
                    pickupTimeCardToggle4: false,
                    selectedPickupTime: '04PM-06PM'
                });
                break;
            case '06-08':
                this.setState({
                    pickupTimeCardToggle0: false,
                    pickupTimeCardToggle1: false,
                    pickupTimeCardToggle2: false,
                    pickupTimeCardToggle3: false,
                    pickupTimeCardToggle4: true,
                    selectedPickupTime: '06PM-08PM'
                });
                break;
            default: case null: this.setState({ pickupTime: 'Time not selected' });
        }
        //Second Time Section
        switch (time) {
            case '09to11':
                this.setState({
                    secondPickupTimeCardToggle0: true,
                    secondPickupTimeCardToggle1: false,
                    secondPickupTimeCardToggle2: false,
                    secondPickupTimeCardToggle3: false,
                    secondPickupTimeCardToggle4: false,
                    selectedPickupTime: '09AM-11AM'
                });
                break;
            case '11to01':
                this.setState({
                    secondPickupTimeCardToggle0: false,
                    secondPickupTimeCardToggle1: true,
                    secondPickupTimeCardToggle2: false,
                    secondPickupTimeCardToggle3: false,
                    secondPickupTimeCardToggle4: false,
                    selectedPickupTime: '11AM-01PM'
                });
                break;
            case '02to04':
                this.setState({
                    secondPickupTimeCardToggle0: false,
                    secondPickupTimeCardToggle1: false,
                    secondPickupTimeCardToggle2: true,
                    secondPickupTimeCardToggle3: false,
                    secondPickupTimeCardToggle4: false,
                    selectedPickupTime: '02PM-04PM'
                }); break;
            case '04to06':
                this.setState({
                    secondPickupTimeCardToggle0: false,
                    secondPickupTimeCardToggle1: false,
                    secondPickupTimeCardToggle2: false,
                    secondPickupTimeCardToggle3: true,
                    secondPickupTimeCardToggle4: false,
                    selectedPickupTime: '04PM-06PM'
                }); break;
            case '06to08':
                this.setState({
                    secondPickupTimeCardToggle0: false,
                    secondPickupTimeCardToggle1: false,
                    secondPickupTimeCardToggle2: false,
                    secondPickupTimeCardToggle3: false,
                    secondPickupTimeCardToggle4: true,
                    selectedPickupTime: '06PM-08PM'
                }); break;
            default: case null: this.setState({ pickupTime: 'Time not selected' });
        }
        //Delivery Time Section
        switch (time) {
            case '09d11':
                this.setState({
                    deliveryTimeCardToggle0: true,
                    deliveryTimeCardToggle1: false,
                    deliveryTimeCardToggle2: false,
                    deliveryTimeCardToggle3: false,
                    deliveryTimeCardToggle4: false,
                    selectedDeliveryTime: '09AM-11AM'
                });
                break;
            case '11d01':
                this.setState({
                    deliveryTimeCardToggle0: false,
                    deliveryTimeCardToggle1: true,
                    deliveryTimeCardToggle2: false,
                    deliveryTimeCardToggle3: false,
                    deliveryTimeCardToggle4: false,
                    selectedDeliveryTime: '11AM-01PM'
                });
                break;
            case '02d04':
                this.setState({
                    deliveryTimeCardToggle0: false,
                    deliveryTimeCardToggle1: false,
                    deliveryTimeCardToggle2: true,
                    deliveryTimeCardToggle3: false,
                    deliveryTimeCardToggle4: false,
                    selectedDeliveryTime: '02PM-04PM'
                });
                break;
            case '04d06':
                this.setState({
                    deliveryTimeCardToggle0: false,
                    deliveryTimeCardToggle1: false,
                    deliveryTimeCardToggle2: false,
                    deliveryTimeCardToggle3: true,
                    deliveryTimeCardToggle4: false,
                    selectedDeliveryTime: '04PM-06PM'
                });
                break;
            case '06d08':
                this.setState({
                    deliveryTimeCardToggle0: false,
                    deliveryTimeCardToggle1: false,
                    deliveryTimeCardToggle2: false,
                    deliveryTimeCardToggle3: false,
                    deliveryTimeCardToggle4: true,
                    selectedDeliveryTime: '06PM-08PM'
                });
                break;
            default: case null: this.setState({ pickupTime: 'Time not selected' });
        }
    }

    hideDeliveryCalendar(index1) {
        switch (index1) {
            case 0:
                this.setState({
                    deliveryDateToggle0: false,
                    deliveryDateToggle1: false,
                    deliveryDateToggle2: false,
                    deliveryDateToggle3: false
                });
                break;
            case 1:
                this.setState({
                    deliveryDateToggle0: true,
                    deliveryDateToggle1: false,
                    deliveryDateToggle2: false,
                    deliveryDateToggle3: false
                });
                break;
            case 2:
                this.setState({
                    deliveryDateToggle0: true,
                    deliveryDateToggle1: true,
                    deliveryDateToggle2: false,
                    deliveryDateToggle3: false
                });
                break;
            case 3:
                this.setState({
                    deliveryDateToggle0: true,
                    deliveryDateToggle1: true,
                    deliveryDateToggle2: true,
                    deliveryDateToggle3: false
                });
                break;
        }
    }
    hideCheckIcon(index1) {
        switch (index1) {
            case 0:
                this.setState({
                    checkIconContentToggle0: true,
                    checkIconContentToggle1: false,
                    checkIconContentToggle2: false,
                    checkIconContentToggle3: false
                });
                break;
            case 1:
                this.setState({
                    checkIconContentToggle0: false,
                    checkIconContentToggle1: true,
                    checkIconContentToggle2: false,
                    checkIconContentToggle3: false
                });
                break;
            case 2:
                this.setState({
                    checkIconContentToggle0: false,
                    checkIconContentToggle1: false,
                    checkIconContentToggle2: true,
                    checkIconContentToggle3: false
                });
                break;
            case 3:
                this.setState({
                    checkIconContentToggle0: false,
                    checkIconContentToggle1: false,
                    checkIconContentToggle2: false,
                    checkIconContentToggle3: true
                });
                break;
            case 4:
                this.setState({
                    checkIconContentToggle4: true,
                    checkIconContentToggle5: false,
                    checkIconContentToggle6: false,
                    checkIconContentToggle7: false
                });
                break;
            case 5:
                this.setState({
                    checkIconContentToggle4: false,
                    checkIconContentToggle5: true,
                    checkIconContentToggle6: false,
                    checkIconContentToggle7: false
                });
                break;
            case 6:
                this.setState({
                    checkIconContentToggle4: false,
                    checkIconContentToggle5: false,
                    checkIconContentToggle6: true,
                    checkIconContentToggle7: false
                });
                break;
            case 7:
                this.setState({
                    checkIconContentToggle4: false,
                    checkIconContentToggle5: false,
                    checkIconContentToggle6: false,
                    checkIconContentToggle7: true
                });
                break;
        }
    }

    createDaysArray(day) {
        let dayInString;
        switch (day) {
            case 0: dayInString = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; break;
            case 1: dayInString = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; break;
            case 2: dayInString = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']; break;
            case 3: dayInString = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tus']; break;
            case 4: dayInString = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tus', 'Wed']; break;
            case 5: dayInString = ['Fri', 'Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Fre']; break;
            case 6: dayInString = ['Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri']; break;
            default: case null: return 'no days';
        }
        this.setState({ daysArray: dayInString });
    }

    onSubmit() {
        const { selectedPickupDate, selectedPickupDay, selectedPickupTime, selectedDeliveryDate, selectedDeliveryDay, selectedDeliveryTime } = this.state;
        //store all selected data into this item then it to redux store(through reducer) with the help of Action creator
        const scheduleTimeObj = {
            pickupDate: selectedPickupDate,
            pickupDay: selectedPickupDay,
            pickupTime: selectedPickupTime,
            deliveryDate: selectedDeliveryDate,
            deliveryDay: selectedDeliveryDay,
            deliveryTime: selectedDeliveryTime
        };
        //used a action on Submit
        this.props.onTimeSubmit(scheduleTimeObj);
        //redirect screen to address screen please check SelectTimeScreen.js. 
        this.props.onTimeSubmited(scheduleTimeObj.pickupDate, scheduleTimeObj.deliveryDate);
    }

    render() {
        const currentDate = this.state.currentDate;
        const { title, pickupDateSection, pickupCalendersSection, dateCard, day, dateContent, date, checkIconContent,
            checkIconContentAlt, pickupTimeSection, pickupTimeSection1, pickupTimeSection1Alt, timeCard, TimeCardAlt, timeCardText,
            pickupTimeSection2, pickupTimeSection2Alt, deliverySection, deliveryCalendersSection, deliveryDateAlt, deliveryTimeSection,
            nextBtnContainer } = styles;
        return (
            <View style={{ flex: 1 }}>
                {/* Pickup Date     */}
                <View style={pickupDateSection}>
                    <Text style={title}>Pickup</Text>
                    <View style={pickupCalendersSection}>
                        <ScrollView
                            horizontal
                        >
                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(0, 0); }}
                                style={dateCard}
                            >
                                <Text style={day}>{this.state.daysArray[0]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle0 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(1, 1); }}
                                style={dateCard}
                            >
                                <Text style={day}>{this.state.daysArray[1]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 1}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle1 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(1, 2); }}
                                style={dateCard}
                            >
                                <Text style={day}>{this.state.daysArray[2]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 2}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle2 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(1, 3); }}
                                style={dateCard}
                            >
                                <Text style={day}>{this.state.daysArray[3]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 3}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle3 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    {/* Pickup Time */}
                    <View style={pickupTimeSection}>
                        <View style={[pickupTimeSection1, this.state.firstTimeContainerToggle && pickupTimeSection1Alt]}>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{ alignItems: 'center' }}
                            >
                                <TouchableOpacity
                                    disabled={this.state.disableTime}
                                    onPress={() => { this.onTimePress('09-11'); }}
                                    style={[timeCard, this.state.pickupTimeCardToggle0 && TimeCardAlt]}
                                >
                                    <Text style={[timeCardText, this.state.disableTimeStyle]}>09 AM - 11 AM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={this.state.disableTime}
                                    onPress={() => { this.onTimePress('11-01'); }}
                                    style={[timeCard, this.state.pickupTimeCardToggle1 && TimeCardAlt]}
                                >
                                    <Text style={[timeCardText, this.state.disableTimeStyle]}>11 AM - 01 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={this.state.disableTime}
                                    onPress={() => { this.onTimePress('02-04'); }}
                                    style={[timeCard, this.state.pickupTimeCardToggle2 && TimeCardAlt]}
                                >
                                    <Text style={[timeCardText, this.state.disableTimeStyle]}>02 PM - 04 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={this.state.disableTime}
                                    onPress={() => { this.onTimePress('04-06'); }}
                                    style={[timeCard, this.state.pickupTimeCardToggle3 && TimeCardAlt]}
                                >
                                    <Text style={[timeCardText, this.state.disableTimeStyle]}>04 PM - 06 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={this.state.disableTime}
                                    onPress={() => { this.onTimePress('06-08'); }}
                                    style={[timeCard, this.state.pickupTimeCardToggle4 && TimeCardAlt]}
                                >
                                    <Text style={[timeCardText, this.state.disableTimeStyle]}>06 PM - 08 PM</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={[pickupTimeSection2, this.state.secondTimeContainerToggle && pickupTimeSection2Alt]}>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{ alignItems: 'center' }}
                            >
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('09to11'); }}
                                    style={[timeCard, this.state.secondPickupTimeCardToggle0 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>09 AM - 11 AM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('11to01'); }}
                                    style={[timeCard, this.state.secondPickupTimeCardToggle1 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>11 AM - 01 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('02to04'); }}
                                    style={[timeCard, this.state.secondPickupTimeCardToggle2 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>02 PM - 04 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('04to06'); }}
                                    style={[timeCard, this.state.secondPickupTimeCardToggle3 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>04 PM - 06 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('06to08'); }}
                                    style={[timeCard, this.state.secondPickupTimeCardToggle4 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>06 PM - 08 PM</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View >

                {/* Delivery Date */}
                < View style={deliverySection} >
                    <Text style={title}>Delivery</Text>
                    <View style={deliveryCalendersSection}>
                        <ScrollView
                            horizontal
                        >
                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(null, 4); }}
                                style={[dateCard, this.state.deliveryDateToggle0 && deliveryDateAlt]}
                            >
                                <Text style={day}>{this.state.daysArray[2]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 2}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle4 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(null, 5); }}
                                style={[dateCard, this.state.deliveryDateToggle1 && deliveryDateAlt]}
                            >
                                <Text style={day}>{this.state.daysArray[3]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 3}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle5 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(null, 6); }}
                                style={[dateCard, this.state.deliveryDateToggle2 && deliveryDateAlt]}
                            >
                                <Text style={day}>{this.state.daysArray[4]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 4}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle6 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.onCalendarPress(null, 7); }}
                                style={[dateCard, this.state.deliveryDateToggle3 && deliveryDateAlt]}
                            >
                                <Text style={day}>{this.state.daysArray[5]}</Text>
                                <View style={dateContent}>
                                    <Text style={date}>{currentDate + 5}</Text>
                                    <View style={[checkIconContent, this.state.checkIconContentToggle7 && checkIconContentAlt]}>
                                        <Icon name="check-circle" size={20} color="whitesmoke" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View >
                    {/* Delivery Time */}
                    < View style={deliveryTimeSection}>
                        <View>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{ alignItems: 'center', backgroundColor: "#04A2E1" }}
                            >
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('09d11'); }}
                                    style={[timeCard, this.state.deliveryTimeCardToggle0 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>09 AM - 11 AM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('11d01'); }}
                                    style={[timeCard, this.state.deliveryTimeCardToggle1 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>11 AM - 01 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('02d04'); }}
                                    style={[timeCard, this.state.deliveryTimeCardToggle2 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>02 PM - 04 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('04d06'); }}
                                    style={[timeCard, this.state.deliveryTimeCardToggle3 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>04 PM - 06 PM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.onTimePress('06d08'); }}
                                    style={[timeCard, this.state.deliveryTimeCardToggle4 && TimeCardAlt]}
                                >
                                    <Text style={timeCardText}>06 PM - 08 PM</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View >
                </View >

                <ButtonContainer>
                    <Button
                        title="N E X T   S T E P"
                        color="#04A2E1"
                        onPress={() => this.onSubmit()}
                    />
                </ButtonContainer>
            </View >
        );
    }
}

export default connect(null, { onTimeSubmit })(SelectTime);

const styles = {
    pickupDateSection: {
        height: 150
    },
    pickupCalendersSection: {
        height: 100, alignItems: 'center'
    },
    deliverySection: {
        height: 100, marginTop: 40
    },
    deliveryCalendersSection: {
        height: 100,
        marginTop: 10
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        fontSize: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    dateCard: {
        height: 150,
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: 'center'
    },
    day: {
        backgroundColor: '#04A2E1',
        fontSize: 20,
        color: 'white',
        width: 100,
        paddingLeft: 10
    },
    dateContent: {
        position: 'relative',
        width: 85
    },
    date: {
        backgroundColor: '#33D65B',
        color: 'white',
        fontSize: 25,
        paddingLeft: 10,
        paddingBottom: 30
    },
    checkIconContent: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        display: 'none',
        paddingRight: 5,
        paddingBottom: 5
    },
    checkIconContentAlt: {
        display: 'flex'
    },
    pickupTimeSection: {
        position: 'relative',
        marginTop: 10
    },
    pickupTimeSection1: {
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#04A2E1'
    },
    pickupTimeSection1Alt: {
        display: 'none'
    },
    pickupTimeSection2: {
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#04A2E1'
    },
    pickupTimeSection2Alt: {
        display: 'none'
    },
    timeCard: {
        paddingRight: 19,
        paddingLeft: 19,
        paddingTop: 3,
        paddingBottom: 3
    },
    timeCardText: {
        color: 'white'
    },
    deliveryDateAlt: {
        display: 'none'
    },
    TimeCardAlt: {
        backgroundColor: '#33D65B'
    },
    deliveryTimeSection: {
        position: 'relative', marginTop: 10
    }
};
