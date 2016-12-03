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