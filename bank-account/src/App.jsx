import { useState, useReducer, act } from "react";
import "./App.css";
import Main from "./components/Main";

const initialState = {
  balance: 0,
  loan: 0,
  isAccountOpened: false,
};

const reducer = (state, action) => {
  if (!state.isAccountOpened && action.type !== "openAccount") return state;
  switch (action.type) {
    case "openAccount": {
      return { ...state, isAccountOpened: true, balance: action.payLoad };
    }

    case "deposit": {
      const isAccountOpened = state.isAccountOpened;
      if (isAccountOpened) {
        return { ...state, balance: state.balance + action.payLoad };
      }
      return state;
    }
    case "withdraw": {
      if (state.balance < action.payLoad) {
        alert("not enough money to withdraw");
        return state;
      }
      return { ...state, balance: state.balance - action.payLoad };
    }

    case "requestLoan": {
      if (state.loan > 0) {
        alert("already taken loan");
        return state;
      }
      return {
        ...state,
        balance: state.balance + action.payLoad,
        loan: action.payLoad,
      };
    }
    case "payLoan": {
      if (state.balance < state.loan) {
        alert("not enough money to pay the loan");
        return state;
      }
      return { ...state, balance: state.balance - state.loan, loan: 0 };
    }
    case "closeAccount": {
      if (state.loan > 0 || state.balance > 0) {
        alert("you can not close your account");
        return state;
      }
      return initialState;
    }
    default:
      return "Unknown Action";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, isAccountOpened } = state;
  console.log(balance, loan, isAccountOpened);

  return (
    <>
      <Main
        dispatch={dispatch}
        balance={balance}
        isAccountOpened={isAccountOpened}
        loan={loan}
      />
    </>
  );
}

export default App;
