import { ActionTypes } from "../constants/action-types";

//creating initial state
const initialState = {
    products: [
        {
        id: 1,
        title: "Dipesh",
        category: "programmer",
    },
  ],
};

//creating the Reducer for each of the action's type "case"
export const productReducer = (state = initialState, {type, payload}) => { //i took the "state" as an argument. Then i destructured the "action" to get the "type" and "payload" from the productActions.js
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}