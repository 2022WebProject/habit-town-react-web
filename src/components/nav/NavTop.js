import React from "react";
import styled from "styled-components";

import { ReactComponent as IcHome } from "images/svgs/IcHome.svg";
import InputSearch from "components/inputs/InputSearch";
import ButtonM from "components/buttons/ButtonM";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom, userTokenAtom } from "store/atom/userAtom";
import userPng from "images/pngs/user.png";

const NavTop = () => {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userAtom);

  const goLoginPage = () => {
    navigate("/login");
  };
  const goSignupPage = () => {
    navigate("/signup");
  };
  const goHomePage = () => {
    navigate("/");
  };
  const goMyPage = () => {
    navigate("/mypage");
  };

  const Logout = () => {
    setUser(null);
    window.open("/", "_self");
    // navigate("/");
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
          {user ? (
            <>
              <ButtonM onClick={Logout} txtBtn text={"Log Out"} />
              <ProfileImage
                onClick={goMyPage}
                src={"https://picsum.photos/200"}
              />
            </>
          ) : (
            <>
              <ButtonM onClick={goLoginPage} txtBtn text={"Log In"} />
              <ButtonM onClick={goSignupPage} text={"Sign Up"} />
            </>
          )}
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

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;
