import React, { useState } from "react";
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

  ${(p) =>
    p.location &&
    `background-color: ${
      p.status === "critical"
        ? "#ff9b9b"
        : p.status === "warning"
        ? "#ffffaa"
        : "#a9ffa9"
    }`};
`;

const Department = ({ subPosition, location }) => {
  //   console.log(subDepartment[0].region);

  const [loc, setLoc] = useState("");
  const findDirectDept = () => {
    // if(subDepartment.level > 1){
    //     const searchLoc = subDepartment.inCharge.find(loc => loc === currentLoc)
    //     if(searchLoc) setLocation(subDepartment.region);
    // }else{
    // }
  };

  return (
    <ul>
      {subPosition.map((position) => (
        <li key={position.id}>
          {console.log(position.status, position.region)}
          <div className="tf-nc">
            <Dept
              status={position.status}
              location={location}
              onClick={() => findDirectDept()}
            >
              <h3>{position.title}</h3>
              <p>{position.region}</p>
            </Dept>
          </div>
          {position.lowerLevel && (
            <Department subPosition={position.lowerLevel} location={loc} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Department;
