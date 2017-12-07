function addSuga(elem){
	document.getElementById("textbox").classList.toggle("suga");
	elem.innerHTML = "Suga";
}
function addV(elem){
	document.getElementById("textbox").classList.toggle("V");
	elem.innerHTML= "V"
}
function addKookie(elem){
	document.getElementById("textbox").classList.toggle("jk");
}
function playSuga(elem){
	document.getElementById("first-love").play();
	document.getElementById("stigma").pause();	
}
function pauseSuga(elem){
	document.getElementById("first-love").pause()
}
function playV(elem){
	document.getElementById("stigma").play();
	document.getElementById("first-love").pause();
}
function pauseV(elem){
	document.getElementById("stigma").pause()
}
function playKookie(elem){
	documen.getElementById("begin").play()
	document.getElementById("stigma").pause()
	document.getElementById("first-love").pause()
}
function pauseKookie(elem){
	documen.getElementById("begin").pause()
	
}
