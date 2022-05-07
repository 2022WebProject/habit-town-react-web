import ButtonM from "components/buttons/ButtonM";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "images/svgs/Checkbox.svg";

const tempList = [{ title: "title" }, { title: "title" }, { title: "title" }];

const CardHabit = ({ lists = tempList, onClick }) => {
  return (
    <Container>
      <LineContainer>
        {lists.map((list, index) => {
          return (
            <LineWrapper>
              <Checkbox />
              <div>{list.title}</div>
            </LineWrapper>
          );
        })}
      </LineContainer>
      <ButtonWrapper>
        <ButtonM bold onClick={onClick && onClick} text="참여하기" />
      </ButtonWrapper>
    </Container>
  );
};

export default CardHabit;

const Container = styled.div`
  background: #f7f8f9;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);
  border-radius: 6px;
  padding: 40px 32px;
`;
const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0px;
`;
const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
