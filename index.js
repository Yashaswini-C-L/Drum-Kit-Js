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
      document.querySelectorAll(".drum")[i].style.color = "red";
    }, 1000);
  });
}
