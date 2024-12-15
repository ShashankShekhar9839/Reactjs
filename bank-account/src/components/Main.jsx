import React from "react";

const Main = ({ dispatch, balance, isAccountOpened, loan }) => {
  const OpenAccount = () => {
    dispatch({
      type: "openAccount",
      payLoad: 500,
    });
  };

  const handleDeposit = () => {
    dispatch({
      type: "deposit",
      payLoad: 150,
    });
  };

  const handleWithdraw = () => {
    dispatch({
      type: "withdraw",
      payLoad: 50,
    });
  };

  const handlePayLoan = () => {
    dispatch({
      type: "payLoan",
      payLoad: 5000,
    });
  };

  const handleTakeLoan = () => {
    dispatch({
      type: "requestLoan",
      payLoad: 5000,
    });
  };

  const handleCloseAccount = () => {
    dispatch({
      type: "closeAccount",
    });
  };

  return (
    <div className="main">
      <h2>useReducer Bank Account</h2>
      <p>Balance : {balance}</p>
      <p>Loan : {loan}</p>
      <button onClick={OpenAccount} disabled={isAccountOpened}>
        Open Account
      </button>
      <button onClick={handleDeposit} disabled={!isAccountOpened}>
        Deposit 150
      </button>
      <button disabled={!isAccountOpened} onClick={handleWithdraw}>
        Withdraw 50
      </button>
      <button disabled={!isAccountOpened} onClick={handleTakeLoan}>
        Request Loan of 5000
      </button>
      <button disabled={!isAccountOpened} onClick={handlePayLoan}>
        Pay Loan
      </button>
      <button disabled={!isAccountOpened} onClick={handleCloseAccount}>
        Close Account
      </button>
    </div>
  );
};

export default Main;
