import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>회원가입</h1>
      <p>회원가입 페이지입니다.</p>
    </div>
  );
};

export default SignupPage;
