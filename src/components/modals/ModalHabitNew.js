import colors from "helpers/colors";
import React, { useState } from "react";
import styled from "styled-components";
import ButtonM from "components/buttons/ButtonM";
import { ReactComponent as Checkbox } from "images/svgs/IcCheckboxWhite.svg";
import { ReactComponent as IcCross } from "images/svgs/IcCross.svg";
import InputM from "components/inputs/InputM";
import Space from "helpers/space";
import { questRequest } from "apis/questApi";

const ModalHabitNew = ({ onExit, visible, refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstHabit, setFirstHabit] = useState("");
  const [secondHabit, setSecondHabit] = useState("");
  const [thirdHabit, setThirdHabit] = useState("");

  if (!visible) return null;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFirstHabit = (e) => {
    setFirstHabit(e.target.value);
  };
  const handleSecondHabit = (e) => {
    setSecondHabit(e.target.value);
  };
  const handleThirdHabit = (e) => {
    setThirdHabit(e.target.value);
  };

  const postCreateQuest = async () => {
    const result = await questRequest(title, description, [
      { title: firstHabit },
      { title: secondHabit },
      { title: thirdHabit },
    ]);
    onExit();
    refresh();
  };

  const onClickCreate = () => {
    if (
      title.length === 0 ||
      description.length === 0 ||
      firstHabit.length === 0 ||
      secondHabit.length === 0 ||
      thirdHabit.length === 0
    ) {
      return alert("정보를 모두 입력해주세요");
    }
    postCreateQuest();
  };

  return (
    <ModalContainer>
      <Container>
        <CrossWrapper onClick={onExit && onExit}>
          <IcCross />
        </CrossWrapper>
        <HabitInfoContainer>
          <HabitContainer>
            <InputM title="타이틀" value={title} onChange={handleTitle} />
            <InputM
              title="상세설명"
              value={description}
              onChange={handleDescription}
            />
            <Space h={24} />
            <InputM
              title="1단계 습관 설명"
              value={firstHabit}
              onChange={handleFirstHabit}
            />
            <InputM
              title="2단계 습관 설명"
              value={secondHabit}
              onChange={handleSecondHabit}
            />
            <InputM
              title="3단계 습관 설명"
              value={thirdHabit}
              onChange={handleThirdHabit}
            />
          </HabitContainer>
        </HabitInfoContainer>
        <ButtonWrapper>
          <ButtonM bold onClick={onClickCreate} text="생성하기" />
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
  /* background: #22c55e; */
  /* box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1); */
  /* border-radius: 6px; */
  /* padding: 20px 32px; */
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
