let play = document.getElementById("play");
let audioElement = new Audio("song1.mp3");
let songs = [
  { songName: "babies", filePath: "song1.mp3", coverPath: "58856987_605.jpg" },
];

play.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    play.classList.remove("fa-solid", "fa-play");
    play.classList.add("fa-solid", "fa-pause");
  } else {
    audioElement.pause();
    play.classList.remove("fa-solid", "fa-pause");
    play.classList.add("fa-solid", "fa-play");
  }
});