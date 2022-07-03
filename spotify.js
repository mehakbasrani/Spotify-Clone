let songIndex = 0;
range = document.getElementById("range");
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audio = new Audio("songs/song1.mp3")

let songs = [
    {songName: "Jhoom-Ali Zafar", filePath: "songs/song1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Filhaal 2 Mohabbat", filePath: "songs/song2.mp3", coverPath: "covers/cover2.jpeg"},
    {songName: "Kasoor - Prateek Kuhad", filePath: "songs/song3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Chaand Baaliyan - Aditya A", filePath: "songs/song4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Tu Aake Dekhle-King", filePath: "songs/song5.mp3", coverPath: "covers/cover5.jpeg"},
    {songName: "Pasoori", filePath: "songs/song6.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Soch-Hardy Sandhu", filePath: "songs/song7.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Kehndi Hundi Si", filePath: "songs/song8.mp3", coverPath: "covers/cover8.jpeg"},
    {songName: "Perfect-Ed-Sheeran", filePath: "songs/song9.mp3", coverPath: "covers/cover9.jpeg"},
    {songName: "Make You Mine-Public", filePath: "songs/song.mp3", coverPath: "covers/cover10.jpg"},
]

/*songItems.forEach((element, i)=>{ 
   
    //element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})*/

//to handle play/pause
masterPlay.addEventListener("click",()=>{
    
  if(audio.paused || audio.currentTime<=0){
             audio.play();
             masterPlay.classList.add("fa-pause-circle");
             masterPlay.classList.remove("fa-play-circle");
             gif.style.visibility = "visible";
    }
    else{
            audio.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            gif.style.visibility = "hidden";
        }  
});
//for progessBar
audio.addEventListener("timeupdate" ,()=>{
    progress = parseInt((audio.currentTime/audio.duration)* 100);
    range.value = progress; 
})   
//t0 change progessBar according to ourself using pointer
range.addEventListener("change",()=>{
    audio.currentTime = range.value * audio.duration/100;
})
  
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

//play songs with play button in front of them
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        //console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //audio.currentTime = 0; 
        audio.src = `songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audio.play();
        gif.style.visibility = "visible";
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
         })
})

next.addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audio.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    makeAllPlays();
    audio.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


previous.addEventListener("click" , ()=>{
    if(songIndex<=0)
       songIndex=9
    else
       songIndex-=1;
    audio.src = `songs/song${songIndex+1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    makeAllPlays();
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.visibility = "visible";
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

 