const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});

let audio = document.querySelector(".music-file");
audio.volume = 0.5;
