export const deposit = amount => ({
    type: "DEPOSIT",
    payload: amount
});

export const withdraw = amount => ({
    type: "WITHDRAW",
    payload: amount
});

const initialState = {
    amount: 0,
    lastUpdate: "Yesterday"
};

function balanceReducer(state = initialState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return {
                amount: state.amount + action.payload,
                lastUpdate: new Date().toLocaleString()
            };

        case "WITHDRAW":
            return {
                amount: state.amount - action.payload,
                lastUpdate: new Date().toLocaleString()
            };

        default:
            return state;
    }
}

export default balanceReducer;

