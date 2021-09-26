import React from "react";
import Department from "./components/Department";
import styled from "styled-components";
import { hierarchy } from "./hierarchy";
import "./App.css";

const Tree = styled.div`
  margin-top: 100px;
  & .tf-nc {
    border: none;
    padding: 0;
  }
`;

const App = () => {
  return (
    <Tree className="tf-tree tf-custom">
      <Department subDepartment={hierarchy} />
    </Tree>
  );
};

export default App;
