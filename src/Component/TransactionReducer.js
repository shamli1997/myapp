function transactionsReducer(state = [], action) {
    const newEntry = {
        date: new Date(),
        amount: action.payload
    };

    switch (action.type) {
        case "DEPOSIT":
            return [{ ...newEntry, type: "Credit" }, ...state];

        case "WITHDRAW":
            return [{ ...newEntry, type: "Debit" }, ...state];

        default:
            return state;
    }
}

export default transactionsReducer;