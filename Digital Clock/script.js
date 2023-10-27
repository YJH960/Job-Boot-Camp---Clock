let batteryPercentage = 100; // 배터리 초기 잔량을 100%로 설정
const battery = document.getElementById("battery"); // 배터리 상태를 나타내는 요소
const batteryPercentageDisplay = document.getElementById("batteryPercentage"); // 배터리 잔량 숫자를 표시하는 요소
const clock = document.getElementById("clock"); // 디지털 시계를 나타내는 요소
const alarmsList = document.getElementById("alarms"); // 알람 목록을 나타내는 요소
const alarmForm = document.getElementById("alarmForm"); // 알람을 추가하는 폼

// 배터리 상태를 1초에 1% 감소시키는 함수
function decreaseBattery() {
    if (batteryPercentage > 0) {
        batteryPercentage -= 1;
        battery.style.width = batteryPercentage + "%"; // 배터리 그래픽 업데이트
        batteryPercentageDisplay.textContent = `${batteryPercentage}%`; // 배터리 숫자 업데이트
        if (batteryPercentage === 0) {
            clock.style.backgroundColor = "black"; // 배터리가 0%이면 시계 배경색을 검정색으로 변경
        }
    }
}

// 1초마다 배터리 상태 감소 함수 호출
setInterval(decreaseBattery, 1000);

// 디지털 시계 업데이트 함수
function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    clock.textContent = `${year}-${month}-${day} ${hour}:${minute}:${second}`; // 시계 업데이트
}

// 1초마다 디지털 시계 업데이트 함수 호출
setInterval(updateClock, 1000);

// 알람을 추가하는 함수
function addAlarm() {
    const hour = document.getElementById("hour").value;
    const minute = document.getElementById("minute").value;
    const second = document.getElementById("second").value;

    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        alert("올바른 시간을 입력하세요.");
        return;
    }

    if (alarmsList.children.length >= 3) {
        alert("최대 3개의 알람만 저장할 수 있습니다.");
        return;
    }

    const alarmItem = document.createElement("li"); // 새로운 알람 항목 생성
    alarmItem.textContent = `알람: ${hour}:${minute}:${second}`;

    // 삭제 버튼 추가
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", function() {
        alarmsList.removeChild(alarmItem); // 삭제 버튼을 클릭하면 해당 알람 항목을 삭제
    });

    alarmItem.appendChild(deleteButton); // 삭제 버튼을 알람 항목에 추가
    alarmsList.appendChild(alarmItem); // 알람 목록에 알람 항목 추가
}
