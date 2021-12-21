/*
function 함수명 ( [인지 ... [,인자]] ){
    코드
    return 반환값}

함수가 없다면, 반복문을 n번 반복 해야한다.
1000반 반복, 로직의 줄이 100줄? 그 내용을 수정??
*/

// 함수의 정의와 호출
function numbering(){
    i = 0;
    while(i< 10){
        document.write(i);
        i += 1;
    }
}
numbering();
// 0123456789


// 입력과 출력
function get_menber1(){
    return 'egoing';}

function ger_menber2(){
    return "k8805";}

alert(get_menber1());
alert(get_member2());


// return -> 결과반환, 함수 중지 시키는 역할
function get_menber(){
    return 'egoing';
    return 'k8805';
    return 'sorialgi';}
alert(get_member());

// 인자 ( argument ) -> 함수로 유입되는 입력 값
/* 어떤 값을 인자로 전달하느냐에 따라 
   함수가 반환하는 [값]이나 메소드의 [동작방법]을 
   다르게 할 수 있음. */
function get_argument(arg){
    return arg;}
alert(get_argument(1));
alert(get_argument(2));
// 1 , 2


// 함수를 정의 하는 다른 방법
var numbering = function(){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}
numbering()

// 정의
// function ... (){}
// var ... = function(){}
