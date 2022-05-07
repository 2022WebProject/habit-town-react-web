import React from "react";
import styled, { css } from "styled-components";

const ButtonM = ({ onClick, text, bold = false, line = false }) => {
  return (
    <Container line={line} bold={bold} onClick={onClick && onClick}>
      {text}
    </Container>
  );
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
  padding: 8px 8px;
  font-size: 16px;
  line-height: 24px;
  color: #f0fdf4;
  cursor: pointer;

  /* additional Style */
  ${(props) => props.bold && bold}
  ${(props) => props.line && line}
`;

const bold = css`
  font-weight: 700;
`;

const line = css`
  background-color: transparent;
  color: #556987;
  box-shadow: none;
`;
