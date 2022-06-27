import { Col, Row } from "antd";
import CardHabit from "components/cards/CardHabit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import { ButtonM, ModalHabitMore, ModalHabitNew } from "components/index";
import styled from "styled-components";
import { requestUesrInfo } from "apis/userApi";
import {
  requestQuestAccept,
  requestAllQuests,
  requestClearedQuests,
} from "apis/questApi";

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [visibleNew, setVisibleNew] = useState(false);

  const [user, setUser] = useState();
  const [quest, setQuest] = useState([]);
  const [clearedQuests, setClearedQuests] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState();

  const goLoginPage = () => {
    navigate("/login");
  };
  const goMyPage = () => {
    navigate("/mypage");
  };
  const goSearchPage = () => {
    navigate("/search");
  };

  const onRefresh = () => {
    getAllQuest();
  };

  const getUserInfo = async () => {
    const result = await requestUesrInfo();
    setUser(result);
  };

  const getAllQuest = async () => {
    const result = await requestAllQuests();
    setQuest(result.data);
  };

  const getClearedQuest = async () => {
    const result = await requestClearedQuests();
    console.log("cleared quest", result);
    setClearedQuests(result.data);
  };

  const onClickAccept = async (id) => {
    const acceptException = (e) => {
      if (e?.response?.status == 401) {
        alert("습관 구독은 로그인이 필요해요.");
        navigate("/login");
      } else {
        alert(e?.response?.data?.message);
      }
    };
    const result = await requestQuestAccept(id, acceptException);
    alert(result.message);
    // console.log(result.message);
    getUserInfo();
    getAllQuest();
  };

  const onClickQuestOpenModal = (item) => {
    setVisible(true);
    setSelectedQuest(item);
  };

  useEffect(() => {
    getUserInfo();
    getAllQuest();
    getClearedQuest();
  }, []);

  return (
    <div>
      <Row>
        <Col span={3} xs={1} sm={2} md={3} lg={3} xxl={5}></Col>
        <Col span={14} xs={22} sm={20} md={18} lg={18} xxl={14}>
          <MoreButtonContainer>
            <ButtonM
              onClick={() => setVisibleNew(true)}
              style={{
                borderRadius: 30,
                padding: "8px 16px",
                marginBottom: 32,
              }}
              bold
              line
              text={"+ 내 습관 더 추가하러 가기"}
            />
            <ModalHabitNew
              visible={visibleNew}
              onExit={() => setVisibleNew(false)}
              refresh={onRefresh}
            />
          </MoreButtonContainer>
          <Row gutter={[40, 40]}>
            {clearedQuests?.map((item) => {
              return (
                <CardContainer
                  onClick={() => onClickQuestOpenModal(item)}
                  my
                  cleared
                  lists={item.sub_quests}
                />
              );
            })}
            {user?.accepted_quests?.map((item) => {
              return (
                <CardContainer
                  onClick={() => onClickQuestOpenModal(item)}
                  my
                  lists={item.sub_quests}
                />
              );
            })}
            {quest?.map((item) => {
              return (
                <CardContainer
                  lists={item.sub_quests}
                  onClick={() => onClickAccept(item._id)}
                />
              );
            })}
          </Row>
        </Col>
        <Col span={5} xs={1} sm={2} md={13} lg={3} xxl={5}></Col>
        <ModalHabitMore
          lists={selectedQuest?.sub_quests}
          quest={selectedQuest}
          visible={visible}
          onExit={() => setVisible(false)}
        />
      </Row>
    </div>
  );
};

export default Home;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
