let speech = new SpeechSynthesisUtterance();

let voices = [];
let selectVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selectVoice.options[i] = new Option(voice.name, i)));
};

selectVoice.addEventListener("change", ()=>{
    speech.voice = voices[parseInt(selectVoice.value)];
});

document.querySelector(".convert-btn").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});