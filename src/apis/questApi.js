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

export const requestQuestAccept = async (quest_id, exceptionControl) => {
  try {
    const result = await postRequest(`/quest/accept/`, { quest_id });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

export const requestAllQuests = async (exceptionControl) => {
  try {
    const result = await getRequest(`/quest`);
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

export const requestClearQuest = async (quest_id, exceptionControl) => {
  try {
    const result = await postRequest(`/quest/clear`, { quest_id });
    return result;
  } catch (e) {
    if (exceptionControl) exceptionControl(e);
    throw e;
  }
};

export const requestClearedQuests = async (exceptionControl) => {
  try {
    const result = await getRequest(`/quest/cleared`);
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
