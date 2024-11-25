import { useEffect, useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormBillSplit from "./components/FormBillSplit";

const initialFriends = [
  {
    id: 1,
    name: "Nobi",
    image: "https://i.pravatar.cc/56?u=1",
    balance: -20,
  },
  {
    id: 2,
    name: "Saurav",
    image: "https://i.pravatar.cc/56?u=2",
    balance: 30,
  },
  {
    id: 3,
    name: "Anil",
    image: "https://i.pravatar.cc/56?u=3",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriendForm = () => {
    setShowAddFriend(true);
  };

  let frineds = initialFriends;
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={frineds} />
        {!showAddFriend && (
          <div className="align-right">
            <Button onClick={handleShowAddFriendForm}>Add Friend</Button>
          </div>
        )}
        {showAddFriend && <FormAddFriend />}
      </div>
      <div className="right">
        <FormBillSplit />
      </div>
    </div>
  );
}

export default App;
