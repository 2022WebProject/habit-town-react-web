import React from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>검색페이지</h1>
      <p>검색페이지 페이지입니다.</p>
    </div>
  );
};

export default SearchPage;
