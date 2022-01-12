// 변수의 유효범위(variable scope)

// 1. 지역변수(local variable)
function localNum() {
  var num = 10;
  document.write(typeof num + "<br>");
}
localNum();
document.write("함수의 호출이 끝난 뒤" + typeof num + "<br>");
// 선언되지 않은 변수를 사용하려고 접근하면 오류를 발생

// 2. 전역변수(global variable)
var num = 10;
function globalNum() {
  document.write(num + "<br>");
  num = 20;
}
globalNum();
document.write("함수의 호출이 끝난 뒤" + num + "<br>");

// 어느 영역에서나 접근가능,
// 웹 페이지가 닫혀야만 메모리에서 사라질 것.

var num = 10;
function globalNum() {
  var num = 20;
  document.write(num + "<br>"); // 20
  document.write(window.num + "<br>"); // 10
}
globalNum();
