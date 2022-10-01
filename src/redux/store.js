import { createStore } from "redux";
import reducers from "./reducers/index"; //importing the combined reducers function from the index.js

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //the arguments are the combined reducers function you just imported and an initial empty object state. The third argument i added helps us see the state in the redux devtool extension i installed from chrome, when i "inspect" in the browser

export default store;