function changeScene(type) {
  const scene = document.getElementById("scene");

  const scenes = {
    day: "IMG_1333.jpeg",
    night: "IMG_1334.jpeg",
    rain: "IMG_1335.jpeg",
    library: "IMG_1336.jpeg"
  };

  scene.style.backgroundImage = `url(${scenes[type]})`;
}
  scene.style.backgroundImage = `url(${scenes[type]})`;
}
const audio = document.getElementById("audio");

function playSound(type) {
  const sounds = {
    rain: "assets/sounds/rain.mp3",
    cafe: "assets/sounds/cafe.mp3",
    fire: "assets/sounds/fire.mp3"
  };

  audio.src = sounds[type];
  audio.play();
}

function stopSound() {
  audio.pause();
}
function changeScene(type) {
  const scene = document.getElementById("scene");

  const scenes = {
    day: "assets/images/room_day.jpg",
    night: "assets/images/room_night.jpg",
    rain: "assets/images/rain_window.jpg",
    library: "assets/images/library.jpg"
  };

  scene.style.backgroundImage = `url(${scenes[type]})`;
}
