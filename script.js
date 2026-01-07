const scene = document.getElementById("scene");
const audioDay = document.getElementById("audio-day");
const audioNight = document.getElementById("audio-night");

function stopAllAudio() {
  audioDay.pause();
  audioDay.currentTime = 0;
  audioNight.pause();
  audioNight.currentTime = 0;
}

function switchScene(type) {
  stopAllAudio();

  if (type === "day") {
    scene.style.backgroundImage = "url(day.jpg)";
    audioDay.play().catch(err => {
      console.log("Day audio blocked", err);
    });
  }

  if (type === "night") {
    scene.style.backgroundImage = "url(night.jpg)";
    audioNight.play().catch(err => {
      console.log("Night audio blocked", err);
    });
  }
}
