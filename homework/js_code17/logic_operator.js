// logic_operator

if(true && true){
    alert(1);}
// 1
if(true && false){
    alert(2);}
// 1개이상 false 라서
if(false && true){
    alert(3);}
// 1개이상 false 라서
if(false && false){
    alert(4);}
// flase로 충족이 되서


if(true || true){
    alert(1);}
// 1
if(true || false){
    alert(2);}
// 2
if(false || true){
    alert(3);}
// 3
if(false || false){
    alert(4);}
// 1개이상 true가 없어서


/*
[ 연산의 순서 ]
if 구문이 참이 된다 .   1
prompt가 참이 된다.     2
참나올 때까지 순화 돈다. 3
*/

// not oprator
if(!true && !true){
    alert(1);}
// no 출력
if(!false && !true){
    alert(2);}
// no 출력
if(!true && !false){
    alert(3);}
// no 출력
if(!false && !false){
    alert(4);}
// 4


// boolean 대체체
if(0){
    alert(1)}
// no 출력
if(1){
    alert(2)}
// 2
// 조건 값이 1이상이면 true


// flase로 간주되는 Datetype
if(!''){
    alert("빈 문자열");}
// 빈 문자열
if(!undegined){
    alert("undefined");}
// undefined

var a;
if(!a){
    alert("값이 할당되지 않는 변수");}
// 값이 할당되지 않는 변수
if(!null){
    alert("null");}
// null
if(!NaN){
    alert("NaN");}
// NaN