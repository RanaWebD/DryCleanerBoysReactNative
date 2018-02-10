import React from 'react';
import { View } from 'react-native';

const ButtonContainer = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5
    }
};

export default ButtonContainer;
