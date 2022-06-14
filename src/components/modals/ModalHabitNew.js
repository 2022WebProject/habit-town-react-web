import colors from "helpers/colors";
import React from "react";
import styled from "styled-components";
import ButtonM from "components/buttons/ButtonM";
import { ReactComponent as Checkbox } from "images/svgs/IcCheckboxWhite.svg";
import { ReactComponent as IcCross } from "images/svgs/IcCross.svg";

const tempList = [
  { title: "1단계 습관" },
  { title: "2단계 습관" },
  { title: "3단계 습관" },
];

const ModalHabitNew = ({ lists = tempList, onExit, visible }) => {
  if (!visible) return null;
  return (
    <ModalContainer>
      <Container>
        <CrossWrapper onClick={onExit && onExit}>
          <IcCross />
        </CrossWrapper>
        <HabitInfoContainer>
          <HabitContainer>
            {lists.map((list, index) => {
              return (
                <LineWrapper key={index}>
                  <Checkbox />
                  <HabitText>{list.title}</HabitText>
                </LineWrapper>
              );
            })}
          </HabitContainer>
        </HabitInfoContainer>
        <ButtonWrapper>
          <ButtonM bold onClick={onclick && onclick} text="생성하기" />
        </ButtonWrapper>
      </Container>
    </ModalContainer>
  );
};

export default ModalHabitNew;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 108, 115, 0.78);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const Container = styled.div`
  padding: 24px;
  background-color: ${colors.white};
  position: relative;
`;

const HabitInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HabitContainer = styled.div`
  background: #22c55e;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);
  border-radius: 6px;
  padding: 20px 32px;
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

const HabitText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  color: white;
`;

const CrossWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;