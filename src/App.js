import Choices from "./components/Choices";
import PlayerVsComputer from "./components/PlayerVsComputer";
import Reset from "./components/Reset";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="container">
      <Reset />
      <Choices />
      <PlayerVsComputer />
      <Scoreboard />
    </div>
  );
}

export default App;
