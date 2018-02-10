import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';

//get the mobile window width with the react native helper call Dimensions
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends Component {

    randerLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.props.onComplete}
                ><Text> Onwards!! </Text></TouchableOpacity>
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.randerLastSlide(index)}
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.renderSlides()}

            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
    },
    buttonStyle: {
        padding: 20,
        backgroundColor: '#0288D1'
    }
}