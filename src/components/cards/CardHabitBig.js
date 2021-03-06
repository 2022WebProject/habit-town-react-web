import ButtonM from "components/buttons/ButtonM";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PROGRESS_STATUS } from "helpers/status";
import { ReactComponent as Checkbox } from "images/svgs/Checkbox.svg";
import { ReactComponent as CheckboxNone } from "images/svgs/IcCheckboxNone.svg";
import { ReactComponent as IcMore } from "images/svgs/IcMore.svg";
import { Dropdown, Menu } from "antd";
import colors from "helpers/colors";

const tempList = [
  { title: "1단계 습관" },
  { title: "2단계 습관" },
  { title: "3단계 습관" },
];

const CardHabitBig = ({
  lists = tempList,
  onClick,
  onClickQuit,
  status = [],
  isCleared = false,
  questNum,
}) => {
  const menu = (
    <Menu
      items={[
        {
          label: <a>때려치우기</a>,
          key: "0",
          onClick: onClickQuit,
        },
        // {
        //   label: <a>공유하기</a>,
        //   key: "1",
        // },
        // {
        //   label: <a>남 구경하기</a>,
        //   key: "2",
        // },
      ]}
    />
  );

  return (
    <Container>
      <MoreWrapper>
        <Dropdown overlay={menu} placement="top" trigger={["click"]}>
          <IcMore />
        </Dropdown>
      </MoreWrapper>
      <LineContainer>
        {lists.map((list, index) => {
          return (
            <LineWrapper key={index}>
              {index + 2 <= questNum ? <Checkbox /> : <CheckboxNone />}
              <HabitText isBold={index + 1 == questNum}>{list.title}</HabitText>
            </LineWrapper>
          );
        })}
      </LineContainer>

      <CalendarWrapper>
        {status.map((item) => {
          return <ColorCard state={item} />;
        })}
      </CalendarWrapper>
      <ButtonWrapper>
        <ButtonM
          bold
          line={isCleared}
          onClick={!isCleared && onClick && onClick}
          text={isCleared ? "오늘은 완료!!" : "완료하기"}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default CardHabitBig;

const Container = styled.div`
  background: #f7f8f9;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);
  border-radius: 6px;
  padding: 40px 32px;
  padding-top: 12px;
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
const CalendarWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* max-width: 217px; */
  align-items: center;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HabitText = styled.div`
  font-weight: ${({ isBold }) => (isBold ? "800" : "600")};
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  color: ${({ isBold }) => (isBold ? colors.gray600 : colors.gray400)};
`;

const ColorCard = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ state }) => {
    switch (state) {
      case PROGRESS_STATUS.COMPLETED:
        return "#22c55e";
      case PROGRESS_STATUS.FAILED:
        return "#DC7D77";
      case PROGRESS_STATUS.NOT_STARTED:
        return "#C4C4C4";
      default:
        return "#C4C4C4";
    }
  }};
`;

const MoreWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
