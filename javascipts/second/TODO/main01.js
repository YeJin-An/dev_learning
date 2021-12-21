// TODO: #1 like 오름차순으로 정렬

const { melon_data: song_array } = require("./melon_data");

song_array.sort(function(a,b){
    return a.like - b.like; }); 

for (const song of song_array){

    console.log("["+ song.like + "]", song.title);
    }

// const numbers = [15,52,23,11,9];

// numbers.sort((a,b) => a-b);
// console.log(numbers);