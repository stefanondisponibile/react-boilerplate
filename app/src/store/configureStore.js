import { createStore, combineReducers } from "redux";
import sampleReducer from "../reducers/sample";

export default () => {
    const store = createStore( 
        combineReducers({ sampleReducer }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux dev tools
        );
    return store;
}