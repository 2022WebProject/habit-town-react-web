import { Col } from "antd";
import { CardHabit, CardHabitMy } from "components/index";
import React from "react";

const CardContainer = ({ my, onClick, lists, cleared }) => {
  return (
    <Col span={8}>
      {my ? (
        <CardHabitMy
          cleared={cleared}
          lists={lists}
          onClick={onClick && onClick}
        />
      ) : (
        <CardHabit lists={lists} onClick={onClick && onClick} />
      )}
    </Col>
  );
};

export default CardContainer;
