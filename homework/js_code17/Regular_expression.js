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
// __ 원하는 문자 찾기 [ exec, test ]
console.log(pattern.exec('abcdef')); //["a"]
console.log(pattern.exec('bcdefg')); // null

console.log(pattern.test('abcdef')); // true
console.log(pattern.test('bcdefg')); // false


// 문자열 메소드 실행 [ match, replace ]
console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null

console.log('abcdef'.replace(pattern,"A")); //Abcdef


// option [i, g]
var xi = /a/;
console.log("Abcde".match(xi)); //null
var oi = /a/i;
console.log("Abcde"/match(oi)); //["A"];
// 대소문자를 구분하지 않는다.

var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea"/match(og));
// 검색된 모든 결과를 리턴 


// 활용 사례__ 치환
// [ 아래 코드는 본문 중의 URL을 링크 html태그로 교체 ]
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '여기는 ... 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);




