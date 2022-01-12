// 함수의 유효 범위(function scope)

// 블록 내 정의된 변수를 블록 외부에서는 접근할 수 없음.
// [ 블록(block) ]이란 코드 내 중괄로({})로 둘러싸은 부분
function One() {}

// JS은 다른 언어와는 달리 함수를 블록 대신 사용..
// 정의된 범위 안에서 정의된 모든 변수 및 함수에 접근할 수 있음.
function Two(x, y) {
  return x + y;
}

// 다른 함수 내에 정의된 '내부 함수'는 그 함수의 ...
// 부모함수(parent function)
// __ 정의된 모든 변수 및 부모 함수 접근

var x = 10,
  y = 20;
function sub() {
  return x - y;
}
document.write(sub() + "<br>");

function parentFunc() {
  var x = 1,
    y = 2;
  function add() {
    return x + y;
  }
  return add();
}
document.write(parentFunc);

// 함수 호이스팅(hoisting)
// 함수 안에서 선언된 모든 변수는 함수 전체를 걸쳐 유효하다.
// 유효하다? -> 사용할 수 있거나 효과가 있다.
var globalNum = 10;
function printNum() {
  document.write(globalNum + "<br>"); // undefuned
  var globalNum = 20;
  document.write(globalNum + "<br>"); // 20
}
printNum();

// 함수 호이스팅에 의해 다음과 같이 코드가 변경되어 처리된다.
var globalNum = 10;
function printNum() {
  var globalNum;
  document.write(globalNum + "<br>"); // undefuned
  var globalNum = 20;
  document.write(globalNum + "<br>"); // 20
}
printNum();
// 호이스팅 후의 코드
// 아직 초기화만 안된 상태를 undefined값을 반환하게 된다.

// 자바스크립트에서는 함수 호이스팅으로 수행되지만,
// 블록의 첫 부분에 변수를 선언하는 것이 좋습니다.
