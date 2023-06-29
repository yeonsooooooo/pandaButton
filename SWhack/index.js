// 버튼 클릭 이벤트 핸들러
function handleClick() {    
    // AJAX 요청 생성
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost:8081/student", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    // 요청 완료 시 콜백 함수
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("데이터 전송 성공");
      } else {
        console.error("데이터 전송 실패");
      }
    };
    
    // 데이터 전송
    xhr.send(JSON.stringify({
      currentTime: currentTime
    }));
  }
  
  // 버튼 클릭 이벤트 리스너 등록
  let button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);
  