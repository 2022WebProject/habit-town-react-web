import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import userPng from "images/pngs/user.png";
import badgePng from "images/pngs/IcBadge.png";
import { CardHabitBig } from "components";
import { requestUesrInfo } from "apis/userApi";
import { requestClearQuest, requestQuestAccept } from "apis/questApi";

const MypagePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const getUserInfo = async () => {
    const result = await requestUesrInfo();
    console.log(result);
    setUser(result);
  };

  const postQuitQuest = async (id) => {
    const result = await requestQuestAccept(id);
    alert("퀘스트를 때려치웠습니다.");
    getUserInfo();
  };

  const postClearQuest = async (id) => {
    const result = await requestClearQuest(id);
    alert("퀘스트를 완료했습니다.");
    getUserInfo();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Row>
      <Col span={1}></Col>
      <Col span={22}>
        <ProfileContainer>
          <ProfileImage src={"https://picsum.photos/200"} />
          <ProfileInfoWrapper>
            <ProfileText>
              <span style={{ fontWeight: "700" }}>{user?.nickname}</span>님의
              페이지
            </ProfileText>
            <BadgeWrapper>
              <BadgeImage src={badgePng}>
                <BadgeNumberText>{user?.success_quest_count}</BadgeNumberText>
              </BadgeImage>
              <BadgeInfoText>{`${user?.success_quest_count}개의 습관을 지속했어요!`}</BadgeInfoText>
            </BadgeWrapper>
          </ProfileInfoWrapper>
        </ProfileContainer>
        <Row gutter={16}>
          {user?.accepted_quests?.map((item) => {
            return (
              <Col span={8}>
                <CardHabitBig
                  onClickQuit={() => postQuitQuest(item._id)}
                  lists={item.sub_quests}
                  questNum={item.status}
                  status={item.progress}
                  isCleared={item.is_cleared}
                  onClick={() => postClearQuest(item._id)}
                />
              </Col>
            );
          })}
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
