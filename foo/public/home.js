(function() {
	"use strict";

	var timer;
	var time = 0;
	var timer2;
	var jumpCount = 1;
	var MAX_JUMPHEIGHT = 100;
	var switchJump = false;
	var jumping = false;

	window.onload = function() {
		animate();	
		createPlayer();		
	}

	/*
	 * Function that creates a player
	 */
	function createPlayer() {
		var player = document.createElement("div");
		player.id = "character";
		player.style.left = 0 + "px";
		player.style.top = window.innerHeight - 25 + "px";
		document.getElementById("container").appendChild(player);
		window.addEventListener("keypress", move);
	}

	/* 
	 * Moves the character 
	 *
	 * @param takes in an event
	 */
	function move(e) {
		var player = document.getElementById("character");
		var x = parseInt(player.style.left);
		var y = parseInt(player.style.top);		
		if(e.keyCode == 37)	// left
			player.style.left = x - 15 + "px";
		else if(e.keyCode == 39) // right
			player.style.left = x + 15 + "px";
		else // space bar 
			if(!jumping) {
				jumping = !jumping;
				animateJump(); 
			}
	}

	function makeDrop() {
		var block = document.createElement("div");
	 	block.className = "blocks";
	 	var w = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
	 	block.style.left = Math.random() * w + 'px';
	 	block.style.top = 0 + "px";
	 	document.body.appendChild(block);
	}

	/*
	 * Function that animates blocks
	 */
	 function rain() {
	 	if(time % 2 == 0) {
	 		makeDrop();
	 	}	 	
	 	time++;
	 	var list = document.querySelectorAll(".blocks");
	 	var maxHeight = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
	 	for(var i = 0; i < list.length; i++) {	 		
	 		if(parseInt(list[i].style.top) > maxHeight - 25) 
	 			list[i].parentNode.removeChild(list[i]);	 		
	 		else 
	 			list[i].style.top = parseInt(list[i].style.top) + 10 + "px";
	 	}
	 }

	/*	  
	 * function that animates a jump
	 */
	function animateJump() {
		if(timer2 == null) {
			timer2 = setInterval(jump, 20);			
		} else {
			clearInterval(timer);
			timer2 = null;
		}
	}

	/*
	 * Deals with animating the jump of the character
	 */
	function jump() {
		var player = document.getElementById("character");
		
		if(!switchJump && jumpCount < MAX_JUMPHEIGHT)
		{
			player.style.top = parseInt(player.style.top) - 2 + "px";
			jumpCount++;
			if(jumpCount == MAX_JUMPHEIGHT)				
				switchJump = !switchJump;
		} else {
			player.style.top = parseInt(player.style.top) + 2 + "px";
			jumpCount--;
			if(jumpCount == 0) {
				switchJump = !switchJump;
				clearInterval(timer2);
				timer2 = null;	
				jumping =  !jumping;			
			}

		} 


	}

	 function animate() {
	 	if(timer == null)
	 		timer = setInterval(rain, 50);
	 	else {
	 		clearInterval(timer);
	 		timer = null;
	 	}
	 }
})();