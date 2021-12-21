// TODO: #3 좋아요수 top10을 출력

const { melon_data: song_array } = require("./melon_data");

song_array.sort(function(a,b){
    const lg = b.like - a.like;
    return lg; });

const top10 = song_array.slice(0,10);

    for(const song of song_array){
        console.log(top10);
    };

