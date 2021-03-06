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
  1: "โฐ๏ธ",
  2: "๐งป",
  3: "โ๏ธ",
  4: "๐ฆ",
  5: "๐",
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
        result: "You lose ๐๐๐ค๐ฅ",
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
        result: "You win ๐๐ฅ",
      };
    default:
      return "SOMETHING WRONG. TRY AGAIN. ๐";
  }
};

// export const getComputerChoice = (array) => {
//   array[Math.floor((Math.random() * 5) + 1)];
// }
