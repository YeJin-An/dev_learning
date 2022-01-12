// 배열(array) -> 인덱스로 참조되는 정렬된 값의 집합

// 1. 배열끼지 타입이 다를 수 있음.
// 2. 인덱시가 연속적이지 않아도 되고,
//    요소가 비어 있을 수 있음.
// 3. 자바스크립트에서 배열은 Array 객체로 다뤄짐.

// 배열의 생성
var arr = [];
var arr = Array();
var att = new Array();
// 베열 리터럴은 쉼표를 통해 나열하는 방법으로 생성

// 배열의 참조
var element = arr[0];

// 배열 요소의 추가
arr.push();
arr[arr.length] = "...";
arr[0] = "...";

// 배열의 순회(iteration)
// 요소를 차레대로 접근하고자 할 때,
// for 문과 같은 반복문을 사용하여 접근 할 수 있음.

// Array 객체
var arr = new Array(10, "문자열", false);
arr[0];
arr[1];
arr[2];
