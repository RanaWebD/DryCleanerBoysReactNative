import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    firstCardSection: {
        flexDirection: 'row',
        padding: 5
    },
    cardSection: {
        padding: 5
    },
    contentBoxLeft: {
        flex: 1
    },
    content: {
        flexDirection: 'row',
        marginBottom: 10
    },
    contentBoxRight: {
        flex: 1
    },
    title: {
        color: 'gray',
        fontSize: 15
    },
    pickupDayDateContent: {
        flexDirection: 'row'
    },
    deliveryDayDateContent: {
        flexDirection: 'row'
    },
    servicesContent: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default styles;
