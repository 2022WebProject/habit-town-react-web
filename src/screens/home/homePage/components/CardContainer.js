import { Col } from "antd";
import { CardHabit } from "components/index";
import React from "react";

const CardContainer = () => {
  return (
    <Col span={8}>
      <CardHabit />
    </Col>
  );
};

export default CardContainer;
