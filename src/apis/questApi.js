import { getRequest, postRequest } from "./common";

// 퀘스트 생성
export const questRequest = async (
  title,
  description,
  sub_quests,
  exceptionControl
) => {
  try {
    const result = await postRequest("/quest", {
      title,
      description,
      sub_quests,
    });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

// 퀘스트 목록 불러오기(검색)

// // 퀘스트 정보 불러오기
// GET /quest/:id

// ## 퀘스트 수락하기

// ### POST /quest
