import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <div onClick={goLoginPage}>로그인페이지로</div>
    </div>
  );
};

export default Home;
