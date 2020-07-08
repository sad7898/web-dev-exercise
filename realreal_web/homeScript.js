
var main = document.querySelector(".main div");
var playButton = document.querySelector(".goPlay button");
var outer = document.querySelector(".outer");
var inner = document.querySelector(".inner");

function displayMain(){
	var height = $("body").width();
	var loadOuter = anime({
		targets: outer,
		easing: "easeInSine",
		rotate: 270,
		borderRadius: ["50","250"],
		borderWidth: ["20","40"],
		scale: 1.5,
		duration: 1000,
		direction: "alternate",
		loop: true
	})
	var loadInner = anime({
		targets: inner,
		easing: "easeInSine",
		rotate: 270,
		borderRadius: ["25","125"],
		borderWidth: ["20","40"],
		scale: 1.5,
		duration: 1000,
		direction: "alternate",
		loop: true
	})


	
}
displayMain();
$(document).ready(function(){
	setTimeout(function(){


		$(".still-load").remove();
		$(".load").toggleClass("load");
		var mainSlideDown = anime({
			targets: main,
			translateY: 70,
			opacity: ["0","1"],
			easing: "linear"
		});
		var play = anime({
			targets: playButton,
			opacity:["0","1"],
			delay: 500,
			easing: "linear",
			translateY: 20
		});
	},500);
})

