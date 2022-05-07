import { Col, Row } from "antd";
import CardHabit from "components/cards/CardHabit";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./components/CardContainer";

const Home = () => {
  const navigate = useNavigate();
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
          <Row gutter={[40, 40]}>
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
          </Row>
        </Col>
        <Col span={5} xs={1} sm={2} md={13} lg={3} xxl={5}></Col>
      </Row>
    </div>
  );
};

export default Home;
