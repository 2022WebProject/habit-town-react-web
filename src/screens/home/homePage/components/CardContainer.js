import { Col } from "antd";
import { CardHabit, CardHabitMy } from "components/index";
import React from "react";

const CardContainer = ({ my, onClick }) => {
  return (
    <Col span={8}>
      {my ? (
        <CardHabitMy onClick={onClick && onClick} />
      ) : (
        <CardHabit onClick={onClick && onClick} />
      )}
    </Col>
  );
};

export default CardContainer;
