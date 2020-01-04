import React from "react";
import { Container } from "reactstrap";
import AppEditor from "./AppEditor";
import AppPluginEditor from "./AppPluginEditor";

function App(): JSX.Element {
  return (
    <div className="App">
      <Container className="pt-3">
        <h1>Standard Editor</h1>
        <AppEditor />
        <h1>Plugin Editor</h1>
        <AppPluginEditor />
      </Container>
    </div>
  );
}

export default App;
