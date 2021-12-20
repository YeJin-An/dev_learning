// // Traditional Function

// function base_10(fn){
//     function wrap(x,y){
//         return fn(x,y) +10;
//     }
//     return wrap;
// }

function base_10(fn){
    const wrap = (x,y) => {
        return fn(x,y) +10;
    };
    return wrap;
}

function base_10(fn){
    const wrap = (x,y) => fn(x,y) +10;
    return wrap;
}

const base_10 = (fn) => {
    return (x,y) => fn(x,y) +10;
}

const base_10 = (fn) => (x,y) => fn(x,y) + 10;


// function mysum(x,y){
//     return x + y;
// }

// mysum = base_10(base_10(mysum));
// console.log(mysum(1,2));

// // arrow function 버전으로 바꿔보세요.
(fn) => {
    let wrap = (x,y) => fn(x,y) + 10;
    return wrap
}

let mysum = (x,y) => x+y;

mysum = (fn);
console.log(mysun(1,2))l





