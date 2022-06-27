import ButtonM from "components/buttons/ButtonM";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "images/svgs/IcCheckboxWhite.svg";
import { Modal } from "antd";
import colors from "helpers/colors";

const tempList = [
  { title: "1단계 습관" },
  { title: "2단계 습관" },
  { title: "3단계 습관" },
];

const CardHabitMy = ({ lists = tempList, onClick, cleared }) => {
  return (
    <Container cleared={cleared}>
      <LineContainer>
        {lists.map((list, index) => {
          return (
            <LineWrapper key={index}>
              <Checkbox />
              <HabitText>{list.title}</HabitText>
            </LineWrapper>
          );
        })}
      </LineContainer>
      {!cleared && (
        <ButtonWrapper>
          <ButtonM
            bold
            line
            onClick={onClick && onClick}
            text="친구들 진척도 보러 가기"
          />
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default CardHabitMy;

const Container = styled.div`
  background: ${({ cleared }) => (cleared ? colors.gray500 : "#22c55e")};
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

const HabitText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  color: white;
`;
