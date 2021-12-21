// array

/* 연관된 데이터를 모아 통으로 
   관리하기 위해 사용하는 데이터 타입 */

// 변수는 하나의 데이터를 저장하기 위한 것
// 배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것
//       복수의 데이터를 효율적으로 관리,전달하기 
//       위한 목적의 데이터 타입

var name = 'egoing'
alert(name); // egoing

// create array
var member = ['egoing','k8805','sorialgi']
alert(member[0]); // egoing
alert(member[1]); // k8805
alert(member[2]); // sorialgi

// 배열이 없다면, 함수를 써야 하는데,
// 함수는 하나의 값만을 반환(return) 할 수 있음.

function get_member1(){
    return 'egoing';
}
document.write(get_member1());

function get_member2(){
    return 'k8805';
}
document.write(get_member2());
// return 값 한개만 가능

function get_members(){
    return ['egoing','k8805','sorialgi'];
}
var members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);
// return 값 여러개 가능.


// 배열 사용
function get_members(){
    return ['egoing','k8805','sorialgi'];
}
members = get_members();

for(i=0; i<members.length; i++){
    document.write(members[i].toUpperCase());
    // toUpperCase 는 대문자로 바꿔주는 역할
    document.write('<br />');
}

// 배열 제어 -> 데이터추가/수정/삭제 다양한 기능 가짐..

// 배열의 크기
var arr = [1,2,3,4,5];
alert(arr.length); // 5

// 배열의 조작_ 추가 [push, concat, unshift, splice]
var li = ['a','b','c','d','e'];
li.push('f');
alert(li); // abcdef

var li = ['a','b','c','d','e'];
li = li.concat(['f','g']);
alert(li); // abcdefg

var li = ['a','b','c','d','e'];
li.unshift('z');
alert(li); // zabcde

var li = ['a','b','c','d','e'];
li.splice(2,0,'B');
alert(li); // [처음]을 기준으로 [중간만큼] 지우고 [삽입]

// 배열의 조작_ 제거 [shift, pop, sort, reverse]
var li = ['a','b','c','d','e'];
li.shift();
alert(li); // bcde 앞

var li = ['a','b','c','d','e'];
li.pop();
alert(li); // abcd 뒤

// 배열의 조작_ 정렬
var li = ['c','e','a','b','d'];
li.sort();
alert(li); // abcde

var li = ['c','e','a','b','d'];
li.reverse();
alert(li); //edcba