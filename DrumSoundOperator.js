let currentAudio = null;
import { Drum } from "./DrumClass.js";

let clap = new Drum("clap", "sounds/clap.wav", "c");
let hihat = new Drum("hihat", "sounds/hihat.wav", "f");
let kick = new Drum("kick", "sounds/kick.wav", "d");
let openhat = new Drum("openhat", "sounds/openhat.wav", "s");
let ride = new Drum("ride", "sounds/ride.wav", "a");
let snare = new Drum("snare", "sounds/snare.wav", "w");
let tom = new Drum("tom", "sounds/tom.wav", "e");

window.addEventListener("keydown", (e) => {
  if (e.key === clap.keybinding) {
    const audio = new Audio("sounds/clap.wav");
    audio.play();
  }
  if (e.key === hihat.keybinding) {
    const audio = new Audio("sounds/hihat.wav");
    audio.play();
  }
  if (e.key === kick.keybinding) {
    const audio = new Audio("sounds/kick.wav");
    audio.play();
  }
  if (e.key === openhat.keybinding) {
    const audio = new Audio("sounds/openhat.wav");
    audio.play();
  }
  if (e.key === ride.keybinding) {
    const audio = new Audio("sounds/ride.wav");
    audio.play();
  }
  if (e.key === snare.keybinding) {
    const audio = new Audio("sounds/snare.wav");
    audio.play();
  }
  if (e.key === tom.keybinding) {
    const audio = new Audio("sounds/tom.wav");
    audio.play();
  }
});

window.addEventListener("mousedown", (MD) => {
  if (MD.target.id === clap.name) {
    const audio = new Audio("sounds/clap.wav");
    audio.play();
  }
  if (MD.target.id === hihat.name) {
    const audio = new Audio("sounds/hihat.wav");
    audio.play();
  }
  if (MD.target.id === kick.name) {
    const audio = new Audio("sounds/kick.wav");
    audio.play();
  }
  if (MD.target.id === openhat.name) {
    const audio = new Audio("sounds/openhat.wav");
    audio.play();
  }
  if (MD.target.id === ride.name) {
    const audio = new Audio("sounds/ride.wav");
    audio.play();
  }
  if (MD.target.id === snare.name) {
    const audio = new Audio("sounds/snare.wav");
    audio.play();
  }
  if (MD.target.id === tom.name) {
    const audio = new Audio("sounds/tom.wav");
    audio.play();
  }
});
