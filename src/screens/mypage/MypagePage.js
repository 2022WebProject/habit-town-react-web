import React from "react";
import { useNavigate } from "react-router-dom";

const MypagePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>마이페이지</h1>
      <p>마이페이지 입니다.</p>
    </div>
  );
};

export default MypagePage;
