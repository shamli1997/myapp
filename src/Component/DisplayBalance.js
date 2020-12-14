import React from "react";
import { connect } from "react-redux";

class DisplayBalance extends React.Component {
    render() {
        const { balance, lastUpdate } = this.props;

        return (
            <>
                <h1>Balance</h1>
                <p>Your current balance is: {balance}</p>
                <h1>{balance < 1000 ? "😆" : "😎"}</h1>
                <small>Last Updated: {lastUpdate}</small>
            </>
        );
    }
}

const mapStateToProps = state => ({
    balance: state.balance.amount,
    lastUpdate: state.balance.lastUpdate
});

export default connect(mapStateToProps)(DisplayBalance);