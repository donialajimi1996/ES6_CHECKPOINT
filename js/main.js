const song = document.getElementById("song");
const score = document.getElementById("score");
let colors = ["green", "skyblue", "red", "black", "white", "beige"];

const avance = () => {
  song.currentTime += 10;
};

const wakhir = () => {
  song.currentTime -= 10;
};

const reset = () => {
  score.innerHTML = 0;
  song.currentTime = 0;
};
const play = () => {
  document.body.style.backgroundColor = colors[score.innerHTML % colors.length];
  score.innerHTML++;
  song.play();
};
const pause = () => {
  song.pause();
};
setInterval(pause, 1000);
