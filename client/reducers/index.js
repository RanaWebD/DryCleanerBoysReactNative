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
        case 'ADDRESS':
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
}

export default combineReducers({
    Time: timeReducer,
    Address: addressReducer,
    PriceListFooterData: PriceListFooterDataReducer,
    MenLibrary: MenLibrary,
    WomenLibrary: WomenLibrary,
    HouseHoldLibrary: HouseHoldLibrary,
    CharakhLibrary: CharakhLibrary,
    AccessoriesLibrary: AccessoriesLibrary,
    WoolenLibrary: WoolenLibrary
});

