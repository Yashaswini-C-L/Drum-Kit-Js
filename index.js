const sounds = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const audio = new Audio(sounds[i]);
    audio.play();
    document.querySelectorAll(".drum")[i].style.color = "black";
    setTimeout(() => {
      document.querySelectorAll(".drum")[i].style.color = "#7a3e48";
    }, 1000);
    buttonAnimation(i);
  });
}

const keys = ["w", "a", "s", "d", "j", "k", "l"];

document.addEventListener("keydown", function (e) {
  const keyIndex = keys.indexOf(e.key);
  if (keyIndex != -1) {
    const audio = new Audio(sounds[keyIndex]);
    audio.play();
  }
  buttonAnimation(keyIndex);
});

function buttonAnimation(i) {
  document.querySelectorAll(".drum")[i].classList.add("pressed");
  setTimeout(() => {
    document.querySelectorAll(".drum")[i].classList.remove("pressed");
  }, 1000);
}
