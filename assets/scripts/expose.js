// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const vol_slider = document.getElementById("volume");
  const audio = document.getElementsByTagName("audio")[0];
  const img_vol = document.getElementById("volume-controls")
  .getElementsByTagName("img")[0];
  const play_button = document.getElementById("expose")
  .getElementsByTagName("button")[0];
  const dropdown = document.getElementById("horn-select");
  const main_img = document.getElementsByTagName("img")[0];
  const jsConfetti = new JSConfetti();

  vol_slider.addEventListener('change', (event) => {
      if (vol_slider.value==0){
        img_vol.src="assets/icons/volume-level-0.svg"
      }else if(vol_slider.value<33){
        img_vol.src="assets/icons/volume-level-1.svg"
      }else if (vol_slider.value<67){
        img_vol.src="assets/icons/volume-level-2.svg"
      }else{
        img_vol.src="assets/icons/volume-level-3.svg"
      }
      audio.volume = vol_slider.value/100;
  });

  dropdown.addEventListener('change', (event) => {
    if(dropdown.value == "select"){
      main_img.src = "assets/images/no-image.png"
    }else if(dropdown.value == "air-horn"){
      main_img.src = "assets/images/air-horn.svg"
      audio.src = "assets/audio/air-horn.mp3"
    }else if(dropdown.value == "car-horn"){
      main_img.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
    }else if(dropdown.value == "party-horn"){
      main_img.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
    }
  });

  play_button.addEventListener('click', (event) => {
    audio.play();
    if(dropdown.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
}