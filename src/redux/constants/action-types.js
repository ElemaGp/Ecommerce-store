export const ActionTypes = {
    SET_PRODUCTS : "SET_PRODUCTS",  
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT", //for unmouting the selected product when we leave the page
};

/*
this file lists all the possible "types" of the actions that i'll use in the "actions" folder. You already know that
this is not compulsory. You can just directly make the "type" in the "actions" file after writing the function, but 
writing all the actions types here makes your code more readable, especially if you're working with a team.
*/