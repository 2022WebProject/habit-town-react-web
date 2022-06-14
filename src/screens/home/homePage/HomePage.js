import { Col, Row } from "antd";
import CardHabit from "components/cards/CardHabit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import { ButtonM, ModalHabitMore, ModalHabitNew } from "components/index";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [visibleNew, setVisibleNew] = useState(false);
  const goLoginPage = () => {
    navigate("/login");
  };
  const goMyPage = () => {
    navigate("/mypage");
  };
  const goSearchPage = () => {
    navigate("/search");
  };
  return (
    <div>
      <Row>
        <Col span={3} xs={1} sm={2} md={3} lg={3} xxl={5}></Col>
        <Col span={14} xs={22} sm={20} md={18} lg={18} xxl={14}>
          <MoreButtonContainer>
            <ButtonM
              onClick={()=> setVisibleNew(true)}
              style={{
                borderRadius: 30,
                padding: "8px 16px",
                marginBottom: 32,
              }}
              bold
              line
              text={"+ 내 습관 더 추가하러 가기"}
            />
            <ModalHabitNew visible={visibleNew} onExit={() => setVisibleNew(false)} />
          </MoreButtonContainer>
          <Row gutter={[40, 40]}>
            <CardContainer onClick={() => setVisible(true)} my />
            <CardContainer onClick={() => setVisible(true)} my />
            <CardContainer onClick={() => setVisible(true)} my />
            <CardContainer />
            <CardContainer />
            <CardContainer />
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
