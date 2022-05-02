import React from "react";
import { resetScoreboard } from "../store/choicesSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const ButtonReset = styled.div`
  background-color: black;
  margin: 5px auto;
  width: 150px;
  color: white;
  margin-top: 100px;
  padding: 5px;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;
`;

const Reset = () => {
  //resets the scoreboard
  const dispatch = useDispatch();
  return (
    <ButtonReset onClick={() => dispatch(resetScoreboard())}>
      Reset ScoreBoard
    </ButtonReset>
  );
};

export default Reset;
