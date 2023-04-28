const button = document.getElementsByClassName("text-to-spech-btn")[0];
const textarea = document.getElementById("text-box");

var speaking = true;

function speak(text) {
const synth = window.speechSynthesis;

// if it didn't start and text is ok
if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }


    if (synth.speaking && speaking) {
      button.innerText = "Pause";
      synth.resume();
      speaking = false;
    
    } else {
      button.innerText = "Resume";
      synth.pause();
      speaking = true;
    }

  setInterval(() => {
    if (!synth.speaking && !speaking) {
      speaking = true;
      button.innerText = "Text to Speech";
    }
  });
};

button.addEventListener("click", ()=>{
    var text = textarea.value;
    speak(text);
    
})


