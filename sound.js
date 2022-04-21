console.log("Hello, test");

var recording = false;
const recordingStatus = document.getElementById("recordingStatus");
var debug = true;


document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	
	if (debug) { console.log(`Key pressed ${name} \r\n Key code value: ${code}`); }
	
	if (code == 'KeyR') {
		if (!recording) {
			recording = true;
			recordingStatus.innerHTML = "recording armed, press spacebar to start";
		}
		else {
			recording = false;
			recordingStatus.innerHTML = "recording unarmed, press r to arm recording";
		}
	}
	else if (code == "Space" && recording) {
		recordingStatus.innerHTML = "recording started";
	}
}, false);

document.addEventListener('keyup', (event) => {
	var name = event.key;
	var code = event.code;
	
	if (debug) { console.log(`Key released ${name} \r\n Key code value: ${code}`); }
	if (code == 'Space') {
		// yeah
	}
}, false);

const button1 = document.getElementById("button1");
button1.innerHTML = "did it find it?";
// make the sound and define it with a base64 string
let audio1 = new Audio();
const audioContext = new AudioContext(); // new (window.AudioContext || window.webkitAudioContext)();
console.log(audioContext);


//audio1.src = "boing.wav";

/*
button1.addEventListener('click', function(){
	console.log("click");
	audio1.play();
	audio1.addEventListener('playing', function(){
		console.log("Audio 1 started playing");
	});
	audio1.addEventListener('ended', function(){
		console.log("Audio 1 ended");
	});
});
*/

button1.addEventListener('click', playSound);

const button2 = document.getElementById('button2');
button2.addEventListener('click', helloTest);


function playSound(){
	// audio1.play();
	const gainNode = audioContext.createGain();
	gainNode.gain.value = 0.03; // use the gain node to turn down the volume
	// gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2)
	const oscillator = audioContext.createOscillator();
	oscillator.connect(gainNode);
	gainNode.connect(audioContext.destination);
	oscillator.type = 'triangle';
	oscillator.frequency.setValueAtTime(55, audioContext.currentTime);
	oscillator.frequency.setValueAtTime(82.4, audioContext.currentTime + 1);
	oscillator.start();
	setTimeout(function(){
		oscillator.stop();
	}, 2000);
}

function helloTest(){
	let type = 'sawtooth';
	let frequency = 110;
	let duration = 1;
	// oscillate(type, frequency, 10000);
	// oscillate(type, frequency * Math.pow(2, 6/12), 10000);
	for (i = 1; i <= 10; i++) {
		oscillate(type, frequency * i, duration);
		oscillate(type, frequency * i * Math.pow(2, 7/12), duration);
	}
}

function oscillate(type, frequency, duration, gain = 0.05){
	// audio1.play();
	const gainNode = audioContext.createGain();
	gainNode.gain.value = 0.01; // use the gain node to turn down the volume
	gainNode.gain.exponentialRampToValueAtTime(gain, audioContext.currentTime + 0.05)
	gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)
	const oscillator = audioContext.createOscillator();
	oscillator.connect(gainNode);
	gainNode.connect(audioContext.destination);
	oscillator.type = type;
	oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
	oscillator.start();
	setTimeout(function(){
		oscillator.stop();
	}, duration);
}

