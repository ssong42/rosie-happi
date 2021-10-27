let scale = [
  {
    text: "Not right now (-_-)",
    lower: 0,
    upper: 3,
  },
  {
    text: "I feel mehhh...",
    lower: 4,
    upper: 9,
  },
  {
    text: "I've been in shittier situations...",
    lower: 9,
    upper: 12,
  },
  {
    text: "I love life.",
    lower: 13,
    upper: 35,
  },
  {
    text: "I am bitchin.",
    lower: 36,
    upper: 47,
  },
  {
    text: "FUck YeS! I feel GEWD!",
    lower: 48,
    upper: 67,
  },
  {
    text: "Nothing can stop me BITCH!",
    lower: 68,
    upper: 79,
  },
  {
    text: "I found peace with myself. I am Nirvana!",
    lower: 80,
    upper: 102,
  },
  {
    text: "I had too much coffeee. I'm high as fuck.",
    lower: 103,
    upper: 125,
  },
  {
    text: "I like turtles.",
    lower: 126,
    upper: 170,
  },
  {
    text: "I fucking love my boyfriend.",
    lower: 171,
    upper: Number.MAX_VALUE,
  },
];

let Answer = ({totalHappiness, onBackClick}) => {
  let findAnswer = scale.filter((each) => {
    if (totalHappiness >= each.lower && totalHappiness <= each.upper)
      return true;
    return false;
  });

  return (
    <div>
      <div className="equation">{findAnswer[0].text}</div>
      <button className="submit" onClick={onBackClick}>Back</button>
    </div>
  )
};

export default Answer;