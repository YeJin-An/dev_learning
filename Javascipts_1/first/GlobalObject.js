// 전역객체(Global Object)
// 전역범위(global scope)에서
// this연산자를 통해 접근가능

// JS에서 모든 객체는 전역 객체의 프로퍼티가 됨.
// 웹 브라우저가 load하면,
// JS는 새로운 전역 개체를 만들고
//              해당 프로퍼티를 초기화

// 래퍼 객체(wrapper object)
var str = "문자열";
var strObj = new String(str);
var len = str.length;

str == strObj;
str === strObj;

typeof str;
typeof strObj;

// 표준 객체(Standard Object)

// 1. Number 객체
// 2. Math 객체
// 3. Date 객체
// 4. String 객체
// 5. Array 객체
// 앞으로 이것을 알아볼 것이다.
