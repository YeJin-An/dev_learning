// 함수(function)란?
// 특별한 목적의 작업수행을 위해 독립적인 블록을 의미
// 호출을 통해 해당 작업을 반복해서 수행할 수 있음.

function addNum(x, y) {
  return x + y;
}
document.write(addNum(2, 3));
// 자바스크립트에서의 블록이란?
// 함수나 실행문의 중괄호 ({})로 묶여진 부분을 가리킨다.

// 함수의 호출
var sum = addNum(3, 5);
// 호출된 함수의 내부에서
// 매개변수 x와 y에 각각 대입되어 계산된다.

// 값으로서의 함수
// JS함수는 구문 혹은 값(value)이기도 한다.

function sqr(x) {
  return x * x;
}
var sqrNum = sqr;
document.write(sqr(4) + "<br>"); //함수 sqr을 호출
document.write(sqrNum(4)); // 변수 sqrNum를 함수처럼 호출
