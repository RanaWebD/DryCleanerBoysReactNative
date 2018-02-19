import { combineReducers } from 'redux';
import { MenLibrary, WomenLibrary, HouseHoldLibrary, CharakhLibrary, AccessoriesLibrary, WoolenLibrary } from './LibraryReducer';

const timeReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'ON_TIME_SUBMIT':
            return actions.payload;
    }
    return state;
}
const addressReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'OTP_SEND_RESPONSE':
            return actions.payload;
    }
    return state;
};

const selectedOfferReducer = (state = 'none', action) => {
    switch (action.type) {
        case 'SELECTED_OFFER':
            return action.payload;
    }
    return state;
};

const selectedItemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_ITEM':
            return action.payload;
    }
    return state;
};

const otpResendStatusReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'RESEND_OTP_RESPONSE':
            return actions.payload;
    }
    return state;
};

const otpVerifyStatusReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'OTP_VERIFY_RESPONSE':
            return actions.payload;
    }
    return state;
}

const PriceListFooterDataReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'PRICE_EXTIMATE':
            return actions.payload;
    }
    return state;
};

export default combineReducers({
    Time: timeReducer,
    Address: addressReducer,
    PriceListFooterData: PriceListFooterDataReducer,
    resendOtpResponse: otpResendStatusReducer,
    otpVerifyStatus: otpVerifyStatusReducer,
    selectedOffer: selectedOfferReducer,
    SelectedItem: selectedItemReducer,
    MenLibrary: MenLibrary,
    WomenLibrary: WomenLibrary,
    HouseHoldLibrary: HouseHoldLibrary,
    CharakhLibrary: CharakhLibrary,
    AccessoriesLibrary: AccessoriesLibrary,
    WoolenLibrary: WoolenLibrary
});

