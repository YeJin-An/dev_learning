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

