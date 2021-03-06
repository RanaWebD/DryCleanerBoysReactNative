import axios from 'axios';

let totalPrice = 0;
let totalQuantity = 0;
const selectedItemsArrObj = [];

export const onTimeSubmit = (schduleTime) => {
    return {
        type: 'ON_TIME_SUBMIT',
        payload: schduleTime
    };
};

export const selectOffer = (item) => {
    return {
        type: 'SELECTED_OFFER',
        payload: item
    };
};

//Selected Item Action creator coming from LitItem.js
export const selectItem = (item) => {
    selectedItemsArrObj.push(item);
    return {
        type: 'SELECTED_ITEM',
        payload: selectedItemsArrObj
    };
};


//Send Otp
export const onAddressSubmit = (address) => {
    //Send a requst to node server so that node server can send a otp request to MSG91 server
    const numberObj = { number: address.number };
    JSON.stringify(numberObj);
    return (dispatch) => {
        axios.post('http://drycleanerboys.com:5000/sendOTP', numberObj)
            .then(response => {
                dispatch({
                    type: 'OTP_SEND_RESPONSE',
                    payload: { address, status: response.data }
                });
            })
            .catch(err => { dispatch({ type: 'OTP_SEND_RESPONSE', payload: err.status }); });
    };
};

export const resendOTP = (number) => {
    const numberObj = { number };
    return (dispatch) => {
        axios.post('http://drycleanerboys.com:5000/resendOTP', numberObj)
            .then(response => {
                dispatch({
                    type: 'RESEND_OTP_RESPONSE',
                    payload: { status: response.data }
                });
            })
            .catch(err => { dispatch({ type: 'RESEND_OTP_RESPONSE', payload: err.status }); });
    };
};

//Verify Otp
export const verifyOtp = (data) => {
    return (dispatch) => {
        axios.post('http://drycleanerboys.com:5000/verifyOTP', data)
            .then(response => {
                dispatch({
                    type: 'OTP_VERIFY_RESPONSE',
                    payload: response.data
                });
            })
            .catch(err => { dispatch({ type: 'OTP_VERIFY_RESPONSE', payload: err.status }); });
    };
};

export const PriceExtimate = (val, price, selectedCardQuantity) => {
    // Decrease items totalQuantity and total price every time when user invoke this function
    if (val === '-' && totalQuantity > 0) {
        if (selectedCardQuantity > 0) {
            totalQuantity--;
            totalPrice = totalPrice - price;
        }
    }
    // Increase items totalQuantity and total price every time when user invoke this function
    if (val === '+') {
        totalQuantity++;
        totalPrice = totalPrice + price;
    }
    const total = { totalPrice, totalQuantity };
    // Return a action with updated totalQuantity and totalPrice
    return {
        type: 'PRICE_EXTIMATE',
        payload: total
    };
};
