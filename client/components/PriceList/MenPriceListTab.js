import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './common/ListItem';
import Footer from './common/Footer';
import styles from '../../css/PriceListCSS';

class ManPriceListTab extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.MenLibrary}
                    renderItem={({ item }) => <ListItem library={item} />}
                    keyExtractor={item => item.id}
                />
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = ({ MenLibrary }) => {
    return { MenLibrary };
};

export default connect(mapStateToProps)(ManPriceListTab);
