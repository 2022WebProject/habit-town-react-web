import React from "react";
import styled from "styled-components";

import { ReactComponent as IcHome } from "images/svgs/IcHome.svg";
import InputSearch from "components/inputs/InputSearch";
import ButtonM from "components/buttons/ButtonM";
import { useNavigate } from "react-router-dom";

const NavTop = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goSignupPage = () => {
    navigate("/signup");
  };
  const goHomePage = () => {
    navigate("/");
  };
  return (
    <Container>
      <NavContainer onClick={goHomePage} style={{ cursor: "pointer" }}>
        <IcHome />
      </NavContainer>
      <NavContainer>
        <InputSearch />
      </NavContainer>
      <NavContainer style={{ justifyContent: "flex-end" }}>
        <ProfileContainer>
          <ButtonM onClick={goLoginPage} txtBtn text={"Log In"} />
          <ButtonM onClick={goSignupPage} text={"Sign Up"} />
        </ProfileContainer>
      </NavContainer>
    </Container>
  );
};

export default NavTop;

const Container = styled.div`
  width: 100%;
  padding: 20px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);

  position: fixed;
  top: 0px;
  z-index: 10;
  background-color: white;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0px 8px;
`;

const NavContainer = styled.div`
  display: flex;
  flex: 1;
`;
