// TODO: #4 좋아요수가 200,000 이상인 곡명만 출력하기

const { melon_data: song_array } = require("./melon_data");

song_array.filter(function(self,like){
    if(self.like > 200000 ){
        return self.like
    }
}); 

for (const song of song_array){

    console.log(song.like, song.artist , song.title);
    }