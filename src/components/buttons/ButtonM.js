import React from "react";
import styled from "styled-components";

const ButtonM = ({ onClick, text }) => {
  return <Container onClick={onClick && onClick}>{text}</Container>;
};

export default ButtonM;

const Container = styled.div`
  background: #22c55e;
  box-shadow: 0px 1px 3px rgba(42, 51, 66, 0.06),
    0px 1px 2px rgba(42, 51, 66, 0.03);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #f0fdf4;

  cursor: pointer;
`;
