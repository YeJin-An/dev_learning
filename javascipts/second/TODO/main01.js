// TODO: #1 like 오름차순으로 정렬

const { melon_data: song_array } = require("./melon_data");

song_array.sort ( (a,b) => a.like - b.like, );
    // {}은 함수의 끝을 알리는 것이므로 사용하지 말자! 

for (const song of song_array){

    console.log("["+ song.like + "]", song.title);
    }

/*
 for (const {like. title} of aong_array){
     console.log(like,title);
 }   
*/