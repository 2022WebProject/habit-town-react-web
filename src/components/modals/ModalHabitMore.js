import colors from "helpers/colors";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "images/svgs/IcCheckboxWhite.svg";
import ListUserProfile from "components/lists/ListUserProfile";
import { ReactComponent as IcCross } from "images/svgs/IcCross.svg";

const tempList = [
  { title: "1단계 습관" },
  { title: "2단계 습관" },
  { title: "3단계 습관" },
];

const ModalHabitMore = ({ lists = tempList, onExit, visible }) => {
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
          <DayContainer>
            <DDAYText>D+17</DDAYText>
            <StartDayText>2022년 2월 6일 ~</StartDayText>
          </DayContainer>
        </HabitInfoContainer>
        <MyProfileContainer>
          <ListUserProfile />
          <SubText>여러분 전 못하겠어요</SubText>
        </MyProfileContainer>
        <Line />
        <OtherProfileContainer>
          <OtherProfileWrapper>
            <ListUserProfile />
            <SubTextOther>여러분 전 못하겠어요</SubTextOther>
          </OtherProfileWrapper>
          <OtherProfileWrapper>
            <ListUserProfile />
            <SubTextOther>여러분 전 못하겠어요</SubTextOther>
          </OtherProfileWrapper>
        </OtherProfileContainer>
        <OtherProfileContainer>
          <OtherProfileWrapper>
            <ListUserProfile />
            <SubTextOther>여러분 전 못하겠어요</SubTextOther>
          </OtherProfileWrapper>
          <OtherProfileWrapper>
            <ListUserProfile />
            <SubTextOther>여러분 전 못하겠어요</SubTextOther>
          </OtherProfileWrapper>
        </OtherProfileContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalHabitMore;

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

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
`;

const DDAYText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;

  color: #36c96c;
`;

const StartDayText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  color: #333333;
`;

const MyProfileContainer = styled.div`
  display: flex;
  padding: 24px 0px;
  align-items: center;
  gap: 0px 24px;
`;
const OtherProfileContainer = styled.div`
  display: flex;
  gap: 0px 24px;
`;
const OtherProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  justify-content: center;
  gap: 0px 24px;
`;

const SubText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2a3342;
  text-align: center;
`;

const SubTextOther = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2a3342;
  text-align: center;
  margin-top: 24px;
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #36c96c;
`;

const CrossWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;
