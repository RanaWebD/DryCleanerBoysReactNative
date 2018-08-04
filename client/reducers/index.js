import { combineReducers } from 'redux';
import { MenLibrary, WomenLibrary, HouseHoldLibrary, CharakhLibrary, AccessoriesLibrary, WoolenLibrary, SteamIronLibrary, StarchCharakhLibrary, LandingPageOffersLibrary } from './LibraryReducer';

const timeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ON_TIME_SUBMIT':
            return action.payload;
    }
    return state;
}
const addressReducer = (state = {}, action) => {
    switch (action.type) {
        case 'OTP_SEND_RESPONSE':
            return action.payload;
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

const otpResendStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RESEND_OTP_RESPONSE':
            return action.payload;
    }
    return state;
};

const otpVerifyStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'OTP_VERIFY_RESPONSE':
            return action.payload;
    }
    return state;
}

const PriceListFooterDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRICE_EXTIMATE':
            return action.payload;
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
    WoolenLibrary: WoolenLibrary,
    SteamIronLibrary: SteamIronLibrary,
    StarchCharakhLibrary: StarchCharakhLibrary,
    LandingPageOffersLibrary: LandingPageOffersLibrary
});

