import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#04A2E1',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    footerContentLeft: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerContentRight: {
        flex: 1,
        backgroundColor: '#33D65B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContentText: {
        color: 'white',
        position: 'absolute',
        left: 4,
        bottom: 8,
        justifyContent: 'center'
    },
    icon: {
        position: 'relative',
        top: 2
    },
    estimatePriceText: {
        marginLeft: 10,
        fontSize: 18,
        color: 'skyblue',
    },
    quantityText: {
        fontSize: 18,
        color: 'white'
    },
    go: {
        color: 'white',
        fontSize: 20
    }
});

export default styles;
