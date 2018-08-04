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
    content: {
        padding: 10
    },
    dryCleanCategory:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#015C7F',
        borderRightWidth: 1,
        borderBottomColor: '#015C7F',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginTop: 10
    },
    washAndFoldCategory:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#015C7F',
        borderLeftWidth: 1,
        borderBottomColor: '#015C7F',
        borderBottomWidth: 1,
        marginRight: 10,
        marginTop: 10
    },
    washAndIronCategory:{ 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRightColor: '#015C7F',
        borderRightWidth: 1,
        borderTopColor: '#015C7F',
        borderTopWidth: 1,
        marginLeft: 10,
        marginBottom: 10
},
    streamIronCategory:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderLeftColor: '#015C7F',
        borderLeftWidth: 1,
        borderTopColor: '#015C7F',
        borderTopWidth: 1,
        marginRight: 10,
        marginBottom: 10
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
    serviceCategoryText:{
        color: 'white',
        borderColor: 'white',
        borderBottomWidth: 1

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
