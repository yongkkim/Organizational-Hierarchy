import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Department.css";

const Dept = styled.section`
  padding: 0.5em 1em;
  border-radius: 10px;
  border: 3px solid
    ${(p) =>
      p.status === "critical"
        ? "red"
        : p.status === "warning"
        ? "yellow"
        : "green"};
  cursor: pointer;

  &:hover {
    background-color: ${(p) =>
      p.status === "critical"
        ? "#ffdede"
        : p.status === "warning"
        ? "#ffffe5"
        : "#e4ffe4"};
  }
`;

const PosNum = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: dodgerblue;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -17px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const Position = ({ subPosition, currentPos, expand }) => {
  const findPath = (position) => {
    if (!position.lowerLevel) return false;
    if (position.level === "1") return true;

    let managerArr = [...position.managers, position.id];

    const isSameManager = managerArr.every(
      (manager, i) => manager === currentPos.managers[i]
    );

    if (Number(position.level) + 1 < Number(currentPos.level)) return true;
    else if (
      Number(position.level) + 1 === Number(currentPos.level) &&
      isSameManager
    )
      return true;

    return false;
  };

  return (
    <ul>
      {subPosition.map((position) => (
        <li key={position.id}>
          <div className="tf-nc">
            <Dept
              status={position.status}
              currPos={currentPos.id === position.id}
              onClick={() =>
                position.lowerLevel && expand(position.lowerLevel[0])
              }
            >
              <h3>{position.title}</h3>
              <p>{position.region}</p>
              {position.lowerLevel && !findPath(position) && (
                <PosNum>
                  <span>{position.lowerLevel.length}</span>
                </PosNum>
              )}
            </Dept>
          </div>
          {findPath(position) && (
            <Position
              subPosition={position.lowerLevel}
              currentPos={currentPos}
              expand={expand}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Position;
