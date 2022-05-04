import React from "react";
import styled from "styled-components";
import Nav from "../Nav";

import avatar from "../img/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <StyledProfileScreen>
      <Nav />
      <Body>
        <h1>Profili Düzenle</h1>
        <Info>
          <img src={avatar} alt="avatar" />
          <Details>
            <h2>{user.email}</h2>
            <Plans>
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className="signOut">
                Çıkış Yap
              </button>
            </Plans>
          </Details>
        </Info>
      </Body>
    </StyledProfileScreen>
  );
}

const StyledProfileScreen = styled.div`
  background: black;
  height: 100vh;

  .signOut {
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5%;
    width: 100%;
    background: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
`;

const Info = styled.div`
  display: flex;
  img {
    height: 100px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding-top: 8%;
  max-width: 800px;

  h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

const Details = styled.div`
  margin-left: 25px;
  flex: 1;

  h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

const Plans = styled.div`
  margin-top: 20px;
  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;

export default ProfileScreen;
