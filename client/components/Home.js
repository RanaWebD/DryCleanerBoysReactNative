import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    render() {
        const { header, headerText, bookNowBtn, buttonStyle, footer, footerItem, footerText } = styles;
        return (
            <View style={{ flex: 1 }}>
                <View style={header}>
                    <Text style={headerText}>DryCleaner Boys</Text>
                </View>
                <ScrollView>
                    <View style={bookNowBtn}>
                        <TouchableOpacity
                            style={buttonStyle}
                            onPress={() => this.props.onPress('go-to-booknow')}
                        ><Text>BOOK NOW</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={footer}>
                    {/* <TouchableOpacity
                        onPress={() => this.props.onPress('go-to-home')}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/home.png')}
                        />
                        <Text style={footerText}>Home</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => this.props.onPress('go-to-price')}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/price-tag.png')}
                        />
                        <Text style={footerText}>Price</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => { Linking.openURL('http://drycleanerboys.com/'); }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/earth-globe.png')}
                        />
                        <Text style={footerText}>WebSite</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default MainScreen;

const styles = {
    header: {
        height: 80,
        backgroundColor: '#04A2E1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 20
    },
    content: {
        padding: 10
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#04A2E1'
    },
    footerItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: 'white'
    },
    bookNowBtn: {
        padding: 10
    },
    buttonStyle: {
        backgroundColor: '#04A2E1',
        padding: 10,
        alignItems: 'center',
    }
};

