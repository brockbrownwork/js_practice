console.log("Hello, test");


const button1 = document.getElementById("button1");
button1.innerHTML = "did it find it?";
// make the sound and define it with a base64 string
let audio1 = new Audio();
const audioContext = new AudioContext(); // new (window.AudioContext || window.webkitAudioContext)();
console.log(audioContext);


//audio1.src = "boing.wav";

button1.addEventListener('click', function(){
	console.log("click");
	audio1.play()
	audio1.addEventListener('playing', function(){
		console.log("Audio 1 started playing");
	})
	audio1.addEventListener('ended', function(){
		console.log("Audio 1 ended");
	})
})

const button2 = document.getElementById('button2');
button2.addEventListener('click', playSound);
function playSound(){
	// audio1.play();
	const oscillator = audioContext.createOscillator();
	oscillator.connect(audioContext.destination);
	oscillator.type = 'sawtooth';
	oscillator.frequency.setValueAtTime(55, audioContext.currentTime);
	oscillator.frequency.setValueAtTime(82.4, audioContext.currentTime + 1);
	oscillator.start();
	setTimeout(function(){
		oscillator.stop();
	}, 2000);
}