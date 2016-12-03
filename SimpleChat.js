/*
 * This file will dynamically create the page
 */

(function() {
	"use strict";

	var timer;
	var time = 0;

	window.onload = function() {
		startGame();
	}

	/*
	 * Have an object fall from the top of the border
	 */
	function startGame() {
		var game = border.getElementById("game-area");
		changeTime();

	} 

	function time() {
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
		document.getElementById("timer-zone").innerHTML = time++;
	}

})