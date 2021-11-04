let questions = [
    {
      question: "How many hours of sleep did Rosie get?",
      factor: 4,
      unit: "hours",
      type: "number",
    },
    {
      question: "How many cups of coffee did Rosie drink today?",
      factor: 8,
      unit: "cups",
      type: "number",
    },
    {
      question: "How many hours of homework does Rosie have?",
      factor: -1,
      exponential: 2,
      unit: "hours",
      type: "number",
    },
    {
      question: "How full is Rosie's stomach?",
      factor: 1,
      unit: "%",
      type: "number",
    },
    {
      question: "How many hugs did Rosie get from Steven?",
      factor: 400,
      unit: "hugs",
      type: "number",
    },
  ];

  let scale = [
    {
      text: "Not right now (-_-)",
      emoji: "🤬",
      lower: 0,
      upper: 3,
    },
    {
      text: "I feel mehhh...",
      emoji: "😕",
      lower: 4,
      upper: 9,
    },
    {
      text: "I've been in shittier situations...",
      emoji: "🙃",
      lower: 9,
      upper: 12,
    },
    {
      text: "Things are looking up.",
      emoji: "😌",
      lower: 13,
      upper: 35,
    },
    {
      text: "I am bitchin.",
      emoji: "😜",
      lower: 36,
      upper: 47,
    },
    {
      text: "FUck YeS! I feel GEWD!",
      emoji: "🤩",
      lower: 48,
      upper: 67,
    },
    {
      text: "Nothing can stop me BITCH!",
      emoji: "🥳",
      lower: 68,
      upper: 79,
    },
    {
      text: "I found peace with myself. I am Nirvana!",
      emoji: "🧘‍♀️",
      lower: 80,
      upper: 102,
    },
    {
      text: "I had too much coffeee. I'm high as fuck.",
      emoji: "☕️",
      lower: 103,
      upper: 125,
    },
    {
      text: "I like turtles.",
      emoji: "🐢",
      lower: 126,
      upper: 170,
    },
    {
      text: "I fucking love my boyfriend.",
      emoji: "🥰",
      lower: 171,
      upper: Number.MAX_VALUE,
    },
  ];

let backendURI = "https://rosie-happi-backend.herokuapp.com"

export {
    backendURI,
    questions,
    scale
};