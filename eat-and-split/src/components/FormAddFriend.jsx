import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="form">
      <div>
        <label>🐒 Friend Name</label>
        <input type="text" />
      </div>

      <div>
        <label>🖼️ Image Url</label>
        <input type="text" />
      </div>
      <Button>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
