import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;

  & div {
    background-color: lightblue;
    width: 150px;
    padding: 10px;
    margin: 10px;
    font-weight: 500;
    border-radius: 10px;
    animation-name: example;
    animation-duration: 10s;
    animation-iteration-count: infinite;

    @keyframes example {
      0% {
        color: white;
        background-color: red;
      }
      25% {
        color: black;
        background-color: yellow;
      }
      50% {
        color: white;
        background-color: blue;
      }
      100% {
        color: white;
        background-color: green;
      }
    }
  }
`;

const Emoji = styled.p`
  font-size: 40px;
  margin-top: 10px;
  position: relative;
  animation-name: bounce-2;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin-bottom: 0 !important;
  background-color: initial;
  @keyframes bounce-2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// const Loading = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
// `;

const Result = styled.p`
  background-color: lightblue;
  width: 300px;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
  border-radius: 5px;

  & div {
    animation-name: bounce-5;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    background-color: initial;

    @keyframes bounce-5 {
      0% {
        transform: translateX(-10);
      }
      50% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(-10);
      }
    }
  }
`;

const Choice = styled.p`
  padding: 0 !important;
  margin: 0 !important;
  background-color: initial;
`;

const PlayerVsComputer = () => {
  const { userChoice, computerChoice, score, computerLoading } = useSelector(
    (state) => state.choices
  );
  //renders player choice and the computer choice
  return (
    <div>
      <Container className="container">
        <div>
          <Choice>Your choice:</Choice>
          <Choice>{userChoice?.choice}</Choice>
          <Emoji>{userChoice?.choiceEmoji}</Emoji>
        </div>
        {/* {computerLoading ? (
          <Loading>Loading...</Loading>
        ) : ( */}
        <div>
          <Choice>Computer choice:</Choice>
          <Choice>{computerChoice?.choice}</Choice>
          <Emoji>{computerChoice?.choiceEmoji}</Emoji>
        </div>
        {/* )} */}
      </Container>
      <Result>
        Result:<div> {score?.result}</div>
      </Result>
    </div>
  );
};

export default PlayerVsComputer;
