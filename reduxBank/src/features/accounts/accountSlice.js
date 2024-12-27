// /* --- THIS IS THE OLDER VERSION OF REDUX, YET SIMPLE VERSION --- */

// const initialState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
//   isLoading: false,
// };

// // this is reducer function for account, basically we create single reducer function for each feature. Like for accounts we have accountReducer and for customers we have a different function

// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit": {
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     }
//     case "account/withdraw": {
//       if (action.payload > state.balance) return state;

//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     }

//     case "account/requestLoan": {
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     }

//     case "account/payLoan": {
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loan: 0,
//         loanPurpose: "",
//       };
//     }

//     case "account/convertingCurrency": {
//       return { ...state, isLoading: true };
//     }

//     default:
//       return state;
//   }
// }

// /*   in normal reducer, we directly create actions, but in redux it is a convention to use action creators for the same. Again this is not related to redux, its just a convention that is accepted mostly.

// Previously there were seperate files for each action creator, but it is not followed in current scenerio

// */

// // action creators

// // this is simple action creator for deposit, but if we have to do some async operation we can do it using other way

// // export function deposit(amount) {
// //   return {
// //     type: "account/deposit",
// //     payload: amount,
// //   };
// // }

// // async desposit action creator

// export function deposit(amount, currency) {
//   if (currency === "USD")
//     return {
//       type: "account/deposit",
//       payload: amount,
//     };

//   // if we are doing something asyn, instead of just returing a object, we return a function. This is a tricky part

//   return async function (dispatch) {
//     dispatch({
//       type: "account/convertingCurrency",
//     });

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({
//       type: "account/deposit",
//       payload: converted,
//     });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }

// // action creators end

/**   OLDER VERSION CODE ENDS HERE */

/** NEW VERSION OF CREATING SLICE STARTS HERE */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      (state.balance += action.payload), (state.isLoading = false); // initially it feels like we are directly mutating the state, but redux toolkit usese 'immer' library under the hood, which converts it to immutable.
    },
    withdraw(state, action) {
      if (state.balance > action.payload) {
        state.balance -= action.payload;
      } else {
        alert("not enough balance");
      }
    },
    // this is best way of converting our action into sturctured payload
    // requestLoan: {
    //   prepare(amount, purpose) {
    //     return {
    //       payload: { amount, purpose },
    //     };
    //   },

    //   reducer(state, action) {
    //     if (state.loan > 0) return;

    //     state.loan = action.payload.amount;
    //     state.loanPurpose = action.payload.purpose;
    //     state.balance = state.balance + action.payload.amount;
    //   },
    // },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      const { amount, purpose } = action.payload;
      state.loan = amount;
      state.loanPurpose = purpose;
      state.balance += amount;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;
