import React from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "./BalanceReducer";

class Cashier extends React.Component {
    state = { amount: "" };

    handleChange = ({ target }) => {
        this.setState({ amount: target.value });
    };

    handleClick(type) {
        const action = type === "deposit" ? deposit : withdraw;
        const amount = parseInt(this.state.amount, 10);
        this.props.dispatch(action(amount));
    }

    render() {
        return (
            <>
                <label>
                    Amount:
          <input
                        type="text"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                </label>

                <button onClick={() => this.handleClick("deposit")}>Deposit</button>
                <button onClick={() => this.handleClick("withdraw")}>Withdaw</button>
            </>
        );
    }
}

export default connect()(Cashier);