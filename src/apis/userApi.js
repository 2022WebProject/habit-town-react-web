import { getRequest, postRequest } from "./common";

export const loginRequest = async (email, password, exceptionControl) => {
  try {
    const result = await postRequest("/user/login", { email, password });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

export const requestSignup = async (
  nickname,
  email,
  password,
  exceptionControl
) => {
  try {
    const result = await postRequest("/user/signup", {
      email,
      password,
      nickname,
    });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

export const requestUesrInfo = async (exceptionControl) => {
  try {
    const result = await getRequest("/user");
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

// 임시로 questAPI를 여기다가 적습니다..
export const requestQuestAccept = async (quest_id, exceptionControl) => {
  try {
    const result = await postRequest(`/quest/accept/`, { quest_id });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};
