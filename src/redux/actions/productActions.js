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

