import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineAllReducer } from "../reducers/";

const allReducer = combineAllReducer;

const initalState = {
  user: [],
  labour: [],
  contractor: [],
};

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk];

export const Store = createStore(
  allReducer,
  initalState,
  compose(applyMiddleware(...middleware), composeEnhancer)
);
