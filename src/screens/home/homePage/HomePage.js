import { Col, Row } from "antd";
import CardHabit from "components/cards/CardHabit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import { ButtonM, ModalHabitMore } from "components/index";
import styled from "styled-components";
import {
  requestAllQuests,
  requestQuestAccept,
  requestUesrInfo,
} from "apis/userApi";

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [user, setUser] = useState();
  const [quest, setQuest] = useState([]);

  const goLoginPage = () => {
    navigate("/login");
  };
  const goMyPage = () => {
    navigate("/mypage");
  };
  const goSearchPage = () => {
    navigate("/search");
  };

  const getUserInfo = async () => {
    const result = await requestUesrInfo();
    console.log(result);
    setUser(result);
  };

  const getAllQuest = async () => {
    const result = await requestAllQuests();
    console.log(result);
    setQuest(result.data);
  };

  const onClickAccept = async (id) => {
    const result = await requestQuestAccept(id);
    console.log(result);
    alert(result.message);
    // console.log(result.message);
    getUserInfo();
    getAllQuest();
  };

  useEffect(() => {
    getUserInfo();
    getAllQuest();
  }, []);

  return (
    <div>
      <Row>
        <Col span={3} xs={1} sm={2} md={3} lg={3} xxl={5}></Col>
        <Col span={14} xs={22} sm={20} md={18} lg={18} xxl={14}>
          <MoreButtonContainer>
            <ButtonM
              style={{
                borderRadius: 30,
                padding: "8px 16px",
                marginBottom: 32,
              }}
              bold
              line
              text={"+ 내 습관 더 추가하러 가기"}
            />
          </MoreButtonContainer>
          <Row gutter={[40, 40]}>
            {user?.accepted_quests?.map((item) => {
              return (
                <CardContainer
                  onClick={() => setVisible(true)}
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
        <ModalHabitMore visible={visible} onExit={() => setVisible(false)} />
      </Row>
    </div>
  );
};

export default Home;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
