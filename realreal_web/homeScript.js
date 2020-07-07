
var button = document.getElementById("getBodyHeight");
button.addEventListener("click", () => (console.log($("body").width())));


var slideRight = anime({
	targets: button,
	translateX: 200
});