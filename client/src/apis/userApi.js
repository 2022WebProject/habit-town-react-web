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

export const signupRequest = async (
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
