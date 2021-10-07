import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  ${(p) =>
    p.currPos &&
    !p.expandPos &&
    `background-color: ${
      p.status === "critical"
        ? "#ffdede"
        : p.status === "warning"
        ? "#ffffe5"
        : "#e4ffe4"
    };`};

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

const Position = ({ subPosition, currentPos, expand, isExpand }) => {
  const findLowerLevel = (position) => {
    let managerArr = [...currentPos.managers, currentPos.id];
    const found = position.lowerLevel.find((lowlvl) => {
      return lowlvl.managers.every((manager, i) => manager === managerArr[i]);
    });
    return found;
  };

  const findInitLowerLevel = (position) => {
    let managerArr = [...position.managers, position.id];
    const isSameManager = managerArr.every(
      (manager, i) => manager === currentPos.managers[i]
    );

    return isSameManager;
  };

  const findPath = (position) => {
    if (!position.lowerLevel) return false;

    if (Number(position.level) === 1) return true;

    //For initial hierarchy with current position.
    if (!isExpand && Number(position.level) + 1 < Number(currentPos.level))
      return true;

    //after click expand button ( click on specific position )
    if (
      isExpand &&
      !currentPos.lowerLevel &&
      Number(position.level) + 1 === Number(currentPos.level)
    ) {
      return findInitLowerLevel(position);
    } else if (
      isExpand &&
      currentPos.lowerLevel &&
      Number(position.level) < Number(currentPos.level)
    ) {
      return true;
    } else if (
      isExpand &&
      Number(position.level) === Number(currentPos.level) &&
      findLowerLevel(position)
    ) {
      return true;
    }

    if (currentPos.level !== "1") {
      return findInitLowerLevel(position);
    }

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
              onClick={() => expand(position)}
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
              isExpand={isExpand}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Position;
