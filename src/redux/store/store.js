import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineAllReducer, initalState } from "../reducers/";


const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk];

export const Store = createStore(
  combineAllReducer,
  initalState,
  compose(applyMiddleware(...middleware), composeEnhancer)
);
