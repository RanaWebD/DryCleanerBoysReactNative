import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Linking, Button, Dimensions } from 'react-native';
import Card from '../common/Card';
import styles from '../css/homeCSS';
import ImageSlider from '../common/Slider';
const { width } = Dimensions.get('window')

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { washAndFold: false, washAndIron: false, dryClean: false, laundry: false };
    }

    render() {
        const { header, headerText, dryCleanCategory, washAndFoldCategory, washAndIronCategory, streamIronCategory, bookNowBtn, serviceCategoryText, footer, footerItem, footerText } = styles;
        return (
            <View style={{flex: 1}}>
                <View style={header}>
                    <Text style={headerText}>DryCleaner Boys</Text>
                </View>
                <ScrollView>
                    <Card>
                        <ImageSlider navigation={this.props.navigation} />
                    </Card>
                    <Card>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: 140,
                            backgroundColor: '#02729D',
                        }}>
                            <TouchableOpacity style={dryCleanCategory} onPress={() => this.props.onPress('category-price-list')}>
                                <ImageBackground style={{ width: 64, height: 64, }} source={require('../assets/images/clean.png')}></ImageBackground>
                                <Text style={serviceCategoryText}>DRY CLEANING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={washAndFoldCategory} onPress={() => this.props.onPress('starch/charakh')}>
                                <ImageBackground style={{ width: 64, height: 64 }} source={require('../assets/images/fashion.png')}></ImageBackground>
                                <Text style={serviceCategoryText}>Starch/Charakh</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', height: 140, backgroundColor: '#02729D' }}>
                            <TouchableOpacity style={washAndIronCategory} onPress={() => this.props.onPress('washIron')}>
                                <ImageBackground style={{ width: 64, height: 64 }} source={require('../assets/images/washing-machine.png')}></ImageBackground>
                                <Text style={serviceCategoryText}>WASH & IRON</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={streamIronCategory} onPress={() => this.props.onPress('steam-iron')} >
                                <ImageBackground style={{ width: 64, height: 64 }} source={require('../assets/images/laundering.png')}></ImageBackground>
                                <Text style={serviceCategoryText}>STEAM IRON</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <View style={bookNowBtn}>
                        <Button
                            title='D I R E C T  B O O K I N G'
                            color="#04A2E1"
                            onPress={() => this.props.onPress('go-to-booknow')}
                        />
                    </View>
                </ScrollView>


                <View style={footer}>
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
