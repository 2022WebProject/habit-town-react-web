import React from "react";
import styled from "styled-components";
import userPng from "images/pngs/user.png";
import { ReactComponent as IcCheck } from "images/svgs/Checkbox.svg";
import { ReactComponent as IcCheckNone } from "images/svgs/IcCheckboxNone.svg";

const ListUserProfile = () => {
  return (
    <Container>
      <ProfileImage src={userPng} />
      <InfoWrapper>
        <NicknameWrapper>
          <ProfileText style={{ marginRight: 8 }}>김유저</ProfileText>
          <IcCheck />
          <IcCheck />
          <IcCheck />
        </NicknameWrapper>
        <ProfileText style={{ fontWeight: "500", marginTop: 4 }}>
          17일 째 함께하는중
        </ProfileText>
      </InfoWrapper>
    </Container>
  );
};

export default ListUserProfile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 88px;
  height: 88px;
`;

const InfoWrapper = styled.div`
  margin-left: 24px;
`;

const NicknameWrapper = styled.div`
  display: flex;
`;

const ProfileText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;
