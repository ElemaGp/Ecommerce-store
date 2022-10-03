import { combineReducers } from 'redux' //combines all the reducers. This combines all the "cases" in the particular reducer function.
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,  //combining all the "cases" in the "productReducer" function i made and setting its name as "allProducts". Now i can use "allProducts" in the store.js.
    product: selectedProductReducer,
})

export default reducers;