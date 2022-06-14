import React from "react";
import styled from "styled-components";

const InputM = ({ title, value, onChange }) => {
  return (
    <Container>
      {title && <TitleText>{title}</TitleText>}
      <Input value={value} onChange={onChange && onChange} />
    </Container>
  );
};

export default InputM;

const Container = styled.div`
  width: 100%;
`;

const TitleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Gray/800 */

  color: #333f51;
`;

const Input = styled.input`
  width: 345px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 0px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #2a3342;
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
