import axios from "axios";
import { getRecoil } from "recoil-nexus";
import { userAtom } from "store/atom/userAtom";
// import { getRecoil, setRecoil } from "recoil-nexus";
// import { UserIdAtom } from "store/atom/auth";
import { ROOT_URL } from "./url";

export const wrapRequest = (func) => {
  return async (...args) => {
    const res = await func(...args);
    if (res && res.data && res.code && res.code !== 0) {
      throw res;
    } else {
      // 성공하면 data를 return
      return res.data;
    }
  };
};

export const instance = () => {
  const instance = axios.create({
    baseURL: ROOT_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      // "Access-Control-Allow-Headers": "*",
    },
  });
  instance.interceptors.request.use(
    function (config) {
      // 요청 바로 직전
      const token = getRecoil(userAtom);
      // console.log(token);
      if (token?.token)
        config.headers["Authorization"] = "Bearer " + token.token;

      return config;
    },
    function (error) {
      // 요청 에러 처리를 작성합니다.
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      /*
          http status가 200인 경우
          응답 바로 직전에 대해 작성합니다.
          .then() 으로 이어집니다.
        */
      return response;
    },

    function (error) {
      /*
          http status가 200이 아닌 경우
          응답 에러 처리를 작성합니다.
          .catch() 으로 이어집니다.
      */
      // if (error?.response?.status == 401) {
      // }
      return Promise.reject(error);
    }
  );
  return instance;
};
