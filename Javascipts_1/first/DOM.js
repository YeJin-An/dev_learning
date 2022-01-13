// 문서 객체 모델 (DOM) __ 인터페이스
// XML or HTML문서에 접근하기 위한 일종의 인터페이스
// 문서 내의 모든 요소를 정의하고 , 접근하느 방법을 제공

// DOM은 W3C의 표준객체 모델 계층 구조로 표현이 된다.
// JS는 추가,제거,요소변경,
//      속성변경, 스타일변경, 이벤트추가, 이벤트 반응

// W3C DOM 표준을 세 가지 모델로 구분
// 1. Core DOM : 모든 문서 타입을 위한 DOM모델
// 2. HTML DOM : HTML 문서를 위한 DOM 모델
// 3. XML DOM : XML 문서를 위한 DOM 모델

// HTML DOM -> 문서를 조작하고 접근하는 표준화된 방법
//            모든 HTML 요소는 HTML DOM을 통해 접근
// XML DOM -> 문서를 다루는 표준화된 방법을 정의
//            모든 XML 요소는 XML DOM을 통해 접근

// Document 객체 -> 웹 페이지 그 자체를 의미

// Document 메소드
// -> HTML요소와 관련돤 작업을 토와주는 메서드
// 1. 요소의 선택 2. 요소의 생성 3. 이벤트 핸들러 4. 객체의 선택

// Dom 요소의 선택
// 1. HTML 태그 이름(tag name)을 이용한 선택
document.getElementByTagName("...");
// 2. 아이디(id)를 이용한 선택
document.getElementById("...");
// 3. 클래스(class)를 이용한 선택
document.getElementsByClassName("...");
// 4. name 속성(attribute)을 이용한 선택
document.getElementsByName("...");
// 5. CSS 선택자(selector)를 이용한 선택
document.querySelectorAll("...");
// 6. HTML 객체 집합(object collection)을 이용한 선택
// title를 사용하여 HTML요소를 선택하고 출력하게 하는 것.
var title = document.title;
document.write(title);

// DOM 요소의 내용 변경 [ 스타일도 변경가능 ]
var str = document.getElementById("...")
str.innerHTML = "이문장으로 바뀌었습니다."

// 속성이름으로 바뀌는 경우
<h1>이름</h1>
<a id="link">파일경로</a>
<button onClick={changeLink}>button</button>

function changeLink(){
  var link = document.getElementById("link")
  link.href = "/.../";
  link.innerHTML = "자바스크립트로 가기"
}
// a 태크의 들어갈 주소의 속성을 바뀌도록 해주는 것.