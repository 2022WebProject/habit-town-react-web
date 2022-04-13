import React from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const goSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>로그인</h1>
      <p>로그인페이지입니다.</p>
      <div onClick={goSignupPage}>회원가입으로</div>
    </div>
  );
};

export default LoginPage;
