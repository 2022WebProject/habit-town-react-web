import React from "react";
import styled, { css } from "styled-components";

const ButtonM = ({
  onClick,
  text,
  bold = false,
  line = false,
  txtBtn = false,
  style,
}) => {
  return (
    <Container
      style={style}
      txtBtn={txtBtn}
      bold={bold}
      line={line}
      onClick={onClick && onClick}
    >
      {text}
    </Container>
  );
};

export default ButtonM;

const Container = styled.div`
  background: #22c55e;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  font-size: 16px;
  line-height: 24px;
  color: #f0fdf4;
  cursor: pointer;

  /* additional Style */
  ${(props) => props.bold && bold}
  ${(props) => props.txtBtn && txtBtn}
  ${(props) => props.line && line}
`;

const bold = css`
  font-weight: 700;
`;

const txtBtn = css`
  background-color: transparent;
  color: #556987;
`;

const line = css`
  background-color: white;
  border: 1px solid #22c55e;
  color: #22c55e;
`;
