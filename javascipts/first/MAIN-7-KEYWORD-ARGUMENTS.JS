
function mysum3(x,y,z){
    return x + y*10 + z*100;
}

// mysum3(1,2,3)

// js 에는 없는 문법
// mysum3(x=1 , y=2 , z=3)

// 파이썬의 keyword arguments와
// 비슷하게 사용하는 코드

const { x,y,z } = {x:1,y:2,z:3}

function mysum3({x,y,z}){
    return x + y*10 + z*100
}

mysum3( {x : 1 , y : 2, z : 3 });
// 클래스 컴포넌트 => 함수 컴포넌트

// --------------------

const people = [
    {name: "Tom",age:10, region:"Seoul"},
    {name:"Steve", age:20, region:"Pusan"},
]

for (const person of people){
    console.log(name, age);
}