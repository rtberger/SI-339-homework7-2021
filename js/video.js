window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

var video = document.querySelector('.video');
var vol = true;

// play video
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	if (vol == true){
		document.querySelector("#volume").innerHTML = "100%"
		vol = false;
	}
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// slow video by 5%
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 1.05;
	console.log("New speed is" + " " + video.playbackRate);
});

// speed up video by 5%
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is" + " " + video.playbackRate);
});

// fast forward 15 seconds
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location" + " " + video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= video.duration-15){
		video.currentTime = 0;
		video.play();
		console.log("Going back to beginning");
	}
	console.log("New location" + " " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else if	(video.muted = true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider
document.querySelector('#slider').addEventListener('input', function(){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(video.volume);
});

// old school
document.querySelector('#vintage').addEventListener('click', function(){
	document.querySelector(".video").classList.add('oldSchool');
});

// original
document.querySelector('#orig').addEventListener('click', function(){
	document.querySelector(".video").classList.remove('oldSchool');
});