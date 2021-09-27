import React, { useEffect, useState, useReducer } from "react";
import Position from "./components/Position";
import styled from "styled-components";
import {
  hierarchy,
  heavyHierarchy,
  leanHierarchy,
  currentPosition,
} from "./hierarchy";
import "./App.css";

const Tree = styled.div`
  text-align: center;
  margin-top: 100px;
  & .tf-nc {
    border: none;
    padding: 0;
  }

  & .tf-nc:before,
  & .tf-nc:after {
    border-left-color: dodgerblue;
    border-left-width: 2px;
  }

  & li li:before {
    border-top-color: dodgerblue;
    border-top-width: 2px;
  }
`;

const Color = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const ColorContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  & span {
    margin-left: 3px;
  }
`;

const Indicator = styled.div`
  text-align: center;
  margin-top: 50px;
  ${ColorContainer}:nth-child(1) :nth-child(1) {
    background-color: red;
  }

  ${ColorContainer}:nth-child(2) :nth-child(1) {
    background-color: yellow;
  }

  ${ColorContainer}:nth-child(3) :nth-child(1) {
    background-color: green;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

const App = () => {
  const [posHierarchy, setPosHierarchy] = useState(heavyHierarchy);
  const [currPos, setCurPos] = useState(currentPosition);

  //For testing if refreshing the hierarchy works
  const [hierarchyName, setHierarchyName] = useState("heavyHierarchy");

  const expandPosition = (position) => {
    setCurPos(position);
  };

  // In order to test "refreshing the hierarchy", swiching one hierarchy to another back and forth
  useEffect(() => {
    const interval = setInterval(() => {
      setPosHierarchy(
        hierarchyName === "heavyHierarchy"
          ? [...leanHierarchy]
          : [...heavyHierarchy]
      );
      setCurPos(currentPosition);
      setHierarchyName(
        hierarchyName === "heavyHierarchy" ? "leanHierarchy" : "heavyHierarchy"
      );
    }, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [posHierarchy]);

  return (
    <>
      <Title>Hierarchical Position Chart of Sales Department</Title>
      <Indicator>
        <ColorContainer>
          <Color></Color>
          <span>Critical</span>
        </ColorContainer>
        <ColorContainer>
          <Color></Color>
          <span>Warning</span>
        </ColorContainer>
        <ColorContainer>
          <Color></Color>
          <span>Normal</span>
        </ColorContainer>
      </Indicator>

      <Tree className="tf-tree tf-custom">
        <Position
          subPosition={posHierarchy}
          currentPos={currPos}
          expand={expandPosition}
        />
      </Tree>
    </>
  );
};

export default App;
