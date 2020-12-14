import { combineReducers } from "redux";
import balanceReducer from "./BalanceReducer";
import transactionsReducer from "./TransactionReducer";

const rootReducer = combineReducers({
    balance: balanceReducer,
    transactions: transactionsReducer
});

export default rootReducer;
