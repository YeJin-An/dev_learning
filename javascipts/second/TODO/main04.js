// TODO: #4 좋아요수가 200,000 이상인 곡명만 출력하기

const { melon_data: song_array } = require("./melon_data");

song_array.filter(function(self,like){
    if(self.like > 200000 ){
        return self.like
    }
}); 

const filtered_song_array = song_array
.filter((song)=> song.like >= 200_000)

for (const song of filtered_song_array){
    console.log(`${index+1} [${like}] ${title} ${artist}`);
    }