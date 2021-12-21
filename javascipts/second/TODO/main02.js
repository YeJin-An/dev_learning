// TOOD: #2 방탄소년단의 곡명만 출력

const { melon_data: song_array } = require("./melon_data");

song_array.filter(function(self,title){
    for(song_array.title in '방탄소년단')
        return self.title
}); 

for (const song of song_array){

    console.log(song.like, song.artist , song.title);
    }