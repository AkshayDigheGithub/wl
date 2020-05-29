import React from "react";
import Skelton from "./components/skelton/index";
import Home from "./components/home/index";
import LoginComponent from "./components/login/login.component";
import Signupcomponent from "./components/signup/signup.component"
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const isLogin = sessionStorage.getItem("login");
  return (
    <div className="App">
      <Container>
        {/* this is single componet after login and sign up this skelton will call */}

        {isLogin ? (
          <Skelton>
            <Home />
          </Skelton>
        ) : (
            <>
              <LoginComponent />
              <Signupcomponent />
            </>
          )}
      </Container>
    </div>
  );
}

export default App;
