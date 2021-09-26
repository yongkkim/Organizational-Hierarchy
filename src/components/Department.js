import React from "react";
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
`;

const Department = ({ subDepartment }) => {
  return (
    <ul>
      {subDepartment.map((department) => (
        <li key={department.level}>
          <div className="tf-nc">
            <Dept status={department.status}>
              <h3>{department.title}</h3>
              <p>{department.region}</p>
            </Dept>
          </div>
          {department.lowerLevel && (
            <Department subDepartment={department.lowerLevel} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Department;
