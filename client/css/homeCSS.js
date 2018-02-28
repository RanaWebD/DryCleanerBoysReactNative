import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#04A2E1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 20
    },
    offerContainer: {
        height: 180
    },
    imageBackground: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    offerContent: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    offerHeading: {
        fontSize: 30,
        marginBottom: 15,
        color: 'white'
    },
    offerItem: {
        fontSize: 25,
        color: 'white',
        marginBottom: 10
    },
    offerPriceContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offerPriceText: {
        color: 'gray',
        width: 50
    },
    offerPriceAmount: {
        fontSize: 30,
        color: '#33D65B'
    },
    validityText: {
        color: 'white'
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
});

export default styles;
