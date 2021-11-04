
let Answer = ({onBackClick, foundAnswer}) => {

  return (
    <div>
      <div className="equation">{foundAnswer}</div>
      <button className="submit" onClick={onBackClick}>Back</button>
    </div>
  )
};

export default Answer;