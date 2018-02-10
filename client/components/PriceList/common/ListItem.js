import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PriceExtimate } from '../../../actions/';
import Card from '../../../common/Card';

// this component render every time when some chick on any list item that why all values reset every time
class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            total: 0,
        };
    }

    //Invoke this function every time use user press of + and  - buttons
    onPress(val) {
        const price = this.props.library.price;
        const quantity = this.state.quantity;

        if (val === '-' && this.state.quantity !== 0) {
            this.setState({ quantity: quantity - 1 });
        }
        if (val === '+') {
            this.setState({ quantity: quantity + 1 });
        }

        //Call a action creater with the val and price paramenters
        this.props.PriceExtimate(val, price, quantity);
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
                                        onPress={() => { this.onPress('-'); }}
                                    ><Text style={styles.quantity}>-</Text></TouchableOpacity>
                                </View>
                                <Text style={styles.quantity}>{this.state.quantity}</Text>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => { this.onPress('+'); }}
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
export default connect(null, { PriceExtimate })(ListItem);

const styles = {
    container: {
        flex: 1
    },
    imageBackground: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    imageBackgroundTitle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        color: 'white'
    },
    price: {
        textAlign: 'center',
        color: 'white',
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 0,
        paddingTop: 50,
    },
    quantityBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f5f5f5',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 200,
        padding: 2
    },
    quantity: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: "pink",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerContent: {
        flexDirection: 'row',
    }
};
