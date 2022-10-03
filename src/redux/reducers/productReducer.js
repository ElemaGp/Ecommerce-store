import { ActionTypes } from "../constants/action-types";

//creating initial state
const initialState = {
    products: [],
};

//creating the Reducer "case" for each of the action's type 
export const productReducer = (state = initialState, {type, payload}) => { //i took the "state" as an argument and made it equal to the initial state which is an empty array. Then i destructured the "action" to get the "type" and "payload" from the "setProducts" action.
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}; //if the actiontype case is SET_PRODUCTS, then this productReducer fuction will return whatever values we already have in the state and then the new data which was fetched and sent to SET_PRODUCTS Actions. The newly fetched payload will be added to the "products".
    
        default:
            return state;
    }
};

export const selectedProductReducer = (state={}, {type, payload}) => { //i took the "state" as an argument and made it equal to an empty object. Then i destructured the "action" to get the "type" and "payload" from the "selectedProducts" action.
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
            default:
              return state;
        }
    }
            
    