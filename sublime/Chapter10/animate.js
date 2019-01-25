addLoadEvent(positionMessage);
function positionMessage(){
	var elem = document.getElementsByTagName("p");
	elem.style.position = 'absolute';
	elem.style.top = '200px';
	elem.style.left = '50px';
}