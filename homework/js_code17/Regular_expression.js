// Regular_expression

/* 문자열에서 특정한 문자를 찾아내는 도구
정규표현식은 하나의 언어라고 할 수 있음.
이 도구를 사용하면 한줄로 끝낼 수 있음. 

1단계 -> 컴파일(compile)
2단계 -> 실행(execution) */


// create reqular_expression_Complile

// create_objects __ 각자 장단점이 있음.
var pattern = /a/ // 리터럴
var pattern = new RegExp('a'); // 객체 생성자

// regular_expression 메소드 실행
// __ 원하는 문자 찾기 [exec, test]
console.log(pattern.exec('abcdef'));
console.log(pattern.exec('bcdefg'));

console.log(pattern.test('abcdef'));
console.log(pattern.test('bcdefg'))





