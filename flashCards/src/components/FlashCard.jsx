import "../css/flashcard.css";

const FlashCard = ({ question, answer, id, activeId, setActiveId }) => {
  const handleClick = () => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      className={`flashcard-wrapper ${id === activeId ? "selected" : ""}`}
      onClick={handleClick}
    >
      <p className={`question-container`}>
        {id === activeId ? answer : question}
      </p>
    </div>
  );
};

export default FlashCard;
