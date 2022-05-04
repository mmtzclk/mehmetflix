import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => alert(err.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => alert(err.message));
  };

  return (
    <StyledSignupScreen>
      <form>
        <h1>Giriş Yap</h1>
        <input ref={emailRef} type="email" placeholder="E-Posta" />
        <input ref={passwordRef} type="password" placeholder="Şifre" />
        <button type="submit" onClick={signIn}>
          Giriş Yap
        </button>
        <h4>
          <span className="grey">Mehmetflix'te yeni misiniz? </span>
          <span className="link" onClick={register}>
            Hemen Kaydolun.
          </span>
        </h4>
      </form>
    </StyledSignupScreen>
  );
}

const StyledSignupScreen = styled.div`
  max-width: 300px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.85);
  form {
    display: grid;
    flex-direction: column;

    h1 {
      text-align: left;
      margin-bottom: 25px;
    }

    h4 {
      margin-top: 25px;
      .grey {
        color: gray;
      }
      .link:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    input {
      color: black;
      outline: none;
      height: 40px;
      margin-bottom: 14px;
      border: none;
      border-radius: 5px;
      padding: 5px 15px;
    }
    button {
      padding: 16px 20px;
      font-size: 1rem;
      border-radius: 5px;
      background: #e50914;
      border: none;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
    }
  }
`;

export default SignupScreen;
