var canvas = document.getElementById("someCanvas");
var context = canvas.getContext("2d");
var size = 50;
var x = 0;
var y = 0;
var red = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var destination_red = Math.floor(Math.random() * 256);
var destination_green = Math.floor(Math.random() * 256);
var destination_blue = Math.floor(Math.random() * 256);

var old_height = window.innerWidth;
var old_height = window.innerHeight;

const cool_sunglasses = document.getElementById("cool_sunglasses");
const phrases = ["oh yeah", "woo buddy", "wew lad", "totally unbogus!", "catch you on the flip side!",
				"see you later, alligator"];
const phrase_zone = document.getElementById("text");

function clear(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var canvasMargin = 500
function conform_canvas(){
	if (window.innerWidth  - canvasMargin != context.canvas.width || 
		window.innerHeight  - canvasMargin != context.canvas.height) {
		// var temp = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
		console.log("activated! (why?)");
		context.canvas.width = window.innerWidth - canvasMargin;
		context.canvas.height = window.innerHeight - canvasMargin;
		// context.putImageData(temp, 0, 0);
	}
}

function draw_him() {
	let x_size = size * Math.random();
	let y_size = size * Math.random();
	context.drawImage(	cool_sunglasses,
						Math.random() * canvas.width - x_size,
						Math.random() * canvas.height - y_size,
						size * Math.random(),
						size * Math.random());
}
function new_phrase() {
	var phrase_number = Math.floor(Math.random() * 3);
	phrase_zone.innerHTML = phrases[phrase_number];
	
}

function smoothRainbow(){
	blue += Math.sign(destination_blue - blue);
	red += Math.sign(destination_red - red);
	green += Math.sign(destination_green - green);
	if (red == destination_red && blue == destination_blue && green == destination_green) {
		destination_red = Math.floor(Math.random() * 256);
		destination_green = Math.floor(Math.random() * 256);
		destination_blue = Math.floor(Math.random() * 256);
	}
	phrase_zone.style.color = `rgb(${red}, ${green}, ${blue})`;
}

var boing_sound = new Audio("boing.wav");

function boing() {
	boing_sound.load();
	boing_sound.playbackRate = 0.5;
	boing_sound.play();
}

function spazzRainbow() {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	// var rgb_string = "rgb(" + red + ", " + green + ", " + blue + ")";
	phrase_zone.style.color = `rgb(${red}, ${green}, ${blue})`;
}

document.addEventListener('keydown', logKey);
function logKey(some_event) {
	console.log(`${some_event.code}`);
}

document.addEventListener('keydown', sound_effects);
function sound_effects(some_event) {
	if (String(some_event.code) == "KeyB") {
		boing();
	}
}

window.onload = function() {
	setInterval(draw_him, 10);
	new_phrase();
	setInterval(new_phrase, 1000);
	setInterval(smoothRainbow, 5);
	// setInterval(conform_canvas, 10);
}

/*
context.beginPath();
context.strokeStyle = "green";
context.arc(95, 50, 40, 0, 2 * Math.PI - 2);
context.stroke()
*/

console.log("whew, made it!")

/*
context.moveTo(0, 0);
context.lineTo(200, 200);
context.stroke();
console.log("helloooooo?");
*/
