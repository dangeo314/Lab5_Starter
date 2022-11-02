// explore.js
const synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);
let voices = [];
const voiceSelect = document.getElementById("voice-select");
const img = document.getElementsByTagName("img")[0];

function init() {
  const play_button = document.getElementsByTagName("button")[0];
  const input = document.getElementById("text-to-speak")

  
  play_button.addEventListener('click', (event) => {
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    synth.speak(utterThis);
    img.src = "assets/images/smiling-open.png"
    utterThis.addEventListener('end', (event) => {
      img.src = "assets/images/smiling.png"
    });
  });
}


window.speechSynthesis.onvoiceschanged = function(){populateVoiceList()};

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}


