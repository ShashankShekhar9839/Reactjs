import { useState } from "react";
import Button from "./Button";

let url = "https://i.pravatar.cc/56";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(url);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageUrlChange = () => {
    setImage(`${image}?u=${crypto.randomUUID()}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleImageUrlChange();
    let id = crypto.randomUUID();
    let newFriend = {
      name,
      image,
      balance: 0,
      id,
    };
    if (name == "" || image == "") return;
    onAddFriend(newFriend);
    setName("");
    setImage(url);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>🐒 Friend Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label>🖼️ Image Url</label>
        <input type="text" value={image} onChange={handleImageUrlChange} />
      </div>
      <Button>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
