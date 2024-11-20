const Select = ({ options, onSelect, value }) => {
  const handleTipChange = (event) => {
    onSelect(Number(event.target.value));
  };

  return (
    <>
      <select value={value} onChange={handleTipChange}>
        {options?.map((option) => (
          <option
            value={option.percentage}
            key={option.rating}
            style={{ padding: "5px" }}
          >
            {option.rating} - {option.percentage}%
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
