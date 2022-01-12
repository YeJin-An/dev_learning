// 매개변수(parameter)

// 함수를 호출할 때, 인수(argument)
// 전달된 값에 대해 어떠한 타입 검사도 하지 않습니다.

function addNum(x, y, z) {
  return x + y + z;
}
addNum(1, 2, 3);
addNum(1, 2); //여기 부터 NaN

// 함수의 정의에서 전달받은 인수를
// 함수 내부로 전달하기 위해 사용하는 변수
// 인수(argument)란 호출시 함수로 값을 전달해주는 값

function addNum(x, y, z) {
  if (x === undefined) x = 0;
  if (y === undefined) y = 0;
  if (z === undefined) z = 0;
  return x + y + z;
}
addNum(1, 2, 3); //6
addNum(1, 2); //3
addNum(1); //1
addNum(); //0

// arguments 객체
// 함수로 전달된 인수의 총 개수를 확인하거나,
// 각각의 인수에도 바로 접근 할 수 있음.

// 함수가 호출될 때, 전달된 인수를 [배열의 형태]로 저장
// 인수의 통 개수는 arguments [객체의 length 프로퍼티]에 저장

// 주의점
// 배열과 비슷할 뿐, 실제로 Array객체는 아닙니다.
// 숫자로 된 인덱스와 length 프로퍼티만을 가지고 있을 뿐,
// 배열처럼 다룰 수는 없습니다.

// 디폴트 매개변수 (default parameter)
// 익스플로러, 사파리, 오페라에서 지원하지 않습니다.
function mul(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
mul(3, 4);
mul(3);

function mul(a, b = 1) {
  return a * b;
}
mul(3, 4);
mul(3);

// 나머지 매개변수 (rest parameter)
// 생략 접두사를 사용하여 특정 위치의 인수부터
//                        마지막 인수까지 한번에 지정 가능
// 익스플로러, 사파리에서 지원하지 않습니다.
function sub() {
  var firstNum = arguments[0];
  for (var i = 0; i < arguments.length - 1; i++) {
    firstNum -= arguments[i + 1];
  }
  return firstNum;
}
sub(10, 2, 3);
sub(10, 1, 5, 8);
