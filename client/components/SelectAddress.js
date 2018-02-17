import React, { Component } from 'react';
import { ScrollView, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { onAddressSubmit } from '../actions';
import ButtonContainer from '../common/ButtonContainer';
import styles from '../css/SelectAddressCSS';

class SelectAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            address: null,
            state: null,
            pincode: null,
            number: null,
            nameErr: '',
            addErr: '',
            numberErr: '',
            stateErr: '',
            pincodeErr: '',
            DryCleanService: false,
            LaundryService: false,
            WashingService: false,
            IroningService: false
        };
    }

    //Toggle the services checkboxes
    onServicePress(value) {
        switch (value) {
            case 'dry': this.setState({ DryCleanService: !this.state.DryCleanService }); break;
            case 'laundry': this.setState({ LaundryService: !this.state.LaundryService }); break;
            case 'wash': this.setState({ WashingService: !this.state.WashingService }); break;
            case 'iron': this.setState({ IroningService: !this.state.IroningService }); break;
        }
    }

    onSubmit() {
        const state = this.state;
        const err = 'This field id empty';

        const address = {
            name: state.name,
            add: state.address,
            state: state.state,
            pincode: state.pincode,
            number: state.number,
            DryCleanService: '',
            LaundryService: '',
            WashingService: '',
            IroningService: ''
        };

        //save the text into services depending depending on true or false
        if (state.DryCleanService) {
            address.DryCleanService = 'Dry Clean';
        }

        if (state.LaundryService) {
            address.LaundryService = 'Laundry';
        }

        if (state.WashingService) {
            address.WashingService = 'Washing';
        }

        if (state.IroningService) {
            address.IroningService = 'Ironing';
        }

        if (!state.name) {
            this.setState({ nameErr: err, addErr: '', numberErr: '', stateErr: '', pincodeErr: '' });
        } else if (!state.address) {
            this.setState({ addErr: err, nameErr: '', numberErr: '', stateErr: '', pincodeErr: '' });
        } else if (!state.number) {
            this.setState({ numberErr: err, nameErr: '', addErr: '', stateErr: '', pincodeErr: '' });
        } else if (!state.state) {
            this.setState({ stateErr: err, nameErr: '', addErr: '', numberErr: '', pincodeErr: '' });
        } else if (!state.pincode) {
            this.setState({ pincodeErr: err, nameErr: '', addErr: '', stateErr: '', numberErr: '' });
        } else {
            //Action creator
            this.props.onAddressSubmit(address);
            //API response take some second to response so that we used setTimeout
            setTimeout(() => {
                //Redirect the page if API response is 200
                if (this.props.Address.status !== 'Please Enter valid mobile no') {
                    alert('OTP Send!');
                    this.props.onConfirm();
                } else {
                    //Alert user in condition of server down etc.
                    alert("Please Enter valid mobile no.");
                }
            }, 2000);
        }
    }

    render() {
        const { stateAndPincodeFormContent, formContainer, servicesSection, servicesContent, servicesCheckBoxContainer } = styles;
        return (
            <ScrollView
                style={{ flex: 1 }}
                pagingEnabled
            >
                <View>
                    <FormLabel>Name</FormLabel>
                    <FormInput onChangeText={name => { this.setState({ name }); }} />
                    <FormValidationMessage>{this.state.nameErr}</FormValidationMessage>
                </View>
                <View>
                    <FormLabel>Address</FormLabel>
                    <FormInput onChangeText={address => { this.setState({ address }); }} />
                    <FormValidationMessage>{this.state.addressErr}</FormValidationMessage>
                </View>
                <View>
                    <FormLabel>Contect Number</FormLabel>
                    <FormInput type='number' onChangeText={number => { this.setState({ number }); }} />
                    <FormValidationMessage>{this.state.numberErr}</FormValidationMessage>
                </View>
                <View style={stateAndPincodeFormContent}>
                    <View style={formContainer}>
                        <FormLabel>State</FormLabel>
                        <FormInput onChangeText={state => { this.setState({ state }); }} />
                        <FormValidationMessage>{this.state.stateErr}</FormValidationMessage>
                    </View>
                    <View style={formContainer}>
                        <FormLabel>PinCode</FormLabel>
                        <FormInput onChangeText={pincode => { this.setState({ pincode }); }} />
                        <FormValidationMessage>{this.state.pincodeErr}</FormValidationMessage>
                    </View>
                </View>

                <View style={servicesSection}>
                    <FormLabel>Services</FormLabel>
                    <View style={servicesContent}>
                        <View style={servicesCheckBoxContainer}>
                            <CheckBox
                                title='Dry Clean'
                                checked={this.state.DryCleanService}
                                onPress={() => this.onServicePress('dry')}
                            />
                        </View>
                        <View style={servicesCheckBoxContainer}>
                            <CheckBox
                                title='Laundry'
                                checked={this.state.LaundryService}
                                onPress={() => this.onServicePress('laundry')}
                            />
                        </View>
                    </View>

                    <View style={servicesContent}>
                        <View style={servicesCheckBoxContainer}>
                            <CheckBox
                                title='Washing'
                                checked={this.state.WashingService}
                                onPress={() => this.onServicePress('wash')}
                            />
                        </View>
                        <View style={servicesCheckBoxContainer}>
                            <CheckBox
                                title='Ironing'
                                checked={this.state.IroningService}
                                onPress={() => this.onServicePress('iron')}
                            />
                        </View>
                    </View>
                </View>
                <ButtonContainer>
                    <Button
                        title="A L M O S T  T H E R E "
                        color="#04A2E1"
                        onPress={() => this.onSubmit()}
                    />
                </ButtonContainer>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ Address }) => {
    return { Address };
};

export default connect(mapStateToProps, { onAddressSubmit })(SelectAddress);
