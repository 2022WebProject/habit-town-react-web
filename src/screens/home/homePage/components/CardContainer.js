import { Col } from "antd";
import { CardHabit, CardHabitMy } from "components/index";
import React from "react";

const CardContainer = ({ my }) => {
  return <Col span={8}>{my ? <CardHabitMy /> : <CardHabit />}</Col>;
};

export default CardContainer;
