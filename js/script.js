var aud = document.createElement("audio");
aud.setAttribute("src", "/mp3/sound.mp3");
aud.loop = true;
aud.muted = true; //make it false when you want to play the sound
aud.play();
