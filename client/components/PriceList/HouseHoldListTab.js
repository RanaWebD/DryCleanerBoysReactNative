import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './common/ListItem';
import Footer from './common/Footer';

class HouseHoldListTab extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.HouseHoldLibrary}
                    renderItem={({ item }) => <ListItem library={item} />}
                    keyExtractor={item => item.id}
                />
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = ({ HouseHoldLibrary }) => {
    return { HouseHoldLibrary };
};

export default connect(mapStateToProps)(HouseHoldListTab);

const styles = {
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
};
