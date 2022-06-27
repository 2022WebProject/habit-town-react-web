import colors from "helpers/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "images/svgs/IcCheckboxWhite.svg";
import { ReactComponent as CheckboxNone } from "images/svgs/IcCheckboxWhiteNone.svg";

import ListUserProfile from "components/lists/ListUserProfile";
import { ReactComponent as IcCross } from "images/svgs/IcCross.svg";
import moment from "moment";
import { Col, Row } from "antd";
import { requestGetQuestInfo, requestPostMemoEdit } from "apis/questApi";
import { useRecoilState } from "recoil";
import { userAtom } from "store/atom/userAtom";
import InputM from "components/inputs/InputM";

const tempList = [
  { title: "1단계 습관" },
  { title: "2단계 습관" },
  { title: "3단계 습관" },
];

const ModalHabitMore = ({ lists = tempList, onExit, visible, quest }) => {
  const [questInfo, setQuestInfo] = useState({});
  const [user] = useRecoilState(userAtom);

  const [isEdit, setIsEdit] = useState(false);

  const [memoText, setMemoText] = useState("");
  const [memo, setMemo] = useState("");

  const getQuestInfo = async () => {
    const result = await requestGetQuestInfo(quest._id);
    console.log(result);
    setQuestInfo(result.data);
  };

  const onClickEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      onClickEditComplete();
      setMemo(memoText);
      setMemoText("");
    } else {
      setIsEdit(true);
      setMemoText(memo || quest.memo);
    }
  };

  const onClickEditComplete = async () => {
    const result = await requestPostMemoEdit(quest._id, memoText);
    console.log(result);
  };

  useEffect(() => {
    getQuestInfo();
    console.log("quest", quest);
  }, [quest]);

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
                  {index + 2 <= quest.status ? <Checkbox /> : <CheckboxNone />}
                  <HabitText isBold={index + 1 == quest.status}>
                    {list.title}
                  </HabitText>
                </LineWrapper>
              );
            })}
          </HabitContainer>
          <DayContainer>
            <DDAYText>
              D+{moment().diff(moment(quest.accepted_time), "days")}
            </DDAYText>
            <StartDayText>
              {moment(quest.accepted_time).format("YYYY년 MM월 DD일")} ~
            </StartDayText>
          </DayContainer>
        </HabitInfoContainer>
        <MyProfileContainer>
          <ListUserProfile
            name={user.nickname}
            accepted_time={quest.accepted_time}
            modal
          />
          {isEdit ? (
            <InputM
              style={{ width: 200 }}
              value={memoText}
              onChange={(e) => setMemoText(e.target.value)}
            />
          ) : (
            <SubText>{memo || quest?.memo || "메모가 없어요"}</SubText>
          )}
          <EditText onClick={onClickEdit}>{isEdit ? "완료" : "수정"}</EditText>
        </MyProfileContainer>
        <Line />
        <Row>
          {questInfo?.accepted_users?.map((item) => {
            return (
              <Col span={12}>
                <OtherProfileWrapper>
                  <ListUserProfile
                    name={item?.user.nickname}
                    accepted_time={item.accepted_time}
                    modal
                  />
                  <SubTextOther>{item.memo || "메모가 없어요"}</SubTextOther>
                </OtherProfileWrapper>
              </Col>
            );
          })}
        </Row>
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
  min-width: 600px;
  max-width: 640px;
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
  font-weight: ${({ isBold }) => (isBold ? "800" : "400")};
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

const EditText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.primary};
  cursor: pointer;
`;
