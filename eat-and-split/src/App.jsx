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
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriendForm = () => {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleBillSplit = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelction={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        <div className="align-right">
          <Button onClick={handleShowAddFriendForm}>
            {" "}
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      </div>
      {selectedFriend && (
        <div className="right">
          <FormBillSplit
            selectedFriend={selectedFriend}
            onBillSplit={handleBillSplit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
