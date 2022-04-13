import logo from "./logo.svg";
import "./App.css";

import { Route, Router, Routes } from "react-router-dom";
import Home from "screens/home/homePage";
import LoginPage from "screens/login/LoginPage";
import SignupPage from "screens/login/SignupPage";
import MypagePage from "screens/mypage/MypagePage";
import SearchPage from "screens/home/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login/*" element={<LoginPage />} />
      <Route path="/signup/*" element={<SignupPage />} />
      <Route path="/mypage/*" element={<MypagePage />} />
      <Route path="/search/*" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
