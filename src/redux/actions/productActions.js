import {ActionTypes} from "../constants/action-types.js"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS, //i already declared the "SET_PRODUCTS" in the "actionTypes.js" file, so i'm just using it here.
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {    //for unmouting the selected product when we leave the page
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

