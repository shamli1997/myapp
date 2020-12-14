import { createStore, combineReducers } from "redux";
import balanceReducer from "./BalanceReducer";
import transactionsReducer from "./TransactionReducer";

const reducer = combineReducers({
    balance: balanceReducer,
    transactions: transactionsReducer
});

const store = createStore(reducer);

export default store;