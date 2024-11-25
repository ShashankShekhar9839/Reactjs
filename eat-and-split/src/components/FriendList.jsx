import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelction, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelction={onSelction}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
