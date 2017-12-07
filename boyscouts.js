function addSuga(elem){
	document.getElementById("textbox").classList.toggle("suga");
	
}
function addV(elem){
	document.getElementById("textbox").classList.toggle("V");
	
}
function addKookie(elem){
	document.getElementById("textbox").classList.toggle("jk");
}
function addRm(elem){
	document.getElementById("textbox").classList.toggle("rm");
}
function addJin(elem){
	document.getElementById("textbox").classList.toggle("jin");
}
function addHobi(elem){
	document.getElementById("textbox").classList.toggle("jhope");
}
function addJimin(elem){
	document.getElementById("textbox").classList.toggle("jimin");
}
function playSuga(elem){
	document.getElementById("first-love").play();
	document.getElementById("stigma").pause();
	
}
function pauseSuga(elem){
	document.getElementById("first-love").pause();
	
}
function playV(elem){
	document.getElementById("stigma").play();
	document.getElementById("first-love").pause();
	
	
}
function pauseV(elem){
	document.getElementById("stigma").pause();
}
function playKookie(elem){
	document.getElementById("begin").play();
	document.getElementById("first-love").pause();
	document.getElementById("stigma").pause();
	document.getElementById("reflection").pause();
}
function pauseKookie(elem){
	document.getElementById("begin").pause();
}
function playRm(elem){
	document.getElementById("reflection").play();
	document.getELementById("begin").pause();
	document.getElementById("first-love").pause();
	document.getElementById("stigma").pause();
}
function pauseRm(elem){
	document.getElementById("reflection").pause();
	
}
function playHobi(elem){
	document.getElementById("mama").play();
}
function pauseHobi(elem){
	document.getElementById("mama").pause();
}
