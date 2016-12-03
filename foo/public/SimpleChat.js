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

	/* 
	 * Function that moves a block downward
	 */
	function generateBlock() {
		// creates the div block
		var block = document.createElement("div");
		block.className = "blocks";

		/* Keep track of the size of the game area */
		var gameArea = document.getElementById("game-area");
		var areaW = parseInt(window.getComputedStyle(gameArea).width)
		var areaH = parseInt(window.getComputedStyle(gameArea).height);
		block.style.left = Math.floor(Math.random() * (areaW -  50)) + "px";
		block.style.top = 0 + "px";
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
		var blockList = document.querySelectorAll(".blocks");
		if(time % 5 == 0) {
			generateBlock();
		}
		for(var i = 0; i < blockList.length; i++) {		
			blockList[i].style.top = parseInt(blockList[i].style.top) + 10 + 'px';
		}		
	}

})();