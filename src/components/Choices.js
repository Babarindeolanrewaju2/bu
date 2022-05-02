import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchChoices,
  setUserChoice,
  fetchComputerChoice,
} from "../store/choicesSlice";
import styled from "styled-components";

import { getOptions } from "../utils/helper";
import { useDispatch } from "react-redux";

const Selections = styled.div`
  text-align: center;
  width: 700px;

  & div {
    color: black;
    background-color: lightgrey;
    margin: 2px;
    padding: 5px;
    border-radius: 5px;
    transition: all 1s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: green;
    }
  }
`;

const Choices = () => {
  //loads all the choices available from the redux store
  const { games, loading } = useSelector((state) => state.choices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChoices());
  }, [dispatch]);

  //function handles user selection
  const handleSelection = async ({ id }) => {
    dispatch(setUserChoice(getOptions(id)));
    if (id) {
      dispatch(fetchComputerChoice());
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <h2>Choose a weapon</h2>
        {loading ? (
          <div>loading choices... </div>
        ) : (
          <Selections className="row justify-content-center align-items-center">
            {games?.map((choices, key) => {
              return (
                <div
                  className="col-md-2 col-4"
                  index={key}
                  onClick={() => handleSelection(choices)}
                >
                  {choices?.name}
                </div>
              );
            })}
          </Selections>
        )}
      </div>
    </div>
  );
};

export default Choices;
