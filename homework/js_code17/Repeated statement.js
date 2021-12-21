/*
저장되지 않는 작업이 있다면, 정리 후 명령 실행
웹브라우저는 무한반복을 허용안해 스크립트 종료를 물어봄

document.write -> 자바스크립트로 웹페이지에 텍스트 출력
node.js 콘솔과 같은 환경에서 실습하면, console.log로 사용
*/

while(true){
    document.write("coding everybody <br />");}
while(false){
    document.write("coding everybody <br />");}

// while
var i =0;
while(i < 10){
    document.write("coding everybody <br />");
    i++} // coding everybody <br /> 10번

// for
for(var i =0; i <10; i++){
    document.write("coding everybody"+i+"<br />");
} // coding everybody i <br />

// break
for(var i=0; i<10; i++){
    if(i === 5){
        break;
    }
    document.write("coding everybody" + i+ "<br />");
 } // coding everybody 5개 <br />


// continue
for(var i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    document.write("coding everybody"+i+'<br />');
} // coding everybody 10개 <br />


// break && continue
for(var i=0; i<10; i++){
    for (var j=0; j<10; j++){
        document.write(String(i)+String(j)+'<br />');
    }
} // n -> 10개  ==> n * 10 = 100번 출력
  //    00 ~ 99 ==> 100개 출력