const Input = ({ type, onAmountChange, bill, placeholder }) => {
  const handleChange = (event) => {
    onAmountChange(Number(event.target.value));
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={bill}
      onChange={handleChange}
    />
  );
};

export default Input;
