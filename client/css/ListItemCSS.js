import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
