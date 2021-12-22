// TOOD: #2 방탄소년단의 곡명만 출력

const { melon_data: song_array } = require("./melon_data");

const bts_array = song_array
.filter(({artist}) => artist === "방탄소년단"); //True False 

for (const song of bts_array){

    console.log(song.like, song.artist , song.title);
    }