import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './common/ListItem';
import Footer from './common/Footer';
import styles from '../../css/PriceListCSS';

class WoolenListTab extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.WoolenLibrary}
                    renderItem={({ item }) => <ListItem library={item} />}
                    keyExtractor={item => item.id}
                />
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = ({ WoolenLibrary }) => {
    return { WoolenLibrary };
};

export default connect(mapStateToProps)(WoolenListTab);

