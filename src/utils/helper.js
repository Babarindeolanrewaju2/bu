const ROCK = "ROCK";
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const SPOCK = "SPOCK";
const LIZARD = "LIZARD";
const OPTIONS = {
  1: ROCK,
  2: PAPER,
  3: SCISSORS,
  4: LIZARD,
  5: SPOCK,
};
const OPTIONS2EMOJI = {
  1: "⛰️",
  2: "🧻",
  3: "✂️",
  4: "🦎",
  5: "🖖",
};

//gets the choice and emoji
export const getOptions = (id) => {
  return { choice: OPTIONS[id], choiceEmoji: OPTIONS2EMOJI[id] };
};

//capitalize the first letter
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//function gets the score
export const getResult = (computer, player) => {
  switch (`${computer}-${player}`) {
    case `${ROCK}-${ROCK}`:
    case `${SCISSORS}-${SCISSORS}`:
    case `${PAPER}-${PAPER}`:
    case `${SPOCK}-${SPOCK}`:
    case `${LIZARD}-${LIZARD}`:
      return {
        yourChoice: player,
        computerChoice: computer,
        result: "tie",
      };
    case `${ROCK}-${SCISSORS}`:
    case `${ROCK}-${LIZARD}`:
    case `${SCISSORS}-${PAPER}`:
    case `${SCISSORS}-${LIZARD}`:
    case `${PAPER}-${ROCK}`:
    case `${PAPER}-${SPOCK}`:
    case `${SPOCK}-${ROCK}`:
    case `${SPOCK}-${SCISSORS}`:
    case `${LIZARD}-${PAPER}`:
    case `${LIZARD}-${SPOCK}`:
      return {
        yourChoice: player,
        computerChoice: computer,
        result: "You lose 😔💔🤖🥇",
      };
    case `${ROCK}-${PAPER}`:
    case `${ROCK}-${SPOCK}`:
    case `${SCISSORS}-${ROCK}`:
    case `${SCISSORS}-${SPOCK}`:
    case `${PAPER}-${SCISSORS}`:
    case `${PAPER}-${LIZARD}`:
    case `${SPOCK}-${PAPER}`:
    case `${SPOCK}-${LIZARD}`:
    case `${LIZARD}-${ROCK}`:
    case `${LIZARD}-${SCISSORS}`:
      return {
        yourChoice: player,
        computerChoice: computer,
        result: "You win 😉🥇",
      };
    default:
      return "SOMETHING WRONG. TRY AGAIN. 🐛";
  }
};

// export const getComputerChoice = (array) => {
//   array[Math.floor((Math.random() * 5) + 1)];
// }
