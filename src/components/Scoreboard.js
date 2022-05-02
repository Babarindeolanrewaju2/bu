import React from "react";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../utils/helper";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const Scoreboard = () => {
  // renders the scoreboard from the redux store
  const { lastScores } = useSelector((state) => state.choices);
  return (
    <div>
      <div className="text-center">
        {`Scoreboard with the ${lastScores?.slice(0, 10).length} most recent
        results`}
      </div>
      <Container>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Your Choice</th>
              <th>Computer Choice</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {lastScores?.slice(0, 10).map((game, key) => {
              return typeof game === "string" ? (
                game
              ) : (
                <>
                  <tr index={key}>
                    <td>
                      {capitalizeFirstLetter(game?.yourChoice.toLowerCase())}
                    </td>
                    <td>
                      {capitalizeFirstLetter(
                        game?.computerChoice.toLowerCase()
                      )}
                    </td>
                    <td>{game?.result.toLowerCase()}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Scoreboard;
