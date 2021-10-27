import Submit from './Submit';

let Cards = ({ questions, answers, onChange, onSubmitClick }) => {
  const cards = questions.map((question, index) => (
    <div className="card" key={index}>
      <p style={{ color: "white" }}>{question.question}</p>
      <label>
        <input
          style={{ textAlign: "right" }}
          className="input"
          type="number"
          value={answers[index]}
          onChange={onChange(index)}
        />
        <span style={{ color: "white", marginLeft: "10px" }}>
          {question.unit}
        </span>
      </label>
    </div>
  ));

  return (
      <div>
          <div className="cards">{cards}</div>
          <Submit onClick={onSubmitClick}/>
      </div>
  );
};

export default Cards;
