import { useSelector } from "react-redux";
import "./App.css";
import CreateCustomer from "./features/customers/CreateCustomer";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";

function App() {
  // this is the way of subscribing to the redux store

  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <>
      <h1>🏦 The React-Redux Bank</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  );
}

export default App;
