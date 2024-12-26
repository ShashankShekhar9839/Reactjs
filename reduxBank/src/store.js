import { combineReducers, createStore, applyMiddleware } from "redux";
// thunk is for async operations
import { thunk } from "redux-thunk";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// this is the way of combining multiple reducers in old way

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// creating a store and applying middleware for async operations

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
