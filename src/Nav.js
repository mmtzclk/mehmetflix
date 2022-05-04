import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "./img/logo.png";
import avatar from "./img/avatar.png";

function Nav() {
  const [show, handleShow] = useState("inherit");

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow("#111");
    } else {
      handleShow("inherit");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <StyledNav show={show}>
      <Contents>
        <Logo onClick={() => history.push("/")} src={logo} alt="logo" />
        <Avatar
          onClick={() => history.push("/profile")}
          src={avatar}
          alt="avatar"
        />
      </Contents>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.show};
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;
  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Contents = styled.div``;

const Logo = styled.img`
  position: fixed;
  left: 0;
  width: 130px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

const Avatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default Nav;
