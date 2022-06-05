import { ButtonM, InputM } from "components";
import colors from "helpers/colors";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const SignupPage = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  return (
    <Body>
      <Container>
        <TitleText>함께해요!</TitleText>
        <InputM title="이름*" />
        <div style={{ height: 24 }} />
        <InputM title="이메일*" />
        <div style={{ height: 24 }} />
        <InputM title="비밀번호*" />
        <ButtonM style={{ width: "100%", marginTop: 24 }} text="로그인" />
        <TextMd>
          이미 계정이 있나요?{" "}
          <span
            onClick={goLoginPage}
            style={{ color: colors.primary, cursor: "pointer" }}
          >
            로그인하기
          </span>
        </TextMd>
      </Container>
    </Body>
  );
};

export default SignupPage;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 116px);
  width: 100%;
  background-color: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 32px 64px -12px rgba(85, 105, 135, 0.08);
  border-radius: 16px;
  padding: 56px 80px;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;

  text-align: center;

  color: ${colors.gray900};

  margin-bottom: 70px;
`;

const TextMd = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: ${colors.gray800};
  margin-top: 24px;
`;