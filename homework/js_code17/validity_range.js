// validity_range 

// 변수의 수명을 의미 -> 결과는 global
var vscope = 'global';
function fscope(){
    alert(vscope);
}
fscope();

// 1
var vascope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안'+vscope); };
fscope();
alert('함수밖' + vscope);

// 2
var vscope = 'global';
function fscope(){
    vscope = 'local';
    alert('함수안'+vscope); };
fscope();
alert("함수밖" + vscope);

/* var이 없기 때문이다.
지역변수와 전역변수가 동시에 정의 되어 있으면,
지역변수가 우선순위이다.__ var 없는 상태 */

// -------------------------------------------------

/* 지역변수와 전역변수의 차이점
1> 전역변수는 바깥쪽  ,  지역변수는 함수 내부 선언

2> 변수가 사용될 수 있는 범위(통용 범위)가 다르다.
3> 변수의 파괴 시기가 다르다.
4> 변수가 생성되는 기억장소가 다르다.
5> 초기화 여부가 다르다.
*/

// 지역변수의 사용
function a () {
    var i = 0;}
for(var i =0; i < 5; i++){
    a();
    document.write(i);}
// 01234

// 전역변수의 사용
function a (){
    i = 0;}
for(i = 0; i<5; i++){
    a();
    document.write(i);}
// 본 예제는 무한반복을 발생

// ------------------------------------------------------

// 전역변수를 사용하고 싶지 않으면,
// 아래와 같이 익명함수를 호출함으로서 목적을 달성할 수 있음
MYAPP = {}
MYAPP.calculator = {
    'left':null,
    'right':null}
MYAPP.coordinate = {
    'left': null,
    'right':null}
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

// 유효범위의 대상__ 함수
// 유효범위의 대상__ 정적

// JS의 유효범위는 함수만을 기준으로함. 
// (ex> 반복문 같은 경우 나오면 사라짐.)
// 유효범위 는 변수의 수명

// 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다.
// 유효범위( static scoping ) OR 렉시컬( lexical scoping )

var i = 5;
function a() {
    var i = 10;
    b();}
function b() {
    document.write(i);}
a();
// 55


