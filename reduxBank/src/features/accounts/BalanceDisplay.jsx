import React from "react";
import { connect } from "react-redux";

function formatCurrencyValue(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = ({ balance }) => {
  return <div className="balance">{formatCurrencyValue(balance)}</div>;
};

// this function is here to pass balance as a prop from store

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
