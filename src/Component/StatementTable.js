import React from "react";
import { connect } from "react-redux";

class Statement extends React.Component {
    renderRow(transaction, index) {
        return (
            <tr key={index}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
            </tr>
        );
    }

    render() {
        const { transactions, balance } = this.props;

        return (
            <>
                <h1>Statement</h1>

                <h3>Transactions</h3>
                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>{transactions.map(this.renderRow)}</tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    balance: state.balance,
    transactions: state.transactions
});

export default connect(mapStateToProps)(Statement);