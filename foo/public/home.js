(function() {
	"use strict";

	var timer;
	var time = 0;

	window.onload = function() {
		animate();
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
	 	if(time % 3 == 0) {
	 		makeDrop();
	 	}	 	
	 	time++;
	 	var list = document.querySelectorAll(".blocks");
	 	for(var i = 0; i < list.length; i++) {
	 		list[i].style.top = parseInt(list[i].style.top) + 10 + "px";
	 	}
	 }

	 function animate() {
	 	if(timer == null)
	 		timer = setInterval(rain, 10);
	 	else {
	 		clearInterval(timer);
	 		timer = null;
	 	}
	 }
})();