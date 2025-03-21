const makeId = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text = text + possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export default makeId;
