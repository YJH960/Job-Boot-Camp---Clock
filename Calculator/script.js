let result = ""; // 계산 결과를 저장할 변수
let history = []; // 계산 기록을 저장할 배열

function appendToResult(value) {
    result += value; // 클릭한 버튼 값을 결과에 추가
    document.getElementById("result-box").value = result; // 결과 창에 결과 업데이트
}

function calculateResult() {
    try {
        const expression = result; // 사용자가 입력한 표현식
        const answer = eval(expression); // 표현식을 계산
        history.push(`${expression} = ${answer}`); // 계산 기록에 추가
        result = answer; // 결과 업데이트
        document.getElementById("result-box").value = result; // 결과 창 업데이트
        displayHistory(); // 계산 기록 업데이트
    } catch (error) {
        result = "Error"; // 계산 오류가 발생한 경우 "Error"로 표시
        document.getElementById("result-box").value = result;
    }
}

function clearResult() {
    result = ""; // 결과 초기화
    document.getElementById("result-box").value = ""; // 결과 창 초기화
}

function displayHistory() {
    const historyList = document.getElementById("history-list"); // 계산 기록 목록 요소 가져오기
    historyList.innerHTML = ""; // 목록 비우기
    for (const item of history) {
        const listItem = document.createElement("li"); // 목록 아이템 생성
        listItem.textContent = item; // 목록 아이템에 계산 기록 추가
        historyList.appendChild(listItem); // 목록에 아이템 추가
    }
}
