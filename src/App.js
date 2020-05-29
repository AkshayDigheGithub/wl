import React from "react";
import { Container } from "react-bootstrap";
import NavigationLink from './components/navigation/link';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationLink />
      </Container>
    </div>
  );
}

export default App;
