import React from "react";
import styled from "styled-components";

import { ReactComponent as IcHome } from "images/svgs/IcHome.svg";

const NavTop = () => {
  return (
    <Container>
      <IcHome />
      <div>검색</div>
      <ProfileContainer>
        <div>Log in</div>
        <div>Sign up</div>
      </ProfileContainer>
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

  &:hover {
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px 0px;
`;
