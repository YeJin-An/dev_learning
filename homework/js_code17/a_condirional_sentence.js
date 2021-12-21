// a_condirional_sentence

if(true){
    alert('result : true');}
// result : true"

if(false){
    alert("result : true");}
// no 출력

if(true){
    alert(1);
    alert(2);
    alert(3);
    alert(4);}
    alert(5);
// 1
// 2
// 3
// 4
// 5

if(false){
    alert(1);
    alert(2);
    alert(3);
    alert(4);}
    alert(5);
// 5


if(true){
    alert(1);
} else {
    alert(2);}
// 1

if(false){
    alert(1);
} else{
    alert(2);}
// 2


if(false){
    alert(1);
} else if(true){
    alert(2);
} else if(true){
    alert(3);
} else{
    alert(4);
}