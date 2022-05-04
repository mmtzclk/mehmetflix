import React, { useState } from "react";
import styled from "styled-components";
import background from "../img/background.jpg";
import logo from "../img/logo.png";

import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <StyledLoginScreen background={background}>
      <Background>
        <img src={logo} alt="logo" />
        <button onClick={() => setSignIn(true)}>Giriş Yap</button>
        <Gradient />
      </Background>
      <Body>
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Limitsiz filmler, TV programları ve daha fazlası.</h1>
            <h2>Her yerde izle. İstediğin zaman iptal et</h2>
            <h3>
              İzlemeye hazır mısın? E-mail adresini gir ve izlemeye başla.
            </h3>
            <Input>
              <form>
                <input type="email" placeholder="E-Posta Adresi" />
                <button onClick={() => setSignIn(true)}>KAYDOL</button>
              </form>
            </Input>
          </>
        )}
      </Body>
    </StyledLoginScreen>
  );
}

const StyledLoginScreen = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = styled.div`
  img {
    position: fixed;
    left: 0;
    top: 20px;
    width: 130px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }

  button {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #e50914;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const Body = styled.div`
  position: absolute;
  width: 80%;
  padding: 0 10%;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  text-align: center;
  z-index: 1;
  h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const Input = styled.div`
  margin: 20px;
  input {
    padding: 10px;
    outline-width: 0;
    color: black;
    height: 30px;
    width: 40%;
    border: none;
    max-width: 600px;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 16px 20px;
    background-color: #e50914;
    font-weight: 600;
    outline: none;
  }
`;

export default LoginScreen;
