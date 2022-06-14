import { getRequest, postRequest } from "./common";

// 퀘스트 생성
export const questRequest = async(
    [{firstHabit}, {secondHabit}, {thirdHabit}], exceptionControl) => {
    try {
        const result = await postRequest("/quest", [{firstHabit}, {secondHabit}, {thirdHabit}]);
        return result;
    } catch (e) {
        if (exceptionControl) exceptionControl(e);
        throw e;
    }
};

// 퀘스트 목록 불러오기(검색)
export const getRequest = async()

// // 퀘스트 정보 불러오기
// GET /quest/:id

// ## 퀘스트 수락하기

// ### POST /quest
