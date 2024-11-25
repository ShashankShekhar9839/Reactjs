import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelction, selectedFriend }) => {
  const handleFriendSelection = (friend) => {
    onSelction(friend);
    console.log(friend);
  };

  let isSelected = selectedFriend?.id === friend?.id;

  return (
    <li className={`friend-list ${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>
      <Button onClick={() => handleFriendSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
