import fakeStoreApi from "../../apis/fakeStoreApi.js";
import {ActionTypes} from "../constants/action-types.js"

//So basically in redux, the action functions are also used for making the apiCalls (with thunk middleware to make it async).

//FOR FETCHING ALL PRODUCTS
//thunk middleware below (thunk middleware makes the action's function async. Meaning it holds the action's fetched until all the data is received, and then sends it to "const response". )
export const fetchProducts = () => async (dispatch) => {  //from the github repo, the thunk middleware always takes "dispatch" as arguments (and even sometimes, "getState")
    const response = await fakeStoreApi.get("/products"); //this is the api fetch that will be triggered when we dispatch this action. We already declared the base url in the "fakeStoreApi" calls to be "https://fakestoreapi.com" so that is why we can just write "/products" here in the get request.
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data}); //dispatching the data you've fetched into the reducer
};

//FOR FETCHING THE SELECTED PRODUCT WHEN YOU CLICK ON IT
//thunk middleware below (thunk middleware makes the action's function async. Meaning it holds the action's fetched until all the data is received, and then sends it to "const response". )
export const fetchProduct = (id) => async (dispatch) => {  //from the github repo, the thunk middleware always takes "dispatch" as arguments (and even sometimes, "getState")
    const response = await fakeStoreApi.get(`/products/${id}`); //this is the api fetch that will be triggered when we dispatch this action. We already declared the base url in the "fakeStoreApi" calls to be "https://fakestoreapi.com" so that is why we can just write "/products" here in the get request.
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data}); //dispatching the data you've fetched into the reducer
};

    
     



//REDUNDANT    

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

