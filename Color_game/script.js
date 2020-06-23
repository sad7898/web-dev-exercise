

var allSquare =document.querySelectorAll(".pallete");
var hint = document.querySelector("#hint");
var correct=  document.getElementById("correct");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var answer=0;
var answer_rgb;
var isHard= false;
var life =1;
var jumbo = document.getElementById("jumbo");
function changeJumboColor(ans){
	jumbo.style.background = ans.style.background;
	var rgb = 
}
function correctAns(){
		correct.style.display = "block";
		correct.textContent = "CORRECT!";
		allSquare.forEach(function(val){
		if (val.style.background != answer.style.background) val.style.background="transparent";
		changeJumboColor(answer);
	})
}
function showAnswer(val,indx,arr){
	if (val.style.background != answer.style.background) val.style.background="transparent";
}

function play(){ //start a game
		if (answer!=0) answer.removeEventListener("click",correctAns);
		life =1;
		allSquare.forEach(function(val){
			var rand_r = Math.floor(Math.random()*256);
			var rand_b= Math.floor(Math.random()*256);
			var rand_g= Math.floor(Math.random()*256);
			var rand_rgb = "rgb("+rand_r+","+rand_g+","+rand_b+")";
			val.style.background = rand_rgb;
		})
		answer = allSquare[Math.floor(Math.random()*allSquare.length)];
		hint.textContent = answer.style.background;
		answer.addEventListener("click",correctAns);
}
easy.addEventListener("click", function(){
	console.log("isHard is false!");
	isHard = false;
})
hard.addEventListener("click",function(){
	console.log("isHard is true!");
	isHard =true;
})
document.getElementById("newGame").addEventListener("click",function(){
		answer.removeEventListener
		play();
		correct.style.display = "none";
});

window.onload = play();



allSquare.forEach(function(val){
	val.addEventListener("click", function(){
		console.log("transparent is added");
		if (val.style.background != answer.style.background){
			val.style.background="transparent";
		if (isHard && val.style.background != answer.style.background){
				life--;
				if (life<1){
					allSquare.forEach(showAnswer);
					correct.textContent = "GAME OVER!";
					correct.style.display = "block";
					changeJumboColor(answer);
				}
		}
		}
	})
});

	








