/*
reduce  패턴으로 더하기 해보자!!

[ 1 , 2 , 3 , 4 , 5 ]
acc = 0
0+1 , 1+2 , 3+3 , 6+4 , 10+5

const numbers = [1,2,3,4,5];

const result_sum = 
numbers.reduce(acc, number) =>
{ add += number;
  return acc;  }

// acc 는 누적

=========================

const numbers = [1,2,3,4,5];
 },
const new_numbers = 
number.map(number => number * number);
console.log(new_numbers)

numbers.reduce((acc,number) =>{
acc.push(number * number);
return acc; , [ ]);

-----------------------------------------------

오브젝트 = objects

const new_numbers_object = 
numbers.reduce((acc,number) => {
    acc[number] = number * number;
    return acc;
}, {});
concole.log(new_numbers_object);
*/

const bts_title_array = new_song_array
.filter(({srtist}) => artist === "방탄소년단")
.map(({title})=> title);