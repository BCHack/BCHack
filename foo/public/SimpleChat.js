/*
 * This file will dynamically create the page
 */

(function() {
	"use strict";

	var timer = null;
	var time = 0;

	window.onload = function() {
		startGame();
	}

	/*
	 * Have an object fall from the top of the border
	 */
	function startGame() {
		var game = document.getElementById("game-area");
		timeStart();		
		moveBlock();
	} 

	/* 
	 * Function that moves a block downward
	 */
	function moveBlock() {
		// creates the div block
		var block = document.createElement("div");
		block.className = "blocks";
		block.style.left = Math.random() * 450 + "px";
		document.getElementById("game-area").appendChild(block);
	}

	function timeStart() {
		if(timer == null)
				timer = setInterval(changeTime, 1000);
		else {
			clearInterval(timer);
			timer = null;
		}
	}

	/* 
	 * Changes the time
	 */
	function changeTime() {
		document.getElementById("timerCount").innerHTML = ++time + "s";

	}

})();