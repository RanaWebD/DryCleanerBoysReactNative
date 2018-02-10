import axios from 'axios';

let totalPrice = 0,
    totalQuantity = 0;

export const onTimeSubmit = (schduleTime) => {
    return {
        type: 'ON_TIME_SUBMIT',
        payload: schduleTime
    };
};

export const onAddressSubmit = (address) => {
    //Send a requst to node server so that node server can send a otp request to MSG91 server
    const obj = { number: address.number };
    JSON.stringify(obj);

    axios.post('http://192.168.0.106:3000/sendOTP', obj)
        .then(response => {
            console.log("response");
        })
        .catch(error => {
            console.log('error');
        });
    return {
        type: 'ADDRESS',
        payload: address
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
