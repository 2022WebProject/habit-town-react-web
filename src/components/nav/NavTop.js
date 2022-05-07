import React from "react";
import styled from "styled-components";

import { ReactComponent as IcHome } from "images/svgs/IcHome.svg";
import InputSearch from "components/inputs/InputSearch";
import ButtonM from "components/buttons/ButtonM";

const NavTop = () => {
  return (
    <Container>
      <NavContainer style={{ cursor: "pointer" }}>
        <IcHome />
      </NavContainer>
      <NavContainer>
        <InputSearch />
      </NavContainer>
      <NavContainer style={{ justifyContent: "flex-end" }}>
        <ProfileContainer>
          <ButtonM line text={"Sign In"} />
          <ButtonM text={"Sign Up"} />
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
