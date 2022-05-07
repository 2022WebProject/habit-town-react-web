import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import userPng from "images/pngs/user.png";
import badgePng from "images/pngs/IcBadge.png";
import { CardHabitBig } from "components";

const MypagePage = () => {
  const navigate = useNavigate();

  return (
    <Row>
      <Col span={1}></Col>
      <Col span={22}>
        <ProfileContainer>
          <ProfileImage src={userPng} />
          <ProfileInfoWrapper>
            <ProfileText>
              <span style={{ fontWeight: "700" }}>김유저</span>님의 페이지
            </ProfileText>
            <BadgeWrapper>
              <BadgeImage src={badgePng}>
                <BadgeNumberText>3</BadgeNumberText>
              </BadgeImage>
              <BadgeInfoText>{`3개의 습관을 지속했어요!`}</BadgeInfoText>
            </BadgeWrapper>
          </ProfileInfoWrapper>
        </ProfileContainer>
        <Row gutter={16}>
          <Col span={8}>
            <CardHabitBig />
          </Col>
          <Col span={8}>
            <CardHabitBig />
          </Col>
          <Col span={8}>
            <CardHabitBig />
          </Col>
        </Row>
      </Col>
      <Col span={1}></Col>
    </Row>
  );
};

export default MypagePage;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 53px;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 181px;
  height: 181px;
  border-radius: 50%;
  margin-right: 64px;
`;

const ProfileText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 20px;
  color: #000000;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;

const BadgeImage = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeNumberText = styled.div`
  margin-top: 2px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;

  color: rgba(255, 255, 255, 0.75);
`;

const BadgeInfoText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #72ba8c;
  margin-left: 12px;
`;
