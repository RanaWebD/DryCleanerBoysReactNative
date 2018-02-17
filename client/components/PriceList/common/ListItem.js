import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PriceExtimate, selectedItem } from '../../../actions';
import Card from '../../../common/Card';
import styles from '../../../css/ListItemCSS';

// this component render every time when some chick on any list item that why all values reset every time
class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            amount: 0
        };
    }

    //Invoke this function every time use user press of + and  - buttons
    onPress(val, data) {
        const price = this.props.library.price;
        const quantity = this.state.quantity;

        if (val === '-' && this.state.quantity !== 0) {
            this.setState({ quantity: quantity - 1 });

            data.itmeTotalQuantity = this.state.quantity - 1;

            this.state.amount = this.state.amount - data.price;
            data.itmeTotalAmount = this.state.amount;
        }
        if (val === '+') {
            this.setState({ quantity: quantity + 1 });

            data.itmeTotalQuantity = this.state.quantity + 1;

            this.state.amount = this.state.amount + data.price;
            data.itmeTotalAmount = this.state.amount;

        }

        //Call a action creater with the val and price paramenters
        this.props.PriceExtimate(val, price, quantity);
        this.props.selectedItem(data);
    }

    render() {
        const data = this.props.library;

        return (
            <Card>
                <View style={{ height: 200, opacity: 50 }}>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={{ uri: data.img }}
                    >
                        <Text style={styles.imageBackgroundTitle}>{data.title}</Text>
                        <Text style={styles.price}>Rs. {' ' + data.price}</Text>
                        <View style={styles.quantityContainer}>
                            <View style={styles.quantityBox} >
                                <View>
                                    <TouchableOpacity
                                        onPress={() => { this.onPress('-', data); }}
                                    ><Text style={styles.quantity}>-</Text></TouchableOpacity>
                                </View>
                                <Text style={styles.quantity}>{this.state.quantity}</Text>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => { this.onPress('+', data); }}
                                    ><Text style={styles.quantity}>+</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Card>
        );
    }
}

//Connet react component with redux store and action creator with the help of react-redux connect funtion
export default connect(null, { PriceExtimate, selectedItem })(ListItem);
