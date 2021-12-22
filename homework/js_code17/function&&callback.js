
// javascript에서는 함수도 객체


// a라는 함수 안에 변수 a가 들어가 있음.
// 객체의 속성 값으로 담겨진 함수는 method[메소드]

// 함수의 용도 1 __ 함수는 값이므로 인자로 전달가능
function a(){}
a = {b:function(){}}

function cal(func, num){
    return func(num)}
function increase(num){
    return num+1}
function decrease(num){
    return num-1}
alert(cal(increase,1));
alert(cal(decrease,1));

// 함수의 용도 2 __ 함수의 리턴 값
function cal(mode){
    var funcs = {
        'plus': function(left, right){return left + right},
        'minus': function(left,right){return left - right}}
return funcs[mode];}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

// 함수의 용도 2 __ 배열의 값
var process = [
    function(input) {return input + 10;},
    function(input) {return input * input},
    function(input) {return input / 2;} ];
var input = 1;
for(var i =0; i< process.length; i++){
    input = process[i](input);}
alert(input);
// 11,1,0  23

// 데이터는 퍼스트클래스 , 엔티티 버스 , 클래스 벨류, 
// 오브젝트

// -----------------------------------------------------

// callback

// 값으로 사용될 수 있는 특성을 이용하면,
// 함수의 인자로 함수로 전달할 수 있음.

function sortNumber(a,b){
    return b - a;}
var numbers = [20,10,9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber));
// 내장객체 or method(메소드)
// 사용자 정의 함수
// 10,9,8,7,6,5,4,3,2,1

// callback__비동기처리[유용]__사용
// js
{"title":"JavaScript","author":"egoing"}
// html
$.get('./datasource.json.js', function(result){
    console.log(result);
}, 'json');