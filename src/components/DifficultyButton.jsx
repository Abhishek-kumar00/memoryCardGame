function DifficultyButton({ difficulty, onClick, cardCount }) {
  return (
    <button
      className={`border rounded py-1 px-3 hover:scale-105 transition ${difficulty=="Rookie"?"hover:bg-green-500":""} ${difficulty=="Veteran"?"hover:bg-yellow-500":""} ${difficulty=="Expert"?"hover:bg-red-500":""} `}
      onClick={() => onClick(cardCount)}
    >
      {difficulty}
    </button>
  );
}

export default DifficultyButton;
