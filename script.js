const scene = document.getElementById("scene");
const audioDay = document.getElementById("audio-day");
const audioNight = document.getElementById("audio-night");

let audioUnlocked = false;

// ⭐ 一次性解鎖所有音訊（iOS 必要）
function unlockAllAudio() {
  if (audioUnlocked) return;

  [audioDay, audioNight].forEach(audio => {
    audio.muted = true;
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    }).catch(() => {});
  });

  audioUnlocked = true;
}

function stopAllAudio() {
  audioDay.pause();
  audioDay.currentTime = 0;
  audioNight.pause();
  audioNight.currentTime = 0;
}

function switchScene(type) {
  // 🔓 每次點擊都確保已解鎖（只會跑一次）
  unlockAllAudio();

  stopAllAudio();

  if (type === "day") {
    scene.style.backgroundImage = "url(day.jpg)";
    audioDay.play();
  }

  if (type === "night") {
    scene.style.backgroundImage = "url(night.jpg)";
    audioNight.play();
  }
}
