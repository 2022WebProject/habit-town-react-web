import React from "react";
import styled from "styled-components";
import { ReactComponent as IcSearch } from "images/svgs/IcSearch.svg";

const InputSearch = ({ onClick, text }) => {
  return (
    <Container onClick={onClick && onClick}>
      <Input placeholder="다른 사람들의 습관을 구경해 보세요" />
      <div style={{ cursor: "pointer" }}>
        <IcSearch />
      </div>
    </Container>
  );
};

export default InputSearch;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 16px;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Input = styled.input`
  width: 345px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 0px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #22c55e;
  border: 1px solid #d5dae1;
  box-shadow: 0px 1px 3px rgba(42, 51, 66, 0.06),
    0px 1px 2px rgba(42, 51, 66, 0.03);

  ::placeholder {
    color: #8896ab;
  }
  &:focus {
    outline: none;
  }
`;
