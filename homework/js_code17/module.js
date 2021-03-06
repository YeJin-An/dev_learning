// module

/*
프로그램은 작고 단순한 것에서 크고 복잡한 것으로 진화
그 과정은 
1> 코드의 재활용성을 늪인다.
2> 유지보수를 쉽게 할 수 있는 다양한 기법들 사용
효과는 약 5가지.. 

모듈이란? 
 ==> 자바스크랩트가 구동되는 호스트 환경에 따라서
     서로 다른 모듈화 방법이 제공되고 있다.

호스트 환경이란?
   ===> 자바스크림트가 구동되는 환경을 의미

자바스크립트란?
   ==> 브라우저를 위한 언어로 시작, 근데, 이젠 아님.
   ==> node.js는 서버 측에서 실행되는 자바스크립트

라이브러리란?
   ==> 모듈과 비슷한 개념
   모듈이 작은 부품의 로직이면, 
   라이브러리는 로직을 재사용하기 위한 일련의 코드들의 집합을 의미
---------------------------------------------------------
node.js는 자바스크립트 문법을 따르지만,
       언어가 구동되는 환경은 서비측 환경이다.

여러분은 자바스크립트의 문법을 이용하여
PHP와 같은 서버 시스템을 제어(node.js)하거나
구글의 제품(Googld Apps Script)를 제어할 수 있음.
----------------------------------------------------------
<정리>
언어와 그 언어가 구동되는 환경에 대해 구분하고 사고 해야함
이를 위해 다양한 언어를 접해봐야 함.

*/


// 모듈의 사용
function welcome(){
    return 'Hello world';
}

/* JavaScript 와 HTMl은 완전히 다른 문법을 가진 언어다.
브라우저에게 무엇인지 JaveScript 이고, HTML 인지 구분해줘야함.

HTMl 태그와 script 태그는 모두 같다.
script 태그는 src 속성이 있어 파일을 다운로드해서 실행시킨다.
고로 main.html 안에 함수가 정의 되어 있지 않아도 실행할 수 있음. */

// -------------------------------------------------------------

/* Node.js에서의 모듈의 로드 [Node.js의 모듈화]
호스트 환경에 따라 모듈을 로드하는 방법이 달라짐.*/


// [로드될 대상]__Node.js

var PI = Math.PI;

exports.area = function(r){
    return PI * r * r; };

exports.circumference = function(r){
    return 2 * PI * r; };

// [로드의 주체]__Node.js

var circle = require('로드할 대상');
console.log('The area of a circle of radius 4 is'
                + circle.area(4));


// 라이브러리
// jQuery 홈페이지에서 파일을 다운로드 받는다. 
// http://jquery.com/
// jQuery 메뉴얼을 이용해서 사용법을 파악한다.
// http://api.jquery.com/
// 아래는 jQuery를 이용한 예제이다.

